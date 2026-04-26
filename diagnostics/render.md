# Render Deploy Diagnostics

Run: 24969306966
Commit: f3938a1e4799adaaa116e421ca7fd1ec6ac9358e
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n9kuqpmmbs73cd3lpg

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
  "updatedAt": "2026-04-26T23:11:23.631798Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n9kuqpmmbs73cd3lpg",
  "commit": {
    "id": "f3938a1e4799adaaa116e421ca7fd1ec6ac9358e",
    "message": "fix: avoid Firestore quota pressure in QR flow and fallback auth state to memory",
    "createdAt": "2026-04-26T23:03:19Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T23:06:35.267033Z",
  "updatedAt": "2026-04-26T23:11:23.630824Z",
  "startedAt": "2026-04-26T23:06:35.224076Z",
  "finishedAt": "2026-04-26T23:11:23.630698Z"
}
```

## App logs (last 4h)
```
2026-04-26T23:02:03.231174351Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:02:03.231237806Z 2026-04-26 23:02:03 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:02:05.073841882Z 2026-04-26 23:02:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:10.074370317Z 2026-04-26 23:02:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:15.07457816Z 2026-04-26 23:02:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:20.075350835Z 2026-04-26 23:02:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:25.074139346Z 2026-04-26 23:02:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:30.073598816Z 2026-04-26 23:02:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:30.074410141Z 2026-04-26 23:02:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:35.073853324Z 2026-04-26 23:02:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:40.074738389Z 2026-04-26 23:02:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:45.073902932Z 2026-04-26 23:02:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:50.076447261Z 2026-04-26 23:02:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:55.07393856Z 2026-04-26 23:02:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:59.175762675Z 2026-04-26 23:02:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:02:59.184025688Z 2026-04-26 23:02:59 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:03:00.073916434Z 2026-04-26 23:03:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:00.074644762Z 2026-04-26 23:03:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:03.23101063Z 2026-04-26 23:03:03 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:03:03.231040912Z Error: Firestore timeout after 4000ms
2026-04-26T23:03:03.231047343Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:03:03.231052673Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:03:03.231056974Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:03:03.231066704Z 2026-04-26 23:03:03 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:03:05.073768243Z 2026-04-26 23:03:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:10.074223016Z 2026-04-26 23:03:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:15.073898683Z 2026-04-26 23:03:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:19.182286178Z 2026-04-26 23:03:19 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:03:19.18231233Z 2026-04-26 23:03:19 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:03:20.073707316Z 2026-04-26 23:03:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:23.231598329Z 2026-04-26 23:03:23 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:03:23.231627352Z Error: Firestore timeout after 4000ms
2026-04-26T23:03:23.231634302Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:03:23.231640013Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:03:23.231644903Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:03:23.231657404Z 2026-04-26 23:03:23 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:03:25.074143965Z 2026-04-26 23:03:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:30.073658066Z 2026-04-26 23:03:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:30.074318489Z 2026-04-26 23:03:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:32.209552588Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T23:03:32.26149494Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T23:03:35.073537491Z 2026-04-26 23:03:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:39.190843516Z 2026-04-26 23:03:39 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:03:39.190872438Z 2026-04-26 23:03:39 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:03:40.074659273Z 2026-04-26 23:03:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:43.231125097Z 2026-04-26 23:03:43 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:03:43.231150349Z Error: Firestore timeout after 4000ms
2026-04-26T23:03:43.231155209Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:03:43.231171271Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:03:43.231175881Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:03:43.231217094Z 2026-04-26 23:03:43 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:03:45.073699264Z 2026-04-26 23:03:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:46.623890465Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T23:03:47.631106982Z 
2026-04-26T23:03:47.631130282Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T23:03:47.631135813Z > node dist/index.js
2026-04-26T23:03:47.631138943Z 
2026-04-26T23:03:50.074040004Z 2026-04-26 23:03:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:52.733921811Z 2026-04-26 23:03:52 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T23:03:54.02536152Z 2026-04-26 23:03:54 [info] Firestore initialized successfully
2026-04-26T23:03:54.121701112Z 2026-04-26 23:03:54 [info] ✅ Server running on http://localhost:10000
2026-04-26T23:03:54.121926807Z 2026-04-26 23:03:54 [info] Environment: production
2026-04-26T23:03:54.122143942Z 2026-04-26 23:03:54 [info] API URL: http://localhost:5000
2026-04-26T23:03:54.122348356Z 2026-04-26 23:03:54 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T23:03:54.864860233Z 2026-04-26 23:03:54 [error] Route / not found
2026-04-26T23:03:54.864882993Z Error: Route / not found
2026-04-26T23:03:54.864888493Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T23:03:54.864893593Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T23:03:54.864898474Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T23:03:54.864913394Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T23:03:54.864918564Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T23:03:54.864923124Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T23:03:54.864927274Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T23:03:54.864931394Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T23:03:54.864935525Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T23:03:54.864939585Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T23:03:54.869234964Z 2026-04-26 23:03:54 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-26T23:03:55.073443775Z 2026-04-26 23:03:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:03:59.198418809Z 2026-04-26 23:03:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:03:59.198453391Z 2026-04-26 23:03:59 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:04:00.074169509Z 2026-04-26 23:04:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:00.074845273Z 2026-04-26 23:04:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:02.668627324Z 2026-04-26 23:04:02 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:02.670343674Z 2026-04-26 23:04:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:03.230885096Z 2026-04-26 23:04:03 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:04:03.23092133Z Error: Firestore timeout after 4000ms
2026-04-26T23:04:03.23092813Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:04:03.23093268Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:04:03.230936551Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:04:03.230947472Z 2026-04-26 23:04:03 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:04:03.592527471Z 2026-04-26 23:04:03 [error] Route / not found
2026-04-26T23:04:03.592544442Z Error: Route / not found
2026-04-26T23:04:03.592552032Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T23:04:03.592558442Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T23:04:03.592563982Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T23:04:03.592569252Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T23:04:03.592574122Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T23:04:03.592578962Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T23:04:03.592583663Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T23:04:03.592588503Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T23:04:03.592604153Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T23:04:03.592607813Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T23:04:03.593466993Z 2026-04-26 23:04:03 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T23:04:03.601633876Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T23:04:03.679072001Z [0;32m[1m==> [0m[1m[0m
2026-04-26T23:04:03.681503283Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T23:04:03.683950036Z [0;32m[1m==> [0m[1m[0m
2026-04-26T23:04:03.686306577Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T23:04:03.688953384Z [0;32m[1m==> [0m[1m[0m
2026-04-26T23:04:03.691101201Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T23:04:05.074519407Z 2026-04-26 23:04:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:07.664580378Z 2026-04-26 23:04:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:10.073577186Z 2026-04-26 23:04:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:12.662852795Z 2026-04-26 23:04:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:15.074271863Z 2026-04-26 23:04:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:17.662286318Z 2026-04-26 23:04:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:19.207886291Z 2026-04-26 23:04:19 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:04:19.208031083Z 2026-04-26 23:04:19 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:04:20.073495535Z 2026-04-26 23:04:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:22.663204565Z 2026-04-26 23:04:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:23.23100015Z 2026-04-26 23:04:23 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:04:23.231019352Z Error: Firestore timeout after 4000ms
2026-04-26T23:04:23.231039813Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:04:23.231043823Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:04:23.231047914Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:04:23.231058325Z 2026-04-26 23:04:23 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:04:25.0743343Z 2026-04-26 23:04:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:27.662888253Z 2026-04-26 23:04:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:30.073469921Z 2026-04-26 23:04:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:32.663072823Z 2026-04-26 23:04:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:32.664092036Z 2026-04-26 23:04:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:35.074464015Z 2026-04-26 23:04:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:37.662116316Z 2026-04-26 23:04:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:39.217092893Z 2026-04-26 23:04:39 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T23:04:39.217122915Z 2026-04-26 23:04:39 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T23:04:40.074307469Z 2026-04-26 23:04:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:42.662371756Z 2026-04-26 23:04:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:44.218933004Z 2026-04-26 23:04:44 [warn] [wa] persistSessionStatus failed Firestore timeout after 5000ms
2026-04-26T23:04:44.218960517Z Error: Firestore timeout after 5000ms
2026-04-26T23:04:44.218967887Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:217:68)
2026-04-26T23:04:44.218974588Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:04:44.218979238Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:04:44.219012951Z 2026-04-26 23:04:44 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 8000ms (attempt 4)
2026-04-26T23:04:45.073740114Z 2026-04-26 23:04:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:47.662493523Z 2026-04-26 23:04:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:50.074615348Z 2026-04-26 23:04:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:52.219824797Z 2026-04-26 23:04:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T23:04:52.323514864Z 2026-04-26 23:04:52 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:04:52.42755467Z 2026-04-26 23:04:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T23:04:52.662654141Z 2026-04-26 23:04:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:04:52.997739822Z 2026-04-26 23:04:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:04:52.997774734Z 2026-04-26 23:04:52 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:04:55.074833233Z 2026-04-26 23:04:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:04:57.330843054Z 2026-04-26 23:04:57 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:04:57.330870236Z Error: Firestore timeout after 4000ms
2026-04-26T23:04:57.330896338Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:04:57.330899929Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:04:57.330902119Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:04:57.33091621Z 2026-04-26 23:04:57 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:04:57.6620537Z 2026-04-26 23:04:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:00.073602675Z 2026-04-26 23:05:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:05:02.663113668Z 2026-04-26 23:05:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:02.66405161Z 2026-04-26 23:05:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:07.66347349Z 2026-04-26 23:05:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:12.662174972Z 2026-04-26 23:05:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:17.662390199Z 2026-04-26 23:05:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:22.662454343Z 2026-04-26 23:05:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:27.476541819Z 2026-04-26 23:05:27 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T23:05:27.662207238Z 2026-04-26 23:05:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:27.753528443Z 2026-04-26 23:05:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:05:27.802536778Z 2026-04-26 23:05:27 [info] Client connected: QHERY-DU0--BLBZ8AAAB
2026-04-26T23:05:28.041496862Z 2026-04-26 23:05:28 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket QHERY-DU0--BLBZ8AAAB
2026-04-26T23:05:28.620242675Z 2026-04-26 23:05:28 [info] Client connected: yWxeycGU-Yht3Y6IAAAD
2026-04-26T23:05:28.869013046Z 2026-04-26 23:05:28 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket yWxeycGU-Yht3Y6IAAAD
2026-04-26T23:05:30.63269327Z 2026-04-26 23:05:30 [info] {"method":"POST","path":"/disconnect","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:05:31.511600964Z 2026-04-26 23:05:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T23:05:31.62760553Z 2026-04-26 23:05:31 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:05:31.823047076Z 2026-04-26 23:05:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:05:32.42387024Z 2026-04-26 23:05:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T23:05:32.424013073Z 2026-04-26 23:05:32 [info] {"method":"POST","path":"/connect","status":200,"duration":"1122ms","ip":"::1"}
2026-04-26T23:05:32.55685012Z 2026-04-26 23:05:32 [info] {"method":"POST","path":"/disconnect","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:05:32.662876025Z 2026-04-26 23:05:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:32.663762116Z 2026-04-26 23:05:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:33.056638394Z 2026-04-26 23:05:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T23:05:33.223092219Z 2026-04-26 23:05:33 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:05:33.226044167Z 2026-04-26 23:05:33 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T23:05:33.226293933Z 2026-04-26 23:05:33 [info] {"method":"POST","path":"/connect","status":200,"duration":"386ms","ip":"::1"}
2026-04-26T23:05:34.352290019Z 2026-04-26 23:05:34 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:05:34.35232374Z 2026-04-26 23:05:34 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:05:37.430706259Z 2026-04-26 23:05:37 [warn] [wa] persistSessionStatus failed Firestore timeout after 5000ms
2026-04-26T23:05:37.43073131Z Error: Firestore timeout after 5000ms
2026-04-26T23:05:37.43073676Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:217:68)
2026-04-26T23:05:37.43074168Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:05:37.430746671Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:05:37.432966502Z 2026-04-26 23:05:37 [info] {"method":"POST","path":"/disconnect","status":200,"duration":"5008ms","ip":"::1"}
2026-04-26T23:05:37.663139182Z 2026-04-26 23:05:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:38.28572719Z 2026-04-26 23:05:38 [info] {"method":"POST","path":"/connect","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T23:05:39.020591288Z 2026-04-26 23:05:39 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:05:39.020607779Z Error: Firestore timeout after 4000ms
2026-04-26T23:05:39.020612319Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:05:39.020616499Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:05:39.020620539Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:05:39.020694921Z 2026-04-26 23:05:39 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:05:39.876340556Z 2026-04-26 23:05:39 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T23:05:42.66216344Z 2026-04-26 23:05:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:43.485676031Z 2026-04-26 23:05:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:05:47.661874324Z 2026-04-26 23:05:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:47.829139257Z 2026-04-26 23:05:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:05:51.56314926Z 2026-04-26 23:05:51 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:05:52.662325534Z 2026-04-26 23:05:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:55.830888352Z 2026-04-26 23:05:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:05:57.662462487Z 2026-04-26 23:05:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:05:59.544333457Z 2026-04-26 23:05:59 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:06:02.662755953Z 2026-04-26 23:06:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:02.663555572Z 2026-04-26 23:06:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:03.944971647Z 2026-04-26 23:06:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:07.504819965Z 2026-04-26 23:06:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:07.66267547Z 2026-04-26 23:06:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:11.80507353Z 2026-04-26 23:06:11 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:12.662716221Z 2026-04-26 23:06:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:15.477363232Z 2026-04-26 23:06:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:17.662173107Z 2026-04-26 23:06:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:19.87452778Z 2026-04-26 23:06:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:22.662771929Z 2026-04-26 23:06:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:23.506444926Z 2026-04-26 23:06:23 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:27.663004791Z 2026-04-26 23:06:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:27.97084183Z 2026-04-26 23:06:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:31.541807455Z 2026-04-26 23:06:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:32.662300422Z 2026-04-26 23:06:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:32.663007829Z 2026-04-26 23:06:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:34.623842777Z 2026-04-26 23:06:34 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:06:34.623919699Z 2026-04-26 23:06:34 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:06:35.941272135Z 2026-04-26 23:06:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:37.663033466Z 2026-04-26 23:06:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:38.727126078Z 2026-04-26 23:06:38 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:06:38.727140639Z Error: Firestore timeout after 4000ms
2026-04-26T23:06:38.727143799Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:06:38.727146509Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:06:38.727148509Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:06:38.72721089Z 2026-04-26 23:06:38 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:06:39.552082252Z 2026-04-26 23:06:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:42.662725496Z 2026-04-26 23:06:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:43.792315894Z 2026-04-26 23:06:43 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:06:47.547509204Z 2026-04-26 23:06:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:47.66219234Z 2026-04-26 23:06:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:51.960385794Z 2026-04-26 23:06:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:52.662249227Z 2026-04-26 23:06:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:54.633066816Z 2026-04-26 23:06:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:06:54.633124427Z 2026-04-26 23:06:54 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:06:55.544136073Z 2026-04-26 23:06:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:06:57.662503468Z 2026-04-26 23:06:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:06:58.824109347Z 2026-04-26 23:06:58 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:06:58.824727961Z Error: Firestore timeout after 4000ms
2026-04-26T23:06:58.824736452Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:06:58.824741822Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:06:58.824746632Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:06:58.825126501Z 2026-04-26 23:06:58 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:06:59.94140423Z 2026-04-26 23:06:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:02.662745929Z 2026-04-26 23:07:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:02.664643772Z 2026-04-26 23:07:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:03.50444063Z 2026-04-26 23:07:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:07.664987465Z 2026-04-26 23:07:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:07.944276263Z 2026-04-26 23:07:07 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:07:11.505899364Z 2026-04-26 23:07:11 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T23:07:12.669117813Z 2026-04-26 23:07:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:14.644440264Z 2026-04-26 23:07:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:07:14.644533436Z 2026-04-26 23:07:14 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:07:16.248365645Z 2026-04-26 23:07:16 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:07:17.66219409Z 2026-04-26 23:07:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:18.725281645Z 2026-04-26 23:07:18 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:07:18.725300735Z Error: Firestore timeout after 4000ms
2026-04-26T23:07:18.725305945Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:07:18.725311716Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:07:18.725316105Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:07:18.725377167Z 2026-04-26 23:07:18 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:07:19.946625809Z 2026-04-26 23:07:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:22.663051647Z 2026-04-26 23:07:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:24.294542136Z 2026-04-26 23:07:24 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:27.662663825Z 2026-04-26 23:07:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:27.953766067Z 2026-04-26 23:07:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:32.215601753Z 2026-04-26 23:07:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:32.661945235Z 2026-04-26 23:07:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:32.662726153Z 2026-04-26 23:07:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:34.657989244Z 2026-04-26 23:07:34 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:07:34.658057706Z 2026-04-26 23:07:34 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:07:35.953425531Z 2026-04-26 23:07:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:37.662224768Z 2026-04-26 23:07:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:39.020537639Z 2026-04-26 23:07:39 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:07:39.02056747Z Error: Firestore timeout after 4000ms
2026-04-26T23:07:39.02057087Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:07:39.02057363Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:07:39.02057563Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:07:39.020646372Z 2026-04-26 23:07:39 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:07:40.270538236Z 2026-04-26 23:07:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:42.665162113Z 2026-04-26 23:07:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:43.941475648Z 2026-04-26 23:07:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:47.665244181Z 2026-04-26 23:07:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:48.234245119Z 2026-04-26 23:07:48 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:07:51.970773457Z 2026-04-26 23:07:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:52.662608906Z 2026-04-26 23:07:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:54.66924922Z 2026-04-26 23:07:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:07:54.669296951Z 2026-04-26 23:07:54 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:07:56.27140758Z 2026-04-26 23:07:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:07:57.662311615Z 2026-04-26 23:07:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:07:58.728314747Z 2026-04-26 23:07:58 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:07:58.728330407Z Error: Firestore timeout after 4000ms
2026-04-26T23:07:58.728334537Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:07:58.728338547Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:07:58.728341707Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:07:58.728411899Z 2026-04-26 23:07:58 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:07:59.954516683Z 2026-04-26 23:07:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:08:02.662000754Z 2026-04-26 23:08:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:02.662643179Z 2026-04-26 23:08:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:04.29596623Z 2026-04-26 23:08:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:08:07.661954189Z 2026-04-26 23:08:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:07.934264716Z 2026-04-26 23:08:07 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:08:12.210957225Z 2026-04-26 23:08:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:08:12.662448796Z 2026-04-26 23:08:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:14.678894676Z 2026-04-26 23:08:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T23:08:14.678937257Z 2026-04-26 23:08:14 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T23:08:17.663905025Z 2026-04-26 23:08:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:19.679848944Z 2026-04-26 23:08:19 [warn] [wa] persistSessionStatus failed Firestore timeout after 5000ms
2026-04-26T23:08:19.679870374Z Error: Firestore timeout after 5000ms
2026-04-26T23:08:19.679874114Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:217:68)
2026-04-26T23:08:19.679877084Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:08:19.679880294Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:08:19.680077399Z 2026-04-26 23:08:19 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 2000ms (attempt 2)
2026-04-26T23:08:21.681474051Z 2026-04-26 23:08:21 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T23:08:21.791442484Z 2026-04-26 23:08:21 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:08:21.820476596Z 2026-04-26 23:08:21 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T23:08:22.371191831Z 2026-04-26 23:08:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:08:22.371205942Z 2026-04-26 23:08:22 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:08:22.662141319Z 2026-04-26 23:08:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:26.431362463Z 2026-04-26 23:08:26 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:08:26.431384533Z Error: Firestore timeout after 4000ms
2026-04-26T23:08:26.431390454Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:08:26.431395784Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:08:26.431400444Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:08:26.431457355Z 2026-04-26 23:08:26 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:08:27.662539644Z 2026-04-26 23:08:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:32.663703556Z 2026-04-26 23:08:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:32.663724866Z 2026-04-26 23:08:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:37.662096264Z 2026-04-26 23:08:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:42.662106159Z 2026-04-26 23:08:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:44.445978511Z 2026-04-26 23:08:44 [info] Client disconnected: QHERY-DU0--BLBZ8AAAB
2026-04-26T23:08:45.076237435Z 2026-04-26 23:08:45 [info] Client disconnected: yWxeycGU-Yht3Y6IAAAD
2026-04-26T23:08:47.662848011Z 2026-04-26 23:08:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:52.662583409Z 2026-04-26 23:08:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:08:57.662048471Z 2026-04-26 23:08:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:01.034173266Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T23:09:01.103449655Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T23:09:02.662592568Z 2026-04-26 23:09:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:02.663840017Z 2026-04-26 23:09:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:07.662045039Z 2026-04-26 23:09:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:12.662595928Z 2026-04-26 23:09:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:17.662655413Z 2026-04-26 23:09:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:22.38476622Z 2026-04-26 23:09:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:09:22.384908024Z 2026-04-26 23:09:22 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:09:22.719514641Z 2026-04-26 23:09:22 [info] {"method":"GET","path":"/health","status":200,"duration":"57ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:26.62694514Z 2026-04-26 23:09:26 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:09:26.62696282Z Error: Firestore timeout after 4000ms
2026-04-26T23:09:26.62696883Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:09:26.6269743Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:09:26.62697922Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:09:26.627057402Z 2026-04-26 23:09:26 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:09:27.662619459Z 2026-04-26 23:09:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:32.662120781Z 2026-04-26 23:09:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:32.663400391Z 2026-04-26 23:09:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:37.662409902Z 2026-04-26 23:09:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:42.526460611Z 2026-04-26 23:09:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:09:42.526563893Z 2026-04-26 23:09:42 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:09:42.662320883Z 2026-04-26 23:09:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:46.629962253Z 2026-04-26 23:09:46 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:09:46.629988623Z Error: Firestore timeout after 4000ms
2026-04-26T23:09:46.629993754Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:09:46.630017734Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:09:46.630022734Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:09:46.630027164Z 2026-04-26 23:09:46 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:09:47.66334755Z 2026-04-26 23:09:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:52.663012435Z 2026-04-26 23:09:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:09:57.662860584Z 2026-04-26 23:09:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:02.535609724Z 2026-04-26 23:10:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:10:02.535638915Z 2026-04-26 23:10:02 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:10:02.822402536Z 2026-04-26 23:10:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:02.91944746Z 2026-04-26 23:10:02 [info] {"method":"GET","path":"/health","status":200,"duration":"97ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:06.622200645Z 2026-04-26 23:10:06 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:10:06.622225495Z Error: Firestore timeout after 4000ms
2026-04-26T23:10:06.622232045Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:10:06.622237395Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:10:06.622242006Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:10:06.622268336Z 2026-04-26 23:10:06 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:10:07.662997962Z 2026-04-26 23:10:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:12.662063394Z 2026-04-26 23:10:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:17.662871535Z 2026-04-26 23:10:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:22.543370393Z 2026-04-26 23:10:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:10:22.543396254Z 2026-04-26 23:10:22 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:10:22.662472617Z 2026-04-26 23:10:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:26.62549256Z 2026-04-26 23:10:26 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:10:26.62550788Z Error: Firestore timeout after 4000ms
2026-04-26T23:10:26.625513591Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:10:26.625519641Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:10:26.625524311Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:10:26.625640954Z 2026-04-26 23:10:26 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:10:27.662732756Z 2026-04-26 23:10:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:32.662427981Z 2026-04-26 23:10:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:32.663131527Z 2026-04-26 23:10:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:37.662207597Z 2026-04-26 23:10:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:42.555335668Z 2026-04-26 23:10:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:10:42.557879317Z 2026-04-26 23:10:42 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:10:42.662429735Z 2026-04-26 23:10:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:46.632544291Z 2026-04-26 23:10:46 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:10:46.632571162Z Error: Firestore timeout after 4000ms
2026-04-26T23:10:46.632576642Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:10:46.632581972Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:10:46.632586022Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:10:46.632598552Z 2026-04-26 23:10:46 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:10:47.662887357Z 2026-04-26 23:10:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:52.662703834Z 2026-04-26 23:10:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:10:52.687833439Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T23:10:52.748016262Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T23:10:57.662162473Z 2026-04-26 23:10:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:02.567948036Z 2026-04-26 23:11:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T23:11:02.567961966Z 2026-04-26 23:11:02 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T23:11:02.662207135Z 2026-04-26 23:11:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:02.663027794Z 2026-04-26 23:11:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:07.009845679Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T23:11:07.569428501Z 2026-04-26 23:11:07 [warn] [wa] persistSessionStatus failed Firestore timeout after 5000ms
2026-04-26T23:11:07.569443701Z Error: Firestore timeout after 5000ms
2026-04-26T23:11:07.569448672Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:217:68)
2026-04-26T23:11:07.569453512Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:11:07.569457572Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:11:07.569563864Z 2026-04-26 23:11:07 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 4000ms (attempt 3)
2026-04-26T23:11:07.66237538Z 2026-04-26 23:11:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:08.210221694Z 
2026-04-26T23:11:08.210251066Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T23:11:08.210255566Z > node dist/index.js
2026-04-26T23:11:08.210257906Z 
2026-04-26T23:11:11.570264367Z 2026-04-26 23:11:11 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T23:11:11.670396903Z 2026-04-26 23:11:11 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:11:11.719515928Z 2026-04-26 23:11:11 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T23:11:12.119645141Z 2026-04-26 23:11:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:11:12.119745114Z 2026-04-26 23:11:12 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:11:12.610017488Z 2026-04-26 23:11:12 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T23:11:12.721802566Z 2026-04-26 23:11:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:13.808339999Z 2026-04-26 23:11:13 [info] Firestore initialized successfully
2026-04-26T23:11:13.813054673Z 2026-04-26 23:11:13 [info] ✅ Server running on http://localhost:10000
2026-04-26T23:11:13.813205202Z 2026-04-26 23:11:13 [info] Environment: production
2026-04-26T23:11:13.813377653Z 2026-04-26 23:11:13 [info] API URL: http://localhost:5000
2026-04-26T23:11:13.813543413Z 2026-04-26 23:11:13 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T23:11:14.836826408Z 2026-04-26 23:11:14 [error] Route / not found
2026-04-26T23:11:14.836852259Z Error: Route / not found
2026-04-26T23:11:14.8368567Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T23:11:14.83686216Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T23:11:14.83686654Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T23:11:14.836870431Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T23:11:14.836873941Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T23:11:14.836876871Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T23:11:14.836879851Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T23:11:14.836882941Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T23:11:14.836886541Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T23:11:14.836889572Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T23:11:14.841735743Z 2026-04-26 23:11:14 [info] {"method":"HEAD","path":"/","status":404,"duration":"6ms","ip":"::1"}
2026-04-26T23:11:16.323672866Z 2026-04-26 23:11:16 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:11:16.323691586Z Error: Firestore timeout after 4000ms
2026-04-26T23:11:16.323705547Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:11:16.323708677Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:11:16.323710707Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:11:16.323812579Z 2026-04-26 23:11:16 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:11:17.662897954Z 2026-04-26 23:11:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:22.663431008Z 2026-04-26 23:11:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:23.086914501Z 2026-04-26 23:11:23 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.15"}
2026-04-26T23:11:23.088477168Z 2026-04-26 23:11:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-26T23:11:23.798628576Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T23:11:23.842322531Z 2026-04-26 23:11:23 [error] Route / not found
2026-04-26T23:11:23.842340522Z Error: Route / not found
2026-04-26T23:11:23.842344352Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T23:11:23.842347282Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T23:11:23.842350113Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T23:11:23.842352723Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T23:11:23.842354813Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T23:11:23.842356893Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T23:11:23.842359023Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T23:11:23.842361163Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T23:11:23.842376874Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T23:11:23.842380784Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T23:11:23.84311369Z 2026-04-26 23:11:23 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T23:11:23.86919445Z [0;32m[1m==> [0m[1m[0m
2026-04-26T23:11:23.871153903Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T23:11:23.874205935Z [0;32m[1m==> [0m[1m[0m
2026-04-26T23:11:23.876280261Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T23:11:23.878146582Z [0;32m[1m==> [0m[1m[0m
2026-04-26T23:11:23.880100554Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T23:11:27.661872302Z 2026-04-26 23:11:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:28.085309144Z 2026-04-26 23:11:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-26T23:11:32.665159999Z 2026-04-26 23:11:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:33.085075212Z 2026-04-26 23:11:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-26T23:11:37.662567269Z 2026-04-26 23:11:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:38.09018396Z 2026-04-26 23:11:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-26T23:11:42.662107529Z 2026-04-26 23:11:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.148"}
2026-04-26T23:11:43.085141385Z 2026-04-26 23:11:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
```
