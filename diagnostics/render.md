# Render Deploy Diagnostics

Run: 24880938178
Commit: 57550b5f3eabc27f629daea686fb8d4fd161b3d9
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7liu08g4nts73d0lkp0

## Service details
```json
{
  "autoDeploy": "no",
  "autoDeployTrigger": "off",
  "branch": "main",
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
  "updatedAt": "2026-04-24T08:53:18.788534Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7liu08g4nts73d0lkp0",
  "commit": {
    "id": "57550b5f3eabc27f629daea686fb8d4fd161b3d9",
    "message": "frontend: use /api prefix for auth endpoints to match backend routing",
    "createdAt": "2026-04-24T08:50:58Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-24T08:51:13.808208Z",
  "updatedAt": "2026-04-24T08:53:18.785553Z",
  "startedAt": "2026-04-24T08:51:13.767075Z",
  "finishedAt": "2026-04-24T08:53:18.785343Z"
}
```

## Build logs (last 4h)
```
2026-04-24T07:59:52.427043973Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-24T07:59:58.144847139Z [34m[1m==>(B[m [1mChecking out commit cbbdc38c38b755f259e10e9d5619be81a813b13d in branch main(B[m
2026-04-24T07:59:59.508400913Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-24T07:59:59.53313315Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-24T08:00:01.431821834Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-24T08:01:22.615412435Z 
2026-04-24T08:01:22.615454695Z added 564 packages, and audited 565 packages in 1m
2026-04-24T08:01:22.615468776Z 
2026-04-24T08:01:22.615509776Z 110 packages are looking for funding
2026-04-24T08:01:22.615570218Z   run `npm fund` for details
2026-04-24T08:01:22.757860242Z 
2026-04-24T08:01:22.757880862Z 22 vulnerabilities (2 low, 12 moderate, 6 high, 2 critical)
2026-04-24T08:01:22.757885712Z 
2026-04-24T08:01:22.757889932Z To address issues that do not require attention, run:
2026-04-24T08:01:22.757893872Z   npm audit fix
2026-04-24T08:01:22.757897892Z 
2026-04-24T08:01:22.757901843Z To address all issues (including breaking changes), run:
2026-04-24T08:01:22.757906343Z   npm audit fix --force
2026-04-24T08:01:22.757910033Z 
2026-04-24T08:01:22.757914683Z Run `npm audit` for details.
2026-04-24T08:01:22.964453356Z 
2026-04-24T08:01:22.964478816Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-24T08:01:22.964484626Z > tsc && tsc-alias
2026-04-24T08:01:22.964488666Z 
2026-04-24T08:01:25.634586881Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-24T08:01:30.395372674Z [34;1m==>[0;22m [1mUploaded in 2.6s. Compression took 2.1s[22m
2026-04-24T08:01:30.423907978Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-24T08:04:49.336171856Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-24T08:04:50.218470879Z [34m[1m==>(B[m [1mChecking out commit 1dd91a378c7f04f51ff715d78a2410e8490d8d5f in branch main(B[m
2026-04-24T08:04:59.533842156Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-24T08:04:59.567756965Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-24T08:05:01.714317988Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-24T08:06:33.117699271Z 
2026-04-24T08:06:33.117723103Z added 564 packages, and audited 565 packages in 2m
2026-04-24T08:06:33.117736604Z 
2026-04-24T08:06:33.117862442Z 110 packages are looking for funding
2026-04-24T08:06:33.117900125Z   run `npm fund` for details
2026-04-24T08:06:33.263143633Z 
2026-04-24T08:06:33.263164895Z 22 vulnerabilities (2 low, 12 moderate, 6 high, 2 critical)
2026-04-24T08:06:33.263169285Z 
2026-04-24T08:06:33.263173695Z To address issues that do not require attention, run:
2026-04-24T08:06:33.263177826Z   npm audit fix
2026-04-24T08:06:33.263181716Z 
2026-04-24T08:06:33.263185656Z To address all issues (including breaking changes), run:
2026-04-24T08:06:33.263190227Z   npm audit fix --force
2026-04-24T08:06:33.263194077Z 
2026-04-24T08:06:33.263198317Z Run `npm audit` for details.
2026-04-24T08:06:33.463566489Z 
2026-04-24T08:06:33.46358581Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-24T08:06:33.46359118Z > tsc && tsc-alias
2026-04-24T08:06:33.463595201Z 
2026-04-24T08:06:35.861294311Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-24T08:06:41.009659872Z [34;1m==>[0;22m [1mUploaded in 2.9s. Compression took 2.3s[22m
2026-04-24T08:06:41.037510418Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-24T08:09:34.879703926Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-24T08:09:35.590371909Z [34m[1m==>(B[m [1mChecking out commit 453b09f0e16d0ff8e3bff49469bef1837eb36c08 in branch main(B[m
2026-04-24T08:09:36.764114396Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-24T08:09:36.787887254Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-24T08:09:38.696053512Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-24T08:11:00.388615645Z 
2026-04-24T08:11:00.388647016Z added 564 packages, and audited 565 packages in 1m
2026-04-24T08:11:00.388663717Z 
2026-04-24T08:11:00.388751059Z 110 packages are looking for funding
2026-04-24T08:11:00.388805581Z   run `npm fund` for details
2026-04-24T08:11:00.531830768Z 
2026-04-24T08:11:00.531861109Z 22 vulnerabilities (2 low, 12 moderate, 6 high, 2 critical)
2026-04-24T08:11:00.531865679Z 
2026-04-24T08:11:00.531869969Z To address issues that do not require attention, run:
2026-04-24T08:11:00.531873919Z   npm audit fix
2026-04-24T08:11:00.5318777Z 
2026-04-24T08:11:00.53188162Z To address all issues (including breaking changes), run:
2026-04-24T08:11:00.53188758Z   npm audit fix --force
2026-04-24T08:11:00.53189138Z 
2026-04-24T08:11:00.53189659Z Run `npm audit` for details.
2026-04-24T08:11:00.759111773Z 
2026-04-24T08:11:00.759138343Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-24T08:11:00.759142764Z > tsc && tsc-alias
2026-04-24T08:11:00.759145994Z 
2026-04-24T08:11:02.939215689Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-24T08:11:07.789074676Z [34;1m==>[0;22m [1mUploaded in 2.6s. Compression took 2.2s[22m
2026-04-24T08:11:07.817845458Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-24T08:13:28.288145833Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-24T08:13:29.14224693Z [34m[1m==>(B[m [1mChecking out commit 1b596495d4f6a79c337c8a429d16477d4df41dce in branch main(B[m
2026-04-24T08:13:38.236349468Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-24T08:13:38.26265991Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-24T08:13:40.390071876Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-24T08:15:04.096984275Z 
2026-04-24T08:15:04.097006586Z added 564 packages, and audited 565 packages in 1m
2026-04-24T08:15:04.097040926Z 
2026-04-24T08:15:04.097126608Z 110 packages are looking for funding
2026-04-24T08:15:04.097178549Z   run `npm fund` for details
2026-04-24T08:15:04.240716154Z 
2026-04-24T08:15:04.240740164Z 22 vulnerabilities (2 low, 12 moderate, 6 high, 2 critical)
2026-04-24T08:15:04.240743994Z 
2026-04-24T08:15:04.240747354Z To address issues that do not require attention, run:
2026-04-24T08:15:04.240750494Z   npm audit fix
2026-04-24T08:15:04.240753484Z 
2026-04-24T08:15:04.240756594Z To address all issues (including breaking changes), run:
2026-04-24T08:15:04.240760305Z   npm audit fix --force
2026-04-24T08:15:04.240763285Z 
2026-04-24T08:15:04.240766955Z Run `npm audit` for details.
2026-04-24T08:15:04.440737779Z 
2026-04-24T08:15:04.440764969Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-24T08:15:04.440770609Z > tsc && tsc-alias
2026-04-24T08:15:04.440774629Z 
2026-04-24T08:15:07.361130034Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-24T08:15:12.332268452Z [34;1m==>[0;22m [1mUploaded in 2.7s. Compression took 2.2s[22m
2026-04-24T08:15:12.36040643Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-24T08:22:09.24789936Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-24T08:22:09.988415981Z [34m[1m==>(B[m [1mChecking out commit bd7801a57a4002f9294825891d4d8cbc276cbbbf in branch main(B[m
2026-04-24T08:22:11.298320016Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-24T08:22:11.322208946Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-24T08:22:13.232304507Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-24T08:23:33.407999263Z 
2026-04-24T08:23:33.408026695Z added 564 packages, and audited 565 packages in 1m
2026-04-24T08:23:33.408059368Z 
2026-04-24T08:23:33.408192789Z 110 packages are looking for funding
2026-04-24T08:23:33.408239322Z   run `npm fund` for details
2026-04-24T08:23:33.557909811Z 
2026-04-24T08:23:33.557944124Z 22 vulnerabilities (2 low, 12 moderate, 6 high, 2 critical)
2026-04-24T08:23:33.557950115Z 
2026-04-24T08:23:33.557955415Z To address issues that do not require attention, run:
2026-04-24T08:23:33.557960185Z   npm audit fix
2026-04-24T08:23:33.557964516Z 
2026-04-24T08:23:33.557969186Z To address all issues (including breaking changes), run:
2026-04-24T08:23:33.557975417Z   npm audit fix --force
2026-04-24T08:23:33.557979837Z 
2026-04-24T08:23:33.557985997Z Run `npm audit` for details.
2026-04-24T08:23:33.789229757Z 
2026-04-24T08:23:33.789256059Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-24T08:23:33.789261799Z > tsc && tsc-alias
2026-04-24T08:23:33.789266049Z 
2026-04-24T08:23:38.438279542Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-24T08:23:44.195501571Z [34;1m==>[0;22m [1mUploaded in 2.9s. Compression took 2.8s[22m
2026-04-24T08:23:44.220185354Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-24T08:51:16.777208861Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-24T08:51:17.46514937Z [34m[1m==>(B[m [1mChecking out commit 57550b5f3eabc27f629daea686fb8d4fd161b3d9 in branch main(B[m
2026-04-24T08:51:18.837955536Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-24T08:51:18.861442922Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-24T08:51:20.744948108Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-24T08:52:40.282809708Z 
2026-04-24T08:52:40.282839199Z added 564 packages, and audited 565 packages in 1m
2026-04-24T08:52:40.28288207Z 
2026-04-24T08:52:40.283006374Z 110 packages are looking for funding
2026-04-24T08:52:40.283102296Z   run `npm fund` for details
2026-04-24T08:52:40.442678381Z 
2026-04-24T08:52:40.442710482Z 22 vulnerabilities (2 low, 12 moderate, 6 high, 2 critical)
2026-04-24T08:52:40.442714852Z 
2026-04-24T08:52:40.442719022Z To address issues that do not require attention, run:
2026-04-24T08:52:40.442723083Z   npm audit fix
2026-04-24T08:52:40.442726873Z 
2026-04-24T08:52:40.442731063Z To address all issues (including breaking changes), run:
2026-04-24T08:52:40.442735753Z   npm audit fix --force
2026-04-24T08:52:40.442739483Z 
2026-04-24T08:52:40.442744203Z Run `npm audit` for details.
2026-04-24T08:52:40.654810984Z 
2026-04-24T08:52:40.654836064Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-24T08:52:40.654840594Z > tsc && tsc-alias
2026-04-24T08:52:40.654843925Z 
2026-04-24T08:52:48.084980598Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-24T08:52:53.804876864Z [34;1m==>[0;22m [1mUploaded in 3.1s. Compression took 2.7s[22m
2026-04-24T08:52:53.829950125Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-24T08:35:56.734245275Z 2026-04-24 08:35:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:01.734200145Z 2026-04-24 08:36:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:06.734197825Z 2026-04-24 08:36:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:11.73438802Z 2026-04-24 08:36:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:16.733680921Z 2026-04-24 08:36:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:16.734348999Z 2026-04-24 08:36:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:21.734081231Z 2026-04-24 08:36:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:26.734597543Z 2026-04-24 08:36:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:31.734091247Z 2026-04-24 08:36:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:36.733332445Z 2026-04-24 08:36:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:41.733807064Z 2026-04-24 08:36:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:46.733864313Z 2026-04-24 08:36:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:46.734668985Z 2026-04-24 08:36:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:51.734408334Z 2026-04-24 08:36:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:36:56.735438307Z 2026-04-24 08:36:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:01.734143997Z 2026-04-24 08:37:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:06.734106071Z 2026-04-24 08:37:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:11.733861789Z 2026-04-24 08:37:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:16.734218592Z 2026-04-24 08:37:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:16.734712555Z 2026-04-24 08:37:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:21.734148573Z 2026-04-24 08:37:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:26.734295959Z 2026-04-24 08:37:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:31.733797218Z 2026-04-24 08:37:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:36.733389589Z 2026-04-24 08:37:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:41.734014357Z 2026-04-24 08:37:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:46.733449123Z 2026-04-24 08:37:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:46.734405629Z 2026-04-24 08:37:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:51.733891455Z 2026-04-24 08:37:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:37:56.734320976Z 2026-04-24 08:37:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:01.734379997Z 2026-04-24 08:38:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:06.733642096Z 2026-04-24 08:38:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:11.733581983Z 2026-04-24 08:38:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:16.734395873Z 2026-04-24 08:38:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:16.735057701Z 2026-04-24 08:38:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:21.733453575Z 2026-04-24 08:38:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:26.734165581Z 2026-04-24 08:38:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:31.734093926Z 2026-04-24 08:38:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:36.73364095Z 2026-04-24 08:38:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:41.736214985Z 2026-04-24 08:38:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:46.734176505Z 2026-04-24 08:38:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:46.734877484Z 2026-04-24 08:38:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:51.733895603Z 2026-04-24 08:38:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:38:56.734069391Z 2026-04-24 08:38:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:01.733929541Z 2026-04-24 08:39:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:06.734329296Z 2026-04-24 08:39:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:11.733933388Z 2026-04-24 08:39:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:16.733566411Z 2026-04-24 08:39:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:16.734174927Z 2026-04-24 08:39:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:21.734362035Z 2026-04-24 08:39:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:26.733536194Z 2026-04-24 08:39:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:31.738070407Z 2026-04-24 08:39:31 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:36.734122251Z 2026-04-24 08:39:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:41.734295796Z 2026-04-24 08:39:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:42.506214333Z 2026-04-24 08:39:42 [error] Route / not found
2026-04-24T08:39:42.506237123Z Error: Route / not found
2026-04-24T08:39:42.506243803Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:39:42.506249704Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:42.506254784Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:42.506259474Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:42.506263334Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:39:42.506267854Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:39:42.506272104Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:39:42.506276335Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:42.506280855Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:42.506285665Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:42.507100647Z 2026-04-24 08:39:42 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:39:42.96599693Z 2026-04-24 08:39:42 [error] Route /favicon.ico not found
2026-04-24T08:39:42.966043391Z Error: Route /favicon.ico not found
2026-04-24T08:39:42.966046512Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:39:42.966053282Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:42.966056132Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:42.966058862Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:42.966060942Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:39:42.966063142Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:39:42.966065292Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:39:42.966067392Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:42.966069462Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:42.966071692Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:42.966651788Z 2026-04-24 08:39:42 [info] {"method":"GET","path":"/favicon.ico","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:39:44.767583779Z 2026-04-24 08:39:44 [error] Route / not found
2026-04-24T08:39:44.767601139Z Error: Route / not found
2026-04-24T08:39:44.767604479Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:39:44.767607199Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:44.767610259Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:44.767612969Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:44.767615119Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:39:44.76761724Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:39:44.767619329Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:39:44.76762142Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:44.76762363Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:44.76762924Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:44.768035661Z 2026-04-24 08:39:44 [info] {"method":"GET","path":"/","status":404,"duration":"0ms","ip":"::1"}
2026-04-24T08:39:45.190194514Z 2026-04-24 08:39:45 [error] Route / not found
2026-04-24T08:39:45.190213545Z Error: Route / not found
2026-04-24T08:39:45.190217525Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:39:45.190220885Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:45.190224435Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:45.190227886Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:45.190230626Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:39:45.190247666Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:39:45.190250596Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:39:45.190253076Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:45.190255736Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:45.190258396Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:45.190737059Z 2026-04-24 08:39:45 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:39:45.201756596Z 2026-04-24 08:39:45 [error] Route / not found
2026-04-24T08:39:45.201767366Z Error: Route / not found
2026-04-24T08:39:45.201770646Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:39:45.201774617Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:45.201778237Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:45.201781947Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:45.201784657Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:39:45.201787387Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:39:45.201790307Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:39:45.201793067Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:39:45.201795167Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:39:45.201797037Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:39:45.202082745Z 2026-04-24 08:39:45 [info] {"method":"GET","path":"/","status":404,"duration":"0ms","ip":"::1"}
2026-04-24T08:39:46.733920065Z 2026-04-24 08:39:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:46.734325086Z 2026-04-24 08:39:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:47.085778905Z 2026-04-24 08:39:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-24T08:39:51.733531513Z 2026-04-24 08:39:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:39:56.734059306Z 2026-04-24 08:39:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:01.733484338Z 2026-04-24 08:40:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:06.734095173Z 2026-04-24 08:40:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:11.734395918Z 2026-04-24 08:40:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:16.733775879Z 2026-04-24 08:40:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:16.734335034Z 2026-04-24 08:40:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:21.734587477Z 2026-04-24 08:40:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:26.73595199Z 2026-04-24 08:40:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:31.73391201Z 2026-04-24 08:40:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:36.733283818Z 2026-04-24 08:40:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:41.733442517Z 2026-04-24 08:40:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:46.733879963Z 2026-04-24 08:40:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:46.734621223Z 2026-04-24 08:40:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:51.73434543Z 2026-04-24 08:40:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:56.734352583Z 2026-04-24 08:40:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:40:56.873082011Z 2026-04-24 08:40:56 [error] Route /auth/register not found
2026-04-24T08:40:56.873098711Z Error: Route /auth/register not found
2026-04-24T08:40:56.873103511Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:40:56.873108501Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:40:56.873113971Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:40:56.873130282Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:40:56.873135372Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:40:56.873139842Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:40:56.873143522Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:40:56.873146982Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:40:56.873150622Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:40:56.873154232Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:40:56.873409969Z 2026-04-24 08:40:56 [info] {"method":"POST","path":"/auth/register","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:41:01.733834672Z 2026-04-24 08:41:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:06.735350265Z 2026-04-24 08:41:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:11.735610874Z 2026-04-24 08:41:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:16.737897337Z 2026-04-24 08:41:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:16.742355417Z 2026-04-24 08:41:16 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:21.733942381Z 2026-04-24 08:41:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:26.733800978Z 2026-04-24 08:41:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:31.733537721Z 2026-04-24 08:41:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:36.734127837Z 2026-04-24 08:41:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:41.734092676Z 2026-04-24 08:41:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:46.733335874Z 2026-04-24 08:41:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:46.734043853Z 2026-04-24 08:41:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:51.734219376Z 2026-04-24 08:41:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:41:56.733972888Z 2026-04-24 08:41:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:01.733925773Z 2026-04-24 08:42:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:06.737394884Z 2026-04-24 08:42:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:11.73477631Z 2026-04-24 08:42:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:16.734593661Z 2026-04-24 08:42:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:16.735264249Z 2026-04-24 08:42:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:21.73434477Z 2026-04-24 08:42:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:26.733811651Z 2026-04-24 08:42:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:31.733880327Z 2026-04-24 08:42:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:36.7342Z 2026-04-24 08:42:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:41.733372652Z 2026-04-24 08:42:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:46.73319247Z 2026-04-24 08:42:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:46.733883779Z 2026-04-24 08:42:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:51.733370198Z 2026-04-24 08:42:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:42:56.733929045Z 2026-04-24 08:42:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:01.73519149Z 2026-04-24 08:43:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:06.733929438Z 2026-04-24 08:43:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:11.734261528Z 2026-04-24 08:43:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:16.733686933Z 2026-04-24 08:43:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:16.734386292Z 2026-04-24 08:43:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:21.733246282Z 2026-04-24 08:43:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:26.73392015Z 2026-04-24 08:43:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:31.733362185Z 2026-04-24 08:43:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:36.734436513Z 2026-04-24 08:43:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:41.73325682Z 2026-04-24 08:43:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:46.733657789Z 2026-04-24 08:43:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:46.734184823Z 2026-04-24 08:43:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:51.733585385Z 2026-04-24 08:43:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:43:56.733571062Z 2026-04-24 08:43:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:01.73324396Z 2026-04-24 08:44:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:06.73411747Z 2026-04-24 08:44:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:11.734407374Z 2026-04-24 08:44:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:16.733870373Z 2026-04-24 08:44:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:16.734420088Z 2026-04-24 08:44:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:21.734323955Z 2026-04-24 08:44:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:26.733998474Z 2026-04-24 08:44:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:31.73399175Z 2026-04-24 08:44:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:36.73421331Z 2026-04-24 08:44:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:41.7344871Z 2026-04-24 08:44:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:46.738707695Z 2026-04-24 08:44:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:46.73964179Z 2026-04-24 08:44:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:51.733713337Z 2026-04-24 08:44:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:44:56.73430621Z 2026-04-24 08:44:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:01.733988426Z 2026-04-24 08:45:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:06.734259036Z 2026-04-24 08:45:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:11.733424635Z 2026-04-24 08:45:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:16.733885176Z 2026-04-24 08:45:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:16.734598725Z 2026-04-24 08:45:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:21.733570335Z 2026-04-24 08:45:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:26.735183284Z 2026-04-24 08:45:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:31.733381259Z 2026-04-24 08:45:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:36.733911385Z 2026-04-24 08:45:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:41.733679448Z 2026-04-24 08:45:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:46.733773619Z 2026-04-24 08:45:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:46.734390135Z 2026-04-24 08:45:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:51.733468436Z 2026-04-24 08:45:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:45:56.733675176Z 2026-04-24 08:45:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:01.73371727Z 2026-04-24 08:46:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:06.733895675Z 2026-04-24 08:46:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:11.733821662Z 2026-04-24 08:46:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:16.733213452Z 2026-04-24 08:46:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:16.733750177Z 2026-04-24 08:46:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:21.734084801Z 2026-04-24 08:46:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:26.733219811Z 2026-04-24 08:46:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:31.73536223Z 2026-04-24 08:46:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:36.733298343Z 2026-04-24 08:46:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:41.733663411Z 2026-04-24 08:46:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:46.73341871Z 2026-04-24 08:46:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:46.734046607Z 2026-04-24 08:46:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:51.733315081Z 2026-04-24 08:46:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:46:56.733448747Z 2026-04-24 08:46:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:01.733733575Z 2026-04-24 08:47:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:06.734363221Z 2026-04-24 08:47:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:11.733620997Z 2026-04-24 08:47:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:11.78634513Z 2026-04-24 08:47:11 [error] Route /auth/register not found
2026-04-24T08:47:11.78635968Z Error: Route /auth/register not found
2026-04-24T08:47:11.78636222Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:47:11.78636495Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:47:11.78636795Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:47:11.786370561Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:47:11.786372701Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:47:11.786374851Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:47:11.786377021Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:47:11.786379161Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:47:11.786381241Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:47:11.786383441Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:47:11.786787202Z 2026-04-24 08:47:11 [info] {"method":"POST","path":"/auth/register","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:47:14.041124949Z 2026-04-24 08:47:14 [error] Route /auth/register not found
2026-04-24T08:47:14.041138039Z Error: Route /auth/register not found
2026-04-24T08:47:14.04114077Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:47:14.04114383Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:47:14.04115519Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:47:14.04115816Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:47:14.04116031Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:47:14.04116526Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:47:14.04116755Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:47:14.0411697Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:47:14.041171931Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:47:14.041174031Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:47:14.041176131Z 2026-04-24 08:47:14 [info] {"method":"POST","path":"/auth/register","status":404,"duration":"0ms","ip":"::1"}
2026-04-24T08:47:16.733291643Z 2026-04-24 08:47:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:16.73391819Z 2026-04-24 08:47:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:21.734437107Z 2026-04-24 08:47:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:26.734064158Z 2026-04-24 08:47:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:31.734241713Z 2026-04-24 08:47:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:36.734035715Z 2026-04-24 08:47:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:38.865853709Z 2026-04-24 08:47:38 [error] Route /auth/register not found
2026-04-24T08:47:38.86587369Z Error: Route /auth/register not found
2026-04-24T08:47:38.86588116Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:47:38.86588633Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:47:38.865942091Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:47:38.865948172Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:47:38.865952042Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:47:38.865955852Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:47:38.865959522Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:47:38.865963302Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:47:38.865967032Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:47:38.865970832Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:47:38.866589529Z 2026-04-24 08:47:38 [info] {"method":"POST","path":"/auth/register","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:47:41.733870006Z 2026-04-24 08:47:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:46.733339205Z 2026-04-24 08:47:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:46.734015554Z 2026-04-24 08:47:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:51.734298274Z 2026-04-24 08:47:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:47:55.585467011Z 2026-04-24 08:47:55 [error] Route /auth/register not found
2026-04-24T08:47:55.585485801Z Error: Route /auth/register not found
2026-04-24T08:47:55.585489411Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:47:55.585492891Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:47:55.585496501Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:47:55.585500021Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:47:55.585502961Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:47:55.585505821Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:47:55.585508822Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:47:55.585511672Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:47:55.585523402Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:47:55.585526082Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:47:55.585782589Z 2026-04-24 08:47:55 [info] {"method":"POST","path":"/auth/register","status":404,"duration":"0ms","ip":"::1"}
2026-04-24T08:47:56.733588245Z 2026-04-24 08:47:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:01.733240014Z 2026-04-24 08:48:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:06.734354731Z 2026-04-24 08:48:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:11.734398137Z 2026-04-24 08:48:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:16.734258987Z 2026-04-24 08:48:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:16.734971226Z 2026-04-24 08:48:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:21.733387105Z 2026-04-24 08:48:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:26.734844544Z 2026-04-24 08:48:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:31.733752562Z 2026-04-24 08:48:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:36.733352877Z 2026-04-24 08:48:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:41.742602903Z 2026-04-24 08:48:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:46.73431194Z 2026-04-24 08:48:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:46.735021469Z 2026-04-24 08:48:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:51.733715565Z 2026-04-24 08:48:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:56.733799086Z 2026-04-24 08:48:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:48:59.23860674Z 2026-04-24 08:48:59 [error] Route /auth/register not found
2026-04-24T08:48:59.238626021Z Error: Route /auth/register not found
2026-04-24T08:48:59.238630451Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:48:59.238638441Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:48:59.238643171Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:48:59.238648161Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:48:59.238652321Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:48:59.238656451Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:48:59.238660862Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:48:59.238664862Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:48:59.238679262Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:48:59.238682392Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:48:59.238685232Z 2026-04-24 08:48:59 [info] {"method":"POST","path":"/auth/register","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:49:01.733892385Z 2026-04-24 08:49:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:06.735107063Z 2026-04-24 08:49:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:11.703762296Z 2026-04-24 08:49:11 [error] Route /auth/login not found
2026-04-24T08:49:11.703784556Z Error: Route /auth/login not found
2026-04-24T08:49:11.703788966Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:49:11.703793526Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:49:11.703797717Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:49:11.703802717Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:49:11.703806367Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:49:11.703810037Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:49:11.703816637Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:49:11.703820337Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:49:11.703823847Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:49:11.703827407Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:49:11.704069544Z 2026-04-24 08:49:11 [info] {"method":"POST","path":"/auth/login","status":404,"duration":"0ms","ip":"::1"}
2026-04-24T08:49:11.733600906Z 2026-04-24 08:49:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:16.733997969Z 2026-04-24 08:49:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:16.734737489Z 2026-04-24 08:49:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:21.733801563Z 2026-04-24 08:49:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:26.734273025Z 2026-04-24 08:49:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:31.734010304Z 2026-04-24 08:49:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:36.733221818Z 2026-04-24 08:49:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:41.733638122Z 2026-04-24 08:49:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:46.734027584Z 2026-04-24 08:49:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:46.734662891Z 2026-04-24 08:49:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:51.733835898Z 2026-04-24 08:49:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:49:56.733789465Z 2026-04-24 08:49:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:01.734524141Z 2026-04-24 08:50:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:06.733677202Z 2026-04-24 08:50:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:11.733654464Z 2026-04-24 08:50:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:16.734102396Z 2026-04-24 08:50:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:16.734631101Z 2026-04-24 08:50:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:21.734102246Z 2026-04-24 08:50:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:26.73362302Z 2026-04-24 08:50:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:31.733969445Z 2026-04-24 08:50:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:35.586114275Z 2026-04-24 08:50:35 [error] Route /auth/login not found
2026-04-24T08:50:35.586137525Z Error: Route /auth/login not found
2026-04-24T08:50:35.586143196Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:50:35.586149046Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:50:35.586155336Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:50:35.586161396Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:50:35.586167046Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:50:35.586172346Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:50:35.586177917Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:50:35.586183527Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:50:35.586188597Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:50:35.586193707Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:50:35.586523916Z 2026-04-24 08:50:35 [info] {"method":"POST","path":"/auth/login","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:50:36.597460342Z 2026-04-24 08:50:36 [error] Route /auth/login not found
2026-04-24T08:50:36.597502823Z Error: Route /auth/login not found
2026-04-24T08:50:36.597508623Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:50:36.597513433Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:50:36.597517483Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:50:36.597521813Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:50:36.597529064Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:50:36.597532974Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:50:36.597566514Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:50:36.597572315Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:50:36.597574545Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:50:36.597576715Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:50:36.597900594Z 2026-04-24 08:50:36 [info] {"method":"POST","path":"/auth/login","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:50:36.733676781Z 2026-04-24 08:50:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:37.542717634Z 2026-04-24 08:50:37 [error] Route /auth/login not found
2026-04-24T08:50:37.542745934Z Error: Route /auth/login not found
2026-04-24T08:50:37.542749944Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:50:37.542753835Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:50:37.542757455Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:50:37.542761165Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:50:37.542764085Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:50:37.542766865Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:50:37.542769745Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:50:37.542772285Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:50:37.542773965Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:50:37.542775745Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:50:37.543105904Z 2026-04-24 08:50:37 [info] {"method":"POST","path":"/auth/login","status":404,"duration":"0ms","ip":"::1"}
2026-04-24T08:50:41.285472051Z 2026-04-24 08:50:41 [error] Route /auth/login not found
2026-04-24T08:50:41.285500012Z Error: Route /auth/login not found
2026-04-24T08:50:41.285510002Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:50:41.285516522Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:50:41.285522082Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:50:41.285528123Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:50:41.285533272Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:50:41.285568864Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:50:41.285578104Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:50:41.285583024Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:50:41.285587924Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:50:41.285593094Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:50:41.285912503Z 2026-04-24 08:50:41 [info] {"method":"POST","path":"/auth/login","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:50:41.73392307Z 2026-04-24 08:50:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:46.733455818Z 2026-04-24 08:50:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:46.734030463Z 2026-04-24 08:50:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:51.733822087Z 2026-04-24 08:50:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:50:56.733982718Z 2026-04-24 08:50:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:01.734177129Z 2026-04-24 08:51:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:06.733607007Z 2026-04-24 08:51:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:11.733239629Z 2026-04-24 08:51:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:16.735849871Z 2026-04-24 08:51:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:16.736770405Z 2026-04-24 08:51:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:21.7340253Z 2026-04-24 08:51:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:26.73343549Z 2026-04-24 08:51:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:31.73510487Z 2026-04-24 08:51:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:36.733995894Z 2026-04-24 08:51:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:41.734062837Z 2026-04-24 08:51:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:46.733392189Z 2026-04-24 08:51:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:46.733958444Z 2026-04-24 08:51:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:51.733594523Z 2026-04-24 08:51:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:51:56.733951349Z 2026-04-24 08:51:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:01.733674416Z 2026-04-24 08:52:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:06.733871625Z 2026-04-24 08:52:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:11.734689407Z 2026-04-24 08:52:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:16.734098001Z 2026-04-24 08:52:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:16.734838931Z 2026-04-24 08:52:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:21.733518134Z 2026-04-24 08:52:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:26.733246732Z 2026-04-24 08:52:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:31.734043149Z 2026-04-24 08:52:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:36.734173796Z 2026-04-24 08:52:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:41.733764046Z 2026-04-24 08:52:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:46.733282922Z 2026-04-24 08:52:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:46.73393683Z 2026-04-24 08:52:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:51.733741023Z 2026-04-24 08:52:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:56.734460579Z 2026-04-24 08:52:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:52:57.334483683Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:52:57.418897416Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:53:01.733830806Z 2026-04-24 08:53:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:53:06.733741617Z 2026-04-24 08:53:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:53:08.701148424Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:53:09.707348319Z 
2026-04-24T08:53:09.707381721Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:53:09.707388881Z > node dist/index.js
2026-04-24T08:53:09.707392241Z 
2026-04-24T08:53:11.733577714Z 2026-04-24 08:53:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:53:12.724484603Z 2026-04-24 08:53:12 [info] Firestore initialized successfully
2026-04-24T08:53:12.806331015Z 2026-04-24 08:53:12 [info] ✅ Server running on http://localhost:10000
2026-04-24T08:53:12.807046984Z 2026-04-24 08:53:12 [info] Environment: production
2026-04-24T08:53:12.807462047Z 2026-04-24 08:53:12 [info] API URL: http://localhost:5000
2026-04-24T08:53:12.807818826Z 2026-04-24 08:53:12 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-24T08:53:13.388374004Z 2026-04-24 08:53:13 [error] Route / not found
2026-04-24T08:53:13.388389845Z Error: Route / not found
2026-04-24T08:53:13.388393255Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:53:13.388395825Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:53:13.388399845Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:53:13.388402365Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:53:13.388404716Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:53:13.388406866Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:53:13.388409166Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:53:13.388411256Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:53:13.388413406Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:53:13.388415536Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:53:13.397995472Z 2026-04-24 08:53:13 [info] {"method":"HEAD","path":"/","status":404,"duration":"10ms","ip":"::1"}
2026-04-24T08:53:16.738418465Z 2026-04-24 08:53:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:53:16.738443196Z 2026-04-24 08:53:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:53:17.834736155Z 2026-04-24 08:53:17 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.60"}
2026-04-24T08:53:17.841259036Z 2026-04-24 08:53:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.60"}
2026-04-24T08:53:18.981813034Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:53:19.120162928Z 2026-04-24 08:53:19 [error] Route / not found
2026-04-24T08:53:19.120181389Z Error: Route / not found
2026-04-24T08:53:19.120185899Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:53:19.120189839Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:53:19.120193999Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:53:19.120196889Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:53:19.120199139Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:53:19.120201359Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:53:19.12020357Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:53:19.12020573Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:53:19.12020824Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:53:19.120269043Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:53:19.120912248Z 2026-04-24 08:53:19 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:53:19.251540071Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:53:19.253886405Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:53:19.257107596Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:53:19.259422678Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:53:19.261516136Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:53:19.263879341Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
```
