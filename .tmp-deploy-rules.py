import base64, json, os, subprocess, sys, time, urllib.error, urllib.parse, urllib.request

TARGET_PROJECT = "treding-store-2"
RULES_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".tmp-firestore.rules")

def log(*a):
    print(*a, flush=True)

rules_text = open(RULES_PATH, encoding="utf-8").read()
log("RULES_BYTES=%d" % len(rules_text.encode()))

client_email = os.environ.get("FIREBASE_CLIENT_EMAIL", "").strip()
private_key = os.environ.get("FIREBASE_PRIVATE_KEY", "").strip().replace("\\n", "\n")
cfg_project = os.environ.get("FIREBASE_PROJECT_ID", "").strip()
log("CFG_PROJECT=%s" % (cfg_project or "?"))
log("CFG_EMAIL_SET=%s" % bool(client_email))
log("CFG_KEY_SET=%s" % (bool(private_key) and "BEGIN" in private_key))
if not client_email or "BEGIN" not in private_key:
    log("RESULT=MISSING_CREDS")
    sys.exit(0)

def b64url(b):
    return base64.urlsafe_b64encode(b).rstrip(b"=")

try:
    now = int(time.time())
    header = b64url(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    claims = b64url(json.dumps({
        "iss": client_email,
        "scope": "https://www.googleapis.com/auth/cloud-platform",
        "aud": "https://oauth2.googleapis.com/token",
        "exp": now + 3600, "iat": now,
    }).encode())
    signing_input = header + b"." + claims
    open("/tmp/sa_key.pem", "w").write(private_key)
    sig = subprocess.check_output(["openssl", "dgst", "-sha256", "-sign", "/tmp/sa_key.pem"], input=signing_input)
    jwt = (signing_input + b"." + b64url(sig)).decode()
    req = urllib.request.Request(
        "https://oauth2.googleapis.com/token",
        data=urllib.parse.urlencode({
            "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
            "assertion": jwt,
        }).encode())
    token = json.loads(urllib.request.urlopen(req).read())["access_token"]
    log("MINTED_TOKEN length=%d" % len(token))
except Exception as e:
    log("FATAL token mint failed:", type(e).__name__, str(e)[:300])
    sys.exit(0)

H = {"Authorization": "Bearer " + token, "Content-Type": "application/json; charset=utf-8"}

def call(method, url, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    r = urllib.request.Request(url, data=data, headers=H, method=method)
    try:
        resp = urllib.request.urlopen(r)
        return resp.status, resp.read().decode()
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()

st, body = call("GET", "https://firebaserules.googleapis.com/v1/projects/%s/releases" % TARGET_PROJECT)
log("PROBE GET releases -> HTTP %s" % st)
log("PROBE body: " + body[:700])

payload = {"source": {"files": [{"name": "firestore.rules", "content": rules_text}]}}
st, body = call("POST", "https://firebaserules.googleapis.com/v1/projects/%s/rulesets" % TARGET_PROJECT, payload)
log("CREATE ruleset -> HTTP %s" % st)
if st >= 400:
    log("RESULT=CREATE_FAILED body: " + body[:900])
    sys.exit(0)
ruleset_name = json.loads(body).get("name")
log("RULESET=%s" % ruleset_name)

st, body = call(
    "PATCH",
    "https://firebaserules.googleapis.com/v1/projects/%s/releases/cloud.firestore?updateMask=rulesetName" % TARGET_PROJECT,
    {"rulesetName": ruleset_name})
log("RELEASE -> HTTP %s" % st)
log("RELEASE body: " + body[:700])
log("RESULT=%s" % ("DEPLOYED" if st < 400 else "RELEASE_FAILED"))
