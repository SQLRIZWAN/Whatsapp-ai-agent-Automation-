# Render Deploy Diagnostics

Run: 24930787814
Commit: a75897c5b309f98e899519c7a949a46988edd905
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mb3ppf9bms73ftk350

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
  "updatedAt": "2026-04-25T12:24:35.892475Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mb3ppf9bms73ftk350",
  "commit": {
    "id": "a75897c5b309f98e899519c7a949a46988edd905",
    "message": "ci: trigger deploy workflow on fix-ai-messaging-stability branch\n\nAllows the full Render + Vercel deploy to run from the feature branch\nso changes can be tested live before merging to main.\n\nhttps://claude.ai/code/session_01T1SgdJMtKrs6g3inUqNSoB",
    "createdAt": "2026-04-25T12:21:44Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T12:21:59.753295Z",
  "updatedAt": "2026-04-25T12:24:35.891169Z",
  "startedAt": "2026-04-25T12:21:59.708352Z",
  "finishedAt": "2026-04-25T12:24:35.890963Z"
}
```

## Build logs (last 4h)
```
2026-04-25T12:22:06.755544403Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:22:07.45703874Z [34m[1m==>(B[m [1mChecking out commit a75897c5b309f98e899519c7a949a46988edd905 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T12:22:09.01360631Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:22:09.038257122Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:22:11.042087622Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:23:43.263825287Z 
2026-04-25T12:23:43.263844068Z added 590 packages, and audited 591 packages in 2m
2026-04-25T12:23:43.263898209Z 
2026-04-25T12:23:43.264009492Z 113 packages are looking for funding
2026-04-25T12:23:43.264078664Z   run `npm fund` for details
2026-04-25T12:23:43.427550639Z 
2026-04-25T12:23:43.42759631Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:23:43.4276063Z 
2026-04-25T12:23:43.427610941Z To address issues that do not require attention, run:
2026-04-25T12:23:43.427615081Z   npm audit fix
2026-04-25T12:23:43.427618831Z 
2026-04-25T12:23:43.427622641Z To address all issues (including breaking changes), run:
2026-04-25T12:23:43.427627321Z   npm audit fix --force
2026-04-25T12:23:43.427630981Z 
2026-04-25T12:23:43.427635581Z Run `npm audit` for details.
2026-04-25T12:23:43.735529511Z 
2026-04-25T12:23:43.735548182Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:23:43.735552071Z > tsc && tsc-alias
2026-04-25T12:23:43.735555242Z 
2026-04-25T12:23:49.317985403Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:23:55.547398779Z [34;1m==>[0;22m [1mUploaded in 3.5s. Compression took 2.7s[22m
2026-04-25T12:23:55.580136985Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-25T12:24:03.19020422Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T12:24:03.249777861Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T12:24:19.409231221Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T12:24:20.703622209Z 
2026-04-25T12:24:20.703649041Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T12:24:20.703654461Z > node dist/index.js
2026-04-25T12:24:20.703657191Z 
2026-04-25T12:24:25.703855258Z 2026-04-25 12:24:25 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T12:24:26.724797318Z 2026-04-25 12:24:26 [info] Firestore initialized successfully
2026-04-25T12:24:27.006695599Z 2026-04-25 12:24:27 [info] ✅ Server running on http://localhost:10000
2026-04-25T12:24:27.006817986Z 2026-04-25 12:24:27 [info] Environment: production
2026-04-25T12:24:27.00739267Z 2026-04-25 12:24:27 [info] API URL: http://localhost:5000
2026-04-25T12:24:27.007403781Z 2026-04-25 12:24:27 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T12:24:27.276963107Z 2026-04-25 12:24:27 [error] Route / not found
2026-04-25T12:24:27.276978528Z Error: Route / not found
2026-04-25T12:24:27.276983928Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:24:27.276989518Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:24:27.276996499Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:24:27.277002519Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:24:27.27700694Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:24:27.2770115Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:24:27.27701614Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:24:27.27702056Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:24:27.277025161Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:24:27.277030281Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:24:27.280492357Z 2026-04-25 12:24:27 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-25T12:24:35.404678127Z 2026-04-25 12:24:35 [info] {"method":"GET","path":"/health","status":200,"duration":"5ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:24:35.407521436Z 2026-04-25 12:24:35 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:24:36.012161534Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T12:24:36.151554613Z 2026-04-25 12:24:36 [error] Route / not found
2026-04-25T12:24:36.151611446Z Error: Route / not found
2026-04-25T12:24:36.151618846Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:24:36.151623817Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:24:36.151628487Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:24:36.151633007Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:24:36.151637118Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:24:36.151641618Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:24:36.151645628Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:24:36.151649948Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:24:36.152772515Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:24:36.152781736Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:24:36.15399996Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:24:36.156909522Z 2026-04-25 12:24:36 [info] {"method":"GET","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-25T12:24:36.159526216Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:24:36.161761366Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:24:36.163563173Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T12:24:36.165459734Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:24:36.167615701Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:24:40.404057624Z 2026-04-25 12:24:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:24:45.402206037Z 2026-04-25 12:24:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
```
