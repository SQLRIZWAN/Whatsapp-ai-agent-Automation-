# Render Deploy Diagnostics

Run: 24939118369
Commit: 22384c474322ad338523d6f74920b82d596cac4e
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mhjb6gvqtc73abeft0

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
  "updatedAt": "2026-04-25T19:47:06.273976Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mhjb6gvqtc73abeft0",
  "commit": {
    "id": "22384c474322ad338523d6f74920b82d596cac4e",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:46663/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-25T19:44:29Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T19:44:44.244779Z",
  "updatedAt": "2026-04-25T19:47:06.272661Z",
  "startedAt": "2026-04-25T19:44:44.17832Z",
  "finishedAt": "2026-04-25T19:47:06.272293Z"
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
```

## App logs (last 4h)
```
2026-04-25T19:23:57.637824164Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:23:57.639901463Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:23:57.641824448Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T19:23:57.644024979Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:23:57.645971365Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:23:58.973442077Z 2026-04-25 19:23:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:01.456200892Z 2026-04-25 19:24:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:03.972838202Z 2026-04-25 19:24:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:06.456370239Z 2026-04-25 19:24:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:06.457040752Z 2026-04-25 19:24:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:08.972330163Z 2026-04-25 19:24:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:11.455919866Z 2026-04-25 19:24:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:13.972610104Z 2026-04-25 19:24:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:16.455654626Z 2026-04-25 19:24:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:18.972417804Z 2026-04-25 19:24:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:21.455607493Z 2026-04-25 19:24:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:23.97294708Z 2026-04-25 19:24:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:26.455221571Z 2026-04-25 19:24:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:28.972223154Z 2026-04-25 19:24:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:31.455237Z 2026-04-25 19:24:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:33.972825173Z 2026-04-25 19:24:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:36.455110106Z 2026-04-25 19:24:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:36.455884247Z 2026-04-25 19:24:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:38.97217928Z 2026-04-25 19:24:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:41.455483921Z 2026-04-25 19:24:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:43.972492749Z 2026-04-25 19:24:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:46.455211452Z 2026-04-25 19:24:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:48.972824328Z 2026-04-25 19:24:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:51.456209623Z 2026-04-25 19:24:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:24:53.973065821Z 2026-04-25 19:24:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:24:56.455253349Z 2026-04-25 19:24:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:01.455777Z 2026-04-25 19:25:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:06.455478395Z 2026-04-25 19:25:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:06.456819511Z 2026-04-25 19:25:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:11.455503934Z 2026-04-25 19:25:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:16.455198067Z 2026-04-25 19:25:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:21.455469583Z 2026-04-25 19:25:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:26.455320114Z 2026-04-25 19:25:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:31.455068307Z 2026-04-25 19:25:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:36.45597434Z 2026-04-25 19:25:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:36.456952877Z 2026-04-25 19:25:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:41.455444208Z 2026-04-25 19:25:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:46.455114141Z 2026-04-25 19:25:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:51.457429371Z 2026-04-25 19:25:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:25:56.455025757Z 2026-04-25 19:25:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:01.45600413Z 2026-04-25 19:26:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:06.457407684Z 2026-04-25 19:26:06 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:06.460723415Z 2026-04-25 19:26:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:11.455814151Z 2026-04-25 19:26:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:16.455082155Z 2026-04-25 19:26:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:21.455084515Z 2026-04-25 19:26:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:26.454971115Z 2026-04-25 19:26:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:31.454943151Z 2026-04-25 19:26:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:36.455193057Z 2026-04-25 19:26:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:36.456044504Z 2026-04-25 19:26:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:41.455459883Z 2026-04-25 19:26:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:46.455240729Z 2026-04-25 19:26:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:51.456035665Z 2026-04-25 19:26:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:26:56.45672015Z 2026-04-25 19:26:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:01.456633774Z 2026-04-25 19:27:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:06.456378983Z 2026-04-25 19:27:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:06.456855541Z 2026-04-25 19:27:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:11.455445757Z 2026-04-25 19:27:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:16.455449224Z 2026-04-25 19:27:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:21.455083141Z 2026-04-25 19:27:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:26.456491606Z 2026-04-25 19:27:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:31.454749922Z 2026-04-25 19:27:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:36.461170659Z 2026-04-25 19:27:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:36.464430345Z 2026-04-25 19:27:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:41.454884915Z 2026-04-25 19:27:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:46.45495309Z 2026-04-25 19:27:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:50.532656216Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T19:27:50.617506532Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T19:27:51.455057666Z 2026-04-25 19:27:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:27:56.455245738Z 2026-04-25 19:27:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:01.455162367Z 2026-04-25 19:28:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:06.455414681Z 2026-04-25 19:28:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:06.456134478Z 2026-04-25 19:28:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:11.456208897Z 2026-04-25 19:28:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:12.702007148Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:28:12.702011508Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:28:12.702018388Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:28:12.702022168Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:28:12.702025879Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:28:12.702046389Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:28:12.702050769Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:28:12.702054229Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:28:12.702057769Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:28:12.702061479Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:28:12.708523809Z 2026-04-25 19:28:12 [info] {"method":"HEAD","path":"/","status":404,"duration":"8ms","ip":"::1"}
2026-04-25T19:28:16.455021716Z 2026-04-25 19:28:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:20.900341188Z 2026-04-25 19:28:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:20.901786852Z 2026-04-25 19:28:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:21.454973203Z 2026-04-25 19:28:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:22.102729797Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T19:28:22.250873884Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:28:22.269595982Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:28:22.278358627Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:28:22.287328597Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T19:28:22.29513897Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:28:22.302487882Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:28:22.334989242Z 2026-04-25 19:28:22 [error] Route / not found
2026-04-25T19:28:22.335007023Z Error: Route / not found
2026-04-25T19:28:22.335011652Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:28:22.335015413Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:28:22.335018893Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:28:22.335022403Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:28:22.335025363Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:28:22.335028253Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:28:22.335031133Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:28:22.335033973Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:28:22.335047403Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:28:22.335049293Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:28:22.33576572Z 2026-04-25 19:28:22 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T19:28:25.899605958Z 2026-04-25 19:28:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:26.455095293Z 2026-04-25 19:28:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:30.898624323Z 2026-04-25 19:28:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:31.45482792Z 2026-04-25 19:28:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:35.898497316Z 2026-04-25 19:28:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:36.456393441Z 2026-04-25 19:28:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:40.898434041Z 2026-04-25 19:28:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:41.454961394Z 2026-04-25 19:28:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:45.899813478Z 2026-04-25 19:28:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:46.454732361Z 2026-04-25 19:28:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:50.899004605Z 2026-04-25 19:28:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:50.900330306Z 2026-04-25 19:28:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:51.45492334Z 2026-04-25 19:28:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:55.898314014Z 2026-04-25 19:28:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:28:56.454918273Z 2026-04-25 19:28:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:29:00.898129334Z 2026-04-25 19:29:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:01.455020882Z 2026-04-25 19:29:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:29:05.898448436Z 2026-04-25 19:29:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:06.455484479Z 2026-04-25 19:29:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:29:10.898479851Z 2026-04-25 19:29:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:11.454985129Z 2026-04-25 19:29:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:29:15.898432173Z 2026-04-25 19:29:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:16.455004968Z 2026-04-25 19:29:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:29:20.898669062Z 2026-04-25 19:29:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:20.89944979Z 2026-04-25 19:29:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:25.897896777Z 2026-04-25 19:29:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:30.898161256Z 2026-04-25 19:29:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:35.898420755Z 2026-04-25 19:29:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:40.897961726Z 2026-04-25 19:29:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:45.898528411Z 2026-04-25 19:29:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:50.89843571Z 2026-04-25 19:29:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:50.899123036Z 2026-04-25 19:29:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:29:55.8979714Z 2026-04-25 19:29:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:00.8996703Z 2026-04-25 19:30:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:05.898209197Z 2026-04-25 19:30:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:10.899949447Z 2026-04-25 19:30:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:15.899486346Z 2026-04-25 19:30:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:20.898165604Z 2026-04-25 19:30:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:20.898848Z 2026-04-25 19:30:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:25.898353398Z 2026-04-25 19:30:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:30.898160302Z 2026-04-25 19:30:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:35.898737013Z 2026-04-25 19:30:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:40.898805173Z 2026-04-25 19:30:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:45.900457798Z 2026-04-25 19:30:45 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:50.897996909Z 2026-04-25 19:30:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:50.898696955Z 2026-04-25 19:30:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:30:55.898352724Z 2026-04-25 19:30:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:00.898521444Z 2026-04-25 19:31:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:05.897903306Z 2026-04-25 19:31:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:10.898011255Z 2026-04-25 19:31:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:15.898994093Z 2026-04-25 19:31:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:20.89862059Z 2026-04-25 19:31:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:20.899283345Z 2026-04-25 19:31:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:25.897788746Z 2026-04-25 19:31:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:30.89779535Z 2026-04-25 19:31:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:35.898151443Z 2026-04-25 19:31:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:40.898693479Z 2026-04-25 19:31:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:45.899253836Z 2026-04-25 19:31:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:50.897746224Z 2026-04-25 19:31:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:50.898487641Z 2026-04-25 19:31:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:31:55.897981893Z 2026-04-25 19:31:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:00.898468706Z 2026-04-25 19:32:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:05.898652502Z 2026-04-25 19:32:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:10.898721686Z 2026-04-25 19:32:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:15.89837987Z 2026-04-25 19:32:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:20.898182566Z 2026-04-25 19:32:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:20.898838972Z 2026-04-25 19:32:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:25.898082675Z 2026-04-25 19:32:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:30.898089516Z 2026-04-25 19:32:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:35.897724458Z 2026-04-25 19:32:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:40.898012404Z 2026-04-25 19:32:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:45.898911745Z 2026-04-25 19:32:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:50.898072315Z 2026-04-25 19:32:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:50.898670329Z 2026-04-25 19:32:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:32:55.898246428Z 2026-04-25 19:32:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:00.897755295Z 2026-04-25 19:33:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:05.897824635Z 2026-04-25 19:33:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:10.897869825Z 2026-04-25 19:33:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:15.898481636Z 2026-04-25 19:33:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:17.312631977Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T19:33:17.444536638Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T19:33:20.89834708Z 2026-04-25 19:33:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:20.899074457Z 2026-04-25 19:33:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:25.898315537Z 2026-04-25 19:33:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:30.899799908Z 2026-04-25 19:33:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:35.897977262Z 2026-04-25 19:33:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:40.905613034Z 2026-04-25 19:33:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:45.897781879Z 2026-04-25 19:33:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:50.898670745Z 2026-04-25 19:33:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:50.899338471Z 2026-04-25 19:33:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:33:55.898427135Z 2026-04-25 19:33:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:00.898168404Z 2026-04-25 19:34:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:05.898445774Z 2026-04-25 19:34:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:10.898289865Z 2026-04-25 19:34:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:15.898078614Z 2026-04-25 19:34:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:20.897692179Z 2026-04-25 19:34:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:20.898260872Z 2026-04-25 19:34:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:25.898600053Z 2026-04-25 19:34:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:30.898041523Z 2026-04-25 19:34:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:35.898295201Z 2026-04-25 19:34:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:40.897853433Z 2026-04-25 19:34:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:45.898830058Z 2026-04-25 19:34:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:50.898613875Z 2026-04-25 19:34:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:50.899445704Z 2026-04-25 19:34:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:34:55.898167846Z 2026-04-25 19:34:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:00.897699946Z 2026-04-25 19:35:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:05.897737347Z 2026-04-25 19:35:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:10.897867501Z 2026-04-25 19:35:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:15.898367112Z 2026-04-25 19:35:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:20.899012277Z 2026-04-25 19:35:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:20.903001509Z 2026-04-25 19:35:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:25.898703559Z 2026-04-25 19:35:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:30.898120455Z 2026-04-25 19:35:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:35.898972713Z 2026-04-25 19:35:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:40.897989939Z 2026-04-25 19:35:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:45.898177882Z 2026-04-25 19:35:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:50.898814514Z 2026-04-25 19:35:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:50.899729005Z 2026-04-25 19:35:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:35:55.897735627Z 2026-04-25 19:35:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:00.898315898Z 2026-04-25 19:36:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:05.897608538Z 2026-04-25 19:36:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:10.89827822Z 2026-04-25 19:36:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:15.898074462Z 2026-04-25 19:36:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:20.899694485Z 2026-04-25 19:36:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:20.905715304Z 2026-04-25 19:36:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:25.898088424Z 2026-04-25 19:36:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:30.901937398Z 2026-04-25 19:36:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:35.897822218Z 2026-04-25 19:36:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:40.898734724Z 2026-04-25 19:36:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:45.897977281Z 2026-04-25 19:36:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:50.897924574Z 2026-04-25 19:36:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:50.898766003Z 2026-04-25 19:36:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:36:55.898421239Z 2026-04-25 19:36:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:00.907216895Z 2026-04-25 19:37:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:05.897968665Z 2026-04-25 19:37:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:37:10.897738313Z 2026-04-25 19:37:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
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
2026-04-25T19:39:36.140589379Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T19:39:37.333280719Z 
2026-04-25T19:39:37.333356313Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T19:39:37.333363544Z > node dist/index.js
2026-04-25T19:39:37.333365964Z 
2026-04-25T19:39:40.898463427Z 2026-04-25 19:39:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:42.042445827Z 2026-04-25 19:39:42 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T19:39:42.937236523Z 2026-04-25 19:39:42 [info] Firestore initialized successfully
2026-04-25T19:39:43.232056899Z 2026-04-25 19:39:43 [info] ✅ Server running on http://localhost:10000
2026-04-25T19:39:43.232192817Z 2026-04-25 19:39:43 [info] Environment: production
2026-04-25T19:39:43.232492705Z 2026-04-25 19:39:43 [info] API URL: http://localhost:5000
2026-04-25T19:39:43.232660606Z 2026-04-25 19:39:43 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T19:39:44.093219813Z 2026-04-25 19:39:44 [error] Route / not found
2026-04-25T19:39:44.093244704Z Error: Route / not found
2026-04-25T19:39:44.093248814Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:39:44.093251984Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:39:44.093256595Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:39:44.093260235Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:39:44.093262915Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:39:44.093265475Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:39:44.093267876Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:39:44.093270406Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:39:44.093272976Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:39:44.093275326Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:39:44.093869632Z 2026-04-25 19:39:44 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-25T19:39:45.898778158Z 2026-04-25 19:39:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:50.900047285Z 2026-04-25 19:39:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:50.900930706Z 2026-04-25 19:39:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:52.965065419Z 2026-04-25 19:39:52 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:39:52.966475015Z 2026-04-25 19:39:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:39:53.847604794Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T19:39:53.955943682Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:39:53.958453271Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:39:53.96055703Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:39:53.962838923Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T19:39:53.965233029Z [0;32m[1m==> [0m[1m[0m
2026-04-25T19:39:53.967533203Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T19:39:54.032605927Z 2026-04-25 19:39:54 [error] Route / not found
2026-04-25T19:39:54.032621437Z Error: Route / not found
2026-04-25T19:39:54.032626818Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:39:54.032631848Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:39:54.032636838Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:39:54.032641899Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:39:54.032646629Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:39:54.032651209Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:39:54.032655699Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:39:54.03266045Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:39:54.032673351Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:39:54.032676741Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:39:54.033351482Z 2026-04-25 19:39:54 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T19:39:55.897936811Z 2026-04-25 19:39:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:39:57.97042513Z 2026-04-25 19:39:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:00.898014336Z 2026-04-25 19:40:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:02.9702259Z 2026-04-25 19:40:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:05.898371737Z 2026-04-25 19:40:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:07.968382648Z 2026-04-25 19:40:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:10.898442561Z 2026-04-25 19:40:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:12.967332682Z 2026-04-25 19:40:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:15.898058514Z 2026-04-25 19:40:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:17.970660849Z 2026-04-25 19:40:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:20.89779534Z 2026-04-25 19:40:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:22.963677507Z 2026-04-25 19:40:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:22.966162778Z 2026-04-25 19:40:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:25.898571Z 2026-04-25 19:40:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:27.967133118Z 2026-04-25 19:40:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T19:40:30.89804968Z 2026-04-25 19:40:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.22"}
2026-04-25T19:40:32.967428224Z 2026-04-25 19:40:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.32"}
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
```
