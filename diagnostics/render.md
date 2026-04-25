# Render Deploy Diagnostics

Run: 24938727440
Commit: 6733aeff3553fad8dce3a10f91639fe986484cb9
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mhabnavr4c73f3dvl0

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
  "updatedAt": "2026-04-25T19:28:21.937561Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mhabnavr4c73f3dvl0",
  "commit": {
    "id": "6733aeff3553fad8dce3a10f91639fe986484cb9",
    "message": "fix: override Vercel rootDirectory:null so vercel build finds dist/ correctly\n\nWhen running vercel build from inside frontend/, the project setting\nrootDirectory:\"frontend\" caused Vercel CLI to look for frontend/frontend/\nand only stage 3KB config — not the actual built assets. Setting\nrootDirectory:null + outputDirectory:dist in the local project.json\noverride fixes the prebuilt deploy.\n\nhttps://claude.ai/code/session_01T1SgdJMtKrs6g3inUqNSoB",
    "createdAt": "2026-04-25T19:23:59Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T19:25:34.789988Z",
  "updatedAt": "2026-04-25T19:28:21.920739Z",
  "startedAt": "2026-04-25T19:25:34.75526Z",
  "finishedAt": "2026-04-25T19:28:21.920546Z"
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
```

## App logs (last 4h)
```
2026-04-25T15:58:02.654603665Z 2026-04-25 15:58:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:07.655170284Z 2026-04-25 15:58:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:12.655526458Z 2026-04-25 15:58:12 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:17.654652472Z 2026-04-25 15:58:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:21.414222654Z 2026-04-25 15:58:21 [info] Client connected: -U1aoQd-JolGNwZjAAAF
2026-04-25T15:58:21.704080945Z 2026-04-25 15:58:21 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket -U1aoQd-JolGNwZjAAAF
2026-04-25T15:58:22.539491346Z 2026-04-25 15:58:22 [info] Client connected: EWWb00n8KulcJSMqAAAH
2026-04-25T15:58:22.65447169Z 2026-04-25 15:58:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:22.839070713Z 2026-04-25 15:58:22 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket EWWb00n8KulcJSMqAAAH
2026-04-25T15:58:27.645180614Z 2026-04-25 15:58:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:27.654674695Z 2026-04-25 15:58:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:32.65442377Z 2026-04-25 15:58:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:37.655110106Z 2026-04-25 15:58:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:42.659205894Z 2026-04-25 15:58:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:47.655041583Z 2026-04-25 15:58:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:52.654461704Z 2026-04-25 15:58:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:57.644857778Z 2026-04-25 15:58:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:57.653775034Z 2026-04-25 15:58:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:58:57.824062727Z 2026-04-25 15:58:57 [info] Client disconnected: -U1aoQd-JolGNwZjAAAF
2026-04-25T15:58:58.642852511Z 2026-04-25 15:58:58 [info] {"method":"GET","path":"/messages","status":200,"duration":"106ms","ip":"::1"}
2026-04-25T15:58:58.923434169Z 2026-04-25 15:58:58 [info] Client connected: 06nhmiUm1vXlc5xrAAAJ
2026-04-25T15:58:59.233620497Z 2026-04-25 15:58:59 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 06nhmiUm1vXlc5xrAAAJ
2026-04-25T15:59:00.563193639Z 2026-04-25 15:59:00 [info] Client disconnected: 06nhmiUm1vXlc5xrAAAJ
2026-04-25T15:59:01.010841225Z 2026-04-25 15:59:01 [info] {"method":"GET","path":"/calls","status":200,"duration":"106ms","ip":"::1"}
2026-04-25T15:59:02.654367722Z 2026-04-25 15:59:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:07.654558252Z 2026-04-25 15:59:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:11.973651251Z 2026-04-25 15:59:11 [info] {"method":"GET","path":"/calls","status":200,"duration":"106ms","ip":"::1"}
2026-04-25T15:59:11.981505811Z 2026-04-25 15:59:11 [info] {"method":"GET","path":"/messages","status":200,"duration":"101ms","ip":"::1"}
2026-04-25T15:59:12.364665846Z 2026-04-25 15:59:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T15:59:12.398394091Z 2026-04-25 15:59:12 [info] Client connected: S4pCGGepucfdz3H2AAAL
2026-04-25T15:59:12.654757832Z 2026-04-25 15:59:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:12.678774684Z 2026-04-25 15:59:12 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket S4pCGGepucfdz3H2AAAL
2026-04-25T15:59:17.655042855Z 2026-04-25 15:59:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:22.654393886Z 2026-04-25 15:59:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:27.644524415Z 2026-04-25 15:59:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:27.653815488Z 2026-04-25 15:59:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:32.654853618Z 2026-04-25 15:59:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:37.65462383Z 2026-04-25 15:59:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:42.654711459Z 2026-04-25 15:59:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:47.655147956Z 2026-04-25 15:59:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:52.654524909Z 2026-04-25 15:59:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:55.348933335Z 2026-04-25 15:59:55 [info] Client disconnected: S4pCGGepucfdz3H2AAAL
2026-04-25T15:59:55.359554139Z 2026-04-25 15:59:55 [info] Client disconnected: EWWb00n8KulcJSMqAAAH
2026-04-25T15:59:57.644698191Z 2026-04-25 15:59:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T15:59:57.654724011Z 2026-04-25 15:59:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:02.654606457Z 2026-04-25 16:00:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:07.65482814Z 2026-04-25 16:00:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:12.654998712Z 2026-04-25 16:00:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:17.654533289Z 2026-04-25 16:00:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:22.654968108Z 2026-04-25 16:00:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:27.644160979Z 2026-04-25 16:00:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:27.654098227Z 2026-04-25 16:00:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:32.658103538Z 2026-04-25 16:00:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:37.658452266Z 2026-04-25 16:00:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:42.654223278Z 2026-04-25 16:00:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:47.654131436Z 2026-04-25 16:00:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:52.654910984Z 2026-04-25 16:00:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:57.644240509Z 2026-04-25 16:00:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:00:57.653701587Z 2026-04-25 16:00:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:02.655116699Z 2026-04-25 16:01:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:07.654720491Z 2026-04-25 16:01:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:12.654697381Z 2026-04-25 16:01:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:17.654993509Z 2026-04-25 16:01:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:22.654744985Z 2026-04-25 16:01:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:27.645139586Z 2026-04-25 16:01:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:27.654201514Z 2026-04-25 16:01:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:32.654993145Z 2026-04-25 16:01:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:37.654604178Z 2026-04-25 16:01:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:42.65505163Z 2026-04-25 16:01:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:47.654863228Z 2026-04-25 16:01:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:52.661076944Z 2026-04-25 16:01:52 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:57.644764261Z 2026-04-25 16:01:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:01:57.654323321Z 2026-04-25 16:01:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:02.654834556Z 2026-04-25 16:02:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:07.654687956Z 2026-04-25 16:02:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:12.65516801Z 2026-04-25 16:02:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:17.654843687Z 2026-04-25 16:02:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:22.656286024Z 2026-04-25 16:02:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:27.644787604Z 2026-04-25 16:02:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:27.653890593Z 2026-04-25 16:02:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:32.655012433Z 2026-04-25 16:02:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:37.655296524Z 2026-04-25 16:02:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:42.654313056Z 2026-04-25 16:02:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:47.655342985Z 2026-04-25 16:02:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:52.654652324Z 2026-04-25 16:02:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:57.644549407Z 2026-04-25 16:02:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:02:57.654633759Z 2026-04-25 16:02:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:02.654301777Z 2026-04-25 16:03:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:07.653919834Z 2026-04-25 16:03:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:12.654101254Z 2026-04-25 16:03:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:17.654833327Z 2026-04-25 16:03:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:22.654101267Z 2026-04-25 16:03:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:27.644542494Z 2026-04-25 16:03:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:27.654587144Z 2026-04-25 16:03:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:32.655222646Z 2026-04-25 16:03:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:37.65465622Z 2026-04-25 16:03:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:42.654513164Z 2026-04-25 16:03:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:47.65490305Z 2026-04-25 16:03:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:52.65499526Z 2026-04-25 16:03:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:57.646491212Z 2026-04-25 16:03:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:03:57.654477346Z 2026-04-25 16:03:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:02.654417733Z 2026-04-25 16:04:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:07.654838951Z 2026-04-25 16:04:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:12.654566033Z 2026-04-25 16:04:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:17.657734574Z 2026-04-25 16:04:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:22.655010571Z 2026-04-25 16:04:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:27.644403486Z 2026-04-25 16:04:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:27.65414199Z 2026-04-25 16:04:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:32.655159014Z 2026-04-25 16:04:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:37.654519249Z 2026-04-25 16:04:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:42.655083172Z 2026-04-25 16:04:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:47.655477861Z 2026-04-25 16:04:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:52.654058268Z 2026-04-25 16:04:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:57.643880105Z 2026-04-25 16:04:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:04:57.654301304Z 2026-04-25 16:04:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:02.654763765Z 2026-04-25 16:05:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:07.655705168Z 2026-04-25 16:05:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:12.654364128Z 2026-04-25 16:05:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:17.654490963Z 2026-04-25 16:05:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:22.662198812Z 2026-04-25 16:05:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:27.644420075Z 2026-04-25 16:05:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:27.65466779Z 2026-04-25 16:05:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:32.656521614Z 2026-04-25 16:05:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:37.654338506Z 2026-04-25 16:05:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:42.655225749Z 2026-04-25 16:05:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:47.654197058Z 2026-04-25 16:05:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:52.65550147Z 2026-04-25 16:05:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:57.644232934Z 2026-04-25 16:05:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:05:57.65408336Z 2026-04-25 16:05:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:02.654716799Z 2026-04-25 16:06:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:07.654723432Z 2026-04-25 16:06:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:12.65490383Z 2026-04-25 16:06:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:17.654994635Z 2026-04-25 16:06:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:22.654650511Z 2026-04-25 16:06:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:27.6448525Z 2026-04-25 16:06:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:27.654307327Z 2026-04-25 16:06:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:32.65465304Z 2026-04-25 16:06:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:37.654555052Z 2026-04-25 16:06:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:42.654079136Z 2026-04-25 16:06:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:47.654317847Z 2026-04-25 16:06:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:52.654355613Z 2026-04-25 16:06:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:57.644263326Z 2026-04-25 16:06:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:06:57.654268166Z 2026-04-25 16:06:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:02.654177109Z 2026-04-25 16:07:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:07.654487172Z 2026-04-25 16:07:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:12.656037923Z 2026-04-25 16:07:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:17.654780501Z 2026-04-25 16:07:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:22.654149632Z 2026-04-25 16:07:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:27.651255822Z 2026-04-25 16:07:27 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:27.654335823Z 2026-04-25 16:07:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:32.654390982Z 2026-04-25 16:07:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:37.654046551Z 2026-04-25 16:07:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:42.653986847Z 2026-04-25 16:07:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:47.655050708Z 2026-04-25 16:07:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:52.656090029Z 2026-04-25 16:07:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:57.645034803Z 2026-04-25 16:07:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:07:57.653876576Z 2026-04-25 16:07:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:02.654323744Z 2026-04-25 16:08:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:07.654466965Z 2026-04-25 16:08:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:12.654896923Z 2026-04-25 16:08:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:17.654603556Z 2026-04-25 16:08:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:22.654737978Z 2026-04-25 16:08:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:27.644105302Z 2026-04-25 16:08:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:27.654313937Z 2026-04-25 16:08:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:32.657469098Z 2026-04-25 16:08:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:37.654423227Z 2026-04-25 16:08:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:42.657731223Z 2026-04-25 16:08:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:47.655590733Z 2026-04-25 16:08:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:52.655716446Z 2026-04-25 16:08:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:57.644723443Z 2026-04-25 16:08:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:08:57.654116169Z 2026-04-25 16:08:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:02.654675681Z 2026-04-25 16:09:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:07.654394195Z 2026-04-25 16:09:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:12.654264483Z 2026-04-25 16:09:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:17.654161531Z 2026-04-25 16:09:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:22.654759506Z 2026-04-25 16:09:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:27.644494081Z 2026-04-25 16:09:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:27.654652374Z 2026-04-25 16:09:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:32.654263617Z 2026-04-25 16:09:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:37.654835891Z 2026-04-25 16:09:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:42.654571637Z 2026-04-25 16:09:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:47.655008678Z 2026-04-25 16:09:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:52.654983409Z 2026-04-25 16:09:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:57.644783557Z 2026-04-25 16:09:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:09:57.654118702Z 2026-04-25 16:09:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:02.654435042Z 2026-04-25 16:10:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:07.654917615Z 2026-04-25 16:10:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:12.654393236Z 2026-04-25 16:10:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:17.654623994Z 2026-04-25 16:10:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:22.654929445Z 2026-04-25 16:10:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:27.644541629Z 2026-04-25 16:10:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:27.654090409Z 2026-04-25 16:10:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:32.65438705Z 2026-04-25 16:10:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:37.654455515Z 2026-04-25 16:10:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:42.654414298Z 2026-04-25 16:10:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:47.654830002Z 2026-04-25 16:10:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:52.654604241Z 2026-04-25 16:10:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:57.647596224Z 2026-04-25 16:10:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:10:57.655858554Z 2026-04-25 16:10:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:02.654214191Z 2026-04-25 16:11:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:07.654772919Z 2026-04-25 16:11:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:12.654766154Z 2026-04-25 16:11:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:17.654130044Z 2026-04-25 16:11:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:22.654836886Z 2026-04-25 16:11:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:27.64388696Z 2026-04-25 16:11:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:27.654472933Z 2026-04-25 16:11:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:32.655045032Z 2026-04-25 16:11:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:37.654213189Z 2026-04-25 16:11:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:42.655009814Z 2026-04-25 16:11:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:47.655130363Z 2026-04-25 16:11:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:52.654524225Z 2026-04-25 16:11:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:57.645394402Z 2026-04-25 16:11:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:11:57.654593654Z 2026-04-25 16:11:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:02.654596181Z 2026-04-25 16:12:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:07.654442995Z 2026-04-25 16:12:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:12.654272168Z 2026-04-25 16:12:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:17.654714476Z 2026-04-25 16:12:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.122"}
2026-04-25T16:12:22.654853147Z 2026-04-25 16:12:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.122"}
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
2026-04-25T19:21:17.260984712Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T19:21:18.363939089Z 
2026-04-25T19:21:18.363983492Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T19:21:18.363988492Z > node dist/index.js
2026-04-25T19:21:18.363990792Z 
2026-04-25T19:21:22.663908466Z 2026-04-25 19:21:22 [info] AI Service initialized with primary model: gemini-2.5-flash
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
```
