# Render Deploy Diagnostics

Run: 24931075187
Commit: 4e4a95396068aa7fecfd761f9214ea8af9c3deb8
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mbb967r5hc7383guig

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
  "updatedAt": "2026-04-25T12:40:37.848059Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mbb967r5hc7383guig",
  "commit": {
    "id": "4e4a95396068aa7fecfd761f9214ea8af9c3deb8",
    "message": "Merge pull request #4 from SQLRIZWAN/claude/fix-ai-messaging-stability-a9TSt\n\nfix: resolve AI messaging failures, connection stability & UI polish",
    "createdAt": "2026-04-25T12:37:45Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T12:37:56.589006Z",
  "updatedAt": "2026-04-25T12:40:37.847054Z",
  "startedAt": "2026-04-25T12:37:56.489537Z",
  "finishedAt": "2026-04-25T12:40:37.846829Z"
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
2026-04-25T12:29:58.228242122Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:29:58.982148635Z [34m[1m==>(B[m [1mChecking out commit 34805ec7f3cad7d2624a2207e6e356c0a954784d in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T12:30:04.489864705Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:30:04.514923119Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:30:06.526489037Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:31:30.305264642Z 
2026-04-25T12:31:30.305291094Z added 590 packages, and audited 591 packages in 1m
2026-04-25T12:31:30.305303315Z 
2026-04-25T12:31:30.305403433Z 113 packages are looking for funding
2026-04-25T12:31:30.305472489Z   run `npm fund` for details
2026-04-25T12:31:30.448779114Z 
2026-04-25T12:31:30.448799996Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:31:30.448804526Z 
2026-04-25T12:31:30.448808797Z To address issues that do not require attention, run:
2026-04-25T12:31:30.448812787Z   npm audit fix
2026-04-25T12:31:30.448816507Z 
2026-04-25T12:31:30.448820397Z To address all issues (including breaking changes), run:
2026-04-25T12:31:30.448825138Z   npm audit fix --force
2026-04-25T12:31:30.448828858Z 
2026-04-25T12:31:30.448833558Z Run `npm audit` for details.
2026-04-25T12:31:30.663088847Z 
2026-04-25T12:31:30.663111999Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:31:30.6631194Z > tsc && tsc-alias
2026-04-25T12:31:30.66312532Z 
2026-04-25T12:31:33.68958835Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:31:39.891235898Z [34;1m==>[0;22m [1mUploaded in 3.8s. Compression took 2.4s[22m
2026-04-25T12:31:39.934169826Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T12:38:00.704472046Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:38:01.437834003Z [34m[1m==>(B[m [1mChecking out commit 4e4a95396068aa7fecfd761f9214ea8af9c3deb8 in branch main(B[m
2026-04-25T12:38:22.052092263Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:38:22.087212159Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:38:24.7752579Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:39:49.112828018Z 
2026-04-25T12:39:49.112854768Z added 590 packages, and audited 591 packages in 1m
2026-04-25T12:39:49.112865348Z 
2026-04-25T12:39:49.113001071Z 113 packages are looking for funding
2026-04-25T12:39:49.113082523Z   run `npm fund` for details
2026-04-25T12:39:49.265286341Z 
2026-04-25T12:39:49.265312761Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:39:49.265317361Z 
2026-04-25T12:39:49.265321832Z To address issues that do not require attention, run:
2026-04-25T12:39:49.265325792Z   npm audit fix
2026-04-25T12:39:49.265329612Z 
2026-04-25T12:39:49.265333532Z To address all issues (including breaking changes), run:
2026-04-25T12:39:49.265337832Z   npm audit fix --force
2026-04-25T12:39:49.265341692Z 
2026-04-25T12:39:49.265346222Z Run `npm audit` for details.
2026-04-25T12:39:49.498056618Z 
2026-04-25T12:39:49.498084449Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:39:49.498097139Z > tsc && tsc-alias
2026-04-25T12:39:49.498103659Z 
2026-04-25T12:39:53.0262208Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:40:00.622178515Z [34;1m==>[0;22m [1mUploaded in 4.9s. Compression took 2.6s[22m
2026-04-25T12:40:00.653905217Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
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
2026-04-25T12:28:38.686690542Z 2026-04-25 12:28:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:40.402456052Z 2026-04-25 12:28:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:43.685828473Z 2026-04-25 12:28:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:45.401531096Z 2026-04-25 12:28:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:48.68604342Z 2026-04-25 12:28:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:50.402384096Z 2026-04-25 12:28:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:53.687183879Z 2026-04-25 12:28:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:55.401762396Z 2026-04-25 12:28:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:58.686044104Z 2026-04-25 12:28:58 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:58.687088229Z 2026-04-25 12:28:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:00.402429433Z 2026-04-25 12:29:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:29:03.68533136Z 2026-04-25 12:29:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:05.402153793Z 2026-04-25 12:29:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:29:08.685660351Z 2026-04-25 12:29:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:10.401829898Z 2026-04-25 12:29:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:29:13.685219413Z 2026-04-25 12:29:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:15.402303131Z 2026-04-25 12:29:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:29:18.685177676Z 2026-04-25 12:29:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:23.685535588Z 2026-04-25 12:29:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:28.682410818Z 2026-04-25 12:29:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:28.685265295Z 2026-04-25 12:29:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:33.685559106Z 2026-04-25 12:29:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:38.686003881Z 2026-04-25 12:29:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:43.685273588Z 2026-04-25 12:29:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:48.685179841Z 2026-04-25 12:29:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:53.685245748Z 2026-04-25 12:29:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:58.683488502Z 2026-04-25 12:29:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:58.685663923Z 2026-04-25 12:29:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:03.686005757Z 2026-04-25 12:30:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:08.685641514Z 2026-04-25 12:30:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:13.686144432Z 2026-04-25 12:30:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:18.685284128Z 2026-04-25 12:30:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:23.685812427Z 2026-04-25 12:30:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:28.68222533Z 2026-04-25 12:30:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:28.684973424Z 2026-04-25 12:30:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:33.685591766Z 2026-04-25 12:30:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:38.688452381Z 2026-04-25 12:30:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:43.685585221Z 2026-04-25 12:30:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:48.685667311Z 2026-04-25 12:30:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:53.689491419Z 2026-04-25 12:30:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:58.682240946Z 2026-04-25 12:30:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:58.685588465Z 2026-04-25 12:30:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:03.686329271Z 2026-04-25 12:31:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:08.686298269Z 2026-04-25 12:31:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:13.68550003Z 2026-04-25 12:31:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:18.687437955Z 2026-04-25 12:31:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:23.68555461Z 2026-04-25 12:31:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:28.681368571Z 2026-04-25 12:31:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:28.685101889Z 2026-04-25 12:31:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:33.685712923Z 2026-04-25 12:31:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:38.685760845Z 2026-04-25 12:31:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:43.685564701Z 2026-04-25 12:31:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:48.685769936Z 2026-04-25 12:31:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:49.483660861Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T12:31:49.565259468Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T12:31:53.686311379Z 2026-04-25 12:31:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:58.681318463Z 2026-04-25 12:31:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:58.685142563Z 2026-04-25 12:31:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:03.685670867Z 2026-04-25 12:32:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:05.663376067Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T12:32:06.957210378Z 
2026-04-25T12:32:06.9572391Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T12:32:06.957245111Z > node dist/index.js
2026-04-25T12:32:06.957248331Z 
2026-04-25T12:32:08.685340081Z 2026-04-25 12:32:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:11.557320524Z 2026-04-25 12:32:11 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T12:32:12.463809232Z 2026-04-25 12:32:12 [info] Firestore initialized successfully
2026-04-25T12:32:12.555194238Z 2026-04-25 12:32:12 [info] ✅ Server running on http://localhost:10000
2026-04-25T12:32:12.555388071Z 2026-04-25 12:32:12 [info] Environment: production
2026-04-25T12:32:12.555592615Z 2026-04-25 12:32:12 [info] API URL: http://localhost:5000
2026-04-25T12:32:12.555856573Z 2026-04-25 12:32:12 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T12:32:12.956258857Z 2026-04-25 12:32:12 [error] Route / not found
2026-04-25T12:32:12.956277548Z Error: Route / not found
2026-04-25T12:32:12.956281788Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:32:12.956286029Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:32:12.956291709Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:32:12.956295639Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:32:12.956298749Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:32:12.95630183Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:32:12.95630494Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:32:12.95630806Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:32:12.95631118Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:32:12.95631439Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:32:12.960965834Z 2026-04-25 12:32:12 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-25T12:32:13.685579739Z 2026-04-25 12:32:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:18.685630842Z 2026-04-25 12:32:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:19.87702589Z 2026-04-25 12:32:19 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:19.881400285Z 2026-04-25 12:32:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:20.643518771Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T12:32:20.781195532Z 2026-04-25 12:32:20 [error] Route / not found
2026-04-25T12:32:20.781286668Z Error: Route / not found
2026-04-25T12:32:20.781330741Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:32:20.781336341Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:32:20.781342032Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:32:20.781349142Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:32:20.781353752Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:32:20.781358153Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:32:20.781362603Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:32:20.781367413Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:32:20.781392135Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:32:20.781396115Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:32:20.78384496Z 2026-04-25 12:32:20 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-25T12:32:20.818836884Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:32:20.821400122Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:32:20.823575591Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:32:20.825709088Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T12:32:20.827976958Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:32:20.830063694Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:32:23.68541995Z 2026-04-25 12:32:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:24.874022266Z 2026-04-25 12:32:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:28.685836763Z 2026-04-25 12:32:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:29.873550524Z 2026-04-25 12:32:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:33.6877464Z 2026-04-25 12:32:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:34.877287877Z 2026-04-25 12:32:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:38.68588302Z 2026-04-25 12:32:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:39.873656984Z 2026-04-25 12:32:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:43.686019697Z 2026-04-25 12:32:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:44.87370551Z 2026-04-25 12:32:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:48.68600798Z 2026-04-25 12:32:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:49.873842973Z 2026-04-25 12:32:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:49.875110579Z 2026-04-25 12:32:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:53.685565894Z 2026-04-25 12:32:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:54.872760105Z 2026-04-25 12:32:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:58.685627179Z 2026-04-25 12:32:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:59.873637181Z 2026-04-25 12:32:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:03.685586043Z 2026-04-25 12:33:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:33:04.872791642Z 2026-04-25 12:33:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:08.686610431Z 2026-04-25 12:33:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:33:09.875121397Z 2026-04-25 12:33:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:13.685199483Z 2026-04-25 12:33:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:33:14.873791748Z 2026-04-25 12:33:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:18.685803643Z 2026-04-25 12:33:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:33:19.873045967Z 2026-04-25 12:33:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:19.87368297Z 2026-04-25 12:33:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:24.872886169Z 2026-04-25 12:33:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:29.873695457Z 2026-04-25 12:33:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:34.873050068Z 2026-04-25 12:33:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:39.875386051Z 2026-04-25 12:33:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:44.873693053Z 2026-04-25 12:33:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:49.873786567Z 2026-04-25 12:33:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:49.875543986Z 2026-04-25 12:33:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:54.875273747Z 2026-04-25 12:33:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:59.874265909Z 2026-04-25 12:33:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:04.873763367Z 2026-04-25 12:34:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:09.873994545Z 2026-04-25 12:34:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:14.873028233Z 2026-04-25 12:34:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:19.87423968Z 2026-04-25 12:34:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:19.874272482Z 2026-04-25 12:34:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:24.873745843Z 2026-04-25 12:34:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:29.873400756Z 2026-04-25 12:34:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:34.877955761Z 2026-04-25 12:34:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:39.873542183Z 2026-04-25 12:34:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:44.878552591Z 2026-04-25 12:34:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:49.875969279Z 2026-04-25 12:34:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:49.875993601Z 2026-04-25 12:34:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:54.873014803Z 2026-04-25 12:34:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:59.873944959Z 2026-04-25 12:34:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:04.873555598Z 2026-04-25 12:35:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:09.87349794Z 2026-04-25 12:35:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:14.872780659Z 2026-04-25 12:35:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:19.873717561Z 2026-04-25 12:35:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:19.875048091Z 2026-04-25 12:35:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:24.872785138Z 2026-04-25 12:35:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:29.872938279Z 2026-04-25 12:35:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:34.872788431Z 2026-04-25 12:35:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:39.875373648Z 2026-04-25 12:35:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:44.873835999Z 2026-04-25 12:35:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:49.875346645Z 2026-04-25 12:35:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:49.875366816Z 2026-04-25 12:35:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:54.872932339Z 2026-04-25 12:35:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:59.873300481Z 2026-04-25 12:35:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:04.872666427Z 2026-04-25 12:36:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:09.873325651Z 2026-04-25 12:36:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:14.873414878Z 2026-04-25 12:36:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:19.873324574Z 2026-04-25 12:36:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:19.874068174Z 2026-04-25 12:36:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:24.873554172Z 2026-04-25 12:36:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:29.872799405Z 2026-04-25 12:36:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:34.872892956Z 2026-04-25 12:36:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:39.875197808Z 2026-04-25 12:36:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:44.873139916Z 2026-04-25 12:36:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:49.884848684Z 2026-04-25 12:36:49 [info] {"method":"GET","path":"/health","status":200,"duration":"10ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:49.885861823Z 2026-04-25 12:36:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:54.874315724Z 2026-04-25 12:36:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:59.875892941Z 2026-04-25 12:36:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:04.876974706Z 2026-04-25 12:37:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:09.873976756Z 2026-04-25 12:37:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:14.873041437Z 2026-04-25 12:37:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:17.943680511Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T12:37:18.029576565Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T12:37:19.872995409Z 2026-04-25 12:37:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:19.874060581Z 2026-04-25 12:37:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:24.874446693Z 2026-04-25 12:37:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:29.873869231Z 2026-04-25 12:37:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:34.872847211Z 2026-04-25 12:37:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:39.874217053Z 2026-04-25 12:37:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:44.873436361Z 2026-04-25 12:37:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:49.873008085Z 2026-04-25 12:37:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:49.876024208Z 2026-04-25 12:37:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:54.873235073Z 2026-04-25 12:37:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:59.873673176Z 2026-04-25 12:37:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:04.872587648Z 2026-04-25 12:38:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:09.873262689Z 2026-04-25 12:38:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:14.873529934Z 2026-04-25 12:38:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:19.873144746Z 2026-04-25 12:38:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:19.873884456Z 2026-04-25 12:38:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:24.874580462Z 2026-04-25 12:38:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:29.872797092Z 2026-04-25 12:38:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:34.874971939Z 2026-04-25 12:38:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:39.875997941Z 2026-04-25 12:38:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:44.873167434Z 2026-04-25 12:38:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:49.886449783Z 2026-04-25 12:38:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:49.887254407Z 2026-04-25 12:38:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:54.873384538Z 2026-04-25 12:38:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:59.874864144Z 2026-04-25 12:38:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:04.873869545Z 2026-04-25 12:39:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:09.87321813Z 2026-04-25 12:39:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:14.874227318Z 2026-04-25 12:39:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:19.875092608Z 2026-04-25 12:39:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:19.876060243Z 2026-04-25 12:39:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:24.873929491Z 2026-04-25 12:39:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:29.873192125Z 2026-04-25 12:39:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:34.873987312Z 2026-04-25 12:39:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:39.873301281Z 2026-04-25 12:39:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:44.874362199Z 2026-04-25 12:39:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:49.872651301Z 2026-04-25 12:39:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:49.873424783Z 2026-04-25 12:39:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:54.873379378Z 2026-04-25 12:39:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:59.87372162Z 2026-04-25 12:39:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:02.983984263Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T12:40:03.072233677Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T12:40:04.87281701Z 2026-04-25 12:40:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:09.87265106Z 2026-04-25 12:40:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:14.873153523Z 2026-04-25 12:40:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:19.873894928Z 2026-04-25 12:40:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:19.874613676Z 2026-04-25 12:40:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:21.749002949Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T12:40:23.057346819Z 
2026-04-25T12:40:23.05738027Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T12:40:23.05738551Z > node dist/index.js
2026-04-25T12:40:23.05738841Z 
2026-04-25T12:40:24.87312363Z 2026-04-25 12:40:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:28.143071398Z 2026-04-25 12:40:28 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T12:40:29.242997515Z 2026-04-25 12:40:29 [info] Firestore initialized successfully
2026-04-25T12:40:29.440678498Z 2026-04-25 12:40:29 [info] ✅ Server running on http://localhost:10000
2026-04-25T12:40:29.540104951Z 2026-04-25 12:40:29 [info] Environment: production
2026-04-25T12:40:29.540488681Z 2026-04-25 12:40:29 [info] API URL: http://localhost:5000
2026-04-25T12:40:29.540900432Z 2026-04-25 12:40:29 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T12:40:29.665580454Z 2026-04-25 12:40:29 [error] Route / not found
2026-04-25T12:40:29.665601764Z Error: Route / not found
2026-04-25T12:40:29.665608904Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:40:29.665616935Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:40:29.665624545Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:40:29.665630755Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:40:29.665635585Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:40:29.665640596Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:40:29.665645016Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:40:29.665649936Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:40:29.665654856Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:40:29.665659906Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:40:29.670567658Z 2026-04-25 12:40:29 [info] {"method":"HEAD","path":"/","status":404,"duration":"6ms","ip":"::1"}
2026-04-25T12:40:29.87336465Z 2026-04-25 12:40:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:34.873376934Z 2026-04-25 12:40:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:37.30183004Z 2026-04-25 12:40:37 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:40:37.303389622Z 2026-04-25 12:40:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:40:37.959152935Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T12:40:38.050096494Z 2026-04-25 12:40:38 [error] Route / not found
2026-04-25T12:40:38.050117744Z Error: Route / not found
2026-04-25T12:40:38.050123545Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:40:38.050128645Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:40:38.050133355Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:40:38.050138075Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:40:38.050142125Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:40:38.050146245Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:40:38.050150356Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:40:38.050154505Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:40:38.050174156Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:40:38.050177406Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:40:38.053358542Z 2026-04-25 12:40:38 [info] {"method":"GET","path":"/","status":404,"duration":"3ms","ip":"::1"}
2026-04-25T12:40:38.064078812Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:40:38.066120177Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:40:38.068437219Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:40:38.071501731Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T12:40:38.074969954Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:40:38.076874945Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:40:39.873815168Z 2026-04-25 12:40:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:42.304927634Z 2026-04-25 12:40:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:40:44.873773319Z 2026-04-25 12:40:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:47.304651936Z 2026-04-25 12:40:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
```
