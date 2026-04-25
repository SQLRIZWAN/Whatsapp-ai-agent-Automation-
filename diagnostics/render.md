# Render Deploy Diagnostics

Run: 24924828817
Commit: a492440f5b7bb1de441d63f7280c50363fd04ecc
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7m629jbc2fs7382j2rg

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
  "updatedAt": "2026-04-25T06:39:45.007023Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7m629jbc2fs7382j2rg",
  "commit": {
    "id": "a492440f5b7bb1de441d63f7280c50363fd04ecc",
    "message": "Multi-page UI shell + Baileys v7 with version fetch\n\nBackend:\n- Switch to @whiskeysockets/baileys v7 (the maintained fork — old 'baileys' v6.4\n  was getting 405 methodNotAllowed because its bundled WA web version is stale)\n- fetchLatestBaileysVersion() picks the current WA version every time, so we\n  don't fall behind WhatsApp's protocol bumps\n- Backoff reconnects: 2^attempt seconds, max 8 attempts, then stop hammering\n- On a 405 first crash, clear stored creds once to recover from corrupt state\n- Surface attempts + lastError in the status snapshot and Socket.IO emits\n- Browser fingerprint changed to ubuntu/Chrome (more reliable than macOS one)\n- Tweaked timeouts/keepalive for Render free-tier latency\n\nFrontend:\n- New AppShell layout with sidebar nav (Dashboard, Messages, Calls, Settings),\n  brand block, user info, sign-out — responsive collapse on mobile\n- App.tsx: nested route under <AppShell /> so all authenticated pages share\n  the multi-tab layout via <Outlet />\n- New MessagesPage: Firestore message history (incoming + AI replies),\n  refresh button, per-row meta + body\n- New CallsPage: Firestore call history table with from/type/status/forwarded\n- Dashboard: dropped redundant header (now in shell), added attempt counter +\n  last-error display, added 'Restart connection' button when disconnected,\n  fallback 4s polling if Socket.IO is blocked, exposes attempts/lastError\n- Settings: removed redundant header/sign-out (now in shell)",
    "createdAt": "2026-04-25T06:37:10Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T06:37:26.680268Z",
  "updatedAt": "2026-04-25T06:39:45.005757Z",
  "startedAt": "2026-04-25T06:37:26.624922Z",
  "finishedAt": "2026-04-25T06:39:45.005543Z"
}
```

## Build logs (last 4h)
```
2026-04-25T06:37:32.038597671Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T06:37:32.782051442Z [34m[1m==>(B[m [1mChecking out commit a492440f5b7bb1de441d63f7280c50363fd04ecc in branch main(B[m
2026-04-25T06:37:34.056310096Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T06:37:34.081851294Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T06:37:36.252697597Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T06:39:01.930906387Z 
2026-04-25T06:39:01.930935308Z added 590 packages, and audited 591 packages in 1m
2026-04-25T06:39:01.930947408Z 
2026-04-25T06:39:01.93102397Z 113 packages are looking for funding
2026-04-25T06:39:01.931089121Z   run `npm fund` for details
2026-04-25T06:39:02.078427428Z 
2026-04-25T06:39:02.078456489Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T06:39:02.078461219Z 
2026-04-25T06:39:02.078465499Z To address issues that do not require attention, run:
2026-04-25T06:39:02.078469459Z   npm audit fix
2026-04-25T06:39:02.07847316Z 
2026-04-25T06:39:02.07847706Z To address all issues (including breaking changes), run:
2026-04-25T06:39:02.078481669Z   npm audit fix --force
2026-04-25T06:39:02.07848542Z 
2026-04-25T06:39:02.07848985Z Run `npm audit` for details.
2026-04-25T06:39:02.302572835Z 
2026-04-25T06:39:02.302599906Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T06:39:02.302606015Z > tsc && tsc-alias
2026-04-25T06:39:02.302609976Z 
2026-04-25T06:39:05.371222017Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T06:39:11.889892922Z [34;1m==>[0;22m [1mUploaded in 3.7s. Compression took 2.8s[22m
2026-04-25T06:39:11.918093372Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-25T06:39:13.946226252Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T06:39:14.026344543Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T06:39:36.482697294Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T06:39:38.085944495Z 
2026-04-25T06:39:38.085972157Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T06:39:38.085976967Z > node dist/index.js
2026-04-25T06:39:38.085980137Z 
2026-04-25T06:39:42.774332341Z 2026-04-25 06:39:42 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T06:39:43.682915956Z 2026-04-25 06:39:43 [info] Firestore initialized successfully
2026-04-25T06:39:43.971140498Z 2026-04-25 06:39:43 [info] ✅ Server running on http://localhost:10000
2026-04-25T06:39:43.971302668Z 2026-04-25 06:39:43 [info] Environment: production
2026-04-25T06:39:43.971526651Z 2026-04-25 06:39:43 [info] API URL: http://localhost:5000
2026-04-25T06:39:43.971743484Z 2026-04-25 06:39:43 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T06:39:44.329964654Z 2026-04-25 06:39:44 [error] Route / not found
2026-04-25T06:39:44.329988986Z Error: Route / not found
2026-04-25T06:39:44.329993936Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T06:39:44.329997676Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T06:39:44.330003697Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T06:39:44.330007537Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T06:39:44.330010907Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T06:39:44.330014007Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T06:39:44.330016957Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T06:39:44.330020207Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T06:39:44.330023288Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T06:39:44.330026408Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T06:39:44.335631151Z 2026-04-25 06:39:44 [info] {"method":"HEAD","path":"/","status":404,"duration":"6ms","ip":"::1"}
2026-04-25T06:39:44.513667687Z 2026-04-25 06:39:44 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:39:44.515846306Z 2026-04-25 06:39:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:39:45.171146663Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T06:39:45.203871799Z 2026-04-25 06:39:45 [error] Route / not found
2026-04-25T06:39:45.20389526Z Error: Route / not found
2026-04-25T06:39:45.203900601Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T06:39:45.203904361Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T06:39:45.203907951Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T06:39:45.203912072Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T06:39:45.203915112Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T06:39:45.203918392Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T06:39:45.203921292Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T06:39:45.203924332Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T06:39:45.203944013Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T06:39:45.203947354Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T06:39:45.204660336Z 2026-04-25 06:39:45 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T06:39:45.244507373Z [0;32m[1m==> [0m[1m[0m
2026-04-25T06:39:45.246765694Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T06:39:45.248980933Z [0;32m[1m==> [0m[1m[0m
2026-04-25T06:39:45.250875595Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T06:39:45.252878329Z [0;32m[1m==> [0m[1m[0m
2026-04-25T06:39:45.254753009Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T06:39:49.516244108Z 2026-04-25 06:39:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
```
