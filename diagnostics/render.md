# Render Deploy Diagnostics

Run: 24950407340
Commit: 7c0a696c72e0b9bac2eaa396370a3fed86c29d7b
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mr8dpf9bms73857pi0

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
  "updatedAt": "2026-04-26T06:46:09.648309Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mr8dpf9bms73857pi0",
  "commit": {
    "id": "7c0a696c72e0b9bac2eaa396370a3fed86c29d7b",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:42583/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-26T06:43:54Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T06:44:08.098074Z",
  "updatedAt": "2026-04-26T06:46:09.647151Z",
  "startedAt": "2026-04-26T06:44:08.04388Z",
  "finishedAt": "2026-04-26T06:46:09.646955Z"
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
```
