# Render Deploy Diagnostics

Run: 24939870831
Commit: 5c71189b92e590326348c99229a21025435a5618
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mi5omgvqtc73abnitg

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
  "updatedAt": "2026-04-25T20:27:43.602007Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mi5omgvqtc73abnitg",
  "commit": {
    "id": "5c71189b92e590326348c99229a21025435a5618",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:33455/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-25T20:23:46Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T20:24:03.099306Z",
  "updatedAt": "2026-04-25T20:27:43.600281Z",
  "startedAt": "2026-04-25T20:24:03.044271Z",
  "finishedAt": "2026-04-25T20:27:43.599959Z"
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
2026-04-25T20:24:13.154211207Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T20:24:13.832143896Z [34m[1m==>(B[m [1mChecking out commit 5c71189b92e590326348c99229a21025435a5618 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T20:24:15.207595765Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T20:24:15.232751501Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T20:24:17.459684986Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T20:25:40.142060252Z 
2026-04-25T20:25:40.142086825Z added 590 packages, and audited 591 packages in 1m
2026-04-25T20:25:40.142124447Z 
2026-04-25T20:25:40.142277179Z 113 packages are looking for funding
2026-04-25T20:25:40.142364755Z   run `npm fund` for details
2026-04-25T20:25:40.316443583Z 
2026-04-25T20:25:40.316464125Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T20:25:40.316468185Z 
2026-04-25T20:25:40.316471635Z To address issues that do not require attention, run:
2026-04-25T20:25:40.316474845Z   npm audit fix
2026-04-25T20:25:40.316477846Z 
2026-04-25T20:25:40.316480976Z To address all issues (including breaking changes), run:
2026-04-25T20:25:40.316484246Z   npm audit fix --force
2026-04-25T20:25:40.316487176Z 
2026-04-25T20:25:40.316490827Z Run `npm audit` for details.
2026-04-25T20:25:40.576809574Z 
2026-04-25T20:25:40.576838926Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T20:25:40.576846546Z > tsc && tsc-alias
2026-04-25T20:25:40.576852407Z 
2026-04-25T20:27:08.699726773Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T20:27:16.600071634Z [34;1m==>[0;22m [1mUploaded in 3.8s. Compression took 4.1s[22m
2026-04-25T20:27:16.719823072Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
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
2026-04-25T20:13:01.266371044Z 2026-04-25 20:13:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:06.262858359Z 2026-04-25 20:13:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:06.265621788Z 2026-04-25 20:13:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:11.265578938Z 2026-04-25 20:13:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:15.359817849Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T20:13:15.51695865Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:13:15.521042946Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T20:13:15.522886769Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:13:15.526381861Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T20:13:15.528706336Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:13:15.530791234Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T20:13:16.266530313Z 2026-04-25 20:13:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:21.265860557Z 2026-04-25 20:13:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:26.265429367Z 2026-04-25 20:13:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:31.267881947Z 2026-04-25 20:13:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:36.265132037Z 2026-04-25 20:13:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:41.265574486Z 2026-04-25 20:13:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:46.265789369Z 2026-04-25 20:13:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:51.266217496Z 2026-04-25 20:13:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:13:56.269161806Z 2026-04-25 20:13:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:14:01.26630324Z 2026-04-25 20:14:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:14:06.265913875Z 2026-04-25 20:14:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:14:11.265728685Z 2026-04-25 20:14:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.88"}
2026-04-25T20:18:14.55493141Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T20:18:14.922159966Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T20:18:55.421747593Z 2026-04-25 20:18:55 [error] All Gemini models failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-25T20:18:55.421770854Z Error: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-25T20:18:55.421776584Z     at makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:257:19)
2026-04-25T20:18:55.421781864Z     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
2026-04-25T20:18:55.421787354Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:614:22)
2026-04-25T20:18:55.421792104Z     at async AIService.generateResponse (/opt/render/project/src/backend/dist/modules/whatsapp/services/aiService.js:52:32)
2026-04-25T20:18:55.421796754Z     at async Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:279:34)
2026-04-25T20:18:55.42208917Z 2026-04-25 20:18:55 [info] [tts] synthesizing (hi, 230 chars)
2026-04-25T20:18:55.422563489Z 2026-04-25 20:18:55 [error] [wa] failed to send post-call voice note Cannot read properties of undefined (reading 'getAllAudioUrls')
2026-04-25T20:18:55.422576959Z TypeError: Cannot read properties of undefined (reading 'getAllAudioUrls')
2026-04-25T20:18:55.422581449Z     at fetchMp3Chunks (/opt/render/project/src/backend/dist/modules/whatsapp/services/ttsService.js:18:43)
2026-04-25T20:18:55.42259942Z     at synthesizeVoiceNote (/opt/render/project/src/backend/dist/modules/whatsapp/services/ttsService.js:86:23)
2026-04-25T20:18:55.42260387Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:288:89)
2026-04-25T20:18:55.42260798Z     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
2026-04-25T20:18:59.504301612Z 2026-04-25 20:18:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:04.50833495Z 2026-04-25 20:19:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:04.906714063Z 2026-04-25 20:19:04 [info] Client disconnected: U6eRUeRJuKlGiU1mAAAD
2026-04-25T20:19:06.071989461Z 2026-04-25 20:19:06 [info] Client disconnected: 21dyYhj-v2kjUq5EAAAF
2026-04-25T20:19:09.509024122Z 2026-04-25 20:19:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:14.503670667Z 2026-04-25 20:19:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:14.504628106Z 2026-04-25 20:19:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:19.504029501Z 2026-04-25 20:19:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:24.503607258Z 2026-04-25 20:19:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:26.145826869Z 2026-04-25 20:19:26 [warn] Model gemini-2.5-flash failed, trying next fallback...
2026-04-25T20:19:29.505131371Z 2026-04-25 20:19:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:30.718386354Z 2026-04-25 20:19:30 [warn] Model gemini-2.5-flash-preview-05-20 failed, trying next fallback...
2026-04-25T20:19:30.782171153Z 2026-04-25 20:19:30 [warn] Model gemini-2.0-flash failed, trying next fallback...
2026-04-25T20:19:30.847776457Z 2026-04-25 20:19:30 [warn] Model gemini-2.0-flash-lite failed, trying next fallback...
2026-04-25T20:19:30.914117344Z 2026-04-25 20:19:30 [warn] Model gemini-1.5-flash-latest failed, trying next fallback...
2026-04-25T20:19:30.914138375Z 2026-04-25 20:19:30 [error] All Gemini models failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-25T20:19:30.914149055Z Error: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-25T20:19:30.914154445Z     at makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:257:19)
2026-04-25T20:19:30.914190356Z     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
2026-04-25T20:19:30.914195826Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:614:22)
2026-04-25T20:19:30.914214966Z     at async AIService.generateResponse (/opt/render/project/src/backend/dist/modules/whatsapp/services/aiService.js:52:32)
2026-04-25T20:19:30.914219046Z     at async BaileyService.handleIncomingMessage (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:417:41)
2026-04-25T20:19:30.914222056Z     at async EventEmitter.<anonymous> (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:238:17)
2026-04-25T20:19:30.914340179Z 2026-04-25 20:19:30 [error] [wa] text reply error Failed to generate AI response
2026-04-25T20:19:30.914350909Z Error: Failed to generate AI response
2026-04-25T20:19:30.914355189Z     at AIService.generateResponse (/opt/render/project/src/backend/dist/modules/whatsapp/services/aiService.js:66:27)
2026-04-25T20:19:30.914359349Z     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
2026-04-25T20:19:30.914362099Z     at async BaileyService.handleIncomingMessage (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:417:41)
2026-04-25T20:19:30.914364189Z     at async EventEmitter.<anonymous> (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:238:17)
2026-04-25T20:19:34.504301827Z 2026-04-25 20:19:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:39.503752858Z 2026-04-25 20:19:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:42.827158291Z 2026-04-25 20:19:42 [info] [wa] incoming video call from 35635846971580@lid
2026-04-25T20:19:43.055990394Z 2026-04-25 20:19:43 [info] Call saved: 42eb8053-f2d7-4859-a9ff-cbdbdb325008
2026-04-25T20:19:44.504049873Z 2026-04-25 20:19:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:44.504615224Z 2026-04-25 20:19:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:44.641389747Z 2026-04-25 20:19:44 [warn] Model gemini-2.5-flash failed, trying next fallback...
2026-04-25T20:19:44.861616275Z 2026-04-25 20:19:44 [warn] Model gemini-2.5-flash-preview-05-20 failed, trying next fallback...
2026-04-25T20:19:44.926384143Z 2026-04-25 20:19:44 [warn] Model gemini-2.0-flash failed, trying next fallback...
2026-04-25T20:19:45.141041255Z 2026-04-25 20:19:45 [warn] Model gemini-2.0-flash-lite failed, trying next fallback...
2026-04-25T20:19:45.198082334Z 2026-04-25 20:19:45 [warn] Model gemini-1.5-flash-latest failed, trying next fallback...
2026-04-25T20:19:45.198434411Z 2026-04-25 20:19:45 [error] All Gemini models failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-25T20:19:45.198443101Z Error: [400 Bad Request] API key not valid. Please pass a valid API key. [{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"generativelanguage.googleapis.com"}},{"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-US","message":"API key not valid. Please pass a valid API key."}]
2026-04-25T20:19:45.198447452Z     at makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:257:19)
2026-04-25T20:19:45.198451321Z     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
2026-04-25T20:19:45.198819648Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:614:22)
2026-04-25T20:19:45.198827639Z     at async AIService.generateResponse (/opt/render/project/src/backend/dist/modules/whatsapp/services/aiService.js:52:32)
2026-04-25T20:19:45.198830889Z     at async Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:279:34)
2026-04-25T20:19:45.198834699Z 2026-04-25 20:19:45 [info] [tts] synthesizing (hi, 230 chars)
2026-04-25T20:19:45.198844929Z 2026-04-25 20:19:45 [error] [wa] failed to send post-call voice note Cannot read properties of undefined (reading 'getAllAudioUrls')
2026-04-25T20:19:45.198849679Z TypeError: Cannot read properties of undefined (reading 'getAllAudioUrls')
2026-04-25T20:19:45.198853099Z     at fetchMp3Chunks (/opt/render/project/src/backend/dist/modules/whatsapp/services/ttsService.js:18:43)
2026-04-25T20:19:45.198856069Z     at synthesizeVoiceNote (/opt/render/project/src/backend/dist/modules/whatsapp/services/ttsService.js:86:23)
2026-04-25T20:19:45.198859009Z     at Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:288:89)
2026-04-25T20:19:45.19886424Z     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
2026-04-25T20:19:49.50345009Z 2026-04-25 20:19:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:54.504535168Z 2026-04-25 20:19:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:19:59.503535595Z 2026-04-25 20:19:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:01.327554746Z 2026-04-25 20:20:01 [info] Client connected: JemqHtiraFVHkVvjAAAH
2026-04-25T20:20:01.590935669Z 2026-04-25 20:20:01 [info] Client disconnected: JemqHtiraFVHkVvjAAAH
2026-04-25T20:20:02.211265511Z 2026-04-25 20:20:02 [info] {"method":"GET","path":"/messages","status":200,"duration":"100ms","ip":"::1"}
2026-04-25T20:20:02.262770366Z 2026-04-25 20:20:02 [info] Client connected: 0PuL7almh7LeDuJrAAAJ
2026-04-25T20:20:02.591469686Z 2026-04-25 20:20:02 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 0PuL7almh7LeDuJrAAAJ
2026-04-25T20:20:03.221643347Z 2026-04-25 20:20:03 [info] Client connected: bRbthECCiWQ-ITuTAAAL
2026-04-25T20:20:03.550571072Z 2026-04-25 20:20:03 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket bRbthECCiWQ-ITuTAAAL
2026-04-25T20:20:04.503835985Z 2026-04-25 20:20:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:05.421481819Z 2026-04-25 20:20:05 [info] Client disconnected: bRbthECCiWQ-ITuTAAAL
2026-04-25T20:20:06.49131222Z 2026-04-25 20:20:06 [info] {"method":"GET","path":"/calls","status":200,"duration":"219ms","ip":"::1"}
2026-04-25T20:20:09.50287585Z 2026-04-25 20:20:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:11.969649602Z 2026-04-25 20:20:11 [info] {"method":"GET","path":"/messages","status":200,"duration":"97ms","ip":"::1"}
2026-04-25T20:20:12.49505311Z 2026-04-25 20:20:12 [info] Client connected: 2h9WJSx93kpTkZsUAAAN
2026-04-25T20:20:12.573886266Z 2026-04-25 20:20:12 [info] Client disconnected: 2h9WJSx93kpTkZsUAAAN
2026-04-25T20:20:13.004929902Z 2026-04-25 20:20:13 [info] {"method":"GET","path":"/","status":200,"duration":"82ms","ip":"::1"}
2026-04-25T20:20:14.505813879Z 2026-04-25 20:20:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:14.505837039Z 2026-04-25 20:20:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:14.623459826Z 2026-04-25 20:20:14 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-25T20:20:14.726852752Z 2026-04-25 20:20:14 [info] {"method":"GET","path":"/messages","status":200,"duration":"92ms","ip":"::1"}
2026-04-25T20:20:14.738576876Z 2026-04-25 20:20:14 [info] {"method":"GET","path":"/calls","status":200,"duration":"102ms","ip":"::1"}
2026-04-25T20:20:15.200260287Z 2026-04-25 20:20:15 [info] Client connected: ZZ69dft-xh_VcQczAAAP
2026-04-25T20:20:15.47939455Z 2026-04-25 20:20:15 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket ZZ69dft-xh_VcQczAAAP
2026-04-25T20:20:19.506313629Z 2026-04-25 20:20:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:24.504159217Z 2026-04-25 20:20:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:29.503019844Z 2026-04-25 20:20:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:34.503964169Z 2026-04-25 20:20:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:39.503247471Z 2026-04-25 20:20:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:44.507479146Z 2026-04-25 20:20:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:44.510184068Z 2026-04-25 20:20:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:49.504793558Z 2026-04-25 20:20:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:54.507337518Z 2026-04-25 20:20:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:20:59.503604578Z 2026-04-25 20:20:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:04.504252429Z 2026-04-25 20:21:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:09.503216157Z 2026-04-25 20:21:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:14.508557306Z 2026-04-25 20:21:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:14.509994594Z 2026-04-25 20:21:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:19.50322836Z 2026-04-25 20:21:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:24.503328216Z 2026-04-25 20:21:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:29.502957522Z 2026-04-25 20:21:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:34.503332169Z 2026-04-25 20:21:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:37.629945374Z 2026-04-25 20:21:37 [info] Client disconnected: 0PuL7almh7LeDuJrAAAJ
2026-04-25T20:21:39.502762199Z 2026-04-25 20:21:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:44.50285488Z 2026-04-25 20:21:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:44.504020212Z 2026-04-25 20:21:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:49.505292254Z 2026-04-25 20:21:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:50.559562852Z 2026-04-25 20:21:50 [info] Client disconnected: ZZ69dft-xh_VcQczAAAP
2026-04-25T20:21:54.506149847Z 2026-04-25 20:21:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:21:59.503557113Z 2026-04-25 20:21:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:04.502739341Z 2026-04-25 20:22:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:05.496986212Z 2026-04-25 20:22:05 [error] Route / not found
2026-04-25T20:22:05.497010012Z Error: Route / not found
2026-04-25T20:22:05.497015663Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T20:22:05.497020863Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:22:05.497025993Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:22:05.497030523Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:22:05.497034623Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T20:22:05.497038603Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T20:22:05.497042903Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T20:22:05.497047043Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:22:05.497051113Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:22:05.497054903Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:22:05.497778597Z 2026-04-25 20:22:05 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T20:22:07.194446934Z 2026-04-25 20:22:07 [error] Route /favicon.ico not found
2026-04-25T20:22:07.194471295Z Error: Route /favicon.ico not found
2026-04-25T20:22:07.194476955Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T20:22:07.194482785Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:22:07.194488555Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:22:07.194493935Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:22:07.194498435Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T20:22:07.194502666Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T20:22:07.194507456Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T20:22:07.194512596Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:22:07.194517296Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:22:07.194521536Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:22:07.195462414Z 2026-04-25 20:22:07 [info] {"method":"GET","path":"/favicon.ico","status":404,"duration":"2ms","ip":"::1"}
2026-04-25T20:22:07.711518631Z 2026-04-25 20:22:07 [info] Client connected: T7eqGINL3Jgjp3V_AAAR
2026-04-25T20:22:07.990606001Z 2026-04-25 20:22:07 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket T7eqGINL3Jgjp3V_AAAR
2026-04-25T20:22:09.504062439Z 2026-04-25 20:22:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:10.024549311Z 2026-04-25 20:22:10 [info] Client connected: dDEOWgpUOkSTscNfAAAT
2026-04-25T20:22:13.717751912Z 2026-04-25 20:22:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-25T20:22:14.503996749Z 2026-04-25 20:22:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:14.505885896Z 2026-04-25 20:22:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:17.416658322Z 2026-04-25 20:22:17 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket dDEOWgpUOkSTscNfAAAT
2026-04-25T20:22:19.507535967Z 2026-04-25 20:22:19 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:20.421183638Z 2026-04-25 20:22:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T20:22:24.50563845Z 2026-04-25 20:22:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:24.55383002Z 2026-04-25 20:22:24 [info] Client disconnected: T7eqGINL3Jgjp3V_AAAR
2026-04-25T20:22:24.568923409Z 2026-04-25 20:22:24 [info] Client disconnected: dDEOWgpUOkSTscNfAAAT
2026-04-25T20:22:29.503973067Z 2026-04-25 20:22:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:34.503761599Z 2026-04-25 20:22:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:39.504759624Z 2026-04-25 20:22:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:43.821930306Z 2026-04-25 20:22:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T20:22:43.937741128Z 2026-04-25 20:22:43 [info] {"method":"GET","path":"/messages","status":200,"duration":"120ms","ip":"::1"}
2026-04-25T20:22:43.962757546Z 2026-04-25 20:22:43 [info] {"method":"GET","path":"/calls","status":200,"duration":"115ms","ip":"::1"}
2026-04-25T20:22:44.199763933Z 2026-04-25 20:22:44 [info] Client connected: RwnLYiypob1I3ECFAAAV
2026-04-25T20:22:44.489971765Z 2026-04-25 20:22:44 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket RwnLYiypob1I3ECFAAAV
2026-04-25T20:22:44.505336499Z 2026-04-25 20:22:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:44.506898188Z 2026-04-25 20:22:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:45.22690522Z 2026-04-25 20:22:45 [info] Client connected: -va1mbphef2Ir02KAAAX
2026-04-25T20:22:45.554799432Z 2026-04-25 20:22:45 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket -va1mbphef2Ir02KAAAX
2026-04-25T20:22:49.504786211Z 2026-04-25 20:22:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:54.504176841Z 2026-04-25 20:22:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:22:59.503686172Z 2026-04-25 20:22:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:04.504757101Z 2026-04-25 20:23:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:09.502759991Z 2026-04-25 20:23:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:14.503464141Z 2026-04-25 20:23:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:14.504313787Z 2026-04-25 20:23:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:19.504827342Z 2026-04-25 20:23:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:24.505619941Z 2026-04-25 20:23:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:29.503003054Z 2026-04-25 20:23:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:34.505761668Z 2026-04-25 20:23:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:39.503190469Z 2026-04-25 20:23:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:44.51164361Z 2026-04-25 20:23:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:44.511668921Z 2026-04-25 20:23:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:49.503061964Z 2026-04-25 20:23:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:54.504455847Z 2026-04-25 20:23:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:23:59.503886452Z 2026-04-25 20:23:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:04.508842721Z 2026-04-25 20:24:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:09.505791286Z 2026-04-25 20:24:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:09.555155038Z 2026-04-25 20:24:09 [info] Client disconnected: RwnLYiypob1I3ECFAAAV
2026-04-25T20:24:09.590525524Z 2026-04-25 20:24:09 [info] Client disconnected: -va1mbphef2Ir02KAAAX
2026-04-25T20:24:14.50486625Z 2026-04-25 20:24:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:14.50488928Z 2026-04-25 20:24:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:19.505430372Z 2026-04-25 20:24:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:24.505762698Z 2026-04-25 20:24:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:29.503069564Z 2026-04-25 20:24:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:34.507831042Z 2026-04-25 20:24:34 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:39.502497596Z 2026-04-25 20:24:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:44.503079121Z 2026-04-25 20:24:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:44.504473178Z 2026-04-25 20:24:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:49.505756526Z 2026-04-25 20:24:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:54.503493195Z 2026-04-25 20:24:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:24:59.503059838Z 2026-04-25 20:24:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:04.505765559Z 2026-04-25 20:25:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:09.503059386Z 2026-04-25 20:25:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:14.503003552Z 2026-04-25 20:25:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:14.503757106Z 2026-04-25 20:25:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:19.503837234Z 2026-04-25 20:25:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:24.50337902Z 2026-04-25 20:25:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:29.5031661Z 2026-04-25 20:25:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:34.503334715Z 2026-04-25 20:25:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:39.503687993Z 2026-04-25 20:25:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:44.504820155Z 2026-04-25 20:25:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:44.505808404Z 2026-04-25 20:25:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:49.504406386Z 2026-04-25 20:25:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:54.504367883Z 2026-04-25 20:25:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:25:59.503770788Z 2026-04-25 20:25:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:04.506450034Z 2026-04-25 20:26:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:09.504175185Z 2026-04-25 20:26:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:14.505763078Z 2026-04-25 20:26:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:14.506439451Z 2026-04-25 20:26:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:19.503240402Z 2026-04-25 20:26:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:24.503751202Z 2026-04-25 20:26:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:29.503526687Z 2026-04-25 20:26:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:34.512450236Z 2026-04-25 20:26:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:39.505225865Z 2026-04-25 20:26:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:44.503714022Z 2026-04-25 20:26:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:44.504598719Z 2026-04-25 20:26:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:49.503182847Z 2026-04-25 20:26:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:54.506235769Z 2026-04-25 20:26:54 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:26:59.504223191Z 2026-04-25 20:26:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:04.504781333Z 2026-04-25 20:27:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:09.504367765Z 2026-04-25 20:27:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:14.504787612Z 2026-04-25 20:27:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:14.50521226Z 2026-04-25 20:27:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:19.503650558Z 2026-04-25 20:27:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:22.596326616Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T20:27:22.66584956Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T20:27:24.503056833Z 2026-04-25 20:27:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:29.503410876Z 2026-04-25 20:27:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:34.507160801Z 2026-04-25 20:27:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:35.83321801Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T20:27:36.941457681Z 
2026-04-25T20:27:36.941491601Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T20:27:36.941496431Z > node dist/index.js
2026-04-25T20:27:36.941498591Z 
2026-04-25T20:27:39.503217179Z 2026-04-25 20:27:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
2026-04-25T20:27:41.636890736Z 2026-04-25 20:27:41 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T20:27:42.441882354Z 2026-04-25 20:27:42 [info] Firestore initialized successfully
2026-04-25T20:27:42.53306143Z 2026-04-25 20:27:42 [info] ✅ Server running on http://localhost:10000
2026-04-25T20:27:42.533210163Z 2026-04-25 20:27:42 [info] Environment: production
2026-04-25T20:27:42.533396467Z 2026-04-25 20:27:42 [info] API URL: http://localhost:5000
2026-04-25T20:27:42.533605621Z 2026-04-25 20:27:42 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T20:27:42.935416001Z 2026-04-25 20:27:42 [error] Route / not found
2026-04-25T20:27:42.935440201Z Error: Route / not found
2026-04-25T20:27:42.935447341Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T20:27:42.935454582Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:27:42.935463062Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:27:42.935468842Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:27:42.935472482Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T20:27:42.935476052Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T20:27:42.935479582Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T20:27:42.935483062Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:27:42.935486662Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:27:42.935490092Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:27:42.939427122Z 2026-04-25 20:27:42 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-25T20:27:43.024562885Z 2026-04-25 20:27:43 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.202"}
2026-04-25T20:27:43.026574266Z 2026-04-25 20:27:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.202"}
2026-04-25T20:27:43.737384554Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T20:27:43.803752567Z 2026-04-25 20:27:43 [error] Route / not found
2026-04-25T20:27:43.803771498Z Error: Route / not found
2026-04-25T20:27:43.803776408Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T20:27:43.803781158Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:27:43.803786138Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:27:43.803792388Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:27:43.803796848Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T20:27:43.803801188Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T20:27:43.803805708Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T20:27:43.803810059Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T20:27:43.803835809Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T20:27:43.803838359Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T20:27:43.804615755Z 2026-04-25 20:27:43 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T20:27:43.877894989Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:27:43.881023002Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T20:27:43.883162532Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:27:43.886126452Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T20:27:43.889707706Z [0;32m[1m==> [0m[1m[0m
2026-04-25T20:27:43.891773424Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T20:27:44.50683589Z 2026-04-25 20:27:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.68"}
```
