# Render Deploy Diagnostics

Run: 24879278645
Commit: 453b09f0e16d0ff8e3bff49469bef1837eb36c08
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7liaeugvqtc73f4sja0

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
  "updatedAt": "2026-04-24T08:11:32.171173Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7liaeugvqtc73f4sja0",
  "commit": {
    "id": "453b09f0e16d0ff8e3bff49469bef1837eb36c08",
    "message": "backend-probe: wait 45s for logs to ingest before fetch",
    "createdAt": "2026-04-24T08:09:06Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-24T08:09:32.064796Z",
  "updatedAt": "2026-04-24T08:11:32.169668Z",
  "startedAt": "2026-04-24T08:09:32.002986Z",
  "finishedAt": "2026-04-24T08:11:32.169475Z"
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
```
