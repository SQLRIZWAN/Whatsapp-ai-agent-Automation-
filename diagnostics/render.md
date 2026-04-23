# Render Deploy Diagnostics

Run: 24853642773
Commit: d87736b7922fcf66223aa221d3fb38c7de2e090c
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7l6ravlk1mc73b0ane0

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
  "updatedAt": "2026-04-23T19:08:39.026611Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7l6ravlk1mc73b0ane0",
  "commit": {
    "id": "d87736b7922fcf66223aa221d3fb38c7de2e090c",
    "message": "vercel.json: drop invalid @vite_api_url secret ref (env is set via project settings)",
    "createdAt": "2026-04-23T19:06:02Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-23T19:06:19.516935Z",
  "updatedAt": "2026-04-23T19:08:39.024661Z",
  "startedAt": "2026-04-23T19:06:19.441416Z",
  "finishedAt": "2026-04-23T19:08:39.024368Z"
}
```

## Build logs (last 4h)
```
2026-04-23T18:48:32.775261932Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-23T18:48:33.45829658Z [34m[1m==>(B[m [1mChecking out commit 76f763ca91f376c6a4eddcbc81ff15026ae39771 in branch claude/production-deployment-setup-pnyZn(B[m
2026-04-23T18:48:34.836002326Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-23T18:48:34.859898684Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-23T18:48:36.750997539Z [34m[1m==>(B[m [1mRunning build command 'cd backend && npm install && npm run build'...(B[m
2026-04-23T18:49:06.042392791Z 
2026-04-23T18:49:06.042426733Z > whatsapp-ai-agent-backend@1.0.0 postinstall
2026-04-23T18:49:06.042435694Z > npm run build || true
2026-04-23T18:49:06.042439934Z 
2026-04-23T18:49:06.182081707Z 
2026-04-23T18:49:06.182107819Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:49:06.182112499Z > tsc && tsc-alias
2026-04-23T18:49:06.182115889Z 
2026-04-23T18:49:07.595228595Z tsconfig.json(16,25): error TS5107: Option 'moduleResolution=node10' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:49:07.595272959Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:49:07.595378897Z tsconfig.json(21,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:49:07.595400859Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:49:07.648130655Z 
2026-04-23T18:49:07.648159808Z added 336 packages, and audited 337 packages in 31s
2026-04-23T18:49:07.648172699Z 
2026-04-23T18:49:07.648362843Z 48 packages are looking for funding
2026-04-23T18:49:07.648417987Z   run `npm fund` for details
2026-04-23T18:49:07.656464899Z 
2026-04-23T18:49:07.656481971Z 12 vulnerabilities (2 low, 8 moderate, 2 critical)
2026-04-23T18:49:07.656486571Z 
2026-04-23T18:49:07.656490891Z To address issues that do not require attention, run:
2026-04-23T18:49:07.656495152Z   npm audit fix
2026-04-23T18:49:07.656498962Z 
2026-04-23T18:49:07.656503172Z To address all issues (including breaking changes), run:
2026-04-23T18:49:07.656507693Z   npm audit fix --force
2026-04-23T18:49:07.656511353Z 
2026-04-23T18:49:07.656516573Z Run `npm audit` for details.
2026-04-23T18:49:07.844553208Z 
2026-04-23T18:49:07.84457556Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:49:07.84458072Z > tsc && tsc-alias
2026-04-23T18:49:07.844584951Z 
2026-04-23T18:49:09.537756251Z tsconfig.json(16,25): error TS5107: Option 'moduleResolution=node10' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:49:09.537778942Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:49:09.53788489Z tsconfig.json(21,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:49:09.537891841Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:49:09.608035791Z [31m[1m==> Build failed 😞(B[m
2026-04-23T18:49:09.608053222Z [34m[1m==>(B[m [1mCommon ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys(B[m
2026-04-23T18:49:20.658047289Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-23T18:49:21.437793821Z [34m[1m==>(B[m [1mChecking out commit 76f763ca91f376c6a4eddcbc81ff15026ae39771 in branch claude/production-deployment-setup-pnyZn(B[m
2026-04-23T18:49:22.634928013Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-23T18:49:22.65970392Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-23T18:49:24.647989715Z [34m[1m==>(B[m [1mRunning build command 'npm install && npm run build'...(B[m
2026-04-23T18:49:54.100764752Z 
2026-04-23T18:49:54.100789743Z > whatsapp-ai-agent-backend@1.0.0 postinstall
2026-04-23T18:49:54.100795504Z > npm run build || true
2026-04-23T18:49:54.100799464Z 
2026-04-23T18:49:54.214609652Z 
2026-04-23T18:49:54.214629104Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:49:54.214633564Z > tsc && tsc-alias
2026-04-23T18:49:54.214636734Z 
2026-04-23T18:49:55.62465181Z tsconfig.json(16,25): error TS5107: Option 'moduleResolution=node10' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:49:55.624673371Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:49:55.624774777Z tsconfig.json(21,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:49:55.624782848Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:49:55.677617441Z 
2026-04-23T18:49:55.677642642Z added 336 packages, and audited 337 packages in 31s
2026-04-23T18:49:55.677654113Z 
2026-04-23T18:49:55.67777772Z 48 packages are looking for funding
2026-04-23T18:49:55.677846214Z   run `npm fund` for details
2026-04-23T18:49:55.686272263Z 
2026-04-23T18:49:55.686287724Z 12 vulnerabilities (2 low, 8 moderate, 2 critical)
2026-04-23T18:49:55.686291294Z 
2026-04-23T18:49:55.686294814Z To address issues that do not require attention, run:
2026-04-23T18:49:55.686298084Z   npm audit fix
2026-04-23T18:49:55.686301095Z 
2026-04-23T18:49:55.686304325Z To address all issues (including breaking changes), run:
2026-04-23T18:49:55.686307945Z   npm audit fix --force
2026-04-23T18:49:55.686311005Z 
2026-04-23T18:49:55.686314916Z Run `npm audit` for details.
2026-04-23T18:49:55.869648406Z 
2026-04-23T18:49:55.869666397Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:49:55.869671977Z > tsc && tsc-alias
2026-04-23T18:49:55.869676547Z 
2026-04-23T18:49:57.245231275Z tsconfig.json(16,25): error TS5107: Option 'moduleResolution=node10' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:49:57.245253006Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:49:57.245374843Z tsconfig.json(21,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:49:57.245382383Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:49:57.315235474Z [31m[1m==> Build failed 😞(B[m
2026-04-23T18:49:57.315253215Z [34m[1m==>(B[m [1mCommon ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys(B[m
2026-04-23T18:51:09.488132577Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-23T18:51:10.847025064Z [34m[1m==>(B[m [1mChecking out commit e0b32d961d46e6d6f32b7ef89987531d2a3b3db1 in branch claude/production-deployment-setup-pnyZn(B[m
2026-04-23T18:51:12.499556949Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-23T18:51:12.523860185Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-23T18:51:14.505703436Z [34m[1m==>(B[m [1mRunning build command 'npm install && npm run build'...(B[m
2026-04-23T18:51:47.183430064Z 
2026-04-23T18:51:47.183451705Z > whatsapp-ai-agent-backend@1.0.0 postinstall
2026-04-23T18:51:47.183458485Z > npm run build || true
2026-04-23T18:51:47.183462645Z 
2026-04-23T18:51:47.301369057Z 
2026-04-23T18:51:47.301394388Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:51:47.301403568Z > tsc && tsc-alias
2026-04-23T18:51:47.301407658Z 
2026-04-23T18:51:48.850547717Z tsconfig.json(16,25): error TS5107: Option 'moduleResolution=node10' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:51:48.850572888Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:51:48.850672631Z tsconfig.json(21,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:51:48.850685611Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:51:48.907871177Z 
2026-04-23T18:51:48.907892318Z added 336 packages, and audited 337 packages in 34s
2026-04-23T18:51:48.907903728Z 
2026-04-23T18:51:48.908067323Z 48 packages are looking for funding
2026-04-23T18:51:48.908157265Z   run `npm fund` for details
2026-04-23T18:51:48.916609944Z 
2026-04-23T18:51:48.916627155Z 12 vulnerabilities (2 low, 8 moderate, 2 critical)
2026-04-23T18:51:48.916632505Z 
2026-04-23T18:51:48.916637365Z To address issues that do not require attention, run:
2026-04-23T18:51:48.916641955Z   npm audit fix
2026-04-23T18:51:48.916646835Z 
2026-04-23T18:51:48.916651805Z To address all issues (including breaking changes), run:
2026-04-23T18:51:48.916657265Z   npm audit fix --force
2026-04-23T18:51:48.916661865Z 
2026-04-23T18:51:48.916667576Z Run `npm audit` for details.
2026-04-23T18:51:49.177297831Z 
2026-04-23T18:51:49.177323252Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:51:49.177328602Z > tsc && tsc-alias
2026-04-23T18:51:49.177332592Z 
2026-04-23T18:51:50.568107696Z tsconfig.json(16,25): error TS5107: Option 'moduleResolution=node10' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:51:50.568130996Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:51:50.56825463Z tsconfig.json(21,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:51:50.568296161Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:51:50.639525564Z [31m[1m==> Build failed 😞(B[m
2026-04-23T18:51:50.639548845Z [34m[1m==>(B[m [1mCommon ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys(B[m
2026-04-23T18:52:40.581277937Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-23T18:52:41.386009249Z [34m[1m==>(B[m [1mChecking out commit 788541bd6e891856e1843b4e751fec7cce268e94 in branch claude/production-deployment-setup-pnyZn(B[m
2026-04-23T18:52:46.671036967Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-23T18:52:46.697582127Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-23T18:52:49.333091229Z [34m[1m==>(B[m [1mRunning build command 'npm install && npm run build'...(B[m
2026-04-23T18:53:19.265646092Z 
2026-04-23T18:53:19.265677243Z > whatsapp-ai-agent-backend@1.0.0 postinstall
2026-04-23T18:53:19.265684723Z > npm run build || true
2026-04-23T18:53:19.265688923Z 
2026-04-23T18:53:19.379011482Z 
2026-04-23T18:53:19.379036693Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:53:19.379042413Z > tsc && tsc-alias
2026-04-23T18:53:19.379046323Z 
2026-04-23T18:53:20.885636452Z tsconfig.json(16,25): error TS5107: Option 'moduleResolution=node10' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:53:20.885662053Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:53:20.885808595Z tsconfig.json(21,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:53:20.885817556Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:53:20.943422824Z 
2026-04-23T18:53:20.943447335Z added 336 packages, and audited 337 packages in 31s
2026-04-23T18:53:20.943458145Z 
2026-04-23T18:53:20.943642418Z 48 packages are looking for funding
2026-04-23T18:53:20.94372238Z   run `npm fund` for details
2026-04-23T18:53:20.951772127Z 
2026-04-23T18:53:20.951803158Z 12 vulnerabilities (2 low, 8 moderate, 2 critical)
2026-04-23T18:53:20.951809648Z 
2026-04-23T18:53:20.951813778Z To address issues that do not require attention, run:
2026-04-23T18:53:20.951817759Z   npm audit fix
2026-04-23T18:53:20.951821499Z 
2026-04-23T18:53:20.951825369Z To address all issues (including breaking changes), run:
2026-04-23T18:53:20.951829789Z   npm audit fix --force
2026-04-23T18:53:20.951833439Z 
2026-04-23T18:53:20.951838119Z Run `npm audit` for details.
2026-04-23T18:53:21.13109787Z 
2026-04-23T18:53:21.13112354Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:53:21.131129111Z > tsc && tsc-alias
2026-04-23T18:53:21.131132991Z 
2026-04-23T18:53:22.567179058Z tsconfig.json(16,25): error TS5107: Option 'moduleResolution=node10' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:53:22.567199838Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:53:22.567342791Z tsconfig.json(21,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0. Specify compilerOption '"ignoreDeprecations": "6.0"' to silence this error.
2026-04-23T18:53:22.567385132Z   Visit https://aka.ms/ts6 for migration information.
2026-04-23T18:53:22.642296719Z [31m[1m==> Build failed 😞(B[m
2026-04-23T18:53:22.64231555Z [34m[1m==>(B[m [1mCommon ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys(B[m
2026-04-23T18:54:51.996414566Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-23T18:54:52.91220151Z [34m[1m==>(B[m [1mChecking out commit 4a0bcefbb6f7e4109cd49f9567fde37e4d1d6123 in branch main(B[m
2026-04-23T18:54:54.048326882Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-23T18:54:54.07268206Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-23T18:54:56.00938815Z [34m[1m==>(B[m [1mRunning build command 'npm install && npm run build'...(B[m
2026-04-23T18:55:26.0583979Z 
2026-04-23T18:55:26.058427321Z added 336 packages, and audited 337 packages in 30s
2026-04-23T18:55:26.058439231Z 
2026-04-23T18:55:26.058562845Z 48 packages are looking for funding
2026-04-23T18:55:26.058653508Z   run `npm fund` for details
2026-04-23T18:55:26.069503853Z 
2026-04-23T18:55:26.069514183Z 12 vulnerabilities (2 low, 8 moderate, 2 critical)
2026-04-23T18:55:26.069518414Z 
2026-04-23T18:55:26.069522554Z To address issues that do not require attention, run:
2026-04-23T18:55:26.069526564Z   npm audit fix
2026-04-23T18:55:26.069530404Z 
2026-04-23T18:55:26.069535194Z To address all issues (including breaking changes), run:
2026-04-23T18:55:26.069539834Z   npm audit fix --force
2026-04-23T18:55:26.069543724Z 
2026-04-23T18:55:26.069548294Z Run `npm audit` for details.
2026-04-23T18:55:26.241288641Z 
2026-04-23T18:55:26.241311772Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:55:26.241317302Z > tsc && tsc-alias
2026-04-23T18:55:26.241321262Z 
2026-04-23T18:55:27.802595401Z sh: 1: tsc-alias: not found
2026-04-23T18:55:27.840784117Z [31m[1m==> Build failed 😞(B[m
2026-04-23T18:55:27.840803017Z [34m[1m==>(B[m [1mCommon ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys(B[m
2026-04-23T18:57:19.630340627Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-23T18:57:20.372437783Z [34m[1m==>(B[m [1mChecking out commit 0f6363311bfd22b5ed04d5f0d026d71155b3b823 in branch main(B[m
2026-04-23T18:57:21.577057064Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-23T18:57:21.601059314Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-23T18:57:23.531075489Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-23T18:58:44.04282706Z 
2026-04-23T18:58:44.042855101Z added 564 packages, and audited 565 packages in 1m
2026-04-23T18:58:44.042866121Z 
2026-04-23T18:58:44.042925703Z 110 packages are looking for funding
2026-04-23T18:58:44.042977164Z   run `npm fund` for details
2026-04-23T18:58:44.195258634Z 
2026-04-23T18:58:44.195305095Z 22 vulnerabilities (2 low, 12 moderate, 6 high, 2 critical)
2026-04-23T18:58:44.195314185Z 
2026-04-23T18:58:44.195320775Z To address issues that do not require attention, run:
2026-04-23T18:58:44.195325836Z   npm audit fix
2026-04-23T18:58:44.195329646Z 
2026-04-23T18:58:44.195333786Z To address all issues (including breaking changes), run:
2026-04-23T18:58:44.195338216Z   npm audit fix --force
2026-04-23T18:58:44.195341986Z 
2026-04-23T18:58:44.195346426Z Run `npm audit` for details.
2026-04-23T18:58:44.405261797Z 
2026-04-23T18:58:44.405297898Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T18:58:44.405303298Z > tsc && tsc-alias
2026-04-23T18:58:44.405307888Z 
2026-04-23T18:58:45.963967579Z tsconfig.json(3,27): error TS5103: Invalid value for '--ignoreDeprecations'.
2026-04-23T18:58:46.041028269Z [31m[1m==> Build failed 😞(B[m
2026-04-23T18:58:46.04104704Z [34m[1m==>(B[m [1mCommon ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys(B[m
2026-04-23T19:01:08.039656826Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-23T19:01:08.822418473Z [34m[1m==>(B[m [1mChecking out commit 6f70e156651e0c4e8b181d2daf1797aa0607f3ac in branch main(B[m
2026-04-23T19:01:10.07954755Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-23T19:01:10.103558678Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-23T19:01:12.080954753Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-23T19:02:34.446058042Z 
2026-04-23T19:02:34.446086842Z added 564 packages, and audited 565 packages in 1m
2026-04-23T19:02:34.446103783Z 
2026-04-23T19:02:34.446202346Z 110 packages are looking for funding
2026-04-23T19:02:34.446284008Z   run `npm fund` for details
2026-04-23T19:02:34.595731158Z 
2026-04-23T19:02:34.595765159Z 22 vulnerabilities (2 low, 12 moderate, 6 high, 2 critical)
2026-04-23T19:02:34.595769669Z 
2026-04-23T19:02:34.59577388Z To address issues that do not require attention, run:
2026-04-23T19:02:34.595778029Z   npm audit fix
2026-04-23T19:02:34.59578186Z 
2026-04-23T19:02:34.59578589Z To address all issues (including breaking changes), run:
2026-04-23T19:02:34.5957903Z   npm audit fix --force
2026-04-23T19:02:34.59579405Z 
2026-04-23T19:02:34.59579856Z Run `npm audit` for details.
2026-04-23T19:02:34.807864193Z 
2026-04-23T19:02:34.807890844Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T19:02:34.807896214Z > tsc && tsc-alias
2026-04-23T19:02:34.807900294Z 
2026-04-23T19:02:37.302654764Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-23T19:02:42.311825155Z [34;1m==>[0;22m [1mUploaded in 2.6s. Compression took 2.4s[22m
2026-04-23T19:02:42.34600769Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-23T19:06:22.400768307Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-23T19:06:28.26351912Z [34m[1m==>(B[m [1mChecking out commit d87736b7922fcf66223aa221d3fb38c7de2e090c in branch main(B[m
2026-04-23T19:06:35.437169996Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-23T19:06:35.461203205Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-23T19:06:37.398389784Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-23T19:08:01.098972904Z 
2026-04-23T19:08:01.099006445Z added 564 packages, and audited 565 packages in 1m
2026-04-23T19:08:01.099020525Z 
2026-04-23T19:08:01.099110647Z 110 packages are looking for funding
2026-04-23T19:08:01.099162698Z   run `npm fund` for details
2026-04-23T19:08:01.263184756Z 
2026-04-23T19:08:01.263214947Z 22 vulnerabilities (2 low, 12 moderate, 6 high, 2 critical)
2026-04-23T19:08:01.263220007Z 
2026-04-23T19:08:01.263224237Z To address issues that do not require attention, run:
2026-04-23T19:08:01.263228197Z   npm audit fix
2026-04-23T19:08:01.263232097Z 
2026-04-23T19:08:01.263235988Z To address all issues (including breaking changes), run:
2026-04-23T19:08:01.263240388Z   npm audit fix --force
2026-04-23T19:08:01.263245748Z 
2026-04-23T19:08:01.263252528Z Run `npm audit` for details.
2026-04-23T19:08:01.467873471Z 
2026-04-23T19:08:01.467895232Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-23T19:08:01.467900542Z > tsc && tsc-alias
2026-04-23T19:08:01.467904652Z 
2026-04-23T19:08:05.652653662Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-23T19:08:11.499079809Z [34;1m==>[0;22m [1mUploaded in 3.2s. Compression took 2.6s[22m
2026-04-23T19:08:11.522395422Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-23T19:02:45.157735752Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-23T19:02:45.234013025Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-23T19:02:58.666738464Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-23T19:02:59.863188856Z 
2026-04-23T19:02:59.863221047Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-23T19:02:59.863226067Z > node dist/index.js
2026-04-23T19:02:59.863228237Z 
2026-04-23T19:03:06.771673699Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-23T19:03:06.862491854Z [0;32m[1m==> [0m[1m[0m
2026-04-23T19:03:06.864713334Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-23T19:03:06.866572656Z [0;32m[1m==> [0m[1m[0m
2026-04-23T19:03:06.868551771Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-23T19:03:06.870589347Z [0;32m[1m==> [0m[1m[0m
2026-04-23T19:03:06.872667594Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-23T19:08:11.200232126Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-23T19:08:11.293485829Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-23T19:08:17.489559751Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-23T19:08:17.568151819Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-23T19:08:30.356079381Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-23T19:08:31.654459569Z 
2026-04-23T19:08:31.6544888Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-23T19:08:31.65449506Z > node dist/index.js
2026-04-23T19:08:31.65449801Z 
2026-04-23T19:08:39.184063257Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-23T19:08:39.543067517Z [0;32m[1m==> [0m[1m[0m
2026-04-23T19:08:39.545548243Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-23T19:08:39.547959088Z [0;32m[1m==> [0m[1m[0m
2026-04-23T19:08:39.550470965Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-23T19:08:39.552769037Z [0;32m[1m==> [0m[1m[0m
2026-04-23T19:08:39.555011357Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
```
