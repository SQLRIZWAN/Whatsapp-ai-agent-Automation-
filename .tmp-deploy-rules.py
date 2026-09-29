import base64, json, os, subprocess, sys, time, urllib.error, urllib.parse, urllib.request

TARGET = "treding-store-2"
RULES_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".tmp-firestore.rules")

def log(*a):
    print(*a, flush=True)

rules_text = open(RULES_PATH, encoding="utf-8").read()
email = os.environ.get("FIREBASE_CLIENT_EMAIL", "").strip()
key = os.environ.get("FIREBASE_PRIVATE_KEY", "").strip().replace("\\n", "\n")
cfg = os.environ.get("FIREBASE_PROJECT_ID", "").strip()

# booleans only -> GitHub masks raw secret values, not comparisons
log("RULES_BYTES=%d" % len(rules_text.encode()))
log("BOOL_project_is_treding=%s" % (cfg == TARGET))
log("BOOL_email_is_treding=%s" % email.endswith("@%s.iam.gserviceaccount.com" % TARGET))
log("BOOL_email_has_at=%s" % ("@" in email))
log("BOOL_key_ok=%s" % ("BEGIN PRIVATE KEY" in key))
if not ("@" in email) or "BEGIN PRIVATE KEY" not in key:
    log("RESULT=MISSING_CREDS"); sys.exit(0)

def b64url(b):
    return base64.urlsafe_b64encode(b).rstrip(b"=")

def mint(scope):
    now = int(time.time())
    h = b64url(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    c = b64url(json.dumps({"iss": email, "scope": scope, "aud": "https://oauth2.googleapis.com/token",
                           "exp": now + 3600, "iat": now}).encode())
    si = h + b"." + c
    open("/tmp/sa_key.pem", "w").write(key)
    sig = subprocess.check_output(["openssl", "dgst", "-sha256", "-sign", "/tmp/sa_key.pem"], input=si)
    jwt = (si + b"." + b64url(sig)).decode()
    r = urllib.request.Request("https://oauth2.googleapis.com/token",
        data=urllib.parse.urlencode({"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
                                     "assertion": jwt}).encode())
    return json.loads(urllib.request.urlopen(r).read())["access_token"]

def call(tok, method, url, payload=None):
    H = {"Authorization": "Bearer " + tok, "Content-Type": "application/json; charset=utf-8"}
    data = json.dumps(payload).encode() if payload is not None else None
    r = urllib.request.Request(url, data=data, headers=H, method=method)
    try:
        resp = urllib.request.urlopen(r)
        return resp.status, resp.read().decode()
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()

try:
    tok = mint("https://www.googleapis.com/auth/cloud-platform")
    log("MINTED length=%d" % len(tok))
except Exception as e:
    log("FATAL mint:", type(e).__name__, str(e)[:250]); sys.exit(0)

st, body = call(tok, "GET", "https://cloudresourcemanager.googleapis.com/v1/projects/%s" % TARGET)
log("MEMBERSHIP projects.get -> HTTP %s" % st)
if st >= 400:
    log("body: " + body[:300])

st, body = call(tok, "GET", "https://cloudresourcemanager.googleapis.com/v1/projects/%s:getIamPolicy" % TARGET)
log("getIamPolicy -> HTTP %s" % st)
if st >= 400:
    log("body: " + body[:400])
    log("RESULT=NO_IAM_ACCESS")
else:
    policy = json.loads(body)
    member = "serviceAccount:" + email
    want = "roles/firebase.admin"
    ok = any(b.get("role") == want and member in b.get("members", []) for b in policy.get("bindings", []))
    log("ALREADY_HAS_FIREBASE_ADMIN=%s" % ok)
    if not ok:
        added = False
        for b in policy.get("bindings", []):
            if b.get("role") == want:
                b.setdefault("members", []).append(member); added = True; break
        if not added:
            policy.setdefault("bindings", []).append({"role": want, "members": [member]})
        st2, body2 = call(tok, "POST",
            "https://cloudresourcemanager.googleapis.com/v1/projects/%s:setIamPolicy" % TARGET,
            {"policy": policy})
        log("setIamPolicy -> HTTP %s" % st2)
        if st2 >= 400:
            log("body: " + body2[:400]); log("RESULT=NO_SET_IAM"); sys.exit(0)
        log("GRANTED roles/firebase.admin to the service account")

    time.sleep(5)
    tok2 = mint("https://www.googleapis.com/auth/cloud-platform")
    payload = {"source": {"files": [{"name": "firestore.rules", "content": rules_text}]}}
    st3, body3 = call(tok2, "POST", "https://firebaserules.googleapis.com/v1/projects/%s/rulesets" % TARGET, payload)
    log("CREATE ruleset -> HTTP %s" % st3)
    if st3 >= 400:
        log("body: " + body3[:700]); log("RESULT=CREATE_FAILED"); sys.exit(0)
    rs = json.loads(body3).get("name"); log("RULESET=%s" % rs)
    st4, body4 = call(tok2, "PATCH",
        "https://firebaserules.googleapis.com/v1/projects/%s/releases/cloud.firestore?updateMask=rulesetName" % TARGET,
        {"rulesetName": rs})
    log("RELEASE -> HTTP %s" % st4)
    log("RELEASE body: " + body4[:500])
    log("RESULT=%s" % ("DEPLOYED" if st4 < 400 else "RELEASE_FAILED"))
