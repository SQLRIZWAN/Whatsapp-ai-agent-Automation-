# Render Deploy Diagnostics

Run: 24931366423
Commit: 6e772b5122d50d9b5f969ccfe38a0d673685cea3
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7mbitm8bjmc7388p430

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
  "updatedAt": "2026-04-25T12:56:34.690086Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7mbitm8bjmc7388p430",
  "commit": {
    "id": "6e772b5122d50d9b5f969ccfe38a0d673685cea3",
    "message": "chore: bump frontend version to trigger Vercel redeploy\n\nPrevious Vercel deploy hit a transient platform error; Render already\ndeployed successfully. This re-triggers the full deploy pipeline.\n\nhttps://claude.ai/code/session_01T1SgdJMtKrs6g3inUqNSoB",
    "createdAt": "2026-04-25T12:54:02Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-25T12:54:14.857339Z",
  "updatedAt": "2026-04-25T12:56:34.689063Z",
  "startedAt": "2026-04-25T12:54:14.798842Z",
  "finishedAt": "2026-04-25T12:56:34.688929Z"
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
2026-04-25T12:54:17.797193995Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-25T12:54:18.441476936Z [34m[1m==>(B[m [1mChecking out commit 6e772b5122d50d9b5f969ccfe38a0d673685cea3 in branch claude/fix-ai-messaging-stability-a9TSt(B[m
2026-04-25T12:54:19.847358929Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-25T12:54:19.871744551Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-25T12:54:21.906889814Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-25T12:55:50.518102414Z 
2026-04-25T12:55:50.518139057Z added 590 packages, and audited 591 packages in 1m
2026-04-25T12:55:50.518155999Z 
2026-04-25T12:55:50.518225064Z 113 packages are looking for funding
2026-04-25T12:55:50.518279868Z   run `npm fund` for details
2026-04-25T12:55:50.679653327Z 
2026-04-25T12:55:50.679676759Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-25T12:55:50.67968182Z 
2026-04-25T12:55:50.67968617Z To address issues that do not require attention, run:
2026-04-25T12:55:50.67969052Z   npm audit fix
2026-04-25T12:55:50.67969447Z 
2026-04-25T12:55:50.679698461Z To address all issues (including breaking changes), run:
2026-04-25T12:55:50.679703121Z   npm audit fix --force
2026-04-25T12:55:50.679707051Z 
2026-04-25T12:55:50.679711782Z Run `npm audit` for details.
2026-04-25T12:55:50.930344534Z 
2026-04-25T12:55:50.930367356Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-25T12:55:50.930371946Z > tsc && tsc-alias
2026-04-25T12:55:50.930375046Z 
2026-04-25T12:55:54.038093476Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-25T12:56:00.114750598Z [34;1m==>[0;22m [1mUploaded in 3.3s. Compression took 2.8s[22m
2026-04-25T12:56:00.146194751Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-25T12:37:17.943680511Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T12:37:18.029576565Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
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
2026-04-25T12:49:20.959030934Z 2026-04-25 12:49:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:21.731157818Z 2026-04-25 12:49:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:25.958931306Z 2026-04-25 12:49:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:26.73271639Z 2026-04-25 12:49:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:30.959362876Z 2026-04-25 12:49:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:31.726520431Z 2026-04-25 12:49:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:31.73051718Z 2026-04-25 12:49:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:35.959025887Z 2026-04-25 12:49:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:36.736416417Z 2026-04-25 12:49:36 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:40.959704734Z 2026-04-25 12:49:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:41.730862245Z 2026-04-25 12:49:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:45.958628993Z 2026-04-25 12:49:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:46.731379958Z 2026-04-25 12:49:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:50.959779741Z 2026-04-25 12:49:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:51.734850682Z 2026-04-25 12:49:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:49:55.959094167Z 2026-04-25 12:49:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:49:56.731469522Z 2026-04-25 12:49:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:00.958754118Z 2026-04-25 12:50:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.15"}
2026-04-25T12:50:01.725862785Z 2026-04-25 12:50:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:01.730676576Z 2026-04-25 12:50:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:06.73082392Z 2026-04-25 12:50:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:11.731793325Z 2026-04-25 12:50:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:16.731629425Z 2026-04-25 12:50:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:21.731526759Z 2026-04-25 12:50:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:26.73085696Z 2026-04-25 12:50:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:31.726845421Z 2026-04-25 12:50:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:31.730875873Z 2026-04-25 12:50:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:36.731787942Z 2026-04-25 12:50:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:41.732763976Z 2026-04-25 12:50:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:46.731738319Z 2026-04-25 12:50:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:51.731642562Z 2026-04-25 12:50:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:50:56.731453547Z 2026-04-25 12:50:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:01.725981416Z 2026-04-25 12:51:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:01.731490869Z 2026-04-25 12:51:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:06.734627763Z 2026-04-25 12:51:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:11.731442113Z 2026-04-25 12:51:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:16.731725143Z 2026-04-25 12:51:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:21.731385215Z 2026-04-25 12:51:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:26.731854769Z 2026-04-25 12:51:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:31.725930132Z 2026-04-25 12:51:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:31.730868692Z 2026-04-25 12:51:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:36.731451993Z 2026-04-25 12:51:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:41.731123765Z 2026-04-25 12:51:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:46.73177346Z 2026-04-25 12:51:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:51.73315012Z 2026-04-25 12:51:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:51:56.731629182Z 2026-04-25 12:51:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:01.725768798Z 2026-04-25 12:52:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:01.730564958Z 2026-04-25 12:52:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:06.731119834Z 2026-04-25 12:52:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:11.732032597Z 2026-04-25 12:52:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:16.731587579Z 2026-04-25 12:52:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:21.732454918Z 2026-04-25 12:52:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:26.732015449Z 2026-04-25 12:52:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:31.727056431Z 2026-04-25 12:52:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:31.730816943Z 2026-04-25 12:52:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:36.734222112Z 2026-04-25 12:52:36 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:41.731349159Z 2026-04-25 12:52:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:46.731696578Z 2026-04-25 12:52:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:51.731397828Z 2026-04-25 12:52:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:52:56.731301093Z 2026-04-25 12:52:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:01.726474063Z 2026-04-25 12:53:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:01.73603726Z 2026-04-25 12:53:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:06.731175147Z 2026-04-25 12:53:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:11.730998195Z 2026-04-25 12:53:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:16.731420657Z 2026-04-25 12:53:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:21.732768969Z 2026-04-25 12:53:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:26.731558658Z 2026-04-25 12:53:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:31.726433494Z 2026-04-25 12:53:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:31.730429343Z 2026-04-25 12:53:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:36.730673311Z 2026-04-25 12:53:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:41.741367832Z 2026-04-25 12:53:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:46.731112972Z 2026-04-25 12:53:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:51.731461557Z 2026-04-25 12:53:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:56.731399991Z 2026-04-25 12:53:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:53:58.028456372Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-25T12:53:58.112517763Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-25T12:54:01.726102841Z 2026-04-25 12:54:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:01.731055603Z 2026-04-25 12:54:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:06.731054631Z 2026-04-25 12:54:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:11.731024786Z 2026-04-25 12:54:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:16.731203267Z 2026-04-25 12:54:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:21.731114547Z 2026-04-25 12:54:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:26.732450023Z 2026-04-25 12:54:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:31.725502719Z 2026-04-25 12:54:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:31.730369364Z 2026-04-25 12:54:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:36.731528307Z 2026-04-25 12:54:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:41.731015044Z 2026-04-25 12:54:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:46.73155981Z 2026-04-25 12:54:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:51.730867584Z 2026-04-25 12:54:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:54:56.731269398Z 2026-04-25 12:54:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:01.725541524Z 2026-04-25 12:55:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:01.730709541Z 2026-04-25 12:55:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:06.731271657Z 2026-04-25 12:55:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:11.731496658Z 2026-04-25 12:55:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:16.731623022Z 2026-04-25 12:55:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:21.736313827Z 2026-04-25 12:55:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:26.731244249Z 2026-04-25 12:55:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:31.726337915Z 2026-04-25 12:55:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:31.730934819Z 2026-04-25 12:55:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:36.730932731Z 2026-04-25 12:55:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:41.730850208Z 2026-04-25 12:55:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:46.731581055Z 2026-04-25 12:55:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:51.730858552Z 2026-04-25 12:55:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:55:56.731831366Z 2026-04-25 12:55:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:01.726150381Z 2026-04-25 12:56:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:01.731108023Z 2026-04-25 12:56:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:03.269750784Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T12:56:03.399102668Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T12:56:06.731118754Z 2026-04-25 12:56:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:11.73426219Z 2026-04-25 12:56:11 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:16.731178609Z 2026-04-25 12:56:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:18.391381859Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T12:56:19.494421121Z 
2026-04-25T12:56:19.494450573Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T12:56:19.494455973Z > node dist/index.js
2026-04-25T12:56:19.494459234Z 
2026-04-25T12:56:21.730766428Z 2026-04-25 12:56:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:23.793814985Z 2026-04-25 12:56:23 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T12:56:24.693191931Z 2026-04-25 12:56:24 [info] Firestore initialized successfully
2026-04-25T12:56:24.788273325Z 2026-04-25 12:56:24 [info] ✅ Server running on http://localhost:10000
2026-04-25T12:56:24.788431475Z 2026-04-25 12:56:24 [info] Environment: production
2026-04-25T12:56:24.788607376Z 2026-04-25 12:56:24 [info] API URL: http://localhost:5000
2026-04-25T12:56:24.788802598Z 2026-04-25 12:56:24 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T12:56:25.087869176Z 2026-04-25 12:56:25 [error] Route / not found
2026-04-25T12:56:25.087887937Z Error: Route / not found
2026-04-25T12:56:25.087892027Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:56:25.087895948Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:56:25.087902118Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:56:25.087906958Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:56:25.087910108Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:56:25.087913509Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:56:25.087916869Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:56:25.087918959Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:56:25.087920889Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:56:25.087922839Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:56:25.092047869Z 2026-04-25 12:56:25 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-25T12:56:26.732121849Z 2026-04-25 12:56:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:31.726059944Z 2026-04-25 12:56:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:31.730793589Z 2026-04-25 12:56:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-25T12:56:34.114761945Z 2026-04-25 12:56:34 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.32"}
2026-04-25T12:56:34.116803339Z 2026-04-25 12:56:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.32"}
2026-04-25T12:56:34.824591186Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T12:56:34.897350294Z 2026-04-25 12:56:34 [error] Route / not found
2026-04-25T12:56:34.897370485Z Error: Route / not found
2026-04-25T12:56:34.897374756Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T12:56:34.897378126Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:56:34.897381506Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:56:34.897384536Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:56:34.897387197Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T12:56:34.897389686Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T12:56:34.897392067Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T12:56:34.897394467Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T12:56:34.897409318Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T12:56:34.897412078Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T12:56:34.898020505Z 2026-04-25 12:56:34 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T12:56:34.967830316Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:56:34.974991018Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:56:34.978952514Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:56:34.983579718Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T12:56:34.992360012Z [0;32m[1m==> [0m[1m[0m
2026-04-25T12:56:35.001163368Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T12:56:36.730977352Z 2026-04-25 12:56:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
```
