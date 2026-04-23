# Render Deploy Diagnostics

Run: 24852957445
Commit: e0b32d961d46e6d6f32b7ef89987531d2a3b3db1
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7l6kt3eo5us73dd32dg

## Service details
```json
{
  "autoDeploy": "no",
  "autoDeployTrigger": "off",
  "branch": "claude/production-deployment-setup-pnyZn",
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
      "buildCommand": "npm install && npm run build",
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
  "updatedAt": "2026-04-23T18:51:03.08269Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7l6kt3eo5us73dd32dg",
  "commit": {
    "id": "788541bd6e891856e1843b4e751fec7cce268e94",
    "message": "urls: run 24852952426",
    "createdAt": "2026-04-23T18:52:22Z"
  },
  "status": "build_failed",
  "trigger": "api",
  "createdAt": "2026-04-23T18:52:36.937281Z",
  "updatedAt": "2026-04-23T18:53:25.026654Z",
  "startedAt": "2026-04-23T18:52:36.930314Z",
  "finishedAt": "2026-04-23T18:53:25.024946Z"
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
```

## App logs (last 4h)
```
```
