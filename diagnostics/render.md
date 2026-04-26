# Render Deploy Diagnostics

Run: 24952004133
Commit: 49633d60003a55bbe070d2eee882b565f6a3094f
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7msj668bjmc738gt0kg

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
  "updatedAt": "2026-04-26T08:17:26.905587Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7msj668bjmc738gt0kg",
  "commit": {
    "id": "49633d60003a55bbe070d2eee882b565f6a3094f",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:33573/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-26T08:15:00Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T08:15:20.745032Z",
  "updatedAt": "2026-04-26T08:17:26.894599Z",
  "startedAt": "2026-04-26T08:15:20.680501Z",
  "finishedAt": "2026-04-26T08:17:26.894243Z"
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
2026-04-26T07:58:18.183270506Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-26T07:58:18.872459794Z [34m[1m==>(B[m [1mChecking out commit 9d81df522613b64e48b7f1b3efa20762a2f427d8 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-26T07:58:20.284936241Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-26T07:58:20.319413441Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-26T07:58:22.236861078Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-26T07:59:45.02495465Z 
2026-04-26T07:59:45.024986862Z added 590 packages, and audited 591 packages in 1m
2026-04-26T07:59:45.024997522Z 
2026-04-26T07:59:45.025087967Z 113 packages are looking for funding
2026-04-26T07:59:45.02514823Z   run `npm fund` for details
2026-04-26T07:59:45.180418045Z 
2026-04-26T07:59:45.180448876Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-26T07:59:45.180455597Z 
2026-04-26T07:59:45.180462207Z To address issues that do not require attention, run:
2026-04-26T07:59:45.180468077Z   npm audit fix
2026-04-26T07:59:45.180471997Z 
2026-04-26T07:59:45.180475888Z To address all issues (including breaking changes), run:
2026-04-26T07:59:45.180480328Z   npm audit fix --force
2026-04-26T07:59:45.180484058Z 
2026-04-26T07:59:45.180488749Z Run `npm audit` for details.
2026-04-26T07:59:45.412289451Z 
2026-04-26T07:59:45.412308442Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-26T07:59:45.412313492Z > tsc && tsc-alias
2026-04-26T07:59:45.412317432Z 
2026-04-26T07:59:48.529716573Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-26T07:59:57.558578654Z [34;1m==>[0;22m [1mUploaded in 6.6s. Compression took 2.5s[22m
2026-04-26T07:59:57.592160879Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-26T08:03:15.36858402Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-26T08:03:16.085083561Z [34m[1m==>(B[m [1mChecking out commit 9d81df522613b64e48b7f1b3efa20762a2f427d8 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-26T08:03:17.439716135Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-26T08:03:17.463759244Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-26T08:03:19.365654991Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-26T08:04:41.319570058Z 
2026-04-26T08:04:41.319597498Z added 590 packages, and audited 591 packages in 1m
2026-04-26T08:04:41.319610919Z 
2026-04-26T08:04:41.31970507Z 113 packages are looking for funding
2026-04-26T08:04:41.319773542Z   run `npm fund` for details
2026-04-26T08:04:41.464748006Z 
2026-04-26T08:04:41.464778337Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-26T08:04:41.464785707Z 
2026-04-26T08:04:41.464792267Z To address issues that do not require attention, run:
2026-04-26T08:04:41.464798547Z   npm audit fix
2026-04-26T08:04:41.464804437Z 
2026-04-26T08:04:41.464810627Z To address all issues (including breaking changes), run:
2026-04-26T08:04:41.464815117Z   npm audit fix --force
2026-04-26T08:04:41.464818888Z 
2026-04-26T08:04:41.464823308Z Run `npm audit` for details.
2026-04-26T08:04:41.671077516Z 
2026-04-26T08:04:41.671104896Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-26T08:04:41.671112767Z > tsc && tsc-alias
2026-04-26T08:04:41.671118876Z 
2026-04-26T08:04:44.647419139Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-26T08:04:50.568686934Z [34;1m==>[0;22m [1mUploaded in 3.5s. Compression took 2.4s[22m
2026-04-26T08:04:50.601538624Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-26T08:15:23.666498225Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-26T08:15:29.354632877Z [34m[1m==>(B[m [1mChecking out commit 49633d60003a55bbe070d2eee882b565f6a3094f in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-26T08:15:30.623299497Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-26T08:15:30.646925681Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-26T08:15:32.545283672Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-26T08:16:53.575950756Z 
2026-04-26T08:16:53.575979887Z added 590 packages, and audited 591 packages in 1m
2026-04-26T08:16:53.575991517Z 
2026-04-26T08:16:53.576059479Z 113 packages are looking for funding
2026-04-26T08:16:53.576118791Z   run `npm fund` for details
2026-04-26T08:16:53.721654022Z 
2026-04-26T08:16:53.721681073Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-26T08:16:53.721685633Z 
2026-04-26T08:16:53.721690053Z To address issues that do not require attention, run:
2026-04-26T08:16:53.721694103Z   npm audit fix
2026-04-26T08:16:53.721697914Z 
2026-04-26T08:16:53.721701954Z To address all issues (including breaking changes), run:
2026-04-26T08:16:53.721706394Z   npm audit fix --force
2026-04-26T08:16:53.721710184Z 
2026-04-26T08:16:53.721716064Z Run `npm audit` for details.
2026-04-26T08:16:53.944822052Z 
2026-04-26T08:16:53.944845362Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-26T08:16:53.944850102Z > tsc && tsc-alias
2026-04-26T08:16:53.944853312Z 
2026-04-26T08:16:56.77662937Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-26T08:17:02.755026526Z [34;1m==>[0;22m [1mUploaded in 3.5s. Compression took 2.5s[22m
2026-04-26T08:17:02.786286229Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-26T08:00:00.087860875Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T08:00:00.173462252Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T08:00:02.544868042Z 2026-04-26 08:00:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:07.545333389Z 2026-04-26 08:00:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:12.5456067Z 2026-04-26 08:00:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:17.54583578Z 2026-04-26 08:00:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:19.277038109Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T08:00:20.571309997Z 
2026-04-26T08:00:20.571341158Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T08:00:20.571347239Z > node dist/index.js
2026-04-26T08:00:20.571350379Z 
2026-04-26T08:00:22.541344416Z 2026-04-26 08:00:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:22.544205194Z 2026-04-26 08:00:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:25.161785786Z 2026-04-26 08:00:25 [info] [ai] Gemini ready. Primary: gemini-2.5-flash
2026-04-26T08:00:26.555645377Z 2026-04-26 08:00:26 [info] Firestore initialized successfully
2026-04-26T08:00:26.662735805Z 2026-04-26 08:00:26 [info] ✅ Server running on http://localhost:10000
2026-04-26T08:00:26.662896514Z 2026-04-26 08:00:26 [info] Environment: production
2026-04-26T08:00:26.663479408Z 2026-04-26 08:00:26 [info] API URL: http://localhost:5000
2026-04-26T08:00:26.663490378Z 2026-04-26 08:00:26 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T08:00:27.051721158Z 2026-04-26 08:00:27 [error] Route / not found
2026-04-26T08:00:27.051741229Z Error: Route / not found
2026-04-26T08:00:27.051745109Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T08:00:27.051748409Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:00:27.051753559Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:00:27.0517567Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:00:27.05175953Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T08:00:27.05176227Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T08:00:27.05176479Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T08:00:27.05176719Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:00:27.051769631Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:00:27.051772061Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:00:27.055279603Z 2026-04-26 08:00:27 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T08:00:27.54775601Z 2026-04-26 08:00:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:27.753592879Z 2026-04-26 08:00:27 [info] [ai] self-test OK via gemini-2.5-flash
2026-04-26T08:00:27.753696375Z 2026-04-26 08:00:27 [info] [ai] ✅ Self-test PASSED — working model: gemini-2.5-flash
2026-04-26T08:00:30.47856628Z 2026-04-26 08:00:30 [info] {"method":"GET","path":"/health","status":200,"duration":"7ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:00:30.480547075Z 2026-04-26 08:00:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:00:30.906855186Z 2026-04-26 08:00:30 [info] Client disconnected: Uw18T36R19Womdz2AAAP
2026-04-26T08:00:30.906873037Z 2026-04-26 08:00:30 [info] Client disconnected: im5jDqRBtKC-110NAAAN
2026-04-26T08:00:31.668133393Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T08:00:31.73745841Z 2026-04-26 08:00:31 [error] Route / not found
2026-04-26T08:00:31.737477941Z Error: Route / not found
2026-04-26T08:00:31.737482511Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T08:00:31.737486612Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:00:31.737490402Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:00:31.737494412Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:00:31.737497552Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T08:00:31.737500663Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T08:00:31.737503853Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T08:00:31.737519604Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:00:31.737521744Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:00:31.737523774Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:00:31.73815178Z 2026-04-26 08:00:31 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T08:00:31.819061188Z [0;32m[1m==> [0m[1m[0m
2026-04-26T08:00:31.823892928Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T08:00:31.828489974Z [0;32m[1m==> [0m[1m[0m
2026-04-26T08:00:31.834058942Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T08:00:31.839959197Z [0;32m[1m==> [0m[1m[0m
2026-04-26T08:00:31.844343848Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T08:00:32.544839861Z 2026-04-26 08:00:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:35.472427976Z 2026-04-26 08:00:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:00:37.54608232Z 2026-04-26 08:00:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:40.471801281Z 2026-04-26 08:00:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:00:42.545193728Z 2026-04-26 08:00:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:45.471121694Z 2026-04-26 08:00:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:00:47.545684275Z 2026-04-26 08:00:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:50.472077391Z 2026-04-26 08:00:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:00:52.545096506Z 2026-04-26 08:00:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:00:55.47133156Z 2026-04-26 08:00:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:00:57.545738716Z 2026-04-26 08:00:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:01:00.47146116Z 2026-04-26 08:01:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:00.472444867Z 2026-04-26 08:01:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:02.545301522Z 2026-04-26 08:01:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:01:05.470540339Z 2026-04-26 08:01:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:07.545280738Z 2026-04-26 08:01:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:01:10.471016869Z 2026-04-26 08:01:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:12.545482769Z 2026-04-26 08:01:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:01:15.470090658Z 2026-04-26 08:01:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:17.54558459Z 2026-04-26 08:01:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:01:20.471464141Z 2026-04-26 08:01:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:22.550483002Z 2026-04-26 08:01:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:01:25.470018271Z 2026-04-26 08:01:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:27.545196258Z 2026-04-26 08:01:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-26T08:01:30.470647001Z 2026-04-26 08:01:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:30.471567434Z 2026-04-26 08:01:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:35.470442573Z 2026-04-26 08:01:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:40.470103757Z 2026-04-26 08:01:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:45.470683005Z 2026-04-26 08:01:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:50.470521801Z 2026-04-26 08:01:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:01:55.470125632Z 2026-04-26 08:01:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:00.470308208Z 2026-04-26 08:02:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:00.471130496Z 2026-04-26 08:02:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:05.47197138Z 2026-04-26 08:02:05 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:10.470071025Z 2026-04-26 08:02:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:15.470583881Z 2026-04-26 08:02:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:20.47046877Z 2026-04-26 08:02:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:25.470078514Z 2026-04-26 08:02:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:30.471044826Z 2026-04-26 08:02:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:30.472174532Z 2026-04-26 08:02:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:35.470030484Z 2026-04-26 08:02:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:40.470386352Z 2026-04-26 08:02:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:45.469934033Z 2026-04-26 08:02:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:50.470607149Z 2026-04-26 08:02:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:02:55.470209543Z 2026-04-26 08:02:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:00.470643606Z 2026-04-26 08:03:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:00.471278493Z 2026-04-26 08:03:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:05.470347687Z 2026-04-26 08:03:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:10.471344853Z 2026-04-26 08:03:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:15.471092427Z 2026-04-26 08:03:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:20.470965108Z 2026-04-26 08:03:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:25.471048502Z 2026-04-26 08:03:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:30.47274283Z 2026-04-26 08:03:30 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:30.474885663Z 2026-04-26 08:03:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:35.470440226Z 2026-04-26 08:03:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:40.469974768Z 2026-04-26 08:03:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:45.470613995Z 2026-04-26 08:03:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:50.471957383Z 2026-04-26 08:03:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:03:55.470616606Z 2026-04-26 08:03:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:00.470277246Z 2026-04-26 08:04:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:00.470976047Z 2026-04-26 08:04:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:05.470868812Z 2026-04-26 08:04:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:10.470893564Z 2026-04-26 08:04:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:15.470992751Z 2026-04-26 08:04:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:20.469909439Z 2026-04-26 08:04:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:25.470290313Z 2026-04-26 08:04:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:30.471530947Z 2026-04-26 08:04:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:30.471693366Z 2026-04-26 08:04:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:35.471227011Z 2026-04-26 08:04:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:40.469909249Z 2026-04-26 08:04:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:45.470273323Z 2026-04-26 08:04:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:50.470123727Z 2026-04-26 08:04:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:55.471021242Z 2026-04-26 08:04:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:04:57.832571691Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T08:04:57.890118021Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T08:05:00.470798732Z 2026-04-26 08:05:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:00.471576568Z 2026-04-26 08:05:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:05.469803708Z 2026-04-26 08:05:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:10.470126671Z 2026-04-26 08:05:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:15.469838488Z 2026-04-26 08:05:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:18.831530905Z 2026-04-26 08:05:18 [error] [ai] ALL models failed for self-test. Last: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:05:18.831685179Z 2026-04-26 08:05:18 [error] [ai] ❌ Self-test FAILED: AI unavailable (self-test): [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:05:20.470104678Z 2026-04-26 08:05:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:23.629309014Z 2026-04-26 08:05:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:05:23.630688987Z 2026-04-26 08:05:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:05:24.261305593Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T08:05:24.384375893Z 2026-04-26 08:05:24 [error] Route / not found
2026-04-26T08:05:24.384398104Z Error: Route / not found
2026-04-26T08:05:24.384404344Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T08:05:24.384410474Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:05:24.384414914Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:05:24.384417584Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:05:24.384419474Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T08:05:24.384421294Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T08:05:24.384423045Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T08:05:24.384424805Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:05:24.384426534Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:05:24.384428265Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:05:24.385114241Z 2026-04-26 08:05:24 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T08:05:24.403600789Z [0;32m[1m==> [0m[1m[0m
2026-04-26T08:05:24.405619265Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T08:05:24.407665492Z [0;32m[1m==> [0m[1m[0m
2026-04-26T08:05:24.409848532Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T08:05:24.412287488Z [0;32m[1m==> [0m[1m[0m
2026-04-26T08:05:24.414482368Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T08:05:25.470996224Z 2026-04-26 08:05:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:28.628288747Z 2026-04-26 08:05:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:05:30.47051093Z 2026-04-26 08:05:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:33.627626269Z 2026-04-26 08:05:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:05:35.474229971Z 2026-04-26 08:05:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:38.627818403Z 2026-04-26 08:05:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:05:40.470442307Z 2026-04-26 08:05:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:43.627493607Z 2026-04-26 08:05:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:05:45.470842415Z 2026-04-26 08:05:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:48.628234538Z 2026-04-26 08:05:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:05:50.470572155Z 2026-04-26 08:05:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:53.62892242Z 2026-04-26 08:05:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:05:53.631286756Z 2026-04-26 08:05:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:05:55.470631755Z 2026-04-26 08:05:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:05:58.6295163Z 2026-04-26 08:05:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:00.47061578Z 2026-04-26 08:06:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:06:03.628346941Z 2026-04-26 08:06:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:05.470550572Z 2026-04-26 08:06:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:06:08.627660254Z 2026-04-26 08:06:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:10.472513163Z 2026-04-26 08:06:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:06:13.628452855Z 2026-04-26 08:06:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:15.470156223Z 2026-04-26 08:06:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:06:18.627505505Z 2026-04-26 08:06:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:20.470955666Z 2026-04-26 08:06:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.182"}
2026-04-26T08:06:23.62794851Z 2026-04-26 08:06:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:23.62877289Z 2026-04-26 08:06:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:28.627583498Z 2026-04-26 08:06:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:33.628039057Z 2026-04-26 08:06:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:38.627640617Z 2026-04-26 08:06:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:43.628286483Z 2026-04-26 08:06:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:48.627497987Z 2026-04-26 08:06:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:53.629078069Z 2026-04-26 08:06:53 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:53.629822567Z 2026-04-26 08:06:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:06:58.627036326Z 2026-04-26 08:06:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:03.627563496Z 2026-04-26 08:07:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:08.627086724Z 2026-04-26 08:07:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:13.627258379Z 2026-04-26 08:07:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:18.627066157Z 2026-04-26 08:07:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:23.627508732Z 2026-04-26 08:07:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:23.628491005Z 2026-04-26 08:07:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:28.627522698Z 2026-04-26 08:07:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:33.627225748Z 2026-04-26 08:07:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:38.630035684Z 2026-04-26 08:07:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:43.627419562Z 2026-04-26 08:07:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:48.628740646Z 2026-04-26 08:07:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:53.627874328Z 2026-04-26 08:07:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:53.628685958Z 2026-04-26 08:07:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:07:58.628065398Z 2026-04-26 08:07:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:03.626805965Z 2026-04-26 08:08:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:08.627301925Z 2026-04-26 08:08:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:13.627546222Z 2026-04-26 08:08:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:18.627766038Z 2026-04-26 08:08:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:23.627587857Z 2026-04-26 08:08:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:23.628386736Z 2026-04-26 08:08:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:28.627299865Z 2026-04-26 08:08:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:33.627361183Z 2026-04-26 08:08:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:38.626926581Z 2026-04-26 08:08:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:43.62899704Z 2026-04-26 08:08:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:48.626554452Z 2026-04-26 08:08:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:53.627862366Z 2026-04-26 08:08:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:53.628627165Z 2026-04-26 08:08:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:08:58.626875847Z 2026-04-26 08:08:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:03.626879213Z 2026-04-26 08:09:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:08.627509385Z 2026-04-26 08:09:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:13.626884319Z 2026-04-26 08:09:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:18.627479124Z 2026-04-26 08:09:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:23.627697001Z 2026-04-26 08:09:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:23.627721632Z 2026-04-26 08:09:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:28.62750858Z 2026-04-26 08:09:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:33.627271351Z 2026-04-26 08:09:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:38.627232747Z 2026-04-26 08:09:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:43.627659195Z 2026-04-26 08:09:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:48.626742993Z 2026-04-26 08:09:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:53.627543684Z 2026-04-26 08:09:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:53.628471696Z 2026-04-26 08:09:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:09:58.626889081Z 2026-04-26 08:09:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:03.627614483Z 2026-04-26 08:10:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:08.627163538Z 2026-04-26 08:10:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:13.628035157Z 2026-04-26 08:10:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:18.626912819Z 2026-04-26 08:10:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:22.499229875Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T08:10:22.636991412Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T08:10:23.627696149Z 2026-04-26 08:10:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:23.628312313Z 2026-04-26 08:10:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:28.628514401Z 2026-04-26 08:10:28 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:33.627763876Z 2026-04-26 08:10:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:38.627246329Z 2026-04-26 08:10:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:43.627584834Z 2026-04-26 08:10:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:48.627116671Z 2026-04-26 08:10:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:53.626941247Z 2026-04-26 08:10:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:53.627777157Z 2026-04-26 08:10:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:10:58.627393629Z 2026-04-26 08:10:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:03.643218561Z 2026-04-26 08:11:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:08.627443288Z 2026-04-26 08:11:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:13.631430549Z 2026-04-26 08:11:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:17.229540946Z 2026-04-26 08:11:17 [info] Client connected: O9K2ucHpS_PckdAjAAAB
2026-04-26T08:11:17.515598334Z 2026-04-26 08:11:17 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket O9K2ucHpS_PckdAjAAAB
2026-04-26T08:11:18.131042208Z 2026-04-26 08:11:18 [info] Client connected: 9S3JJGSMWa4HuOMZAAAD
2026-04-26T08:11:18.41519904Z 2026-04-26 08:11:18 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 9S3JJGSMWa4HuOMZAAAD
2026-04-26T08:11:18.630145016Z 2026-04-26 08:11:18 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:23.627662626Z 2026-04-26 08:11:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:23.628424234Z 2026-04-26 08:11:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:24.197872566Z 2026-04-26 08:11:24 [info] Client disconnected: O9K2ucHpS_PckdAjAAAB
2026-04-26T08:11:24.212566578Z 2026-04-26 08:11:24 [info] Client disconnected: 9S3JJGSMWa4HuOMZAAAD
2026-04-26T08:11:28.690769547Z 2026-04-26 08:11:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T08:11:28.784239644Z 2026-04-26 08:11:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:29.003504584Z 2026-04-26 08:11:29 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T08:11:29.183024082Z 2026-04-26 08:11:29 [info] {"method":"GET","path":"/calls","status":200,"duration":"3091ms","ip":"::1"}
2026-04-26T08:11:29.185188174Z 2026-04-26 08:11:29 [info] Client connected: 65Lm8tyodvmtx_xTAAAF
2026-04-26T08:11:29.214951576Z 2026-04-26 08:11:29 [info] [wa] using WA web version 2.3000.1035194821
2026-04-26T08:11:29.384652639Z 2026-04-26 08:11:29 [info] {"method":"GET","path":"/status","status":200,"duration":"695ms","ip":"::1"}
2026-04-26T08:11:29.488813642Z 2026-04-26 08:11:29 [info] {"method":"GET","path":"/messages","status":200,"duration":"303ms","ip":"::1"}
2026-04-26T08:11:29.608646441Z 2026-04-26 08:11:29 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 65Lm8tyodvmtx_xTAAAF
2026-04-26T08:11:29.693232686Z 2026-04-26 08:11:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T08:11:29.810591106Z 2026-04-26 08:11:29 [info] Client disconnected: 65Lm8tyodvmtx_xTAAAF
2026-04-26T08:11:30.05134561Z 2026-04-26 08:11:30 [info] Client connected: 17KxdRdDaRbBafJeAAAH
2026-04-26T08:11:30.330355199Z 2026-04-26 08:11:30 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 17KxdRdDaRbBafJeAAAH
2026-04-26T08:11:30.592847703Z 2026-04-26 08:11:30 [info] {"method":"GET","path":"/messages","status":200,"duration":"466ms","ip":"::1"}
2026-04-26T08:11:30.983988367Z 2026-04-26 08:11:30 [info] Client connected: mW7k9xrosmDR_TmpAAAJ
2026-04-26T08:11:31.48908769Z 2026-04-26 08:11:31 [info] [wa] connected as 919012277862 for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T08:11:31.584716029Z 2026-04-26 08:11:31 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket mW7k9xrosmDR_TmpAAAJ
2026-04-26T08:11:33.627716249Z 2026-04-26 08:11:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:38.626899024Z 2026-04-26 08:11:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:38.887653266Z 2026-04-26 08:11:38 [info] {"method":"GET","path":"/messages","status":200,"duration":"343ms","ip":"::1"}
2026-04-26T08:11:43.627685528Z 2026-04-26 08:11:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:46.484949944Z 2026-04-26 08:11:46 [info] {"method":"GET","path":"/messages","status":200,"duration":"164ms","ip":"::1"}
2026-04-26T08:11:48.627801507Z 2026-04-26 08:11:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:53.627411606Z 2026-04-26 08:11:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:53.628159834Z 2026-04-26 08:11:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:54.308279127Z 2026-04-26 08:11:54 [info] {"method":"GET","path":"/messages","status":200,"duration":"125ms","ip":"::1"}
2026-04-26T08:11:58.480715473Z 2026-04-26 08:11:58 [info] [wa] text from 35635846971580@lid: "Hello"
2026-04-26T08:11:58.627856796Z 2026-04-26 08:11:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:11:58.746814804Z 2026-04-26 08:11:58 [warn] [ai] text — gemini-2.5-flash failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent: [429 Too Many Requests] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://ai.google.dev/gemini-api/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. 
2026-04-26T08:11:58.746833515Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 20, model: gemini-2.5-flash
2026-04-26T08:11:58.746840315Z Please retry in 1.351279489s. [{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://ai.google.dev/gemini-api/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.5-flash"},"quotaValue":"20"}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"1s"}]
2026-04-26T08:11:58.869756318Z 2026-04-26 08:11:58 [warn] [ai] text — gemini-2.5-flash-preview-05-20 failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent: [404 Not Found] models/gemini-2.5-flash-preview-05-20 is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:11:58.979472934Z 2026-04-26 08:11:58 [warn] [ai] text — gemini-2.0-flash failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent: [429 Too Many Requests] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://ai.google.dev/gemini-api/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. 
2026-04-26T08:11:58.979494045Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_input_token_count, limit: 0, model: gemini-2.0-flash
2026-04-26T08:11:58.979499175Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash
2026-04-26T08:11:58.979503485Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash
2026-04-26T08:11:58.979520786Z Please retry in 1.050217426s. [{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://ai.google.dev/gemini-api/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_input_token_count","quotaId":"GenerateContentInputTokensPerModelPerMinute-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash"}}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"1s"}]
2026-04-26T08:11:59.330201102Z 2026-04-26 08:11:59 [warn] [ai] text — gemini-2.0-flash-lite failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent: [429 Too Many Requests] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://ai.google.dev/gemini-api/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. 
2026-04-26T08:11:59.330218352Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash-lite
2026-04-26T08:11:59.330220602Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash-lite
2026-04-26T08:11:59.330223682Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_input_token_count, limit: 0, model: gemini-2.0-flash-lite
2026-04-26T08:11:59.330227952Z Please retry in 699.403707ms. [{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://ai.google.dev/gemini-api/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash-lite"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash-lite"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_input_token_count","quotaId":"GenerateContentInputTokensPerModelPerMinute-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash-lite"}}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"0s"}]
2026-04-26T08:11:59.437613263Z 2026-04-26 08:11:59 [warn] [ai] text — gemini-1.5-flash-latest failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:11:59.437996943Z 2026-04-26 08:11:59 [error] [ai] ALL models failed for text. Last: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:11:59.438239838Z 2026-04-26 08:11:59 [error] [wa] text reply error:
2026-04-26T08:12:02.624632107Z 2026-04-26 08:12:02 [info] {"method":"GET","path":"/messages","status":200,"duration":"122ms","ip":"::1"}
2026-04-26T08:12:03.627436547Z 2026-04-26 08:12:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:08.627552802Z 2026-04-26 08:12:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:10.382460479Z 2026-04-26 08:12:10 [info] {"method":"GET","path":"/messages","status":200,"duration":"217ms","ip":"::1"}
2026-04-26T08:12:13.627168577Z 2026-04-26 08:12:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:18.383672372Z 2026-04-26 08:12:18 [info] {"method":"GET","path":"/messages","status":200,"duration":"153ms","ip":"::1"}
2026-04-26T08:12:18.627230944Z 2026-04-26 08:12:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:21.252136893Z 2026-04-26 08:12:21 [info] Client disconnected: mW7k9xrosmDR_TmpAAAJ
2026-04-26T08:12:21.572240018Z 2026-04-26 08:12:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T08:12:21.68468505Z 2026-04-26 08:12:21 [info] {"method":"GET","path":"/calls","status":200,"duration":"111ms","ip":"::1"}
2026-04-26T08:12:21.710720433Z 2026-04-26 08:12:21 [info] {"method":"GET","path":"/messages","status":200,"duration":"132ms","ip":"::1"}
2026-04-26T08:12:22.171353852Z 2026-04-26 08:12:22 [info] Client connected: CrUR6w3ww6PEgI_gAAAL
2026-04-26T08:12:22.540834909Z 2026-04-26 08:12:22 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket CrUR6w3ww6PEgI_gAAAL
2026-04-26T08:12:23.627818735Z 2026-04-26 08:12:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:23.628599934Z 2026-04-26 08:12:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:28.626948763Z 2026-04-26 08:12:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:33.62806843Z 2026-04-26 08:12:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:35.849562572Z 2026-04-26 08:12:35 [warn] [ai] audio — gemini-2.5-flash failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent: [429 Too Many Requests] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://ai.google.dev/gemini-api/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. 
2026-04-26T08:12:35.849583942Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 20, model: gemini-2.5-flash
2026-04-26T08:12:35.849589992Z Please retry in 24.239259844s. [{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://ai.google.dev/gemini-api/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.5-flash"},"quotaValue":"20"}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"24s"}]
2026-04-26T08:12:36.385072494Z 2026-04-26 08:12:36 [warn] [ai] audio — gemini-2.5-flash-preview-05-20 failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent: [404 Not Found] models/gemini-2.5-flash-preview-05-20 is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:12:37.320433661Z 2026-04-26 08:12:37 [warn] [ai] audio — gemini-2.0-flash failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent: [429 Too Many Requests] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://ai.google.dev/gemini-api/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. 
2026-04-26T08:12:37.320453451Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_input_token_count, limit: 0, model: gemini-2.0-flash
2026-04-26T08:12:37.320456321Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash
2026-04-26T08:12:37.320458701Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash
2026-04-26T08:12:37.320463361Z Please retry in 22.708433505s. [{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://ai.google.dev/gemini-api/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_input_token_count","quotaId":"GenerateContentInputTokensPerModelPerMinute-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash"}}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"22s"}]
2026-04-26T08:12:37.433451697Z 2026-04-26 08:12:37 [warn] [ai] audio — gemini-1.5-flash-latest failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:12:37.433526288Z 2026-04-26 08:12:37 [error] [ai] ALL models failed for audio. Last: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:12:37.433818406Z 2026-04-26 08:12:37 [error] [wa] audio handling error:
2026-04-26T08:12:38.642293752Z 2026-04-26 08:12:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:43.628010243Z 2026-04-26 08:12:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:48.62771625Z 2026-04-26 08:12:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:53.629596281Z 2026-04-26 08:12:53 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:53.630840911Z 2026-04-26 08:12:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:12:58.627053778Z 2026-04-26 08:12:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:03.629528776Z 2026-04-26 08:13:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:06.721307992Z 2026-04-26 08:13:06 [info] [wa] incoming voice call from 35635846971580@lid
2026-04-26T08:13:07.030089416Z 2026-04-26 08:13:07 [info] Call saved: 983e6b1d-2abb-4410-9790-15942fd2b933
2026-04-26T08:13:08.627456597Z 2026-04-26 08:13:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:13.627873429Z 2026-04-26 08:13:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:16.001433017Z 2026-04-26 08:13:16 [warn] [ai] text — gemini-2.5-flash failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent: [429 Too Many Requests] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://ai.google.dev/gemini-api/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. 
2026-04-26T08:13:16.001451197Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 20, model: gemini-2.5-flash
2026-04-26T08:13:16.001456698Z Please retry in 44.093496662s. [{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://ai.google.dev/gemini-api/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.5-flash"},"quotaValue":"20"}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"44s"}]
2026-04-26T08:13:16.120939009Z 2026-04-26 08:13:16 [warn] [ai] text — gemini-2.5-flash-preview-05-20 failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent: [404 Not Found] models/gemini-2.5-flash-preview-05-20 is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:13:16.216911217Z 2026-04-26 08:13:16 [warn] [ai] text — gemini-2.0-flash failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent: [429 Too Many Requests] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://ai.google.dev/gemini-api/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. 
2026-04-26T08:13:16.216928008Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash
2026-04-26T08:13:16.216944018Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash
2026-04-26T08:13:16.216948108Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_input_token_count, limit: 0, model: gemini-2.0-flash
2026-04-26T08:13:16.216952738Z Please retry in 43.811771851s. [{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://ai.google.dev/gemini-api/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_input_token_count","quotaId":"GenerateContentInputTokensPerModelPerMinute-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash"}}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"43s"}]
2026-04-26T08:13:16.339223056Z 2026-04-26 08:13:16 [warn] [ai] text — gemini-2.0-flash-lite failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent: [429 Too Many Requests] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://ai.google.dev/gemini-api/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. 
2026-04-26T08:13:16.339242446Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash-lite
2026-04-26T08:13:16.339245367Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit: 0, model: gemini-2.0-flash-lite
2026-04-26T08:13:16.339248707Z * Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_input_token_count, limit: 0, model: gemini-2.0-flash-lite
2026-04-26T08:13:16.339254987Z Please retry in 43.68870354s. [{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://ai.google.dev/gemini-api/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier","quotaDimensions":{"model":"gemini-2.0-flash-lite","location":"global"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-2.0-flash-lite"}},{"quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_input_token_count","quotaId":"GenerateContentInputTokensPerModelPerMinute-FreeTier","quotaDimensions":{"model":"gemini-2.0-flash-lite","location":"global"}}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"43s"}]
2026-04-26T08:13:16.518488029Z 2026-04-26 08:13:16 [warn] [ai] text — gemini-1.5-flash-latest failed: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:13:16.518514039Z 2026-04-26 08:13:16 [error] [ai] ALL models failed for text. Last: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:13:16.518823207Z 2026-04-26 08:13:16 [error] [wa] post-call AI reply failed AI unavailable (text): [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:13:16.518844038Z Error: AI unavailable (text): [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent: [404 Not Found] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2026-04-26T08:13:16.518847318Z     at runWithFallback (/opt/render/project/src/backend/dist/modules/whatsapp/services/aiService.js:43:11)
2026-04-26T08:13:16.518850138Z     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
2026-04-26T08:13:16.518852928Z     at async AIService.generateResponse (/opt/render/project/src/backend/dist/modules/whatsapp/services/aiService.js:77:33)
2026-04-26T08:13:16.518855148Z     at async Timeout._onTimeout (/opt/render/project/src/backend/dist/modules/whatsapp/services/baileyService.js:282:42)
2026-04-26T08:13:18.627266997Z 2026-04-26 08:13:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:23.627312783Z 2026-04-26 08:13:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:23.62844872Z 2026-04-26 08:13:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:28.62775806Z 2026-04-26 08:13:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:33.627474981Z 2026-04-26 08:13:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:38.62788118Z 2026-04-26 08:13:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:43.626850015Z 2026-04-26 08:13:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:48.627021212Z 2026-04-26 08:13:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:53.627434935Z 2026-04-26 08:13:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:53.628094991Z 2026-04-26 08:13:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:13:58.627697066Z 2026-04-26 08:13:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:03.627473158Z 2026-04-26 08:14:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:03.810649094Z 2026-04-26 08:14:03 [info] Client disconnected: CrUR6w3ww6PEgI_gAAAL
2026-04-26T08:14:04.717225017Z 2026-04-26 08:14:04 [info] Client connected: kp2nQQLU4awn_VHEAAAN
2026-04-26T08:14:04.98629169Z 2026-04-26 08:14:04 [info] {"method":"GET","path":"/messages","status":200,"duration":"165ms","ip":"::1"}
2026-04-26T08:14:04.996815093Z 2026-04-26 08:14:04 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket kp2nQQLU4awn_VHEAAAN
2026-04-26T08:14:08.627840324Z 2026-04-26 08:14:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:12.382689452Z 2026-04-26 08:14:12 [info] {"method":"GET","path":"/messages","status":200,"duration":"201ms","ip":"::1"}
2026-04-26T08:14:13.627844644Z 2026-04-26 08:14:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:18.627142728Z 2026-04-26 08:14:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:20.323752902Z 2026-04-26 08:14:20 [info] {"method":"GET","path":"/messages","status":200,"duration":"138ms","ip":"::1"}
2026-04-26T08:14:23.627830557Z 2026-04-26 08:14:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:23.628752089Z 2026-04-26 08:14:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:28.484692082Z 2026-04-26 08:14:28 [info] {"method":"GET","path":"/messages","status":200,"duration":"146ms","ip":"::1"}
2026-04-26T08:14:28.627355639Z 2026-04-26 08:14:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:33.626804311Z 2026-04-26 08:14:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:36.255187954Z 2026-04-26 08:14:36 [info] {"method":"GET","path":"/messages","status":200,"duration":"139ms","ip":"::1"}
2026-04-26T08:14:38.628053558Z 2026-04-26 08:14:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:43.62782098Z 2026-04-26 08:14:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:44.482901661Z 2026-04-26 08:14:44 [info] {"method":"GET","path":"/messages","status":200,"duration":"204ms","ip":"::1"}
2026-04-26T08:14:48.633065216Z 2026-04-26 08:14:48 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:52.294178327Z 2026-04-26 08:14:52 [info] {"method":"GET","path":"/messages","status":200,"duration":"120ms","ip":"::1"}
2026-04-26T08:14:53.627602656Z 2026-04-26 08:14:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:53.628707782Z 2026-04-26 08:14:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:56.850777449Z 2026-04-26 08:14:56 [info] Client disconnected: kp2nQQLU4awn_VHEAAAN
2026-04-26T08:14:57.149527474Z 2026-04-26 08:14:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T08:14:57.279293593Z 2026-04-26 08:14:57 [info] {"method":"GET","path":"/calls","status":200,"duration":"105ms","ip":"::1"}
2026-04-26T08:14:57.502724365Z 2026-04-26 08:14:57 [info] {"method":"GET","path":"/messages","status":200,"duration":"324ms","ip":"::1"}
2026-04-26T08:14:57.888021713Z 2026-04-26 08:14:57 [info] Client connected: 0aNRrpPvgt3INLW5AAAP
2026-04-26T08:14:58.627521896Z 2026-04-26 08:14:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:14:58.702143164Z 2026-04-26 08:14:58 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 0aNRrpPvgt3INLW5AAAP
2026-04-26T08:15:03.627238493Z 2026-04-26 08:15:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:08.627597487Z 2026-04-26 08:15:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:13.627736557Z 2026-04-26 08:15:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:18.627020308Z 2026-04-26 08:15:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:23.627418147Z 2026-04-26 08:15:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:23.628030642Z 2026-04-26 08:15:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:28.627396538Z 2026-04-26 08:15:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:33.627065342Z 2026-04-26 08:15:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:38.627878535Z 2026-04-26 08:15:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:43.627157773Z 2026-04-26 08:15:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:48.627657342Z 2026-04-26 08:15:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:53.627929246Z 2026-04-26 08:15:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:53.628858939Z 2026-04-26 08:15:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:15:58.627223159Z 2026-04-26 08:15:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:03.628258395Z 2026-04-26 08:16:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:08.683869639Z 2026-04-26 08:16:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:13.62694905Z 2026-04-26 08:16:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:18.627024856Z 2026-04-26 08:16:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:23.6273204Z 2026-04-26 08:16:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:23.628233732Z 2026-04-26 08:16:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:28.627717298Z 2026-04-26 08:16:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:33.630480253Z 2026-04-26 08:16:33 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:38.627655966Z 2026-04-26 08:16:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:43.627939016Z 2026-04-26 08:16:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:48.628142124Z 2026-04-26 08:16:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:53.631579871Z 2026-04-26 08:16:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:53.633688062Z 2026-04-26 08:16:53 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:16:58.628030423Z 2026-04-26 08:16:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:17:03.627453567Z 2026-04-26 08:17:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:17:05.528548075Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T08:17:05.604419817Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T08:17:08.627251591Z 2026-04-26 08:17:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:17:13.627003735Z 2026-04-26 08:17:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:17:18.627020697Z 2026-04-26 08:17:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:17:19.028148013Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T08:17:20.032792924Z 
2026-04-26T08:17:20.032825286Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T08:17:20.032831626Z > node dist/index.js
2026-04-26T08:17:20.032834736Z 
2026-04-26T08:17:23.627223955Z 2026-04-26 08:17:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:17:23.628053945Z 2026-04-26 08:17:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.197"}
2026-04-26T08:17:23.857275828Z 2026-04-26 08:17:23 [info] Client disconnected: 0aNRrpPvgt3INLW5AAAP
2026-04-26T08:17:24.430696918Z 2026-04-26 08:17:24 [info] [ai] Gemini ready. Primary: gemini-2.5-flash
2026-04-26T08:17:25.432005661Z 2026-04-26 08:17:25 [info] Firestore initialized successfully
2026-04-26T08:17:25.931056829Z 2026-04-26 08:17:25 [info] ✅ Server running on http://localhost:10000
2026-04-26T08:17:25.93107912Z 2026-04-26 08:17:25 [info] Environment: production
2026-04-26T08:17:25.93108262Z 2026-04-26 08:17:25 [info] API URL: http://localhost:5000
2026-04-26T08:17:25.931086321Z 2026-04-26 08:17:25 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T08:17:26.031065571Z 2026-04-26 08:17:26 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.26.133"}
2026-04-26T08:17:26.033459707Z 2026-04-26 08:17:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-26T08:17:26.200202236Z 2026-04-26 08:17:26 [info] Client disconnected: 17KxdRdDaRbBafJeAAAH
2026-04-26T08:17:26.596127474Z 2026-04-26 08:17:26 [error] Route / not found
2026-04-26T08:17:26.596150695Z Error: Route / not found
2026-04-26T08:17:26.596167006Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T08:17:26.596170926Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:17:26.596175037Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:17:26.596178777Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:17:26.596181487Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T08:17:26.596184637Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T08:17:26.596187847Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T08:17:26.596191158Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:17:26.596194778Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:17:26.596198018Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:17:26.597128439Z 2026-04-26 08:17:26 [info] {"method":"HEAD","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T08:17:27.090287082Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T08:17:27.208263226Z 2026-04-26 08:17:27 [error] Route / not found
2026-04-26T08:17:27.208281657Z Error: Route / not found
2026-04-26T08:17:27.208285327Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T08:17:27.208288918Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:17:27.208292518Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:17:27.208296098Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:17:27.208299279Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T08:17:27.208302159Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T08:17:27.208305039Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T08:17:27.208308079Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T08:17:27.20832606Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T08:17:27.20832915Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T08:17:27.209099291Z 2026-04-26 08:17:27 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T08:17:27.333074582Z [0;32m[1m==> [0m[1m[0m
2026-04-26T08:17:27.335339302Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T08:17:27.337218573Z [0;32m[1m==> [0m[1m[0m
2026-04-26T08:17:27.339247978Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T08:17:27.341167519Z [0;32m[1m==> [0m[1m[0m
2026-04-26T08:17:27.343136222Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
```
