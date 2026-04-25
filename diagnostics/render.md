# Render Deploy Diagnostics

Run: 24938988087
Commit: 9558d142f6cadffc7a4db23559b92095079245cb
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mhg0qqqhas73fckhdg

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
  "updatedAt": "2026-04-25T19:39:53.741494Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mhg0qqqhas73fckhdg",
  "commit": {
    "id": "9558d142f6cadffc7a4db23559b92095079245cb",
    "message": "fix: use jq instead of heredoc for project.json to avoid YAML parse error",
    "createdAt": "2026-04-25T19:37:28Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T19:37:39.767162Z",
  "updatedAt": "2026-04-25T19:39:53.740373Z",
  "startedAt": "2026-04-25T19:37:39.718865Z",
  "finishedAt": "2026-04-25T19:39:53.740216Z"
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
```

## App logs (last 4h)
```
2026-04-25T16:12:27.64465649Z 2026-04-25 16:12:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:27.653596836Z 2026-04-25 16:12:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:32.654475124Z 2026-04-25 16:12:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:37.655300502Z 2026-04-25 16:12:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:42.661033562Z 2026-04-25 16:12:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:47.654453819Z 2026-04-25 16:12:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:52.65496425Z 2026-04-25 16:12:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:57.646391482Z 2026-04-25 16:12:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:57.655109422Z 2026-04-25 16:12:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:02.654072098Z 2026-04-25 16:13:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:07.654171919Z 2026-04-25 16:13:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:12.654770342Z 2026-04-25 16:13:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:17.654383073Z 2026-04-25 16:13:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:22.655024518Z 2026-04-25 16:13:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:27.644271121Z 2026-04-25 16:13:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:27.65468501Z 2026-04-25 16:13:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:32.655016109Z 2026-04-25 16:13:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:37.654399885Z 2026-04-25 16:13:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:42.654487718Z 2026-04-25 16:13:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:47.655919742Z 2026-04-25 16:13:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:52.654668554Z 2026-04-25 16:13:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:57.644807619Z 2026-04-25 16:13:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:13:57.653922458Z 2026-04-25 16:13:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:02.65435957Z 2026-04-25 16:14:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:07.654624517Z 2026-04-25 16:14:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:12.654846954Z 2026-04-25 16:14:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:17.654370616Z 2026-04-25 16:14:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:22.654398899Z 2026-04-25 16:14:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:27.654894232Z 2026-04-25 16:14:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:32.654054835Z 2026-04-25 16:14:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:37.656053624Z 2026-04-25 16:14:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:42.654339377Z 2026-04-25 16:14:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:47.654280579Z 2026-04-25 16:14:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:52.654155019Z 2026-04-25 16:14:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:14:57.654334927Z 2026-04-25 16:14:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:15:02.654190347Z 2026-04-25 16:15:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:15:07.65457499Z 2026-04-25 16:15:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T19:21:23.557430436Z 2026-04-25 19:21:23 [info] Firestore initialized successfully
2026-04-25T19:21:23.561201799Z 2026-04-25 19:21:23 [info] ✅ Server running on http://localhost:10000
2026-04-25T19:21:23.561381521Z 2026-04-25 19:21:23 [info] Environment: production
2026-04-25T19:21:23.561533401Z 2026-04-25 19:21:23 [info] API URL: http://localhost:5000
2026-04-25T19:21:23.652215663Z 2026-04-25 19:21:23 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T19:21:24.066485312Z 2026-04-25 19:21:24 [info] {"method":"GET","path":"/health","status":200,"duration":"5ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:21:24.153327425Z 2026-04-25 19:21:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:21:27.759974385Z 2026-04-25 19:21:27 [info] Client connected: wii9M1GGNbSrFp3NAAAB
2026-04-25T19:21:27.761644483Z 2026-04-25 19:21:27 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-25T19:21:28.033535408Z 2026-04-25 19:21:28 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket wii9M1GGNbSrFp3NAAAB
2026-04-25T19:21:28.136917541Z 2026-04-25 19:21:28 [info] Client connected: yaLihxMOoN56W01sAAAD
2026-04-25T19:21:28.228876755Z 2026-04-25 19:21:28 [info] {"method":"GET","path":"/messages","status":200,"duration":"2824ms","ip":"::1"}
2026-04-25T19:21:28.321696245Z 2026-04-25 19:21:28 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-25T19:21:28.955334914Z 2026-04-25 19:21:28 [info] {"method":"GET","path":"/calls","status":200,"duration":"1190ms","ip":"::1"}
2026-04-25T19:21:28.957750641Z 2026-04-25 19:21:28 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket yaLihxMOoN56W01sAAAD
2026-04-25T19:21:29.054063296Z 2026-04-25 19:21:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:21:29.156015847Z 2026-04-25 19:21:29 [info] [wa] using WA web version 2.3000.1035194821
2026-04-25T19:21:29.453603383Z 2026-04-25 19:21:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1693ms","ip":"::1"}
2026-04-25T19:21:29.780134601Z 2026-04-25 19:21:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T19:21:30.07746103Z 2026-04-25 19:21:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T19:21:30.408320217Z 2026-04-25 19:21:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T19:21:30.828290555Z 2026-04-25 19:21:30 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-25T19:21:31.145020089Z 2026-04-25 19:21:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T19:21:31.473716406Z 2026-04-25 19:21:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T19:21:32.925080755Z 2026-04-25 19:21:32 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-25T19:21:33.972895457Z 2026-04-25 19:21:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:21:33.973912862Z 2026-04-25 19:21:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:21:39.153795007Z 2026-04-25 19:21:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:21:43.972655913Z 2026-04-25 19:21:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:21:48.973357783Z 2026-04-25 19:21:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:21:53.973170565Z 2026-04-25 19:21:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:21:58.97256833Z 2026-04-25 19:21:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:03.972192868Z 2026-04-25 19:22:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:03.972949766Z 2026-04-25 19:22:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:08.972080432Z 2026-04-25 19:22:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:13.97234216Z 2026-04-25 19:22:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:18.972628059Z 2026-04-25 19:22:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:23.972834871Z 2026-04-25 19:22:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:28.972357519Z 2026-04-25 19:22:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:33.972599843Z 2026-04-25 19:22:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:33.973370312Z 2026-04-25 19:22:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:35.726511165Z 2026-04-25 19:22:35 [info] Client disconnected: wii9M1GGNbSrFp3NAAAB
2026-04-25T19:22:36.007934295Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T19:22:36.070311916Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T19:22:38.271517652Z 2026-04-25 19:22:38 [info] Client disconnected: yaLihxMOoN56W01sAAAD
2026-04-25T19:22:38.972680305Z 2026-04-25 19:22:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:43.97219614Z 2026-04-25 19:22:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:48.972678197Z 2026-04-25 19:22:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:53.972098465Z 2026-04-25 19:22:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:22:58.972575979Z 2026-04-25 19:22:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:03.973473531Z 2026-04-25 19:23:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:03.973586288Z 2026-04-25 19:23:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:08.972937489Z 2026-04-25 19:23:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:13.972120048Z 2026-04-25 19:23:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:18.972837135Z 2026-04-25 19:23:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:23.972027273Z 2026-04-25 19:23:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:28.972677355Z 2026-04-25 19:23:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:33.972679964Z 2026-04-25 19:23:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:33.973564731Z 2026-04-25 19:23:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:38.972272645Z 2026-04-25 19:23:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:41.357213091Z [0;33m[1m==> [0m[1mNo open ports detected, continuing to scan...[0m
2026-04-25T19:23:41.445427575Z [0;33m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T19:23:43.371377474Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T19:23:43.973197843Z 2026-04-25 19:23:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:44.476697681Z 
2026-04-25T19:23:44.476716773Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T19:23:44.476721143Z > node dist/index.js
2026-04-25T19:23:44.476722893Z 
2026-04-25T19:23:48.971922217Z 2026-04-25 19:23:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:48.982325108Z 2026-04-25 19:23:48 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T19:23:50.070275068Z 2026-04-25 19:23:49 [info] Firestore initialized successfully
2026-04-25T19:23:50.369641631Z 2026-04-25 19:23:50 [info] ✅ Server running on http://localhost:10000
2026-04-25T19:23:50.36975604Z 2026-04-25 19:23:50 [info] Environment: production
2026-04-25T19:23:50.369904841Z 2026-04-25 19:23:50 [info] API URL: http://localhost:5000
2026-04-25T19:23:50.371746366Z 2026-04-25 19:23:50 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T19:23:50.916995781Z 2026-04-25 19:23:50 [error] Route / not found
2026-04-25T19:23:50.917013393Z Error: Route / not found
2026-04-25T19:23:50.917017943Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:23:50.917021203Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:23:50.917028144Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:23:50.917031224Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:23:50.917033854Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:23:50.917036104Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:23:50.917038725Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:23:50.917041105Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:23:50.917043965Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:23:50.917046845Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:23:50.921275938Z 2026-04-25 19:23:50 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-25T19:23:53.973087138Z 2026-04-25 19:23:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-04-25T19:23:56.471411454Z 2026-04-25 19:23:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:23:56.483063402Z 2026-04-25 19:23:56 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:23:57.451192607Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T19:23:57.503092255Z 2026-04-25 19:23:57 [error] Route / not found
2026-04-25T19:23:57.503112597Z Error: Route / not found
2026-04-25T19:23:57.503117237Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T19:23:57.503121217Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:23:57.503125548Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:23:57.503129898Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:23:57.503133618Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T19:23:57.503141709Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T19:23:57.503147019Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T19:23:57.50315068Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T19:23:57.503165641Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T19:23:57.503169521Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T19:23:57.503966944Z 2026-04-25 19:23:57 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T19:23:57.635577352Z [0;32m[1m==> [0m[1m[0m
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
2026-04-25T19:28:04.668087342Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T19:28:06.275124365Z 
2026-04-25T19:28:06.275142806Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T19:28:06.275147726Z > node dist/index.js
2026-04-25T19:28:06.275149886Z 
2026-04-25T19:28:06.455414681Z 2026-04-25 19:28:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:06.456134478Z 2026-04-25 19:28:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:10.955518016Z 2026-04-25 19:28:10 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T19:28:11.456208897Z 2026-04-25 19:28:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-25T19:28:11.863236968Z 2026-04-25 19:28:11 [info] Firestore initialized successfully
2026-04-25T19:28:11.8659189Z 2026-04-25 19:28:11 [info] ✅ Server running on http://localhost:10000
2026-04-25T19:28:11.955375835Z 2026-04-25 19:28:11 [info] Environment: production
2026-04-25T19:28:11.955414776Z 2026-04-25 19:28:11 [info] API URL: http://localhost:5000
2026-04-25T19:28:11.955421366Z 2026-04-25 19:28:11 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T19:28:12.701985598Z 2026-04-25 19:28:12 [error] Route / not found
2026-04-25T19:28:12.702002478Z Error: Route / not found
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
```
