# Render Deploy Diagnostics

Run: 24951076473
Commit: 38d9c20a0b86ba7484a19db99cfa5a3757b83dc4
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mrqd0g4nts73aqmfv0

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
  "updatedAt": "2026-04-26T07:25:03.487924Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mrqd0g4nts73aqmfv0",
  "commit": {
    "id": "38d9c20a0b86ba7484a19db99cfa5a3757b83dc4",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:36547/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-26T07:22:17Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T07:22:28.425148Z",
  "updatedAt": "2026-04-26T07:25:03.486686Z",
  "startedAt": "2026-04-26T07:22:28.370162Z",
  "finishedAt": "2026-04-26T07:25:03.486327Z"
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
```

## App logs (last 4h)
```
2026-04-26T07:24:29.798630363Z 2026-04-26 07:24:29 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:29.842728954Z 2026-04-26 07:24:29 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:29.907055353Z 2026-04-26 07:24:29 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:30.067964762Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T07:24:30.131633273Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T07:24:30.180294122Z 2026-04-26 07:24:30 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:30.180316162Z 2026-04-26 07:24:30 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:24:30.232456633Z 2026-04-26 07:24:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:24:30.273865708Z 2026-04-26 07:24:30 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:30.273886288Z 2026-04-26 07:24:30 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:24:30.29530853Z 2026-04-26 07:24:30 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:30.491976213Z 2026-04-26 07:24:30 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:30.491999913Z 2026-04-26 07:24:30 [info] [wa] reconnecting in 60000ms (attempt 12)
2026-04-26T07:24:30.6803502Z 2026-04-26 07:24:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:24:30.995607546Z 2026-04-26 07:24:30 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:30.995715468Z 2026-04-26 07:24:30 [info] [wa] reconnecting in 60000ms (attempt 16)
2026-04-26T07:24:31.177844114Z 2026-04-26 07:24:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:24:31.239095217Z 2026-04-26 07:24:31 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:31.759259589Z 2026-04-26 07:24:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:24:31.822246349Z 2026-04-26 07:24:31 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:32.67008411Z 2026-04-26 07:24:32 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:32.765832061Z 2026-04-26 07:24:32 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:32.765866292Z 2026-04-26 07:24:32 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:24:33.03100434Z 2026-04-26 07:24:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:33.03102541Z 2026-04-26 07:24:33 [info] [wa] reconnecting in 60000ms (attempt 17)
2026-04-26T07:24:33.30190824Z 2026-04-26 07:24:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:24:33.364063202Z 2026-04-26 07:24:33 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:33.53828005Z 2026-04-26 07:24:33 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:33.683312242Z 2026-04-26 07:24:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:33.683333013Z 2026-04-26 07:24:33 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:24:33.765829505Z 2026-04-26 07:24:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:24:33.82668898Z 2026-04-26 07:24:33 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:34.197683922Z 2026-04-26 07:24:34 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:34.259399556Z 2026-04-26 07:24:34 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:34.557450588Z 2026-04-26 07:24:34 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:34.55845752Z 2026-04-26 07:24:34 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:24:34.635017546Z 2026-04-26 07:24:34 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:34.635044707Z 2026-04-26 07:24:34 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:24:34.676569403Z 2026-04-26 07:24:34 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T07:24:34.739129554Z 2026-04-26 07:24:34 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:34.922473505Z 2026-04-26 07:24:34 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:34.922495066Z 2026-04-26 07:24:34 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:24:35.186888648Z 2026-04-26 07:24:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T07:24:35.24857893Z 2026-04-26 07:24:35 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:35.395848439Z 2026-04-26 07:24:35 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:35.39587878Z 2026-04-26 07:24:35 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:24:35.557481242Z 2026-04-26 07:24:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:24:35.621396421Z 2026-04-26 07:24:35 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:35.65162265Z 2026-04-26 07:24:35 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:35.65164589Z 2026-04-26 07:24:35 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:24:35.680853567Z 2026-04-26 07:24:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:24:35.694622297Z 2026-04-26 07:24:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:24:35.720719628Z 2026-04-26 07:24:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 16)
2026-04-26T07:24:35.758466415Z 2026-04-26 07:24:35 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:35.795844444Z 2026-04-26 07:24:35 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:35.957853595Z 2026-04-26 07:24:35 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:36.130542221Z 2026-04-26 07:24:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:24:36.174974229Z 2026-04-26 07:24:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:36.196073935Z 2026-04-26 07:24:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:36.19917216Z 2026-04-26 07:24:36 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:36.19919216Z 2026-04-26 07:24:36 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:24:36.199455286Z 2026-04-26 07:24:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T07:24:36.29959379Z 2026-04-26 07:24:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:36.303313459Z 2026-04-26 07:24:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:36.49520572Z 2026-04-26 07:24:36 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:36.49522521Z 2026-04-26 07:24:36 [info] [wa] reconnecting in 60000ms (attempt 12)
2026-04-26T07:24:36.635023512Z 2026-04-26 07:24:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:24:36.698042263Z 2026-04-26 07:24:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:36.897057224Z 2026-04-26 07:24:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T07:24:36.923003762Z 2026-04-26 07:24:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:24:36.960950043Z 2026-04-26 07:24:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:36.99822896Z 2026-04-26 07:24:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:37.096766211Z 2026-04-26 07:24:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:37.096783081Z 2026-04-26 07:24:37 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:24:37.198589071Z 2026-04-26 07:24:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:24:37.201374379Z 2026-04-26 07:24:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:24:37.295234271Z 2026-04-26 07:24:37 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:37.298294326Z 2026-04-26 07:24:37 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:37.300660296Z 2026-04-26 07:24:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:37.300677486Z 2026-04-26 07:24:37 [info] [wa] reconnecting in 60000ms (attempt 17)
2026-04-26T07:24:37.398138954Z 2026-04-26 07:24:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:37.398878509Z 2026-04-26 07:24:37 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:24:37.510970726Z 2026-04-26 07:24:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:37.510989076Z 2026-04-26 07:24:37 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:24:37.640307806Z 2026-04-26 07:24:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:37.640354098Z 2026-04-26 07:24:37 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:24:37.670515004Z 2026-04-26 07:24:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:37.670531885Z 2026-04-26 07:24:37 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:24:37.741792799Z 2026-04-26 07:24:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:37.74181217Z 2026-04-26 07:24:37 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:24:37.956748978Z 2026-04-26 07:24:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:37.956767018Z 2026-04-26 07:24:37 [info] [wa] reconnecting in 60000ms (attempt 13)
2026-04-26T07:24:38.008332557Z 2026-04-26 07:24:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:38.008377178Z 2026-04-26 07:24:38 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:24:38.197070421Z 2026-04-26 07:24:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:38.197103322Z 2026-04-26 07:24:38 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:24:38.272622577Z 2026-04-26 07:24:38 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:24:38.334680057Z 2026-04-26 07:24:38 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:39.097738027Z 2026-04-26 07:24:39 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:24:39.165243713Z 2026-04-26 07:24:39 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:39.172776022Z 2026-04-26 07:24:39 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:39.172928235Z 2026-04-26 07:24:39 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:24:39.203520101Z 2026-04-26 07:24:39 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:24:39.265417648Z 2026-04-26 07:24:39 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:39.838200181Z 2026-04-26 07:24:39 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 15)
2026-04-26T07:24:39.841514341Z 2026-04-26 07:24:39 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:24:39.903959429Z 2026-04-26 07:24:39 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:39.905638314Z 2026-04-26 07:24:39 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:39.920910777Z 2026-04-26 07:24:39 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:39.99684896Z 2026-04-26 07:24:39 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:39.996878171Z 2026-04-26 07:24:39 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:24:40.008708701Z 2026-04-26 07:24:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:24:40.03188847Z 2026-04-26 07:24:40 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:40.03190512Z 2026-04-26 07:24:40 [info] [wa] reconnecting in 60000ms (attempt 14)
2026-04-26T07:24:40.099525098Z 2026-04-26 07:24:40 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:40.259034046Z 2026-04-26 07:24:40 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:40.259051066Z 2026-04-26 07:24:40 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:24:40.52638318Z 2026-04-26 07:24:40 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:40.526407971Z 2026-04-26 07:24:40 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:24:40.542650384Z 2026-04-26 07:24:40 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:40.542677924Z 2026-04-26 07:24:40 [info] [wa] reconnecting in 60000ms (attempt 16)
2026-04-26T07:24:40.611507437Z 2026-04-26 07:24:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:40.697922952Z 2026-04-26 07:24:40 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:40.703453259Z 2026-04-26 07:24:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:24:40.997276602Z 2026-04-26 07:24:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:24:41.012681197Z 2026-04-26 07:24:41 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:41.012702338Z 2026-04-26 07:24:41 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:24:41.058503075Z 2026-04-26 07:24:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:41.398441592Z 2026-04-26 07:24:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:24:41.410371674Z 2026-04-26 07:24:41 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:41.410407604Z 2026-04-26 07:24:41 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:24:41.460559853Z 2026-04-26 07:24:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:41.662513977Z 2026-04-26 07:24:41 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:41.662541558Z 2026-04-26 07:24:41 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:24:41.742349963Z 2026-04-26 07:24:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:24:41.803110255Z 2026-04-26 07:24:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:41.805274381Z 2026-04-26 07:24:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:24:41.871795926Z 2026-04-26 07:24:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:42.10454923Z 2026-04-26 07:24:42 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:42.217137187Z 2026-04-26 07:24:42 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:24:42.297042244Z 2026-04-26 07:24:42 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:43.595314924Z 2026-04-26 07:24:43 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:43.595340525Z 2026-04-26 07:24:43 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:24:43.701296931Z 2026-04-26 07:24:43 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:43.894630663Z 2026-04-26 07:24:43 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:24:43.970631068Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T07:24:43.995311939Z 2026-04-26 07:24:43 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:44.094758529Z 2026-04-26 07:24:44 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:24:44.697449163Z 2026-04-26 07:24:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:44.697480823Z 2026-04-26 07:24:44 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:24:44.700573809Z 2026-04-26 07:24:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:24:44.796455013Z 2026-04-26 07:24:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=WebSocket Error ())
2026-04-26T07:24:44.796483104Z 2026-04-26 07:24:44 [info] [wa] reconnecting in 60000ms (attempt 8)
2026-04-26T07:24:44.796619837Z 2026-04-26 07:24:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:24:44.895093576Z 2026-04-26 07:24:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:24:44.895529725Z 2026-04-26 07:24:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:24:44.904980944Z 2026-04-26 07:24:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:45.001994293Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.004416194Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.094878514Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.099289727Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.195542589Z 2026-04-26 07:24:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:24:45.197245355Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.202293341Z 2026-04-26 07:24:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 19)
2026-04-26T07:24:45.205630672Z 2026-04-26 07:24:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T07:24:45.29603008Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.299616296Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.303906057Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.397902821Z 2026-04-26 07:24:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:24:45.411550339Z 2026-04-26 07:24:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:24:45.495742317Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.499756152Z 2026-04-26 07:24:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:45.577313902Z 
2026-04-26T07:24:45.577348573Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T07:24:45.577354804Z > node dist/index.js
2026-04-26T07:24:45.577358284Z 
2026-04-26T07:24:45.70001591Z 2026-04-26 07:24:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:24:45.701377678Z 2026-04-26 07:24:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:24:45.85494292Z 2026-04-26 07:24:45 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:45.854957561Z 2026-04-26 07:24:45 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:24:45.865699918Z 2026-04-26 07:24:45 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:45.865714508Z 2026-04-26 07:24:45 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:24:46.048986437Z 2026-04-26 07:24:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:46.049006118Z 2026-04-26 07:24:46 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:24:46.065893144Z 2026-04-26 07:24:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:46.066011117Z 2026-04-26 07:24:46 [info] [wa] reconnecting in 60000ms (attempt 20)
2026-04-26T07:24:46.091513805Z 2026-04-26 07:24:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:46.091530595Z 2026-04-26 07:24:46 [info] [wa] reconnecting in 60000ms (attempt 13)
2026-04-26T07:24:46.218614149Z 2026-04-26 07:24:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:46.218636919Z 2026-04-26 07:24:46 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:24:46.349692936Z 2026-04-26 07:24:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:46.349729087Z 2026-04-26 07:24:46 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:24:46.366988991Z 2026-04-26 07:24:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:46.367013992Z 2026-04-26 07:24:46 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:24:46.409942228Z 2026-04-26 07:24:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T07:24:46.482783756Z 2026-04-26 07:24:46 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:47.214930603Z 2026-04-26 07:24:47 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:47.214951614Z 2026-04-26 07:24:47 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:24:47.777095942Z 2026-04-26 07:24:47 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:47.777128983Z 2026-04-26 07:24:47 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:24:47.80022925Z 2026-04-26 07:24:47 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:49.21550003Z 2026-04-26 07:24:49 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:24:49.275801183Z 2026-04-26 07:24:49 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:49.303284963Z 2026-04-26 07:24:49 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:24:49.365917066Z 2026-04-26 07:24:49 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:49.605188647Z 2026-04-26 07:24:49 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:24:49.668134246Z 2026-04-26 07:24:49 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:50.144373491Z 2026-04-26 07:24:50 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:50.144398561Z 2026-04-26 07:24:50 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:24:50.167143791Z 2026-04-26 07:24:50 [info] [ai] Gemini ready. Primary: gemini-2.5-flash
2026-04-26T07:24:50.337022348Z 2026-04-26 07:24:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T07:24:50.409685162Z 2026-04-26 07:24:50 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:50.682737207Z 2026-04-26 07:24:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:24:50.723641461Z 2026-04-26 07:24:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:24:50.785723901Z 2026-04-26 07:24:50 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:51.067716955Z 2026-04-26 07:24:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T07:24:51.134018965Z 2026-04-26 07:24:51 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:51.144911654Z 2026-04-26 07:24:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:24:51.205758709Z 2026-04-26 07:24:51 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:51.255032269Z 2026-04-26 07:24:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:24:51.320008191Z 2026-04-26 07:24:51 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:51.362639463Z 2026-04-26 07:24:51 [info] Firestore initialized successfully
2026-04-26T07:24:51.455819928Z 2026-04-26 07:24:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:51.455840649Z 2026-04-26 07:24:51 [info] [wa] reconnecting in 60000ms (attempt 11)
2026-04-26T07:24:51.655878822Z 2026-04-26 07:24:51 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:51.768616217Z 2026-04-26 07:24:51 [info] ✅ Server running on http://localhost:10000
2026-04-26T07:24:51.768829742Z 2026-04-26 07:24:51 [info] Environment: production
2026-04-26T07:24:51.769041088Z 2026-04-26 07:24:51 [info] API URL: http://localhost:5000
2026-04-26T07:24:51.769245463Z 2026-04-26 07:24:51 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T07:24:51.824900231Z 2026-04-26 07:24:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:51.824924901Z 2026-04-26 07:24:51 [info] [wa] reconnecting in 60000ms (attempt 14)
2026-04-26T07:24:51.832366898Z 2026-04-26 07:24:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:51.832385598Z 2026-04-26 07:24:51 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:24:51.857623061Z 2026-04-26 07:24:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:51.857641492Z 2026-04-26 07:24:51 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:24:51.870797223Z 2026-04-26 07:24:51 [error] Route / not found
2026-04-26T07:24:51.870817564Z Error: Route / not found
2026-04-26T07:24:51.870821854Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T07:24:51.870825204Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:24:51.870831974Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:24:51.870835054Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:24:51.870838065Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T07:24:51.870840994Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T07:24:51.870843465Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T07:24:51.870846005Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:24:51.870848505Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:24:51.870851075Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:24:51.89734378Z 2026-04-26 07:24:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:24:51.957388528Z 2026-04-26 07:24:51 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:51.963498897Z 2026-04-26 07:24:51 [info] {"method":"HEAD","path":"/","status":404,"duration":"93ms","ip":"::1"}
2026-04-26T07:24:51.997992125Z 2026-04-26 07:24:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:51.998012615Z 2026-04-26 07:24:51 [info] [wa] reconnecting in 60000ms (attempt 8)
2026-04-26T07:24:52.217609671Z 2026-04-26 07:24:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:52.278996487Z 2026-04-26 07:24:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:52.298841506Z 2026-04-26 07:24:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T07:24:52.361095271Z 2026-04-26 07:24:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:52.610103088Z 2026-04-26 07:24:52 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:52.610126368Z 2026-04-26 07:24:52 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:24:52.708769821Z 2026-04-26 07:24:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:24:52.708792521Z 2026-04-26 07:24:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T07:24:52.727033436Z 2026-04-26 07:24:52 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:52.727072447Z 2026-04-26 07:24:52 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:24:52.771531146Z 2026-04-26 07:24:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:52.795953681Z 2026-04-26 07:24:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:52.833389212Z 2026-04-26 07:24:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:24:52.873784888Z 2026-04-26 07:24:52 [info] [ai] self-test OK via gemini-2.5-flash
2026-04-26T07:24:52.873958193Z 2026-04-26 07:24:52 [info] [ai] ✅ Self-test PASSED — working model: gemini-2.5-flash
2026-04-26T07:24:52.90242888Z 2026-04-26 07:24:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:53.000815277Z 2026-04-26 07:24:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:53.000838317Z 2026-04-26 07:24:53 [info] [wa] reconnecting in 60000ms (attempt 8)
2026-04-26T07:24:53.003598035Z 2026-04-26 07:24:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:53.003613726Z 2026-04-26 07:24:53 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:24:53.184070515Z 2026-04-26 07:24:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:53.184090896Z 2026-04-26 07:24:53 [info] [wa] reconnecting in 60000ms (attempt 8)
2026-04-26T07:24:53.459089472Z 2026-04-26 07:24:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:53.459113632Z 2026-04-26 07:24:53 [info] [wa] reconnecting in 60000ms (attempt 12)
2026-04-26T07:24:53.694651965Z 2026-04-26 07:24:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:53.694682806Z 2026-04-26 07:24:53 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:24:53.858024694Z 2026-04-26 07:24:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:24:53.909319647Z 2026-04-26 07:24:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:53.909343838Z 2026-04-26 07:24:53 [info] [wa] reconnecting in 60000ms (attempt 13)
2026-04-26T07:24:53.920485683Z 2026-04-26 07:24:53 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:54.048676069Z 2026-04-26 07:24:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:24:54.098855119Z 2026-04-26 07:24:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T07:24:54.112371974Z 2026-04-26 07:24:54 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:54.161417909Z 2026-04-26 07:24:54 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:54.3452197Z 2026-04-26 07:24:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:54.420251424Z 2026-04-26 07:24:54 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:54.509879416Z 2026-04-26 07:24:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:54.570318152Z 2026-04-26 07:24:54 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:54.752562349Z 2026-04-26 07:24:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:54.75258451Z 2026-04-26 07:24:54 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:24:54.793265909Z 2026-04-26 07:24:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:54.794041005Z 2026-04-26 07:24:54 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:24:54.846545324Z 2026-04-26 07:24:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:24:54.909761048Z 2026-04-26 07:24:54 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:55.051375748Z 2026-04-26 07:24:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:24:55.112975289Z 2026-04-26 07:24:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:55.173056897Z 2026-04-26 07:24:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:24:55.237051028Z 2026-04-26 07:24:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:55.316083817Z 2026-04-26 07:24:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:24:55.337998879Z 2026-04-26 07:24:55 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:55.33801717Z 2026-04-26 07:24:55 [info] [wa] reconnecting in 60000ms (attempt 12)
2026-04-26T07:24:55.377762639Z 2026-04-26 07:24:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:55.624631111Z 2026-04-26 07:24:55 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:55.624656911Z 2026-04-26 07:24:55 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:24:55.680735735Z 2026-04-26 07:24:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:24:55.777259813Z 2026-04-26 07:24:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:24:55.837776771Z 2026-04-26 07:24:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:55.895394627Z 2026-04-26 07:24:55 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:55.895411867Z 2026-04-26 07:24:55 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:24:55.956001067Z 2026-04-26 07:24:55 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:55.956017467Z 2026-04-26 07:24:55 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:24:56.063891084Z 2026-04-26 07:24:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:56.063932205Z 2026-04-26 07:24:56 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:24:56.089917344Z 2026-04-26 07:24:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:56.089938344Z 2026-04-26 07:24:56 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:24:56.503212879Z 2026-04-26 07:24:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:56.563718997Z 2026-04-26 07:24:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:56.656929104Z 2026-04-26 07:24:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:56.656966255Z 2026-04-26 07:24:56 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:24:56.722700413Z 2026-04-26 07:24:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:24:56.752543543Z 2026-04-26 07:24:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:24:56.783924506Z 2026-04-26 07:24:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:56.814322467Z 2026-04-26 07:24:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:57.11143124Z 2026-04-26 07:24:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:24:57.195965305Z 2026-04-26 07:24:57 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:57.45486051Z 2026-04-26 07:24:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:57.45487546Z 2026-04-26 07:24:57 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T07:24:57.476536228Z 2026-04-26 07:24:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:57.476555358Z 2026-04-26 07:24:57 [info] [wa] reconnecting in 60000ms (attempt 8)
2026-04-26T07:24:57.589643436Z 2026-04-26 07:24:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:24:57.589666336Z 2026-04-26 07:24:57 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:24:58.313495427Z 2026-04-26 07:24:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:24:58.375062957Z 2026-04-26 07:24:58 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:58.408432672Z 2026-04-26 07:24:58 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:58.557424357Z 2026-04-26 07:24:58 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:24:58.557444558Z 2026-04-26 07:24:58 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:24:58.616826851Z 2026-04-26 07:24:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:24:58.695712327Z 2026-04-26 07:24:58 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:58.716424594Z 2026-04-26 07:24:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:24:58.778116247Z 2026-04-26 07:24:58 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:58.793640454Z 2026-04-26 07:24:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:24:58.857937472Z 2026-04-26 07:24:58 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:24:59.120119927Z 2026-04-26 07:24:59 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 17)
2026-04-26T07:24:59.180879799Z 2026-04-26 07:24:59 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:00.512081335Z 2026-04-26 07:25:00 [info] {"method":"GET","path":"/health","status":200,"duration":"6ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:00.548009864Z 2026-04-26 07:25:00 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:01.601229897Z 2026-04-26 07:25:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T07:25:01.601953832Z 2026-04-26 07:25:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T07:25:01.602543305Z 2026-04-26 07:25:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 14)
2026-04-26T07:25:01.603061306Z 2026-04-26 07:25:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:25:01.605771153Z 2026-04-26 07:25:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 17)
2026-04-26T07:25:01.697594482Z 2026-04-26 07:25:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:25:01.697757805Z 2026-04-26 07:25:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T07:25:01.795407536Z 2026-04-26 07:25:01 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:01.795436067Z 2026-04-26 07:25:01 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:01.796247264Z 2026-04-26 07:25:01 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:01.796268245Z 2026-04-26 07:25:01 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:01.796731504Z 2026-04-26 07:25:01 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:01.796748855Z 2026-04-26 07:25:01 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:25:01.797418959Z 2026-04-26 07:25:01 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:01.797430739Z 2026-04-26 07:25:01 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:25:01.900568957Z 2026-04-26 07:25:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:25:01.904162403Z 2026-04-26 07:25:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:25:01.996824979Z 2026-04-26 07:25:01 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:01.999610498Z 2026-04-26 07:25:01 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:02.002236503Z 2026-04-26 07:25:02 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:02.100277543Z 2026-04-26 07:25:02 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:02.102264255Z 2026-04-26 07:25:02 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:02.104205566Z 2026-04-26 07:25:02 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:02.198800603Z 2026-04-26 07:25:02 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:02.301702066Z 2026-04-26 07:25:02 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:02.41041952Z 2026-04-26 07:25:02 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:02.410455991Z 2026-04-26 07:25:02 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:25:02.736130587Z 2026-04-26 07:25:02 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:02.736171317Z 2026-04-26 07:25:02 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:02.801929585Z 2026-04-26 07:25:02 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:02.895498181Z 2026-04-26 07:25:02 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:02.994664584Z 2026-04-26 07:25:02 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:02.994744116Z 2026-04-26 07:25:02 [info] [wa] reconnecting in 60000ms (attempt 18)
2026-04-26T07:25:03.029199323Z 2026-04-26 07:25:03 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T07:25:03.090862755Z 2026-04-26 07:25:03 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:03.140248748Z 2026-04-26 07:25:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:03.140269728Z 2026-04-26 07:25:03 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:25:03.147896449Z 2026-04-26 07:25:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:03.14791303Z 2026-04-26 07:25:03 [info] [wa] reconnecting in 60000ms (attempt 18)
2026-04-26T07:25:03.179960666Z 2026-04-26 07:25:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:03.179979117Z 2026-04-26 07:25:03 [info] [wa] reconnecting in 60000ms (attempt 12)
2026-04-26T07:25:03.207909896Z 2026-04-26 07:25:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:03.207929447Z 2026-04-26 07:25:03 [info] [wa] reconnecting in 60000ms (attempt 14)
2026-04-26T07:25:03.263780396Z 2026-04-26 07:25:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:03.263799836Z 2026-04-26 07:25:03 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:25:03.623825718Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T07:25:03.750836531Z 2026-04-26 07:25:03 [error] Route / not found
2026-04-26T07:25:03.750861472Z Error: Route / not found
2026-04-26T07:25:03.750867702Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T07:25:03.750873952Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:25:03.750879483Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:25:03.750884373Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:25:03.750889933Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T07:25:03.750895203Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T07:25:03.750900413Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T07:25:03.750915464Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T07:25:03.750918584Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T07:25:03.750921984Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T07:25:03.754133329Z 2026-04-26 07:25:03 [info] {"method":"GET","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T07:25:03.896532957Z [0;32m[1m==> [0m[1m[0m
2026-04-26T07:25:03.898696245Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T07:25:03.900764351Z [0;32m[1m==> [0m[1m[0m
2026-04-26T07:25:03.902574369Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T07:25:03.904372778Z [0;32m[1m==> [0m[1m[0m
2026-04-26T07:25:03.906515505Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T07:25:03.931203166Z 2026-04-26 07:25:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:03.931222997Z 2026-04-26 07:25:03 [info] [wa] reconnecting in 60000ms (attempt 8)
2026-04-26T07:25:04.257801931Z 2026-04-26 07:25:04 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:04.257831262Z 2026-04-26 07:25:04 [info] [wa] reconnecting in 60000ms (attempt 15)
2026-04-26T07:25:04.781877175Z 2026-04-26 07:25:04 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:04.91854192Z 2026-04-26 07:25:04 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:04.918566941Z 2026-04-26 07:25:04 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T07:25:05.094888263Z 2026-04-26 07:25:05 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:25:05.155096244Z 2026-04-26 07:25:05 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:05.500728147Z 2026-04-26 07:25:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:05.68021356Z 2026-04-26 07:25:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:25:05.819843728Z 2026-04-26 07:25:05 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:05.819875438Z 2026-04-26 07:25:05 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:06.447958388Z 2026-04-26 07:25:06 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:06.820032433Z 2026-04-26 07:25:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:06.886727951Z 2026-04-26 07:25:06 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:07.028809751Z 2026-04-26 07:25:07 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:25:07.090001823Z 2026-04-26 07:25:07 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:07.367752316Z 2026-04-26 07:25:07 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:07.367781427Z 2026-04-26 07:25:07 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:07.444736061Z 2026-04-26 07:25:07 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:07.444756542Z 2026-04-26 07:25:07 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:07.825896318Z 2026-04-26 07:25:07 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:08.394951572Z 2026-04-26 07:25:08 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:08.395440222Z 2026-04-26 07:25:08 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 15)
2026-04-26T07:25:08.457342609Z 2026-04-26 07:25:08 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:08.459844551Z 2026-04-26 07:25:08 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:08.609897959Z 2026-04-26 07:25:08 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:25:08.677093338Z 2026-04-26 07:25:08 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:08.770265015Z 2026-04-26 07:25:08 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 16)
2026-04-26T07:25:08.813271333Z 2026-04-26 07:25:08 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T07:25:08.8373294Z 2026-04-26 07:25:08 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:08.896700824Z 2026-04-26 07:25:08 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:08.896732955Z 2026-04-26 07:25:08 [info] [wa] reconnecting in 1000ms (attempt 1)
2026-04-26T07:25:08.898576374Z 2026-04-26 07:25:08 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:09.070227728Z 2026-04-26 07:25:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 14)
2026-04-26T07:25:09.129492088Z 2026-04-26 07:25:09 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:09.129512159Z 2026-04-26 07:25:09 [info] [wa] reconnecting in 60000ms (attempt 16)
2026-04-26T07:25:09.132644165Z 2026-04-26 07:25:09 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:09.44409729Z 2026-04-26 07:25:09 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:09.444143271Z 2026-04-26 07:25:09 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:25:09.444427717Z 2026-04-26 07:25:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T07:25:09.505565888Z 2026-04-26 07:25:09 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:09.616762495Z 2026-04-26 07:25:09 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:09.616780586Z 2026-04-26 07:25:09 [info] [wa] reconnecting in 60000ms (attempt 13)
2026-04-26T07:25:09.671182764Z 2026-04-26 07:25:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:25:09.694809553Z 2026-04-26 07:25:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T07:25:09.696210572Z 2026-04-26 07:25:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T07:25:09.698288716Z 2026-04-26 07:25:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T07:25:09.731356305Z 2026-04-26 07:25:09 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:09.795793085Z 2026-04-26 07:25:09 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:09.797984641Z 2026-04-26 07:25:09 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:09.799590385Z 2026-04-26 07:25:09 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:09.900105437Z 2026-04-26 07:25:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T07:25:09.997629596Z 2026-04-26 07:25:09 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:10.200462638Z 2026-04-26 07:25:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T07:25:10.26403026Z 2026-04-26 07:25:10 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:10.322185887Z 2026-04-26 07:25:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:10.322205898Z 2026-04-26 07:25:10 [info] [wa] reconnecting in 60000ms (attempt 10)
2026-04-26T07:25:10.340516594Z 2026-04-26 07:25:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:10.340533645Z 2026-04-26 07:25:10 [info] [wa] reconnecting in 60000ms (attempt 15)
2026-04-26T07:25:10.386771281Z 2026-04-26 07:25:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:10.386864653Z 2026-04-26 07:25:10 [info] [wa] reconnecting in 32000ms (attempt 6)
2026-04-26T07:25:10.396642669Z 2026-04-26 07:25:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:10.396742601Z 2026-04-26 07:25:10 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T07:25:10.411435472Z 2026-04-26 07:25:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T07:25:10.472364768Z 2026-04-26 07:25:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:10.472382198Z 2026-04-26 07:25:10 [info] [wa] reconnecting in 60000ms (attempt 11)
2026-04-26T07:25:10.496000167Z 2026-04-26 07:25:10 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:10.502121259Z 2026-04-26 07:25:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.174"}
2026-04-26T07:25:10.605901297Z 2026-04-26 07:25:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:10.605927128Z 2026-04-26 07:25:10 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:25:10.696188723Z 2026-04-26 07:25:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=503, msg=Connection Failure)
2026-04-26T07:25:10.696220224Z 2026-04-26 07:25:10 [info] [wa] reconnecting in 60000ms (attempt 9)
2026-04-26T07:25:10.702993267Z 2026-04-26 07:25:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.127"}
2026-04-26T07:25:10.855595578Z 2026-04-26 07:25:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:25:10.925239498Z 2026-04-26 07:25:10 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:10.998616018Z 2026-04-26 07:25:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T07:25:11.007812422Z 2026-04-26 07:25:11 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:11.094683186Z 2026-04-26 07:25:11 [info] [wa] reconnecting in 60000ms (attempt 7)
2026-04-26T07:25:11.131939842Z 2026-04-26 07:25:11 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 16)
2026-04-26T07:25:11.200711284Z 2026-04-26 07:25:11 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:11.307753724Z 2026-04-26 07:25:11 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T07:25:11.60222749Z 2026-04-26 07:25:11 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T07:25:11.63344246Z 2026-04-26 07:25:11 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=440, msg=Stream Errored (conflict))
2026-04-26T07:25:11.634516762Z 2026-04-26 07:25:11 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T07:25:11.696631994Z 2026-04-26 07:25:11 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
```
