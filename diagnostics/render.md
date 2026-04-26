# Render Deploy Diagnostics

Run: 24966583977
Commit: 830ca9457fc25130cb5814026fd54210a59c2cb7
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n7hgsvikkc73b4p710

## Service details
```json
{
  "autoDeploy": "no",
  "autoDeployTrigger": "off",
  "branch": "main",
  "createdAt": "2026-04-22T22:29:14.050587Z",
  "dashboardUrl": "https://dashboard.render.com/web/srv-d7kkne0sfn5c73b9t5cg",
  "id": "srv-d7kkne0sfn5c73b9t5cg",
  "name": "whatsapp-ai-backend",
  "notifyOnFail": "default",
  "ownerId": "tea-d7kie477f7vs73athnfg",
  "repo": "https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-",
  "rootDir": "backend",
  "serviceDetails": {
    "buildPlan": "starter",
    "cache": {
      "profile": "no-cache"
    },
    "env": "node",
    "envSpecificDetails": {
      "buildCommand": "npm install --include=dev && npm run build",
      "startCommand": "npm start"
    },
    "healthCheckPath": "/health",
    "ipAllowList": [
      {
        "cidrBlock": "0.0.0.0/0",
        "description": "everywhere"
      }
    ],
    "maintenanceMode": {
      "enabled": false,
      "uri": ""
    },
    "numInstances": 1,
    "openPorts": null,
    "plan": "free",
    "previews": {
      "generation": "off"
    },
    "pullRequestPreviewsEnabled": "no",
    "region": "oregon",
    "runtime": "node",
    "sshAddress": "srv-d7kkne0sfn5c73b9t5cg@ssh.oregon.render.com",
    "url": "https://whatsapp-ai-backend-8ylf.onrender.com"
  },
  "slug": "whatsapp-ai-backend-8ylf",
  "suspended": "not_suspended",
  "suspenders": [],
  "type": "web_service",
  "updatedAt": "2026-04-26T20:44:51.997796Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n7hgsvikkc73b4p710",
  "commit": {
    "id": "830ca9457fc25130cb5814026fd54210a59c2cb7",
    "message": "fix: implement memory-first auth state fallback for Firestore failures - QR generation now works even when Firestore is quota-exhausted",
    "createdAt": "2026-04-26T20:42:18Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T20:42:43.293742Z",
  "updatedAt": "2026-04-26T20:44:51.995931Z",
  "startedAt": "2026-04-26T20:42:43.251579Z",
  "finishedAt": "2026-04-26T20:44:51.9957Z"
}
```

## App logs (last 4h)
```
2026-04-26T20:37:17.366026514Z 2026-04-26 20:37:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:22.053948949Z 2026-04-26 20:37:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:22.364985837Z 2026-04-26 20:37:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:27.364687448Z 2026-04-26 20:37:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:32.365653463Z 2026-04-26 20:37:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:37.365063323Z 2026-04-26 20:37:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:42.364518502Z 2026-04-26 20:37:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:47.364899356Z 2026-04-26 20:37:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:52.053538386Z 2026-04-26 20:37:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:52.364654602Z 2026-04-26 20:37:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:37:57.369478577Z 2026-04-26 20:37:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:02.364866675Z 2026-04-26 20:38:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:07.365254982Z 2026-04-26 20:38:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:09.189104574Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T20:38:09.32267991Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T20:38:12.364575731Z 2026-04-26 20:38:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:17.36495232Z 2026-04-26 20:38:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:22.05508357Z 2026-04-26 20:38:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:22.387736737Z 2026-04-26 20:38:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:27.364720938Z 2026-04-26 20:38:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:32.365085612Z 2026-04-26 20:38:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:37.365078188Z 2026-04-26 20:38:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:42.365649131Z 2026-04-26 20:38:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:47.365434124Z 2026-04-26 20:38:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:52.053105486Z 2026-04-26 20:38:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:52.364676674Z 2026-04-26 20:38:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:57.365094288Z 2026-04-26 20:38:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:38:57.609317617Z 2026-04-26 20:38:57 [info] Client connected: 0eR7fZlZ5KmCijBPAAAB
2026-04-26T20:38:57.952081213Z 2026-04-26 20:38:57 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 0eR7fZlZ5KmCijBPAAAB
2026-04-26T20:38:58.528752315Z 2026-04-26 20:38:58 [info] Client connected: LmWBwcckBYmYBt3rAAAD
2026-04-26T20:38:59.151128832Z 2026-04-26 20:38:59 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket LmWBwcckBYmYBt3rAAAD
2026-04-26T20:39:00.368701429Z 2026-04-26 20:39:00 [info] Client disconnected: 0eR7fZlZ5KmCijBPAAAB
2026-04-26T20:39:00.370857819Z 2026-04-26 20:39:00 [info] Client disconnected: LmWBwcckBYmYBt3rAAAD
2026-04-26T20:39:02.365591316Z 2026-04-26 20:39:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:02.413908163Z 2026-04-26 20:39:02 [info] Client connected: 5wx1sVHFLHCwLxj7AAAF
2026-04-26T20:39:02.701108853Z 2026-04-26 20:39:02 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 5wx1sVHFLHCwLxj7AAAF
2026-04-26T20:39:03.237612381Z 2026-04-26 20:39:03 [info] Client connected: h5aHhSHHdEUmEedxAAAH
2026-04-26T20:39:03.557505089Z 2026-04-26 20:39:03 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket h5aHhSHHdEUmEedxAAAH
2026-04-26T20:39:04.864839303Z 2026-04-26 20:39:04 [info] {"method":"GET","path":"/calls","status":200,"duration":"363ms","ip":"::1"}
2026-04-26T20:39:05.486168822Z 2026-04-26 20:39:05 [info] {"method":"GET","path":"/messages","status":200,"duration":"320ms","ip":"::1"}
2026-04-26T20:39:06.505824923Z 2026-04-26 20:39:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:39:07.373380086Z 2026-04-26 20:39:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:10.36320018Z 2026-04-26 20:39:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T20:39:10.654912664Z 2026-04-26 20:39:10 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:39:10.755317242Z 2026-04-26 20:39:10 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:39:10.755557109Z 2026-04-26 20:39:10 [info] {"method":"POST","path":"/connect","status":200,"duration":"626ms","ip":"::1"}
2026-04-26T20:39:12.364881119Z 2026-04-26 20:39:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:15.697271286Z 2026-04-26 20:39:15 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:39:15.697363938Z 2026-04-26 20:39:15 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:39:15.698585082Z 2026-04-26 20:39:15 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 2000ms (attempt 2)
2026-04-26T20:39:17.365108114Z 2026-04-26 20:39:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:17.698967096Z 2026-04-26 20:39:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T20:39:17.852393551Z 2026-04-26 20:39:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:39:17.855005903Z 2026-04-26 20:39:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:39:18.780483318Z 2026-04-26 20:39:18 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:39:20.939452259Z 2026-04-26 20:39:20 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:39:20.939517211Z 2026-04-26 20:39:20 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:39:20.940055175Z 2026-04-26 20:39:20 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 4000ms (attempt 3)
2026-04-26T20:39:21.46037877Z 2026-04-26 20:39:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:39:22.053890905Z 2026-04-26 20:39:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:22.379410267Z 2026-04-26 20:39:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:22.851098746Z 2026-04-26 20:39:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:39:24.940932218Z 2026-04-26 20:39:24 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T20:39:25.059762133Z 2026-04-26 20:39:25 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:39:25.15029742Z 2026-04-26 20:39:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:39:27.365075975Z 2026-04-26 20:39:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:29.0534663Z 2026-04-26 20:39:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:39:30.022887722Z 2026-04-26 20:39:30 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:39:30.023019076Z 2026-04-26 20:39:30 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:39:30.023436758Z 2026-04-26 20:39:30 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 8000ms (attempt 4)
2026-04-26T20:39:32.36512925Z 2026-04-26 20:39:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:36.072354779Z 2026-04-26 20:39:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:39:37.365544397Z 2026-04-26 20:39:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:37.992208724Z 2026-04-26 20:39:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:39:38.023947876Z 2026-04-26 20:39:38 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T20:39:38.137273319Z 2026-04-26 20:39:38 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:39:38.150292047Z 2026-04-26 20:39:38 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:39:40.592900363Z 2026-04-26 20:39:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:39:42.364772193Z 2026-04-26 20:39:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:43.375880771Z 2026-04-26 20:39:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:39:43.375902272Z 2026-04-26 20:39:43 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:39:43.375907162Z 2026-04-26 20:39:43 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 16000ms (attempt 5)
2026-04-26T20:39:47.368964826Z 2026-04-26 20:39:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:52.053014246Z 2026-04-26 20:39:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:52.250132722Z 2026-04-26 20:39:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:39:52.36510307Z 2026-04-26 20:39:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:57.364918797Z 2026-04-26 20:39:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:39:59.375676961Z 2026-04-26 20:39:59 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T20:39:59.490887786Z 2026-04-26 20:39:59 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:39:59.493893459Z 2026-04-26 20:39:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:40:02.365772373Z 2026-04-26 20:40:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:03.158807611Z 2026-04-26 20:40:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:03.258042758Z 2026-04-26 20:40:03 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:40:03.258083909Z 2026-04-26 20:40:03 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:40:03.258586753Z 2026-04-26 20:40:03 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 6)
2026-04-26T20:40:03.855363269Z 2026-04-26 20:40:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:04.738924655Z 2026-04-26 20:40:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:04.923309271Z 2026-04-26 20:40:04 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T20:40:05.182867452Z 2026-04-26 20:40:05 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:40:05.248577838Z 2026-04-26 20:40:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:40:05.248747242Z 2026-04-26 20:40:05 [info] {"method":"POST","path":"/connect","status":200,"duration":"657ms","ip":"::1"}
2026-04-26T20:40:05.290223772Z 2026-04-26 20:40:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:07.00661798Z 2026-04-26 20:40:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:40:07.006644081Z 2026-04-26 20:40:07 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:40:07.006647891Z 2026-04-26 20:40:07 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 2000ms (attempt 2)
2026-04-26T20:40:07.365370007Z 2026-04-26 20:40:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:09.006352093Z 2026-04-26 20:40:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T20:40:09.112403997Z 2026-04-26 20:40:09 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:40:09.114750431Z 2026-04-26 20:40:09 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:40:10.584477042Z 2026-04-26 20:40:10 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:40:10.584580075Z 2026-04-26 20:40:10 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:40:10.584917404Z 2026-04-26 20:40:10 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 4000ms (attempt 3)
2026-04-26T20:40:12.366891125Z 2026-04-26 20:40:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:12.817880286Z 2026-04-26 20:40:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:14.589634326Z 2026-04-26 20:40:14 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T20:40:14.702019874Z 2026-04-26 20:40:14 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:40:14.704312667Z 2026-04-26 20:40:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:40:15.667298625Z 2026-04-26 20:40:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:17.364578579Z 2026-04-26 20:40:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:20.551212775Z 2026-04-26 20:40:20 [warn] [wa] persistSessionStatus failed Firestore timeout
2026-04-26T20:40:20.551239165Z Error: Firestore timeout
2026-04-26T20:40:20.551245575Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:173:68)
2026-04-26T20:40:20.551251456Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T20:40:20.551256206Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T20:40:20.55178291Z 2026-04-26 20:40:20 [info] {"method":"POST","path":"/disconnect","status":200,"duration":"5005ms","ip":"::1"}
2026-04-26T20:40:20.939326558Z 2026-04-26 20:40:20 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:40:21.860784676Z 2026-04-26 20:40:21 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T20:40:22.255901753Z 2026-04-26 20:40:22 [info] {"method":"GET","path":"/health","status":200,"duration":"77ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:22.350911323Z 2026-04-26 20:40:22 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:40:22.359752886Z 2026-04-26 20:40:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:40:22.361842023Z 2026-04-26 20:40:22 [info] {"method":"POST","path":"/connect","status":200,"duration":"814ms","ip":"::1"}
2026-04-26T20:40:22.450077438Z 2026-04-26 20:40:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:26.5781022Z 2026-04-26 20:40:26 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:40:26.578143662Z 2026-04-26 20:40:26 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:40:26.578607884Z 2026-04-26 20:40:26 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 2000ms (attempt 2)
2026-04-26T20:40:27.365530486Z 2026-04-26 20:40:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:27.591458574Z 2026-04-26 20:40:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:28.579288036Z 2026-04-26 20:40:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T20:40:28.678340317Z 2026-04-26 20:40:28 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:40:28.68096038Z 2026-04-26 20:40:28 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:40:31.149566638Z 2026-04-26 20:40:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:31.534007261Z 2026-04-26 20:40:31 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:40:31.534040322Z 2026-04-26 20:40:31 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:40:31.534441353Z 2026-04-26 20:40:31 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 4000ms (attempt 3)
2026-04-26T20:40:32.364416798Z 2026-04-26 20:40:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:33.258750651Z 2026-04-26 20:40:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T20:40:33.356871218Z 2026-04-26 20:40:33 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:40:33.450732587Z 2026-04-26 20:40:33 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:40:34.989936899Z 2026-04-26 20:40:34 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:40:34.98996675Z 2026-04-26 20:40:34 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:40:34.98997369Z 2026-04-26 20:40:34 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 7)
2026-04-26T20:40:35.537950287Z 2026-04-26 20:40:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T20:40:35.647148017Z 2026-04-26 20:40:35 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:40:35.64907514Z 2026-04-26 20:40:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:40:36.379032247Z 2026-04-26 20:40:36 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:40:36.379061058Z 2026-04-26 20:40:36 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:40:36.379599813Z 2026-04-26 20:40:36 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 8000ms (attempt 4)
2026-04-26T20:40:37.114895526Z 2026-04-26 20:40:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:37.366430548Z 2026-04-26 20:40:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:40.100581644Z 2026-04-26 20:40:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:42.365756525Z 2026-04-26 20:40:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:44.38067269Z 2026-04-26 20:40:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T20:40:44.549113898Z 2026-04-26 20:40:44 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:40:44.553778336Z 2026-04-26 20:40:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:40:44.559128703Z 2026-04-26 20:40:44 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T20:40:46.077018821Z 2026-04-26 20:40:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:40:46.077057152Z 2026-04-26 20:40:46 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:40:46.077472393Z 2026-04-26 20:40:46 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 16000ms (attempt 5)
2026-04-26T20:40:47.365699331Z 2026-04-26 20:40:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:51.746581678Z 2026-04-26 20:40:51 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:40:52.053427439Z 2026-04-26 20:40:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:52.364999971Z 2026-04-26 20:40:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:40:55.220437653Z 2026-04-26 20:40:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:40:57.364937749Z 2026-04-26 20:40:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:00.007860482Z 2026-04-26 20:41:00 [info] {"method":"GET","path":"/status","status":200,"duration":"9ms","ip":"::1"}
2026-04-26T20:41:02.080897771Z 2026-04-26 20:41:02 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T20:41:02.259649149Z 2026-04-26 20:41:02 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:41:02.348303758Z 2026-04-26 20:41:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:41:02.364877788Z 2026-04-26 20:41:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:03.113129112Z 2026-04-26 20:41:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:41:03.546579984Z 2026-04-26 20:41:03 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:41:03.546621076Z 2026-04-26 20:41:03 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:41:03.546990116Z 2026-04-26 20:41:03 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 6)
2026-04-26T20:41:04.988733135Z 2026-04-26 20:41:04 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T20:41:05.085870729Z 2026-04-26 20:41:05 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:41:05.088124582Z 2026-04-26 20:41:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:41:05.861526373Z 2026-04-26 20:41:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:41:05.861599286Z 2026-04-26 20:41:05 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:41:05.861999207Z 2026-04-26 20:41:05 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 8)
2026-04-26T20:41:07.364583763Z 2026-04-26 20:41:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:09.065021608Z 2026-04-26 20:41:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:41:12.364486645Z 2026-04-26 20:41:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:12.645931222Z 2026-04-26 20:41:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:41:17.365432806Z 2026-04-26 20:41:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:22.052842189Z 2026-04-26 20:41:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:22.365311166Z 2026-04-26 20:41:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:27.364702223Z 2026-04-26 20:41:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:27.966020652Z 2026-04-26 20:41:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:41:29.932711542Z 2026-04-26 20:41:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:41:31.592036446Z 2026-04-26 20:41:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:41:32.365279603Z 2026-04-26 20:41:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:33.548524273Z 2026-04-26 20:41:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T20:41:33.658944526Z 2026-04-26 20:41:33 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:41:33.661035494Z 2026-04-26 20:41:33 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:41:34.26409146Z 2026-04-26 20:41:34 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:41:34.264309076Z 2026-04-26 20:41:34 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:41:34.264720698Z 2026-04-26 20:41:34 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 7)
2026-04-26T20:41:34.507624115Z 2026-04-26 20:41:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:41:35.863461512Z 2026-04-26 20:41:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T20:41:35.980682073Z 2026-04-26 20:41:35 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:41:35.983256245Z 2026-04-26 20:41:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:41:37.127887143Z 2026-04-26 20:41:37 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:41:37.127921504Z 2026-04-26 20:41:37 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:41:37.128315765Z 2026-04-26 20:41:37 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 9)
2026-04-26T20:41:37.364549457Z 2026-04-26 20:41:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:42.366545797Z 2026-04-26 20:41:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:47.36471554Z 2026-04-26 20:41:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:52.053259456Z 2026-04-26 20:41:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:52.365179387Z 2026-04-26 20:41:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:55.757450608Z 2026-04-26 20:41:55 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:41:56.644197963Z 2026-04-26 20:41:56 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:41:57.365052557Z 2026-04-26 20:41:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:41:58.959447851Z 2026-04-26 20:41:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:41:59.778094568Z 2026-04-26 20:41:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:02.364766533Z 2026-04-26 20:42:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:04.266472191Z 2026-04-26 20:42:04 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T20:42:04.376465972Z 2026-04-26 20:42:04 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:04.452371847Z 2026-04-26 20:42:04 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:07.129452521Z 2026-04-26 20:42:07 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T20:42:07.241965431Z 2026-04-26 20:42:07 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:07.244384958Z 2026-04-26 20:42:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:07.365309632Z 2026-04-26 20:42:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:09.756134926Z 2026-04-26 20:42:09 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:09.75805041Z 2026-04-26 20:42:09 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:09.75806886Z 2026-04-26 20:42:09 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 8)
2026-04-26T20:42:10.497493689Z 2026-04-26 20:42:10 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:10.49752035Z 2026-04-26 20:42:10 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:10.49753223Z 2026-04-26 20:42:10 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 10)
2026-04-26T20:42:12.368264158Z 2026-04-26 20:42:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:13.632757342Z 2026-04-26 20:42:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:17.36529021Z 2026-04-26 20:42:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:22.054214906Z 2026-04-26 20:42:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:22.364667666Z 2026-04-26 20:42:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:27.365228166Z 2026-04-26 20:42:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:30.553734495Z 2026-04-26 20:42:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:32.365710443Z 2026-04-26 20:42:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:32.717338566Z 2026-04-26 20:42:32 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T20:42:32.825150907Z 2026-04-26 20:42:32 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:32.827598155Z 2026-04-26 20:42:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:32.827718758Z 2026-04-26 20:42:32 [info] {"method":"POST","path":"/connect","status":200,"duration":"422ms","ip":"::1"}
2026-04-26T20:42:34.208873717Z 2026-04-26 20:42:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:35.128427402Z 2026-04-26 20:42:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:35.128465143Z 2026-04-26 20:42:35 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:35.128957087Z 2026-04-26 20:42:35 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 2000ms (attempt 2)
2026-04-26T20:42:36.283589273Z 2026-04-26 20:42:36 [info] Client disconnected: 5wx1sVHFLHCwLxj7AAAF
2026-04-26T20:42:37.131042358Z 2026-04-26 20:42:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T20:42:37.242235692Z 2026-04-26 20:42:37 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:37.254790671Z 2026-04-26 20:42:37 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:37.364473783Z 2026-04-26 20:42:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:38.031228097Z 2026-04-26 20:42:38 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:42:39.757396635Z 2026-04-26 20:42:39 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T20:42:39.855786654Z 2026-04-26 20:42:39 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:39.858503979Z 2026-04-26 20:42:39 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:40.497491013Z 2026-04-26 20:42:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T20:42:40.598902585Z 2026-04-26 20:42:40 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:40.649115768Z 2026-04-26 20:42:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:40.927092198Z 2026-04-26 20:42:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:40.927118349Z 2026-04-26 20:42:40 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:40.92751872Z 2026-04-26 20:42:40 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 9)
2026-04-26T20:42:42.340012158Z 2026-04-26 20:42:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:42.340051829Z 2026-04-26 20:42:42 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:42.340153372Z 2026-04-26 20:42:42 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 11)
2026-04-26T20:42:42.364806726Z 2026-04-26 20:42:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:42.628064308Z 2026-04-26 20:42:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:42.628086679Z 2026-04-26 20:42:42 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:42.628093799Z 2026-04-26 20:42:42 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 4000ms (attempt 3)
2026-04-26T20:42:45.196245011Z 2026-04-26 20:42:45 [info] {"method":"GET","path":"/calls","status":200,"duration":"116ms","ip":"::1"}
2026-04-26T20:42:45.238911384Z 2026-04-26 20:42:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:45.41470234Z 2026-04-26 20:42:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:45.462786864Z 2026-04-26 20:42:45 [info] {"method":"GET","path":"/messages","status":200,"duration":"320ms","ip":"::1"}
2026-04-26T20:42:46.114578763Z 2026-04-26 20:42:46 [info] Client connected: ZEQZvs9YDo7VzZGuAAAJ
2026-04-26T20:42:46.417194276Z 2026-04-26 20:42:46 [info] {"method":"GET","path":"/calls","status":200,"duration":"100ms","ip":"::1"}
2026-04-26T20:42:46.44870491Z 2026-04-26 20:42:46 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket ZEQZvs9YDo7VzZGuAAAJ
2026-04-26T20:42:46.628889778Z 2026-04-26 20:42:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T20:42:46.675054968Z 2026-04-26 20:42:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:46.73424726Z 2026-04-26 20:42:46 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:46.74936317Z 2026-04-26 20:42:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:47.365088808Z 2026-04-26 20:42:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:48.971887945Z 2026-04-26 20:42:48 [info] Client disconnected: ZEQZvs9YDo7VzZGuAAAJ
2026-04-26T20:42:48.971907276Z 2026-04-26 20:42:48 [info] Client disconnected: h5aHhSHHdEUmEedxAAAH
2026-04-26T20:42:50.440348506Z 2026-04-26 20:42:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:50.440380356Z 2026-04-26 20:42:50 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:50.440559481Z 2026-04-26 20:42:50 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 8000ms (attempt 4)
2026-04-26T20:42:52.053129809Z 2026-04-26 20:42:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:52.36469475Z 2026-04-26 20:42:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:52.60515268Z 2026-04-26 20:42:52 [info] Client connected: Bqhc-EH87_Cn7eQ7AAAL
2026-04-26T20:42:52.914647844Z 2026-04-26 20:42:52 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket Bqhc-EH87_Cn7eQ7AAAL
2026-04-26T20:42:53.478902815Z 2026-04-26 20:42:53 [info] Client connected: DH9qBKe9I-sytw7PAAAN
2026-04-26T20:42:53.792725379Z 2026-04-26 20:42:53 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket DH9qBKe9I-sytw7PAAAN
2026-04-26T20:42:54.449375123Z 2026-04-26 20:42:54 [info] {"method":"GET","path":"/messages","status":200,"duration":"152ms","ip":"::1"}
2026-04-26T20:42:55.893303793Z 2026-04-26 20:42:55 [info] Client disconnected: DH9qBKe9I-sytw7PAAAN
2026-04-26T20:42:55.895191865Z 2026-04-26 20:42:55 [info] Client disconnected: Bqhc-EH87_Cn7eQ7AAAL
2026-04-26T20:42:57.364724025Z 2026-04-26 20:42:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:57.523668584Z 2026-04-26 20:42:57 [info] Client connected: fWMy_wImmi6sJpMuAAAP
2026-04-26T20:42:57.862992835Z 2026-04-26 20:42:57 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket fWMy_wImmi6sJpMuAAAP
2026-04-26T20:42:57.989917756Z 2026-04-26 20:42:57 [info] {"method":"GET","path":"/messages","status":200,"duration":"166ms","ip":"::1"}
2026-04-26T20:42:58.441216193Z 2026-04-26 20:42:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T20:42:58.570311664Z 2026-04-26 20:42:58 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:58.572192197Z 2026-04-26 20:42:58 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:59.149248051Z 2026-04-26 20:42:59 [info] Client connected: dPMaM7TZ4C1qWf1BAAAR
2026-04-26T20:42:59.262285476Z 2026-04-26 20:42:59 [info] {"method":"GET","path":"/calls","status":200,"duration":"102ms","ip":"::1"}
2026-04-26T20:42:59.599538351Z 2026-04-26 20:42:59 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket dPMaM7TZ4C1qWf1BAAAR
2026-04-26T20:43:01.754702148Z 2026-04-26 20:43:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:01.754745039Z 2026-04-26 20:43:01 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:01.755182901Z 2026-04-26 20:43:01 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 16000ms (attempt 5)
2026-04-26T20:43:02.36444203Z 2026-04-26 20:43:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:07.365224095Z 2026-04-26 20:43:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:10.302165257Z 2026-04-26 20:43:10 [info] {"method":"GET","path":"/calls","status":200,"duration":"100ms","ip":"::1"}
2026-04-26T20:43:10.928326134Z 2026-04-26 20:43:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T20:43:11.025400307Z 2026-04-26 20:43:11 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:11.028152083Z 2026-04-26 20:43:11 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:12.307355384Z 2026-04-26 20:43:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:12.307430496Z 2026-04-26 20:43:12 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:12.308409374Z 2026-04-26 20:43:12 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 10)
2026-04-26T20:43:12.34578077Z 2026-04-26 20:43:12 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T20:43:12.366881815Z 2026-04-26 20:43:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:12.455938126Z 2026-04-26 20:43:12 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:12.46440255Z 2026-04-26 20:43:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:14.243023453Z 2026-04-26 20:43:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:14.243717333Z 2026-04-26 20:43:14 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:14.243732963Z 2026-04-26 20:43:14 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 12)
2026-04-26T20:43:15.372608925Z 2026-04-26 20:43:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:16.446226343Z 2026-04-26 20:43:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:17.07487048Z 2026-04-26 20:43:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:17.365914002Z 2026-04-26 20:43:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:17.755826657Z 2026-04-26 20:43:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T20:43:17.861793456Z 2026-04-26 20:43:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:17.865203341Z 2026-04-26 20:43:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:18.318867794Z 2026-04-26 20:43:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:19.39744373Z 2026-04-26 20:43:19 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:19.397465841Z 2026-04-26 20:43:19 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:19.397470221Z 2026-04-26 20:43:19 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 6)
2026-04-26T20:43:19.47891163Z 2026-04-26 20:43:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:20.011463571Z 2026-04-26 20:43:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:22.053784909Z 2026-04-26 20:43:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:22.365166195Z 2026-04-26 20:43:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:25.427209647Z 2026-04-26 20:43:25 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:43:27.364889321Z 2026-04-26 20:43:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:28.125421756Z 2026-04-26 20:43:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:32.365233175Z 2026-04-26 20:43:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:32.932251192Z 2026-04-26 20:43:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:37.36534039Z 2026-04-26 20:43:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:39.301831512Z 2026-04-26 20:43:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:41.97005092Z 2026-04-26 20:43:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:42.307989793Z 2026-04-26 20:43:42 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T20:43:42.364689166Z 2026-04-26 20:43:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:42.413806238Z 2026-04-26 20:43:42 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:42.415779803Z 2026-04-26 20:43:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:43.851833714Z 2026-04-26 20:43:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:44.243625601Z 2026-04-26 20:43:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T20:43:44.358642191Z 2026-04-26 20:43:44 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:44.360477613Z 2026-04-26 20:43:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:45.021792365Z 2026-04-26 20:43:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:45.021852087Z 2026-04-26 20:43:45 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:45.022254888Z 2026-04-26 20:43:45 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 13)
2026-04-26T20:43:46.037291622Z 2026-04-26 20:43:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:46.037334613Z 2026-04-26 20:43:46 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:46.037374204Z 2026-04-26 20:43:46 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 11)
2026-04-26T20:43:47.365629075Z 2026-04-26 20:43:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:49.399897279Z 2026-04-26 20:43:49 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T20:43:49.505099668Z 2026-04-26 20:43:49 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:49.549211951Z 2026-04-26 20:43:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:50.332874527Z 2026-04-26 20:43:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:52.053722528Z 2026-04-26 20:43:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:52.365257829Z 2026-04-26 20:43:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:54.786505506Z 2026-04-26 20:43:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:54.786535027Z 2026-04-26 20:43:54 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:54.786770324Z 2026-04-26 20:43:54 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 7)
2026-04-26T20:43:56.958275944Z 2026-04-26 20:43:56 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:43:57.364957174Z 2026-04-26 20:43:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:02.367107558Z 2026-04-26 20:44:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:02.758987307Z 2026-04-26 20:44:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:03.942853394Z 2026-04-26 20:44:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:07.365457296Z 2026-04-26 20:44:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:08.213675292Z 2026-04-26 20:44:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:12.365098318Z 2026-04-26 20:44:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:15.02266914Z 2026-04-26 20:44:15 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T20:44:15.128395243Z 2026-04-26 20:44:15 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:15.130310286Z 2026-04-26 20:44:15 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:16.038071854Z 2026-04-26 20:44:16 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T20:44:16.137867472Z 2026-04-26 20:44:16 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:16.139765765Z 2026-04-26 20:44:16 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:17.365010899Z 2026-04-26 20:44:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:18.383775407Z 2026-04-26 20:44:18 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:18.383842498Z 2026-04-26 20:44:18 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:18.384239969Z 2026-04-26 20:44:18 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 12)
2026-04-26T20:44:20.461493605Z 2026-04-26 20:44:20 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:20.461522576Z 2026-04-26 20:44:20 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:20.461549947Z 2026-04-26 20:44:20 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 14)
2026-04-26T20:44:22.053235515Z 2026-04-26 20:44:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:22.364392286Z 2026-04-26 20:44:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:24.786554699Z 2026-04-26 20:44:24 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T20:44:24.881896233Z 2026-04-26 20:44:24 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:24.883671522Z 2026-04-26 20:44:24 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:27.364483882Z 2026-04-26 20:44:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:27.707716672Z 2026-04-26 20:44:27 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:27.707740993Z 2026-04-26 20:44:27 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:27.708079552Z 2026-04-26 20:44:27 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 8)
2026-04-26T20:44:30.978104143Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T20:44:31.030409849Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T20:44:32.364677901Z 2026-04-26 20:44:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:37.364367726Z 2026-04-26 20:44:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:40.635152277Z 2026-04-26 20:44:40 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:44:42.364958276Z 2026-04-26 20:44:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:43.957459844Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T20:44:45.061654727Z 
2026-04-26T20:44:45.061674078Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T20:44:45.061679028Z > node dist/index.js
2026-04-26T20:44:45.061681328Z 
2026-04-26T20:44:45.202053198Z 2026-04-26 20:44:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:47.365370811Z 2026-04-26 20:44:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:48.384805307Z 2026-04-26 20:44:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T20:44:48.549365522Z 2026-04-26 20:44:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:48.553527707Z 2026-04-26 20:44:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:49.260189749Z 2026-04-26 20:44:49 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T20:44:49.891774146Z 2026-04-26 20:44:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:49.891844458Z 2026-04-26 20:44:49 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:49.892256099Z 2026-04-26 20:44:49 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 13)
2026-04-26T20:44:49.903682146Z 2026-04-26 20:44:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:50.262014198Z 2026-04-26 20:44:50 [info] Firestore initialized successfully
2026-04-26T20:44:50.266402791Z 2026-04-26 20:44:50 [info] ✅ Server running on http://localhost:10000
2026-04-26T20:44:50.266600896Z 2026-04-26 20:44:50 [info] Environment: production
2026-04-26T20:44:50.35448363Z 2026-04-26 20:44:50 [info] API URL: http://localhost:5000
2026-04-26T20:44:50.360068143Z 2026-04-26 20:44:50 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T20:44:50.46193392Z 2026-04-26 20:44:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 14)
2026-04-26T20:44:50.561987265Z 2026-04-26 20:44:50 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:50.563987221Z 2026-04-26 20:44:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:50.858931836Z 2026-04-26 20:44:50 [error] Route / not found
2026-04-26T20:44:50.858950296Z Error: Route / not found
2026-04-26T20:44:50.858954456Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:44:50.858958526Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:44:50.858961646Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:44:50.858964816Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:44:50.858967806Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:44:50.858970837Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:44:50.858973497Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:44:50.858980347Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:44:50.858986127Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:44:50.858988787Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:44:50.863126543Z 2026-04-26 20:44:50 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T20:44:51.405892976Z 2026-04-26 20:44:51 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:44:51.407513468Z 2026-04-26 20:44:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:44:51.591898941Z 2026-04-26 20:44:51 [info] Client disconnected: fWMy_wImmi6sJpMuAAAP
2026-04-26T20:44:51.594582636Z 2026-04-26 20:44:51 [info] Client disconnected: dPMaM7TZ4C1qWf1BAAAR
2026-04-26T20:44:52.143893139Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:44:52.150436424Z 2026-04-26 20:44:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:52.150470204Z 2026-04-26 20:44:52 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:52.150699481Z 2026-04-26 20:44:52 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 15)
2026-04-26T20:44:52.224350672Z 2026-04-26 20:44:52 [error] Route / not found
2026-04-26T20:44:52.224366373Z Error: Route / not found
2026-04-26T20:44:52.224370053Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:44:52.224373163Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:44:52.224376413Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:44:52.224379463Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:44:52.224382003Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:44:52.224384703Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:44:52.224401163Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:44:52.224404344Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:44:52.224418214Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:44:52.224421154Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:44:52.225235685Z 2026-04-26 20:44:52 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:52.226377778Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:44:52.228851914Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:44:52.233203141Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:44:52.235228795Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:44:52.237094325Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:44:52.238681348Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:44:52.365586651Z 2026-04-26 20:44:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:56.405201184Z 2026-04-26 20:44:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:44:56.814311834Z 2026-04-26 20:44:56 [info] {"method":"GET","path":"/status","status":200,"duration":"33ms","ip":"::1"}
2026-04-26T20:44:57.359138961Z 2026-04-26 20:44:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:57.365460851Z 2026-04-26 20:44:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:57.70937654Z 2026-04-26 20:44:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T20:44:57.797914966Z 2026-04-26 20:44:57 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:57.797936457Z 2026-04-26 20:44:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:57.910686689Z 2026-04-26 20:44:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:01.405807367Z 2026-04-26 20:45:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:01.407255924Z 2026-04-26 20:45:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:01.893515095Z 2026-04-26 20:45:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:02.365676081Z 2026-04-26 20:45:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:02.386747695Z 2026-04-26 20:45:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:45:02.386793156Z 2026-04-26 20:45:02 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:45:02.387055664Z 2026-04-26 20:45:02 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 9)
2026-04-26T20:45:04.266936031Z 2026-04-26 20:45:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:04.478425604Z 2026-04-26 20:45:04 [info] Client connected: E0kKI0lD8LiDlViiAAAB
2026-04-26T20:45:04.757061061Z 2026-04-26 20:45:04 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket E0kKI0lD8LiDlViiAAAB
2026-04-26T20:45:05.522149555Z 2026-04-26 20:45:05 [info] Client connected: l6K9Saiuz16i5jUfAAAD
2026-04-26T20:45:06.122556072Z 2026-04-26 20:45:06 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket l6K9Saiuz16i5jUfAAAD
2026-04-26T20:45:06.404499234Z 2026-04-26 20:45:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:07.365324075Z 2026-04-26 20:45:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
```
