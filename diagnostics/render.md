# Render Deploy Diagnostics

Run: 24930832996
Commit: cc82f133d38209d1e073b3bf6786ab795fd56b56
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mb5ojeo5us73en94l0

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
  "updatedAt": "2026-04-25T12:28:19.266984Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mb5ojeo5us73en94l0",
  "commit": {
    "id": "cc82f133d38209d1e073b3bf6786ab795fd56b56",
    "message": "ci: fix npm ci → npm install (no package-lock.json present)\n\nnpm ci strictly requires a lockfile. Since package-lock.json is not\ncommitted, switching to npm install which works without it. Also removed\nthe cache step that depended on the lockfile path.\n\nhttps://claude.ai/code/session_01T1SgdJMtKrs6g3inUqNSoB",
    "createdAt": "2026-04-25T12:24:06Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T12:26:12.028835Z",
  "updatedAt": "2026-04-25T12:28:19.265867Z",
  "startedAt": "2026-04-25T12:26:11.690575Z",
  "finishedAt": "2026-04-25T12:28:19.265681Z"
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
2026-04-25T12:26:15.197630407Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:26:15.880209886Z [34m[1m==>(B[m [1mChecking out commit cc82f133d38209d1e073b3bf6786ab795fd56b56 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T12:26:17.291698998Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:26:17.316119653Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:26:19.220614821Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:27:41.012990066Z 
2026-04-25T12:27:41.013018226Z added 590 packages, and audited 591 packages in 1m
2026-04-25T12:27:41.013023806Z 
2026-04-25T12:27:41.013108718Z 113 packages are looking for funding
2026-04-25T12:27:41.013161739Z   run `npm fund` for details
2026-04-25T12:27:41.181363936Z 
2026-04-25T12:27:41.181386016Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:27:41.181390056Z 
2026-04-25T12:27:41.181393436Z To address issues that do not require attention, run:
2026-04-25T12:27:41.181396636Z   npm audit fix
2026-04-25T12:27:41.181399846Z 
2026-04-25T12:27:41.181402977Z To address all issues (including breaking changes), run:
2026-04-25T12:27:41.181406587Z   npm audit fix --force
2026-04-25T12:27:41.181409487Z 
2026-04-25T12:27:41.181413287Z Run `npm audit` for details.
2026-04-25T12:27:41.403295534Z 
2026-04-25T12:27:41.403319254Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:27:41.403327085Z > tsc && tsc-alias
2026-04-25T12:27:41.403333035Z 
2026-04-25T12:27:44.436736717Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:27:53.183517744Z [34;1m==>[0;22m [1mUploaded in 6.4s. Compression took 2.4s[22m
2026-04-25T12:27:53.215190324Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
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
2026-04-25T12:24:50.403144967Z 2026-04-25 12:24:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:24:55.402528354Z 2026-04-25 12:24:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:00.402144104Z 2026-04-25 12:25:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:05.397360902Z 2026-04-25 12:25:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:05.401546441Z 2026-04-25 12:25:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:10.401567856Z 2026-04-25 12:25:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:15.401695996Z 2026-04-25 12:25:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:20.409487782Z 2026-04-25 12:25:20 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:25.401991548Z 2026-04-25 12:25:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:30.402214123Z 2026-04-25 12:25:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:35.396223908Z 2026-04-25 12:25:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:35.401482682Z 2026-04-25 12:25:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:40.401685216Z 2026-04-25 12:25:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:45.402085541Z 2026-04-25 12:25:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:50.40255186Z 2026-04-25 12:25:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:25:55.401448795Z 2026-04-25 12:25:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:00.403454595Z 2026-04-25 12:26:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:05.398296059Z 2026-04-25 12:26:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:05.402831309Z 2026-04-25 12:26:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:10.402123697Z 2026-04-25 12:26:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:15.402792958Z 2026-04-25 12:26:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:20.401950527Z 2026-04-25 12:26:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:25.401867903Z 2026-04-25 12:26:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:30.401558594Z 2026-04-25 12:26:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:35.396856003Z 2026-04-25 12:26:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:35.402468398Z 2026-04-25 12:26:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:40.402573943Z 2026-04-25 12:26:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:45.402095234Z 2026-04-25 12:26:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:50.40154372Z 2026-04-25 12:26:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:26:55.402328165Z 2026-04-25 12:26:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:00.401912969Z 2026-04-25 12:27:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:05.396531707Z 2026-04-25 12:27:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:05.401668193Z 2026-04-25 12:27:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:10.402267957Z 2026-04-25 12:27:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:15.401476337Z 2026-04-25 12:27:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:20.401771273Z 2026-04-25 12:27:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:25.401480483Z 2026-04-25 12:27:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:30.402357513Z 2026-04-25 12:27:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:35.398565087Z 2026-04-25 12:27:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:35.401681853Z 2026-04-25 12:27:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:40.402110148Z 2026-04-25 12:27:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:45.402571144Z 2026-04-25 12:27:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:50.402473117Z 2026-04-25 12:27:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:55.401794524Z 2026-04-25 12:27:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:27:58.280812471Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T12:27:58.347823644Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T12:28:00.402350883Z 2026-04-25 12:28:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:05.396442206Z 2026-04-25 12:28:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:05.401666448Z 2026-04-25 12:28:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:10.402473091Z 2026-04-25 12:28:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:11.369133632Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T12:28:12.368927578Z 
2026-04-25T12:28:12.368955408Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T12:28:12.368961389Z > node dist/index.js
2026-04-25T12:28:12.368964609Z 
2026-04-25T12:28:15.402071971Z 2026-04-25 12:28:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:16.568677814Z 2026-04-25 12:28:16 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T12:28:17.462397696Z 2026-04-25 12:28:17 [info] Firestore initialized successfully
2026-04-25T12:28:17.466265456Z 2026-04-25 12:28:17 [info] ✅ Server running on http://localhost:10000
2026-04-25T12:28:17.46643246Z 2026-04-25 12:28:17 [info] Environment: production
2026-04-25T12:28:17.466594964Z 2026-04-25 12:28:17 [info] API URL: http://localhost:5000
2026-04-25T12:28:17.466807029Z 2026-04-25 12:28:17 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T12:28:17.663597886Z 2026-04-25 12:28:17 [error] Route / not found
2026-04-25T12:28:17.663626176Z Error: Route / not found
2026-04-25T12:28:17.663630456Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:28:17.663633707Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:28:17.663638817Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:28:17.663642437Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:28:17.663645177Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:28:17.663647857Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:28:17.663650627Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:28:17.663653237Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:28:17.663655937Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:28:17.663658597Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:28:17.769533106Z 2026-04-25 12:28:17 [info] {"method":"HEAD","path":"/","status":404,"duration":"106ms","ip":"::1"}
2026-04-25T12:28:18.683696838Z 2026-04-25 12:28:18 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:18.685338737Z 2026-04-25 12:28:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:19.384343946Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T12:28:19.492946104Z 2026-04-25 12:28:19 [error] Route / not found
2026-04-25T12:28:19.492969284Z Error: Route / not found
2026-04-25T12:28:19.492973235Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:28:19.492976824Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:28:19.492980455Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:28:19.492984415Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:28:19.492987435Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:28:19.492990595Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:28:19.492993395Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:28:19.492996265Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:28:19.493014965Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:28:19.493018705Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:28:19.493705642Z 2026-04-25 12:28:19 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T12:28:19.571737454Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:28:19.576243139Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:28:19.581527323Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:28:19.585943966Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T12:28:19.589890688Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:28:19.594278601Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:28:20.402311779Z 2026-04-25 12:28:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:23.685722327Z 2026-04-25 12:28:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:25.401596388Z 2026-04-25 12:28:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:28.682713936Z 2026-04-25 12:28:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:28.685586014Z 2026-04-25 12:28:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:30.401818123Z 2026-04-25 12:28:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:33.685603195Z 2026-04-25 12:28:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:35.401958402Z 2026-04-25 12:28:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
```
