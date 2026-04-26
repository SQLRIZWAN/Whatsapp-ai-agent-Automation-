# Render Deploy Diagnostics

Run: 24969273440
Commit: 3696f080442a48844a7440c68dcad0e8a406a7ff
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n9iob7uimc73bar6fg

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
  "updatedAt": "2026-04-26T23:04:03.330498Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n9iob7uimc73bar6fg",
  "commit": {
    "id": "3696f080442a48844a7440c68dcad0e8a406a7ff",
    "message": "chore: add render runtime log action to maintenance workflow",
    "createdAt": "2026-04-26T23:01:39Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T23:01:53.441408Z",
  "updatedAt": "2026-04-26T23:04:03.328985Z",
  "startedAt": "2026-04-26T23:01:53.392417Z",
  "finishedAt": "2026-04-26T23:04:03.328643Z"
}
```

## App logs (last 4h)
```
2026-04-26T22:45:01.819652182Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T22:45:01.958702079Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:45:01.966198861Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:45:01.968201675Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:45:01.970387894Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T22:45:01.97283873Z [0;32m[1m==> [0m[1m[0m
2026-04-26T22:45:01.974879865Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T22:45:04.0019151Z 2026-04-26 22:45:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:09.001266785Z 2026-04-26 22:45:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:14.001576178Z 2026-04-26 22:45:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:19.001001948Z 2026-04-26 22:45:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:24.003965881Z 2026-04-26 22:45:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:29.010289014Z 2026-04-26 22:45:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:34.001568079Z 2026-04-26 22:45:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:39.002003943Z 2026-04-26 22:45:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:44.001264182Z 2026-04-26 22:45:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:49.001712876Z 2026-04-26 22:45:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:54.001872973Z 2026-04-26 22:45:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:45:59.001994271Z 2026-04-26 22:45:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.234"}
2026-04-26T22:49:57.173669451Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T22:49:57.242828878Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T22:54:50.074453361Z 2026-04-26 22:54:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:54:50.723567256Z 2026-04-26 22:54:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:54:53.231356838Z 2026-04-26 22:54:53 [info] [wa] connection.update for manual-test-uid: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:54:53.231450076Z 2026-04-26 22:54:53 [info] [wa] QR code received for manual-test-uid
2026-04-26T22:54:55.073870645Z 2026-04-26 22:54:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:54:57.341085701Z 2026-04-26 22:54:57 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T22:54:57.341114454Z Error: Firestore timeout after 4000ms
2026-04-26T22:54:57.341121444Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T22:54:57.341127545Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:54:57.341133355Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:54:57.341152957Z 2026-04-26 22:54:57 [info] [wa] QR code saved and emitted for manual-test-uid
2026-04-26T22:55:00.073657413Z 2026-04-26 22:55:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:00.074684995Z 2026-04-26 22:55:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:01.743362953Z 2026-04-26 22:55:01 [info] [wa] connection.update for manual-test-uid: connection=close, qr=false, lastDisconnect=true
2026-04-26T22:55:01.743399756Z 2026-04-26 22:55:01 [warn] [wa] Connection closed for manual-test-uid: code=401, error=Intentional Logout
2026-04-26T22:55:02.131468133Z 2026-04-26 22:55:02 [info] [wa-auth] no creds doc — initializing new creds for manual-test-uid
2026-04-26T22:55:02.131850983Z 2026-04-26 22:55:02 [warn] [wa-auth] clearing stored auth for manual-test-uid
2026-04-26T22:55:05.073394104Z 2026-04-26 22:55:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:06.744002885Z 2026-04-26 22:55:06 [warn] [wa] persistSessionStatus failed Firestore timeout after 5000ms
2026-04-26T22:55:06.744021446Z Error: Firestore timeout after 5000ms
2026-04-26T22:55:06.744026546Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:217:68)
2026-04-26T22:55:06.744031037Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:55:06.744034987Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:55:06.744088871Z 2026-04-26 22:55:06 [info] [wa] User logged out: manual-test-uid
2026-04-26T22:55:06.931132102Z 2026-04-26 22:55:06 [info] [wa-auth] no creds doc — initializing new creds for manual-test-uid
2026-04-26T22:55:06.931757571Z 2026-04-26 22:55:06 [warn] [wa-auth] clearing stored auth for manual-test-uid
2026-04-26T22:55:07.347200782Z 2026-04-26 22:55:07 [warn] [wa] persistSessionStatus failed Firestore timeout after 5000ms
2026-04-26T22:55:07.347224114Z Error: Firestore timeout after 5000ms
2026-04-26T22:55:07.347253477Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:217:68)
2026-04-26T22:55:07.347259987Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:55:07.347264047Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:55:07.347274968Z 2026-04-26 22:55:07 [info] [wa] manual-test-uid fully logged out
2026-04-26T22:55:07.34792498Z 2026-04-26 22:55:07 [info] {"method":"POST","path":"/logout","status":200,"duration":"5606ms","ip":"::1"}
2026-04-26T22:55:10.130044181Z 2026-04-26 22:55:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:12.094295443Z 2026-04-26 22:55:12 [warn] [wa] persistSessionStatus failed Firestore timeout after 5000ms
2026-04-26T22:55:12.094310844Z Error: Firestore timeout after 5000ms
2026-04-26T22:55:12.094315234Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:217:68)
2026-04-26T22:55:12.094318845Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:55:12.094321615Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:55:12.094330046Z 2026-04-26 22:55:12 [info] [wa] manual-test-uid fully logged out
2026-04-26T22:55:15.074041981Z 2026-04-26 22:55:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:20.073665587Z 2026-04-26 22:55:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:25.074310287Z 2026-04-26 22:55:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:30.0740881Z 2026-04-26 22:55:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:30.074941188Z 2026-04-26 22:55:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:35.073722292Z 2026-04-26 22:55:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:40.073847036Z 2026-04-26 22:55:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:45.073798719Z 2026-04-26 22:55:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:50.073932878Z 2026-04-26 22:55:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:55:55.073642125Z 2026-04-26 22:55:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:00.073426011Z 2026-04-26 22:56:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:00.074139689Z 2026-04-26 22:56:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:05.073574158Z 2026-04-26 22:56:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:10.07387131Z 2026-04-26 22:56:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:15.074281093Z 2026-04-26 22:56:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:20.074240892Z 2026-04-26 22:56:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:25.074307962Z 2026-04-26 22:56:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:30.074033667Z 2026-04-26 22:56:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:30.074758646Z 2026-04-26 22:56:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:35.073296798Z 2026-04-26 22:56:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:40.073752667Z 2026-04-26 22:56:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:45.073587139Z 2026-04-26 22:56:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:50.07362625Z 2026-04-26 22:56:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:56:55.073896402Z 2026-04-26 22:56:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:00.074182908Z 2026-04-26 22:57:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:00.075043128Z 2026-04-26 22:57:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:05.07722849Z 2026-04-26 22:57:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:10.073387379Z 2026-04-26 22:57:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:15.073911153Z 2026-04-26 22:57:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:20.073766256Z 2026-04-26 22:57:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:25.073560797Z 2026-04-26 22:57:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:30.074224861Z 2026-04-26 22:57:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:30.07495585Z 2026-04-26 22:57:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:35.074156659Z 2026-04-26 22:57:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:40.073659107Z 2026-04-26 22:57:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:45.07382602Z 2026-04-26 22:57:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:50.073595374Z 2026-04-26 22:57:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:57:50.135332504Z 2026-04-26 22:57:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:57:50.136231016Z 2026-04-26 22:57:50 [info] [keepalive] ping OK
2026-04-26T22:57:52.94447811Z 2026-04-26 22:57:52 [error] Registration error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T22:57:52.944505113Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T22:57:52.944510913Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T22:57:52.944515974Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T22:57:52.944521574Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:57:52.944526214Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:57:52.944531155Z Caused by: Error
2026-04-26T22:57:52.944536285Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T22:57:52.944553077Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T22:57:52.944557337Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T22:57:52.944560397Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T22:57:52.944563147Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T22:57:52.944565987Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T22:57:52.944569038Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T22:57:52.944571988Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T22:57:52.944574908Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T22:57:52.944577728Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T22:57:52.944785795Z 2026-04-26 22:57:52 [error] Registration failed
2026-04-26T22:57:52.944794006Z Error: Registration failed
2026-04-26T22:57:52.944797266Z     at AuthService.register (/opt/render/project/src/backend/dist/modules/auth/services/authService.js:63:19)
2026-04-26T22:57:52.944799806Z     at async /opt/render/project/src/backend/dist/modules/auth/controllers/authController.js:12:20
2026-04-26T22:57:55.073355041Z 2026-04-26 22:57:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:00.074390794Z 2026-04-26 22:58:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:00.075077369Z 2026-04-26 22:58:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:05.073891067Z 2026-04-26 22:58:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:10.073420815Z 2026-04-26 22:58:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:15.07336844Z 2026-04-26 22:58:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:20.073993063Z 2026-04-26 22:58:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:21.077160488Z 2026-04-26 22:58:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:21.653261563Z 2026-04-26 22:58:21 [info] Client connected: LNdVjeIkqQY_dS1uAAAB
2026-04-26T22:58:21.956177372Z 2026-04-26 22:58:21 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket LNdVjeIkqQY_dS1uAAAB
2026-04-26T22:58:23.424334108Z 2026-04-26 22:58:23 [info] Client connected: HME1VUJr5iDXC4BZAAAD
2026-04-26T22:58:23.755179694Z 2026-04-26 22:58:23 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket HME1VUJr5iDXC4BZAAAD
2026-04-26T22:58:23.788638746Z 2026-04-26 22:58:23 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:25.073890221Z 2026-04-26 22:58:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:28.187040157Z 2026-04-26 22:58:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:30.073556504Z 2026-04-26 22:58:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:30.07425849Z 2026-04-26 22:58:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:30.147670998Z 2026-04-26 22:58:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:31.760917392Z 2026-04-26 22:58:31 [info] Client connected: 1l1ffpUKXrbNPHzhAAAF
2026-04-26T22:58:31.775593863Z 2026-04-26 22:58:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:31.954253961Z 2026-04-26 22:58:31 [info] Client disconnected: 1l1ffpUKXrbNPHzhAAAF
2026-04-26T22:58:33.608307606Z 2026-04-26 22:58:33 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T22:58:34.031522664Z 2026-04-26 22:58:34 [info] {"method":"GET","path":"/calls","status":200,"duration":"121ms","ip":"::1"}
2026-04-26T22:58:34.037960782Z 2026-04-26 22:58:34 [info] {"method":"GET","path":"/messages","status":200,"duration":"162ms","ip":"::1"}
2026-04-26T22:58:34.63480109Z 2026-04-26 22:58:34 [info] Client connected: EPvAZyq7U3JKwZe2AAAH
2026-04-26T22:58:34.894300632Z 2026-04-26 22:58:34 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket EPvAZyq7U3JKwZe2AAAH
2026-04-26T22:58:35.073357312Z 2026-04-26 22:58:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:35.523590212Z 2026-04-26 22:58:35 [info] Client connected: FsNmfrBIT0J7DBX3AAAJ
2026-04-26T22:58:35.803695132Z 2026-04-26 22:58:35 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket FsNmfrBIT0J7DBX3AAAJ
2026-04-26T22:58:36.434980502Z 2026-04-26 22:58:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:38.249863875Z 2026-04-26 22:58:38 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:39.767243496Z 2026-04-26 22:58:39 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:58:40.073899252Z 2026-04-26 22:58:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:41.922910276Z 2026-04-26 22:58:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:44.155272815Z 2026-04-26 22:58:44 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:58:45.07411909Z 2026-04-26 22:58:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:46.231197973Z 2026-04-26 22:58:46 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:58:47.97642155Z 2026-04-26 22:58:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:48.842183401Z 2026-04-26 22:58:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T22:58:48.951833124Z 2026-04-26 22:58:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:58:49.035100784Z 2026-04-26 22:58:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T22:58:49.035368105Z 2026-04-26 22:58:49 [info] {"method":"POST","path":"/connect","status":200,"duration":"382ms","ip":"::1"}
2026-04-26T22:58:49.934206147Z 2026-04-26 22:58:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:58:49.93423979Z 2026-04-26 22:58:49 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:58:50.136765785Z 2026-04-26 22:58:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:50.139727103Z 2026-04-26 22:58:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:54.142626646Z 2026-04-26 22:58:54 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T22:58:54.142647008Z Error: Firestore timeout after 4000ms
2026-04-26T22:58:54.142651998Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T22:58:54.142656288Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:58:54.142660649Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:58:54.142725764Z 2026-04-26 22:58:54 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:58:55.074531625Z 2026-04-26 22:58:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:58:55.599562948Z 2026-04-26 22:58:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:55.698919452Z 2026-04-26 22:58:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:58.946533284Z 2026-04-26 22:58:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:58:59.196242314Z 2026-04-26 22:58:59 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:59:00.137234582Z 2026-04-26 22:59:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-26T22:59:00.228598822Z 2026-04-26 22:59:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:00.229962032Z 2026-04-26 22:59:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:01.357398569Z 2026-04-26 22:59:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T22:59:01.357440673Z 2026-04-26 22:59:01 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=515, error=Stream Errored (restart required)
2026-04-26T22:59:04.137261688Z 2026-04-26 22:59:04 [warn] [wa-auth] Failed to save creds to Firestore for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: Error: Firestore timeout after 4000ms
2026-04-26T22:59:05.073973838Z 2026-04-26 22:59:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:06.237227533Z 2026-04-26 22:59:06 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:59:06.359079366Z 2026-04-26 22:59:06 [warn] [wa] persistSessionStatus failed Firestore timeout after 5000ms
2026-04-26T22:59:06.359102057Z Error: Firestore timeout after 5000ms
2026-04-26T22:59:06.359108068Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:217:68)
2026-04-26T22:59:06.359113558Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:59:06.359118569Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:59:06.359323686Z 2026-04-26 22:59:06 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 2000ms (attempt 2)
2026-04-26T22:59:06.420878938Z 2026-04-26 22:59:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:08.359161462Z 2026-04-26 22:59:08 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T22:59:08.460099003Z 2026-04-26 22:59:08 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:59:08.462270017Z 2026-04-26 22:59:08 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T22:59:09.334667541Z 2026-04-26 22:59:09 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T22:59:09.334695693Z 2026-04-26 22:59:09 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:59:09.933733415Z 2026-04-26 22:59:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:09.944380302Z 2026-04-26 22:59:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:10.073833436Z 2026-04-26 22:59:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:13.536424041Z 2026-04-26 22:59:13 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T22:59:13.536446673Z Error: Firestore timeout after 4000ms
2026-04-26T22:59:13.536453243Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T22:59:13.536459254Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T22:59:13.536463944Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T22:59:13.536497367Z 2026-04-26 22:59:13 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T22:59:15.073824258Z 2026-04-26 22:59:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:15.307737845Z 2026-04-26 22:59:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:15.832607418Z 2026-04-26 22:59:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:18.92498234Z 2026-04-26 22:59:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:18.948652104Z 2026-04-26 22:59:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:20.073632199Z 2026-04-26 22:59:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:23.220277048Z 2026-04-26 22:59:23 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:59:23.417229341Z 2026-04-26 22:59:23 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:59:25.07412884Z 2026-04-26 22:59:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:26.877542583Z 2026-04-26 22:59:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:26.935753906Z 2026-04-26 22:59:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:30.073849883Z 2026-04-26 22:59:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:30.074545459Z 2026-04-26 22:59:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:31.236599398Z 2026-04-26 22:59:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:31.435504637Z 2026-04-26 22:59:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:34.75530734Z 2026-04-26 22:59:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:34.949894481Z 2026-04-26 22:59:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:35.073626213Z 2026-04-26 22:59:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:39.048146048Z 2026-04-26 22:59:39 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T22:59:40.073362645Z 2026-04-26 22:59:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:42.922008876Z 2026-04-26 22:59:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:45.073999744Z 2026-04-26 22:59:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:47.295239027Z 2026-04-26 22:59:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:50.07406846Z 2026-04-26 22:59:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:50.860995997Z 2026-04-26 22:59:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:55.077240731Z 2026-04-26 22:59:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T22:59:55.387506892Z 2026-04-26 22:59:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T22:59:58.811845251Z 2026-04-26 22:59:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:00.073930974Z 2026-04-26 23:00:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:00.074608839Z 2026-04-26 23:00:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:03.078620697Z 2026-04-26 23:00:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:05.074211771Z 2026-04-26 23:00:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:06.781801312Z 2026-04-26 23:00:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:09.433650731Z 2026-04-26 23:00:09 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:00:09.433678743Z 2026-04-26 23:00:09 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:00:10.128253214Z 2026-04-26 23:00:10 [info] Client disconnected: EPvAZyq7U3JKwZe2AAAH
2026-04-26T23:00:10.130387806Z 2026-04-26 23:00:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:10.857073418Z 2026-04-26 23:00:10 [info] Client disconnected: FsNmfrBIT0J7DBX3AAAJ
2026-04-26T23:00:11.131860574Z 2026-04-26 23:00:11 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:13.931750379Z 2026-04-26 23:00:13 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:00:13.931776961Z Error: Firestore timeout after 4000ms
2026-04-26T23:00:13.931784001Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:00:13.931807443Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:00:13.931809934Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:00:13.931825285Z 2026-04-26 23:00:13 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:00:14.829783387Z 2026-04-26 23:00:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:15.074766876Z 2026-04-26 23:00:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:19.261016003Z 2026-04-26 23:00:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:20.073659883Z 2026-04-26 23:00:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:22.783743632Z 2026-04-26 23:00:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:25.074405664Z 2026-04-26 23:00:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:27.352772985Z 2026-04-26 23:00:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:29.440652437Z 2026-04-26 23:00:29 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:00:29.44068856Z 2026-04-26 23:00:29 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:00:30.073917281Z 2026-04-26 23:00:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:30.074619057Z 2026-04-26 23:00:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:30.782477867Z 2026-04-26 23:00:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:33.531543331Z 2026-04-26 23:00:33 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:00:33.531563483Z Error: Firestore timeout after 4000ms
2026-04-26T23:00:33.531568343Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:00:33.531572664Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:00:33.531576314Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:00:33.531579994Z 2026-04-26 23:00:33 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:00:35.074216974Z 2026-04-26 23:00:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:35.33985275Z 2026-04-26 23:00:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:38.766154922Z 2026-04-26 23:00:38 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:00:40.074277824Z 2026-04-26 23:00:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:44.891316465Z 2026-04-26 23:00:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:45.074154823Z 2026-04-26 23:00:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:46.742498458Z 2026-04-26 23:00:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:49.448882334Z 2026-04-26 23:00:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:00:49.448946159Z 2026-04-26 23:00:49 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:00:50.073742434Z 2026-04-26 23:00:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:51.527156806Z 2026-04-26 23:00:51 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:00:53.532329679Z 2026-04-26 23:00:53 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:00:53.532365102Z Error: Firestore timeout after 4000ms
2026-04-26T23:00:53.532370143Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:00:53.532373953Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:00:53.532376713Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:00:53.532397425Z 2026-04-26 23:00:53 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:00:54.829209186Z 2026-04-26 23:00:54 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:00:55.073916776Z 2026-04-26 23:00:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:00:59.29524517Z 2026-04-26 23:00:59 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T23:01:00.074505777Z 2026-04-26 23:01:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:00.075288509Z 2026-04-26 23:01:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:02.754689305Z 2026-04-26 23:01:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:01:05.076852463Z 2026-04-26 23:01:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:06.336042521Z 2026-04-26 23:01:06 [error] Registration error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T23:01:06.336061683Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T23:01:06.336066823Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T23:01:06.336071393Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T23:01:06.336076214Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:01:06.336080144Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:01:06.336084034Z Caused by: Error
2026-04-26T23:01:06.336088325Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T23:01:06.336092165Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T23:01:06.336096735Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T23:01:06.336100696Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T23:01:06.336104646Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T23:01:06.336108616Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T23:01:06.336121957Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T23:01:06.336124638Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T23:01:06.336127078Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T23:01:06.336129418Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T23:01:06.336923182Z 2026-04-26 23:01:06 [error] Registration failed
2026-04-26T23:01:06.336933243Z Error: Registration failed
2026-04-26T23:01:06.336936413Z     at AuthService.register (/opt/render/project/src/backend/dist/modules/auth/services/authService.js:63:19)
2026-04-26T23:01:06.336938773Z     at async /opt/render/project/src/backend/dist/modules/auth/controllers/authController.js:12:20
2026-04-26T23:01:07.885697484Z 2026-04-26 23:01:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T23:01:09.457433451Z 2026-04-26 23:01:09 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:01:09.457595964Z 2026-04-26 23:01:09 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:01:10.127752566Z 2026-04-26 23:01:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:13.629212945Z 2026-04-26 23:01:13 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:01:13.629231077Z Error: Firestore timeout after 4000ms
2026-04-26T23:01:13.629236527Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:01:13.629243178Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:01:13.629247768Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:01:13.629323484Z 2026-04-26 23:01:13 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:01:15.073935148Z 2026-04-26 23:01:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:18.167970602Z 2026-04-26 23:01:18 [info] Client disconnected: LNdVjeIkqQY_dS1uAAAB
2026-04-26T23:01:18.808453717Z 2026-04-26 23:01:18 [info] Client disconnected: HME1VUJr5iDXC4BZAAAD
2026-04-26T23:01:20.07467718Z 2026-04-26 23:01:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:25.073525423Z 2026-04-26 23:01:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:29.46582966Z 2026-04-26 23:01:29 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:01:29.465909006Z 2026-04-26 23:01:29 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:01:30.074229342Z 2026-04-26 23:01:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:30.107106154Z 2026-04-26 23:01:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:33.535683663Z 2026-04-26 23:01:33 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:01:33.535711516Z Error: Firestore timeout after 4000ms
2026-04-26T23:01:33.535720156Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:01:33.535742498Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:01:33.535746538Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:01:33.53576406Z 2026-04-26 23:01:33 [info] [wa] QR code saved and emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:01:35.073544103Z 2026-04-26 23:01:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:40.074207238Z 2026-04-26 23:01:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:45.073691023Z 2026-04-26 23:01:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:49.475324407Z 2026-04-26 23:01:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T23:01:49.475418274Z 2026-04-26 23:01:49 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-26T23:01:50.074463147Z 2026-04-26 23:01:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:54.456831899Z 2026-04-26 23:01:54 [error] Registration error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T23:01:54.456852541Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T23:01:54.456857921Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T23:01:54.456862082Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T23:01:54.456866652Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:01:54.456870352Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:01:54.456873992Z Caused by: Error
2026-04-26T23:01:54.456878753Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T23:01:54.456883413Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T23:01:54.456889014Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T23:01:54.456893604Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T23:01:54.456897894Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T23:01:54.456902335Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T23:01:54.456906195Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T23:01:54.456910035Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T23:01:54.456914426Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T23:01:54.456918346Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T23:01:54.457077709Z 2026-04-26 23:01:54 [error] Registration failed
2026-04-26T23:01:54.457084719Z Error: Registration failed
2026-04-26T23:01:54.45708787Z     at AuthService.register (/opt/render/project/src/backend/dist/modules/auth/services/authService.js:63:19)
2026-04-26T23:01:54.45709036Z     at async /opt/render/project/src/backend/dist/modules/auth/controllers/authController.js:12:20
2026-04-26T23:01:54.476076005Z 2026-04-26 23:01:54 [warn] [wa] persistSessionStatus failed Firestore timeout after 5000ms
2026-04-26T23:01:54.476089826Z Error: Firestore timeout after 5000ms
2026-04-26T23:01:54.476093687Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:217:68)
2026-04-26T23:01:54.476096997Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T23:01:54.476099397Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T23:01:54.476180894Z 2026-04-26 23:01:54 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 4000ms (attempt 3)
2026-04-26T23:01:55.073865245Z 2026-04-26 23:01:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:01:58.476684214Z 2026-04-26 23:01:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T23:01:58.571963109Z 2026-04-26 23:01:58 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:01:58.574592641Z 2026-04-26 23:01:58 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T23:01:59.168094225Z 2026-04-26 23:01:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-26T23:01:59.168120517Z 2026-04-26 23:01:59 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T23:02:00.130700744Z 2026-04-26 23:02:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:00.131719925Z 2026-04-26 23:02:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-26T23:02:03.231136758Z 2026-04-26 23:02:03 [warn] Failed to save QR code: Firestore timeout after 4000ms
2026-04-26T23:02:03.23115877Z Error: Firestore timeout after 4000ms
2026-04-26T23:02:03.23116456Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/qrService.js:18:60)
2026-04-26T23:02:03.231170191Z     at listOnTimeout (node:internal/timers:605:17)
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
```
