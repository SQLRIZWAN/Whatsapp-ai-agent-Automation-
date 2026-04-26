# Render Deploy Diagnostics

Run: 24968762741
Commit: 786900b22b7f203f9d35b180e7bed81bb05f6880
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n95oa8qa3s73a3s7fg

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
  "updatedAt": "2026-04-26T22:36:39.632505Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n95oa8qa3s73a3s7fg",
  "commit": {
    "id": "786900b22b7f203f9d35b180e7bed81bb05f6880",
    "message": "fix: harden WA pairing persistence, AI fallback replies, and render maintenance workflow",
    "createdAt": "2026-04-26T22:33:54Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T22:34:09.696234Z",
  "updatedAt": "2026-04-26T22:36:39.631272Z",
  "startedAt": "2026-04-26T22:34:09.622689Z",
  "finishedAt": "2026-04-26T22:36:39.631068Z"
}
```

## App logs (last 4h)
```
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
2026-04-26T22:21:37.219827791Z 2026-04-26 22:21:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:37.238138626Z 2026-04-26 22:21:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:37.244209119Z 2026-04-26 22:21:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:41.869170463Z 2026-04-26 22:21:41 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:21:42.24428464Z 2026-04-26 22:21:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:45.154361784Z 2026-04-26 22:21:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:21:47.244515253Z 2026-04-26 22:21:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:21:48.571528604Z 2026-04-26 22:21:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:21:48.571571887Z 2026-04-26 22:21:48 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:21:49.835966204Z 2026-04-26 22:21:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
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
2026-04-26T22:21:52.37150327Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:21:52.373628277Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:21:52.375591231Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:21:52.377801951Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T22:21:52.379945739Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:21:52.382064357Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:21:57.245669624Z 2026-04-26 22:21:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:02.244514586Z 2026-04-26 22:22:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:07.244759632Z 2026-04-26 22:22:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:08.579982795Z 2026-04-26 22:22:08 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:22:08.580010427Z 2026-04-26 22:22:08 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:22:11.593759188Z 2026-04-26 22:22:11 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:22:11.5937927Z Error: Firestore timeout
2026-04-26T22:22:11.593798871Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:22:11.593804911Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:22:11.593809341Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:22:11.593825982Z 2026-04-26 22:22:11 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:22:12.24423209Z 2026-04-26 22:22:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:17.249889242Z 2026-04-26 22:22:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:22.245181845Z 2026-04-26 22:22:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:27.24710242Z 2026-04-26 22:22:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:28.58562111Z 2026-04-26 22:22:28 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:22:28.585648361Z 2026-04-26 22:22:28 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:22:31.626782297Z 2026-04-26 22:22:31 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:22:31.626805688Z Error: Firestore timeout
2026-04-26T22:22:31.626812919Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:22:31.626819029Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:22:31.62682493Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:22:31.62684078Z 2026-04-26 22:22:31 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:22:32.245113295Z 2026-04-26 22:22:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:37.244320271Z 2026-04-26 22:22:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:41.428365357Z 2026-04-26 22:22:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:22:41.432578502Z 2026-04-26 22:22:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:22:41.671305382Z 2026-04-26 22:22:41 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:22:42.24647998Z 2026-04-26 22:22:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:46.359723161Z 2026-04-26 22:22:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:22:46.433007067Z 2026-04-26 22:22:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:22:47.245121624Z 2026-04-26 22:22:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.105"}
2026-04-26T22:22:48.600483405Z 2026-04-26 22:22:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:22:48.600518398Z 2026-04-26 22:22:48 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:22:49.638135398Z 2026-04-26 22:22:49 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:22:51.434274273Z 2026-04-26 22:22:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:22:51.622135753Z 2026-04-26 22:22:51 [warn] Failed to save QR code: Firestore timeout
2026-04-26T22:22:51.622157154Z Error: Firestore timeout
2026-04-26T22:22:51.622162934Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:45:68)
2026-04-26T22:22:51.622171165Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:22:51.622176265Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:22:51.622188186Z 2026-04-26 22:22:51 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:22:54.197349237Z 2026-04-26 22:22:54 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:22:56.433491198Z 2026-04-26 22:22:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:22:57.921149724Z 2026-04-26 22:22:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:01.433153393Z 2026-04-26 22:23:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:02.29811271Z 2026-04-26 22:23:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:05.631187759Z 2026-04-26 22:23:05 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:23:06.433233238Z 2026-04-26 22:23:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:10.292830989Z 2026-04-26 22:23:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:11.428565794Z 2026-04-26 22:23:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:11.432726158Z 2026-04-26 22:23:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:13.761271711Z 2026-04-26 22:23:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:16.433501869Z 2026-04-26 22:23:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:18.34307502Z 2026-04-26 22:23:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:21.433151272Z 2026-04-26 22:23:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:21.665062552Z 2026-04-26 22:23:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:26.433087492Z 2026-04-26 22:23:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:26.434292182Z 2026-04-26 22:23:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:29.738904219Z 2026-04-26 22:23:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:31.432666031Z 2026-04-26 22:23:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:34.700539094Z 2026-04-26 22:23:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:36.432893247Z 2026-04-26 22:23:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:37.675515646Z 2026-04-26 22:23:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:41.428211461Z 2026-04-26 22:23:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:41.432255301Z 2026-04-26 22:23:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:42.684139121Z 2026-04-26 22:23:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:45.685310926Z 2026-04-26 22:23:45 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:23:46.433285727Z 2026-04-26 22:23:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:50.670034254Z 2026-04-26 22:23:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:51.433013638Z 2026-04-26 22:23:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:53.621382536Z 2026-04-26 22:23:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:23:56.433383906Z 2026-04-26 22:23:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:23:58.671132724Z 2026-04-26 22:23:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:24:01.433675411Z 2026-04-26 22:24:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:01.67275703Z 2026-04-26 22:24:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:24:06.431748441Z 2026-04-26 22:24:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:24:06.432536881Z 2026-04-26 22:24:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:09.674041924Z 2026-04-26 22:24:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:24:11.428527367Z 2026-04-26 22:24:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:11.43264851Z 2026-04-26 22:24:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:16.433286713Z 2026-04-26 22:24:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:21.432801216Z 2026-04-26 22:24:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:26.437814467Z 2026-04-26 22:24:26 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:31.433130706Z 2026-04-26 22:24:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:36.433314005Z 2026-04-26 22:24:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:38.478588015Z 2026-04-26 22:24:38 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:24:41.42811581Z 2026-04-26 22:24:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:41.432328804Z 2026-04-26 22:24:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:46.433487637Z 2026-04-26 22:24:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:51.433297186Z 2026-04-26 22:24:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:24:56.433268168Z 2026-04-26 22:24:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:01.434220434Z 2026-04-26 22:25:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:05.62781068Z 2026-04-26 22:25:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:25:06.43436767Z 2026-04-26 22:25:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:11.431212103Z 2026-04-26 22:25:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:11.432252329Z 2026-04-26 22:25:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:16.433099141Z 2026-04-26 22:25:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:21.432936227Z 2026-04-26 22:25:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:26.433144093Z 2026-04-26 22:25:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:31.433414149Z 2026-04-26 22:25:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:32.219663873Z 2026-04-26 22:25:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:25:36.432994378Z 2026-04-26 22:25:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:41.429260714Z 2026-04-26 22:25:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:41.432112565Z 2026-04-26 22:25:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:46.433337824Z 2026-04-26 22:25:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:51.432924062Z 2026-04-26 22:25:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:25:55.901012804Z 2026-04-26 22:25:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:25:56.433234207Z 2026-04-26 22:25:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:01.432796893Z 2026-04-26 22:26:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:06.433839145Z 2026-04-26 22:26:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:11.428290943Z 2026-04-26 22:26:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:11.432443157Z 2026-04-26 22:26:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:16.432854363Z 2026-04-26 22:26:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:21.433388001Z 2026-04-26 22:26:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:26.435325674Z 2026-04-26 22:26:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:31.433447692Z 2026-04-26 22:26:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:36.432697567Z 2026-04-26 22:26:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:41.428860065Z 2026-04-26 22:26:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:41.432959877Z 2026-04-26 22:26:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:46.338308852Z 2026-04-26 22:26:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:26:46.432622082Z 2026-04-26 22:26:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:48.954529543Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T22:26:49.023426294Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T22:26:51.433471736Z 2026-04-26 22:26:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:26:56.432553884Z 2026-04-26 22:26:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:01.43273813Z 2026-04-26 22:27:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:06.433326066Z 2026-04-26 22:27:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:11.428020805Z 2026-04-26 22:27:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:11.432157188Z 2026-04-26 22:27:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:13.50865746Z 2026-04-26 22:27:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:27:16.435530003Z 2026-04-26 22:27:16 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:21.433114372Z 2026-04-26 22:27:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:26.432696671Z 2026-04-26 22:27:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:31.433195803Z 2026-04-26 22:27:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:36.432996997Z 2026-04-26 22:27:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:41.428352148Z 2026-04-26 22:27:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:41.431890026Z 2026-04-26 22:27:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:46.433199917Z 2026-04-26 22:27:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:51.432891317Z 2026-04-26 22:27:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:27:56.435287617Z 2026-04-26 22:27:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:01.432670101Z 2026-04-26 22:28:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:03.597092813Z 2026-04-26 22:28:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:28:06.433062278Z 2026-04-26 22:28:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:11.427991104Z 2026-04-26 22:28:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:11.433029302Z 2026-04-26 22:28:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:16.433369502Z 2026-04-26 22:28:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:21.4325116Z 2026-04-26 22:28:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:26.432463386Z 2026-04-26 22:28:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:31.433016264Z 2026-04-26 22:28:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:36.432529634Z 2026-04-26 22:28:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:41.428784628Z 2026-04-26 22:28:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:41.432886392Z 2026-04-26 22:28:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:46.43608778Z 2026-04-26 22:28:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:51.433001546Z 2026-04-26 22:28:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:28:53.899602943Z 2026-04-26 22:28:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:28:56.433062999Z 2026-04-26 22:28:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:01.432948465Z 2026-04-26 22:29:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:06.432644904Z 2026-04-26 22:29:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:11.427683643Z 2026-04-26 22:29:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:11.432807172Z 2026-04-26 22:29:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:16.433671755Z 2026-04-26 22:29:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:21.433359116Z 2026-04-26 22:29:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:26.433482986Z 2026-04-26 22:29:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:30.185823099Z 2026-04-26 22:29:30 [info] Client disconnected: DG-UZVHp6ALsrO4LAAAD
2026-04-26T22:29:30.204216843Z 2026-04-26 22:29:30 [info] Client disconnected: DZVmnPEJsVvNtKbLAAAB
2026-04-26T22:29:31.433335126Z 2026-04-26 22:29:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:36.433559913Z 2026-04-26 22:29:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:41.42793156Z 2026-04-26 22:29:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:41.432902296Z 2026-04-26 22:29:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:46.433344923Z 2026-04-26 22:29:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:51.433120282Z 2026-04-26 22:29:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:29:56.432956699Z 2026-04-26 22:29:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:01.432897626Z 2026-04-26 22:30:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:06.435644932Z 2026-04-26 22:30:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:11.428510116Z 2026-04-26 22:30:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:11.432008734Z 2026-04-26 22:30:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:16.433174465Z 2026-04-26 22:30:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:21.433101722Z 2026-04-26 22:30:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:26.433595481Z 2026-04-26 22:30:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:31.432933428Z 2026-04-26 22:30:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:36.433086203Z 2026-04-26 22:30:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:41.428309392Z 2026-04-26 22:30:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:41.432264702Z 2026-04-26 22:30:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:46.433455458Z 2026-04-26 22:30:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:51.434518829Z 2026-04-26 22:30:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:30:56.433114515Z 2026-04-26 22:30:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:01.433034922Z 2026-04-26 22:31:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:06.432541026Z 2026-04-26 22:31:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:11.427951745Z 2026-04-26 22:31:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:11.432039258Z 2026-04-26 22:31:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:16.43362176Z 2026-04-26 22:31:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:21.433317261Z 2026-04-26 22:31:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:26.432660272Z 2026-04-26 22:31:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:31.433039665Z 2026-04-26 22:31:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:36.432880384Z 2026-04-26 22:31:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:41.428028971Z 2026-04-26 22:31:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:41.432108714Z 2026-04-26 22:31:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:46.433555198Z 2026-04-26 22:31:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:51.432742032Z 2026-04-26 22:31:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:31:56.433217856Z 2026-04-26 22:31:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:01.432676632Z 2026-04-26 22:32:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:06.432967897Z 2026-04-26 22:32:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:11.428547511Z 2026-04-26 22:32:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:11.432716886Z 2026-04-26 22:32:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:16.432876303Z 2026-04-26 22:32:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:21.433629762Z 2026-04-26 22:32:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:26.433231839Z 2026-04-26 22:32:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:31.43304454Z 2026-04-26 22:32:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:36.4333065Z 2026-04-26 22:32:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:41.428249452Z 2026-04-26 22:32:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:41.432246783Z 2026-04-26 22:32:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:46.432636901Z 2026-04-26 22:32:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:51.433503179Z 2026-04-26 22:32:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:32:56.43303915Z 2026-04-26 22:32:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:01.432854867Z 2026-04-26 22:33:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:06.432939667Z 2026-04-26 22:33:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:11.428252325Z 2026-04-26 22:33:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:11.43240318Z 2026-04-26 22:33:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:16.43304867Z 2026-04-26 22:33:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:21.433431571Z 2026-04-26 22:33:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:26.432877456Z 2026-04-26 22:33:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:31.433069748Z 2026-04-26 22:33:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:36.433153334Z 2026-04-26 22:33:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:41.428311554Z 2026-04-26 22:33:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:41.433211328Z 2026-04-26 22:33:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:46.432992332Z 2026-04-26 22:33:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:51.432355983Z 2026-04-26 22:33:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:33:56.43284884Z 2026-04-26 22:33:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:01.432980046Z 2026-04-26 22:34:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:06.433431157Z 2026-04-26 22:34:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:11.428349657Z 2026-04-26 22:34:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:11.432294276Z 2026-04-26 22:34:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:16.432282582Z 2026-04-26 22:34:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:21.432554572Z 2026-04-26 22:34:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:26.432893142Z 2026-04-26 22:34:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:31.43290337Z 2026-04-26 22:34:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:36.432999469Z 2026-04-26 22:34:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:40.359599146Z 2026-04-26 22:34:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:34:40.409556456Z 2026-04-26 22:34:40 [info] Client connected: 23782a8zBTunJ4sLAAAF
2026-04-26T22:34:40.739586925Z 2026-04-26 22:34:40 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 23782a8zBTunJ4sLAAAF
2026-04-26T22:34:41.340787776Z 2026-04-26 22:34:41 [info] Client connected: eBh0V3uM97jwxCNDAAAH
2026-04-26T22:34:41.428000806Z 2026-04-26 22:34:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:41.43211103Z 2026-04-26 22:34:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:41.691006603Z 2026-04-26 22:34:41 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket eBh0V3uM97jwxCNDAAAH
2026-04-26T22:34:42.784136218Z 2026-04-26 22:34:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:34:42.859775286Z 2026-04-26 22:34:42 [info] [keepalive] ping OK
2026-04-26T22:34:43.098938082Z 2026-04-26 22:34:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:34:46.434798309Z 2026-04-26 22:34:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:51.43366979Z 2026-04-26 22:34:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:34:54.37066974Z 2026-04-26 22:34:54 [info] Client disconnected: 23782a8zBTunJ4sLAAAF
2026-04-26T22:34:54.37103865Z 2026-04-26 22:34:54 [info] Client disconnected: eBh0V3uM97jwxCNDAAAH
2026-04-26T22:34:56.433100042Z 2026-04-26 22:34:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:01.432962933Z 2026-04-26 22:35:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:06.433131599Z 2026-04-26 22:35:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:11.42803822Z 2026-04-26 22:35:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:11.432428171Z 2026-04-26 22:35:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:16.432547612Z 2026-04-26 22:35:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:21.433091951Z 2026-04-26 22:35:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:26.433212496Z 2026-04-26 22:35:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:31.432424767Z 2026-04-26 22:35:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:36.432693213Z 2026-04-26 22:35:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:41.427801405Z 2026-04-26 22:35:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:41.431779055Z 2026-04-26 22:35:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:46.43299791Z 2026-04-26 22:35:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:51.43294179Z 2026-04-26 22:35:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:56.433040991Z 2026-04-26 22:35:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:35:58.476548198Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T22:35:58.548162553Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T22:36:01.432505405Z 2026-04-26 22:36:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:06.433216567Z 2026-04-26 22:36:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:11.427774232Z 2026-04-26 22:36:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:11.431919877Z 2026-04-26 22:36:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:16.432788279Z 2026-04-26 22:36:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:21.432636062Z 2026-04-26 22:36:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:26.432447623Z 2026-04-26 22:36:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:29.61848023Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T22:36:30.909062743Z 
2026-04-26T22:36:30.909093996Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T22:36:30.909100306Z > node dist/index.js
2026-04-26T22:36:30.909102886Z 
2026-04-26T22:36:31.432532268Z 2026-04-26 22:36:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:36.422167324Z 2026-04-26 22:36:36 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T22:36:36.433338569Z 2026-04-26 22:36:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:37.957960347Z 2026-04-26 22:36:37 [info] Firestore initialized successfully
2026-04-26T22:36:38.006376433Z 2026-04-26 22:36:38 [info] ✅ Server running on http://localhost:10000
2026-04-26T22:36:38.006520744Z 2026-04-26 22:36:38 [info] Environment: production
2026-04-26T22:36:38.006682516Z 2026-04-26 22:36:38 [info] API URL: http://localhost:5000
2026-04-26T22:36:38.00687245Z 2026-04-26 22:36:38 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T22:36:38.085250961Z 2026-04-26 22:36:38 [error] Route / not found
2026-04-26T22:36:38.085268162Z Error: Route / not found
2026-04-26T22:36:38.085272023Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T22:36:38.085275613Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:36:38.085279143Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:36:38.085282383Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:36:38.085285504Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T22:36:38.085288574Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T22:36:38.085291664Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T22:36:38.085294604Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:36:38.085297675Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:36:38.085300855Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:36:38.08773488Z 2026-04-26 22:36:38 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-26T22:36:39.000871498Z 2026-04-26 22:36:39 [info] {"method":"GET","path":"/health","status":200,"duration":"5ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:36:39.003237778Z 2026-04-26 22:36:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:36:39.82406943Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T22:36:39.875471112Z 2026-04-26 22:36:39 [error] Route / not found
2026-04-26T22:36:39.875491813Z Error: Route / not found
2026-04-26T22:36:39.875497434Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T22:36:39.875502334Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:36:39.875507164Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:36:39.875512055Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:36:39.875515945Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T22:36:39.875531716Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T22:36:39.875535916Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T22:36:39.875539857Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T22:36:39.875552968Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T22:36:39.875555718Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T22:36:39.87703757Z 2026-04-26 22:36:39 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T22:36:39.924259649Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:36:39.930760318Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:36:39.935563881Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:36:39.941445156Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T22:36:39.94537627Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:36:39.956320444Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:36:41.437032211Z 2026-04-26 22:36:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:44.017164747Z 2026-04-26 22:36:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:36:46.432936734Z 2026-04-26 22:36:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-26T22:36:49.002400872Z 2026-04-26 22:36:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:36:51.438303004Z 2026-04-26 22:36:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
```
