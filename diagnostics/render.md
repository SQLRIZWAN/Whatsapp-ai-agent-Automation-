# Render Deploy Diagnostics

Run: 24879772535
Commit: bd7801a57a4002f9294825891d4d8cbc276cbbbf
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7ligbgg4nts73d0c0og

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
  "updatedAt": "2026-04-24T08:24:07.53878Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7ligbgg4nts73d0c0og",
  "commit": {
    "id": "bd7801a57a4002f9294825891d4d8cbc276cbbbf",
    "message": "backend probe run 24879603557",
    "createdAt": "2026-04-24T08:18:21Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-24T08:22:06.235917Z",
  "updatedAt": "2026-04-24T08:24:07.537312Z",
  "startedAt": "2026-04-24T08:22:06.188811Z",
  "finishedAt": "2026-04-24T08:24:07.53716Z"
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
```

## App logs (last 4h)
```
2026-04-24T08:01:32.505451647Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:01:32.636976528Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:01:45.048489308Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:01:46.253945398Z 
2026-04-24T08:01:46.25397862Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:01:46.25398602Z > node dist/index.js
2026-04-24T08:01:46.25398986Z 
2026-04-24T08:01:54.161274421Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:01:54.400511317Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:01:54.403084275Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:01:54.410039723Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:01:54.412044808Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:01:54.414249559Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:01:54.416167842Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:06:43.570226717Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:06:43.643505607Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:06:58.62985498Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:07:00.04265232Z 
2026-04-24T08:07:00.042689511Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:07:00.042698611Z > node dist/index.js
2026-04-24T08:07:00.042704011Z 
2026-04-24T08:07:04.986591745Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:07:05.097722728Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:07:05.100048831Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:07:05.102539087Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:07:05.105904594Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:07:05.107848118Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:07:05.109767252Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:11:10.837639221Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:11:10.924986003Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:11:26.404322152Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:11:27.516537605Z 
2026-04-24T08:11:27.516564606Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:11:27.516569346Z > node dist/index.js
2026-04-24T08:11:27.516571826Z 
2026-04-24T08:11:32.282582975Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:11:32.42495291Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:11:32.428259556Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:11:32.429933356Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:11:32.432695447Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:11:32.434828017Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:11:32.436739302Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:15:15.30683113Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:15:15.435322827Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:15:31.016428408Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:15:32.535234711Z 
2026-04-24T08:15:32.535263531Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:15:32.535268032Z > node dist/index.js
2026-04-24T08:15:32.535270302Z 
2026-04-24T08:15:35.213156904Z 2026-04-24 08:15:35 [error] Failed to initialize Firestore (continuing without persistence): Failed to parse private key: Error: Unparsed DER bytes remain after ASN.1 parsing.
2026-04-24T08:15:35.213178355Z Error: Failed to parse private key: Error: Unparsed DER bytes remain after ASN.1 parsing.
2026-04-24T08:15:35.213181975Z     at new ServiceAccount (/opt/render/project/src/backend/node_modules/firebase-admin/lib/app/credential-internal.js:153:19)
2026-04-24T08:15:35.213184655Z     at new ServiceAccountCredential (/opt/render/project/src/backend/node_modules/firebase-admin/lib/app/credential-internal.js:70:15)
2026-04-24T08:15:35.213186975Z     at Object.cert (/opt/render/project/src/backend/node_modules/firebase-admin/lib/app/credential-factory.js:103:54)
2026-04-24T08:15:35.213190085Z     at initializeFirestore (/opt/render/project/src/backend/dist/modules/database/firestore.js:27:69)
2026-04-24T08:15:35.213193195Z     at startServer (/opt/render/project/src/backend/dist/server.js:16:51)
2026-04-24T08:15:35.213195385Z     at main (/opt/render/project/src/backend/dist/index.js:13:40)
2026-04-24T08:15:35.213197585Z     at Object.<anonymous> (/opt/render/project/src/backend/dist/index.js:20:1)
2026-04-24T08:15:35.213199815Z     at Module._compile (node:internal/modules/cjs/loader:1812:14)
2026-04-24T08:15:35.213202765Z     at Object..js (node:internal/modules/cjs/loader:1943:10)
2026-04-24T08:15:35.213204955Z     at Module.load (node:internal/modules/cjs/loader:1533:32)
2026-04-24T08:15:35.219622278Z 2026-04-24 08:15:35 [info] ✅ Server running on http://localhost:10000
2026-04-24T08:15:35.219851113Z 2026-04-24 08:15:35 [info] Environment: production
2026-04-24T08:15:35.220106819Z 2026-04-24 08:15:35 [info] API URL: http://localhost:5000
2026-04-24T08:15:35.220436967Z 2026-04-24 08:15:35 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-24T08:15:35.585514898Z 2026-04-24 08:15:35 [error] Route / not found
2026-04-24T08:15:35.585538699Z Error: Route / not found
2026-04-24T08:15:35.585543699Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:15:35.585548269Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:15:35.585553209Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:15:35.585558349Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:15:35.585562199Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:15:35.585565919Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:15:35.585569789Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:15:35.585573999Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:15:35.585577659Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:15:35.58558148Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:15:35.589933503Z 2026-04-24 08:15:35 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-24T08:15:39.384281482Z 2026-04-24 08:15:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:39.386008894Z 2026-04-24 08:15:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:40.259096429Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:15:40.36813786Z 2026-04-24 08:15:40 [error] Route / not found
2026-04-24T08:15:40.368160481Z Error: Route / not found
2026-04-24T08:15:40.368164751Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:15:40.368168281Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:15:40.368171361Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:15:40.368174751Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:15:40.368177211Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:15:40.368180001Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:15:40.368182641Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:15:40.368185431Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:15:40.368188111Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:15:40.368190771Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:15:40.36894786Z 2026-04-24 08:15:40 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:15:40.372982763Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:15:40.375468116Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:15:40.377719084Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:15:40.382003614Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:15:40.385388156Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:15:40.387507125Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:15:44.383729485Z 2026-04-24 08:15:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:49.383076875Z 2026-04-24 08:15:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:49.383990696Z 2026-04-24 08:15:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:54.384813081Z 2026-04-24 08:15:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:59.383809704Z 2026-04-24 08:15:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:04.384821933Z 2026-04-24 08:16:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:09.383538889Z 2026-04-24 08:16:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:14.382881399Z 2026-04-24 08:16:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:19.382717311Z 2026-04-24 08:16:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:19.38350772Z 2026-04-24 08:16:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:24.382551804Z 2026-04-24 08:16:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:29.383513403Z 2026-04-24 08:16:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:34.382742722Z 2026-04-24 08:16:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:39.383020205Z 2026-04-24 08:16:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:44.382464149Z 2026-04-24 08:16:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:49.382904316Z 2026-04-24 08:16:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:49.383774557Z 2026-04-24 08:16:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:54.382796891Z 2026-04-24 08:16:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:59.383538856Z 2026-04-24 08:16:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:04.382859267Z 2026-04-24 08:17:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:09.383297845Z 2026-04-24 08:17:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:14.382407711Z 2026-04-24 08:17:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:19.386493137Z 2026-04-24 08:17:19 [info] {"method":"GET","path":"/health","status":200,"duration":"5ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:19.387560342Z 2026-04-24 08:17:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:24.383754619Z 2026-04-24 08:17:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:29.38261092Z 2026-04-24 08:17:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:34.382888795Z 2026-04-24 08:17:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:35.130325258Z 2026-04-24 08:17:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-24T08:17:35.317898603Z 2026-04-24 08:17:35 [error] Registration error: Firestore not initialized. Call initializeFirestore first.
2026-04-24T08:17:35.317919454Z Error: Firestore not initialized. Call initializeFirestore first.
2026-04-24T08:17:35.317924764Z     at getFirestore (/opt/render/project/src/backend/dist/modules/database/firestore.js:48:15)
2026-04-24T08:17:35.317929614Z     at UserRepository.getUserByEmail (/opt/render/project/src/backend/dist/modules/database/repositories/userRepository.js:26:49)
2026-04-24T08:17:35.317933754Z     at AuthService.register (/opt/render/project/src/backend/dist/modules/auth/services/authService.js:24:65)
2026-04-24T08:17:35.317937764Z     at /opt/render/project/src/backend/dist/modules/auth/controllers/authController.js:12:48
2026-04-24T08:17:35.317941964Z     at /opt/render/project/src/backend/dist/shared/utils/errorHandler.js:43:25
2026-04-24T08:17:35.317946284Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:17:35.317950514Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/route.js:149:13)
2026-04-24T08:17:35.317954344Z     at Route.dispatch (/opt/render/project/src/backend/node_modules/express/lib/router/route.js:119:3)
2026-04-24T08:17:35.317958135Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:17:35.317961875Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:284:15
2026-04-24T08:17:35.3181961Z 2026-04-24 08:17:35 [error] Registration failed
2026-04-24T08:17:35.318210741Z Error: Registration failed
2026-04-24T08:17:35.318215521Z     at AuthService.register (/opt/render/project/src/backend/dist/modules/auth/services/authService.js:59:19)
2026-04-24T08:17:35.318229551Z     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
2026-04-24T08:17:35.318231961Z     at async /opt/render/project/src/backend/dist/modules/auth/controllers/authController.js:12:20
2026-04-24T08:17:35.318882686Z 2026-04-24 08:17:35 [info] {"method":"POST","path":"/api/auth/register","status":500,"duration":"1ms","ip":"::1"}
2026-04-24T08:17:39.383355715Z 2026-04-24 08:17:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:44.383067876Z 2026-04-24 08:17:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:49.382766547Z 2026-04-24 08:17:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:49.383600377Z 2026-04-24 08:17:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:54.383290289Z 2026-04-24 08:17:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:59.383170974Z 2026-04-24 08:17:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:04.382356655Z 2026-04-24 08:18:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:09.383494281Z 2026-04-24 08:18:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:14.383247975Z 2026-04-24 08:18:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:19.383414098Z 2026-04-24 08:18:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:19.384830792Z 2026-04-24 08:18:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:24.382398164Z 2026-04-24 08:18:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:29.382208339Z 2026-04-24 08:18:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:34.382894135Z 2026-04-24 08:18:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:39.383226572Z 2026-04-24 08:18:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:44.382227579Z 2026-04-24 08:18:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:49.382801783Z 2026-04-24 08:18:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:49.383479429Z 2026-04-24 08:18:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:54.382390764Z 2026-04-24 08:18:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:59.38307977Z 2026-04-24 08:18:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:04.383265515Z 2026-04-24 08:19:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:09.383325187Z 2026-04-24 08:19:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:14.382397076Z 2026-04-24 08:19:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:19.382717084Z 2026-04-24 08:19:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:19.38337604Z 2026-04-24 08:19:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:24.382684324Z 2026-04-24 08:19:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:29.382371309Z 2026-04-24 08:19:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:34.38238493Z 2026-04-24 08:19:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:39.383239532Z 2026-04-24 08:19:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:44.3822453Z 2026-04-24 08:19:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:49.382501837Z 2026-04-24 08:19:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:49.383158273Z 2026-04-24 08:19:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:54.382750385Z 2026-04-24 08:19:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:59.384682323Z 2026-04-24 08:19:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:04.382832871Z 2026-04-24 08:20:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:09.382464784Z 2026-04-24 08:20:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:14.3833909Z 2026-04-24 08:20:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:19.383247709Z 2026-04-24 08:20:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:19.383992027Z 2026-04-24 08:20:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:24.383388704Z 2026-04-24 08:20:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:29.382549387Z 2026-04-24 08:20:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:34.382628932Z 2026-04-24 08:20:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:39.382988013Z 2026-04-24 08:20:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:40.340750837Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-24T08:20:40.423233225Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-24T08:20:44.382605657Z 2026-04-24 08:20:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:49.383150673Z 2026-04-24 08:20:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:49.38386648Z 2026-04-24 08:20:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:54.383149597Z 2026-04-24 08:20:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:59.382442123Z 2026-04-24 08:20:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:04.383155554Z 2026-04-24 08:21:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:09.383337752Z 2026-04-24 08:21:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:14.382725691Z 2026-04-24 08:21:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:19.383153385Z 2026-04-24 08:21:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:19.383914543Z 2026-04-24 08:21:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:24.382461822Z 2026-04-24 08:21:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:29.38260434Z 2026-04-24 08:21:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:34.382560633Z 2026-04-24 08:21:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:39.383165157Z 2026-04-24 08:21:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:44.382247299Z 2026-04-24 08:21:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:49.383753728Z 2026-04-24 08:21:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:49.384647309Z 2026-04-24 08:21:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:54.38242207Z 2026-04-24 08:21:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:59.382393834Z 2026-04-24 08:21:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:04.38373264Z 2026-04-24 08:22:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:09.383053508Z 2026-04-24 08:22:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:14.382694794Z 2026-04-24 08:22:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:19.382264239Z 2026-04-24 08:22:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:19.382894654Z 2026-04-24 08:22:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:24.382890449Z 2026-04-24 08:22:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:29.383283784Z 2026-04-24 08:22:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:34.388871692Z 2026-04-24 08:22:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:39.382289782Z 2026-04-24 08:22:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:44.382860202Z 2026-04-24 08:22:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:49.382434938Z 2026-04-24 08:22:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:49.383235987Z 2026-04-24 08:22:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:54.384167555Z 2026-04-24 08:22:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:59.382235786Z 2026-04-24 08:22:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:04.386858993Z 2026-04-24 08:23:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:09.383173523Z 2026-04-24 08:23:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:14.382593566Z 2026-04-24 08:23:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:19.382623805Z 2026-04-24 08:23:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:19.383931456Z 2026-04-24 08:23:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:24.383173856Z 2026-04-24 08:23:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:29.383303167Z 2026-04-24 08:23:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:34.382261981Z 2026-04-24 08:23:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:39.382427083Z 2026-04-24 08:23:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:44.383134508Z 2026-04-24 08:23:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:46.31348493Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:23:46.399489058Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:23:49.382559344Z 2026-04-24 08:23:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:49.3832547Z 2026-04-24 08:23:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:54.382569713Z 2026-04-24 08:23:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:58.590622244Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:23:59.383007913Z 2026-04-24 08:23:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:59.704697591Z 
2026-04-24T08:23:59.704719142Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:23:59.704724082Z > node dist/index.js
2026-04-24T08:23:59.704726412Z 
2026-04-24T08:24:02.694375457Z 2026-04-24 08:24:02 [info] Firestore initialized successfully
2026-04-24T08:24:02.699394602Z 2026-04-24 08:24:02 [info] ✅ Server running on http://localhost:10000
2026-04-24T08:24:02.699505965Z 2026-04-24 08:24:02 [info] Environment: production
2026-04-24T08:24:02.699739812Z 2026-04-24 08:24:02 [info] API URL: http://localhost:5000
2026-04-24T08:24:02.699938687Z 2026-04-24 08:24:02 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-24T08:24:02.795054191Z 2026-04-24 08:24:02 [error] Route / not found
2026-04-24T08:24:02.795070302Z Error: Route / not found
2026-04-24T08:24:02.795073732Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:24:02.795077932Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:24:02.795082752Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:24:02.795086282Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:24:02.795088752Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:24:02.795091412Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:24:02.795094072Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:24:02.795097183Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:24:02.795100513Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:24:02.795102263Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:24:02.798885295Z 2026-04-24 08:24:02 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-24T08:24:04.382800778Z 2026-04-24 08:24:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:06.735881052Z 2026-04-24 08:24:06 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:06.738247345Z 2026-04-24 08:24:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:07.717468596Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:24:07.834563255Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:24:07.836366366Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:24:07.83832595Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:24:07.840175902Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:24:07.84186264Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:24:07.844209323Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:24:07.935392382Z 2026-04-24 08:24:07 [error] Route / not found
2026-04-24T08:24:07.935409592Z Error: Route / not found
2026-04-24T08:24:07.935415033Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:24:07.935421273Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:24:07.935426953Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:24:07.935430773Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:24:07.935434313Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:24:07.935438363Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:24:07.935442023Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:24:07.935445783Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:24:07.935449234Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:24:07.935466154Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:24:07.936127032Z 2026-04-24 08:24:07 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:24:09.383181897Z 2026-04-24 08:24:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
```
