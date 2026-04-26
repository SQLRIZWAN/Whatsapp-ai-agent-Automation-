# Render Deploy Diagnostics

Run: 24956722662
Commit: 22f247e2fbfa43df9dfc860baf2e2c366428aa30
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n0dgf7f7vs73ffo0rg

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
  "updatedAt": "2026-04-26T12:38:39.315438Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n0dgf7f7vs73ffo0rg",
  "commit": {
    "id": "22f247e2fbfa43df9dfc860baf2e2c366428aa30",
    "message": "fix: self-ping uses localhost:PORT not API_URL\n\nAPI_URL is set to http://localhost:5000 in the workflow env but Render\nruns on whatever PORT it assigns (typically 10000). Using API_URL caused\nthe keepalive ping to fail → server sleeps after 15 min.\n\nNow always ping http://localhost:${PORT}/health which is always correct.\n\nhttps://claude.ai/code/session_01T1SgdJMtKrs6g3inUqNSoB",
    "createdAt": "2026-04-26T12:33:13Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T12:36:17.535321Z",
  "updatedAt": "2026-04-26T12:38:39.313818Z",
  "startedAt": "2026-04-26T12:36:17.492084Z",
  "finishedAt": "2026-04-26T12:38:39.313606Z"
}
```

## App logs (last 4h)
```
2026-04-26T12:17:14.167175087Z 2026-04-26 12:17:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:19.16747745Z 2026-04-26 12:17:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:24.167466173Z 2026-04-26 12:17:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:29.167388282Z 2026-04-26 12:17:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:34.167179077Z 2026-04-26 12:17:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:39.167522643Z 2026-04-26 12:17:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:44.16836175Z 2026-04-26 12:17:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.85"}
2026-04-26T12:17:49.167609074Z 2026-04-26 12:17:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.85"}
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
2026-04-26T12:33:42.795023225Z 2026-04-26 12:33:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:33:44.61748692Z 2026-04-26 12:33:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:47.795170993Z 2026-04-26 12:33:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:33:49.616823418Z 2026-04-26 12:33:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:52.795014732Z 2026-04-26 12:33:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:33:54.616667537Z 2026-04-26 12:33:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:33:57.795802115Z 2026-04-26 12:33:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:33:59.617633845Z 2026-04-26 12:33:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:34:02.795873804Z 2026-04-26 12:34:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:02.802412516Z 2026-04-26 12:34:02 [info] {"method":"GET","path":"/health","status":200,"duration":"6ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:04.617344097Z 2026-04-26 12:34:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:34:07.795386849Z 2026-04-26 12:34:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:09.617153961Z 2026-04-26 12:34:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:34:12.795672075Z 2026-04-26 12:34:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:14.618893723Z 2026-04-26 12:34:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:34:17.795306743Z 2026-04-26 12:34:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:19.616856017Z 2026-04-26 12:34:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:34:22.794523485Z 2026-04-26 12:34:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:24.616934403Z 2026-04-26 12:34:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:34:27.794881522Z 2026-04-26 12:34:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:29.61787078Z 2026-04-26 12:34:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-26T12:34:32.794841294Z 2026-04-26 12:34:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:32.795479651Z 2026-04-26 12:34:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:37.803696525Z 2026-04-26 12:34:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:42.795770004Z 2026-04-26 12:34:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:47.794791517Z 2026-04-26 12:34:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:52.7946973Z 2026-04-26 12:34:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:34:57.794704058Z 2026-04-26 12:34:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:02.795067846Z 2026-04-26 12:35:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:02.795950057Z 2026-04-26 12:35:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:07.794532779Z 2026-04-26 12:35:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:12.794586706Z 2026-04-26 12:35:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:17.796154029Z 2026-04-26 12:35:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:22.794742598Z 2026-04-26 12:35:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:27.795174632Z 2026-04-26 12:35:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:32.794975008Z 2026-04-26 12:35:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:32.795991408Z 2026-04-26 12:35:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:37.79489496Z 2026-04-26 12:35:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:42.794595408Z 2026-04-26 12:35:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:47.795430849Z 2026-04-26 12:35:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:52.796013785Z 2026-04-26 12:35:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:35:57.795991835Z 2026-04-26 12:35:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:02.795017886Z 2026-04-26 12:36:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:02.795670554Z 2026-04-26 12:36:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:07.794479992Z 2026-04-26 12:36:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:12.794388063Z 2026-04-26 12:36:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:17.794426581Z 2026-04-26 12:36:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:22.794568473Z 2026-04-26 12:36:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:27.794805709Z 2026-04-26 12:36:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:32.794756797Z 2026-04-26 12:36:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:32.795357902Z 2026-04-26 12:36:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:37.794803979Z 2026-04-26 12:36:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:42.794811868Z 2026-04-26 12:36:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:47.795005026Z 2026-04-26 12:36:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:52.794867264Z 2026-04-26 12:36:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:36:57.79456005Z 2026-04-26 12:36:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:02.79520956Z 2026-04-26 12:37:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:02.796043879Z 2026-04-26 12:37:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:07.794457537Z 2026-04-26 12:37:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:12.794807078Z 2026-04-26 12:37:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:17.794313498Z 2026-04-26 12:37:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:22.794813693Z 2026-04-26 12:37:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:27.795485938Z 2026-04-26 12:37:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:32.794832164Z 2026-04-26 12:37:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:32.795458151Z 2026-04-26 12:37:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:37.795993465Z 2026-04-26 12:37:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:42.795325188Z 2026-04-26 12:37:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:47.795208281Z 2026-04-26 12:37:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:52.794655888Z 2026-04-26 12:37:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:57.796421649Z 2026-04-26 12:37:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:37:58.258150203Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T12:37:58.345380112Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T12:38:02.796910583Z 2026-04-26 12:38:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:02.79770861Z 2026-04-26 12:38:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:07.797693824Z 2026-04-26 12:38:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:12.795040682Z 2026-04-26 12:38:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:17.794877375Z 2026-04-26 12:38:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:22.795666151Z 2026-04-26 12:38:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:26.136433762Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T12:38:27.236984517Z 
2026-04-26T12:38:27.237012378Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T12:38:27.237017878Z > node dist/index.js
2026-04-26T12:38:27.237020668Z 
2026-04-26T12:38:27.795215185Z 2026-04-26 12:38:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:31.440198076Z 2026-04-26 12:38:31 [info] [ai] Gemini ready — model: gemini-2.5-flash
2026-04-26T12:38:32.334790447Z 2026-04-26 12:38:32 [info] Firestore initialized successfully
2026-04-26T12:38:32.338723392Z 2026-04-26 12:38:32 [info] ✅ Server running on http://localhost:10000
2026-04-26T12:38:32.338911617Z 2026-04-26 12:38:32 [info] Environment: production
2026-04-26T12:38:32.339083241Z 2026-04-26 12:38:32 [info] API URL: http://localhost:5000
2026-04-26T12:38:32.339240715Z 2026-04-26 12:38:32 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T12:38:32.629943279Z 2026-04-26 12:38:32 [error] Route / not found
2026-04-26T12:38:32.629962729Z Error: Route / not found
2026-04-26T12:38:32.629966189Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T12:38:32.62996906Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:38:32.62997553Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:38:32.62997835Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:38:32.62998055Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T12:38:32.62998275Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T12:38:32.62998493Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T12:38:32.62998693Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T12:38:32.629989Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T12:38:32.6299911Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T12:38:32.729378321Z 2026-04-26 12:38:32 [info] {"method":"HEAD","path":"/","status":404,"duration":"99ms","ip":"::1"}
2026-04-26T12:38:32.794620638Z 2026-04-26 12:38:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:32.795428835Z 2026-04-26 12:38:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:37.794561491Z 2026-04-26 12:38:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.24"}
2026-04-26T12:38:38.651797162Z 2026-04-26 12:38:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.30"}
2026-04-26T12:38:38.652797188Z 2026-04-26 12:38:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.30"}
2026-04-26T12:38:39.485753582Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T12:38:39.660529897Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:38:39.665685715Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T12:38:39.669713243Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:38:39.673872725Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T12:38:39.677470301Z [0;32m[1m==> [0m[1m[0m
2026-04-26T12:38:39.681860159Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
```
