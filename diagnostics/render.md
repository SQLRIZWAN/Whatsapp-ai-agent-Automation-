# Render Deploy Diagnostics

Run: 24958679445
Commit: c24bd9693bac8f7afdb48b79cadbfac2e4ccfe75
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n1qmkvikkc73b1n0o0

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
  "updatedAt": "2026-04-26T14:15:59.282636Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n1qmkvikkc73b1n0o0",
  "commit": {
    "id": "c24bd9693bac8f7afdb48b79cadbfac2e4ccfe75",
    "message": "Implement persistent WhatsApp session storage and fix frontend-backend integration",
    "createdAt": "2026-04-26T14:12:26Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T14:12:42.859673Z",
  "updatedAt": "2026-04-26T14:15:59.280031Z",
  "startedAt": "2026-04-26T14:12:42.809398Z",
  "finishedAt": "2026-04-26T14:15:59.279063Z"
}
```

## App logs (last 4h)
```
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
2026-04-26T14:00:45.505401029Z 2026-04-26 14:00:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:50.506334832Z 2026-04-26 14:00:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:55.506218389Z 2026-04-26 14:00:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:00:59.799457586Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T14:00:59.946238388Z [0;32m[1m==> [0m[1m[0m
2026-04-26T14:00:59.94855402Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T14:00:59.950650766Z [0;32m[1m==> [0m[1m[0m
2026-04-26T14:00:59.954798796Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T14:00:59.957069007Z [0;32m[1m==> [0m[1m[0m
2026-04-26T14:00:59.959487612Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T14:01:00.505369937Z 2026-04-26 14:01:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:05.50665128Z 2026-04-26 14:01:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:10.50584378Z 2026-04-26 14:01:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:15.506024024Z 2026-04-26 14:01:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:20.505657718Z 2026-04-26 14:01:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:25.506054565Z 2026-04-26 14:01:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:30.507640915Z 2026-04-26 14:01:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:35.506369261Z 2026-04-26 14:01:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:40.50531728Z 2026-04-26 14:01:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:45.506773064Z 2026-04-26 14:01:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:50.506246412Z 2026-04-26 14:01:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:01:55.506068858Z 2026-04-26 14:01:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T14:04:13.798764095Z 2026-04-26 14:04:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:18.798722593Z 2026-04-26 14:04:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:23.798888216Z 2026-04-26 14:04:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:28.798880255Z 2026-04-26 14:04:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:28.799682937Z 2026-04-26 14:04:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:33.802718597Z 2026-04-26 14:04:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:38.798121545Z 2026-04-26 14:04:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:43.79869903Z 2026-04-26 14:04:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:48.799339498Z 2026-04-26 14:04:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:53.79863688Z 2026-04-26 14:04:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:58.798884508Z 2026-04-26 14:04:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:04:58.799679569Z 2026-04-26 14:04:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:03.798090998Z 2026-04-26 14:05:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:08.798715175Z 2026-04-26 14:05:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:13.799253431Z 2026-04-26 14:05:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:18.798966465Z 2026-04-26 14:05:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:23.798485755Z 2026-04-26 14:05:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:28.798124508Z 2026-04-26 14:05:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:28.799032822Z 2026-04-26 14:05:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:33.798361737Z 2026-04-26 14:05:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:38.802060478Z 2026-04-26 14:05:38 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:43.798584969Z 2026-04-26 14:05:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:48.79845618Z 2026-04-26 14:05:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:53.798952487Z 2026-04-26 14:05:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:58.523465476Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T14:05:58.632076659Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T14:05:58.79892169Z 2026-04-26 14:05:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:05:58.799618108Z 2026-04-26 14:05:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:03.798525283Z 2026-04-26 14:06:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:08.798106017Z 2026-04-26 14:06:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:13.798863952Z 2026-04-26 14:06:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:18.799015931Z 2026-04-26 14:06:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:23.798175634Z 2026-04-26 14:06:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:28.798875538Z 2026-04-26 14:06:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:28.799633788Z 2026-04-26 14:06:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:33.79836662Z 2026-04-26 14:06:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:38.799152427Z 2026-04-26 14:06:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:41.543624228Z 2026-04-26 14:06:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T14:06:41.862665211Z 2026-04-26 14:06:41 [info] {"method":"GET","path":"/calls","status":200,"duration":"325ms","ip":"::1"}
2026-04-26T14:06:42.066940649Z 2026-04-26 14:06:42 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:06:42.268379352Z 2026-04-26 14:06:42 [info] Client connected: vI3rleYvuZsP9cYVAAAB
2026-04-26T14:06:42.461571015Z 2026-04-26 14:06:42 [info] [wa] using WA web version 2.3000.1035194821
2026-04-26T14:06:42.666662185Z 2026-04-26 14:06:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1124ms","ip":"::1"}
2026-04-26T14:06:42.965948592Z 2026-04-26 14:06:42 [info] {"method":"GET","path":"/messages","status":200,"duration":"702ms","ip":"::1"}
2026-04-26T14:06:43.061591148Z 2026-04-26 14:06:43 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket vI3rleYvuZsP9cYVAAAB
2026-04-26T14:06:43.379380378Z 2026-04-26 14:06:43 [info] Client connected: 0LkJycSP-JWEBwelAAAD
2026-04-26T14:06:44.860085066Z 2026-04-26 14:06:44 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 0LkJycSP-JWEBwelAAAD
2026-04-26T14:06:44.963045798Z 2026-04-26 14:06:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:44.963671564Z 2026-04-26 14:06:44 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:06:48.798647786Z 2026-04-26 14:06:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:49.570249777Z 2026-04-26 14:06:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:06:50.883703153Z 2026-04-26 14:06:50 [info] Client disconnected: vI3rleYvuZsP9cYVAAAB
2026-04-26T14:06:50.900055238Z 2026-04-26 14:06:50 [info] Client disconnected: 0LkJycSP-JWEBwelAAAD
2026-04-26T14:06:51.632963909Z 2026-04-26 14:06:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:06:52.160652857Z 2026-04-26 14:06:52 [info] {"method":"GET","path":"/calls","status":200,"duration":"246ms","ip":"::1"}
2026-04-26T14:06:52.261299677Z 2026-04-26 14:06:52 [info] {"method":"GET","path":"/messages","status":200,"duration":"343ms","ip":"::1"}
2026-04-26T14:06:52.535983729Z 2026-04-26 14:06:52 [info] Client connected: r1G7oegswZRjDArWAAAF
2026-04-26T14:06:52.816416755Z 2026-04-26 14:06:52 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket r1G7oegswZRjDArWAAAF
2026-04-26T14:06:53.571886536Z 2026-04-26 14:06:53 [info] Client connected: Sa295MOO9NBc0AVPAAAH
2026-04-26T14:06:53.798233572Z 2026-04-26 14:06:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:53.841590766Z 2026-04-26 14:06:53 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket Sa295MOO9NBc0AVPAAAH
2026-04-26T14:06:56.204903981Z 2026-04-26 14:06:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:06:58.798016413Z 2026-04-26 14:06:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:58.798832315Z 2026-04-26 14:06:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:06:59.928511668Z 2026-04-26 14:06:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:03.798215456Z 2026-04-26 14:07:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:04.203914506Z 2026-04-26 14:07:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:08.498510705Z 2026-04-26 14:07:08 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T14:07:08.80109869Z 2026-04-26 14:07:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:12.799489264Z 2026-04-26 14:07:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:13.798786437Z 2026-04-26 14:07:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:16.488321796Z 2026-04-26 14:07:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:18.798055765Z 2026-04-26 14:07:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:20.775909689Z 2026-04-26 14:07:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:23.798213098Z 2026-04-26 14:07:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:24.505297321Z 2026-04-26 14:07:24 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T14:07:28.798202716Z 2026-04-26 14:07:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:28.798917535Z 2026-04-26 14:07:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:28.844387666Z 2026-04-26 14:07:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:32.482410686Z 2026-04-26 14:07:32 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T14:07:33.798716019Z 2026-04-26 14:07:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:36.783970251Z 2026-04-26 14:07:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:38.79882733Z 2026-04-26 14:07:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:40.488915084Z 2026-04-26 14:07:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:43.799128067Z 2026-04-26 14:07:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:43.970702825Z 2026-04-26 14:07:43 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:07:44.830034592Z 2026-04-26 14:07:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:48.515464825Z 2026-04-26 14:07:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:48.798516721Z 2026-04-26 14:07:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:52.826441892Z 2026-04-26 14:07:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:53.798318275Z 2026-04-26 14:07:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:56.479171245Z 2026-04-26 14:07:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:07:58.798636204Z 2026-04-26 14:07:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:07:58.799325662Z 2026-04-26 14:07:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:01.312439316Z 2026-04-26 14:08:01 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T14:08:03.798342446Z 2026-04-26 14:08:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:04.067962594Z 2026-04-26 14:08:04 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:08:04.488665254Z 2026-04-26 14:08:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:08:08.798951582Z 2026-04-26 14:08:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:13.798344787Z 2026-04-26 14:08:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:18.799977142Z 2026-04-26 14:08:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:23.798934214Z 2026-04-26 14:08:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:24.261333255Z 2026-04-26 14:08:24 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:08:27.788426874Z 2026-04-26 14:08:27 [info] Client disconnected: r1G7oegswZRjDArWAAAF
2026-04-26T14:08:28.80285876Z 2026-04-26 14:08:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:28.802895131Z 2026-04-26 14:08:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:28.97186872Z 2026-04-26 14:08:28 [info] Client disconnected: Sa295MOO9NBc0AVPAAAH
2026-04-26T14:08:33.798996609Z 2026-04-26 14:08:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:38.79895113Z 2026-04-26 14:08:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:43.798276294Z 2026-04-26 14:08:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:44.160581019Z 2026-04-26 14:08:44 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:08:48.798466312Z 2026-04-26 14:08:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:53.799560523Z 2026-04-26 14:08:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:58.798397115Z 2026-04-26 14:08:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:08:58.799238918Z 2026-04-26 14:08:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:03.798546492Z 2026-04-26 14:09:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:04.167287739Z 2026-04-26 14:09:04 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:09:08.798391511Z 2026-04-26 14:09:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:13.798776265Z 2026-04-26 14:09:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:18.798689577Z 2026-04-26 14:09:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:23.799007139Z 2026-04-26 14:09:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:24.072224733Z 2026-04-26 14:09:24 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T14:09:24.072261204Z 2026-04-26 14:09:24 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T14:09:26.07415355Z 2026-04-26 14:09:26 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T14:09:26.270781075Z 2026-04-26 14:09:26 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:09:26.97225615Z 2026-04-26 14:09:26 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:09:28.79924925Z 2026-04-26 14:09:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:28.800202275Z 2026-04-26 14:09:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:33.798874684Z 2026-04-26 14:09:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:38.801384946Z 2026-04-26 14:09:38 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:43.798474164Z 2026-04-26 14:09:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:48.798649764Z 2026-04-26 14:09:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:53.798014802Z 2026-04-26 14:09:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:58.799032415Z 2026-04-26 14:09:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:09:58.799915518Z 2026-04-26 14:09:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:03.799093793Z 2026-04-26 14:10:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:08.798101513Z 2026-04-26 14:10:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:13.799142817Z 2026-04-26 14:10:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:18.798733622Z 2026-04-26 14:10:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:23.798290887Z 2026-04-26 14:10:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:27.166688995Z 2026-04-26 14:10:27 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:10:28.798806188Z 2026-04-26 14:10:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:28.800450172Z 2026-04-26 14:10:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:33.799077953Z 2026-04-26 14:10:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:38.797886259Z 2026-04-26 14:10:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:43.799224912Z 2026-04-26 14:10:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:47.163304346Z 2026-04-26 14:10:47 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:10:48.798157792Z 2026-04-26 14:10:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:53.79854729Z 2026-04-26 14:10:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:58.798167218Z 2026-04-26 14:10:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:10:58.799090623Z 2026-04-26 14:10:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:03.798789274Z 2026-04-26 14:11:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:07.165381715Z 2026-04-26 14:11:07 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:11:08.799321687Z 2026-04-26 14:11:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:13.798893215Z 2026-04-26 14:11:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:18.797812396Z 2026-04-26 14:11:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:23.798974876Z 2026-04-26 14:11:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:27.167712145Z 2026-04-26 14:11:27 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:11:28.798267737Z 2026-04-26 14:11:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:28.799341856Z 2026-04-26 14:11:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:33.798411892Z 2026-04-26 14:11:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:38.798102694Z 2026-04-26 14:11:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:43.798361882Z 2026-04-26 14:11:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:47.168304074Z 2026-04-26 14:11:47 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:11:48.80128372Z 2026-04-26 14:11:48 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:53.807390704Z 2026-04-26 14:11:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:58.798696694Z 2026-04-26 14:11:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:11:58.799459094Z 2026-04-26 14:11:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:03.798693565Z 2026-04-26 14:12:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:07.099763934Z 2026-04-26 14:12:07 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T14:12:07.100221546Z 2026-04-26 14:12:07 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T14:12:08.799207151Z 2026-04-26 14:12:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:11.102006881Z 2026-04-26 14:12:11 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T14:12:11.260695246Z 2026-04-26 14:12:11 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:12:11.765228569Z 2026-04-26 14:12:11 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:12:13.799727625Z 2026-04-26 14:12:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:18.798736571Z 2026-04-26 14:12:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:23.805271588Z 2026-04-26 14:12:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:28.798803508Z 2026-04-26 14:12:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:28.799564468Z 2026-04-26 14:12:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:33.798491953Z 2026-04-26 14:12:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:38.798388453Z 2026-04-26 14:12:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:43.807872289Z 2026-04-26 14:12:43 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:48.80588037Z 2026-04-26 14:12:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:53.798601781Z 2026-04-26 14:12:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:58.79917142Z 2026-04-26 14:12:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:12:58.800336541Z 2026-04-26 14:12:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:03.798357373Z 2026-04-26 14:13:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:08.798614794Z 2026-04-26 14:13:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:11.771179149Z 2026-04-26 14:13:11 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:13:13.798767813Z 2026-04-26 14:13:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:18.798792689Z 2026-04-26 14:13:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:23.798390313Z 2026-04-26 14:13:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:28.798614445Z 2026-04-26 14:13:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:28.799874858Z 2026-04-26 14:13:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:31.762426636Z 2026-04-26 14:13:31 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:13:33.802940385Z 2026-04-26 14:13:33 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:38.798154744Z 2026-04-26 14:13:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:43.800821491Z 2026-04-26 14:13:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:48.804460684Z 2026-04-26 14:13:48 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:50.97179806Z 2026-04-26 14:13:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T14:13:50.973402343Z 2026-04-26 14:13:50 [info] [keepalive] ping OK
2026-04-26T14:13:52.162591225Z 2026-04-26 14:13:52 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:13:53.799434247Z 2026-04-26 14:13:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:58.798127759Z 2026-04-26 14:13:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:13:58.798990412Z 2026-04-26 14:13:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:03.798785603Z 2026-04-26 14:14:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:08.798255266Z 2026-04-26 14:14:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:11.765759047Z 2026-04-26 14:14:11 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:14:13.798596713Z 2026-04-26 14:14:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:18.798832097Z 2026-04-26 14:14:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:23.799370999Z 2026-04-26 14:14:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:28.808626093Z 2026-04-26 14:14:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:28.808645144Z 2026-04-26 14:14:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:31.761718041Z 2026-04-26 14:14:31 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:14:33.799352725Z 2026-04-26 14:14:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:38.798694026Z 2026-04-26 14:14:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:43.798065808Z 2026-04-26 14:14:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:48.798798146Z 2026-04-26 14:14:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:51.733853255Z 2026-04-26 14:14:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T14:14:51.733883265Z 2026-04-26 14:14:51 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T14:14:53.798420006Z 2026-04-26 14:14:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:58.79862507Z 2026-04-26 14:14:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:58.799316919Z 2026-04-26 14:14:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:14:59.734870969Z 2026-04-26 14:14:59 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T14:14:59.837238295Z 2026-04-26 14:14:59 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:15:00.661298576Z 2026-04-26 14:15:00 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:15:03.799511054Z 2026-04-26 14:15:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:08.798161708Z 2026-04-26 14:15:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:13.799110833Z 2026-04-26 14:15:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:18.799804042Z 2026-04-26 14:15:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:23.798476787Z 2026-04-26 14:15:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:28.026651732Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T14:15:28.096568111Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T14:15:28.798977301Z 2026-04-26 14:15:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:28.799844124Z 2026-04-26 14:15:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:33.798388577Z 2026-04-26 14:15:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:38.798006598Z 2026-04-26 14:15:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:43.798870022Z 2026-04-26 14:15:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:43.856406181Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T14:15:44.955314299Z 
2026-04-26T14:15:44.95533622Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T14:15:44.95533975Z > node dist/index.js
2026-04-26T14:15:44.95534152Z 
2026-04-26T14:15:48.79834913Z 2026-04-26 14:15:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:49.259017015Z 2026-04-26 14:15:49 [info] [ai] Gemini ready — model: gemini-2.5-flash
2026-04-26T14:15:50.354873634Z 2026-04-26 14:15:50 [info] Firestore initialized successfully
2026-04-26T14:15:50.55033918Z 2026-04-26 14:15:50 [info] ✅ Server running on http://localhost:10000
2026-04-26T14:15:50.550519031Z 2026-04-26 14:15:50 [info] Environment: production
2026-04-26T14:15:50.55066626Z 2026-04-26 14:15:50 [info] API URL: http://localhost:5000
2026-04-26T14:15:50.550913094Z 2026-04-26 14:15:50 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T14:15:51.045144265Z 2026-04-26 14:15:51 [error] Route / not found
2026-04-26T14:15:51.045161016Z Error: Route / not found
2026-04-26T14:15:51.045166236Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T14:15:51.045171366Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T14:15:51.045177777Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T14:15:51.045183777Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T14:15:51.045186887Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T14:15:51.045189768Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T14:15:51.045192628Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T14:15:51.045195438Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T14:15:51.045198338Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T14:15:51.045201218Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T14:15:51.049031362Z 2026-04-26 14:15:51 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T14:15:53.798626829Z 2026-04-26 14:15:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:58.411844991Z 2026-04-26 14:15:58 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.24"}
2026-04-26T14:15:58.413325477Z 2026-04-26 14:15:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T14:15:58.798253581Z 2026-04-26 14:15:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:15:59.452451963Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T14:15:59.538412072Z 2026-04-26 14:15:59 [error] Route / not found
2026-04-26T14:15:59.538432923Z Error: Route / not found
2026-04-26T14:15:59.538439293Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T14:15:59.538446934Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T14:15:59.538452284Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T14:15:59.538457095Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T14:15:59.538460815Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T14:15:59.538464975Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T14:15:59.538469905Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T14:15:59.538474306Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T14:15:59.538496277Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T14:15:59.538502557Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T14:15:59.53922681Z 2026-04-26 14:15:59 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T14:15:59.648191712Z [0;32m[1m==> [0m[1m[0m
2026-04-26T14:15:59.681566835Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T14:15:59.701829208Z [0;32m[1m==> [0m[1m[0m
2026-04-26T14:15:59.727445844Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T14:15:59.732857179Z [0;32m[1m==> [0m[1m[0m
2026-04-26T14:15:59.737613706Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T14:16:00.463587373Z 2026-04-26 14:16:00 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T14:16:03.410459476Z 2026-04-26 14:16:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T14:16:03.798366006Z 2026-04-26 14:16:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:16:08.410442939Z 2026-04-26 14:16:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T14:16:08.799021516Z 2026-04-26 14:16:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-26T14:16:13.410688457Z 2026-04-26 14:16:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T14:16:13.798893735Z 2026-04-26 14:16:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
```
