# Render Deploy Diagnostics

Run: 24968455413
Commit: 7defa26a4f2430d590622372ba8d1982426b1013
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n8u83rjlhs73ac8sng

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
  "updatedAt": "2026-04-26T22:21:52.016433Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n8u83rjlhs73ac8sng",
  "commit": {
    "id": "7defa26a4f2430d590622372ba8d1982426b1013",
    "message": "fix: stabilize WA pairing auth-state persistence on Firestore",
    "createdAt": "2026-04-26T22:17:42Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T22:18:08.977362Z",
  "updatedAt": "2026-04-26T22:21:52.015176Z",
  "startedAt": "2026-04-26T22:18:08.924983Z",
  "finishedAt": "2026-04-26T22:21:52.014937Z"
}
```

## App logs (last 4h)
```
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
2026-04-26T22:01:21.936980066Z 2026-04-26 22:01:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:22.423065115Z 2026-04-26 22:01:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:01:22.423095015Z 2026-04-26 22:01:22 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:01:24.226974677Z 2026-04-26 22:01:24 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:01:25.445786917Z 2026-04-26 22:01:25 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:01:25.445810737Z Error: Firestore timeout
2026-04-26T22:01:25.445816948Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:01:25.445821448Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:01:25.445825228Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:01:25.445843678Z 2026-04-26 22:01:25 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:01:26.936993637Z 2026-04-26 22:01:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:26.937632362Z 2026-04-26 22:01:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:31.937876969Z 2026-04-26 22:01:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:36.936303276Z 2026-04-26 22:01:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:37.419606922Z 2026-04-26 22:01:37 [info] Client disconnected: VPOIJOaqtOUf0A_-AAAS
2026-04-26T22:01:37.420319818Z 2026-04-26 22:01:37 [info] Client disconnected: Ithsm9LOJReZDEzhAAAQ
2026-04-26T22:01:38.095885484Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T22:01:38.235941822Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:01:38.2388924Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:01:38.242292668Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:01:38.245190654Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T22:01:38.247731373Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:01:38.250756262Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:01:41.938133472Z 2026-04-26 22:01:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:42.431805924Z 2026-04-26 22:01:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T22:01:42.431998599Z 2026-04-26 22:01:42 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T22:01:46.936770786Z 2026-04-26 22:01:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:47.433882897Z 2026-04-26 22:01:47 [warn] [wa] persistSessionStatus failed Firestore timeout
2026-04-26T22:01:47.433903738Z Error: Firestore timeout
2026-04-26T22:01:47.433909428Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:174:68)
2026-04-26T22:01:47.433915188Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:01:47.433919618Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:01:47.434035941Z 2026-04-26 22:01:47 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 6)
2026-04-26T22:01:51.936851413Z 2026-04-26 22:01:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:01:56.937238949Z 2026-04-26 22:01:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:02:01.937479282Z 2026-04-26 22:02:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:02:06.937168864Z 2026-04-26 22:02:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:02:11.937180624Z 2026-04-26 22:02:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:02:16.936848628Z 2026-04-26 22:02:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:02:17.434734608Z 2026-04-26 22:02:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T22:02:17.537181391Z 2026-04-26 22:02:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:02:17.579374317Z 2026-04-26 22:02:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T22:02:18.221740151Z 2026-04-26 22:02:18 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:02:18.221756392Z 2026-04-26 22:02:18 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:02:21.245927464Z 2026-04-26 22:02:21 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:02:21.245956284Z Error: Firestore timeout
2026-04-26T22:02:21.245961775Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:02:21.245978635Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:02:21.245983515Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:02:21.245995116Z 2026-04-26 22:02:21 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:02:21.938869216Z 2026-04-26 22:02:21 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:02:26.936532135Z 2026-04-26 22:02:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:02:31.936770954Z 2026-04-26 22:02:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:02:36.937031925Z 2026-04-26 22:02:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T22:06:34.310581762Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T22:06:34.380298054Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T22:15:32.244125044Z 2026-04-26 22:15:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:15:32.319870749Z 2026-04-26 22:15:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:15:32.321087307Z 2026-04-26 22:15:32 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:15:33.983654872Z 2026-04-26 22:15:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:15:35.520546926Z 2026-04-26 22:15:35 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:15:35.520574198Z Error: Firestore timeout
2026-04-26T22:15:35.520579749Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:15:35.520584939Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:15:35.520589079Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:15:35.52060459Z 2026-04-26 22:15:35 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:15:37.238559671Z 2026-04-26 22:15:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:15:37.245157095Z 2026-04-26 22:15:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:15:37.461489537Z 2026-04-26 22:15:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:15:42.025045991Z 2026-04-26 22:15:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:15:42.246451948Z 2026-04-26 22:15:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:15:45.443656868Z 2026-04-26 22:15:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:15:47.244455436Z 2026-04-26 22:15:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:15:49.995496122Z 2026-04-26 22:15:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:15:52.244505241Z 2026-04-26 22:15:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:15:52.420917299Z 2026-04-26 22:15:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:15:52.420964932Z 2026-04-26 22:15:52 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:15:53.394552779Z 2026-04-26 22:15:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:15:55.532844547Z 2026-04-26 22:15:55 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:15:55.532869308Z Error: Firestore timeout
2026-04-26T22:15:55.532874539Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:15:55.532943753Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:15:55.532947173Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:15:55.532949713Z 2026-04-26 22:15:55 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:15:57.253387318Z 2026-04-26 22:15:57 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:15:58.145177212Z 2026-04-26 22:15:58 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:16:01.425414475Z 2026-04-26 22:16:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:02.244615078Z 2026-04-26 22:16:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:06.29998795Z 2026-04-26 22:16:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:07.238061115Z 2026-04-26 22:16:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:07.244014647Z 2026-04-26 22:16:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:09.606034545Z 2026-04-26 22:16:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:12.244629671Z 2026-04-26 22:16:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:12.431449827Z 2026-04-26 22:16:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:16:12.431469838Z 2026-04-26 22:16:12 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:16:13.823416846Z 2026-04-26 22:16:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:15.72054639Z 2026-04-26 22:16:15 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:16:15.720576942Z Error: Firestore timeout
2026-04-26T22:16:15.720585283Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:16:15.720592813Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:16:15.720598734Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:16:15.720622905Z 2026-04-26 22:16:15 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:16:17.245515168Z 2026-04-26 22:16:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:17.464998411Z 2026-04-26 22:16:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:22.124392837Z 2026-04-26 22:16:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:22.244928286Z 2026-04-26 22:16:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:25.58737977Z 2026-04-26 22:16:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:27.247590408Z 2026-04-26 22:16:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:29.931809696Z 2026-04-26 22:16:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:32.244950216Z 2026-04-26 22:16:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:32.439284454Z 2026-04-26 22:16:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:16:32.439315196Z 2026-04-26 22:16:32 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:16:33.568088841Z 2026-04-26 22:16:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:35.532851212Z 2026-04-26 22:16:35 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:16:35.532872973Z Error: Firestore timeout
2026-04-26T22:16:35.532879264Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:16:35.532884894Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:16:35.532889514Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:16:35.532953619Z 2026-04-26 22:16:35 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:16:37.23919745Z 2026-04-26 22:16:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:37.243980117Z 2026-04-26 22:16:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:38.139346065Z 2026-04-26 22:16:38 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:41.444389908Z 2026-04-26 22:16:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:42.244067871Z 2026-04-26 22:16:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:45.97272876Z 2026-04-26 22:16:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:47.244549647Z 2026-04-26 22:16:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:49.445263722Z 2026-04-26 22:16:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:52.244575719Z 2026-04-26 22:16:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:52.448398895Z 2026-04-26 22:16:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:16:52.448524013Z 2026-04-26 22:16:52 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:16:53.746885002Z 2026-04-26 22:16:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:16:55.522014001Z 2026-04-26 22:16:55 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:16:55.522034182Z Error: Firestore timeout
2026-04-26T22:16:55.522038633Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:16:55.522043393Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:16:55.522048334Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:16:55.522063214Z 2026-04-26 22:16:55 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:16:57.245022283Z 2026-04-26 22:16:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:16:57.578425389Z 2026-04-26 22:16:57 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T22:17:02.24463226Z 2026-04-26 22:17:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:02.476158524Z 2026-04-26 22:17:02 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:17:05.518573992Z 2026-04-26 22:17:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:17:07.237736964Z 2026-04-26 22:17:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:07.243798433Z 2026-04-26 22:17:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:09.995475703Z 2026-04-26 22:17:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:17:12.244311949Z 2026-04-26 22:17:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:12.455715621Z 2026-04-26 22:17:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T22:17:12.455744723Z 2026-04-26 22:17:12 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T22:17:17.244780488Z 2026-04-26 22:17:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:17.371266218Z 2026-04-26 22:17:17 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:17:17.45711913Z 2026-04-26 22:17:17 [warn] [wa] persistSessionStatus failed Firestore timeout
2026-04-26T22:17:17.457142721Z Error: Firestore timeout
2026-04-26T22:17:17.457148282Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:216:68)
2026-04-26T22:17:17.457153382Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:17:17.457157422Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:17:17.457250358Z 2026-04-26 22:17:17 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 8000ms (attempt 4)
2026-04-26T22:17:21.075360437Z 2026-04-26 22:17:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:17:22.244773342Z 2026-04-26 22:17:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:25.457798963Z 2026-04-26 22:17:25 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T22:17:25.576331232Z 2026-04-26 22:17:25 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:17:25.620086931Z 2026-04-26 22:17:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T22:17:25.622034586Z 2026-04-26 22:17:25 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:17:26.983349669Z 2026-04-26 22:17:26 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:17:26.983374201Z 2026-04-26 22:17:26 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:17:27.24504886Z 2026-04-26 22:17:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:30.023341039Z 2026-04-26 22:17:30 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:17:30.023373161Z Error: Firestore timeout
2026-04-26T22:17:30.023377631Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:17:30.023381872Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:17:30.023384682Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:17:30.023554773Z 2026-04-26 22:17:30 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:17:32.096990981Z 2026-04-26 22:17:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:17:32.244436977Z 2026-04-26 22:17:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:35.628448378Z 2026-04-26 22:17:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:17:37.238175887Z 2026-04-26 22:17:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:37.24383231Z 2026-04-26 22:17:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:40.332929797Z 2026-04-26 22:17:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:17:42.244481719Z 2026-04-26 22:17:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:43.600253573Z 2026-04-26 22:17:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:17:47.245422293Z 2026-04-26 22:17:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:48.348575379Z 2026-04-26 22:17:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:17:51.572230168Z 2026-04-26 22:17:51 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:17:52.244801853Z 2026-04-26 22:17:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:56.335003275Z 2026-04-26 22:17:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:17:57.244129835Z 2026-04-26 22:17:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:17:59.56987305Z 2026-04-26 22:17:59 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:18:02.24607358Z 2026-04-26 22:18:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:04.357631834Z 2026-04-26 22:18:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:07.238322639Z 2026-04-26 22:18:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:07.244662996Z 2026-04-26 22:18:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:07.550624296Z 2026-04-26 22:18:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:12.244549992Z 2026-04-26 22:18:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:12.529884057Z 2026-04-26 22:18:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:15.758750347Z 2026-04-26 22:18:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:17.245007109Z 2026-04-26 22:18:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:20.545908291Z 2026-04-26 22:18:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:22.244998923Z 2026-04-26 22:18:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:23.580175736Z 2026-04-26 22:18:23 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:18:26.991289068Z 2026-04-26 22:18:26 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:18:26.99132795Z 2026-04-26 22:18:26 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:18:27.251455707Z 2026-04-26 22:18:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:28.691675711Z 2026-04-26 22:18:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:29.7496539Z 2026-04-26 22:18:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:30.022480912Z 2026-04-26 22:18:30 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:18:30.022506864Z Error: Firestore timeout
2026-04-26T22:18:30.022513434Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:18:30.022519064Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:18:30.022524065Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:18:30.022542656Z 2026-04-26 22:18:30 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:18:31.219922222Z 2026-04-26 22:18:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:31.636109046Z 2026-04-26 22:18:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:32.005343666Z 2026-04-26 22:18:32 [info] Client connected: BVcuJr5eMjRKjNpfAAAY
2026-04-26T22:18:32.244407511Z 2026-04-26 22:18:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:32.275181486Z 2026-04-26 22:18:32 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket BVcuJr5eMjRKjNpfAAAY
2026-04-26T22:18:33.364124962Z 2026-04-26 22:18:33 [info] Client connected: fRs61EE3gH8aHBbsAAAa
2026-04-26T22:18:33.654219302Z 2026-04-26 22:18:33 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket fRs61EE3gH8aHBbsAAAa
2026-04-26T22:18:36.053257717Z 2026-04-26 22:18:36 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:18:36.206710717Z 2026-04-26 22:18:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:37.238580758Z 2026-04-26 22:18:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:37.244437614Z 2026-04-26 22:18:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:39.59441992Z 2026-04-26 22:18:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:39.912349576Z 2026-04-26 22:18:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:42.244394379Z 2026-04-26 22:18:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:44.065164185Z 2026-04-26 22:18:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:44.194895492Z 2026-04-26 22:18:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:47.001021812Z 2026-04-26 22:18:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:18:47.001051714Z 2026-04-26 22:18:47 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:18:47.419352022Z 2026-04-26 22:18:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:47.620133789Z 2026-04-26 22:18:47 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:18:47.924753981Z 2026-04-26 22:18:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:50.021028928Z 2026-04-26 22:18:50 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:18:50.021048059Z Error: Firestore timeout
2026-04-26T22:18:50.02106394Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:18:50.021070191Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:18:50.021075201Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:18:50.021126134Z 2026-04-26 22:18:50 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:18:52.058308968Z 2026-04-26 22:18:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:52.213606596Z 2026-04-26 22:18:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:52.244637367Z 2026-04-26 22:18:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:18:55.690232156Z 2026-04-26 22:18:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:55.955540364Z 2026-04-26 22:18:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:18:57.243997671Z 2026-04-26 22:18:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:00.013161202Z 2026-04-26 22:19:00 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:19:00.252924641Z 2026-04-26 22:19:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:02.245075351Z 2026-04-26 22:19:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:03.697284996Z 2026-04-26 22:19:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:03.937489803Z 2026-04-26 22:19:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:07.008858977Z 2026-04-26 22:19:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:19:07.008883799Z 2026-04-26 22:19:07 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:19:07.238501456Z 2026-04-26 22:19:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:07.244428816Z 2026-04-26 22:19:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:08.264968286Z 2026-04-26 22:19:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:08.530524399Z 2026-04-26 22:19:08 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:19:10.029087138Z 2026-04-26 22:19:10 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:19:10.029113459Z Error: Firestore timeout
2026-04-26T22:19:10.02911997Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:19:10.02912572Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:19:10.029130311Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:19:10.029160202Z 2026-04-26 22:19:10 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:19:11.614933718Z 2026-04-26 22:19:11 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:11.944964409Z 2026-04-26 22:19:11 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:12.244198364Z 2026-04-26 22:19:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:16.197918503Z 2026-04-26 22:19:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:16.218265259Z 2026-04-26 22:19:16 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:19:17.244206553Z 2026-04-26 22:19:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:19.574061761Z 2026-04-26 22:19:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:19.956423971Z 2026-04-26 22:19:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:22.244520978Z 2026-04-26 22:19:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:24.18928958Z 2026-04-26 22:19:24 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:19:24.234908738Z 2026-04-26 22:19:24 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:27.017815529Z 2026-04-26 22:19:27 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:19:27.017856751Z 2026-04-26 22:19:27 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:19:27.244353337Z 2026-04-26 22:19:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:27.585680633Z 2026-04-26 22:19:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:27.913594498Z 2026-04-26 22:19:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:30.119659177Z 2026-04-26 22:19:30 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:19:30.119684949Z Error: Firestore timeout
2026-04-26T22:19:30.119692519Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:19:30.11969918Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:19:30.11970458Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:19:30.119716961Z 2026-04-26 22:19:30 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:19:32.244477862Z 2026-04-26 22:19:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:32.792449209Z 2026-04-26 22:19:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:35.638034769Z 2026-04-26 22:19:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:37.238420725Z 2026-04-26 22:19:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:37.244761922Z 2026-04-26 22:19:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:40.171744544Z 2026-04-26 22:19:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:42.24398027Z 2026-04-26 22:19:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:43.636033265Z 2026-04-26 22:19:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:47.023975265Z 2026-04-26 22:19:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:19:47.024250623Z 2026-04-26 22:19:47 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:19:47.622055507Z 2026-04-26 22:19:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:48.049780106Z 2026-04-26 22:19:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:50.418333145Z 2026-04-26 22:19:50 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:19:50.418358757Z Error: Firestore timeout
2026-04-26T22:19:50.418364817Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:19:50.418370878Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:19:50.418375978Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:19:50.418389119Z 2026-04-26 22:19:50 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:19:51.594613242Z 2026-04-26 22:19:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:52.244745893Z 2026-04-26 22:19:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:56.132805092Z 2026-04-26 22:19:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:19:57.25835057Z 2026-04-26 22:19:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:19:59.550320163Z 2026-04-26 22:19:59 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:20:02.24517205Z 2026-04-26 22:20:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:04.039688601Z 2026-04-26 22:20:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:20:07.043019968Z 2026-04-26 22:20:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T22:20:07.04305039Z 2026-04-26 22:20:07 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T22:20:07.23765967Z 2026-04-26 22:20:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:07.243476877Z 2026-04-26 22:20:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:07.526860165Z 2026-04-26 22:20:07 [info] Client disconnected: BVcuJr5eMjRKjNpfAAAY
2026-04-26T22:20:08.434368413Z 2026-04-26 22:20:08 [info] Client disconnected: fRs61EE3gH8aHBbsAAAa
2026-04-26T22:20:12.044838695Z 2026-04-26 22:20:12 [warn] [wa] persistSessionStatus failed Firestore timeout
2026-04-26T22:20:12.044863116Z Error: Firestore timeout
2026-04-26T22:20:12.044869597Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:216:68)
2026-04-26T22:20:12.044874427Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:20:12.044877567Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:20:12.044934351Z 2026-04-26 22:20:12 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 16000ms (attempt 5)
2026-04-26T22:20:12.24586463Z 2026-04-26 22:20:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:12.59785344Z 2026-04-26 22:20:12 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T22:20:15.592221668Z 2026-04-26 22:20:15 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:20:17.246433738Z 2026-04-26 22:20:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:19.916158145Z 2026-04-26 22:20:19 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:20:22.244464825Z 2026-04-26 22:20:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:23.626104485Z 2026-04-26 22:20:23 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:20:27.249097001Z 2026-04-26 22:20:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:28.045608557Z 2026-04-26 22:20:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T22:20:28.138887356Z 2026-04-26 22:20:28 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:20:28.141086649Z 2026-04-26 22:20:28 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T22:20:28.318346245Z 2026-04-26 22:20:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:20:28.556908489Z 2026-04-26 22:20:28 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:20:28.55692932Z 2026-04-26 22:20:28 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:20:31.627763765Z 2026-04-26 22:20:31 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:20:31.627785547Z Error: Firestore timeout
2026-04-26T22:20:31.627792857Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:20:31.627797778Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:20:31.627801798Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:20:31.627805898Z 2026-04-26 22:20:31 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:20:32.246760429Z 2026-04-26 22:20:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:33.196992146Z 2026-04-26 22:20:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:20:37.237420596Z 2026-04-26 22:20:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:37.244738829Z 2026-04-26 22:20:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:37.62752859Z 2026-04-26 22:20:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:20:40.996004362Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T22:20:41.058701217Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T22:20:41.155705074Z 2026-04-26 22:20:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:20:42.244043389Z 2026-04-26 22:20:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:45.757734639Z 2026-04-26 22:20:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:20:47.244858618Z 2026-04-26 22:20:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:49.157856845Z 2026-04-26 22:20:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:20:52.245035029Z 2026-04-26 22:20:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:20:53.916257472Z 2026-04-26 22:20:53 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:20:57.155123511Z 2026-04-26 22:20:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:20:57.253422024Z 2026-04-26 22:20:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:01.916571544Z 2026-04-26 22:21:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:02.245052117Z 2026-04-26 22:21:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:05.156171403Z 2026-04-26 22:21:05 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:21:07.237927523Z 2026-04-26 22:21:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:07.243916011Z 2026-04-26 22:21:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:09.894694901Z 2026-04-26 22:21:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:12.244596664Z 2026-04-26 22:21:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:13.164663928Z 2026-04-26 22:21:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:17.244416115Z 2026-04-26 22:21:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:18.081355777Z 2026-04-26 22:21:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:21.197981521Z 2026-04-26 22:21:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:22.244689018Z 2026-04-26 22:21:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:25.596284356Z 2026-04-26 22:21:25 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:21:27.244426269Z 2026-04-26 22:21:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:28.566187627Z 2026-04-26 22:21:28 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:21:28.566212289Z 2026-04-26 22:21:28 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:21:29.197830919Z 2026-04-26 22:21:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:31.819086131Z 2026-04-26 22:21:31 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:21:31.819110103Z Error: Firestore timeout
2026-04-26T22:21:31.819116273Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:21:31.819122723Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:21:31.819127054Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:21:31.819203118Z 2026-04-26 22:21:31 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:21:32.245317757Z 2026-04-26 22:21:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:33.89504762Z 2026-04-26 22:21:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:34.793124863Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T22:21:36.174681968Z 
2026-04-26T22:21:36.174793221Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T22:21:36.174861153Z > node dist/index.js
2026-04-26T22:21:36.174864053Z 
2026-04-26T22:21:37.219827791Z 2026-04-26 22:21:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:37.238138626Z 2026-04-26 22:21:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:37.244209119Z 2026-04-26 22:21:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:41.364122861Z 2026-04-26 22:21:41 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T22:21:41.869170463Z 2026-04-26 22:21:41 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:21:42.24428464Z 2026-04-26 22:21:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:42.759484319Z 2026-04-26 22:21:42 [info] Firestore initialized successfully
2026-04-26T22:21:42.764991876Z 2026-04-26 22:21:42 [info] ✅ Server running on http://localhost:10000
2026-04-26T22:21:42.76515305Z 2026-04-26 22:21:42 [info] Environment: production
2026-04-26T22:21:42.765331495Z 2026-04-26 22:21:42 [info] API URL: http://localhost:5000
2026-04-26T22:21:42.765498549Z 2026-04-26 22:21:42 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T22:21:43.564129954Z 2026-04-26 22:21:43 [error] Route / not found
2026-04-26T22:21:43.564157145Z Error: Route / not found
2026-04-26T22:21:43.564198036Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T22:21:43.564206406Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:21:43.564212816Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:21:43.564218466Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:21:43.564223506Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T22:21:43.564228156Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T22:21:43.564233016Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T22:21:43.564238037Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:21:43.564246267Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:21:43.564251307Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:21:43.56798953Z 2026-04-26 22:21:43 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T22:21:45.154361784Z 2026-04-26 22:21:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:47.244515253Z 2026-04-26 22:21:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:48.571528604Z 2026-04-26 22:21:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:21:48.571571887Z 2026-04-26 22:21:48 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:21:49.835966204Z 2026-04-26 22:21:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:51.431036359Z 2026-04-26 22:21:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:21:51.432549157Z 2026-04-26 22:21:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:21:51.602520638Z 2026-04-26 22:21:51 [info] Client disconnected: k2vLUde4lVwTg6CdAAAW
2026-04-26T22:21:51.603453988Z 2026-04-26 22:21:51 [info] Client disconnected: Ihgfws9XQsbCK5kuAAAU
2026-04-26T22:21:51.624062392Z 2026-04-26 22:21:51 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:21:51.624087484Z Error: Firestore timeout
2026-04-26T22:21:51.624093224Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:21:51.624097924Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:21:51.624101765Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:21:51.6241814Z 2026-04-26 22:21:51 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:21:52.176081902Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T22:21:52.247800348Z 2026-04-26 22:21:52 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:52.301622348Z 2026-04-26 22:21:52 [error] Route / not found
2026-04-26T22:21:52.301648108Z Error: Route / not found
2026-04-26T22:21:52.301654279Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T22:21:52.301660068Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:21:52.301665729Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:21:52.301671239Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:21:52.301676029Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T22:21:52.301680799Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T22:21:52.301685299Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T22:21:52.301689779Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:21:52.30170976Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:21:52.30171325Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:21:52.302490799Z 2026-04-26 22:21:52 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T22:21:52.37150327Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:21:52.373628277Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:21:52.375591231Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:21:52.377801951Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T22:21:52.379945739Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:21:52.382064357Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
```
