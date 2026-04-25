# Render Deploy Diagnostics

Run: 24939466076
Commit: 69e8c926cec10cae2fe7ffc80c4ac748cd12d3a7
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mhro5ckfvc73efhqog

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
  "updatedAt": "2026-04-25T20:04:56.974252Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mhro5ckfvc73efhqog",
  "commit": {
    "id": "69e8c926cec10cae2fe7ffc80c4ac748cd12d3a7",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:46663/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-25T20:02:28Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T20:02:40.525666Z",
  "updatedAt": "2026-04-25T20:04:56.972728Z",
  "startedAt": "2026-04-25T20:02:40.480169Z",
  "finishedAt": "2026-04-25T20:04:56.972395Z"
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
```

## App logs (last 4h)
```
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
2026-04-25T19:46:52.965238175Z 2026-04-25 19:46:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:46:52.967274508Z 2026-04-25 19:46:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
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
```
