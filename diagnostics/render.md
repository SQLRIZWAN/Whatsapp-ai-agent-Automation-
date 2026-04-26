# Render Deploy Diagnostics

Run: 24958390515
Commit: b44be2fc6e1cd5b716c34467fa5a05a35d3c6071
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n1k2egvqtc73ajnh10

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
  "updatedAt": "2026-04-26T14:00:59.481982Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n1k2egvqtc73ajnh10",
  "commit": {
    "id": "b44be2fc6e1cd5b716c34467fa5a05a35d3c6071",
    "message": "Merged all branches",
    "createdAt": "2026-04-26T13:58:14Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T13:58:33.75986Z",
  "updatedAt": "2026-04-26T14:00:59.480405Z",
  "startedAt": "2026-04-26T13:58:33.708864Z",
  "finishedAt": "2026-04-26T14:00:59.480251Z"
}
```

## App logs (last 4h)
```
2026-04-26T13:47:00.772070281Z 2026-04-26 13:47:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:05.771394638Z 2026-04-26 13:47:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:10.771562589Z 2026-04-26 13:47:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:15.771675007Z 2026-04-26 13:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:15.772335459Z 2026-04-26 13:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:20.771914134Z 2026-04-26 13:47:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:25.771704623Z 2026-04-26 13:47:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:30.772044627Z 2026-04-26 13:47:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:35.772166758Z 2026-04-26 13:47:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:37.854281111Z 2026-04-26 13:47:37 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:47:40.775200244Z 2026-04-26 13:47:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:45.771849417Z 2026-04-26 13:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:45.775243812Z 2026-04-26 13:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:50.771232753Z 2026-04-26 13:47:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:55.772031789Z 2026-04-26 13:47:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:57.849769196Z 2026-04-26 13:47:57 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:48:00.771440598Z 2026-04-26 13:48:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:05.771977989Z 2026-04-26 13:48:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:10.771946145Z 2026-04-26 13:48:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:15.772432373Z 2026-04-26 13:48:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:15.773086525Z 2026-04-26 13:48:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:17.945013306Z 2026-04-26 13:48:17 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:48:20.772154714Z 2026-04-26 13:48:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:25.771746548Z 2026-04-26 13:48:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:30.426810857Z 2026-04-26 13:48:30 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:48:30.426833288Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:48:30.426838439Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:48:30.426842729Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:48:30.426849169Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:48:30.42685379Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:48:30.42685806Z Caused by: Error
2026-04-26T13:48:30.426871051Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:48:30.426874401Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:48:30.426877651Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:48:30.426880461Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:48:30.426883301Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:48:30.426886182Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:48:30.426889022Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:48:30.426891522Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:48:30.426894312Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:48:30.426896813Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:48:30.772818276Z 2026-04-26 13:48:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:35.771286969Z 2026-04-26 13:48:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:37.852272954Z 2026-04-26 13:48:37 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:48:40.77144085Z 2026-04-26 13:48:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:45.771898291Z 2026-04-26 13:48:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:45.772454356Z 2026-04-26 13:48:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:50.772409005Z 2026-04-26 13:48:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:55.771690642Z 2026-04-26 13:48:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:57.853175259Z 2026-04-26 13:48:57 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:49:00.771711467Z 2026-04-26 13:49:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:05.771753843Z 2026-04-26 13:49:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:10.771882566Z 2026-04-26 13:49:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:15.771340317Z 2026-04-26 13:49:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:15.771850639Z 2026-04-26 13:49:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:17.845887895Z 2026-04-26 13:49:17 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T13:49:17.846006283Z 2026-04-26 13:49:17 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T13:49:20.7716134Z 2026-04-26 13:49:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:25.772024742Z 2026-04-26 13:49:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:28.523899139Z 2026-04-26 13:49:28 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:49:28.52392191Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:49:28.523927241Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:49:28.523931901Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:49:28.523936971Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:49:28.523941401Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:49:28.523945142Z Caused by: Error
2026-04-26T13:49:28.523949632Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:49:28.523953402Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:49:28.523957672Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:49:28.523961543Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:49:28.523965293Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:49:28.523969273Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:49:28.523972973Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:49:28.523976693Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:49:28.523980494Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:49:28.523987114Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:49:30.773692204Z 2026-04-26 13:49:30 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:33.847667066Z 2026-04-26 13:49:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T13:49:33.952975135Z 2026-04-26 13:49:33 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:49:34.50391762Z 2026-04-26 13:49:34 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:49:35.772360147Z 2026-04-26 13:49:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:40.771052422Z 2026-04-26 13:49:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:45.771761625Z 2026-04-26 13:49:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:45.772442448Z 2026-04-26 13:49:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:50.771202479Z 2026-04-26 13:49:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:54.211470976Z 2026-04-26 13:49:54 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:49:54.211498568Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:49:54.211505478Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:49:54.211510959Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:49:54.211516849Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:49:54.211521799Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:49:54.21152649Z Caused by: Error
2026-04-26T13:49:54.21153241Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:49:54.211540861Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:49:54.211546891Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:49:54.211552231Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:49:54.211557402Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:49:54.211562462Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:49:54.211567892Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:49:54.211572693Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:49:54.211580813Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:49:54.211586274Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:49:55.771348568Z 2026-04-26 13:49:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:00.77106272Z 2026-04-26 13:50:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:05.771916875Z 2026-04-26 13:50:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:10.771477338Z 2026-04-26 13:50:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:14.244235934Z 2026-04-26 13:50:14 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:14.244883965Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:14.244892606Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:50:14.244895636Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:50:14.244898306Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:50:14.244900686Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:50:14.244902946Z Caused by: Error
2026-04-26T13:50:14.244905696Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:50:14.244908167Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:14.244910717Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:50:14.244912897Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:50:14.244914887Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:50:14.244916987Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:50:14.244919317Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:50:14.244921677Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:50:14.244924168Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:50:14.244926398Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:15.830348067Z 2026-04-26 13:50:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:15.830882371Z 2026-04-26 13:50:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:20.772503567Z 2026-04-26 13:50:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:25.77203355Z 2026-04-26 13:50:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:30.771178869Z 2026-04-26 13:50:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:32.688012865Z 2026-04-26 13:50:32 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:32.688033266Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:32.688039277Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:50:32.688042827Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:50:32.688056898Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:50:32.688058678Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:50:32.688060348Z Caused by: Error
2026-04-26T13:50:32.688062708Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:50:32.688064478Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:32.688066908Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:50:32.688068779Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:50:32.688070459Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:50:32.688072699Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:50:32.688076269Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:50:32.688079489Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:50:32.688082529Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:50:32.688085669Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:34.545285139Z 2026-04-26 13:50:34 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:50:35.772716511Z 2026-04-26 13:50:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:40.771259143Z 2026-04-26 13:50:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:45.771328033Z 2026-04-26 13:50:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:45.772033668Z 2026-04-26 13:50:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:50.77213635Z 2026-04-26 13:50:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:54.51685107Z 2026-04-26 13:50:54 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:50:55.772228712Z 2026-04-26 13:50:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:57.913794959Z 2026-04-26 13:50:57 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:57.91381957Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:57.913825261Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:50:57.913829651Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:50:57.913844122Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:50:57.913846572Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:50:57.913848642Z Caused by: Error
2026-04-26T13:50:57.913851802Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:50:57.913854092Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:57.913856553Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:50:57.913858733Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:50:57.913860893Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:50:57.913863013Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:50:57.913865263Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:50:57.913867373Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:50:57.913869564Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:50:57.913871784Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:51:00.771602589Z 2026-04-26 13:51:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:05.773157875Z 2026-04-26 13:51:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:10.772065464Z 2026-04-26 13:51:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:14.644957932Z 2026-04-26 13:51:14 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:51:15.772594386Z 2026-04-26 13:51:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:15.773377835Z 2026-04-26 13:51:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:20.771994997Z 2026-04-26 13:51:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:25.772137025Z 2026-04-26 13:51:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:30.772286065Z 2026-04-26 13:51:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:34.530458551Z 2026-04-26 13:51:34 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:51:35.770979733Z 2026-04-26 13:51:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:40.771403031Z 2026-04-26 13:51:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:45.771864362Z 2026-04-26 13:51:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:45.772650402Z 2026-04-26 13:51:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:50.772167694Z 2026-04-26 13:51:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:52.544741478Z 2026-04-26 13:51:52 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:51:52.544760859Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:51:52.544764509Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:51:52.544767509Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:51:52.54477413Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:51:52.54477649Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:51:52.54477878Z Caused by: Error
2026-04-26T13:51:52.54478202Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:51:52.54478439Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:51:52.54478779Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:51:52.544790061Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:51:52.544792401Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:51:52.544794641Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:51:52.544799221Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:51:52.544801921Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:51:52.544804322Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:51:52.544806452Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:51:54.549406078Z 2026-04-26 13:51:54 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:51:55.772463446Z 2026-04-26 13:51:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:00.772220933Z 2026-04-26 13:52:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:05.123481697Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T13:52:05.185579603Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T13:52:05.77209889Z 2026-04-26 13:52:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:10.771946815Z 2026-04-26 13:52:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:14.533679889Z 2026-04-26 13:52:14 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T13:52:14.533723842Z 2026-04-26 13:52:14 [info] [wa] reconnecting in 30000ms (attempt 6)
2026-04-26T13:52:15.774272017Z 2026-04-26 13:52:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:15.775148002Z 2026-04-26 13:52:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:18.801365203Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T13:52:19.900615331Z 
2026-04-26T13:52:19.900639172Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T13:52:19.900644392Z > node dist/index.js
2026-04-26T13:52:19.900646872Z 
2026-04-26T13:52:20.772680502Z 2026-04-26 13:52:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:23.999649293Z 2026-04-26 13:52:23 [info] [ai] Gemini ready — model: gemini-2.5-flash
2026-04-26T13:52:24.893429591Z 2026-04-26 13:52:24 [info] Firestore initialized successfully
2026-04-26T13:52:24.897704911Z 2026-04-26 13:52:24 [info] ✅ Server running on http://localhost:10000
2026-04-26T13:52:24.89788626Z 2026-04-26 13:52:24 [info] Environment: production
2026-04-26T13:52:24.89807025Z 2026-04-26 13:52:24 [info] API URL: http://localhost:5000
2026-04-26T13:52:24.898271931Z 2026-04-26 13:52:24 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T13:52:25.513346978Z 2026-04-26 13:52:25 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:25.515445461Z 2026-04-26 13:52:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:25.776270085Z 2026-04-26 13:52:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:25.875877632Z 2026-04-26 13:52:25 [error] Route / not found
2026-04-26T13:52:25.875897453Z Error: Route / not found
2026-04-26T13:52:25.875902263Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T13:52:25.875905523Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T13:52:25.875909003Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T13:52:25.875912693Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T13:52:25.875915634Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T13:52:25.875918163Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T13:52:25.875920774Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T13:52:25.875923424Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T13:52:25.875925804Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T13:52:25.875927984Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T13:52:25.876735647Z 2026-04-26 13:52:25 [info] {"method":"HEAD","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T13:52:26.366000571Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T13:52:26.485764949Z 2026-04-26 13:52:26 [error] Route / not found
2026-04-26T13:52:26.48578536Z Error: Route / not found
2026-04-26T13:52:26.48579062Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T13:52:26.485795401Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T13:52:26.485799921Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T13:52:26.485803741Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T13:52:26.485806471Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T13:52:26.485809171Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T13:52:26.485812051Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T13:52:26.485814642Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T13:52:26.485834863Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T13:52:26.485837953Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T13:52:26.48654077Z 2026-04-26 13:52:26 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T13:52:26.617782183Z [0;32m[1m==> [0m[1m[0m
2026-04-26T13:52:26.622237132Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T13:52:26.627057371Z [0;32m[1m==> [0m[1m[0m
2026-04-26T13:52:26.635214458Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T13:52:26.639673477Z [0;32m[1m==> [0m[1m[0m
2026-04-26T13:52:26.644077725Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T13:52:30.507939714Z 2026-04-26 13:52:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:30.772498174Z 2026-04-26 13:52:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:35.507223843Z 2026-04-26 13:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:35.510195304Z 2026-04-26 13:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:35.771686239Z 2026-04-26 13:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:37.996709986Z 2026-04-26 13:52:37 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:52:37.996728657Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:52:37.996733347Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:52:37.996737678Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:52:37.996742118Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:52:37.996745818Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:52:37.996749688Z Caused by: Error
2026-04-26T13:52:37.996754028Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:52:37.996757929Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:52:37.996762089Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:52:37.996765919Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:52:37.996769949Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:52:37.99677395Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:52:37.99677772Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:52:37.99678145Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:52:37.99678511Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:52:37.996788921Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:52:40.50571274Z 2026-04-26 13:52:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:40.771513676Z 2026-04-26 13:52:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:44.534508153Z 2026-04-26 13:52:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T13:52:44.642080424Z 2026-04-26 13:52:44 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:52:45.45229097Z 2026-04-26 13:52:45 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:52:45.50705482Z 2026-04-26 13:52:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:45.947289425Z 2026-04-26 13:52:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:47.077034395Z 2026-04-26 13:52:47 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:52:47.077064177Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:52:47.077068287Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:52:47.077071597Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:52:47.077074858Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:52:47.077077138Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:52:47.077079378Z Caused by: Error
2026-04-26T13:52:47.077083638Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:52:47.077086178Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:52:47.077090048Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:52:47.077092468Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:52:47.077094859Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:52:47.077097139Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:52:47.077099409Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:52:47.077101659Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:52:47.07711708Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:52:47.07712166Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:52:50.511237564Z 2026-04-26 13:52:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:50.780052004Z 2026-04-26 13:52:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:55.510681883Z 2026-04-26 13:52:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:55.771423657Z 2026-04-26 13:52:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:53:00.505769797Z 2026-04-26 13:53:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:00.7717775Z 2026-04-26 13:53:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:53:05.505953137Z 2026-04-26 13:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:05.506746579Z 2026-04-26 13:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:05.771681794Z 2026-04-26 13:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:53:09.464283105Z 2026-04-26 13:53:09 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:53:09.464321968Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:53:09.464326098Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:53:09.464328888Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:53:09.464331288Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:53:09.464333489Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:53:09.464335569Z Caused by: Error
2026-04-26T13:53:09.464338639Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:53:09.464340799Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:53:09.464343269Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:53:09.464345499Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:53:09.464347659Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:53:09.464349799Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:53:09.46435185Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:53:09.46435408Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:53:09.46435622Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:53:09.46435838Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:53:10.505882513Z 2026-04-26 13:53:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:10.771164652Z 2026-04-26 13:53:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:53:15.506746609Z 2026-04-26 13:53:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:15.772009847Z 2026-04-26 13:53:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:53:16.05582643Z 2026-04-26 13:53:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T13:53:16.058426965Z 2026-04-26 13:53:16 [info] [keepalive] ping OK
2026-04-26T13:53:20.507114989Z 2026-04-26 13:53:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:20.771368709Z 2026-04-26 13:53:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:53:25.507117949Z 2026-04-26 13:53:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:25.772402817Z 2026-04-26 13:53:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:53:30.505496933Z 2026-04-26 13:53:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:35.506292426Z 2026-04-26 13:53:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:35.507229927Z 2026-04-26 13:53:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:40.505603151Z 2026-04-26 13:53:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:45.505593502Z 2026-04-26 13:53:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:50.506379936Z 2026-04-26 13:53:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:53:55.505624527Z 2026-04-26 13:53:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:00.507913092Z 2026-04-26 13:54:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:05.506643626Z 2026-04-26 13:54:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:05.507344394Z 2026-04-26 13:54:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:10.591514768Z 2026-04-26 13:54:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:15.505448328Z 2026-04-26 13:54:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:20.505893426Z 2026-04-26 13:54:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:25.506322662Z 2026-04-26 13:54:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:30.505780347Z 2026-04-26 13:54:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:35.505911618Z 2026-04-26 13:54:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:35.506651918Z 2026-04-26 13:54:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:40.506405358Z 2026-04-26 13:54:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:45.507861571Z 2026-04-26 13:54:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:50.506059019Z 2026-04-26 13:54:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:54:55.506382902Z 2026-04-26 13:54:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:00.505408214Z 2026-04-26 13:55:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:05.505689115Z 2026-04-26 13:55:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:05.50689712Z 2026-04-26 13:55:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:10.50640431Z 2026-04-26 13:55:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:15.505843385Z 2026-04-26 13:55:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:20.50618908Z 2026-04-26 13:55:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:25.511697883Z 2026-04-26 13:55:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:30.506214655Z 2026-04-26 13:55:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:35.505466531Z 2026-04-26 13:55:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:35.506132017Z 2026-04-26 13:55:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:40.511219619Z 2026-04-26 13:55:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:45.505970774Z 2026-04-26 13:55:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:50.505610743Z 2026-04-26 13:55:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:55:55.505801121Z 2026-04-26 13:55:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:00.506257474Z 2026-04-26 13:56:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:05.506428972Z 2026-04-26 13:56:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:05.507068906Z 2026-04-26 13:56:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:10.506273743Z 2026-04-26 13:56:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:15.50605743Z 2026-04-26 13:56:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:20.505913242Z 2026-04-26 13:56:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:25.505548222Z 2026-04-26 13:56:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:30.505369402Z 2026-04-26 13:56:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:35.513199664Z 2026-04-26 13:56:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:35.513220915Z 2026-04-26 13:56:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:40.505462598Z 2026-04-26 13:56:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:45.506612221Z 2026-04-26 13:56:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:50.509707848Z 2026-04-26 13:56:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:56:55.506489566Z 2026-04-26 13:56:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:00.506203802Z 2026-04-26 13:57:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:05.506018114Z 2026-04-26 13:57:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:05.50686432Z 2026-04-26 13:57:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:10.505935142Z 2026-04-26 13:57:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:15.505584205Z 2026-04-26 13:57:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:20.515168544Z 2026-04-26 13:57:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:25.505624813Z 2026-04-26 13:57:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:29.296593813Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T13:57:29.414517666Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T13:57:30.505850119Z 2026-04-26 13:57:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:35.506434624Z 2026-04-26 13:57:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:35.525307789Z 2026-04-26 13:57:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:40.506570575Z 2026-04-26 13:57:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:45.507960653Z 2026-04-26 13:57:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:50.505617151Z 2026-04-26 13:57:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:57:55.50551928Z 2026-04-26 13:57:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:00.505389798Z 2026-04-26 13:58:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:05.506491982Z 2026-04-26 13:58:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:05.50719808Z 2026-04-26 13:58:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:10.506251094Z 2026-04-26 13:58:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:15.509490594Z 2026-04-26 13:58:15 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:20.506187652Z 2026-04-26 13:58:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:25.505747603Z 2026-04-26 13:58:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:30.506587395Z 2026-04-26 13:58:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:35.505871693Z 2026-04-26 13:58:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:35.5067457Z 2026-04-26 13:58:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:40.506789378Z 2026-04-26 13:58:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:45.507952348Z 2026-04-26 13:58:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:50.506643444Z 2026-04-26 13:58:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:58:55.507014472Z 2026-04-26 13:58:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:00.505591443Z 2026-04-26 13:59:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:05.505693026Z 2026-04-26 13:59:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:05.506230215Z 2026-04-26 13:59:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:10.505922437Z 2026-04-26 13:59:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:15.505337764Z 2026-04-26 13:59:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:20.50641942Z 2026-04-26 13:59:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:25.506681983Z 2026-04-26 13:59:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:30.505448426Z 2026-04-26 13:59:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:35.506189235Z 2026-04-26 13:59:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:35.506807309Z 2026-04-26 13:59:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:40.507616842Z 2026-04-26 13:59:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:45.505889009Z 2026-04-26 13:59:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:50.505566631Z 2026-04-26 13:59:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:59:55.510531979Z 2026-04-26 13:59:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:00.505301498Z 2026-04-26 14:00:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:05.505668779Z 2026-04-26 14:00:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:05.506198628Z 2026-04-26 14:00:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:10.505839299Z 2026-04-26 14:00:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:15.505750066Z 2026-04-26 14:00:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:18.579767112Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T14:00:18.654864581Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T14:00:20.508702516Z 2026-04-26 14:00:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:25.506315849Z 2026-04-26 14:00:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:30.505790043Z 2026-04-26 14:00:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:35.506162155Z 2026-04-26 14:00:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:35.506846622Z 2026-04-26 14:00:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:40.505326142Z 2026-04-26 14:00:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:44.167955625Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T14:00:45.272720342Z 
2026-04-26T14:00:45.272749392Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T14:00:45.272755212Z > node dist/index.js
2026-04-26T14:00:45.272758403Z 
2026-04-26T14:00:45.505401029Z 2026-04-26 14:00:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:49.673744106Z 2026-04-26 14:00:49 [info] [ai] Gemini ready — model: gemini-2.5-flash
2026-04-26T14:00:50.506334832Z 2026-04-26 14:00:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:50.760053271Z 2026-04-26 14:00:50 [info] Firestore initialized successfully
2026-04-26T14:00:50.963210819Z 2026-04-26 14:00:50 [info] ✅ Server running on http://localhost:10000
2026-04-26T14:00:50.963350833Z 2026-04-26 14:00:50 [info] Environment: production
2026-04-26T14:00:50.963562638Z 2026-04-26 14:00:50 [info] API URL: http://localhost:5000
2026-04-26T14:00:50.963769424Z 2026-04-26 14:00:50 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T14:00:51.70788345Z 2026-04-26 14:00:51 [error] Route / not found
2026-04-26T14:00:51.707900711Z Error: Route / not found
2026-04-26T14:00:51.707903661Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T14:00:51.707906151Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T14:00:51.707912541Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T14:00:51.707916291Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T14:00:51.707918981Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T14:00:51.707921501Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T14:00:51.707924101Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T14:00:51.707926671Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T14:00:51.707932401Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T14:00:51.707935081Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T14:00:51.711608289Z 2026-04-26 14:00:51 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T14:00:55.506218389Z 2026-04-26 14:00:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:58.800461098Z 2026-04-26 14:00:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:00:58.803044147Z 2026-04-26 14:00:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:00:59.799457586Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T14:00:59.908245175Z 2026-04-26 14:00:59 [error] Route / not found
2026-04-26T14:00:59.908263995Z Error: Route / not found
2026-04-26T14:00:59.908268925Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T14:00:59.908273155Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T14:00:59.908277446Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T14:00:59.908283036Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T14:00:59.908320937Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T14:00:59.908325117Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T14:00:59.908328777Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T14:00:59.908332337Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T14:00:59.908350588Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T14:00:59.908353048Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T14:00:59.909870638Z 2026-04-26 14:00:59 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T14:00:59.946238388Z [0;32m[1m==> [0m[1m[0m
2026-04-26T14:00:59.94855402Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T14:00:59.950650766Z [0;32m[1m==> [0m[1m[0m
2026-04-26T14:00:59.954798796Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T14:00:59.957069007Z [0;32m[1m==> [0m[1m[0m
2026-04-26T14:00:59.959487612Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T14:01:00.505369937Z 2026-04-26 14:01:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:03.799169082Z 2026-04-26 14:01:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
```
