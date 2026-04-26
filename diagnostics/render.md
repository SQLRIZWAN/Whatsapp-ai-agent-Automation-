# Render Deploy Diagnostics

Run: 24950707563
Commit: b5a38f82ffed601bec12b62f32dbbce76b2fc9ba
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mrggrrjlhs73a5dckg

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
  "updatedAt": "2026-04-26T07:03:46.148958Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mrggrrjlhs73a5dckg",
  "commit": {
    "id": "b5a38f82ffed601bec12b62f32dbbce76b2fc9ba",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:40259/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-26T07:00:24Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T07:01:23.684593Z",
  "updatedAt": "2026-04-26T07:03:46.1479Z",
  "startedAt": "2026-04-26T07:01:23.629699Z",
  "finishedAt": "2026-04-26T07:03:46.147659Z"
}
```

## Build logs (last 4h)
```
2026-04-26T06:44:11.655557944Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-26T06:44:12.365299587Z [34m[1m==>(B[m [1mChecking out commit 7c0a696c72e0b9bac2eaa396370a3fed86c29d7b in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-26T06:44:13.715196457Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-26T06:44:13.739939372Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-26T06:44:15.655084636Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-26T06:45:36.421780745Z 
2026-04-26T06:45:36.421810316Z added 590 packages, and audited 591 packages in 1m
2026-04-26T06:45:36.421830117Z 
2026-04-26T06:45:36.421889208Z 113 packages are looking for funding
2026-04-26T06:45:36.421978511Z   run `npm fund` for details
2026-04-26T06:45:36.568464222Z 
2026-04-26T06:45:36.568491303Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-26T06:45:36.568495933Z 
2026-04-26T06:45:36.568500213Z To address issues that do not require attention, run:
2026-04-26T06:45:36.568504243Z   npm audit fix
2026-04-26T06:45:36.568508083Z 
2026-04-26T06:45:36.568512063Z To address all issues (including breaking changes), run:
2026-04-26T06:45:36.568516383Z   npm audit fix --force
2026-04-26T06:45:36.568520204Z 
2026-04-26T06:45:36.568524764Z Run `npm audit` for details.
2026-04-26T06:45:36.779711183Z 
2026-04-26T06:45:36.779733013Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-26T06:45:36.779737094Z > tsc && tsc-alias
2026-04-26T06:45:36.779740274Z 
2026-04-26T06:45:39.887421133Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-26T06:45:45.975450713Z [34;1m==>[0;22m [1mUploaded in 3.7s. Compression took 2.4s[22m
2026-04-26T06:45:46.007058418Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-26T07:01:27.098142177Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-26T07:01:27.783419966Z [34m[1m==>(B[m [1mChecking out commit b5a38f82ffed601bec12b62f32dbbce76b2fc9ba in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-26T07:01:35.009714222Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-26T07:01:35.036066406Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-26T07:01:37.636607822Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-26T07:03:03.085956617Z 
2026-04-26T07:03:03.085990948Z added 590 packages, and audited 591 packages in 1m
2026-04-26T07:03:03.086005428Z 
2026-04-26T07:03:03.086108001Z 113 packages are looking for funding
2026-04-26T07:03:03.086171353Z   run `npm fund` for details
2026-04-26T07:03:03.23447066Z 
2026-04-26T07:03:03.234492561Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-26T07:03:03.234497251Z 
2026-04-26T07:03:03.234502881Z To address issues that do not require attention, run:
2026-04-26T07:03:03.234509671Z   npm audit fix
2026-04-26T07:03:03.234515471Z 
2026-04-26T07:03:03.234522011Z To address all issues (including breaking changes), run:
2026-04-26T07:03:03.234528602Z   npm audit fix --force
2026-04-26T07:03:03.234549832Z 
2026-04-26T07:03:03.234555032Z Run `npm audit` for details.
2026-04-26T07:03:03.454786702Z 
2026-04-26T07:03:03.454842833Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-26T07:03:03.454851994Z > tsc && tsc-alias
2026-04-26T07:03:03.454858484Z 
2026-04-26T07:03:06.509293462Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-26T07:03:12.599611292Z [34;1m==>[0;22m [1mUploaded in 3.6s. Compression took 2.5s[22m
2026-04-26T07:03:12.649326415Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-26T06:45:48.493779646Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T06:45:48.557723716Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T06:46:01.32646096Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T06:46:02.43597622Z 
2026-04-26T06:46:02.436006453Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T06:46:02.436012713Z > node dist/index.js
2026-04-26T06:46:02.436016483Z 
2026-04-26T06:46:06.932558138Z 2026-04-26 06:46:06 [info] [ai] Gemini ready. Primary: gemini-2.5-flash
2026-04-26T06:46:08.329978288Z 2026-04-26 06:46:08 [info] Firestore initialized successfully
2026-04-26T06:46:08.431770233Z 2026-04-26 06:46:08 [info] ✅ Server running on http://localhost:10000
2026-04-26T06:46:08.519720525Z 2026-04-26 06:46:08 [info] Environment: production
2026-04-26T06:46:08.5201893Z 2026-04-26 06:46:08 [info] API URL: http://localhost:5000
2026-04-26T06:46:08.52045795Z 2026-04-26 06:46:08 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T06:46:08.723759118Z 2026-04-26 06:46:08 [warn] [ai] self-test — gemini-2.5-flash failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-26T06:46:08.822221254Z 2026-04-26 06:46:08 [warn] [ai] self-test — gemini-2.5-flash-preview-05-20 failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-26T06:46:08.922481275Z 2026-04-26 06:46:08 [warn] [ai] self-test — gemini-2.0-flash failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-26T06:46:09.1226606Z 2026-04-26 06:46:09 [info] {"method":"GET","path":"/health","status":200,"duration":"98ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:09.220874428Z 2026-04-26 06:46:09 [info] {"method":"GET","path":"/health","status":200,"duration":"95ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:09.222449465Z 2026-04-26 06:46:09 [warn] [ai] self-test — gemini-2.0-flash-lite failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-26T06:46:09.322178946Z 2026-04-26 06:46:09 [error] Route / not found
2026-04-26T06:46:09.322197257Z Error: Route / not found
2026-04-26T06:46:09.322201498Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T06:46:09.322205438Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T06:46:09.322220489Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T06:46:09.32222555Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T06:46:09.32222919Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T06:46:09.32223294Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T06:46:09.32223635Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T06:46:09.322239631Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T06:46:09.322243211Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T06:46:09.322246351Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T06:46:09.323110055Z 2026-04-26 06:46:09 [info] {"method":"HEAD","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T06:46:09.379788174Z 2026-04-26 06:46:09 [warn] [ai] self-test — gemini-1.5-flash-latest failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-26T06:46:09.380046853Z 2026-04-26 06:46:09 [error] [ai] ALL models failed for self-test. Last: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-26T06:46:09.380229407Z 2026-04-26 06:46:09 [error] [ai] ❌ Self-test FAILED: AI unavailable (self-test): [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-26T06:46:09.864078161Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T06:46:09.936888815Z [0;32m[1m==> [0m[1m[0m
2026-04-26T06:46:09.942769433Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T06:46:09.946674805Z [0;32m[1m==> [0m[1m[0m
2026-04-26T06:46:09.947772771Z 2026-04-26 06:46:09 [error] Route / not found
2026-04-26T06:46:09.947796673Z Error: Route / not found
2026-04-26T06:46:09.947801673Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T06:46:09.947805733Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T06:46:09.947809894Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T06:46:09.947812964Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T06:46:09.947815034Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T06:46:09.947817094Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T06:46:09.947827345Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T06:46:09.947829465Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T06:46:09.947831595Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T06:46:09.947833626Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T06:46:09.948574321Z 2026-04-26 06:46:09 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T06:46:09.95073952Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T06:46:09.955162825Z [0;32m[1m==> [0m[1m[0m
2026-04-26T06:46:09.961248818Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T06:46:14.124080613Z 2026-04-26 06:46:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:18.961570926Z 2026-04-26 06:46:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:19.124800895Z 2026-04-26 06:46:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:24.124875208Z 2026-04-26 06:46:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:29.125067791Z 2026-04-26 06:46:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:34.124215865Z 2026-04-26 06:46:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:39.123824255Z 2026-04-26 06:46:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:44.124956818Z 2026-04-26 06:46:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:48.960276641Z 2026-04-26 06:46:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:49.12472585Z 2026-04-26 06:46:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:54.124671026Z 2026-04-26 06:46:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:46:59.124333141Z 2026-04-26 06:46:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:04.124334481Z 2026-04-26 06:47:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:09.125500348Z 2026-04-26 06:47:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:14.124363894Z 2026-04-26 06:47:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:18.960907299Z 2026-04-26 06:47:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:19.124638465Z 2026-04-26 06:47:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:24.124363886Z 2026-04-26 06:47:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:29.124433122Z 2026-04-26 06:47:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:34.12692732Z 2026-04-26 06:47:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:39.124109391Z 2026-04-26 06:47:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:44.123740696Z 2026-04-26 06:47:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:48.960123311Z 2026-04-26 06:47:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:49.124361054Z 2026-04-26 06:47:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:54.123894722Z 2026-04-26 06:47:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:47:59.124515051Z 2026-04-26 06:47:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:04.124203451Z 2026-04-26 06:48:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:09.125446118Z 2026-04-26 06:48:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:14.12422186Z 2026-04-26 06:48:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:18.960212937Z 2026-04-26 06:48:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:19.124047791Z 2026-04-26 06:48:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:24.124561004Z 2026-04-26 06:48:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:29.123573955Z 2026-04-26 06:48:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:34.124206677Z 2026-04-26 06:48:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:39.123969894Z 2026-04-26 06:48:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:44.124412863Z 2026-04-26 06:48:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:48.960331116Z 2026-04-26 06:48:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:49.123447686Z 2026-04-26 06:48:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:54.123988132Z 2026-04-26 06:48:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:48:59.123578898Z 2026-04-26 06:48:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:04.123801291Z 2026-04-26 06:49:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:09.124156025Z 2026-04-26 06:49:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:14.124397009Z 2026-04-26 06:49:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:18.960550332Z 2026-04-26 06:49:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:19.124424168Z 2026-04-26 06:49:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:24.124180727Z 2026-04-26 06:49:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:29.124001072Z 2026-04-26 06:49:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:34.140944484Z 2026-04-26 06:49:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:39.125159484Z 2026-04-26 06:49:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:44.124651055Z 2026-04-26 06:49:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:48.96095767Z 2026-04-26 06:49:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:49.125063004Z 2026-04-26 06:49:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:54.123910767Z 2026-04-26 06:49:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:49:59.1246349Z 2026-04-26 06:49:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:04.124755199Z 2026-04-26 06:50:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:09.124184646Z 2026-04-26 06:50:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:14.124200157Z 2026-04-26 06:50:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:18.961132001Z 2026-04-26 06:50:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:19.124363029Z 2026-04-26 06:50:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:24.123530277Z 2026-04-26 06:50:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:29.124107341Z 2026-04-26 06:50:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:34.124948574Z 2026-04-26 06:50:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:39.124290027Z 2026-04-26 06:50:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:44.124263116Z 2026-04-26 06:50:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:48.959697829Z 2026-04-26 06:50:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:49.124341114Z 2026-04-26 06:50:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:54.123966258Z 2026-04-26 06:50:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:50:59.123633695Z 2026-04-26 06:50:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:04.12393486Z 2026-04-26 06:51:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:09.124084304Z 2026-04-26 06:51:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:14.126408331Z 2026-04-26 06:51:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:15.583100084Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T06:51:15.656709005Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T06:51:18.959741348Z 2026-04-26 06:51:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:19.1236833Z 2026-04-26 06:51:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:24.124073113Z 2026-04-26 06:51:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:29.123586831Z 2026-04-26 06:51:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:34.124168138Z 2026-04-26 06:51:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:39.12560763Z 2026-04-26 06:51:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:44.124554015Z 2026-04-26 06:51:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:48.95970795Z 2026-04-26 06:51:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:49.123688145Z 2026-04-26 06:51:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:54.123910447Z 2026-04-26 06:51:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:51:59.123920493Z 2026-04-26 06:51:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:04.123889857Z 2026-04-26 06:52:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:09.123746492Z 2026-04-26 06:52:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:14.123901069Z 2026-04-26 06:52:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:18.960417027Z 2026-04-26 06:52:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:19.124195377Z 2026-04-26 06:52:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:24.124121429Z 2026-04-26 06:52:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:29.124204852Z 2026-04-26 06:52:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:34.124103662Z 2026-04-26 06:52:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:39.124523451Z 2026-04-26 06:52:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:44.125567656Z 2026-04-26 06:52:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:48.960039204Z 2026-04-26 06:52:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:49.124668637Z 2026-04-26 06:52:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:54.12379601Z 2026-04-26 06:52:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:52:59.124120392Z 2026-04-26 06:52:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:04.124589546Z 2026-04-26 06:53:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:09.123680976Z 2026-04-26 06:53:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:14.124365716Z 2026-04-26 06:53:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:18.959384336Z 2026-04-26 06:53:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:19.123936385Z 2026-04-26 06:53:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:24.124249437Z 2026-04-26 06:53:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:29.124077874Z 2026-04-26 06:53:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:34.124068954Z 2026-04-26 06:53:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:39.123621231Z 2026-04-26 06:53:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:44.124931199Z 2026-04-26 06:53:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:48.959908237Z 2026-04-26 06:53:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:49.124161692Z 2026-04-26 06:53:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:54.124419443Z 2026-04-26 06:53:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:53:59.124478858Z 2026-04-26 06:53:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:04.124143564Z 2026-04-26 06:54:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:09.12460405Z 2026-04-26 06:54:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:14.124387656Z 2026-04-26 06:54:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:18.960843276Z 2026-04-26 06:54:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:19.128208274Z 2026-04-26 06:54:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:24.124323036Z 2026-04-26 06:54:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:29.128970476Z 2026-04-26 06:54:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:34.123502761Z 2026-04-26 06:54:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:39.124248519Z 2026-04-26 06:54:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:44.123700232Z 2026-04-26 06:54:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:48.962314844Z 2026-04-26 06:54:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:49.124101435Z 2026-04-26 06:54:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:54.124083708Z 2026-04-26 06:54:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:54:59.124087362Z 2026-04-26 06:54:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:04.123934225Z 2026-04-26 06:55:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:09.124404645Z 2026-04-26 06:55:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:14.124292041Z 2026-04-26 06:55:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:18.960354514Z 2026-04-26 06:55:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:19.127902685Z 2026-04-26 06:55:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:24.124971042Z 2026-04-26 06:55:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:29.124621662Z 2026-04-26 06:55:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:34.124015573Z 2026-04-26 06:55:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:39.124129008Z 2026-04-26 06:55:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:44.123905898Z 2026-04-26 06:55:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:48.960109022Z 2026-04-26 06:55:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:49.124270451Z 2026-04-26 06:55:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:54.126399946Z 2026-04-26 06:55:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:55:59.124471319Z 2026-04-26 06:55:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:04.124286653Z 2026-04-26 06:56:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:09.126935888Z 2026-04-26 06:56:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:14.12445389Z 2026-04-26 06:56:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:18.960616303Z 2026-04-26 06:56:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:19.12395035Z 2026-04-26 06:56:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:24.124199167Z 2026-04-26 06:56:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:29.124225678Z 2026-04-26 06:56:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:34.127318577Z 2026-04-26 06:56:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:39.124247757Z 2026-04-26 06:56:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:44.12389366Z 2026-04-26 06:56:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:48.960564372Z 2026-04-26 06:56:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:49.125491779Z 2026-04-26 06:56:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:54.124725501Z 2026-04-26 06:56:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:56:59.123946363Z 2026-04-26 06:56:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:04.126975769Z 2026-04-26 06:57:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:09.124049931Z 2026-04-26 06:57:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:14.128111045Z 2026-04-26 06:57:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:18.96038487Z 2026-04-26 06:57:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:19.123798673Z 2026-04-26 06:57:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:24.123386564Z 2026-04-26 06:57:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:29.124134481Z 2026-04-26 06:57:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:34.124067697Z 2026-04-26 06:57:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:39.12421902Z 2026-04-26 06:57:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:44.123890157Z 2026-04-26 06:57:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:48.963823776Z 2026-04-26 06:57:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:49.126061822Z 2026-04-26 06:57:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:54.124274041Z 2026-04-26 06:57:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:57:59.123524017Z 2026-04-26 06:57:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:04.123762008Z 2026-04-26 06:58:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:09.123489081Z 2026-04-26 06:58:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:14.12438193Z 2026-04-26 06:58:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:18.959943784Z 2026-04-26 06:58:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:19.12406224Z 2026-04-26 06:58:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:24.124306192Z 2026-04-26 06:58:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:29.124360569Z 2026-04-26 06:58:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:34.124090103Z 2026-04-26 06:58:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:39.126949541Z 2026-04-26 06:58:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:44.124312079Z 2026-04-26 06:58:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:48.960558445Z 2026-04-26 06:58:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:49.123898213Z 2026-04-26 06:58:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:54.124395145Z 2026-04-26 06:58:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:58:59.124320125Z 2026-04-26 06:58:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:04.124060301Z 2026-04-26 06:59:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:09.12450586Z 2026-04-26 06:59:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:14.123701396Z 2026-04-26 06:59:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:18.959758699Z 2026-04-26 06:59:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:19.123684021Z 2026-04-26 06:59:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:24.124301354Z 2026-04-26 06:59:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:29.123935293Z 2026-04-26 06:59:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:34.124959816Z 2026-04-26 06:59:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:39.123484864Z 2026-04-26 06:59:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:44.123819666Z 2026-04-26 06:59:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:48.960306013Z 2026-04-26 06:59:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:49.125256141Z 2026-04-26 06:59:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:54.12621616Z 2026-04-26 06:59:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T06:59:59.125254996Z 2026-04-26 06:59:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:04.124318324Z 2026-04-26 07:00:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:09.12387423Z 2026-04-26 07:00:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:14.124337013Z 2026-04-26 07:00:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:18.960452713Z 2026-04-26 07:00:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:19.124160589Z 2026-04-26 07:00:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:24.130978987Z 2026-04-26 07:00:24 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:29.124441198Z 2026-04-26 07:00:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:34.124031137Z 2026-04-26 07:00:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:39.123595534Z 2026-04-26 07:00:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:44.123780988Z 2026-04-26 07:00:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:48.959817953Z 2026-04-26 07:00:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:49.12514938Z 2026-04-26 07:00:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:54.124381363Z 2026-04-26 07:00:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:00:59.124284797Z 2026-04-26 07:00:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:04.124848999Z 2026-04-26 07:01:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:09.124678638Z 2026-04-26 07:01:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:14.123504122Z 2026-04-26 07:01:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:19.124246119Z 2026-04-26 07:01:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:24.124343367Z 2026-04-26 07:01:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:29.124566336Z 2026-04-26 07:01:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:34.123594546Z 2026-04-26 07:01:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:39.123934093Z 2026-04-26 07:01:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:44.124293193Z 2026-04-26 07:01:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:49.124008164Z 2026-04-26 07:01:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:54.124269197Z 2026-04-26 07:01:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:01:59.123539317Z 2026-04-26 07:01:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:02:04.123697212Z 2026-04-26 07:02:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:02:09.124070852Z 2026-04-26 07:02:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.234"}
2026-04-26T07:03:15.29937265Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T07:03:15.387624819Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T07:03:28.623365632Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T07:03:30.310179574Z 
2026-04-26T07:03:30.310216625Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T07:03:30.310221875Z > node dist/index.js
2026-04-26T07:03:30.310224166Z 
2026-04-26T07:03:34.702721279Z 2026-04-26 07:03:34 [info] [ai] Gemini ready. Primary: gemini-2.5-flash
2026-04-26T07:03:35.798048985Z 2026-04-26 07:03:35 [info] Firestore initialized successfully
2026-04-26T07:03:36.202009753Z 2026-04-26 07:03:36 [info] ✅ Server running on http://localhost:10000
2026-04-26T07:03:36.202217937Z 2026-04-26 07:03:36 [info] Environment: production
2026-04-26T07:03:36.202418502Z 2026-04-26 07:03:36 [info] API URL: http://localhost:5000
2026-04-26T07:03:36.202594525Z 2026-04-26 07:03:36 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T07:03:36.405822665Z 2026-04-26 07:03:36 [error] Route / not found
2026-04-26T07:03:36.405841046Z Error: Route / not found
2026-04-26T07:03:36.405844586Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T07:03:36.405847266Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:03:36.405851666Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:03:36.405856906Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:03:36.405859246Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T07:03:36.405861496Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T07:03:36.405863566Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T07:03:36.405865766Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:03:36.405868456Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:03:36.405871156Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:03:36.496932503Z 2026-04-26 07:03:36 [info] {"method":"HEAD","path":"/","status":404,"duration":"92ms","ip":"::1"}
2026-04-26T07:03:37.395741111Z 2026-04-26 07:03:37 [info] [ai] self-test OK via gemini-2.5-flash
2026-04-26T07:03:37.395953746Z 2026-04-26 07:03:37 [info] [ai] ✅ Self-test PASSED — working model: gemini-2.5-flash
2026-04-26T07:03:45.683063521Z 2026-04-26 07:03:45 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:03:45.684657195Z 2026-04-26 07:03:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:03:46.251133116Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T07:03:46.320041999Z 2026-04-26 07:03:46 [error] Route / not found
2026-04-26T07:03:46.320058659Z Error: Route / not found
2026-04-26T07:03:46.320061959Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T07:03:46.320064399Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:03:46.320069299Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:03:46.32007218Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:03:46.32007538Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T07:03:46.32007842Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T07:03:46.32008095Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T07:03:46.32009833Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:03:46.3201017Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:03:46.32010479Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:03:46.32104735Z 2026-04-26 07:03:46 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T07:03:46.34777523Z [0;32m[1m==> [0m[1m[0m
2026-04-26T07:03:46.353811119Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T07:03:46.357761331Z [0;32m[1m==> [0m[1m[0m
2026-04-26T07:03:46.361097477Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T07:03:46.364757272Z [0;32m[1m==> [0m[1m[0m
2026-04-26T07:03:46.368772505Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
```
