# Render Deploy Diagnostics

Run: 24968054102
Commit: 37cb22bfa55c469f6fb146fc9bf343b813ee3a7b
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n8km5ckfvc73erq5l0

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
  "updatedAt": "2026-04-26T22:01:37.888998Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n8km5ckfvc73erq5l0",
  "commit": {
    "id": "37cb22bfa55c469f6fb146fc9bf343b813ee3a7b",
    "message": "fix: prevent QR reconnect loops and recover from WA 405 auth failures",
    "createdAt": "2026-04-26T21:57:30Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T21:57:44.160262Z",
  "updatedAt": "2026-04-26T22:01:37.887615Z",
  "startedAt": "2026-04-26T21:57:44.109621Z",
  "finishedAt": "2026-04-26T22:01:37.887323Z"
}
```

## App logs (last 4h)
```
2026-04-26T21:50:25.27987686Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T21:50:25.359209385Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T21:52:19.398011397Z 2026-04-26 21:52:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:52:21.936704488Z 2026-04-26 21:52:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:23.310166111Z 2026-04-26 21:52:23 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:52:26.937540005Z 2026-04-26 21:52:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:26.938105738Z 2026-04-26 21:52:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:27.458570726Z 2026-04-26 21:52:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:52:31.033428501Z 2026-04-26 21:52:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:52:31.937239264Z 2026-04-26 21:52:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:35.330038735Z 2026-04-26 21:52:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:52:36.937324952Z 2026-04-26 21:52:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:39.009508126Z 2026-04-26 21:52:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:52:41.936899136Z 2026-04-26 21:52:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:43.506047847Z 2026-04-26 21:52:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:52:46.346821336Z 2026-04-26 21:52:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:52:46.346845227Z 2026-04-26 21:52:46 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:52:47.049998313Z 2026-04-26 21:52:47 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:52:47.050039814Z 2026-04-26 21:52:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:50.046993947Z 2026-04-26 21:52:50 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:52:50.047018847Z Error: Firestore timeout
2026-04-26T21:52:50.047023287Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:52:50.047027698Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:52:50.047031438Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:52:50.04713891Z 2026-04-26 21:52:50 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:52:51.654041397Z 2026-04-26 21:52:51 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:52:51.937042654Z 2026-04-26 21:52:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:55.020397701Z 2026-04-26 21:52:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:52:55.155840284Z 2026-04-26 21:52:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-26T21:52:56.937430065Z 2026-04-26 21:52:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:56.93851544Z 2026-04-26 21:52:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:52:57.030941754Z 2026-04-26 21:52:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:52:57.030964425Z 2026-04-26 21:52:57 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=515, error=Stream Errored (restart required)
2026-04-26T21:52:58.156571304Z 2026-04-26 21:52:58 [warn] [wa-auth] Failed to save creds to Firestore for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: Error: Firestore timeout
2026-04-26T21:53:01.936902872Z 2026-04-26 21:53:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:02.029908811Z 2026-04-26 21:53:02 [warn] [wa] persistSessionStatus failed Firestore timeout
2026-04-26T21:53:02.029932171Z Error: Firestore timeout
2026-04-26T21:53:02.029938631Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:174:68)
2026-04-26T21:53:02.029945061Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:53:02.029951441Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:53:02.029967212Z 2026-04-26 21:53:02 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 4000ms (attempt 3)
2026-04-26T21:53:03.456648657Z 2026-04-26 21:53:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:05.691741369Z 2026-04-26 21:53:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:06.030115311Z 2026-04-26 21:53:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T21:53:06.134889122Z 2026-04-26 21:53:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:53:06.137195885Z 2026-04-26 21:53:06 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:53:06.902981085Z 2026-04-26 21:53:06 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:53:06.904100711Z 2026-04-26 21:53:06 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:53:07.047181441Z 2026-04-26 21:53:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:10.048343069Z 2026-04-26 21:53:10 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:53:10.048367439Z Error: Firestore timeout
2026-04-26T21:53:10.048374849Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:53:10.04837939Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:53:10.04838307Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:53:10.048801469Z 2026-04-26 21:53:10 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:53:11.936952131Z 2026-04-26 21:53:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:12.978851877Z 2026-04-26 21:53:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:16.937626394Z 2026-04-26 21:53:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:17.436848337Z 2026-04-26 21:53:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:21.888037199Z 2026-04-26 21:53:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:21.936728799Z 2026-04-26 21:53:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:25.423115293Z 2026-04-26 21:53:25 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:53:26.937417269Z 2026-04-26 21:53:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:26.938153367Z 2026-04-26 21:53:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:29.987352757Z 2026-04-26 21:53:29 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:53:31.936782539Z 2026-04-26 21:53:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:33.406454119Z 2026-04-26 21:53:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:36.936558957Z 2026-04-26 21:53:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:37.75857748Z 2026-04-26 21:53:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:41.707239708Z 2026-04-26 21:53:41 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:53:41.936885917Z 2026-04-26 21:53:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:45.733412935Z 2026-04-26 21:53:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:46.938729451Z 2026-04-26 21:53:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:49.368057676Z 2026-04-26 21:53:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:51.937728508Z 2026-04-26 21:53:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:54.085957561Z 2026-04-26 21:53:54 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:53:56.937937142Z 2026-04-26 21:53:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:56.938504145Z 2026-04-26 21:53:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:53:57.387195776Z 2026-04-26 21:53:57 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:54:01.937610103Z 2026-04-26 21:54:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:02.121149751Z 2026-04-26 21:54:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:05.548084101Z 2026-04-26 21:54:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:06.936752701Z 2026-04-26 21:54:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:06.946312672Z 2026-04-26 21:54:06 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:54:06.946397044Z 2026-04-26 21:54:06 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:54:09.853036363Z 2026-04-26 21:54:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:10.248288513Z 2026-04-26 21:54:10 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:54:10.248308183Z Error: Firestore timeout
2026-04-26T21:54:10.248313203Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:54:10.248318243Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:54:10.248321994Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:54:10.248324874Z 2026-04-26 21:54:10 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:54:11.93689622Z 2026-04-26 21:54:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:13.548607194Z 2026-04-26 21:54:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:16.937294985Z 2026-04-26 21:54:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:18.021147692Z 2026-04-26 21:54:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:21.41146145Z 2026-04-26 21:54:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:21.937167707Z 2026-04-26 21:54:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:26.938530522Z 2026-04-26 21:54:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:26.938569472Z 2026-04-26 21:54:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:26.956377536Z 2026-04-26 21:54:26 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:54:26.956476838Z 2026-04-26 21:54:26 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:54:27.147133281Z 2026-04-26 21:54:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:29.535980474Z 2026-04-26 21:54:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:30.148169387Z 2026-04-26 21:54:30 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:54:30.148186357Z Error: Firestore timeout
2026-04-26T21:54:30.148192028Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:54:30.148196977Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:54:30.148201498Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:54:30.148211958Z 2026-04-26 21:54:30 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:54:31.936943737Z 2026-04-26 21:54:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:34.432576787Z 2026-04-26 21:54:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:36.936909608Z 2026-04-26 21:54:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:37.513013534Z 2026-04-26 21:54:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:41.888043965Z 2026-04-26 21:54:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:41.937463141Z 2026-04-26 21:54:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:45.506623376Z 2026-04-26 21:54:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:46.937237006Z 2026-04-26 21:54:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:47.046812218Z 2026-04-26 21:54:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:54:47.046838048Z 2026-04-26 21:54:47 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:54:49.869527484Z 2026-04-26 21:54:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:50.151695371Z 2026-04-26 21:54:50 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:54:50.151718021Z Error: Firestore timeout
2026-04-26T21:54:50.151723631Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:54:50.151728551Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:54:50.151732571Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:54:50.151736921Z 2026-04-26 21:54:50 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:54:51.937330397Z 2026-04-26 21:54:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:53.358864846Z 2026-04-26 21:54:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:54:56.937326584Z 2026-04-26 21:54:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:56.938114483Z 2026-04-26 21:54:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:54:57.889384042Z 2026-04-26 21:54:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:01.614950922Z 2026-04-26 21:55:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:01.937149137Z 2026-04-26 21:55:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:06.226123548Z 2026-04-26 21:55:06 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:55:06.937184444Z 2026-04-26 21:55:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:07.056303467Z 2026-04-26 21:55:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:55:07.056334078Z 2026-04-26 21:55:07 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:55:09.451923413Z 2026-04-26 21:55:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:10.152108287Z 2026-04-26 21:55:10 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:55:10.152130087Z Error: Firestore timeout
2026-04-26T21:55:10.152136007Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:55:10.152141737Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:55:10.152147137Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:55:10.152189789Z 2026-04-26 21:55:10 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:55:11.936590685Z 2026-04-26 21:55:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:13.647581518Z 2026-04-26 21:55:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:16.936790953Z 2026-04-26 21:55:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:17.459943469Z 2026-04-26 21:55:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:21.93695988Z 2026-04-26 21:55:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:22.031018212Z 2026-04-26 21:55:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:25.414441932Z 2026-04-26 21:55:25 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:55:26.937087735Z 2026-04-26 21:55:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:26.938329964Z 2026-04-26 21:55:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:27.06619898Z 2026-04-26 21:55:27 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:55:27.066234481Z 2026-04-26 21:55:27 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:55:30.155399734Z 2026-04-26 21:55:30 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:55:30.155417834Z Error: Firestore timeout
2026-04-26T21:55:30.155424594Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:55:30.155440145Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:55:30.155442625Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:55:30.155641039Z 2026-04-26 21:55:30 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:55:30.332982783Z 2026-04-26 21:55:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:31.937470884Z 2026-04-26 21:55:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:33.411698544Z 2026-04-26 21:55:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:36.937060675Z 2026-04-26 21:55:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:37.832214061Z 2026-04-26 21:55:37 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:55:41.424512184Z 2026-04-26 21:55:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:41.93732747Z 2026-04-26 21:55:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:45.845835228Z 2026-04-26 21:55:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:46.937279117Z 2026-04-26 21:55:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:47.075443552Z 2026-04-26 21:55:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:55:47.075482693Z 2026-04-26 21:55:47 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T21:55:51.896530549Z 2026-04-26 21:55:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:51.936906385Z 2026-04-26 21:55:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:52.076853632Z 2026-04-26 21:55:52 [warn] [wa] persistSessionStatus failed Firestore timeout
2026-04-26T21:55:52.076885912Z Error: Firestore timeout
2026-04-26T21:55:52.076890513Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:174:68)
2026-04-26T21:55:52.076894843Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:55:52.076898533Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:55:52.076956504Z 2026-04-26 21:55:52 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 8000ms (attempt 4)
2026-04-26T21:55:55.569895561Z 2026-04-26 21:55:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:55:56.936729898Z 2026-04-26 21:55:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:55:56.937424874Z 2026-04-26 21:55:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:00.07691363Z 2026-04-26 21:56:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T21:56:00.179380398Z 2026-04-26 21:56:00 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:56:00.181155199Z 2026-04-26 21:56:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:56:00.31011678Z 2026-04-26 21:56:00 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:56:00.508519582Z 2026-04-26 21:56:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:56:00.509340372Z 2026-04-26 21:56:00 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:56:01.937500321Z 2026-04-26 21:56:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:03.556754192Z 2026-04-26 21:56:03 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:56:03.556777053Z Error: Firestore timeout
2026-04-26T21:56:03.556783203Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:56:03.556788783Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:56:03.556792663Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:56:03.556803593Z 2026-04-26 21:56:03 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:56:04.980254963Z 2026-04-26 21:56:04 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:56:06.937086675Z 2026-04-26 21:56:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:09.370522023Z 2026-04-26 21:56:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:56:11.937444057Z 2026-04-26 21:56:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:12.965688119Z 2026-04-26 21:56:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:56:16.93746011Z 2026-04-26 21:56:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:17.998640425Z 2026-04-26 21:56:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:56:20.96699262Z 2026-04-26 21:56:20 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:56:21.936879848Z 2026-04-26 21:56:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:25.688883829Z 2026-04-26 21:56:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:56:26.938928625Z 2026-04-26 21:56:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:26.94043457Z 2026-04-26 21:56:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:29.167893847Z 2026-04-26 21:56:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:56:31.936538344Z 2026-04-26 21:56:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:33.700308097Z 2026-04-26 21:56:33 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:56:36.937181789Z 2026-04-26 21:56:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:36.967525033Z 2026-04-26 21:56:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:56:41.937431136Z 2026-04-26 21:56:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:42.047323679Z 2026-04-26 21:56:42 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:56:45.41843933Z 2026-04-26 21:56:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:56:46.936872356Z 2026-04-26 21:56:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:49.348551853Z 2026-04-26 21:56:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:56:51.937538055Z 2026-04-26 21:56:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:53.083794391Z 2026-04-26 21:56:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:56:56.936541677Z 2026-04-26 21:56:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:56.937168021Z 2026-04-26 21:56:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:56:57.483973802Z 2026-04-26 21:56:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:00.519088965Z 2026-04-26 21:57:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:57:00.519125285Z 2026-04-26 21:57:00 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:57:01.089908625Z 2026-04-26 21:57:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:01.938021316Z 2026-04-26 21:57:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:03.557606685Z 2026-04-26 21:57:03 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:57:03.557627365Z Error: Firestore timeout
2026-04-26T21:57:03.557632645Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:57:03.557636816Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:57:03.557639706Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:57:03.557656796Z 2026-04-26 21:57:03 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:57:05.249885496Z 2026-04-26 21:57:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:06.943331364Z 2026-04-26 21:57:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:09.135761591Z 2026-04-26 21:57:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:11.937835126Z 2026-04-26 21:57:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:13.463885777Z 2026-04-26 21:57:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:16.93720603Z 2026-04-26 21:57:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:16.984995273Z 2026-04-26 21:57:16 [info] {"method":"GET","path":"/status","status":200,"duration":"6ms","ip":"::1"}
2026-04-26T21:57:20.545819138Z 2026-04-26 21:57:20 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:57:20.545845828Z 2026-04-26 21:57:20 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:57:21.305095678Z 2026-04-26 21:57:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:21.937297983Z 2026-04-26 21:57:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:23.648195551Z 2026-04-26 21:57:23 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:57:23.648227231Z Error: Firestore timeout
2026-04-26T21:57:23.648230722Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:57:23.648233671Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:57:23.648235742Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:57:23.648238102Z 2026-04-26 21:57:23 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:57:25.059455898Z 2026-04-26 21:57:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:26.937662912Z 2026-04-26 21:57:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:26.938406279Z 2026-04-26 21:57:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:29.385690354Z 2026-04-26 21:57:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:31.937201873Z 2026-04-26 21:57:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:32.971600235Z 2026-04-26 21:57:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:36.936592713Z 2026-04-26 21:57:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:37.446343978Z 2026-04-26 21:57:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:40.553767819Z 2026-04-26 21:57:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:57:40.553791029Z 2026-04-26 21:57:40 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:57:40.944076733Z 2026-04-26 21:57:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:41.937488658Z 2026-04-26 21:57:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:43.652849169Z 2026-04-26 21:57:43 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:57:43.65286997Z Error: Firestore timeout
2026-04-26T21:57:43.65287579Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:57:43.65288048Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:57:43.65288461Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:57:43.65289881Z 2026-04-26 21:57:43 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:57:45.571652933Z 2026-04-26 21:57:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:46.937227517Z 2026-04-26 21:57:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:49.006386149Z 2026-04-26 21:57:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:57:51.936931566Z 2026-04-26 21:57:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:53.535316994Z 2026-04-26 21:57:53 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:57:56.93768173Z 2026-04-26 21:57:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:56.938357746Z 2026-04-26 21:57:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:57:57.165810127Z 2026-04-26 21:57:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:00.564741345Z 2026-04-26 21:58:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:58:00.564772896Z 2026-04-26 21:58:00 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:58:01.936752608Z 2026-04-26 21:58:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:03.579825188Z 2026-04-26 21:58:03 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:58:03.579847639Z Error: Firestore timeout
2026-04-26T21:58:03.579853019Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:58:03.579857549Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:58:03.579861999Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:58:03.580425362Z 2026-04-26 21:58:03 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:58:06.937146976Z 2026-04-26 21:58:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:09.488448585Z 2026-04-26 21:58:09 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T21:58:11.937699679Z 2026-04-26 21:58:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:16.03369852Z 2026-04-26 21:58:16 [info] {"method":"GET","path":"/calls","status":200,"duration":"102ms","ip":"::1"}
2026-04-26T21:58:16.146451578Z 2026-04-26 21:58:16 [info] {"method":"GET","path":"/messages","status":200,"duration":"192ms","ip":"::1"}
2026-04-26T21:58:16.423628346Z 2026-04-26 21:58:16 [info] Client connected: gNTtpN56EKSk5b0WAAAU
2026-04-26T21:58:16.424878295Z 2026-04-26 21:58:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:16.713539985Z 2026-04-26 21:58:16 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket gNTtpN56EKSk5b0WAAAU
2026-04-26T21:58:16.936640977Z 2026-04-26 21:58:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:17.248183281Z 2026-04-26 21:58:17 [info] Client connected: Zyr9sBSaF52VmOOIAAAW
2026-04-26T21:58:17.507866059Z 2026-04-26 21:58:17 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket Zyr9sBSaF52VmOOIAAAW
2026-04-26T21:58:17.956883296Z 2026-04-26 21:58:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:58:18.04537927Z 2026-04-26 21:58:18 [info] [keepalive] ping OK
2026-04-26T21:58:20.572580228Z 2026-04-26 21:58:20 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:58:20.572598319Z 2026-04-26 21:58:20 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:58:20.947679376Z 2026-04-26 21:58:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:21.937645343Z 2026-04-26 21:58:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:23.946890607Z 2026-04-26 21:58:23 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:58:23.946923718Z Error: Firestore timeout
2026-04-26T21:58:23.946929078Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:58:23.946934098Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:58:23.946958239Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:58:23.94701901Z 2026-04-26 21:58:23 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:58:25.262828179Z 2026-04-26 21:58:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:26.936983931Z 2026-04-26 21:58:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:26.937606646Z 2026-04-26 21:58:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:28.972740693Z 2026-04-26 21:58:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:31.936862773Z 2026-04-26 21:58:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:32.091393427Z 2026-04-26 21:58:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:33.28405231Z 2026-04-26 21:58:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:36.937045083Z 2026-04-26 21:58:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:36.941647429Z 2026-04-26 21:58:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:40.581225356Z 2026-04-26 21:58:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:58:40.581247567Z 2026-04-26 21:58:40 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T21:58:41.936755034Z 2026-04-26 21:58:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:45.247780119Z 2026-04-26 21:58:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:45.58281625Z 2026-04-26 21:58:45 [warn] [wa] persistSessionStatus failed Firestore timeout
2026-04-26T21:58:45.582838301Z Error: Firestore timeout
2026-04-26T21:58:45.582844221Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:174:68)
2026-04-26T21:58:45.582849621Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:58:45.582854311Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:58:45.582867012Z 2026-04-26 21:58:45 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 16000ms (attempt 5)
2026-04-26T21:58:46.937345595Z 2026-04-26 21:58:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:48.964559973Z 2026-04-26 21:58:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:51.937456547Z 2026-04-26 21:58:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:53.265067807Z 2026-04-26 21:58:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:56.930379555Z 2026-04-26 21:58:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:58:56.936960326Z 2026-04-26 21:58:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:58:56.937611671Z 2026-04-26 21:58:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:01.236519749Z 2026-04-26 21:59:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:59:01.583471783Z 2026-04-26 21:59:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T21:59:01.694309478Z 2026-04-26 21:59:01 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:59:01.745330875Z 2026-04-26 21:59:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:59:01.939452654Z 2026-04-26 21:59:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:02.379401455Z 2026-04-26 21:59:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T21:59:02.379426125Z 2026-04-26 21:59:02 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:59:05.458335725Z 2026-04-26 21:59:05 [warn] Failed to save QR code: Firestore timeout
2026-04-26T21:59:05.458359835Z Error: Firestore timeout
2026-04-26T21:59:05.458365036Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T21:59:05.458369656Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T21:59:05.458373356Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T21:59:05.458377126Z 2026-04-26 21:59:05 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:59:06.942322962Z 2026-04-26 21:59:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:07.20678793Z 2026-04-26 21:59:07 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T21:59:10.944528176Z 2026-04-26 21:59:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:59:11.937339071Z 2026-04-26 21:59:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:15.268572272Z 2026-04-26 21:59:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:59:16.93669518Z 2026-04-26 21:59:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:21.93732914Z 2026-04-26 21:59:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:26.936939427Z 2026-04-26 21:59:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:26.937534901Z 2026-04-26 21:59:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:31.93672583Z 2026-04-26 21:59:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:36.936772299Z 2026-04-26 21:59:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:38.705736635Z 2026-04-26 21:59:38 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:59:41.937106806Z 2026-04-26 21:59:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:46.937371973Z 2026-04-26 21:59:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:51.935543093Z 2026-04-26 21:59:51 [info] Client disconnected: gNTtpN56EKSk5b0WAAAU
2026-04-26T21:59:51.937228851Z 2026-04-26 21:59:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:52.518302721Z 2026-04-26 21:59:52 [info] Client disconnected: Zyr9sBSaF52VmOOIAAAW
2026-04-26T21:59:56.936904986Z 2026-04-26 21:59:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:59:56.937826307Z 2026-04-26 21:59:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:01.938737972Z 2026-04-26 22:00:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:02.394615578Z 2026-04-26 22:00:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:00:02.394635908Z 2026-04-26 22:00:02 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:00:03.766210997Z 2026-04-26 22:00:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:00:05.846585617Z 2026-04-26 22:00:05 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:00:05.846610258Z Error: Firestore timeout
2026-04-26T22:00:05.846616698Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:00:05.846624438Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:00:05.846630949Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:00:05.846662339Z 2026-04-26 22:00:05 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:00:06.936841353Z 2026-04-26 22:00:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:11.937149565Z 2026-04-26 22:00:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:16.179421041Z 2026-04-26 22:00:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:00:16.937193833Z 2026-04-26 22:00:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:21.937239011Z 2026-04-26 22:00:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:22.401912419Z 2026-04-26 22:00:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:00:22.402012252Z 2026-04-26 22:00:22 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:00:25.44852268Z 2026-04-26 22:00:25 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:00:25.448543601Z Error: Firestore timeout
2026-04-26T22:00:25.448548421Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:00:25.448552781Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:00:25.448556301Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:00:25.448567872Z 2026-04-26 22:00:25 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:00:26.941870856Z 2026-04-26 22:00:26 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:26.942999482Z 2026-04-26 22:00:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:31.936720408Z 2026-04-26 22:00:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:36.944117528Z 2026-04-26 22:00:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:38.927700827Z 2026-04-26 22:00:38 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:00:41.93802947Z 2026-04-26 22:00:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:42.408864799Z 2026-04-26 22:00:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:00:42.40888121Z 2026-04-26 22:00:42 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:00:45.451958823Z 2026-04-26 22:00:45 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:00:45.451973473Z Error: Firestore timeout
2026-04-26T22:00:45.451977223Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:00:45.451980923Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:00:45.451983443Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:00:45.452068825Z 2026-04-26 22:00:45 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:00:46.937098512Z 2026-04-26 22:00:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:51.936993093Z 2026-04-26 22:00:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:56.937924289Z 2026-04-26 22:00:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:00:56.938478231Z 2026-04-26 22:00:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:01.937240428Z 2026-04-26 22:01:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:02.417216937Z 2026-04-26 22:01:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:01:02.41735658Z 2026-04-26 22:01:02 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:01:03.484167362Z 2026-04-26 22:01:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:01:05.432908586Z 2026-04-26 22:01:05 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:01:05.432926226Z Error: Firestore timeout
2026-04-26T22:01:05.432931746Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:01:05.432936357Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:01:05.432940757Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:01:05.432944867Z 2026-04-26 22:01:05 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:01:06.846348501Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T22:01:06.908507264Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T22:01:06.965804399Z 2026-04-26 22:01:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:11.93667345Z 2026-04-26 22:01:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:16.94153356Z 2026-04-26 22:01:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:21.428700377Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T22:01:21.936980066Z 2026-04-26 22:01:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:22.423065115Z 2026-04-26 22:01:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:01:22.423095015Z 2026-04-26 22:01:22 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:01:22.536102642Z 
2026-04-26T22:01:22.536130354Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T22:01:22.536136665Z > node dist/index.js
2026-04-26T22:01:22.536139945Z 
2026-04-26T22:01:24.226974677Z 2026-04-26 22:01:24 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:01:25.445786917Z 2026-04-26 22:01:25 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:01:25.445810737Z Error: Firestore timeout
2026-04-26T22:01:25.445816948Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:01:25.445821448Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:01:25.445825228Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:01:25.445843678Z 2026-04-26 22:01:25 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:01:26.936993637Z 2026-04-26 22:01:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:26.937632362Z 2026-04-26 22:01:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:27.624675819Z 2026-04-26 22:01:27 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T22:01:28.9274322Z 2026-04-26 22:01:28 [info] Firestore initialized successfully
2026-04-26T22:01:29.030259511Z 2026-04-26 22:01:29 [info] ✅ Server running on http://localhost:10000
2026-04-26T22:01:29.03103124Z 2026-04-26 22:01:29 [info] Environment: production
2026-04-26T22:01:29.032632862Z 2026-04-26 22:01:29 [info] API URL: http://localhost:5000
2026-04-26T22:01:29.054834284Z 2026-04-26 22:01:29 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T22:01:29.285170107Z 2026-04-26 22:01:29 [error] Route / not found
2026-04-26T22:01:29.287260149Z Error: Route / not found
2026-04-26T22:01:29.2872665Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T22:01:29.287483054Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:01:29.287489414Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:01:29.287517096Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:01:29.287521906Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T22:01:29.287526026Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T22:01:29.287530787Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T22:01:29.287535557Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:01:29.287540057Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:01:29.287544787Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:01:29.287567419Z 2026-04-26 22:01:29 [info] {"method":"HEAD","path":"/","status":404,"duration":"6ms","ip":"::1"}
2026-04-26T22:01:31.937876969Z 2026-04-26 22:01:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:36.936303276Z 2026-04-26 22:01:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:37.242590708Z 2026-04-26 22:01:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:01:37.24513607Z 2026-04-26 22:01:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:01:37.419606922Z 2026-04-26 22:01:37 [info] Client disconnected: VPOIJOaqtOUf0A_-AAAS
2026-04-26T22:01:37.420319818Z 2026-04-26 22:01:37 [info] Client disconnected: Ithsm9LOJReZDEzhAAAQ
2026-04-26T22:01:38.095885484Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T22:01:38.232843039Z 2026-04-26 22:01:38 [error] Route / not found
2026-04-26T22:01:38.23286671Z Error: Route / not found
2026-04-26T22:01:38.232872991Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T22:01:38.232877961Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:01:38.232883471Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:01:38.232889622Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:01:38.232892842Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T22:01:38.232895842Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T22:01:38.232898923Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T22:01:38.232901913Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:01:38.232914964Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:01:38.232918644Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:01:38.233742406Z 2026-04-26 22:01:38 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T22:01:38.235941822Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:01:38.2388924Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:01:38.242292668Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:01:38.245190654Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T22:01:38.247731373Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:01:38.250756262Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:01:41.938133472Z 2026-04-26 22:01:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:42.248690819Z 2026-04-26 22:01:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:01:42.431805924Z 2026-04-26 22:01:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T22:01:42.431998599Z 2026-04-26 22:01:42 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T22:01:46.936770786Z 2026-04-26 22:01:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:47.245460142Z 2026-04-26 22:01:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:01:47.433882897Z 2026-04-26 22:01:47 [warn] [wa] persistSessionStatus failed Firestore timeout
2026-04-26T22:01:47.433903738Z Error: Firestore timeout
2026-04-26T22:01:47.433909428Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:174:68)
2026-04-26T22:01:47.433915188Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:01:47.433919618Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:01:47.434035941Z 2026-04-26 22:01:47 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 6)
2026-04-26T22:01:49.320992596Z 2026-04-26 22:01:49 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T22:01:49.840493161Z 2026-04-26 22:01:49 [info] Client connected: SS4Y6itIEgs5T9xqAAAB
2026-04-26T22:01:50.187982194Z 2026-04-26 22:01:50 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket SS4Y6itIEgs5T9xqAAAB
```
