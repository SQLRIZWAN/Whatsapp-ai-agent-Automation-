# Render Deploy Diagnostics

Run: 24956674209
Commit: e007a2043c982246fe44e6a248004054b04e2c15
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n0b08g4nts73at1o4g

## Service details
```json
{
  "autoDeploy": "no",
  "autoDeployTrigger": "off",
  "branch": "claude/fix-ai-messaging-stability-a9TSt",
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
  "updatedAt": "2026-04-26T12:33:34.127589Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n0b08g4nts73at1o4g",
  "commit": {
    "id": "e007a2043c982246fe44e6a248004054b04e2c15",
    "message": "fix: render diagnostic use Contents API with SHA + verbose logging\n\nGoes back to the Contents API approach that historically worked, but now\ncorrectly fetches the current file SHA before PUT (fixes 409 conflicts)\nand logs the HTTP response code so failures are visible in CI logs.\n\nhttps://claude.ai/code/session_01T1SgdJMtKrs6g3inUqNSoB",
    "createdAt": "2026-04-26T12:30:41Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T12:30:57.883253Z",
  "updatedAt": "2026-04-26T12:33:34.124997Z",
  "startedAt": "2026-04-26T12:30:57.719273Z",
  "finishedAt": "2026-04-26T12:33:34.124845Z"
}
```

## App logs (last 4h)
```
2026-04-26T12:13:39.168173142Z 2026-04-26 12:13:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:13:44.168227398Z 2026-04-26 12:13:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:13:49.168277495Z 2026-04-26 12:13:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:13:54.167815897Z 2026-04-26 12:13:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:13:59.167332419Z 2026-04-26 12:13:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:04.16804382Z 2026-04-26 12:14:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:09.167370906Z 2026-04-26 12:14:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:09.168016122Z 2026-04-26 12:14:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:14.16749194Z 2026-04-26 12:14:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:19.168390504Z 2026-04-26 12:14:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:24.171504834Z 2026-04-26 12:14:24 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:29.167624476Z 2026-04-26 12:14:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:34.167669514Z 2026-04-26 12:14:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:39.167440659Z 2026-04-26 12:14:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:39.168225869Z 2026-04-26 12:14:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:44.1679244Z 2026-04-26 12:14:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:49.167355322Z 2026-04-26 12:14:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:54.167768807Z 2026-04-26 12:14:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:14:59.167613545Z 2026-04-26 12:14:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:04.168582212Z 2026-04-26 12:15:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:09.16743866Z 2026-04-26 12:15:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:09.168236001Z 2026-04-26 12:15:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:14.167481878Z 2026-04-26 12:15:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:19.167935114Z 2026-04-26 12:15:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:24.167390982Z 2026-04-26 12:15:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:29.167594787Z 2026-04-26 12:15:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:34.167461682Z 2026-04-26 12:15:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:39.169464429Z 2026-04-26 12:15:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:39.170607818Z 2026-04-26 12:15:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:44.167749289Z 2026-04-26 12:15:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:49.170412299Z 2026-04-26 12:15:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:54.167631358Z 2026-04-26 12:15:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:15:59.168507698Z 2026-04-26 12:15:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:04.167852657Z 2026-04-26 12:16:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:09.167512672Z 2026-04-26 12:16:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:09.168351613Z 2026-04-26 12:16:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:14.167595496Z 2026-04-26 12:16:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:19.167986925Z 2026-04-26 12:16:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:24.170104437Z 2026-04-26 12:16:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:29.167786104Z 2026-04-26 12:16:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:29.465499341Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T12:16:29.535706866Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T12:16:34.170963208Z 2026-04-26 12:16:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:39.167354228Z 2026-04-26 12:16:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:39.168070716Z 2026-04-26 12:16:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:44.167796989Z 2026-04-26 12:16:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:49.167592631Z 2026-04-26 12:16:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:49.9243857Z 2026-04-26 12:16:49 [error] Route / not found
2026-04-26T12:16:49.92440341Z Error: Route / not found
2026-04-26T12:16:49.924409051Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T12:16:49.924414291Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:16:49.924420672Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:16:49.924426032Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:16:49.924430432Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T12:16:49.924434923Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T12:16:49.924439923Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T12:16:49.924445033Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:16:49.924449243Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:16:49.924466094Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:16:49.928353531Z 2026-04-26 12:16:49 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T12:16:50.02056371Z 2026-04-26 12:16:50 [info] {"method":"GET","path":"/health","status":200,"duration":"91ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:16:50.022818577Z 2026-04-26 12:16:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:16:51.180672064Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T12:16:51.45966933Z 2026-04-26 12:16:51 [error] Route / not found
2026-04-26T12:16:51.459693652Z Error: Route / not found
2026-04-26T12:16:51.459699532Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T12:16:51.459704632Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:16:51.459709293Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:16:51.459714033Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:16:51.459718023Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T12:16:51.459721943Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T12:16:51.459726083Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T12:16:51.459730824Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:16:51.459771746Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:16:51.459777597Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:16:51.460735025Z 2026-04-26 12:16:51 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T12:16:52.518432646Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:16:52.521154847Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T12:16:52.523472159Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:16:52.525937465Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T12:16:52.528559784Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:16:52.531014389Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T12:16:54.16773581Z 2026-04-26 12:16:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:54.932829532Z 2026-04-26 12:16:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:16:59.167561139Z 2026-04-26 12:16:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:16:59.890154778Z 2026-04-26 12:16:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:16:59.892272638Z 2026-04-26 12:16:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:04.167541299Z 2026-04-26 12:17:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:04.886366933Z 2026-04-26 12:17:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:09.167365294Z 2026-04-26 12:17:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:09.886768772Z 2026-04-26 12:17:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:14.167175087Z 2026-04-26 12:17:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:14.887096564Z 2026-04-26 12:17:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:19.16747745Z 2026-04-26 12:17:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:19.88602127Z 2026-04-26 12:17:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:24.167466173Z 2026-04-26 12:17:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:24.887278065Z 2026-04-26 12:17:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:29.167388282Z 2026-04-26 12:17:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:29.887159226Z 2026-04-26 12:17:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:29.888100423Z 2026-04-26 12:17:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:34.167179077Z 2026-04-26 12:17:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:34.886937958Z 2026-04-26 12:17:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:39.167522643Z 2026-04-26 12:17:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:39.887531949Z 2026-04-26 12:17:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:44.16836175Z 2026-04-26 12:17:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:44.88601289Z 2026-04-26 12:17:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:49.167609074Z 2026-04-26 12:17:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:49.88666037Z 2026-04-26 12:17:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:54.885924426Z 2026-04-26 12:17:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:59.88666442Z 2026-04-26 12:17:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:17:59.887945638Z 2026-04-26 12:17:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:04.886508107Z 2026-04-26 12:18:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:09.886118869Z 2026-04-26 12:18:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:14.886505957Z 2026-04-26 12:18:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:19.886048132Z 2026-04-26 12:18:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:24.886328901Z 2026-04-26 12:18:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:29.88680703Z 2026-04-26 12:18:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:29.887727415Z 2026-04-26 12:18:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:34.88602578Z 2026-04-26 12:18:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:39.886661965Z 2026-04-26 12:18:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:44.886720675Z 2026-04-26 12:18:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:49.886558079Z 2026-04-26 12:18:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:54.885898861Z 2026-04-26 12:18:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:59.886450285Z 2026-04-26 12:18:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:18:59.887398413Z 2026-04-26 12:18:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:04.885815606Z 2026-04-26 12:19:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:09.886317035Z 2026-04-26 12:19:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:14.886261749Z 2026-04-26 12:19:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:19.886158748Z 2026-04-26 12:19:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:24.886756497Z 2026-04-26 12:19:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:29.886522934Z 2026-04-26 12:19:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:29.88809214Z 2026-04-26 12:19:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:34.886738988Z 2026-04-26 12:19:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:39.885878445Z 2026-04-26 12:19:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:44.885739834Z 2026-04-26 12:19:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:49.8860646Z 2026-04-26 12:19:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:54.88663553Z 2026-04-26 12:19:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:59.887011086Z 2026-04-26 12:19:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:19:59.887787733Z 2026-04-26 12:19:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:04.886072411Z 2026-04-26 12:20:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:09.885603323Z 2026-04-26 12:20:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:14.885805354Z 2026-04-26 12:20:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:19.886175964Z 2026-04-26 12:20:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:24.887392195Z 2026-04-26 12:20:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:29.885877617Z 2026-04-26 12:20:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:29.886603981Z 2026-04-26 12:20:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:34.886400652Z 2026-04-26 12:20:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:39.88616765Z 2026-04-26 12:20:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:44.886101547Z 2026-04-26 12:20:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:49.88633228Z 2026-04-26 12:20:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:54.886817847Z 2026-04-26 12:20:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:59.886566658Z 2026-04-26 12:20:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:20:59.887514796Z 2026-04-26 12:20:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:04.886616475Z 2026-04-26 12:21:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:09.886189542Z 2026-04-26 12:21:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:14.88612222Z 2026-04-26 12:21:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:19.886064837Z 2026-04-26 12:21:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:24.886900747Z 2026-04-26 12:21:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:29.886650739Z 2026-04-26 12:21:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:29.887420576Z 2026-04-26 12:21:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:30.334046891Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T12:21:30.410623854Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T12:21:34.886294213Z 2026-04-26 12:21:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:39.88614968Z 2026-04-26 12:21:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:44.886686216Z 2026-04-26 12:21:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:48.161982826Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T12:21:49.254426416Z 
2026-04-26T12:21:49.254453637Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T12:21:49.254457997Z > node dist/index.js
2026-04-26T12:21:49.254460497Z 
2026-04-26T12:21:49.886667936Z 2026-04-26 12:21:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:53.455275715Z 2026-04-26 12:21:53 [info] [ai] Gemini ready — model: gemini-2.5-flash
2026-04-26T12:21:54.448433632Z 2026-04-26 12:21:54 [info] Firestore initialized successfully
2026-04-26T12:21:54.453306907Z 2026-04-26 12:21:54 [info] ✅ Server running on http://localhost:10000
2026-04-26T12:21:54.453554272Z 2026-04-26 12:21:54 [info] Environment: production
2026-04-26T12:21:54.453750787Z 2026-04-26 12:21:54 [info] API URL: http://localhost:5000
2026-04-26T12:21:54.453926941Z 2026-04-26 12:21:54 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T12:21:54.848488482Z 2026-04-26 12:21:54 [error] Route / not found
2026-04-26T12:21:54.848509403Z Error: Route / not found
2026-04-26T12:21:54.848515473Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T12:21:54.848520813Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:21:54.848527393Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:21:54.848532643Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:21:54.848536893Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T12:21:54.848541573Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T12:21:54.848546514Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T12:21:54.848551724Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:21:54.848556674Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:21:54.848561584Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:21:54.85307066Z 2026-04-26 12:21:54 [info] {"method":"HEAD","path":"/","status":404,"duration":"97ms","ip":"::1"}
2026-04-26T12:21:54.886690997Z 2026-04-26 12:21:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:59.887110162Z 2026-04-26 12:21:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:21:59.887984605Z 2026-04-26 12:21:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:00.789290136Z 2026-04-26 12:22:00 [info] {"method":"GET","path":"/health","status":200,"duration":"5ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:00.79501304Z 2026-04-26 12:22:00 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:02.095229362Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T12:22:02.230807108Z 2026-04-26 12:22:02 [error] Route / not found
2026-04-26T12:22:02.230827538Z Error: Route / not found
2026-04-26T12:22:02.230833168Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T12:22:02.230838088Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:22:02.230843789Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:22:02.230849259Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:22:02.230853849Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T12:22:02.230858319Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T12:22:02.230862979Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T12:22:02.230867269Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:22:02.230884269Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:22:02.23088768Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:22:02.231552575Z 2026-04-26 12:22:02 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T12:22:02.353065841Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:22:02.355210748Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T12:22:02.357516569Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:22:02.360475614Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T12:22:02.362581671Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:22:02.364795729Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T12:22:04.886367544Z 2026-04-26 12:22:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:05.793123483Z 2026-04-26 12:22:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:09.886153707Z 2026-04-26 12:22:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:10.791880971Z 2026-04-26 12:22:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:14.886539086Z 2026-04-26 12:22:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:15.790969577Z 2026-04-26 12:22:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:19.886173967Z 2026-04-26 12:22:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:20.79167316Z 2026-04-26 12:22:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:24.886110895Z 2026-04-26 12:22:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:25.790917679Z 2026-04-26 12:22:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:29.886597986Z 2026-04-26 12:22:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:30.784089095Z 2026-04-26 12:22:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:30.791356756Z 2026-04-26 12:22:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:34.886142377Z 2026-04-26 12:22:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:35.790526823Z 2026-04-26 12:22:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:39.886373989Z 2026-04-26 12:22:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:40.790525169Z 2026-04-26 12:22:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:44.886628602Z 2026-04-26 12:22:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:45.790675518Z 2026-04-26 12:22:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:49.886363351Z 2026-04-26 12:22:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:50.790982411Z 2026-04-26 12:22:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:54.885764047Z 2026-04-26 12:22:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:22:55.790629099Z 2026-04-26 12:22:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:22:59.886020086Z 2026-04-26 12:22:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-26T12:23:00.781774249Z 2026-04-26 12:23:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:00.790832071Z 2026-04-26 12:23:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:05.790789278Z 2026-04-26 12:23:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:10.790681034Z 2026-04-26 12:23:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:15.794898952Z 2026-04-26 12:23:15 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:20.790920958Z 2026-04-26 12:23:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:25.791710137Z 2026-04-26 12:23:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:30.782238576Z 2026-04-26 12:23:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:30.790161331Z 2026-04-26 12:23:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:35.791072434Z 2026-04-26 12:23:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:40.791880404Z 2026-04-26 12:23:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:45.795469361Z 2026-04-26 12:23:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:50.790543879Z 2026-04-26 12:23:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:23:55.790639225Z 2026-04-26 12:23:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:00.782857967Z 2026-04-26 12:24:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:00.791016998Z 2026-04-26 12:24:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:05.790407099Z 2026-04-26 12:24:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:10.79107764Z 2026-04-26 12:24:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:15.791157208Z 2026-04-26 12:24:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:20.79053193Z 2026-04-26 12:24:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:25.792438162Z 2026-04-26 12:24:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:30.782357134Z 2026-04-26 12:24:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:30.790652528Z 2026-04-26 12:24:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:35.790855261Z 2026-04-26 12:24:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:40.791142977Z 2026-04-26 12:24:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:45.79470694Z 2026-04-26 12:24:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:50.791314441Z 2026-04-26 12:24:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:24:55.790666237Z 2026-04-26 12:24:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:00.782649751Z 2026-04-26 12:25:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:00.790219938Z 2026-04-26 12:25:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:05.791247874Z 2026-04-26 12:25:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:10.791045432Z 2026-04-26 12:25:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:15.791209599Z 2026-04-26 12:25:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:20.791209563Z 2026-04-26 12:25:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:25.793767227Z 2026-04-26 12:25:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:30.783146043Z 2026-04-26 12:25:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:30.79070488Z 2026-04-26 12:25:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:35.791116925Z 2026-04-26 12:25:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:40.791392208Z 2026-04-26 12:25:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:45.790933464Z 2026-04-26 12:25:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:50.801507078Z 2026-04-26 12:25:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:25:55.791456781Z 2026-04-26 12:25:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:00.782809807Z 2026-04-26 12:26:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:00.791720046Z 2026-04-26 12:26:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:05.790285661Z 2026-04-26 12:26:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:10.791134331Z 2026-04-26 12:26:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:15.79068471Z 2026-04-26 12:26:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:20.790353113Z 2026-04-26 12:26:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:25.790740743Z 2026-04-26 12:26:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:29.102587502Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T12:26:29.209103062Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T12:26:30.782247116Z 2026-04-26 12:26:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:30.790174462Z 2026-04-26 12:26:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:35.791444964Z 2026-04-26 12:26:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:40.791422607Z 2026-04-26 12:26:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:42.58861143Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T12:26:43.684701931Z 
2026-04-26T12:26:43.684732182Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T12:26:43.684737072Z > node dist/index.js
2026-04-26T12:26:43.684739552Z 
2026-04-26T12:26:45.790507879Z 2026-04-26 12:26:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:47.986152191Z 2026-04-26 12:26:47 [info] [ai] Gemini ready — model: gemini-2.5-flash
2026-04-26T12:26:48.984914888Z 2026-04-26 12:26:48 [info] Firestore initialized successfully
2026-04-26T12:26:49.185408044Z 2026-04-26 12:26:49 [info] ✅ Server running on http://localhost:10000
2026-04-26T12:26:49.18563061Z 2026-04-26 12:26:49 [info] Environment: production
2026-04-26T12:26:49.185856976Z 2026-04-26 12:26:49 [info] API URL: http://localhost:5000
2026-04-26T12:26:49.186168934Z 2026-04-26 12:26:49 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T12:26:49.616090605Z 2026-04-26 12:26:49 [info] {"method":"GET","path":"/health","status":200,"duration":"5ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:26:49.61865706Z 2026-04-26 12:26:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:26:49.720790877Z 2026-04-26 12:26:49 [error] Route / not found
2026-04-26T12:26:49.720812207Z Error: Route / not found
2026-04-26T12:26:49.720816767Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T12:26:49.720820647Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:26:49.720824407Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:26:49.720827867Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:26:49.720830547Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T12:26:49.720833318Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T12:26:49.720835788Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T12:26:49.720838278Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:26:49.720840798Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:26:49.720843228Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:26:49.721669149Z 2026-04-26 12:26:49 [info] {"method":"HEAD","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T12:26:50.328025302Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T12:26:50.43607323Z 2026-04-26 12:26:50 [error] Route / not found
2026-04-26T12:26:50.43608784Z Error: Route / not found
2026-04-26T12:26:50.4360909Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T12:26:50.43609386Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:26:50.43609634Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:26:50.43609919Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:26:50.436101251Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T12:26:50.436103451Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T12:26:50.436105411Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T12:26:50.436107431Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:26:50.436109831Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:26:50.436126551Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:26:50.436931452Z 2026-04-26 12:26:50 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T12:26:50.479576228Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:26:50.481702195Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T12:26:50.483976015Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:26:50.486109782Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T12:26:50.48827456Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:26:50.490399907Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T12:26:50.790763119Z 2026-04-26 12:26:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:54.619149626Z 2026-04-26 12:26:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:26:55.790431206Z 2026-04-26 12:26:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:26:59.60589543Z 2026-04-26 12:26:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:26:59.617239129Z 2026-04-26 12:26:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:00.790569844Z 2026-04-26 12:27:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:04.620345289Z 2026-04-26 12:27:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:05.791555412Z 2026-04-26 12:27:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:09.618168572Z 2026-04-26 12:27:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:10.790614974Z 2026-04-26 12:27:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:14.62135638Z 2026-04-26 12:27:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:15.791704944Z 2026-04-26 12:27:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:19.617745974Z 2026-04-26 12:27:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:20.791152335Z 2026-04-26 12:27:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:24.617545162Z 2026-04-26 12:27:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:25.790950275Z 2026-04-26 12:27:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:29.605806335Z 2026-04-26 12:27:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:29.616908998Z 2026-04-26 12:27:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:30.790822826Z 2026-04-26 12:27:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:34.617317579Z 2026-04-26 12:27:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:35.790946553Z 2026-04-26 12:27:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:39.616898347Z 2026-04-26 12:27:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:40.790449215Z 2026-04-26 12:27:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:44.617745536Z 2026-04-26 12:27:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:45.791930804Z 2026-04-26 12:27:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T12:27:49.617382542Z 2026-04-26 12:27:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:54.622180449Z 2026-04-26 12:27:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:59.606147252Z 2026-04-26 12:27:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:27:59.617571383Z 2026-04-26 12:27:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:04.617598725Z 2026-04-26 12:28:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:09.61706724Z 2026-04-26 12:28:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:14.617366856Z 2026-04-26 12:28:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:19.617246559Z 2026-04-26 12:28:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:24.61711463Z 2026-04-26 12:28:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:29.606145443Z 2026-04-26 12:28:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:29.617145323Z 2026-04-26 12:28:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:34.790298372Z 2026-04-26 12:28:34 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:39.618975301Z 2026-04-26 12:28:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:44.617587454Z 2026-04-26 12:28:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:49.617303643Z 2026-04-26 12:28:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:54.620064219Z 2026-04-26 12:28:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:59.605538722Z 2026-04-26 12:28:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:28:59.616746408Z 2026-04-26 12:28:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:04.616894143Z 2026-04-26 12:29:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:09.619540991Z 2026-04-26 12:29:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:14.617469186Z 2026-04-26 12:29:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:19.618774658Z 2026-04-26 12:29:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:24.619216674Z 2026-04-26 12:29:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:29.606088263Z 2026-04-26 12:29:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:29.617054883Z 2026-04-26 12:29:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:34.618375969Z 2026-04-26 12:29:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:39.616978874Z 2026-04-26 12:29:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:44.616770828Z 2026-04-26 12:29:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:49.618372676Z 2026-04-26 12:29:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:54.617370457Z 2026-04-26 12:29:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:59.606478352Z 2026-04-26 12:29:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:29:59.617813732Z 2026-04-26 12:29:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:04.617893816Z 2026-04-26 12:30:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:09.617431856Z 2026-04-26 12:30:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:14.617385735Z 2026-04-26 12:30:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:19.617761202Z 2026-04-26 12:30:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:24.618433396Z 2026-04-26 12:30:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:29.606066816Z 2026-04-26 12:30:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:29.61800112Z 2026-04-26 12:30:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:34.616881825Z 2026-04-26 12:30:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:39.617488623Z 2026-04-26 12:30:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:44.618779207Z 2026-04-26 12:30:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:49.616861437Z 2026-04-26 12:30:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:54.616867324Z 2026-04-26 12:30:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:59.605427408Z 2026-04-26 12:30:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:30:59.616511371Z 2026-04-26 12:30:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:04.617626364Z 2026-04-26 12:31:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:09.618393646Z 2026-04-26 12:31:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:14.616980381Z 2026-04-26 12:31:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:19.617496274Z 2026-04-26 12:31:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:24.616890487Z 2026-04-26 12:31:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:29.61166112Z 2026-04-26 12:31:29 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:29.620123966Z 2026-04-26 12:31:29 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:34.616695403Z 2026-04-26 12:31:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:39.61760217Z 2026-04-26 12:31:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:44.61710392Z 2026-04-26 12:31:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:49.617924371Z 2026-04-26 12:31:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:54.617706635Z 2026-04-26 12:31:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:57.276602979Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T12:31:57.426156677Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T12:31:59.60586783Z 2026-04-26 12:31:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:31:59.617217249Z 2026-04-26 12:31:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:04.616811375Z 2026-04-26 12:32:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:09.617242371Z 2026-04-26 12:32:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:14.617081289Z 2026-04-26 12:32:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:19.620344454Z 2026-04-26 12:32:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:24.620532879Z 2026-04-26 12:32:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:29.605790011Z 2026-04-26 12:32:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:29.617287245Z 2026-04-26 12:32:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:34.620114684Z 2026-04-26 12:32:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:39.617699899Z 2026-04-26 12:32:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:44.618061482Z 2026-04-26 12:32:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:49.616917676Z 2026-04-26 12:32:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:54.618570569Z 2026-04-26 12:32:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:59.605989918Z 2026-04-26 12:32:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:32:59.617376868Z 2026-04-26 12:32:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:00.855052381Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T12:33:00.922897395Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T12:33:04.616899624Z 2026-04-26 12:33:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:09.617625899Z 2026-04-26 12:33:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:14.617300606Z 2026-04-26 12:33:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:19.61849596Z 2026-04-26 12:33:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:20.085589694Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T12:33:22.20085702Z 
2026-04-26T12:33:22.200888172Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T12:33:22.200893432Z > node dist/index.js
2026-04-26T12:33:22.200895712Z 
2026-04-26T12:33:24.620639517Z 2026-04-26 12:33:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:26.787414586Z 2026-04-26 12:33:26 [info] [ai] Gemini ready — model: gemini-2.5-flash
2026-04-26T12:33:27.777348951Z 2026-04-26 12:33:27 [info] Firestore initialized successfully
2026-04-26T12:33:27.78161702Z 2026-04-26 12:33:27 [info] ✅ Server running on http://localhost:10000
2026-04-26T12:33:27.781819892Z 2026-04-26 12:33:27 [info] Environment: production
2026-04-26T12:33:27.781986512Z 2026-04-26 12:33:27 [info] API URL: http://localhost:5000
2026-04-26T12:33:27.782186774Z 2026-04-26 12:33:27 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T12:33:28.176866448Z 2026-04-26 12:33:28 [error] Route / not found
2026-04-26T12:33:28.176890839Z Error: Route / not found
2026-04-26T12:33:28.176894939Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T12:33:28.176898039Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:33:28.17690293Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:33:28.17690614Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:33:28.1769085Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T12:33:28.17691091Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T12:33:28.1769136Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T12:33:28.176916251Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:33:28.176918791Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:33:28.176921421Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:33:28.278287257Z 2026-04-26 12:33:28 [info] {"method":"HEAD","path":"/","status":404,"duration":"197ms","ip":"::1"}
2026-04-26T12:33:29.605649475Z 2026-04-26 12:33:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:29.616514252Z 2026-04-26 12:33:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:33.376391218Z 2026-04-26 12:33:33 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:33:33.380563322Z 2026-04-26 12:33:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:33:34.397335393Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T12:33:34.500651265Z 2026-04-26 12:33:34 [error] Route / not found
2026-04-26T12:33:34.500683177Z Error: Route / not found
2026-04-26T12:33:34.500688318Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T12:33:34.500692548Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:33:34.500697298Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:33:34.500701568Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:33:34.500705088Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T12:33:34.500708679Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T12:33:34.500712319Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T12:33:34.500715929Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:33:34.50073288Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:33:34.500748581Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:33:34.503827901Z 2026-04-26 12:33:34 [info] {"method":"GET","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T12:33:34.551867043Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:33:34.566017822Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T12:33:34.577523279Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:33:34.581988429Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T12:33:34.5857743Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:33:34.590543888Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T12:33:34.617271761Z 2026-04-26 12:33:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:37.796250015Z 2026-04-26 12:33:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:33:39.617483134Z 2026-04-26 12:33:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
```
