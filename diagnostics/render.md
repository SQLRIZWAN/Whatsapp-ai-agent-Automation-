# Render Deploy Diagnostics

Run: 24931234877
Commit: df1e35376c6272aeb0ae5cf180988b7cceab8d75
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mbfe9kh4rs73ajtfh0

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
  "updatedAt": "2026-04-25T12:49:02.477054Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mbfe9kh4rs73ajtfh0",
  "commit": {
    "id": "df1e35376c6272aeb0ae5cf180988b7cceab8d75",
    "message": "Merge branch 'claude/fix-ai-messaging-stability-a9TSt' of http://127.0.0.1:42281/git/SQLRIZWAN/Whatsapp-ai-agent-Automation- into claude/fix-ai-messaging-stability-a9TSt",
    "createdAt": "2026-04-25T12:46:38Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T12:46:50.115589Z",
  "updatedAt": "2026-04-25T12:49:02.475705Z",
  "startedAt": "2026-04-25T12:46:49.960448Z",
  "finishedAt": "2026-04-25T12:49:02.475524Z"
}
```

## Build logs (last 4h)
```
2026-04-25T12:22:06.755544403Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:22:07.45703874Z [34m[1m==>(B[m [1mChecking out commit a75897c5b309f98e899519c7a949a46988edd905 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T12:22:09.01360631Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:22:09.038257122Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:22:11.042087622Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:23:43.263825287Z 
2026-04-25T12:23:43.263844068Z added 590 packages, and audited 591 packages in 2m
2026-04-25T12:23:43.263898209Z 
2026-04-25T12:23:43.264009492Z 113 packages are looking for funding
2026-04-25T12:23:43.264078664Z   run `npm fund` for details
2026-04-25T12:23:43.427550639Z 
2026-04-25T12:23:43.42759631Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:23:43.4276063Z 
2026-04-25T12:23:43.427610941Z To address issues that do not require attention, run:
2026-04-25T12:23:43.427615081Z   npm audit fix
2026-04-25T12:23:43.427618831Z 
2026-04-25T12:23:43.427622641Z To address all issues (including breaking changes), run:
2026-04-25T12:23:43.427627321Z   npm audit fix --force
2026-04-25T12:23:43.427630981Z 
2026-04-25T12:23:43.427635581Z Run `npm audit` for details.
2026-04-25T12:23:43.735529511Z 
2026-04-25T12:23:43.735548182Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:23:43.735552071Z > tsc && tsc-alias
2026-04-25T12:23:43.735555242Z 
2026-04-25T12:23:49.317985403Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:23:55.547398779Z [34;1m==>[0;22m [1mUploaded in 3.5s. Compression took 2.7s[22m
2026-04-25T12:23:55.580136985Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T12:26:15.197630407Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:26:15.880209886Z [34m[1m==>(B[m [1mChecking out commit cc82f133d38209d1e073b3bf6786ab795fd56b56 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T12:26:17.291698998Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:26:17.316119653Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:26:19.220614821Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:27:41.012990066Z 
2026-04-25T12:27:41.013018226Z added 590 packages, and audited 591 packages in 1m
2026-04-25T12:27:41.013023806Z 
2026-04-25T12:27:41.013108718Z 113 packages are looking for funding
2026-04-25T12:27:41.013161739Z   run `npm fund` for details
2026-04-25T12:27:41.181363936Z 
2026-04-25T12:27:41.181386016Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:27:41.181390056Z 
2026-04-25T12:27:41.181393436Z To address issues that do not require attention, run:
2026-04-25T12:27:41.181396636Z   npm audit fix
2026-04-25T12:27:41.181399846Z 
2026-04-25T12:27:41.181402977Z To address all issues (including breaking changes), run:
2026-04-25T12:27:41.181406587Z   npm audit fix --force
2026-04-25T12:27:41.181409487Z 
2026-04-25T12:27:41.181413287Z Run `npm audit` for details.
2026-04-25T12:27:41.403295534Z 
2026-04-25T12:27:41.403319254Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:27:41.403327085Z > tsc && tsc-alias
2026-04-25T12:27:41.403333035Z 
2026-04-25T12:27:44.436736717Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:27:53.183517744Z [34;1m==>[0;22m [1mUploaded in 6.4s. Compression took 2.4s[22m
2026-04-25T12:27:53.215190324Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T12:29:58.228242122Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:29:58.982148635Z [34m[1m==>(B[m [1mChecking out commit 34805ec7f3cad7d2624a2207e6e356c0a954784d in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T12:30:04.489864705Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:30:04.514923119Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:30:06.526489037Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:31:30.305264642Z 
2026-04-25T12:31:30.305291094Z added 590 packages, and audited 591 packages in 1m
2026-04-25T12:31:30.305303315Z 
2026-04-25T12:31:30.305403433Z 113 packages are looking for funding
2026-04-25T12:31:30.305472489Z   run `npm fund` for details
2026-04-25T12:31:30.448779114Z 
2026-04-25T12:31:30.448799996Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:31:30.448804526Z 
2026-04-25T12:31:30.448808797Z To address issues that do not require attention, run:
2026-04-25T12:31:30.448812787Z   npm audit fix
2026-04-25T12:31:30.448816507Z 
2026-04-25T12:31:30.448820397Z To address all issues (including breaking changes), run:
2026-04-25T12:31:30.448825138Z   npm audit fix --force
2026-04-25T12:31:30.448828858Z 
2026-04-25T12:31:30.448833558Z Run `npm audit` for details.
2026-04-25T12:31:30.663088847Z 
2026-04-25T12:31:30.663111999Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:31:30.6631194Z > tsc && tsc-alias
2026-04-25T12:31:30.66312532Z 
2026-04-25T12:31:33.68958835Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:31:39.891235898Z [34;1m==>[0;22m [1mUploaded in 3.8s. Compression took 2.4s[22m
2026-04-25T12:31:39.934169826Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T12:38:00.704472046Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:38:01.437834003Z [34m[1m==>(B[m [1mChecking out commit 4e4a95396068aa7fecfd761f9214ea8af9c3deb8 in branch main(B[m
2026-04-25T12:38:22.052092263Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:38:22.087212159Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:38:24.7752579Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:39:49.112828018Z 
2026-04-25T12:39:49.112854768Z added 590 packages, and audited 591 packages in 1m
2026-04-25T12:39:49.112865348Z 
2026-04-25T12:39:49.113001071Z 113 packages are looking for funding
2026-04-25T12:39:49.113082523Z   run `npm fund` for details
2026-04-25T12:39:49.265286341Z 
2026-04-25T12:39:49.265312761Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:39:49.265317361Z 
2026-04-25T12:39:49.265321832Z To address issues that do not require attention, run:
2026-04-25T12:39:49.265325792Z   npm audit fix
2026-04-25T12:39:49.265329612Z 
2026-04-25T12:39:49.265333532Z To address all issues (including breaking changes), run:
2026-04-25T12:39:49.265337832Z   npm audit fix --force
2026-04-25T12:39:49.265341692Z 
2026-04-25T12:39:49.265346222Z Run `npm audit` for details.
2026-04-25T12:39:49.498056618Z 
2026-04-25T12:39:49.498084449Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:39:49.498097139Z > tsc && tsc-alias
2026-04-25T12:39:49.498103659Z 
2026-04-25T12:39:53.0262208Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:40:00.622178515Z [34;1m==>[0;22m [1mUploaded in 4.9s. Compression took 2.6s[22m
2026-04-25T12:40:00.653905217Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T12:42:19.660687532Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:42:20.353845464Z [34m[1m==>(B[m [1mChecking out commit 720424b7555dc4709105b05417dcda76ffe6b54e in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T12:42:21.705352305Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:42:21.729345503Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:42:23.664961967Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:43:43.606623954Z 
2026-04-25T12:43:43.606662357Z added 590 packages, and audited 591 packages in 1m
2026-04-25T12:43:43.606689539Z 
2026-04-25T12:43:43.606802267Z 113 packages are looking for funding
2026-04-25T12:43:43.606875822Z   run `npm fund` for details
2026-04-25T12:43:43.751917675Z 
2026-04-25T12:43:43.751949578Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:43:43.751954398Z 
2026-04-25T12:43:43.751958628Z To address issues that do not require attention, run:
2026-04-25T12:43:43.751962869Z   npm audit fix
2026-04-25T12:43:43.751966699Z 
2026-04-25T12:43:43.751970539Z To address all issues (including breaking changes), run:
2026-04-25T12:43:43.75197498Z   npm audit fix --force
2026-04-25T12:43:43.7519788Z 
2026-04-25T12:43:43.75198508Z Run `npm audit` for details.
2026-04-25T12:43:43.975540556Z 
2026-04-25T12:43:43.975564328Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:43:43.975568948Z > tsc && tsc-alias
2026-04-25T12:43:43.975572079Z 
2026-04-25T12:43:46.84641759Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:43:53.028788046Z [34;1m==>[0;22m [1mUploaded in 3.8s. Compression took 2.4s[22m
2026-04-25T12:43:53.060982036Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-25T12:46:53.326683406Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:46:53.963617769Z [34m[1m==>(B[m [1mChecking out commit df1e35376c6272aeb0ae5cf180988b7cceab8d75 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T12:46:55.389906444Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:46:55.414382444Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:46:57.343571276Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:48:16.653846983Z 
2026-04-25T12:48:16.653883325Z added 590 packages, and audited 591 packages in 1m
2026-04-25T12:48:16.653898816Z 
2026-04-25T12:48:16.654003525Z 113 packages are looking for funding
2026-04-25T12:48:16.654131865Z   run `npm fund` for details
2026-04-25T12:48:16.799668757Z 
2026-04-25T12:48:16.799692169Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:48:16.799695869Z 
2026-04-25T12:48:16.7996994Z To address issues that do not require attention, run:
2026-04-25T12:48:16.79970258Z   npm audit fix
2026-04-25T12:48:16.7997056Z 
2026-04-25T12:48:16.799708681Z To address all issues (including breaking changes), run:
2026-04-25T12:48:16.799712331Z   npm audit fix --force
2026-04-25T12:48:16.799715381Z 
2026-04-25T12:48:16.799718951Z Run `npm audit` for details.
2026-04-25T12:48:17.021461508Z 
2026-04-25T12:48:17.0214897Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:48:17.021496581Z > tsc && tsc-alias
2026-04-25T12:48:17.021501291Z 
2026-04-25T12:48:22.534963607Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:48:28.399602896Z [34;1m==>[0;22m [1mUploaded in 3.2s. Compression took 2.6s[22m
2026-04-25T12:48:28.430439252Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-25T12:28:23.685722327Z 2026-04-25 12:28:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:25.401596388Z 2026-04-25 12:28:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:28.682713936Z 2026-04-25 12:28:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:28.685586014Z 2026-04-25 12:28:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:30.401818123Z 2026-04-25 12:28:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:33.685603195Z 2026-04-25 12:28:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:35.401958402Z 2026-04-25 12:28:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:38.686690542Z 2026-04-25 12:28:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:40.402456052Z 2026-04-25 12:28:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:43.685828473Z 2026-04-25 12:28:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:45.401531096Z 2026-04-25 12:28:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:48.68604342Z 2026-04-25 12:28:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:50.402384096Z 2026-04-25 12:28:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:53.687183879Z 2026-04-25 12:28:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:55.401762396Z 2026-04-25 12:28:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:28:58.686044104Z 2026-04-25 12:28:58 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:28:58.687088229Z 2026-04-25 12:28:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:00.402429433Z 2026-04-25 12:29:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:29:03.68533136Z 2026-04-25 12:29:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:05.402153793Z 2026-04-25 12:29:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:29:08.685660351Z 2026-04-25 12:29:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:10.401829898Z 2026-04-25 12:29:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:29:13.685219413Z 2026-04-25 12:29:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:15.402303131Z 2026-04-25 12:29:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.157"}
2026-04-25T12:29:18.685177676Z 2026-04-25 12:29:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:23.685535588Z 2026-04-25 12:29:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:28.682410818Z 2026-04-25 12:29:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:28.685265295Z 2026-04-25 12:29:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:33.685559106Z 2026-04-25 12:29:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:38.686003881Z 2026-04-25 12:29:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:43.685273588Z 2026-04-25 12:29:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:48.685179841Z 2026-04-25 12:29:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:53.685245748Z 2026-04-25 12:29:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:58.683488502Z 2026-04-25 12:29:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:29:58.685663923Z 2026-04-25 12:29:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:03.686005757Z 2026-04-25 12:30:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:08.685641514Z 2026-04-25 12:30:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:13.686144432Z 2026-04-25 12:30:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:18.685284128Z 2026-04-25 12:30:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:23.685812427Z 2026-04-25 12:30:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:28.68222533Z 2026-04-25 12:30:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:28.684973424Z 2026-04-25 12:30:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:33.685591766Z 2026-04-25 12:30:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:38.688452381Z 2026-04-25 12:30:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:43.685585221Z 2026-04-25 12:30:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:48.685667311Z 2026-04-25 12:30:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:53.689491419Z 2026-04-25 12:30:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:58.682240946Z 2026-04-25 12:30:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:30:58.685588465Z 2026-04-25 12:30:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:03.686329271Z 2026-04-25 12:31:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:08.686298269Z 2026-04-25 12:31:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:13.68550003Z 2026-04-25 12:31:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:18.687437955Z 2026-04-25 12:31:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:23.68555461Z 2026-04-25 12:31:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:28.681368571Z 2026-04-25 12:31:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:28.685101889Z 2026-04-25 12:31:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:33.685712923Z 2026-04-25 12:31:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:38.685760845Z 2026-04-25 12:31:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:43.685564701Z 2026-04-25 12:31:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:48.685769936Z 2026-04-25 12:31:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:49.483660861Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T12:31:49.565259468Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T12:31:53.686311379Z 2026-04-25 12:31:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:58.681318463Z 2026-04-25 12:31:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:31:58.685142563Z 2026-04-25 12:31:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:03.685670867Z 2026-04-25 12:32:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:08.685340081Z 2026-04-25 12:32:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:13.685579739Z 2026-04-25 12:32:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:18.685630842Z 2026-04-25 12:32:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:20.643518771Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T12:32:20.781362603Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:32:20.781367413Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:32:20.781392135Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:32:20.781396115Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:32:20.78384496Z 2026-04-25 12:32:20 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-25T12:32:20.818836884Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:32:20.821400122Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:32:20.823575591Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:32:20.825709088Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T12:32:20.827976958Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:32:20.830063694Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:32:23.68541995Z 2026-04-25 12:32:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:24.874022266Z 2026-04-25 12:32:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:28.685836763Z 2026-04-25 12:32:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:29.873550524Z 2026-04-25 12:32:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:33.6877464Z 2026-04-25 12:32:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:34.877287877Z 2026-04-25 12:32:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:38.68588302Z 2026-04-25 12:32:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:39.873656984Z 2026-04-25 12:32:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:43.686019697Z 2026-04-25 12:32:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:44.87370551Z 2026-04-25 12:32:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:48.68600798Z 2026-04-25 12:32:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:49.873842973Z 2026-04-25 12:32:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:49.875110579Z 2026-04-25 12:32:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:53.685565894Z 2026-04-25 12:32:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:54.872760105Z 2026-04-25 12:32:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:32:58.685627179Z 2026-04-25 12:32:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:32:59.873637181Z 2026-04-25 12:32:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:03.685586043Z 2026-04-25 12:33:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:33:04.872791642Z 2026-04-25 12:33:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:08.686610431Z 2026-04-25 12:33:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:33:09.875121397Z 2026-04-25 12:33:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:13.685199483Z 2026-04-25 12:33:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:33:14.873791748Z 2026-04-25 12:33:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:18.685803643Z 2026-04-25 12:33:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-25T12:33:19.873045967Z 2026-04-25 12:33:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:19.87368297Z 2026-04-25 12:33:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:24.872886169Z 2026-04-25 12:33:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:29.873695457Z 2026-04-25 12:33:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:34.873050068Z 2026-04-25 12:33:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:39.875386051Z 2026-04-25 12:33:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:44.873693053Z 2026-04-25 12:33:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:49.873786567Z 2026-04-25 12:33:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:49.875543986Z 2026-04-25 12:33:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:54.875273747Z 2026-04-25 12:33:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:33:59.874265909Z 2026-04-25 12:33:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:04.873763367Z 2026-04-25 12:34:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:09.873994545Z 2026-04-25 12:34:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:14.873028233Z 2026-04-25 12:34:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:19.87423968Z 2026-04-25 12:34:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:19.874272482Z 2026-04-25 12:34:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:24.873745843Z 2026-04-25 12:34:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:29.873400756Z 2026-04-25 12:34:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:34.877955761Z 2026-04-25 12:34:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:39.873542183Z 2026-04-25 12:34:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:44.878552591Z 2026-04-25 12:34:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:49.875969279Z 2026-04-25 12:34:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:49.875993601Z 2026-04-25 12:34:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:54.873014803Z 2026-04-25 12:34:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:34:59.873944959Z 2026-04-25 12:34:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:04.873555598Z 2026-04-25 12:35:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:09.87349794Z 2026-04-25 12:35:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:14.872780659Z 2026-04-25 12:35:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:19.873717561Z 2026-04-25 12:35:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:19.875048091Z 2026-04-25 12:35:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:24.872785138Z 2026-04-25 12:35:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:29.872938279Z 2026-04-25 12:35:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:34.872788431Z 2026-04-25 12:35:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:39.875373648Z 2026-04-25 12:35:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:44.873835999Z 2026-04-25 12:35:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:49.875346645Z 2026-04-25 12:35:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:49.875366816Z 2026-04-25 12:35:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:54.872932339Z 2026-04-25 12:35:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:35:59.873300481Z 2026-04-25 12:35:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:04.872666427Z 2026-04-25 12:36:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:09.873325651Z 2026-04-25 12:36:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:14.873414878Z 2026-04-25 12:36:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:19.873324574Z 2026-04-25 12:36:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:19.874068174Z 2026-04-25 12:36:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:24.873554172Z 2026-04-25 12:36:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:29.872799405Z 2026-04-25 12:36:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:34.872892956Z 2026-04-25 12:36:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:39.875197808Z 2026-04-25 12:36:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:44.873139916Z 2026-04-25 12:36:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:49.884848684Z 2026-04-25 12:36:49 [info] {"method":"GET","path":"/health","status":200,"duration":"10ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:49.885861823Z 2026-04-25 12:36:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:54.874315724Z 2026-04-25 12:36:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:36:59.875892941Z 2026-04-25 12:36:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:04.876974706Z 2026-04-25 12:37:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:09.873976756Z 2026-04-25 12:37:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:14.873041437Z 2026-04-25 12:37:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:17.943680511Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T12:37:18.029576565Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T12:37:19.872995409Z 2026-04-25 12:37:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:19.874060581Z 2026-04-25 12:37:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:24.874446693Z 2026-04-25 12:37:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:29.873869231Z 2026-04-25 12:37:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:34.872847211Z 2026-04-25 12:37:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:39.874217053Z 2026-04-25 12:37:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:44.873436361Z 2026-04-25 12:37:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:49.873008085Z 2026-04-25 12:37:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:49.876024208Z 2026-04-25 12:37:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:54.873235073Z 2026-04-25 12:37:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:37:59.873673176Z 2026-04-25 12:37:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:04.872587648Z 2026-04-25 12:38:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:09.873262689Z 2026-04-25 12:38:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:14.873529934Z 2026-04-25 12:38:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:19.873144746Z 2026-04-25 12:38:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:19.873884456Z 2026-04-25 12:38:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:24.874580462Z 2026-04-25 12:38:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:29.872797092Z 2026-04-25 12:38:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:34.874971939Z 2026-04-25 12:38:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:39.875997941Z 2026-04-25 12:38:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:44.873167434Z 2026-04-25 12:38:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:49.886449783Z 2026-04-25 12:38:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:49.887254407Z 2026-04-25 12:38:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:54.873384538Z 2026-04-25 12:38:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:38:59.874864144Z 2026-04-25 12:38:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:04.873869545Z 2026-04-25 12:39:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:09.87321813Z 2026-04-25 12:39:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:14.874227318Z 2026-04-25 12:39:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:19.875092608Z 2026-04-25 12:39:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:19.876060243Z 2026-04-25 12:39:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:24.873929491Z 2026-04-25 12:39:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:29.873192125Z 2026-04-25 12:39:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:34.873987312Z 2026-04-25 12:39:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:39.873301281Z 2026-04-25 12:39:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:44.874362199Z 2026-04-25 12:39:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:49.872651301Z 2026-04-25 12:39:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:49.873424783Z 2026-04-25 12:39:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:54.873379378Z 2026-04-25 12:39:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:39:59.87372162Z 2026-04-25 12:39:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:02.983984263Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T12:40:03.072233677Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T12:40:04.87281701Z 2026-04-25 12:40:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:09.87265106Z 2026-04-25 12:40:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:14.873153523Z 2026-04-25 12:40:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:19.873894928Z 2026-04-25 12:40:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:19.874613676Z 2026-04-25 12:40:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:21.749002949Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T12:40:23.057346819Z 
2026-04-25T12:40:23.05738027Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T12:40:23.05738551Z > node dist/index.js
2026-04-25T12:40:23.05738841Z 
2026-04-25T12:40:24.87312363Z 2026-04-25 12:40:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:28.143071398Z 2026-04-25 12:40:28 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T12:40:29.242997515Z 2026-04-25 12:40:29 [info] Firestore initialized successfully
2026-04-25T12:40:29.440678498Z 2026-04-25 12:40:29 [info] ✅ Server running on http://localhost:10000
2026-04-25T12:40:29.540104951Z 2026-04-25 12:40:29 [info] Environment: production
2026-04-25T12:40:29.540488681Z 2026-04-25 12:40:29 [info] API URL: http://localhost:5000
2026-04-25T12:40:29.540900432Z 2026-04-25 12:40:29 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T12:40:29.665580454Z 2026-04-25 12:40:29 [error] Route / not found
2026-04-25T12:40:29.665601764Z Error: Route / not found
2026-04-25T12:40:29.665608904Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:40:29.665616935Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:40:29.665624545Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:40:29.665630755Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:40:29.665635585Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:40:29.665640596Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:40:29.665645016Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:40:29.665649936Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:40:29.665654856Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:40:29.665659906Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:40:29.670567658Z 2026-04-25 12:40:29 [info] {"method":"HEAD","path":"/","status":404,"duration":"6ms","ip":"::1"}
2026-04-25T12:40:29.87336465Z 2026-04-25 12:40:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:34.873376934Z 2026-04-25 12:40:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:37.30183004Z 2026-04-25 12:40:37 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:40:37.303389622Z 2026-04-25 12:40:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:40:37.959152935Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T12:40:38.050096494Z 2026-04-25 12:40:38 [error] Route / not found
2026-04-25T12:40:38.050117744Z Error: Route / not found
2026-04-25T12:40:38.050123545Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:40:38.050128645Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:40:38.050133355Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:40:38.050138075Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:40:38.050142125Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:40:38.050146245Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:40:38.050150356Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:40:38.050154505Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:40:38.050174156Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:40:38.050177406Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:40:38.053358542Z 2026-04-25 12:40:38 [info] {"method":"GET","path":"/","status":404,"duration":"3ms","ip":"::1"}
2026-04-25T12:40:38.064078812Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:40:38.066120177Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:40:38.068437219Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:40:38.071501731Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T12:40:38.074969954Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:40:38.076874945Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:40:39.873815168Z 2026-04-25 12:40:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:42.304927634Z 2026-04-25 12:40:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:40:44.873773319Z 2026-04-25 12:40:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:47.304651936Z 2026-04-25 12:40:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:40:49.87506713Z 2026-04-25 12:40:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:52.305368453Z 2026-04-25 12:40:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:40:54.873361248Z 2026-04-25 12:40:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:40:57.304174218Z 2026-04-25 12:40:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:40:59.873894047Z 2026-04-25 12:40:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:41:02.304915103Z 2026-04-25 12:41:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:04.875865182Z 2026-04-25 12:41:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:41:07.30131814Z 2026-04-25 12:41:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:07.303508059Z 2026-04-25 12:41:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:09.873619613Z 2026-04-25 12:41:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:41:12.303694536Z 2026-04-25 12:41:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:14.873210988Z 2026-04-25 12:41:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:41:17.304006967Z 2026-04-25 12:41:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:19.874557162Z 2026-04-25 12:41:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:41:22.30376205Z 2026-04-25 12:41:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:24.873681315Z 2026-04-25 12:41:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:41:27.304658433Z 2026-04-25 12:41:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:29.873546118Z 2026-04-25 12:41:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:41:32.30429802Z 2026-04-25 12:41:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:34.873601433Z 2026-04-25 12:41:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.123"}
2026-04-25T12:41:37.300578016Z 2026-04-25 12:41:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:37.303559796Z 2026-04-25 12:41:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:42.303859559Z 2026-04-25 12:41:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:47.303745129Z 2026-04-25 12:41:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:52.304383078Z 2026-04-25 12:41:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:41:57.303949787Z 2026-04-25 12:41:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:02.304502721Z 2026-04-25 12:42:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:07.301822448Z 2026-04-25 12:42:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:07.307669805Z 2026-04-25 12:42:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:12.304046874Z 2026-04-25 12:42:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:17.304911772Z 2026-04-25 12:42:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:22.304208958Z 2026-04-25 12:42:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:27.304395616Z 2026-04-25 12:42:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:32.304334515Z 2026-04-25 12:42:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:37.300950695Z 2026-04-25 12:42:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:37.303846943Z 2026-04-25 12:42:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:42.303586154Z 2026-04-25 12:42:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:47.304435935Z 2026-04-25 12:42:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:52.304466632Z 2026-04-25 12:42:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:42:57.30607189Z 2026-04-25 12:42:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:02.303898345Z 2026-04-25 12:43:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:07.301839072Z 2026-04-25 12:43:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:07.305672795Z 2026-04-25 12:43:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:12.309204881Z 2026-04-25 12:43:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:17.303662272Z 2026-04-25 12:43:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:22.303575328Z 2026-04-25 12:43:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:27.30416085Z 2026-04-25 12:43:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:32.304383812Z 2026-04-25 12:43:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:37.300488652Z 2026-04-25 12:43:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:37.30338041Z 2026-04-25 12:43:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:42.305936822Z 2026-04-25 12:43:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:47.303643572Z 2026-04-25 12:43:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:52.303659903Z 2026-04-25 12:43:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:43:55.542466519Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T12:43:55.612499228Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T12:43:57.304471695Z 2026-04-25 12:43:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:02.304654798Z 2026-04-25 12:44:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:07.301062748Z 2026-04-25 12:44:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:07.303524114Z 2026-04-25 12:44:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:12.148320199Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T12:44:12.303754015Z 2026-04-25 12:44:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:13.661323404Z 
2026-04-25T12:44:13.661345955Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T12:44:13.661350706Z > node dist/index.js
2026-04-25T12:44:13.661353216Z 
2026-04-25T12:44:17.305159996Z 2026-04-25 12:44:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:18.550647549Z 2026-04-25 12:44:18 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T12:44:19.660614314Z 2026-04-25 12:44:19 [info] Firestore initialized successfully
2026-04-25T12:44:19.678846833Z 2026-04-25 12:44:19 [info] ✅ Server running on http://localhost:10000
2026-04-25T12:44:19.741191408Z 2026-04-25 12:44:19 [info] Environment: production
2026-04-25T12:44:19.74206148Z 2026-04-25 12:44:19 [info] API URL: http://localhost:5000
2026-04-25T12:44:19.74238616Z 2026-04-25 12:44:19 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T12:44:19.925533584Z 2026-04-25 12:44:19 [error] Route / not found
2026-04-25T12:44:19.925551665Z Error: Route / not found
2026-04-25T12:44:19.925555315Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:44:19.925557975Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:44:19.925562145Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:44:19.925565406Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:44:19.925567716Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:44:19.925569856Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:44:19.925571926Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:44:19.925574176Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:44:19.925576316Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:44:19.925578426Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:44:19.937608325Z 2026-04-25 12:44:19 [info] {"method":"HEAD","path":"/","status":404,"duration":"12ms","ip":"::1"}
2026-04-25T12:44:22.303756221Z 2026-04-25 12:44:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:25.961482523Z 2026-04-25 12:44:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:44:25.96294635Z 2026-04-25 12:44:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:44:27.263469638Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T12:44:27.3036622Z 2026-04-25 12:44:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:27.367797744Z 2026-04-25 12:44:27 [error] Route / not found
2026-04-25T12:44:27.367815945Z Error: Route / not found
2026-04-25T12:44:27.367819026Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:44:27.367821556Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:44:27.367824306Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:44:27.367826506Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:44:27.367828266Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:44:27.367829926Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:44:27.367831556Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:44:27.367833457Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:44:27.367848417Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:44:27.367851707Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:44:27.368617623Z 2026-04-25 12:44:27 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T12:44:27.384353932Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:44:27.386437448Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:44:27.388305948Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:44:27.390097636Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T12:44:27.392014908Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:44:27.393843316Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:44:30.959917133Z 2026-04-25 12:44:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:44:32.304069831Z 2026-04-25 12:44:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:35.959975915Z 2026-04-25 12:44:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:44:37.304006739Z 2026-04-25 12:44:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:40.958979431Z 2026-04-25 12:44:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:44:42.303616587Z 2026-04-25 12:44:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:45.959392127Z 2026-04-25 12:44:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:44:47.304265842Z 2026-04-25 12:44:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:50.96300421Z 2026-04-25 12:44:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:44:52.30397646Z 2026-04-25 12:44:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:44:55.962018705Z 2026-04-25 12:44:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:44:55.962038536Z 2026-04-25 12:44:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:44:57.303566304Z 2026-04-25 12:44:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:45:00.959659503Z 2026-04-25 12:45:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:02.304343418Z 2026-04-25 12:45:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:45:05.958773426Z 2026-04-25 12:45:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:07.303861229Z 2026-04-25 12:45:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:45:10.959443328Z 2026-04-25 12:45:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:12.304411936Z 2026-04-25 12:45:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:45:15.959280216Z 2026-04-25 12:45:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:17.304886799Z 2026-04-25 12:45:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:45:20.95945225Z 2026-04-25 12:45:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:22.304527389Z 2026-04-25 12:45:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.114"}
2026-04-25T12:45:25.960232987Z 2026-04-25 12:45:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:25.961313521Z 2026-04-25 12:45:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:30.959236774Z 2026-04-25 12:45:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:35.958947108Z 2026-04-25 12:45:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:40.959815619Z 2026-04-25 12:45:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:45.959616011Z 2026-04-25 12:45:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:50.96126798Z 2026-04-25 12:45:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:55.96065384Z 2026-04-25 12:45:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:45:55.964745275Z 2026-04-25 12:45:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:00.959467852Z 2026-04-25 12:46:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:05.960681204Z 2026-04-25 12:46:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:10.958930855Z 2026-04-25 12:46:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:15.959156499Z 2026-04-25 12:46:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:20.959096693Z 2026-04-25 12:46:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:25.958964549Z 2026-04-25 12:46:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:25.961877383Z 2026-04-25 12:46:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:30.959086486Z 2026-04-25 12:46:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:35.958863878Z 2026-04-25 12:46:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:40.959071352Z 2026-04-25 12:46:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:45.959615343Z 2026-04-25 12:46:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:50.959654749Z 2026-04-25 12:46:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:55.959252586Z 2026-04-25 12:46:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:46:55.959884424Z 2026-04-25 12:46:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:00.95953715Z 2026-04-25 12:47:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:05.958868753Z 2026-04-25 12:47:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:10.95884622Z 2026-04-25 12:47:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:15.958604151Z 2026-04-25 12:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:20.958923611Z 2026-04-25 12:47:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:25.959694945Z 2026-04-25 12:47:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:25.960321902Z 2026-04-25 12:47:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:30.958684609Z 2026-04-25 12:47:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:35.958899872Z 2026-04-25 12:47:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:40.959089789Z 2026-04-25 12:47:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:45.959285523Z 2026-04-25 12:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:50.95907682Z 2026-04-25 12:47:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:55.960127967Z 2026-04-25 12:47:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:47:55.960754075Z 2026-04-25 12:47:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:00.962445477Z 2026-04-25 12:48:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:05.958626377Z 2026-04-25 12:48:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:10.959188904Z 2026-04-25 12:48:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:15.958856304Z 2026-04-25 12:48:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:20.959110245Z 2026-04-25 12:48:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:25.959252176Z 2026-04-25 12:48:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:25.959879903Z 2026-04-25 12:48:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:30.959272536Z 2026-04-25 12:48:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:31.31999353Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T12:48:31.377247477Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T12:48:35.959479663Z 2026-04-25 12:48:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:40.95924181Z 2026-04-25 12:48:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:45.959535145Z 2026-04-25 12:48:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:46.41073423Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T12:48:47.720334412Z 
2026-04-25T12:48:47.720362064Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T12:48:47.720367504Z > node dist/index.js
2026-04-25T12:48:47.720370665Z 
2026-04-25T12:48:50.959086402Z 2026-04-25 12:48:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:52.517095906Z 2026-04-25 12:48:52 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T12:48:53.615160703Z 2026-04-25 12:48:53 [info] Firestore initialized successfully
2026-04-25T12:48:53.619264241Z 2026-04-25 12:48:53 [info] ✅ Server running on http://localhost:10000
2026-04-25T12:48:53.619443314Z 2026-04-25 12:48:53 [info] Environment: production
2026-04-25T12:48:53.61965352Z 2026-04-25 12:48:53 [info] API URL: http://localhost:5000
2026-04-25T12:48:53.619852995Z 2026-04-25 12:48:53 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T12:48:54.120299189Z 2026-04-25 12:48:54 [error] Route / not found
2026-04-25T12:48:54.120317861Z Error: Route / not found
2026-04-25T12:48:54.120323791Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:48:54.120328761Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:48:54.120335732Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:48:54.120340622Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:48:54.120345532Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:48:54.120349793Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:48:54.120354293Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:48:54.120358873Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:48:54.120363604Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:48:54.120367784Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:48:54.125296194Z 2026-04-25 12:48:54 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-25T12:48:55.959265463Z 2026-04-25 12:48:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:48:55.960029579Z 2026-04-25 12:48:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:00.958749339Z 2026-04-25 12:49:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:01.728983241Z 2026-04-25 12:49:01 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:01.730622194Z 2026-04-25 12:49:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:02.616370868Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T12:49:02.701470139Z 2026-04-25 12:49:02 [error] Route / not found
2026-04-25T12:49:02.70149172Z Error: Route / not found
2026-04-25T12:49:02.701498331Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:49:02.701504451Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:49:02.701509902Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:49:02.701515242Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:49:02.701519723Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:49:02.701524193Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:49:02.701528883Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:49:02.701533164Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:49:02.701552385Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:49:02.701555665Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:49:02.702429121Z 2026-04-25 12:49:02 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-25T12:49:02.748479716Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:49:02.750800308Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:49:02.753146931Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:49:02.75611339Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T12:49:02.758584586Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:49:02.760453946Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:49:05.959715929Z 2026-04-25 12:49:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:06.731047432Z 2026-04-25 12:49:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:10.959196927Z 2026-04-25 12:49:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:11.731313268Z 2026-04-25 12:49:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:15.965790646Z 2026-04-25 12:49:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:16.732304899Z 2026-04-25 12:49:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
```
