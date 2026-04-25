# Render Deploy Diagnostics

Run: 24939353843
Commit: 99ca98012627e3b21a7b5986475011d9440496c9
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mhp1navr4c73f3n61g

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
  "updatedAt": "2026-04-25T19:59:31.149295Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mhp1navr4c73f3n61g",
  "commit": {
    "id": "99ca98012627e3b21a7b5986475011d9440496c9",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:46663/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-25T19:56:44Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T19:56:55.030205Z",
  "updatedAt": "2026-04-25T19:59:31.148171Z",
  "startedAt": "2026-04-25T19:56:54.989626Z",
  "finishedAt": "2026-04-25T19:59:31.147975Z"
}
```

## Build logs (last 4h)
```
2026-04-25T19:20:54.972375592Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T19:20:55.687758277Z [34m[1m==>(B[m [1mChecking out commit 800feb05ac6e0a378cfa504eea8d09199ada526c in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T19:20:57.020048322Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T19:20:57.044907258Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T19:20:59.028714766Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T19:22:22.481408823Z 
2026-04-25T19:22:22.481437724Z added 590 packages, and audited 591 packages in 1m
2026-04-25T19:22:22.481450254Z 
2026-04-25T19:22:22.481550046Z 113 packages are looking for funding
2026-04-25T19:22:22.481599067Z   run `npm fund` for details
2026-04-25T19:22:22.626947139Z 
2026-04-25T19:22:22.62697164Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T19:22:22.62697613Z 
2026-04-25T19:22:22.6269804Z To address issues that do not require attention, run:
2026-04-25T19:22:22.62698444Z   npm audit fix
2026-04-25T19:22:22.6269885Z 
2026-04-25T19:22:22.62699248Z To address all issues (including breaking changes), run:
2026-04-25T19:22:22.62699688Z   npm audit fix --force
2026-04-25T19:22:22.62700064Z 
2026-04-25T19:22:22.62700509Z Run `npm audit` for details.
2026-04-25T19:22:22.838841006Z 
2026-04-25T19:22:22.838871156Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T19:22:22.838878517Z > tsc && tsc-alias
2026-04-25T19:22:22.838884326Z 
2026-04-25T19:22:26.296015279Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T19:22:33.165571358Z [34;1m==>[0;22m [1mUploaded in 3.9s. Compression took 2.9s[22m
2026-04-25T19:22:33.197330506Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T19:25:40.421174838Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T19:25:41.181339889Z [34m[1m==>(B[m [1mChecking out commit 6733aeff3553fad8dce3a10f91639fe986484cb9 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T19:25:42.459659753Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T19:25:42.484294897Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T19:25:44.39191312Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T19:27:13.366740666Z 
2026-04-25T19:27:13.366772297Z added 590 packages, and audited 591 packages in 1m
2026-04-25T19:27:13.366794208Z 
2026-04-25T19:27:13.36687556Z 113 packages are looking for funding
2026-04-25T19:27:13.366900031Z   run `npm fund` for details
2026-04-25T19:27:13.51920866Z 
2026-04-25T19:27:13.51922482Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T19:27:13.51922877Z 
2026-04-25T19:27:13.519232181Z To address issues that do not require attention, run:
2026-04-25T19:27:13.519236871Z   npm audit fix
2026-04-25T19:27:13.519241781Z 
2026-04-25T19:27:13.519246861Z To address all issues (including breaking changes), run:
2026-04-25T19:27:13.519252111Z   npm audit fix --force
2026-04-25T19:27:13.519256831Z 
2026-04-25T19:27:13.519262411Z Run `npm audit` for details.
2026-04-25T19:27:13.736725449Z 
2026-04-25T19:27:13.73675144Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T19:27:13.73675729Z > tsc && tsc-alias
2026-04-25T19:27:13.73676131Z 
2026-04-25T19:27:41.73913499Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T19:27:47.970036232Z [34;1m==>[0;22m [1mUploaded in 3.6s. Compression took 2.7s[22m
2026-04-25T19:27:48.002328669Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T19:37:44.183634801Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T19:37:44.880290876Z [34m[1m==>(B[m [1mChecking out commit 9558d142f6cadffc7a4db23559b92095079245cb in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T19:37:46.223843918Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T19:37:46.247994505Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T19:37:48.182884251Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T19:39:10.140452904Z 
2026-04-25T19:39:10.140478424Z added 590 packages, and audited 591 packages in 1m
2026-04-25T19:39:10.140487894Z 
2026-04-25T19:39:10.140580077Z 113 packages are looking for funding
2026-04-25T19:39:10.140635428Z   run `npm fund` for details
2026-04-25T19:39:10.288002888Z 
2026-04-25T19:39:10.288025508Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T19:39:10.288030858Z 
2026-04-25T19:39:10.288036478Z To address issues that do not require attention, run:
2026-04-25T19:39:10.288043229Z   npm audit fix
2026-04-25T19:39:10.288048799Z 
2026-04-25T19:39:10.288054939Z To address all issues (including breaking changes), run:
2026-04-25T19:39:10.288061319Z   npm audit fix --force
2026-04-25T19:39:10.288067329Z 
2026-04-25T19:39:10.288074049Z Run `npm audit` for details.
2026-04-25T19:39:10.505859103Z 
2026-04-25T19:39:10.505880964Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T19:39:10.505886254Z > tsc && tsc-alias
2026-04-25T19:39:10.505890224Z 
2026-04-25T19:39:13.430094953Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T19:39:19.365255282Z [34;1m==>[0;22m [1mUploaded in 3.6s. Compression took 2.3s[22m
2026-04-25T19:39:19.397336792Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T19:44:46.858694913Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T19:44:52.506380531Z [34m[1m==>(B[m [1mChecking out commit 22384c474322ad338523d6f74920b82d596cac4e in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T19:44:53.885655256Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T19:44:53.910122981Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T19:44:55.841196528Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T19:46:22.187285191Z 
2026-04-25T19:46:22.187311482Z added 590 packages, and audited 591 packages in 1m
2026-04-25T19:46:22.187323472Z 
2026-04-25T19:46:22.187417175Z 113 packages are looking for funding
2026-04-25T19:46:22.187484717Z   run `npm fund` for details
2026-04-25T19:46:22.335413099Z 
2026-04-25T19:46:22.335434749Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T19:46:22.335440119Z 
2026-04-25T19:46:22.335444649Z To address issues that do not require attention, run:
2026-04-25T19:46:22.33544876Z   npm audit fix
2026-04-25T19:46:22.33546936Z 
2026-04-25T19:46:22.33547599Z To address all issues (including breaking changes), run:
2026-04-25T19:46:22.33548038Z   npm audit fix --force
2026-04-25T19:46:22.335484181Z 
2026-04-25T19:46:22.33548821Z Run `npm audit` for details.
2026-04-25T19:46:22.561978062Z 
2026-04-25T19:46:22.561998663Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T19:46:22.562003263Z > tsc && tsc-alias
2026-04-25T19:46:22.562006593Z 
2026-04-25T19:46:26.06665235Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T19:46:32.007378174Z [34;1m==>[0;22m [1mUploaded in 3.5s. Compression took 2.4s[22m
2026-04-25T19:46:32.038490836Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T19:49:13.897313797Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T19:49:14.568298031Z [34m[1m==>(B[m [1mChecking out commit 2ef73770107f528233516c619f5bebf1186aa40d in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T19:49:24.023004143Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T19:49:24.048023764Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T19:49:26.055546118Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T19:50:47.514608958Z 
2026-04-25T19:50:47.514638288Z added 590 packages, and audited 591 packages in 1m
2026-04-25T19:50:47.514651199Z 
2026-04-25T19:50:47.51471707Z 113 packages are looking for funding
2026-04-25T19:50:47.514772922Z   run `npm fund` for details
2026-04-25T19:50:47.655536657Z 
2026-04-25T19:50:47.655563528Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T19:50:47.655568268Z 
2026-04-25T19:50:47.655572848Z To address issues that do not require attention, run:
2026-04-25T19:50:47.655576889Z   npm audit fix
2026-04-25T19:50:47.655580598Z 
2026-04-25T19:50:47.655584549Z To address all issues (including breaking changes), run:
2026-04-25T19:50:47.655588979Z   npm audit fix --force
2026-04-25T19:50:47.655592659Z 
2026-04-25T19:50:47.655596919Z Run `npm audit` for details.
2026-04-25T19:50:47.850509421Z 
2026-04-25T19:50:47.850528372Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T19:50:47.850533232Z > tsc && tsc-alias
2026-04-25T19:50:47.850537132Z 
2026-04-25T19:50:51.123490991Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T19:50:57.809573697Z [34;1m==>[0;22m [1mUploaded in 4.3s. Compression took 2.3s[22m
2026-04-25T19:50:57.84117444Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T19:57:16.250536736Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T19:57:17.19277265Z [34m[1m==>(B[m [1mChecking out commit 99ca98012627e3b21a7b5986475011d9440496c9 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T19:57:18.989021275Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T19:57:19.022659662Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T19:57:21.019078101Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T19:58:44.685483065Z 
2026-04-25T19:58:44.685511226Z added 590 packages, and audited 591 packages in 1m
2026-04-25T19:58:44.685523846Z 
2026-04-25T19:58:44.685601958Z 113 packages are looking for funding
2026-04-25T19:58:44.6856783Z   run `npm fund` for details
2026-04-25T19:58:44.851888539Z 
2026-04-25T19:58:44.85191783Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T19:58:44.85192211Z 
2026-04-25T19:58:44.85192543Z To address issues that do not require attention, run:
2026-04-25T19:58:44.85192858Z   npm audit fix
2026-04-25T19:58:44.8519315Z 
2026-04-25T19:58:44.85193467Z To address all issues (including breaking changes), run:
2026-04-25T19:58:44.85193865Z   npm audit fix --force
2026-04-25T19:58:44.85194166Z 
2026-04-25T19:58:44.8519452Z Run `npm audit` for details.
2026-04-25T19:58:45.081978945Z 
2026-04-25T19:58:45.082003816Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T19:58:45.082009836Z > tsc && tsc-alias
2026-04-25T19:58:45.082014746Z 
2026-04-25T19:58:48.253151757Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T19:58:54.76493618Z [34;1m==>[0;22m [1mUploaded in 3.9s. Compression took 2.7s[22m
2026-04-25T19:58:54.79581903Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-25T19:37:15.897789227Z 2026-04-25 19:37:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:20.900100493Z 2026-04-25 19:37:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:20.900490682Z 2026-04-25 19:37:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:25.898518028Z 2026-04-25 19:37:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:30.89853145Z 2026-04-25 19:37:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:35.898109432Z 2026-04-25 19:37:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:40.898752548Z 2026-04-25 19:37:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:45.897817177Z 2026-04-25 19:37:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:50.898099404Z 2026-04-25 19:37:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:50.898650867Z 2026-04-25 19:37:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:55.903172851Z 2026-04-25 19:37:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:00.898526134Z 2026-04-25 19:38:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:05.898297898Z 2026-04-25 19:38:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:10.898371629Z 2026-04-25 19:38:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:15.898041121Z 2026-04-25 19:38:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:20.898323086Z 2026-04-25 19:38:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:20.899009492Z 2026-04-25 19:38:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:25.897950665Z 2026-04-25 19:38:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:30.89779338Z 2026-04-25 19:38:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:35.897732576Z 2026-04-25 19:38:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:40.898227105Z 2026-04-25 19:38:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:45.897856414Z 2026-04-25 19:38:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:50.898013524Z 2026-04-25 19:38:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:50.89868329Z 2026-04-25 19:38:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:38:55.898379909Z 2026-04-25 19:38:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:00.898475978Z 2026-04-25 19:39:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:05.898134106Z 2026-04-25 19:39:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:10.898528441Z 2026-04-25 19:39:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:15.897777259Z 2026-04-25 19:39:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:20.898248705Z 2026-04-25 19:39:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:20.898746936Z 2026-04-25 19:39:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:22.52944391Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T19:39:22.591520521Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T19:39:25.898489555Z 2026-04-25 19:39:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:30.898109571Z 2026-04-25 19:39:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:35.898288299Z 2026-04-25 19:39:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:40.898463427Z 2026-04-25 19:39:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:45.898778158Z 2026-04-25 19:39:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:50.900047285Z 2026-04-25 19:39:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:50.900930706Z 2026-04-25 19:39:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:53.847604794Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T19:39:53.955943682Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:39:53.958453271Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:39:53.96055703Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:39:53.962838923Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T19:39:53.965233029Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:39:53.967533203Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:39:55.897936811Z 2026-04-25 19:39:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:00.898014336Z 2026-04-25 19:40:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:05.898371737Z 2026-04-25 19:40:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:10.898442561Z 2026-04-25 19:40:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:15.898058514Z 2026-04-25 19:40:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:20.89779534Z 2026-04-25 19:40:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:25.898571Z 2026-04-25 19:40:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:30.89804968Z 2026-04-25 19:40:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:35.897940999Z 2026-04-25 19:40:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:37.967680915Z 2026-04-25 19:40:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:40.898562235Z 2026-04-25 19:40:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:42.969225922Z 2026-04-25 19:40:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:45.898391232Z 2026-04-25 19:40:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:47.966967316Z 2026-04-25 19:40:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:50.898449394Z 2026-04-25 19:40:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:52.962933009Z 2026-04-25 19:40:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:52.96640614Z 2026-04-25 19:40:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:57.966863684Z 2026-04-25 19:40:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:02.967208339Z 2026-04-25 19:41:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:07.967052091Z 2026-04-25 19:41:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:12.967623395Z 2026-04-25 19:41:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:17.966824483Z 2026-04-25 19:41:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:22.963713398Z 2026-04-25 19:41:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:22.966071432Z 2026-04-25 19:41:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:27.967027772Z 2026-04-25 19:41:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:32.967716384Z 2026-04-25 19:41:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:37.967416994Z 2026-04-25 19:41:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:42.967290041Z 2026-04-25 19:41:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:47.96755044Z 2026-04-25 19:41:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:52.963602331Z 2026-04-25 19:41:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:52.968413643Z 2026-04-25 19:41:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:41:57.967101392Z 2026-04-25 19:41:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:02.967093537Z 2026-04-25 19:42:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:07.9667659Z 2026-04-25 19:42:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:12.966715489Z 2026-04-25 19:42:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:17.96707572Z 2026-04-25 19:42:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:22.963493229Z 2026-04-25 19:42:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:22.966134889Z 2026-04-25 19:42:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:27.967489436Z 2026-04-25 19:42:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:32.967603285Z 2026-04-25 19:42:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:37.967081233Z 2026-04-25 19:42:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:42.967009426Z 2026-04-25 19:42:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:47.967516242Z 2026-04-25 19:42:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:52.963071265Z 2026-04-25 19:42:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:52.966995423Z 2026-04-25 19:42:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:42:57.967286281Z 2026-04-25 19:42:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:02.967274089Z 2026-04-25 19:43:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:07.967436115Z 2026-04-25 19:43:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:12.968256128Z 2026-04-25 19:43:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:17.967345285Z 2026-04-25 19:43:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:22.963202532Z 2026-04-25 19:43:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:22.967091958Z 2026-04-25 19:43:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:27.967556944Z 2026-04-25 19:43:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:32.966555988Z 2026-04-25 19:43:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:37.967435934Z 2026-04-25 19:43:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:42.96720144Z 2026-04-25 19:43:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:47.966961493Z 2026-04-25 19:43:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:52.962954135Z 2026-04-25 19:43:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:52.967203184Z 2026-04-25 19:43:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:43:57.967353536Z 2026-04-25 19:43:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:02.969872491Z 2026-04-25 19:44:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:07.967695487Z 2026-04-25 19:44:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:12.967060976Z 2026-04-25 19:44:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:17.966876079Z 2026-04-25 19:44:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:22.964301775Z 2026-04-25 19:44:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:22.968597666Z 2026-04-25 19:44:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:27.96702163Z 2026-04-25 19:44:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:32.987298409Z 2026-04-25 19:44:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:37.968021845Z 2026-04-25 19:44:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:42.967576731Z 2026-04-25 19:44:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:47.966940763Z 2026-04-25 19:44:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:51.545271162Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T19:44:51.628472406Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T19:44:52.963868105Z 2026-04-25 19:44:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:52.966597311Z 2026-04-25 19:44:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:44:57.966661322Z 2026-04-25 19:44:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:02.96754896Z 2026-04-25 19:45:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:07.967655769Z 2026-04-25 19:45:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:12.967652679Z 2026-04-25 19:45:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:17.973616989Z 2026-04-25 19:45:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:22.963888094Z 2026-04-25 19:45:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:22.966218165Z 2026-04-25 19:45:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:27.966903151Z 2026-04-25 19:45:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:32.970025322Z 2026-04-25 19:45:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:37.967644846Z 2026-04-25 19:45:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:42.966977183Z 2026-04-25 19:45:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:47.967637448Z 2026-04-25 19:45:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:52.966412476Z 2026-04-25 19:45:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:52.967423557Z 2026-04-25 19:45:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:45:57.96698098Z 2026-04-25 19:45:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:02.969337002Z 2026-04-25 19:46:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:07.967496816Z 2026-04-25 19:46:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:12.967858722Z 2026-04-25 19:46:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:17.967616919Z 2026-04-25 19:46:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:22.963288335Z 2026-04-25 19:46:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:22.966784468Z 2026-04-25 19:46:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:27.967504448Z 2026-04-25 19:46:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:32.96646087Z 2026-04-25 19:46:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:34.901424041Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T19:46:34.99941249Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T19:46:37.968695099Z 2026-04-25 19:46:37 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:42.968109864Z 2026-04-25 19:46:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:47.967386349Z 2026-04-25 19:46:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:49.400546743Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T19:46:50.713877573Z 
2026-04-25T19:46:50.713941445Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T19:46:50.713951115Z > node dist/index.js
2026-04-25T19:46:50.713953435Z 
2026-04-25T19:46:52.965238175Z 2026-04-25 19:46:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:52.967274508Z 2026-04-25 19:46:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:55.798617Z 2026-04-25 19:46:55 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T19:46:56.903560109Z 2026-04-25 19:46:56 [info] Firestore initialized successfully
2026-04-25T19:46:57.202031823Z 2026-04-25 19:46:57 [info] ✅ Server running on http://localhost:10000
2026-04-25T19:46:57.20229867Z 2026-04-25 19:46:57 [info] Environment: production
2026-04-25T19:46:57.202499034Z 2026-04-25 19:46:57 [info] API URL: http://localhost:5000
2026-04-25T19:46:57.202743491Z 2026-04-25 19:46:57 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T19:46:57.396117912Z 2026-04-25 19:46:57 [error] Route / not found
2026-04-25T19:46:57.396175403Z Error: Route / not found
2026-04-25T19:46:57.396181153Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:46:57.396185813Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:46:57.396193894Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:46:57.396198354Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:46:57.396202164Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:46:57.396205924Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:46:57.396209584Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:46:57.396213264Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:46:57.396216874Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:46:57.396220545Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:46:57.400591892Z 2026-04-25 19:46:57 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-25T19:46:57.966707748Z 2026-04-25 19:46:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:02.966753533Z 2026-04-25 19:47:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:05.318408039Z 2026-04-25 19:47:05 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:05.319719881Z 2026-04-25 19:47:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:06.44040883Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T19:47:06.584900427Z 2026-04-25 19:47:06 [error] Route / not found
2026-04-25T19:47:06.584923738Z Error: Route / not found
2026-04-25T19:47:06.584929668Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:47:06.584935258Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:47:06.584938819Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:47:06.584942308Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:47:06.584945169Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:47:06.584948019Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:47:06.584950789Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:47:06.584954029Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:47:06.584968549Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:47:06.584970409Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:47:06.585732698Z 2026-04-25 19:47:06 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T19:47:06.662265972Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:47:06.664369719Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:47:06.666599209Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:47:06.668367036Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T19:47:06.670719529Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:47:06.673110534Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:47:07.969742254Z 2026-04-25 19:47:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:10.318460374Z 2026-04-25 19:47:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:12.96773692Z 2026-04-25 19:47:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:15.316784116Z 2026-04-25 19:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:17.96746664Z 2026-04-25 19:47:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:20.316668586Z 2026-04-25 19:47:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:22.967503956Z 2026-04-25 19:47:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:25.317977311Z 2026-04-25 19:47:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:27.96705166Z 2026-04-25 19:47:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:30.317366108Z 2026-04-25 19:47:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:32.966702068Z 2026-04-25 19:47:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:35.316912018Z 2026-04-25 19:47:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:35.317965684Z 2026-04-25 19:47:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:37.967649593Z 2026-04-25 19:47:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:40.315968427Z 2026-04-25 19:47:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:42.966791916Z 2026-04-25 19:47:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:45.332752Z 2026-04-25 19:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:47.966748206Z 2026-04-25 19:47:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:50.316530432Z 2026-04-25 19:47:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:52.966921808Z 2026-04-25 19:47:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:47:55.316317327Z 2026-04-25 19:47:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:47:57.967238996Z 2026-04-25 19:47:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:48:00.31600107Z 2026-04-25 19:48:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:02.9675315Z 2026-04-25 19:48:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:48:05.316058631Z 2026-04-25 19:48:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:05.317344283Z 2026-04-25 19:48:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:10.316492601Z 2026-04-25 19:48:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:15.316734496Z 2026-04-25 19:48:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:20.31617998Z 2026-04-25 19:48:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:25.316143298Z 2026-04-25 19:48:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:30.316560925Z 2026-04-25 19:48:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:35.316252375Z 2026-04-25 19:48:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:35.317060855Z 2026-04-25 19:48:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:40.315714128Z 2026-04-25 19:48:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:45.328084969Z 2026-04-25 19:48:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:50.315931016Z 2026-04-25 19:48:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:48:55.316322692Z 2026-04-25 19:48:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:00.316330417Z 2026-04-25 19:49:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:05.316678621Z 2026-04-25 19:49:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:05.317546492Z 2026-04-25 19:49:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:10.317774203Z 2026-04-25 19:49:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:15.317260514Z 2026-04-25 19:49:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:20.316256344Z 2026-04-25 19:49:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:25.319037086Z 2026-04-25 19:49:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:30.319584722Z 2026-04-25 19:49:30 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:35.315976077Z 2026-04-25 19:49:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:35.316683434Z 2026-04-25 19:49:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:40.316956294Z 2026-04-25 19:49:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:45.320908123Z 2026-04-25 19:49:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:50.316503736Z 2026-04-25 19:49:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:49:55.316492017Z 2026-04-25 19:49:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:00.3165519Z 2026-04-25 19:50:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:05.316029578Z 2026-04-25 19:50:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:05.31692711Z 2026-04-25 19:50:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:10.316387107Z 2026-04-25 19:50:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:15.317194667Z 2026-04-25 19:50:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:20.316853568Z 2026-04-25 19:50:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:25.31653039Z 2026-04-25 19:50:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:30.317523003Z 2026-04-25 19:50:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:35.315945313Z 2026-04-25 19:50:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:35.316665351Z 2026-04-25 19:50:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:40.316500015Z 2026-04-25 19:50:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:45.316122364Z 2026-04-25 19:50:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:50.31606642Z 2026-04-25 19:50:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:55.316116788Z 2026-04-25 19:50:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:50:59.769998973Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T19:50:59.835066381Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T19:51:00.316048133Z 2026-04-25 19:51:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:05.31890253Z 2026-04-25 19:51:05 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:05.322619291Z 2026-04-25 19:51:05 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:10.315544233Z 2026-04-25 19:51:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:15.317416125Z 2026-04-25 19:51:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:20.31616677Z 2026-04-25 19:51:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:25.316977126Z 2026-04-25 19:51:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:30.318781875Z 2026-04-25 19:51:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:35.316521664Z 2026-04-25 19:51:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:35.317526798Z 2026-04-25 19:51:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:40.316543778Z 2026-04-25 19:51:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:45.319748931Z 2026-04-25 19:51:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:50.316176176Z 2026-04-25 19:51:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:51:55.316704832Z 2026-04-25 19:51:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:00.315959757Z 2026-04-25 19:52:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:05.316257706Z 2026-04-25 19:52:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:05.317032425Z 2026-04-25 19:52:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:10.316449013Z 2026-04-25 19:52:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:15.316357963Z 2026-04-25 19:52:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:20.31660779Z 2026-04-25 19:52:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:25.316271023Z 2026-04-25 19:52:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:30.316368656Z 2026-04-25 19:52:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:35.316419967Z 2026-04-25 19:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:35.317041132Z 2026-04-25 19:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:40.316496829Z 2026-04-25 19:52:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:45.316716034Z 2026-04-25 19:52:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:50.317171684Z 2026-04-25 19:52:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:55.316198539Z 2026-04-25 19:52:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:52:55.930378069Z [0;33m[1m==> [0m[1mNo open ports detected, continuing to scan...[0m
2026-04-25T19:52:56.035314325Z [0;33m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T19:52:59.61957216Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T19:53:00.316237028Z 2026-04-25 19:53:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:02.019717554Z 
2026-04-25T19:53:02.019738975Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T19:53:02.019743075Z > node dist/index.js
2026-04-25T19:53:02.019745175Z 
2026-04-25T19:53:05.319398374Z 2026-04-25 19:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:05.320324677Z 2026-04-25 19:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:06.530562763Z 2026-04-25 19:53:06 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T19:53:07.82163266Z 2026-04-25 19:53:07 [info] Firestore initialized successfully
2026-04-25T19:53:07.826449143Z 2026-04-25 19:53:07 [info] ✅ Server running on http://localhost:10000
2026-04-25T19:53:07.8265665Z 2026-04-25 19:53:07 [info] Environment: production
2026-04-25T19:53:07.826688077Z 2026-04-25 19:53:07 [info] API URL: http://localhost:5000
2026-04-25T19:53:07.826917899Z 2026-04-25 19:53:07 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T19:53:08.520116251Z 2026-04-25 19:53:08 [error] Route / not found
2026-04-25T19:53:08.520135012Z Error: Route / not found
2026-04-25T19:53:08.520140543Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:53:08.520145813Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:53:08.520152123Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:53:08.520156063Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:53:08.520159334Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:53:08.520162534Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:53:08.520165764Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:53:08.520168854Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:53:08.520171894Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:53:08.520174935Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:53:08.52540315Z 2026-04-25 19:53:08 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-25T19:53:10.217862142Z 2026-04-25 19:53:10 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:10.22021476Z 2026-04-25 19:53:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:10.316610293Z 2026-04-25 19:53:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:11.465971643Z 2026-04-25 19:53:11 [error] Route / not found
2026-04-25T19:53:11.465986124Z Error: Route / not found
2026-04-25T19:53:11.465992594Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:53:11.465997854Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:53:11.466003215Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:53:11.466008555Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:53:11.466012485Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:53:11.466015525Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:53:11.466021976Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:53:11.466026986Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:53:11.466041597Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:53:11.466043927Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:53:11.466781207Z 2026-04-25 19:53:11 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T19:53:11.519017221Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T19:53:11.608085971Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:53:11.617082002Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:53:11.627920613Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:53:11.638505867Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T19:53:11.649614855Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:53:11.664480744Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:53:15.215922325Z 2026-04-25 19:53:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:15.316716664Z 2026-04-25 19:53:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:20.216108146Z 2026-04-25 19:53:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:20.316225948Z 2026-04-25 19:53:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:25.217176846Z 2026-04-25 19:53:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:25.316053851Z 2026-04-25 19:53:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:30.216236289Z 2026-04-25 19:53:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:30.21754347Z 2026-04-25 19:53:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:30.322832784Z 2026-04-25 19:53:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:35.215663993Z 2026-04-25 19:53:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:35.316546316Z 2026-04-25 19:53:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:40.215717983Z 2026-04-25 19:53:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:40.316776557Z 2026-04-25 19:53:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:45.215790076Z 2026-04-25 19:53:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:45.316046065Z 2026-04-25 19:53:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:50.215516172Z 2026-04-25 19:53:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:50.316267445Z 2026-04-25 19:53:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:55.215498883Z 2026-04-25 19:53:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:53:55.323776204Z 2026-04-25 19:53:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:54:00.215998384Z 2026-04-25 19:54:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:00.217103264Z 2026-04-25 19:54:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:00.316780877Z 2026-04-25 19:54:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:54:05.215027056Z 2026-04-25 19:54:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:05.316664768Z 2026-04-25 19:54:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:54:10.215433065Z 2026-04-25 19:54:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:10.316202501Z 2026-04-25 19:54:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:54:15.215174219Z 2026-04-25 19:54:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:20.21536862Z 2026-04-25 19:54:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:25.214860084Z 2026-04-25 19:54:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:30.215317332Z 2026-04-25 19:54:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:30.216421863Z 2026-04-25 19:54:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:35.216113561Z 2026-04-25 19:54:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:40.215616631Z 2026-04-25 19:54:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:45.216486136Z 2026-04-25 19:54:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:50.215713883Z 2026-04-25 19:54:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:54:55.215837692Z 2026-04-25 19:54:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:00.215084453Z 2026-04-25 19:55:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:00.215863546Z 2026-04-25 19:55:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:05.215366534Z 2026-04-25 19:55:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:10.215679047Z 2026-04-25 19:55:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:15.215855624Z 2026-04-25 19:55:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:20.217166275Z 2026-04-25 19:55:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:25.215122674Z 2026-04-25 19:55:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:30.215468195Z 2026-04-25 19:55:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:30.216039846Z 2026-04-25 19:55:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:35.215439978Z 2026-04-25 19:55:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:40.215546729Z 2026-04-25 19:55:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:45.215325274Z 2026-04-25 19:55:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:50.218829924Z 2026-04-25 19:55:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:55:55.214957753Z 2026-04-25 19:55:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:00.2152425Z 2026-04-25 19:56:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:00.216054884Z 2026-04-25 19:56:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:05.215743621Z 2026-04-25 19:56:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:10.215504703Z 2026-04-25 19:56:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:15.21496332Z 2026-04-25 19:56:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:20.217674176Z 2026-04-25 19:56:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:25.215143257Z 2026-04-25 19:56:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:30.215841776Z 2026-04-25 19:56:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:30.21665192Z 2026-04-25 19:56:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:35.21512186Z 2026-04-25 19:56:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:40.216289048Z 2026-04-25 19:56:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:45.214921249Z 2026-04-25 19:56:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:50.215574992Z 2026-04-25 19:56:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:56:55.215891099Z 2026-04-25 19:56:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:00.220099399Z 2026-04-25 19:57:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:00.220148212Z 2026-04-25 19:57:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:05.215448457Z 2026-04-25 19:57:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:10.215874884Z 2026-04-25 19:57:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:15.215496808Z 2026-04-25 19:57:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:20.215309735Z 2026-04-25 19:57:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:25.216210472Z 2026-04-25 19:57:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:30.215782267Z 2026-04-25 19:57:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:30.217368914Z 2026-04-25 19:57:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:35.215269361Z 2026-04-25 19:57:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:40.214860391Z 2026-04-25 19:57:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:45.214991333Z 2026-04-25 19:57:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:50.215315887Z 2026-04-25 19:57:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:57:55.215179357Z 2026-04-25 19:57:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:00.215185256Z 2026-04-25 19:58:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:00.215847092Z 2026-04-25 19:58:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:05.216648487Z 2026-04-25 19:58:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:10.215380559Z 2026-04-25 19:58:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:14.36936067Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T19:58:14.452085163Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T19:58:15.215917032Z 2026-04-25 19:58:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:20.215929088Z 2026-04-25 19:58:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:25.216916128Z 2026-04-25 19:58:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:30.216545675Z 2026-04-25 19:58:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:30.217410622Z 2026-04-25 19:58:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:35.215274225Z 2026-04-25 19:58:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:40.21881805Z 2026-04-25 19:58:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:45.214785052Z 2026-04-25 19:58:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:50.216035154Z 2026-04-25 19:58:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:58:55.215773175Z 2026-04-25 19:58:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:00.174277457Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T19:59:00.216471561Z 2026-04-25 19:59:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:00.217159828Z 2026-04-25 19:59:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:00.261445561Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T19:59:05.215056942Z 2026-04-25 19:59:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:10.215924029Z 2026-04-25 19:59:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:15.215392492Z 2026-04-25 19:59:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:17.162287309Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T19:59:18.363487554Z 
2026-04-25T19:59:18.363519885Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T19:59:18.363525505Z > node dist/index.js
2026-04-25T19:59:18.363527695Z 
2026-04-25T19:59:20.215813528Z 2026-04-25 19:59:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:22.964094767Z 2026-04-25 19:59:22 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T19:59:23.956623043Z 2026-04-25 19:59:23 [info] Firestore initialized successfully
2026-04-25T19:59:23.961574707Z 2026-04-25 19:59:23 [info] ✅ Server running on http://localhost:10000
2026-04-25T19:59:23.961770602Z 2026-04-25 19:59:23 [info] Environment: production
2026-04-25T19:59:23.961966686Z 2026-04-25 19:59:23 [info] API URL: http://localhost:5000
2026-04-25T19:59:23.962192092Z 2026-04-25 19:59:23 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T19:59:24.638447967Z 2026-04-25 19:59:24 [error] Route / not found
2026-04-25T19:59:24.638470948Z Error: Route / not found
2026-04-25T19:59:24.638476058Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:59:24.638480118Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:59:24.638485198Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:59:24.638488898Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:59:24.638492098Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:59:24.638495268Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:59:24.638498368Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:59:24.638501599Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:59:24.638504849Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:59:24.638508599Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:59:24.642800886Z 2026-04-25 19:59:24 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-25T19:59:25.214976007Z 2026-04-25 19:59:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:30.215258318Z 2026-04-25 19:59:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:30.216332197Z 2026-04-25 19:59:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:30.629507232Z 2026-04-25 19:59:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T19:59:30.631992384Z 2026-04-25 19:59:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T19:59:31.331690648Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T19:59:31.41584502Z 2026-04-25 19:59:31 [error] Route / not found
2026-04-25T19:59:31.415864581Z Error: Route / not found
2026-04-25T19:59:31.415870561Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:59:31.415875731Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:59:31.415881611Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:59:31.415885491Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:59:31.415888751Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:59:31.415891902Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:59:31.415895011Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:59:31.415898331Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:59:31.415916142Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:59:31.415919662Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:59:31.416743493Z 2026-04-25 19:59:31 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T19:59:31.452040747Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:59:31.454532126Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:59:31.456585023Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:59:31.458875507Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T19:59:31.460823312Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:59:31.462891641Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:59:35.216120593Z 2026-04-25 19:59:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:35.635735914Z 2026-04-25 19:59:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
```
