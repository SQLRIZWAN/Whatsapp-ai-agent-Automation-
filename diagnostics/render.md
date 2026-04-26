# Render Deploy Diagnostics

Run: 24951081280
Commit: 38d9c20a0b86ba7484a19db99cfa5a3757b83dc4
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mrt09f9bms7385joug

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
  "updatedAt": "2026-04-26T07:30:13.261278Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mrt09f9bms7385joug",
  "commit": {
    "id": "38d9c20a0b86ba7484a19db99cfa5a3757b83dc4",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:36547/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-26T07:22:17Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T07:28:01.988398Z",
  "updatedAt": "2026-04-26T07:30:13.260149Z",
  "startedAt": "2026-04-26T07:28:01.933277Z",
  "finishedAt": "2026-04-26T07:30:13.259899Z"
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
2026-04-26T07:22:37.776048512Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-26T07:22:38.501521103Z [34m[1m==>(B[m [1mChecking out commit 38d9c20a0b86ba7484a19db99cfa5a3757b83dc4 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-26T07:22:40.233332187Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-26T07:22:40.263907796Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-26T07:22:42.320366122Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-26T07:24:05.231598533Z 
2026-04-26T07:24:05.231625055Z added 590 packages, and audited 591 packages in 1m
2026-04-26T07:24:05.231635985Z 
2026-04-26T07:24:05.231778285Z 113 packages are looking for funding
2026-04-26T07:24:05.231895003Z   run `npm fund` for details
2026-04-26T07:24:05.408174433Z 
2026-04-26T07:24:05.408199255Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-26T07:24:05.408204095Z 
2026-04-26T07:24:05.408208506Z To address issues that do not require attention, run:
2026-04-26T07:24:05.408212566Z   npm audit fix
2026-04-26T07:24:05.408216406Z 
2026-04-26T07:24:05.408220397Z To address all issues (including breaking changes), run:
2026-04-26T07:24:05.408225427Z   npm audit fix --force
2026-04-26T07:24:05.408229337Z 
2026-04-26T07:24:05.408233917Z Run `npm audit` for details.
2026-04-26T07:24:05.624556058Z 
2026-04-26T07:24:05.62457821Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-26T07:24:05.62458361Z > tsc && tsc-alias
2026-04-26T07:24:05.62458766Z 
2026-04-26T07:24:09.318536027Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-26T07:24:15.769447683Z [34;1m==>[0;22m [1mUploaded in 3.8s. Compression took 2.7s[22m
2026-04-26T07:24:15.809422829Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-26T07:28:07.979179391Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-26T07:28:08.94450854Z [34m[1m==>(B[m [1mChecking out commit 38d9c20a0b86ba7484a19db99cfa5a3757b83dc4 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-26T07:28:11.237942135Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-26T07:28:11.263829216Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-26T07:28:13.405921868Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-26T07:29:40.387160839Z 
2026-04-26T07:29:40.387196452Z added 590 packages, and audited 591 packages in 1m
2026-04-26T07:29:40.387213253Z 
2026-04-26T07:29:40.387287429Z 113 packages are looking for funding
2026-04-26T07:29:40.387341763Z   run `npm fund` for details
2026-04-26T07:29:40.530815913Z 
2026-04-26T07:29:40.530835004Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-26T07:29:40.530839344Z 
2026-04-26T07:29:40.530843465Z To address issues that do not require attention, run:
2026-04-26T07:29:40.530847405Z   npm audit fix
2026-04-26T07:29:40.530851235Z 
2026-04-26T07:29:40.530855045Z To address all issues (including breaking changes), run:
2026-04-26T07:29:40.530859346Z   npm audit fix --force
2026-04-26T07:29:40.530863206Z 
2026-04-26T07:29:40.530867677Z Run `npm audit` for details.
2026-04-26T07:29:40.750529233Z 
2026-04-26T07:29:40.750546144Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-26T07:29:40.750549974Z > tsc && tsc-alias
2026-04-26T07:29:40.750553135Z 
2026-04-26T07:29:43.519307528Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-26T07:29:49.730656924Z [34;1m==>[0;22m [1mUploaded in 3.5s. Compression took 2.8s[22m
2026-04-26T07:29:49.763904609Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-26T07:25:25.508459753Z 2026-04-26 07:25:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:28.826835379Z 2026-04-26 07:25:28 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:25:28.997825529Z 2026-04-26 07:25:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:29.048690172Z 2026-04-26 07:25:29 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:29.048706493Z 2026-04-26 07:25:29 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:25:29.065467317Z 2026-04-26 07:25:29 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:29.096788238Z 2026-04-26 07:25:29 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 15)
2026-04-26T07:25:29.097967272Z 2026-04-26 07:25:29 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:29.158791056Z 2026-04-26 07:25:29 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:29.195712316Z 2026-04-26 07:25:29 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:29.20441814Z 2026-04-26 07:25:29 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:29.20445109Z 2026-04-26 07:25:29 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:29.295891221Z 2026-04-26 07:25:29 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 20)
2026-04-26T07:25:29.296147206Z 2026-04-26 07:25:29 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:25:29.359390031Z 2026-04-26 07:25:29 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:29.365787486Z 2026-04-26 07:25:29 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:29.578077488Z 2026-04-26 07:25:29 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:29.692449592Z 2026-04-26 07:25:29 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:29.692483273Z 2026-04-26 07:25:29 [info] [wa] reconnecting in 60000ms (attempt 21)
2026-04-26T07:25:29.745351429Z 2026-04-26 07:25:29 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:29.808063793Z 2026-04-26 07:25:29 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:30.013735204Z 2026-04-26 07:25:30 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:30.013754455Z 2026-04-26 07:25:30 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:30.151922171Z 2026-04-26 07:25:30 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:30.151938342Z 2026-04-26 07:25:30 [info] [wa] reconnecting in 60000ms (attempt 16)
2026-04-26T07:25:30.279076436Z 2026-04-26 07:25:30 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:30.279100056Z 2026-04-26 07:25:30 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:25:30.492575323Z 2026-04-26 07:25:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T07:25:30.503617569Z 2026-04-26 07:25:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:30.5047877Z 2026-04-26 07:25:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:30.553696063Z 2026-04-26 07:25:30 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:30.669362764Z 2026-04-26 07:25:30 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:30.680204123Z 2026-04-26 07:25:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:25:30.996215074Z 2026-04-26 07:25:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 16)
2026-04-26T07:25:31.008377091Z 2026-04-26 07:25:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:31.013722604Z 2026-04-26 07:25:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:31.058030339Z 2026-04-26 07:25:31 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:31.069268816Z 2026-04-26 07:25:31 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:31.096175124Z 2026-04-26 07:25:31 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:31.205357699Z 2026-04-26 07:25:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:31.269273518Z 2026-04-26 07:25:31 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:31.457655515Z 2026-04-26 07:25:31 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:31.457697976Z 2026-04-26 07:25:31 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:31.775840862Z 2026-04-26 07:25:31 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:31.775857932Z 2026-04-26 07:25:31 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:25:31.953436211Z 2026-04-26 07:25:31 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:31.98326018Z 2026-04-26 07:25:31 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:31.983283731Z 2026-04-26 07:25:31 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:32.244799732Z 2026-04-26 07:25:32 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:32.244822332Z 2026-04-26 07:25:32 [info] [wa] reconnecting in 60000ms (attempt 19)
2026-04-26T07:25:32.457714626Z 2026-04-26 07:25:32 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:32.519536491Z 2026-04-26 07:25:32 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:32.984056867Z 2026-04-26 07:25:32 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:33.031410337Z 2026-04-26 07:25:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 17)
2026-04-26T07:25:33.048208951Z 2026-04-26 07:25:33 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:33.097332488Z 2026-04-26 07:25:33 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:33.333392021Z 2026-04-26 07:25:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:33.333414982Z 2026-04-26 07:25:33 [info] [wa] reconnecting in 60000ms (attempt 17)
2026-04-26T07:25:33.428121711Z 2026-04-26 07:25:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:33.428137131Z 2026-04-26 07:25:33 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:25:33.472447867Z 2026-04-26 07:25:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:33.472468677Z 2026-04-26 07:25:33 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:33.521043502Z 2026-04-26 07:25:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:33.521061063Z 2026-04-26 07:25:33 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:34.003941266Z 2026-04-26 07:25:34 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:34.14008023Z 2026-04-26 07:25:34 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:34.140214643Z 2026-04-26 07:25:34 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:25:34.28695775Z 2026-04-26 07:25:34 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:34.286981021Z 2026-04-26 07:25:34 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:34.453349833Z 2026-04-26 07:25:34 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:34.453367943Z 2026-04-26 07:25:34 [info] [wa] reconnecting in 60000ms (attempt 13)
2026-04-26T07:25:35.024875578Z 2026-04-26 07:25:35 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:35.024919019Z 2026-04-26 07:25:35 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:35.264420954Z 2026-04-26 07:25:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:25:35.325853211Z 2026-04-26 07:25:35 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:35.379383331Z 2026-04-26 07:25:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:35.396043833Z 2026-04-26 07:25:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:35.440479991Z 2026-04-26 07:25:35 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:35.463538538Z 2026-04-26 07:25:35 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:35.494822148Z 2026-04-26 07:25:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:35.500554142Z 2026-04-26 07:25:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:35.521339528Z 2026-04-26 07:25:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:35.55793202Z 2026-04-26 07:25:35 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:35.597363683Z 2026-04-26 07:25:35 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:35.696689739Z 2026-04-26 07:25:35 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:35.69670792Z 2026-04-26 07:25:35 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:35.699113691Z 2026-04-26 07:25:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:25:36.125601543Z 2026-04-26 07:25:36 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:36.156035476Z 2026-04-26 07:25:36 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:36.156054066Z 2026-04-26 07:25:36 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:36.250232104Z 2026-04-26 07:25:36 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:36.250273315Z 2026-04-26 07:25:36 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:25:36.495260267Z 2026-04-26 07:25:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T07:25:36.557133373Z 2026-04-26 07:25:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:36.697354083Z 2026-04-26 07:25:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:36.748343129Z 2026-04-26 07:25:36 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:36.74837546Z 2026-04-26 07:25:36 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:36.758412692Z 2026-04-26 07:25:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:36.796360403Z 2026-04-26 07:25:36 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:36.827352147Z 2026-04-26 07:25:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:36.893537104Z 2026-04-26 07:25:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:37.024733883Z 2026-04-26 07:25:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:37.085580458Z 2026-04-26 07:25:37 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:37.156213729Z 2026-04-26 07:25:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:37.217948292Z 2026-04-26 07:25:37 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:37.301334392Z 2026-04-26 07:25:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 17)
2026-04-26T07:25:37.36894186Z 2026-04-26 07:25:37 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:37.427946835Z 2026-04-26 07:25:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:25:37.488443652Z 2026-04-26 07:25:37 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:37.511961049Z 2026-04-26 07:25:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:37.556737914Z 2026-04-26 07:25:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:37.556766614Z 2026-04-26 07:25:37 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:37.595747927Z 2026-04-26 07:25:37 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:37.641079854Z 2026-04-26 07:25:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T07:25:37.676662095Z 2026-04-26 07:25:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:37.676688546Z 2026-04-26 07:25:37 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:25:37.700780914Z 2026-04-26 07:25:37 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:37.828734855Z 2026-04-26 07:25:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:37.828757416Z 2026-04-26 07:25:37 [info] [wa] reconnecting in 60000ms (attempt 13)
2026-04-26T07:25:37.933088578Z 2026-04-26 07:25:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:37.933113839Z 2026-04-26 07:25:37 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:37.957079705Z 2026-04-26 07:25:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T07:25:38.019569474Z 2026-04-26 07:25:38 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:38.279378008Z 2026-04-26 07:25:38 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:38.340702193Z 2026-04-26 07:25:38 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:38.437901654Z 2026-04-26 07:25:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:38.437921245Z 2026-04-26 07:25:38 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:38.501840084Z 2026-04-26 07:25:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:38.501857075Z 2026-04-26 07:25:38 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:25:38.505053622Z 2026-04-26 07:25:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:38.505827978Z 2026-04-26 07:25:38 [info] [wa] reconnecting in 60000ms (attempt 14)
2026-04-26T07:25:38.557213143Z 2026-04-26 07:25:38 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:38.617910834Z 2026-04-26 07:25:38 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:38.654114909Z 2026-04-26 07:25:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:38.654203151Z 2026-04-26 07:25:38 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:38.773189532Z 2026-04-26 07:25:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:38.773209173Z 2026-04-26 07:25:38 [info] [wa] reconnecting in 60000ms (attempt 11)
2026-04-26T07:25:39.365312842Z 2026-04-26 07:25:39 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:39.365332412Z 2026-04-26 07:25:39 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:25:39.38132622Z 2026-04-26 07:25:39 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:39.38134408Z 2026-04-26 07:25:39 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:25:39.827783274Z 2026-04-26 07:25:39 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:39.827809845Z 2026-04-26 07:25:39 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:25:39.84040507Z 2026-04-26 07:25:39 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:39.840423581Z 2026-04-26 07:25:39 [info] [wa] reconnecting in 60000ms (attempt 18)
2026-04-26T07:25:39.933416534Z 2026-04-26 07:25:39 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:39.994777949Z 2026-04-26 07:25:39 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:40.031839871Z 2026-04-26 07:25:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 14)
2026-04-26T07:25:40.094870132Z 2026-04-26 07:25:40 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:40.438637408Z 2026-04-26 07:25:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:40.501188664Z 2026-04-26 07:25:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:40.50454936Z 2026-04-26 07:25:40 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:40.526642586Z 2026-04-26 07:25:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T07:25:40.543274287Z 2026-04-26 07:25:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 16)
2026-04-26T07:25:40.604260885Z 2026-04-26 07:25:40 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:40.606021402Z 2026-04-26 07:25:40 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:40.701532498Z 2026-04-26 07:25:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:25:40.788461553Z 2026-04-26 07:25:40 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:40.788663007Z 2026-04-26 07:25:40 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:41.012721807Z 2026-04-26 07:25:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:25:41.073604102Z 2026-04-26 07:25:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:41.273678595Z 2026-04-26 07:25:41 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:41.273702296Z 2026-04-26 07:25:41 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:25:41.444523992Z 2026-04-26 07:25:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:25:41.483220139Z 2026-04-26 07:25:41 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:41.483243509Z 2026-04-26 07:25:41 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:25:41.513373435Z 2026-04-26 07:25:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:41.621995598Z 2026-04-26 07:25:41 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:41.622018649Z 2026-04-26 07:25:41 [info] [wa] reconnecting in 60000ms (attempt 11)
2026-04-26T07:25:41.662768319Z 2026-04-26 07:25:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:41.677310896Z 2026-04-26 07:25:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:25:41.731011819Z 2026-04-26 07:25:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:41.775550189Z 2026-04-26 07:25:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:42.112737217Z 2026-04-26 07:25:42 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:42.112757928Z 2026-04-26 07:25:42 [info] [wa] reconnecting in 60000ms (attempt 8)
2026-04-26T07:25:42.301967682Z 2026-04-26 07:25:42 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:42.301988882Z 2026-04-26 07:25:42 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:42.386659309Z 2026-04-26 07:25:42 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:25:42.44827015Z 2026-04-26 07:25:42 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:42.789135815Z 2026-04-26 07:25:42 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:42.850578092Z 2026-04-26 07:25:42 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:43.342265771Z 2026-04-26 07:25:43 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:43.342297162Z 2026-04-26 07:25:43 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:25:43.366241758Z 2026-04-26 07:25:43 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:25:43.410664105Z 2026-04-26 07:25:43 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:43.410692066Z 2026-04-26 07:25:43 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:25:43.443500478Z 2026-04-26 07:25:43 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:44.040752526Z 2026-04-26 07:25:44 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:44.212689535Z 2026-04-26 07:25:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:44.21293039Z 2026-04-26 07:25:44 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:44.290084709Z 2026-04-26 07:25:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:44.29011298Z 2026-04-26 07:25:44 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:25:44.712022486Z 2026-04-26 07:25:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:44.712115497Z 2026-04-26 07:25:44 [info] [wa] reconnecting in 60000ms (attempt 15)
2026-04-26T07:25:44.755271788Z 2026-04-26 07:25:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:44.755298759Z 2026-04-26 07:25:44 [info] [wa] reconnecting in 60000ms (attempt 17)
2026-04-26T07:25:44.800273168Z 2026-04-26 07:25:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:25:44.865622408Z 2026-04-26 07:25:44 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:45.105537642Z 2026-04-26 07:25:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:25:45.167137832Z 2026-04-26 07:25:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:45.213975521Z 2026-04-26 07:25:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:45.27548344Z 2026-04-26 07:25:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:25:45.276349658Z 2026-04-26 07:25:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:45.35747369Z 2026-04-26 07:25:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:45.48345514Z 2026-04-26 07:25:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:25:45.499909024Z 2026-04-26 07:25:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:45.544386426Z 2026-04-26 07:25:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:45.623515866Z 2026-04-26 07:25:45 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:45.680693213Z 2026-04-26 07:25:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:25:45.855109035Z 2026-04-26 07:25:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T07:25:45.916878499Z 2026-04-26 07:25:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:46.050250154Z 2026-04-26 07:25:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:46.050269075Z 2026-04-26 07:25:46 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:46.195253385Z 2026-04-26 07:25:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 20)
2026-04-26T07:25:46.197551184Z 2026-04-26 07:25:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T07:25:46.300351863Z 2026-04-26 07:25:46 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:46.303459549Z 2026-04-26 07:25:46 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:46.399809563Z 2026-04-26 07:25:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:46.400903456Z 2026-04-26 07:25:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:46.400937777Z 2026-04-26 07:25:46 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:25:46.496191957Z 2026-04-26 07:25:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:46.496213398Z 2026-04-26 07:25:46 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:25:46.503512402Z 2026-04-26 07:25:46 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:46.506690909Z 2026-04-26 07:25:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:46.694733578Z 2026-04-26 07:25:46 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:46.81134769Z 2026-04-26 07:25:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:46.81137275Z 2026-04-26 07:25:46 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:46.857240489Z 2026-04-26 07:25:46 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:47.395499681Z 2026-04-26 07:25:47 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:47.594820858Z 2026-04-26 07:25:47 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:47.594854129Z 2026-04-26 07:25:47 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:49.497471201Z 2026-04-26 07:25:49 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:49.497875219Z 2026-04-26 07:25:49 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:25:49.498427091Z 2026-04-26 07:25:49 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:49.49889824Z 2026-04-26 07:25:49 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:49.50264483Z 2026-04-26 07:25:49 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:49.700703911Z 2026-04-26 07:25:49 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:49.702881836Z 2026-04-26 07:25:49 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:49.906990675Z 2026-04-26 07:25:49 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:49.907012275Z 2026-04-26 07:25:49 [info] [wa] reconnecting in 60000ms (attempt 21)
2026-04-26T07:25:50.024619308Z 2026-04-26 07:25:50 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:50.024646158Z 2026-04-26 07:25:50 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:25:50.140877032Z 2026-04-26 07:25:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:25:50.20428556Z 2026-04-26 07:25:50 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:50.350754902Z 2026-04-26 07:25:50 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:50.350774542Z 2026-04-26 07:25:50 [info] [wa] reconnecting in 60000ms (attempt 14)
2026-04-26T07:25:50.353319566Z 2026-04-26 07:25:50 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:50.353337007Z 2026-04-26 07:25:50 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:25:50.500353371Z 2026-04-26 07:25:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:50.631975128Z 2026-04-26 07:25:50 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:50.631996499Z 2026-04-26 07:25:50 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:50.681175677Z 2026-04-26 07:25:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:25:51.04846429Z 2026-04-26 07:25:51 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:51.456142034Z 2026-04-26 07:25:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T07:25:51.516382456Z 2026-04-26 07:25:51 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:51.824801766Z 2026-04-26 07:25:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 14)
2026-04-26T07:25:51.88797267Z 2026-04-26 07:25:51 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:51.955897183Z 2026-04-26 07:25:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:51.955921514Z 2026-04-26 07:25:51 [info] [wa] reconnecting in 60000ms (attempt 12)
2026-04-26T07:25:51.997638375Z 2026-04-26 07:25:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:25:52.057960838Z 2026-04-26 07:25:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:52.250699496Z 2026-04-26 07:25:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:25:52.290256951Z 2026-04-26 07:25:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:52.305095565Z 2026-04-26 07:25:52 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:52.305114425Z 2026-04-26 07:25:52 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:52.352217509Z 2026-04-26 07:25:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:52.364275154Z 2026-04-26 07:25:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:52.726675904Z 2026-04-26 07:25:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:25:52.788145371Z 2026-04-26 07:25:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:52.884132667Z 2026-04-26 07:25:52 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:52.884175028Z 2026-04-26 07:25:52 [info] [wa] reconnecting in 60000ms (attempt 15)
2026-04-26T07:25:53.00080588Z 2026-04-26 07:25:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:25:53.004837705Z 2026-04-26 07:25:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:53.063262428Z 2026-04-26 07:25:53 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:53.096828487Z 2026-04-26 07:25:53 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:53.166041028Z 2026-04-26 07:25:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:53.166064398Z 2026-04-26 07:25:53 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:53.194735303Z 2026-04-26 07:25:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:25:53.196313777Z 2026-04-26 07:25:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:53.196331847Z 2026-04-26 07:25:53 [info] [wa] reconnecting in 60000ms (attempt 8)
2026-04-26T07:25:53.198133305Z 2026-04-26 07:25:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:53.198168606Z 2026-04-26 07:25:53 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:53.201048587Z 2026-04-26 07:25:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:53.201067097Z 2026-04-26 07:25:53 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:25:53.257636951Z 2026-04-26 07:25:53 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:53.304554111Z 2026-04-26 07:25:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:53.325063335Z 2026-04-26 07:25:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:53.325081075Z 2026-04-26 07:25:53 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:25:53.365868326Z 2026-04-26 07:25:53 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:53.503247485Z 2026-04-26 07:25:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T07:25:53.57259948Z 2026-04-26 07:25:53 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:53.75500462Z 2026-04-26 07:25:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:53.75503241Z 2026-04-26 07:25:53 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:25:53.910264407Z 2026-04-26 07:25:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T07:25:53.972264456Z 2026-04-26 07:25:53 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:54.126044012Z 2026-04-26 07:25:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:54.126064632Z 2026-04-26 07:25:54 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:25:54.401405394Z 2026-04-26 07:25:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:54.464583568Z 2026-04-26 07:25:54 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:54.496643165Z 2026-04-26 07:25:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:54.496665985Z 2026-04-26 07:25:54 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:54.497135435Z 2026-04-26 07:25:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:54.497143355Z 2026-04-26 07:25:54 [info] [wa] reconnecting in 60000ms (attempt 14)
2026-04-26T07:25:54.633383881Z 2026-04-26 07:25:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:54.633454502Z 2026-04-26 07:25:54 [info] [wa] reconnecting in 60000ms (attempt 13)
2026-04-26T07:25:54.767534543Z 2026-04-26 07:25:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:54.767557583Z 2026-04-26 07:25:54 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:25:54.925112749Z 2026-04-26 07:25:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:54.925134659Z 2026-04-26 07:25:54 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:25:55.166119326Z 2026-04-26 07:25:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:55.198405098Z 2026-04-26 07:25:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:55.227719526Z 2026-04-26 07:25:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:55.30180812Z 2026-04-26 07:25:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:55.396115121Z 2026-04-26 07:25:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T07:25:55.396443178Z 2026-04-26 07:25:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:25:55.498732407Z 2026-04-26 07:25:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:55.500435889Z 2026-04-26 07:25:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:55.501061626Z 2026-04-26 07:25:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:55.69550646Z 2026-04-26 07:25:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:55.697127325Z 2026-04-26 07:25:55 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:55.703490319Z 2026-04-26 07:25:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:25:55.798512355Z 2026-04-26 07:25:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:55.896594125Z 2026-04-26 07:25:55 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:55.896623136Z 2026-04-26 07:25:55 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:55.898340632Z 2026-04-26 07:25:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:25:55.898525046Z 2026-04-26 07:25:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:56.003196735Z 2026-04-26 07:25:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:56.005505464Z 2026-04-26 07:25:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:56.10339833Z 2026-04-26 07:25:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:56.103428051Z 2026-04-26 07:25:56 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:25:56.107311363Z 2026-04-26 07:25:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:25:56.198846845Z 2026-04-26 07:25:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:56.198877286Z 2026-04-26 07:25:56 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:25:56.29807347Z 2026-04-26 07:25:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:56.29810542Z 2026-04-26 07:25:56 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:56.299704364Z 2026-04-26 07:25:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:56.495355634Z 2026-04-26 07:25:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:56.495388715Z 2026-04-26 07:25:56 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:25:56.500587944Z 2026-04-26 07:25:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:56.600962233Z 2026-04-26 07:25:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:56.696854337Z 2026-04-26 07:25:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T07:25:56.698065813Z 2026-04-26 07:25:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:56.698087043Z 2026-04-26 07:25:56 [info] [wa] reconnecting in 60000ms (attempt 13)
2026-04-26T07:25:56.70977527Z 2026-04-26 07:25:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:56.70979115Z 2026-04-26 07:25:56 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:56.799644297Z 2026-04-26 07:25:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:56.902518508Z 2026-04-26 07:25:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:56.963137588Z 2026-04-26 07:25:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:57.123981273Z 2026-04-26 07:25:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:57.124010633Z 2026-04-26 07:25:57 [info] [wa] reconnecting in 60000ms (attempt 11)
2026-04-26T07:25:57.135959266Z 2026-04-26 07:25:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:57.135988277Z 2026-04-26 07:25:57 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:57.188049675Z 2026-04-26 07:25:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:57.188074636Z 2026-04-26 07:25:57 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:25:57.337535711Z 2026-04-26 07:25:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:57.337552991Z 2026-04-26 07:25:57 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:25:57.477334492Z 2026-04-26 07:25:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:25:57.539223418Z 2026-04-26 07:25:57 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:57.589909358Z 2026-04-26 07:25:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:57.652478268Z 2026-04-26 07:25:57 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:58.353484136Z 2026-04-26 07:25:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:58.416751961Z 2026-04-26 07:25:58 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:58.521170705Z 2026-04-26 07:25:58 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:58.558256528Z 2026-04-26 07:25:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:58.620118784Z 2026-04-26 07:25:58 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:58.768236Z 2026-04-26 07:25:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:25:58.829489543Z 2026-04-26 07:25:58 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:59.229759962Z 2026-04-26 07:25:59 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:59.229781422Z 2026-04-26 07:25:59 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:59.313651413Z 2026-04-26 07:25:59 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:59.313677643Z 2026-04-26 07:25:59 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:59.46371697Z 2026-04-26 07:25:59 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:59.463735381Z 2026-04-26 07:25:59 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:25:59.735508427Z 2026-04-26 07:25:59 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:59.735602739Z 2026-04-26 07:25:59 [info] [wa] reconnecting in 60000ms (attempt 8)
2026-04-26T07:26:00.102066025Z 2026-04-26 07:26:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:26:00.163675665Z 2026-04-26 07:26:00 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:26:00.198681974Z 2026-04-26 07:26:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:26:00.230493905Z 2026-04-26 07:26:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:26:00.267619479Z 2026-04-26 07:26:00 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:26:00.299076943Z 2026-04-26 07:26:00 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:26:00.508174591Z 2026-04-26 07:26:00 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:00.508266413Z 2026-04-26 07:26:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:00.681067996Z 2026-04-26 07:26:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:26:00.996885822Z 2026-04-26 07:26:00 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:26:00.996916233Z 2026-04-26 07:26:00 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:26:05.50080523Z 2026-04-26 07:26:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:10.500640411Z 2026-04-26 07:26:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:15.500817081Z 2026-04-26 07:26:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:20.50020557Z 2026-04-26 07:26:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:25.501581823Z 2026-04-26 07:26:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:30.500997353Z 2026-04-26 07:26:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:30.501937239Z 2026-04-26 07:26:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:35.500209178Z 2026-04-26 07:26:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:40.500779689Z 2026-04-26 07:26:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:45.499533452Z 2026-04-26 07:26:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:50.500400191Z 2026-04-26 07:26:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:26:55.499964216Z 2026-04-26 07:26:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:00.500799454Z 2026-04-26 07:27:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:00.501795101Z 2026-04-26 07:27:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:05.499837195Z 2026-04-26 07:27:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:10.500091978Z 2026-04-26 07:27:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:15.5003219Z 2026-04-26 07:27:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:20.500138992Z 2026-04-26 07:27:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:25.500356154Z 2026-04-26 07:27:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:30.500404692Z 2026-04-26 07:27:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:30.501103241Z 2026-04-26 07:27:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:35.499985668Z 2026-04-26 07:27:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:40.501602798Z 2026-04-26 07:27:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:45.499823657Z 2026-04-26 07:27:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:50.500134552Z 2026-04-26 07:27:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:27:55.50504977Z 2026-04-26 07:27:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:00.500856686Z 2026-04-26 07:28:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:00.501491432Z 2026-04-26 07:28:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:05.499769593Z 2026-04-26 07:28:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:10.500816719Z 2026-04-26 07:28:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:15.49985866Z 2026-04-26 07:28:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:20.500205396Z 2026-04-26 07:28:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:25.500624304Z 2026-04-26 07:28:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:30.500904959Z 2026-04-26 07:28:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:30.504553936Z 2026-04-26 07:28:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:35.500624519Z 2026-04-26 07:28:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:40.500284507Z 2026-04-26 07:28:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:45.500664335Z 2026-04-26 07:28:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:50.50057218Z 2026-04-26 07:28:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:28:55.500381093Z 2026-04-26 07:28:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:00.500058652Z 2026-04-26 07:29:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:00.500834393Z 2026-04-26 07:29:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:05.500384518Z 2026-04-26 07:29:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:10.50504991Z 2026-04-26 07:29:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:15.499623234Z 2026-04-26 07:29:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:20.502862318Z 2026-04-26 07:29:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:25.501697875Z 2026-04-26 07:29:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:30.500193573Z 2026-04-26 07:29:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:30.500799659Z 2026-04-26 07:29:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:35.500494609Z 2026-04-26 07:29:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:40.500040295Z 2026-04-26 07:29:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:45.50030466Z 2026-04-26 07:29:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:50.500664938Z 2026-04-26 07:29:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:29:52.117067569Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T07:29:52.174195561Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T07:29:55.500661807Z 2026-04-26 07:29:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:30:00.499855314Z 2026-04-26 07:30:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:30:00.500579733Z 2026-04-26 07:30:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:30:04.418171626Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T07:30:05.500269753Z 2026-04-26 07:30:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:30:05.53214401Z 
2026-04-26T07:30:05.532177101Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T07:30:05.532183771Z > node dist/index.js
2026-04-26T07:30:05.532187441Z 
2026-04-26T07:30:09.620873431Z 2026-04-26 07:30:09 [info] [ai] Gemini ready. Primary: gemini-2.5-flash
2026-04-26T07:30:10.501409813Z 2026-04-26 07:30:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:30:10.921837816Z 2026-04-26 07:30:10 [info] Firestore initialized successfully
2026-04-26T07:30:11.117496061Z 2026-04-26 07:30:11 [info] ✅ Server running on http://localhost:10000
2026-04-26T07:30:11.117644964Z 2026-04-26 07:30:11 [info] Environment: production
2026-04-26T07:30:11.117833729Z 2026-04-26 07:30:11 [info] API URL: http://localhost:5000
2026-04-26T07:30:11.118046643Z 2026-04-26 07:30:11 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T07:30:11.895776846Z 2026-04-26 07:30:11 [error] Route / not found
2026-04-26T07:30:11.895797187Z Error: Route / not found
2026-04-26T07:30:11.895801727Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T07:30:11.895805797Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:30:11.895811207Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:30:11.895814937Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:30:11.895822247Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T07:30:11.895824437Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T07:30:11.895826407Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T07:30:11.895828427Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:30:11.895830458Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:30:11.895832827Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:30:11.900453326Z 2026-04-26 07:30:11 [info] {"method":"HEAD","path":"/","status":404,"duration":"3ms","ip":"::1"}
2026-04-26T07:30:12.015956626Z 2026-04-26 07:30:12 [info] [ai] self-test OK via gemini-2.5-flash
2026-04-26T07:30:12.01613168Z 2026-04-26 07:30:12 [info] [ai] ✅ Self-test PASSED — working model: gemini-2.5-flash
2026-04-26T07:30:12.54310051Z 2026-04-26 07:30:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T07:30:12.545184529Z 2026-04-26 07:30:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T07:30:13.41239876Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T07:30:13.486639709Z 2026-04-26 07:30:13 [error] Route / not found
2026-04-26T07:30:13.48666027Z Error: Route / not found
2026-04-26T07:30:13.48666461Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T07:30:13.48666832Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:30:13.48667187Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:30:13.48667612Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:30:13.48667888Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T07:30:13.48668202Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T07:30:13.4866848Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T07:30:13.486699771Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:30:13.486703371Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:30:13.486706281Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:30:13.487332555Z 2026-04-26 07:30:13 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T07:30:13.539837489Z [0;32m[1m==> [0m[1m[0m
2026-04-26T07:30:13.542791829Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T07:30:13.545234656Z [0;32m[1m==> [0m[1m[0m
2026-04-26T07:30:13.547478509Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T07:30:13.55385596Z [0;32m[1m==> [0m[1m[0m
2026-04-26T07:30:13.556515623Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T07:30:15.500753013Z 2026-04-26 07:30:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:30:17.546141438Z 2026-04-26 07:30:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T07:30:20.500212457Z 2026-04-26 07:30:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:30:22.543227276Z 2026-04-26 07:30:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T07:30:22.54467174Z 2026-04-26 07:30:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T07:30:25.501368047Z 2026-04-26 07:30:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
```
