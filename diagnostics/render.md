# Render Deploy Diagnostics

Run: 24939618499
Commit: a73e5fa69ca67ca93611618b93068eae492c930b
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mhvib7uimc73csn3rg

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
  "updatedAt": "2026-04-25T20:13:15.242906Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mhvib7uimc73csn3rg",
  "commit": {
    "id": "a73e5fa69ca67ca93611618b93068eae492c930b",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:46663/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-25T20:10:37Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T20:10:49.625301Z",
  "updatedAt": "2026-04-25T20:13:15.241603Z",
  "startedAt": "2026-04-25T20:10:49.578456Z",
  "finishedAt": "2026-04-25T20:13:15.241435Z"
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
2026-04-25T20:02:54.386077871Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T20:02:55.088063062Z [34m[1m==>(B[m [1mChecking out commit 69e8c926cec10cae2fe7ffc80c4ac748cd12d3a7 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T20:02:56.868568948Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T20:02:56.892678593Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T20:02:58.819206424Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T20:04:23.886907981Z 
2026-04-25T20:04:23.886943981Z added 590 packages, and audited 591 packages in 1m
2026-04-25T20:04:23.886964022Z 
2026-04-25T20:04:23.887041973Z 113 packages are looking for funding
2026-04-25T20:04:23.887105735Z   run `npm fund` for details
2026-04-25T20:04:24.038104127Z 
2026-04-25T20:04:24.038133537Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T20:04:24.038138497Z 
2026-04-25T20:04:24.038143118Z To address issues that do not require attention, run:
2026-04-25T20:04:24.038147468Z   npm audit fix
2026-04-25T20:04:24.038151558Z 
2026-04-25T20:04:24.038155918Z To address all issues (including breaking changes), run:
2026-04-25T20:04:24.038160648Z   npm audit fix --force
2026-04-25T20:04:24.038164578Z 
2026-04-25T20:04:24.038169308Z Run `npm audit` for details.
2026-04-25T20:04:24.259382395Z 
2026-04-25T20:04:24.259407485Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T20:04:24.259415955Z > tsc && tsc-alias
2026-04-25T20:04:24.259422285Z 
2026-04-25T20:04:27.12124834Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T20:04:32.901609383Z [34;1m==>[0;22m [1mUploaded in 3.4s. Compression took 2.4s[22m
2026-04-25T20:04:32.934916705Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T20:10:53.825774811Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T20:10:54.510742093Z [34m[1m==>(B[m [1mChecking out commit a73e5fa69ca67ca93611618b93068eae492c930b in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T20:10:55.89399258Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T20:10:55.91749579Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T20:10:57.868145105Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T20:12:31.279236168Z 
2026-04-25T20:12:31.279266038Z added 590 packages, and audited 591 packages in 2m
2026-04-25T20:12:31.27931598Z 
2026-04-25T20:12:31.279397882Z 113 packages are looking for funding
2026-04-25T20:12:31.279437143Z   run `npm fund` for details
2026-04-25T20:12:31.427943097Z 
2026-04-25T20:12:31.427969378Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T20:12:31.427974278Z 
2026-04-25T20:12:31.427980828Z To address issues that do not require attention, run:
2026-04-25T20:12:31.427987218Z   npm audit fix
2026-04-25T20:12:31.427993438Z 
2026-04-25T20:12:31.428000299Z To address all issues (including breaking changes), run:
2026-04-25T20:12:31.428007289Z   npm audit fix --force
2026-04-25T20:12:31.428013439Z 
2026-04-25T20:12:31.428022089Z Run `npm audit` for details.
2026-04-25T20:12:31.659349331Z 
2026-04-25T20:12:31.659379452Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T20:12:31.659385732Z > tsc && tsc-alias
2026-04-25T20:12:31.659390482Z 
2026-04-25T20:12:35.332489125Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T20:12:41.45362872Z [34;1m==>[0;22m [1mUploaded in 3.6s. Compression took 2.5s[22m
2026-04-25T20:12:41.48779425Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
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
2026-04-25T19:53:00.316237028Z 2026-04-25 19:53:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:05.319398374Z 2026-04-25 19:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:05.320324677Z 2026-04-25 19:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:10.316610293Z 2026-04-25 19:53:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:11.519017221Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T19:53:11.608085971Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:53:11.617082002Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:53:11.627920613Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:53:11.638505867Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T19:53:11.649614855Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:53:11.664480744Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:53:15.316716664Z 2026-04-25 19:53:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:20.316225948Z 2026-04-25 19:53:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:25.316053851Z 2026-04-25 19:53:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:30.322832784Z 2026-04-25 19:53:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:35.316546316Z 2026-04-25 19:53:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:40.316776557Z 2026-04-25 19:53:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:45.316046065Z 2026-04-25 19:53:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:50.316267445Z 2026-04-25 19:53:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.46"}
2026-04-25T19:53:55.323776204Z 2026-04-25 19:53:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.46"}
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
2026-04-25T19:59:40.215525989Z 2026-04-25 19:59:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:40.632670144Z 2026-04-25 19:59:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T19:59:45.21589572Z 2026-04-25 19:59:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:45.632457697Z 2026-04-25 19:59:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T19:59:50.215414536Z 2026-04-25 19:59:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:50.632358015Z 2026-04-25 19:59:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T19:59:55.214844668Z 2026-04-25 19:59:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T19:59:55.631654499Z 2026-04-25 19:59:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:00.21570432Z 2026-04-25 20:00:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T20:00:00.628508583Z 2026-04-25 20:00:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:00.631761694Z 2026-04-25 20:00:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:05.215712967Z 2026-04-25 20:00:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T20:00:05.631885881Z 2026-04-25 20:00:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:10.216639336Z 2026-04-25 20:00:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T20:00:10.632658855Z 2026-04-25 20:00:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:15.215711515Z 2026-04-25 20:00:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T20:00:15.632126568Z 2026-04-25 20:00:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:20.215687484Z 2026-04-25 20:00:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T20:00:20.631130591Z 2026-04-25 20:00:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:25.214955737Z 2026-04-25 20:00:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.253"}
2026-04-25T20:00:25.631602142Z 2026-04-25 20:00:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:30.215480759Z 2026-04-25 20:00:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.253"}
2026-04-25T20:00:30.627498809Z 2026-04-25 20:00:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:30.631578701Z 2026-04-25 20:00:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:35.632127337Z 2026-04-25 20:00:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:40.632331644Z 2026-04-25 20:00:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:45.632740268Z 2026-04-25 20:00:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:50.63294562Z 2026-04-25 20:00:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:00:55.632240819Z 2026-04-25 20:00:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:00.628156524Z 2026-04-25 20:01:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:00.63119295Z 2026-04-25 20:01:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:05.632145653Z 2026-04-25 20:01:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:10.632938053Z 2026-04-25 20:01:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:15.631323764Z 2026-04-25 20:01:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:20.631514802Z 2026-04-25 20:01:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:25.635584028Z 2026-04-25 20:01:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:30.630729332Z 2026-04-25 20:01:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:30.635595884Z 2026-04-25 20:01:30 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:35.635313513Z 2026-04-25 20:01:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:40.631895466Z 2026-04-25 20:01:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:45.631853473Z 2026-04-25 20:01:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:50.631492875Z 2026-04-25 20:01:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:01:55.631589579Z 2026-04-25 20:01:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:00.627768456Z 2026-04-25 20:02:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:00.630876503Z 2026-04-25 20:02:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:05.631886973Z 2026-04-25 20:02:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:10.631371435Z 2026-04-25 20:02:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:15.631827844Z 2026-04-25 20:02:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:20.631629707Z 2026-04-25 20:02:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:25.633734768Z 2026-04-25 20:02:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:30.627185344Z 2026-04-25 20:02:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:30.630759204Z 2026-04-25 20:02:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:35.632253203Z 2026-04-25 20:02:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:40.631875706Z 2026-04-25 20:02:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:45.631523301Z 2026-04-25 20:02:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:50.632120641Z 2026-04-25 20:02:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:02:55.856356809Z 2026-04-25 20:02:55 [info] {"method":"GET","path":"/health","status":200,"duration":"100ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:00.627701885Z 2026-04-25 20:03:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:00.63151874Z 2026-04-25 20:03:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:05.633430457Z 2026-04-25 20:03:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:10.631831017Z 2026-04-25 20:03:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:15.631846208Z 2026-04-25 20:03:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:20.63181043Z 2026-04-25 20:03:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:25.632158692Z 2026-04-25 20:03:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:30.627688365Z 2026-04-25 20:03:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:30.630494665Z 2026-04-25 20:03:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:35.631444236Z 2026-04-25 20:03:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:40.632072499Z 2026-04-25 20:03:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:45.631541744Z 2026-04-25 20:03:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:50.631841211Z 2026-04-25 20:03:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:03:55.631848442Z 2026-04-25 20:03:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:00.627790353Z 2026-04-25 20:04:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:00.630794758Z 2026-04-25 20:04:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:05.63196805Z 2026-04-25 20:04:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:10.633015581Z 2026-04-25 20:04:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:15.63115659Z 2026-04-25 20:04:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:20.633325261Z 2026-04-25 20:04:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:25.632187211Z 2026-04-25 20:04:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:30.627534083Z 2026-04-25 20:04:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:30.63222184Z 2026-04-25 20:04:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:31.394447977Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T20:04:31.471080816Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T20:04:35.632475007Z 2026-04-25 20:04:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:35.771398019Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T20:04:35.839418162Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T20:04:40.63211706Z 2026-04-25 20:04:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:45.632306848Z 2026-04-25 20:04:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:48.779509514Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T20:04:49.979822697Z 
2026-04-25T20:04:49.979858377Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T20:04:49.979862928Z > node dist/index.js
2026-04-25T20:04:49.979865088Z 
2026-04-25T20:04:50.631710687Z 2026-04-25 20:04:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:54.38142317Z 2026-04-25 20:04:54 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T20:04:55.278303637Z 2026-04-25 20:04:55 [info] Firestore initialized successfully
2026-04-25T20:04:55.383131314Z 2026-04-25 20:04:55 [info] ✅ Server running on http://localhost:10000
2026-04-25T20:04:55.383161655Z 2026-04-25 20:04:55 [info] Environment: production
2026-04-25T20:04:55.383167415Z 2026-04-25 20:04:55 [info] API URL: http://localhost:5000
2026-04-25T20:04:55.383172735Z 2026-04-25 20:04:55 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T20:04:55.632066841Z 2026-04-25 20:04:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:04:55.765378976Z 2026-04-25 20:04:55 [error] Route / not found
2026-04-25T20:04:55.765395246Z Error: Route / not found
2026-04-25T20:04:55.765401896Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T20:04:55.765409137Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:04:55.765421327Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:04:55.765428127Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:04:55.765434077Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T20:04:55.765438007Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T20:04:55.765441888Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T20:04:55.765445777Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:04:55.765449688Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:04:55.765453558Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:04:55.770427472Z 2026-04-25 20:04:55 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-25T20:04:56.263713985Z 2026-04-25 20:04:56 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:04:56.26552289Z 2026-04-25 20:04:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:04:57.128532522Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T20:04:57.216655653Z 2026-04-25 20:04:57 [error] Route / not found
2026-04-25T20:04:57.216673963Z Error: Route / not found
2026-04-25T20:04:57.216679203Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T20:04:57.216683783Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:04:57.216688103Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:04:57.216692523Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:04:57.216696534Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T20:04:57.216700784Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T20:04:57.216705054Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T20:04:57.216708954Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:04:57.216727254Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:04:57.216729904Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:04:57.217489933Z 2026-04-25 20:04:57 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T20:04:57.245699556Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:04:57.258272993Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T20:04:57.26485345Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:04:57.27006923Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T20:04:57.274587961Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:04:57.280829189Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T20:05:00.634295644Z 2026-04-25 20:05:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:01.267116689Z 2026-04-25 20:05:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:05.631532482Z 2026-04-25 20:05:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:06.264434801Z 2026-04-25 20:05:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:06.26557923Z 2026-04-25 20:05:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:10.632031913Z 2026-04-25 20:05:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:11.266196223Z 2026-04-25 20:05:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:15.63192368Z 2026-04-25 20:05:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:16.266344064Z 2026-04-25 20:05:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:20.632091616Z 2026-04-25 20:05:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:21.266520604Z 2026-04-25 20:05:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:25.631711169Z 2026-04-25 20:05:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:26.265684629Z 2026-04-25 20:05:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:30.631587179Z 2026-04-25 20:05:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:31.265731405Z 2026-04-25 20:05:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:35.632091336Z 2026-04-25 20:05:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:36.262417217Z 2026-04-25 20:05:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:36.265448143Z 2026-04-25 20:05:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:40.631972509Z 2026-04-25 20:05:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:41.266247466Z 2026-04-25 20:05:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:45.631930856Z 2026-04-25 20:05:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:46.266051634Z 2026-04-25 20:05:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:50.631940044Z 2026-04-25 20:05:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:51.266374624Z 2026-04-25 20:05:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:05:55.631511893Z 2026-04-25 20:05:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.17"}
2026-04-25T20:05:56.265798161Z 2026-04-25 20:05:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:01.265494384Z 2026-04-25 20:06:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:06.262592441Z 2026-04-25 20:06:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:06.264830717Z 2026-04-25 20:06:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:11.265583905Z 2026-04-25 20:06:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:16.26584928Z 2026-04-25 20:06:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:21.266023962Z 2026-04-25 20:06:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:26.265686621Z 2026-04-25 20:06:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:31.26739285Z 2026-04-25 20:06:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:36.262878453Z 2026-04-25 20:06:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:36.264605916Z 2026-04-25 20:06:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:41.267569235Z 2026-04-25 20:06:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:46.266057811Z 2026-04-25 20:06:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:51.265635974Z 2026-04-25 20:06:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:06:56.266296523Z 2026-04-25 20:06:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:01.265589138Z 2026-04-25 20:07:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:06.262587614Z 2026-04-25 20:07:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:06.265595659Z 2026-04-25 20:07:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:11.265358264Z 2026-04-25 20:07:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:16.266476552Z 2026-04-25 20:07:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:21.265968578Z 2026-04-25 20:07:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:26.269142766Z 2026-04-25 20:07:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:31.265574475Z 2026-04-25 20:07:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:36.26351313Z 2026-04-25 20:07:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:36.265784867Z 2026-04-25 20:07:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:41.265615719Z 2026-04-25 20:07:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:46.266082437Z 2026-04-25 20:07:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:51.266180854Z 2026-04-25 20:07:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:07:56.269537912Z 2026-04-25 20:07:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:01.265928216Z 2026-04-25 20:08:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:06.262667647Z 2026-04-25 20:08:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:06.265720084Z 2026-04-25 20:08:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:11.266070555Z 2026-04-25 20:08:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:16.26542363Z 2026-04-25 20:08:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:21.267345389Z 2026-04-25 20:08:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:26.265918003Z 2026-04-25 20:08:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:31.266784324Z 2026-04-25 20:08:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:36.263034139Z 2026-04-25 20:08:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:36.26504343Z 2026-04-25 20:08:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:41.266400391Z 2026-04-25 20:08:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:46.269411703Z 2026-04-25 20:08:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:51.265970044Z 2026-04-25 20:08:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:08:56.265247542Z 2026-04-25 20:08:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:01.266104099Z 2026-04-25 20:09:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:06.262313719Z 2026-04-25 20:09:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:06.265042587Z 2026-04-25 20:09:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:11.266286632Z 2026-04-25 20:09:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:16.266265114Z 2026-04-25 20:09:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:21.2660019Z 2026-04-25 20:09:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:26.26589808Z 2026-04-25 20:09:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:31.265842619Z 2026-04-25 20:09:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:36.26306497Z 2026-04-25 20:09:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:36.264960638Z 2026-04-25 20:09:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:41.265700886Z 2026-04-25 20:09:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:46.266057394Z 2026-04-25 20:09:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:51.265692033Z 2026-04-25 20:09:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:09:56.266036109Z 2026-04-25 20:09:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:01.265522294Z 2026-04-25 20:10:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:04.318494581Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T20:10:04.398441406Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T20:10:06.26232164Z 2026-04-25 20:10:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:06.265238573Z 2026-04-25 20:10:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:11.265666149Z 2026-04-25 20:10:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:16.265852619Z 2026-04-25 20:10:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:21.266232063Z 2026-04-25 20:10:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:26.265499888Z 2026-04-25 20:10:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:31.266080606Z 2026-04-25 20:10:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:36.26295909Z 2026-04-25 20:10:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:36.264715494Z 2026-04-25 20:10:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:41.265742772Z 2026-04-25 20:10:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:46.26565872Z 2026-04-25 20:10:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:51.265416014Z 2026-04-25 20:10:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:10:56.266121052Z 2026-04-25 20:10:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:01.265427483Z 2026-04-25 20:11:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:06.262523169Z 2026-04-25 20:11:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:06.265457323Z 2026-04-25 20:11:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:11.266555417Z 2026-04-25 20:11:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:16.266287358Z 2026-04-25 20:11:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:21.265857393Z 2026-04-25 20:11:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:26.265603083Z 2026-04-25 20:11:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:31.268149051Z 2026-04-25 20:11:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:36.264094454Z 2026-04-25 20:11:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:36.265000627Z 2026-04-25 20:11:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:41.266129589Z 2026-04-25 20:11:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:46.26525096Z 2026-04-25 20:11:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:51.265803266Z 2026-04-25 20:11:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:11:56.265749447Z 2026-04-25 20:11:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:01.266076556Z 2026-04-25 20:12:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:06.262410715Z 2026-04-25 20:12:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:06.265224555Z 2026-04-25 20:12:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:11.26544307Z 2026-04-25 20:12:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:16.265244544Z 2026-04-25 20:12:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:21.265761195Z 2026-04-25 20:12:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:26.265523147Z 2026-04-25 20:12:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:31.268062148Z 2026-04-25 20:12:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:36.262233769Z 2026-04-25 20:12:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:36.26551043Z 2026-04-25 20:12:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:41.265682051Z 2026-04-25 20:12:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:44.00140609Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T20:12:44.085103936Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T20:12:46.266305961Z 2026-04-25 20:12:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:51.266047649Z 2026-04-25 20:12:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:56.266395761Z 2026-04-25 20:12:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:12:58.523933397Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T20:12:59.723136372Z 
2026-04-25T20:12:59.723169832Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T20:12:59.723175602Z > node dist/index.js
2026-04-25T20:12:59.723178823Z 
2026-04-25T20:13:01.266371044Z 2026-04-25 20:13:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:04.227251586Z 2026-04-25 20:13:04 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T20:13:05.222850053Z 2026-04-25 20:13:05 [info] Firestore initialized successfully
2026-04-25T20:13:05.425887109Z 2026-04-25 20:13:05 [info] ✅ Server running on http://localhost:10000
2026-04-25T20:13:05.426191765Z 2026-04-25 20:13:05 [info] Environment: production
2026-04-25T20:13:05.426360988Z 2026-04-25 20:13:05 [info] API URL: http://localhost:5000
2026-04-25T20:13:05.426596803Z 2026-04-25 20:13:05 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T20:13:05.632363211Z 2026-04-25 20:13:05 [error] Route / not found
2026-04-25T20:13:05.632381031Z Error: Route / not found
2026-04-25T20:13:05.632385321Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T20:13:05.632388741Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:13:05.632393581Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:13:05.632396831Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:13:05.632399151Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T20:13:05.632401442Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T20:13:05.632403691Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T20:13:05.632406002Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:13:05.632408322Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:13:05.632410632Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:13:05.636293586Z 2026-04-25 20:13:05 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-25T20:13:06.262858359Z 2026-04-25 20:13:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:06.265621788Z 2026-04-25 20:13:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:11.265578938Z 2026-04-25 20:13:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:14.505746599Z 2026-04-25 20:13:14 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:13:14.508736166Z 2026-04-25 20:13:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:13:15.359817849Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T20:13:15.474186849Z 2026-04-25 20:13:15 [error] Route / not found
2026-04-25T20:13:15.474206009Z Error: Route / not found
2026-04-25T20:13:15.474210089Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T20:13:15.474213509Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:13:15.474217149Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:13:15.47422114Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:13:15.474223869Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T20:13:15.47422668Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T20:13:15.47422956Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T20:13:15.47423224Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:13:15.47424855Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:13:15.47425152Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:13:15.475178518Z 2026-04-25 20:13:15 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T20:13:15.51695865Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:13:15.521042946Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T20:13:15.522886769Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:13:15.526381861Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T20:13:15.528706336Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:13:15.530791234Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T20:13:16.266530313Z 2026-04-25 20:13:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:19.511347199Z 2026-04-25 20:13:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:13:21.265860557Z 2026-04-25 20:13:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:24.503598225Z 2026-04-25 20:13:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:13:26.265429367Z 2026-04-25 20:13:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:29.503986954Z 2026-04-25 20:13:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:13:31.267881947Z 2026-04-25 20:13:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:34.50479374Z 2026-04-25 20:13:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
```
