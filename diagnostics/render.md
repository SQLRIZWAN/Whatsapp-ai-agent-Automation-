# Render Deploy Diagnostics

Run: 24906427099
Commit: ce66a0e721c0f36af01714df5dd0fe74ac61b5f9
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7lrn2apmmbs73fosv9g

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
  "updatedAt": "2026-04-24T18:56:44.712675Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7lrn2apmmbs73fosv9g",
  "commit": {
    "id": "ce66a0e721c0f36af01714df5dd0fe74ac61b5f9",
    "message": "backend-probe: capture register response + test /api/whatsapp/status with JWT",
    "createdAt": "2026-04-24T18:50:37Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-24T18:50:51.266547Z",
  "updatedAt": "2026-04-24T18:56:44.711147Z",
  "startedAt": "2026-04-24T18:50:50.87755Z",
  "finishedAt": "2026-04-24T18:56:44.710943Z"
}
```

## Build logs (last 4h)
```
2026-04-24T18:35:59.060125177Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-24T18:36:04.817071882Z [34m[1m==>(B[m [1mChecking out commit ce244390d0b2cb276fec724e6a374e5b8b8fb9f2 in branch main(B[m
2026-04-24T18:36:06.122013139Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-24T18:36:06.146289031Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-24T18:36:08.30657393Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-24T18:37:36.616490664Z 
2026-04-24T18:37:36.616516595Z added 586 packages, and audited 587 packages in 1m
2026-04-24T18:37:36.616527285Z 
2026-04-24T18:37:36.616652489Z 111 packages are looking for funding
2026-04-24T18:37:36.6166997Z   run `npm fund` for details
2026-04-24T18:37:36.762804286Z 
2026-04-24T18:37:36.762821567Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-24T18:37:36.762825917Z 
2026-04-24T18:37:36.762830097Z To address issues that do not require attention, run:
2026-04-24T18:37:36.762834067Z   npm audit fix
2026-04-24T18:37:36.762837867Z 
2026-04-24T18:37:36.762841727Z To address all issues (including breaking changes), run:
2026-04-24T18:37:36.762845947Z   npm audit fix --force
2026-04-24T18:37:36.762849747Z 
2026-04-24T18:37:36.762854148Z Run `npm audit` for details.
2026-04-24T18:37:36.984110728Z 
2026-04-24T18:37:36.984133708Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-24T18:37:36.984139439Z > tsc && tsc-alias
2026-04-24T18:37:36.984143449Z 
2026-04-24T18:37:40.366529568Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-24T18:37:46.435479339Z [34;1m==>[0;22m [1mUploaded in 3.8s. Compression took 2.3s[22m
2026-04-24T18:37:46.467017791Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
2026-04-24T18:51:33.100273433Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-24T18:51:33.898203598Z [34m[1m==>(B[m [1mChecking out commit ce66a0e721c0f36af01714df5dd0fe74ac61b5f9 in branch main(B[m
2026-04-24T18:51:35.208932992Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-24T18:51:35.240750914Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-24T18:51:37.745525938Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-24T18:53:15.970349743Z 
2026-04-24T18:53:15.970375363Z added 586 packages, and audited 587 packages in 2m
2026-04-24T18:53:15.970385823Z 
2026-04-24T18:53:15.970469714Z 111 packages are looking for funding
2026-04-24T18:53:15.970529036Z   run `npm fund` for details
2026-04-24T18:53:16.118788071Z 
2026-04-24T18:53:16.118813281Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-24T18:53:16.118818982Z 
2026-04-24T18:53:16.118823651Z To address issues that do not require attention, run:
2026-04-24T18:53:16.118828222Z   npm audit fix
2026-04-24T18:53:16.118832672Z 
2026-04-24T18:53:16.118837442Z To address all issues (including breaking changes), run:
2026-04-24T18:53:16.118842372Z   npm audit fix --force
2026-04-24T18:53:16.118846862Z 
2026-04-24T18:53:16.118851952Z Run `npm audit` for details.
2026-04-24T18:53:16.332381555Z 
2026-04-24T18:53:16.332405805Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-24T18:53:16.332411516Z > tsc && tsc-alias
2026-04-24T18:53:16.332415406Z 
2026-04-24T18:54:27.688944718Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-24T18:55:05.482222726Z [34;1m==>[0;22m [1mUploaded in 4.1s. Compression took 33.7s[22m
2026-04-24T18:55:05.534097636Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-24T18:53:03.575612036Z 2026-04-24 18:53:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:04.009317395Z 2026-04-24 18:53:04 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:04.08621212Z 2026-04-24 18:53:04 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:04.739845329Z 2026-04-24 18:53:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:06.077447812Z 2026-04-24 18:53:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:06.167000187Z 2026-04-24 18:53:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:06.508932965Z 2026-04-24 18:53:06 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:06.586108432Z 2026-04-24 18:53:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:06.62516247Z 2026-04-24 18:53:06 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:06.728890157Z 2026-04-24 18:53:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:07.816425911Z 2026-04-24 18:53:07 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:08.001985654Z 2026-04-24 18:53:08 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:09.740421031Z 2026-04-24 18:53:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:10.274221146Z 2026-04-24 18:53:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:10.317002513Z 2026-04-24 18:53:10 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:10.423428933Z 2026-04-24 18:53:10 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:10.504696427Z 2026-04-24 18:53:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:10.593844021Z 2026-04-24 18:53:10 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:12.241896441Z 2026-04-24 18:53:12 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:12.774205374Z 2026-04-24 18:53:12 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:12.860321421Z 2026-04-24 18:53:12 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:14.740051203Z 2026-04-24 18:53:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:14.741609609Z 2026-04-24 18:53:14 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:14.858523275Z 2026-04-24 18:53:14 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:15.310524886Z 2026-04-24 18:53:15 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:15.383766948Z 2026-04-24 18:53:15 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:17.811594256Z 2026-04-24 18:53:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:17.884766952Z 2026-04-24 18:53:17 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:17.892842438Z 2026-04-24 18:53:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:17.977901805Z 2026-04-24 18:53:17 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:18.689544074Z 2026-04-24 18:53:18 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:19.665469129Z 2026-04-24 18:53:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:19.740192111Z 2026-04-24 18:53:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:20.704909605Z 2026-04-24 18:53:20 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:21.190174811Z 2026-04-24 18:53:21 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:21.289874666Z 2026-04-24 18:53:21 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:21.625423065Z 2026-04-24 18:53:21 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:23.108466654Z 2026-04-24 18:53:23 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:23.21231382Z 2026-04-24 18:53:23 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:23.338852498Z 2026-04-24 18:53:23 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:23.785904758Z 2026-04-24 18:53:23 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:24.126702781Z 2026-04-24 18:53:24 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:24.269812121Z 2026-04-24 18:53:24 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:24.739644499Z 2026-04-24 18:53:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:25.611904901Z 2026-04-24 18:53:25 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:25.689628448Z 2026-04-24 18:53:25 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:26.080759335Z 2026-04-24 18:53:26 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:26.286632612Z 2026-04-24 18:53:26 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:26.372678683Z 2026-04-24 18:53:26 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:28.568246267Z 2026-04-24 18:53:28 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:28.58096407Z 2026-04-24 18:53:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:28.676414987Z 2026-04-24 18:53:28 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:29.739593694Z 2026-04-24 18:53:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:30.312280684Z 2026-04-24 18:53:30 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:31.068867293Z 2026-04-24 18:53:31 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:31.169166303Z 2026-04-24 18:53:31 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:31.839499565Z 2026-04-24 18:53:31 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:32.813146668Z 2026-04-24 18:53:32 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:32.898107539Z 2026-04-24 18:53:32 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:33.81143119Z 2026-04-24 18:53:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:34.341148128Z 2026-04-24 18:53:34 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:34.430305893Z 2026-04-24 18:53:34 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:34.739692371Z 2026-04-24 18:53:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:34.816821844Z 2026-04-24 18:53:34 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:35.139852234Z 2026-04-24 18:53:35 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:36.312881108Z 2026-04-24 18:53:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:36.413214491Z 2026-04-24 18:53:36 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:37.317649315Z 2026-04-24 18:53:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:37.392114689Z 2026-04-24 18:53:37 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:37.640060229Z 2026-04-24 18:53:37 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:37.725802718Z 2026-04-24 18:53:37 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:38.032550658Z 2026-04-24 18:53:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:39.196915522Z 2026-04-24 18:53:39 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:39.740432685Z 2026-04-24 18:53:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:40.533657621Z 2026-04-24 18:53:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:40.680710777Z 2026-04-24 18:53:40 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:40.705017809Z 2026-04-24 18:53:40 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:41.697611304Z 2026-04-24 18:53:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:41.775794306Z 2026-04-24 18:53:41 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:43.181725942Z 2026-04-24 18:53:43 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:43.265697989Z 2026-04-24 18:53:43 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:44.57100309Z 2026-04-24 18:53:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:44.741637174Z 2026-04-24 18:53:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:45.234356588Z 2026-04-24 18:53:45 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:46.98485394Z 2026-04-24 18:53:46 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:47.071619245Z 2026-04-24 18:53:47 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:47.197139487Z 2026-04-24 18:53:47 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:47.730043744Z 2026-04-24 18:53:47 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:47.817848068Z 2026-04-24 18:53:47 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:49.42418121Z 2026-04-24 18:53:49 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:49.485008181Z 2026-04-24 18:53:49 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:49.560415965Z 2026-04-24 18:53:49 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:49.665262676Z 2026-04-24 18:53:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:49.740138641Z 2026-04-24 18:53:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:51.468803956Z 2026-04-24 18:53:51 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:51.924663156Z 2026-04-24 18:53:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:52.059357035Z 2026-04-24 18:53:52 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:52.431040354Z 2026-04-24 18:53:52 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:53.969686321Z 2026-04-24 18:53:53 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:54.049886845Z 2026-04-24 18:53:54 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:54.740556121Z 2026-04-24 18:53:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:53:54.930092762Z 2026-04-24 18:53:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:55.007251198Z 2026-04-24 18:53:55 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:56.076682714Z 2026-04-24 18:53:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:56.937017781Z 2026-04-24 18:53:56 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:53:56.950898382Z 2026-04-24 18:53:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:58.577669557Z 2026-04-24 18:53:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:58.658953692Z 2026-04-24 18:53:58 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:59.437489936Z 2026-04-24 18:53:59 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:59.451062124Z 2026-04-24 18:53:59 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:59.491445682Z 2026-04-24 18:53:59 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:53:59.538202827Z 2026-04-24 18:53:59 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:53:59.630680041Z 2026-04-24 18:53:59 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:53:59.740280289Z 2026-04-24 18:53:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:01.993641856Z 2026-04-24 18:54:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:02.079002086Z 2026-04-24 18:54:02 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:02.609899733Z 2026-04-24 18:54:02 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:04.407331904Z 2026-04-24 18:54:04 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:04.740441621Z 2026-04-24 18:54:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:04.831751517Z 2026-04-24 18:54:04 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:05.109878641Z 2026-04-24 18:54:05 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:05.189904921Z 2026-04-24 18:54:05 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:06.907736794Z 2026-04-24 18:54:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:06.997167179Z 2026-04-24 18:54:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:07.33180735Z 2026-04-24 18:54:07 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:07.419111097Z 2026-04-24 18:54:07 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:07.669923482Z 2026-04-24 18:54:07 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:07.670582092Z 2026-04-24 18:54:07 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:09.058432203Z 2026-04-24 18:54:09 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:09.739406942Z 2026-04-24 18:54:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:10.170494475Z 2026-04-24 18:54:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:10.170946369Z 2026-04-24 18:54:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:10.250811247Z 2026-04-24 18:54:10 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:10.33167549Z 2026-04-24 18:54:10 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:11.249702614Z 2026-04-24 18:54:11 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:11.559649264Z 2026-04-24 18:54:11 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:11.65163231Z 2026-04-24 18:54:11 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:12.723973034Z 2026-04-24 18:54:12 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:13.750419977Z 2026-04-24 18:54:13 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:13.832297156Z 2026-04-24 18:54:13 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:14.502494987Z 2026-04-24 18:54:14 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:14.74099487Z 2026-04-24 18:54:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:15.224273876Z 2026-04-24 18:54:15 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:15.31928929Z 2026-04-24 18:54:15 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:16.664667297Z 2026-04-24 18:54:16 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:17.003523974Z 2026-04-24 18:54:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:17.087179597Z 2026-04-24 18:54:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:19.166083882Z 2026-04-24 18:54:19 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:19.252431897Z 2026-04-24 18:54:19 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:19.664861081Z 2026-04-24 18:54:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:19.739862694Z 2026-04-24 18:54:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:20.457806506Z 2026-04-24 18:54:20 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:20.52588804Z 2026-04-24 18:54:20 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:22.959680596Z 2026-04-24 18:54:22 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:23.026608374Z 2026-04-24 18:54:23 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:23.125976274Z 2026-04-24 18:54:23 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:23.228922544Z 2026-04-24 18:54:23 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:23.99414558Z 2026-04-24 18:54:23 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:24.739801859Z 2026-04-24 18:54:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:26.339020568Z 2026-04-24 18:54:26 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:26.493919402Z 2026-04-24 18:54:26 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:26.576336302Z 2026-04-24 18:54:26 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:27.510978081Z 2026-04-24 18:54:27 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:28.839953107Z 2026-04-24 18:54:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:28.923470969Z 2026-04-24 18:54:28 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:29.74009465Z 2026-04-24 18:54:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:29.767061132Z 2026-04-24 18:54:29 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:30.010799947Z 2026-04-24 18:54:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:30.101736275Z 2026-04-24 18:54:30 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:30.87360023Z 2026-04-24 18:54:30 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:32.268749138Z 2026-04-24 18:54:32 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:32.350389509Z 2026-04-24 18:54:32 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:33.374381408Z 2026-04-24 18:54:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:33.455572756Z 2026-04-24 18:54:33 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:33.837751701Z 2026-04-24 18:54:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:33.896111367Z 2026-04-24 18:54:33 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:34.740497679Z 2026-04-24 18:54:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:36.339656134Z 2026-04-24 18:54:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:36.395699606Z 2026-04-24 18:54:36 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:36.419301536Z 2026-04-24 18:54:36 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:36.527216587Z 2026-04-24 18:54:36 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:38.594801284Z 2026-04-24 18:54:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:39.36282336Z 2026-04-24 18:54:39 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:39.740732236Z 2026-04-24 18:54:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:41.095670769Z 2026-04-24 18:54:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:41.186727616Z 2026-04-24 18:54:41 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:41.668694794Z 2026-04-24 18:54:41 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:41.863615499Z 2026-04-24 18:54:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:41.959552303Z 2026-04-24 18:54:41 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:42.397374071Z 2026-04-24 18:54:42 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:44.170654691Z 2026-04-24 18:54:44 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:44.25279371Z 2026-04-24 18:54:44 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:44.743827357Z 2026-04-24 18:54:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:44.791433857Z 2026-04-24 18:54:44 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:44.898658897Z 2026-04-24 18:54:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:44.98872574Z 2026-04-24 18:54:44 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:45.904955558Z 2026-04-24 18:54:45 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:47.292178702Z 2026-04-24 18:54:47 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:47.370916386Z 2026-04-24 18:54:47 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:47.709051989Z 2026-04-24 18:54:47 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:48.405752578Z 2026-04-24 18:54:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:48.484028097Z 2026-04-24 18:54:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:49.66518542Z 2026-04-24 18:54:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:49.74013935Z 2026-04-24 18:54:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:50.209989229Z 2026-04-24 18:54:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:50.299422055Z 2026-04-24 18:54:50 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:50.532577847Z 2026-04-24 18:54:50 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:51.670471656Z 2026-04-24 18:54:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:52.671139876Z 2026-04-24 18:54:52 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:53.03329306Z 2026-04-24 18:54:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:53.110269322Z 2026-04-24 18:54:53 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:54.171677486Z 2026-04-24 18:54:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:54.250704091Z 2026-04-24 18:54:54 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:54.449332894Z 2026-04-24 18:54:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:54.73988592Z 2026-04-24 18:54:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:54:55.171382384Z 2026-04-24 18:54:55 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:55.253481319Z 2026-04-24 18:54:55 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:54:56.950629661Z 2026-04-24 18:54:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:57.039212023Z 2026-04-24 18:54:57 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:54:57.505254467Z 2026-04-24 18:54:57 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:54:57.996545784Z 2026-04-24 18:54:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:58.316542187Z 2026-04-24 18:54:58 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:54:59.739651942Z 2026-04-24 18:54:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:00.005353564Z 2026-04-24 18:55:00 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:00.084470586Z 2026-04-24 18:55:00 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:00.497321782Z 2026-04-24 18:55:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:00.572582555Z 2026-04-24 18:55:00 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:00.816909774Z 2026-04-24 18:55:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:00.89981159Z 2026-04-24 18:55:00 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:02.890587598Z 2026-04-24 18:55:02 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:03.332099523Z 2026-04-24 18:55:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:04.740407818Z 2026-04-24 18:55:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:05.391850513Z 2026-04-24 18:55:05 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:05.485727002Z 2026-04-24 18:55:05 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:05.736085123Z 2026-04-24 18:55:05 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:05.832524524Z 2026-04-24 18:55:05 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:05.941550109Z 2026-04-24 18:55:05 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:07.897921107Z 2026-04-24 18:55:07 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:08.236018328Z 2026-04-24 18:55:08 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:08.312985428Z 2026-04-24 18:55:08 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:09.638145709Z 2026-04-24 18:55:09 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:09.739599136Z 2026-04-24 18:55:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:10.398639741Z 2026-04-24 18:55:10 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:10.47945668Z 2026-04-24 18:55:10 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:12.138637506Z 2026-04-24 18:55:12 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:12.243149292Z 2026-04-24 18:55:12 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:12.905802387Z 2026-04-24 18:55:12 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:13.860615199Z 2026-04-24 18:55:13 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:14.739595315Z 2026-04-24 18:55:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:15.159954973Z 2026-04-24 18:55:15 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:15.408981725Z 2026-04-24 18:55:15 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:15.495713279Z 2026-04-24 18:55:15 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:16.361395947Z 2026-04-24 18:55:16 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:16.448695803Z 2026-04-24 18:55:16 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:17.659935672Z 2026-04-24 18:55:17 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:17.747689972Z 2026-04-24 18:55:17 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:18.516785848Z 2026-04-24 18:55:18 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:18.743720444Z 2026-04-24 18:55:18 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:19.664746092Z 2026-04-24 18:55:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:19.740524344Z 2026-04-24 18:55:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:21.017727519Z 2026-04-24 18:55:21 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:21.102555399Z 2026-04-24 18:55:21 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:21.155609827Z 2026-04-24 18:55:21 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:21.243444433Z 2026-04-24 18:55:21 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:21.331588642Z 2026-04-24 18:55:21 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:22.610107195Z 2026-04-24 18:55:22 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:23.656630853Z 2026-04-24 18:55:23 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:23.733557471Z 2026-04-24 18:55:23 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:23.980919108Z 2026-04-24 18:55:23 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:24.740089611Z 2026-04-24 18:55:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:25.109933492Z 2026-04-24 18:55:25 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:25.196697647Z 2026-04-24 18:55:25 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:26.48188589Z 2026-04-24 18:55:26 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:26.565209358Z 2026-04-24 18:55:26 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:28.331322101Z 2026-04-24 18:55:28 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:28.646502073Z 2026-04-24 18:55:28 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:29.739905666Z 2026-04-24 18:55:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:30.830990546Z 2026-04-24 18:55:30 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:30.921569227Z 2026-04-24 18:55:30 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:31.147630087Z 2026-04-24 18:55:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:31.325588231Z 2026-04-24 18:55:31 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:31.396819331Z 2026-04-24 18:55:31 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:32.262951684Z 2026-04-24 18:55:32 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:33.8976116Z 2026-04-24 18:55:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:33.99470734Z 2026-04-24 18:55:33 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:34.304959863Z 2026-04-24 18:55:34 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:34.741949389Z 2026-04-24 18:55:34 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:34.766320116Z 2026-04-24 18:55:34 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:34.860210256Z 2026-04-24 18:55:34 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:36.41028574Z 2026-04-24 18:55:36 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:36.805550267Z 2026-04-24 18:55:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:36.886930429Z 2026-04-24 18:55:36 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:38.795522715Z 2026-04-24 18:55:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:38.910383988Z 2026-04-24 18:55:38 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:39.01378449Z 2026-04-24 18:55:39 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:39.740382421Z 2026-04-24 18:55:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:41.296688722Z 2026-04-24 18:55:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:41.374518098Z 2026-04-24 18:55:41 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:41.458853592Z 2026-04-24 18:55:41 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:42.41829288Z 2026-04-24 18:55:42 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:43.205496204Z 2026-04-24 18:55:43 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:43.959963505Z 2026-04-24 18:55:43 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:44.038521385Z 2026-04-24 18:55:44 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:44.739746012Z 2026-04-24 18:55:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:44.919405163Z 2026-04-24 18:55:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:45.009049315Z 2026-04-24 18:55:45 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:45.364773467Z 2026-04-24 18:55:45 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:45.706419643Z 2026-04-24 18:55:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:45.796088237Z 2026-04-24 18:55:45 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:47.865048847Z 2026-04-24 18:55:47 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:47.944267407Z 2026-04-24 18:55:47 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:48.045140451Z 2026-04-24 18:55:48 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:48.400281119Z 2026-04-24 18:55:48 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:49.675466072Z 2026-04-24 18:55:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:49.74131497Z 2026-04-24 18:55:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:50.445137392Z 2026-04-24 18:55:50 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:50.543973353Z 2026-04-24 18:55:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:50.637779536Z 2026-04-24 18:55:50 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:50.903941023Z 2026-04-24 18:55:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:50.994386115Z 2026-04-24 18:55:50 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:51.88015508Z 2026-04-24 18:55:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:52.94564304Z 2026-04-24 18:55:52 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:53.028274815Z 2026-04-24 18:55:53 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:54.380615964Z 2026-04-24 18:55:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:54.459191925Z 2026-04-24 18:55:54 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:54.526274585Z 2026-04-24 18:55:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:54.739955287Z 2026-04-24 18:55:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:55:55.543872655Z 2026-04-24 18:55:55 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:56.005420842Z 2026-04-24 18:55:56 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:57.027744495Z 2026-04-24 18:55:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:57.127979741Z 2026-04-24 18:55:57 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:58.044688576Z 2026-04-24 18:55:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:58.145006598Z 2026-04-24 18:55:58 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:55:58.422681138Z 2026-04-24 18:55:58 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:58.50713522Z 2026-04-24 18:55:58 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:58.609448011Z 2026-04-24 18:55:58 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:55:58.779288126Z 2026-04-24 18:55:58 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:55:59.6594459Z 2026-04-24 18:55:59 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:55:59.741417966Z 2026-04-24 18:55:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:00.917610817Z 2026-04-24 18:56:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:01.007875905Z 2026-04-24 18:56:01 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:01.276253748Z 2026-04-24 18:56:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:01.356598423Z 2026-04-24 18:56:01 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:02.16077404Z 2026-04-24 18:56:02 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:02.251723639Z 2026-04-24 18:56:02 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:03.835286204Z 2026-04-24 18:56:03 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:04.249179898Z 2026-04-24 18:56:04 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:04.740835352Z 2026-04-24 18:56:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:06.075004848Z 2026-04-24 18:56:06 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:06.336536868Z 2026-04-24 18:56:06 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:06.436309219Z 2026-04-24 18:56:06 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:06.749129784Z 2026-04-24 18:56:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:06.83629342Z 2026-04-24 18:56:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:07.316221965Z 2026-04-24 18:56:07 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:08.576374071Z 2026-04-24 18:56:08 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:08.668306074Z 2026-04-24 18:56:08 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:08.971037843Z 2026-04-24 18:56:08 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:09.739971767Z 2026-04-24 18:56:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:09.820838331Z 2026-04-24 18:56:09 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:09.897359218Z 2026-04-24 18:56:09 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:11.03649419Z 2026-04-24 18:56:11 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:11.471478155Z 2026-04-24 18:56:11 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:11.582598747Z 2026-04-24 18:56:11 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:12.191508823Z 2026-04-24 18:56:12 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:13.414572036Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T18:56:13.516086513Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T18:56:13.537609883Z 2026-04-24 18:56:13 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:13.617396036Z 2026-04-24 18:56:13 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:14.419865245Z 2026-04-24 18:56:14 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:14.692981463Z 2026-04-24 18:56:14 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:14.741041197Z 2026-04-24 18:56:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:14.786589562Z 2026-04-24 18:56:14 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:15.384316789Z 2026-04-24 18:56:15 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:16.927355036Z 2026-04-24 18:56:16 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:17.01128853Z 2026-04-24 18:56:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:17.884898393Z 2026-04-24 18:56:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:17.969106517Z 2026-04-24 18:56:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:18.097220693Z 2026-04-24 18:56:18 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:18.73896114Z 2026-04-24 18:56:18 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:19.64719925Z 2026-04-24 18:56:19 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:19.666304003Z 2026-04-24 18:56:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:19.743596498Z 2026-04-24 18:56:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:20.597700099Z 2026-04-24 18:56:20 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:20.687988948Z 2026-04-24 18:56:20 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:21.240504396Z 2026-04-24 18:56:21 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:21.341746877Z 2026-04-24 18:56:21 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:22.147569248Z 2026-04-24 18:56:22 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:22.230205844Z 2026-04-24 18:56:22 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:23.439090056Z 2026-04-24 18:56:23 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:23.599343422Z 2026-04-24 18:56:23 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:24.740602043Z 2026-04-24 18:56:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:25.552799112Z 2026-04-24 18:56:25 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:25.939931759Z 2026-04-24 18:56:25 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:26.018893669Z 2026-04-24 18:56:26 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:26.09879693Z 2026-04-24 18:56:26 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:26.186831071Z 2026-04-24 18:56:26 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:27.395336582Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T18:56:28.052891837Z 2026-04-24 18:56:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:28.132959951Z 2026-04-24 18:56:28 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:28.604576246Z 
2026-04-24T18:56:28.604607836Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T18:56:28.604612836Z > node dist/index.js
2026-04-24T18:56:28.604614847Z 
2026-04-24T18:56:29.449100725Z 2026-04-24 18:56:29 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:29.740082763Z 2026-04-24 18:56:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:30.305332676Z 2026-04-24 18:56:30 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:31.9506295Z 2026-04-24 18:56:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:32.03011849Z 2026-04-24 18:56:32 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:32.254532576Z 2026-04-24 18:56:32 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:32.805644218Z 2026-04-24 18:56:32 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:32.886031426Z 2026-04-24 18:56:32 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:33.685503486Z 2026-04-24 18:56:33 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-24T18:56:34.301490577Z 2026-04-24 18:56:34 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:34.739669522Z 2026-04-24 18:56:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:34.755093768Z 2026-04-24 18:56:34 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:34.835948461Z 2026-04-24 18:56:34 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:34.983976227Z 2026-04-24 18:56:34 [info] Firestore initialized successfully
2026-04-24T18:56:34.989547868Z 2026-04-24 18:56:34 [info] ✅ Server running on http://localhost:10000
2026-04-24T18:56:34.989722813Z 2026-04-24 18:56:34 [info] Environment: production
2026-04-24T18:56:34.989911688Z 2026-04-24 18:56:34 [info] API URL: http://localhost:5000
2026-04-24T18:56:34.990198986Z 2026-04-24 18:56:34 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-24T18:56:35.186528428Z 2026-04-24 18:56:35 [error] Route / not found
2026-04-24T18:56:35.186548358Z Error: Route / not found
2026-04-24T18:56:35.186552049Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T18:56:35.186554989Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:56:35.186559829Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:56:35.186562609Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:56:35.186564819Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T18:56:35.186567219Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T18:56:35.186569669Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T18:56:35.186572079Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:56:35.186574379Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:56:35.186576619Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:56:35.19041927Z 2026-04-24 18:56:35 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-24T18:56:36.371489825Z 2026-04-24 18:56:36 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:36.802631332Z 2026-04-24 18:56:36 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:36.881329533Z 2026-04-24 18:56:36 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:37.129292145Z 2026-04-24 18:56:37 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:37.648878674Z 2026-04-24 18:56:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:38.871776687Z 2026-04-24 18:56:38 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:38.949411218Z 2026-04-24 18:56:38 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:39.629634571Z 2026-04-24 18:56:39 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:39.716602822Z 2026-04-24 18:56:39 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:39.74019141Z 2026-04-24 18:56:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:40.149446516Z 2026-04-24 18:56:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:40.236575239Z 2026-04-24 18:56:40 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:42.51746613Z 2026-04-24 18:56:42 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:42.795302752Z 2026-04-24 18:56:42 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:43.899545298Z 2026-04-24 18:56:43 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.207"}
2026-04-24T18:56:43.901234647Z 2026-04-24 18:56:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.207"}
2026-04-24T18:56:44.061939795Z 2026-04-24 18:56:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:44.739484267Z 2026-04-24 18:56:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:44.920676263Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T18:56:45.018383859Z 2026-04-24 18:56:45 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:45.046662356Z [0;32m[1m==> [0m[1m[0m
2026-04-24T18:56:45.049214647Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T18:56:45.051587957Z [0;32m[1m==> [0m[1m[0m
2026-04-24T18:56:45.053990109Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T18:56:45.056787295Z [0;32m[1m==> [0m[1m[0m
2026-04-24T18:56:45.059129353Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T18:56:45.059794885Z 2026-04-24 18:56:45 [error] Route / not found
2026-04-24T18:56:45.059817426Z Error: Route / not found
2026-04-24T18:56:45.059821975Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T18:56:45.059824786Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:56:45.059827976Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:56:45.059830526Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:56:45.059832796Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T18:56:45.059834896Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T18:56:45.059836936Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T18:56:45.059839136Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:56:45.059858307Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:56:45.059860567Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:56:45.059862727Z 2026-04-24 18:56:45 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-24T18:56:45.107052237Z 2026-04-24 18:56:45 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:45.291927409Z 2026-04-24 18:56:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:45.370826795Z 2026-04-24 18:56:45 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:46.554297751Z 2026-04-24 18:56:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:46.635473488Z 2026-04-24 18:56:46 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:48.453277677Z 2026-04-24 18:56:48 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:48.819095396Z 2026-04-24 18:56:48 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:48.89833985Z 2026-04-24 18:56:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.207"}
2026-04-24T18:56:49.739676081Z 2026-04-24 18:56:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:50.953255855Z 2026-04-24 18:56:50 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:51.032700472Z 2026-04-24 18:56:51 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:51.319659788Z 2026-04-24 18:56:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:51.407612353Z 2026-04-24 18:56:51 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:51.887359284Z 2026-04-24 18:56:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:53.898002884Z 2026-04-24 18:56:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.207"}
2026-04-24T18:56:54.034081365Z 2026-04-24 18:56:54 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:54.388166754Z 2026-04-24 18:56:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:54.472582243Z 2026-04-24 18:56:54 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:54.73993612Z 2026-04-24 18:56:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:56:55.029303406Z 2026-04-24 18:56:55 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:56:56.534641517Z 2026-04-24 18:56:56 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:56.619753428Z 2026-04-24 18:56:56 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:56:57.528850822Z 2026-04-24 18:56:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:57.620548778Z 2026-04-24 18:56:57 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:56:58.076539858Z 2026-04-24 18:56:58 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:56:58.897572364Z 2026-04-24 18:56:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.207"}
2026-04-24T18:56:58.936698713Z 2026-04-24 18:56:58 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
```
