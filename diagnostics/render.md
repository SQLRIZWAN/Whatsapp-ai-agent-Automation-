# Render Deploy Diagnostics

Run: 24985578116
Commit: 08b47c3f8cab402de3ed8c3451c1f2f3949e7b99
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7ni7lgk1i2s739m5gd0

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
  "updatedAt": "2026-04-26T23:11:23.631798Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7ni7lgk1i2s739m5gd0",
  "commit": {
    "id": "08b47c3f8cab402de3ed8c3451c1f2f3949e7b99",
    "message": "fix: Update auto-deploy workflow to only trigger on main branch\n\n- Removed old claude branches from trigger\n- Workflow now only runs on main branch push and workflow_dispatch",
    "createdAt": "2026-04-27T08:51:08Z"
  },
  "status": "build_failed",
  "trigger": "api",
  "createdAt": "2026-04-27T08:52:41.240328Z",
  "updatedAt": "2026-04-27T08:54:16.194713Z",
  "startedAt": "2026-04-27T08:52:41.089264Z",
  "finishedAt": "2026-04-27T08:54:16.194094Z"
}
```

## App logs (last 4h)
```
2026-04-27T08:16:10.390853959Z 
2026-04-27T08:16:10.390878159Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-27T08:16:10.390884669Z > node dist/index.js
2026-04-27T08:16:10.390889049Z 
2026-04-27T08:16:15.284002195Z 2026-04-27 08:16:15 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-27T08:16:16.485913191Z 2026-04-27 08:16:16 [info] Firestore initialized successfully
2026-04-27T08:16:16.492053358Z 2026-04-27 08:16:16 [info] ✅ Server running on http://localhost:10000
2026-04-27T08:16:16.492203721Z 2026-04-27 08:16:16 [info] Environment: production
2026-04-27T08:16:16.492343404Z 2026-04-27 08:16:16 [info] API URL: http://localhost:5000
2026-04-27T08:16:16.492500698Z 2026-04-27 08:16:16 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-27T08:16:16.591320041Z 2026-04-27 08:16:16 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:16.679401364Z 2026-04-27 08:16:16 [info] {"method":"GET","path":"/health","status":200,"duration":"87ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:16.992843903Z 2026-04-27 08:16:16 [info] {"method":"GET","path":"/status","status":200,"duration":"4ms","ip":"::1"}
2026-04-27T08:16:17.387973761Z 2026-04-27 08:16:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:17.421798769Z 2026-04-27 08:16:17 [error] Route / not found
2026-04-27T08:16:17.421816239Z Error: Route / not found
2026-04-27T08:16:17.421822119Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T08:16:17.421827289Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T08:16:17.421832359Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T08:16:17.421837929Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T08:16:17.42184293Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T08:16:17.42184789Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T08:16:17.42185284Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T08:16:17.42185778Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T08:16:17.42186275Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T08:16:17.42186761Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T08:16:17.422518774Z 2026-04-27 08:16:17 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-27T08:16:19.790578184Z 2026-04-27 08:16:19 [info] Client connected: fFQts0EHe6gCkh8DAAAB
2026-04-27T08:16:19.879358272Z 2026-04-27 08:16:19 [info] {"method":"GET","path":"/status","status":200,"duration":"88ms","ip":"::1"}
2026-04-27T08:16:20.095278917Z 2026-04-27 08:16:20 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket fFQts0EHe6gCkh8DAAAB
2026-04-27T08:16:20.147290782Z 2026-04-27 08:16:20 [info] Client connected: Dmf1vXxVRMFw524VAAAD
2026-04-27T08:16:20.176149398Z 2026-04-27 08:16:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:20.386912358Z 2026-04-27 08:16:20 [info] {"method":"GET","path":"/calls","status":200,"duration":"294ms","ip":"::1"}
2026-04-27T08:16:20.579854138Z 2026-04-27 08:16:20 [info] {"method":"GET","path":"/messages","status":200,"duration":"3155ms","ip":"::1"}
2026-04-27T08:16:20.580975934Z 2026-04-27 08:16:20 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket Dmf1vXxVRMFw524VAAAD
2026-04-27T08:16:20.582430546Z 2026-04-27 08:16:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:20.880404899Z 2026-04-27 08:16:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:21.181512962Z 2026-04-27 08:16:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:21.591114074Z 2026-04-27 08:16:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:23.987298442Z 2026-04-27 08:16:23 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T08:16:26.538684805Z 2026-04-27 08:16:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:26.590569397Z 2026-04-27 08:16:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:27.669205281Z 2026-04-27 08:16:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:31.590351996Z 2026-04-27 08:16:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:31.937235884Z 2026-04-27 08:16:31 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T08:16:35.663643848Z 2026-04-27 08:16:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:36.590295237Z 2026-04-27 08:16:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:39.918294799Z 2026-04-27 08:16:39 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T08:16:41.590718938Z 2026-04-27 08:16:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:43.66879261Z 2026-04-27 08:16:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:46.591259159Z 2026-04-27 08:16:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:47.980548047Z 2026-04-27 08:16:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:51.590826706Z 2026-04-27 08:16:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:51.67273305Z 2026-04-27 08:16:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:16:56.2205122Z 2026-04-27 08:16:56 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T08:16:56.538763076Z 2026-04-27 08:16:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:16:56.590407673Z 2026-04-27 08:16:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:01.590888748Z 2026-04-27 08:17:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:06.590365258Z 2026-04-27 08:17:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:11.59036841Z 2026-04-27 08:17:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:16.590530613Z 2026-04-27 08:17:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:21.591030441Z 2026-04-27 08:17:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:26.542075961Z 2026-04-27 08:17:26 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:26.592571772Z 2026-04-27 08:17:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:27.507041556Z 2026-04-27 08:17:27 [info] Client disconnected: fFQts0EHe6gCkh8DAAAB
2026-04-27T08:17:30.175254924Z 2026-04-27 08:17:30 [info] Client disconnected: Dmf1vXxVRMFw524VAAAD
2026-04-27T08:17:31.590766646Z 2026-04-27 08:17:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:36.590731148Z 2026-04-27 08:17:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:41.592172972Z 2026-04-27 08:17:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:46.590236708Z 2026-04-27 08:17:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:51.591106655Z 2026-04-27 08:17:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:56.539593218Z 2026-04-27 08:17:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:17:56.590705123Z 2026-04-27 08:17:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:01.591231069Z 2026-04-27 08:18:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:06.592500141Z 2026-04-27 08:18:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:11.591160032Z 2026-04-27 08:18:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:16.590526778Z 2026-04-27 08:18:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:21.590672739Z 2026-04-27 08:18:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:26.538517438Z 2026-04-27 08:18:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:26.591376601Z 2026-04-27 08:18:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:31.594537827Z 2026-04-27 08:18:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:36.592334111Z 2026-04-27 08:18:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:41.596684161Z 2026-04-27 08:18:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:46.590345549Z 2026-04-27 08:18:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:51.59042255Z 2026-04-27 08:18:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:56.542511394Z 2026-04-27 08:18:56 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:18:56.591264536Z 2026-04-27 08:18:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:01.590953874Z 2026-04-27 08:19:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:06.591835498Z 2026-04-27 08:19:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:11.590834238Z 2026-04-27 08:19:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:16.590703536Z 2026-04-27 08:19:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:21.59137182Z 2026-04-27 08:19:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:26.538741139Z 2026-04-27 08:19:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:26.592253167Z 2026-04-27 08:19:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:31.590981885Z 2026-04-27 08:19:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:36.591621553Z 2026-04-27 08:19:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:41.590122473Z 2026-04-27 08:19:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:46.590960183Z 2026-04-27 08:19:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:51.591035175Z 2026-04-27 08:19:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:56.541486344Z 2026-04-27 08:19:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:19:56.59181677Z 2026-04-27 08:19:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:01.593189338Z 2026-04-27 08:20:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:06.591133416Z 2026-04-27 08:20:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:11.59292012Z 2026-04-27 08:20:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:16.59058796Z 2026-04-27 08:20:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:21.593404733Z 2026-04-27 08:20:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:26.538550644Z 2026-04-27 08:20:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:26.591106271Z 2026-04-27 08:20:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:31.590680858Z 2026-04-27 08:20:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:36.591210036Z 2026-04-27 08:20:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:41.592846166Z 2026-04-27 08:20:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:46.59201794Z 2026-04-27 08:20:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:51.590420875Z 2026-04-27 08:20:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:56.538790599Z 2026-04-27 08:20:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:20:56.590355003Z 2026-04-27 08:20:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:01.590797241Z 2026-04-27 08:21:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:06.591301219Z 2026-04-27 08:21:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:11.594527796Z 2026-04-27 08:21:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:16.591160894Z 2026-04-27 08:21:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:21.591094144Z 2026-04-27 08:21:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:26.539070831Z 2026-04-27 08:21:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:26.590312458Z 2026-04-27 08:21:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:31.592439714Z 2026-04-27 08:21:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:36.590281313Z 2026-04-27 08:21:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:41.592268813Z 2026-04-27 08:21:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:46.590367144Z 2026-04-27 08:21:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:51.590904909Z 2026-04-27 08:21:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:56.540560184Z 2026-04-27 08:21:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:21:56.590381578Z 2026-04-27 08:21:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:01.590978491Z 2026-04-27 08:22:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:06.591094582Z 2026-04-27 08:22:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:11.590594777Z 2026-04-27 08:22:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:16.590696375Z 2026-04-27 08:22:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:21.591133789Z 2026-04-27 08:22:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:26.538666587Z 2026-04-27 08:22:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:26.590323803Z 2026-04-27 08:22:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:31.59017925Z 2026-04-27 08:22:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:36.590855914Z 2026-04-27 08:22:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:41.590668247Z 2026-04-27 08:22:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:46.594691033Z 2026-04-27 08:22:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:51.590583866Z 2026-04-27 08:22:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:56.538820101Z 2026-04-27 08:22:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:22:56.590655201Z 2026-04-27 08:22:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:01.591837857Z 2026-04-27 08:23:01 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:06.592088713Z 2026-04-27 08:23:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:11.5902225Z 2026-04-27 08:23:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:16.59126123Z 2026-04-27 08:23:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:21.590655522Z 2026-04-27 08:23:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:26.538642233Z 2026-04-27 08:23:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:26.591363282Z 2026-04-27 08:23:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:31.590390813Z 2026-04-27 08:23:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:36.590480726Z 2026-04-27 08:23:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:41.591614481Z 2026-04-27 08:23:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:46.590841101Z 2026-04-27 08:23:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:51.590378487Z 2026-04-27 08:23:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:56.538790448Z 2026-04-27 08:23:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:23:56.59026802Z 2026-04-27 08:23:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:01.590172781Z 2026-04-27 08:24:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:06.59183321Z 2026-04-27 08:24:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:11.590118493Z 2026-04-27 08:24:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:16.590393898Z 2026-04-27 08:24:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:18.280851853Z 2026-04-27 08:24:18 [error] Route / not found
2026-04-27T08:24:18.280868134Z Error: Route / not found
2026-04-27T08:24:18.280873394Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T08:24:18.280881154Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T08:24:18.280885584Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T08:24:18.280901244Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T08:24:18.280904254Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T08:24:18.280906894Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T08:24:18.280909634Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T08:24:18.280912324Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T08:24:18.280915035Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T08:24:18.280917655Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T08:24:18.28160388Z 2026-04-27 08:24:18 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-27T08:24:21.591240255Z 2026-04-27 08:24:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:26.539595236Z 2026-04-27 08:24:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:26.591787684Z 2026-04-27 08:24:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:31.591066542Z 2026-04-27 08:24:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:36.590850121Z 2026-04-27 08:24:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:41.590192298Z 2026-04-27 08:24:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:46.590825723Z 2026-04-27 08:24:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:51.590439583Z 2026-04-27 08:24:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:56.538904648Z 2026-04-27 08:24:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:24:56.593823176Z 2026-04-27 08:24:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:01.591158793Z 2026-04-27 08:25:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:06.590760689Z 2026-04-27 08:25:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:11.591973589Z 2026-04-27 08:25:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:16.591173543Z 2026-04-27 08:25:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:21.591797247Z 2026-04-27 08:25:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:26.538709449Z 2026-04-27 08:25:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:26.590496857Z 2026-04-27 08:25:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:31.594895283Z 2026-04-27 08:25:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:36.590190824Z 2026-04-27 08:25:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:41.590194228Z 2026-04-27 08:25:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:46.59013579Z 2026-04-27 08:25:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:51.590590832Z 2026-04-27 08:25:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:56.538498507Z 2026-04-27 08:25:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:25:56.590124952Z 2026-04-27 08:25:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:01.590520889Z 2026-04-27 08:26:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:06.590564698Z 2026-04-27 08:26:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:11.594302658Z 2026-04-27 08:26:11 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:16.590931507Z 2026-04-27 08:26:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:21.591354239Z 2026-04-27 08:26:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:26.539731017Z 2026-04-27 08:26:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:26.590779118Z 2026-04-27 08:26:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:31.591273779Z 2026-04-27 08:26:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:36.590967501Z 2026-04-27 08:26:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:41.590327344Z 2026-04-27 08:26:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:46.590608047Z 2026-04-27 08:26:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:51.590440347Z 2026-04-27 08:26:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:56.538820396Z 2026-04-27 08:26:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:26:56.592295961Z 2026-04-27 08:26:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:01.591130207Z 2026-04-27 08:27:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:06.590443062Z 2026-04-27 08:27:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:11.590358689Z 2026-04-27 08:27:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:16.590926679Z 2026-04-27 08:27:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:21.590340722Z 2026-04-27 08:27:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:26.538332394Z 2026-04-27 08:27:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:26.590164323Z 2026-04-27 08:27:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:31.590688558Z 2026-04-27 08:27:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:36.591265183Z 2026-04-27 08:27:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:41.592937741Z 2026-04-27 08:27:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:46.590172769Z 2026-04-27 08:27:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:51.593236635Z 2026-04-27 08:27:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:56.539633553Z 2026-04-27 08:27:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:27:56.590630093Z 2026-04-27 08:27:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:01.591130559Z 2026-04-27 08:28:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:06.590923388Z 2026-04-27 08:28:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:11.590509931Z 2026-04-27 08:28:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:16.591090964Z 2026-04-27 08:28:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:21.591232127Z 2026-04-27 08:28:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:26.539304016Z 2026-04-27 08:28:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:26.590304305Z 2026-04-27 08:28:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:31.590797263Z 2026-04-27 08:28:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:36.590344458Z 2026-04-27 08:28:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:41.590889924Z 2026-04-27 08:28:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:46.590444297Z 2026-04-27 08:28:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:51.59053217Z 2026-04-27 08:28:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:56.538508007Z 2026-04-27 08:28:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:28:56.590235433Z 2026-04-27 08:28:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:01.5901995Z 2026-04-27 08:29:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:06.591002325Z 2026-04-27 08:29:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:11.591356118Z 2026-04-27 08:29:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:16.509554505Z 2026-04-27 08:29:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T08:29:16.579523028Z 2026-04-27 08:29:16 [info] [keepalive] ping OK
2026-04-27T08:29:16.590371271Z 2026-04-27 08:29:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:21.590325133Z 2026-04-27 08:29:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:26.5391123Z 2026-04-27 08:29:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:26.590228392Z 2026-04-27 08:29:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:31.590674662Z 2026-04-27 08:29:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:36.591880078Z 2026-04-27 08:29:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:41.590341961Z 2026-04-27 08:29:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:46.591214176Z 2026-04-27 08:29:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:51.590669899Z 2026-04-27 08:29:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:56.538440526Z 2026-04-27 08:29:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:29:56.59097282Z 2026-04-27 08:29:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:01.590669865Z 2026-04-27 08:30:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:06.590637905Z 2026-04-27 08:30:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:11.590547762Z 2026-04-27 08:30:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:16.592267229Z 2026-04-27 08:30:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:21.591230302Z 2026-04-27 08:30:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:26.538342176Z 2026-04-27 08:30:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:26.590891899Z 2026-04-27 08:30:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:29.949076461Z 2026-04-27 08:30:29 [error] Route / not found
2026-04-27T08:30:29.949092551Z Error: Route / not found
2026-04-27T08:30:29.949097371Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T08:30:29.949101171Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T08:30:29.949105042Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T08:30:29.949108482Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T08:30:29.949111662Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T08:30:29.949114762Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T08:30:29.949117852Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T08:30:29.949121002Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T08:30:29.949132112Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T08:30:29.949134322Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T08:30:29.949658584Z 2026-04-27 08:30:29 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-27T08:30:31.590323121Z 2026-04-27 08:30:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:36.591763356Z 2026-04-27 08:30:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:41.591505211Z 2026-04-27 08:30:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:46.590778805Z 2026-04-27 08:30:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:51.590532948Z 2026-04-27 08:30:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:56.53835151Z 2026-04-27 08:30:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:30:56.590118906Z 2026-04-27 08:30:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:01.592427844Z 2026-04-27 08:31:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:06.590476175Z 2026-04-27 08:31:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:11.590053539Z 2026-04-27 08:31:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:16.590999862Z 2026-04-27 08:31:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:21.590828929Z 2026-04-27 08:31:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:26.538528259Z 2026-04-27 08:31:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:26.590541931Z 2026-04-27 08:31:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:31.590998519Z 2026-04-27 08:31:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:36.590314331Z 2026-04-27 08:31:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:41.590919769Z 2026-04-27 08:31:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:46.591084957Z 2026-04-27 08:31:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:51.590782973Z 2026-04-27 08:31:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:56.538622169Z 2026-04-27 08:31:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:31:56.590511508Z 2026-04-27 08:31:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:01.591123272Z 2026-04-27 08:32:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:06.590966107Z 2026-04-27 08:32:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:11.591710431Z 2026-04-27 08:32:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:16.590970411Z 2026-04-27 08:32:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:21.593651385Z 2026-04-27 08:32:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:26.538820754Z 2026-04-27 08:32:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:26.590503789Z 2026-04-27 08:32:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:31.590240845Z 2026-04-27 08:32:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:36.591110915Z 2026-04-27 08:32:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:41.591186447Z 2026-04-27 08:32:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:46.590159972Z 2026-04-27 08:32:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:51.590245931Z 2026-04-27 08:32:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:56.538580563Z 2026-04-27 08:32:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:32:56.590174015Z 2026-04-27 08:32:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:01.593419241Z 2026-04-27 08:33:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:06.591330548Z 2026-04-27 08:33:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:11.590182464Z 2026-04-27 08:33:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:16.591165296Z 2026-04-27 08:33:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:21.591052253Z 2026-04-27 08:33:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:26.538547819Z 2026-04-27 08:33:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:26.590147081Z 2026-04-27 08:33:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:31.59025147Z 2026-04-27 08:33:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:36.590414239Z 2026-04-27 08:33:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:41.590849833Z 2026-04-27 08:33:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:46.591057681Z 2026-04-27 08:33:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:51.590050552Z 2026-04-27 08:33:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:56.538432799Z 2026-04-27 08:33:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:33:56.590092453Z 2026-04-27 08:33:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:01.590769087Z 2026-04-27 08:34:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:06.590922508Z 2026-04-27 08:34:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:11.590599097Z 2026-04-27 08:34:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:16.590167183Z 2026-04-27 08:34:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:21.590476694Z 2026-04-27 08:34:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:26.542401933Z 2026-04-27 08:34:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:26.59018595Z 2026-04-27 08:34:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:31.591088941Z 2026-04-27 08:34:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:36.590316175Z 2026-04-27 08:34:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:41.590347085Z 2026-04-27 08:34:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:46.590255061Z 2026-04-27 08:34:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:51.591084686Z 2026-04-27 08:34:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:56.538274571Z 2026-04-27 08:34:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:34:56.59019254Z 2026-04-27 08:34:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:01.590712266Z 2026-04-27 08:35:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:06.59254835Z 2026-04-27 08:35:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:11.591549589Z 2026-04-27 08:35:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:16.596847567Z 2026-04-27 08:35:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:21.590956575Z 2026-04-27 08:35:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:26.53932748Z 2026-04-27 08:35:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:26.59038511Z 2026-04-27 08:35:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:31.590957339Z 2026-04-27 08:35:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:36.590530774Z 2026-04-27 08:35:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:41.590513628Z 2026-04-27 08:35:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:46.590833818Z 2026-04-27 08:35:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:51.592540157Z 2026-04-27 08:35:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:56.538546092Z 2026-04-27 08:35:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:35:56.590510422Z 2026-04-27 08:35:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:01.590994242Z 2026-04-27 08:36:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:06.590200832Z 2026-04-27 08:36:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:11.590818092Z 2026-04-27 08:36:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:16.590372367Z 2026-04-27 08:36:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:21.591322012Z 2026-04-27 08:36:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:26.538639989Z 2026-04-27 08:36:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:26.592123093Z 2026-04-27 08:36:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:31.590296203Z 2026-04-27 08:36:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:36.591059051Z 2026-04-27 08:36:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:41.590156979Z 2026-04-27 08:36:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:46.590924245Z 2026-04-27 08:36:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:51.591696088Z 2026-04-27 08:36:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:56.538470486Z 2026-04-27 08:36:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:36:56.590034486Z 2026-04-27 08:36:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:01.590417579Z 2026-04-27 08:37:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:06.591578388Z 2026-04-27 08:37:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:11.590521526Z 2026-04-27 08:37:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:16.591639162Z 2026-04-27 08:37:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:21.590635778Z 2026-04-27 08:37:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:26.539234839Z 2026-04-27 08:37:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:26.591721391Z 2026-04-27 08:37:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:31.591124264Z 2026-04-27 08:37:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:36.591022367Z 2026-04-27 08:37:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:41.592000605Z 2026-04-27 08:37:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:46.590607207Z 2026-04-27 08:37:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:51.590631299Z 2026-04-27 08:37:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:56.538603169Z 2026-04-27 08:37:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:37:56.591233374Z 2026-04-27 08:37:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:01.591026518Z 2026-04-27 08:38:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:06.590422343Z 2026-04-27 08:38:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:11.592714442Z 2026-04-27 08:38:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:16.590946988Z 2026-04-27 08:38:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:21.590433662Z 2026-04-27 08:38:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:26.539942398Z 2026-04-27 08:38:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:26.591345886Z 2026-04-27 08:38:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:31.594846476Z 2026-04-27 08:38:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:36.590540401Z 2026-04-27 08:38:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:41.591735998Z 2026-04-27 08:38:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:46.591114523Z 2026-04-27 08:38:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:51.590691311Z 2026-04-27 08:38:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:56.538695077Z 2026-04-27 08:38:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:38:56.590911132Z 2026-04-27 08:38:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:01.592093334Z 2026-04-27 08:39:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:06.591003284Z 2026-04-27 08:39:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:11.590151278Z 2026-04-27 08:39:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:16.590925427Z 2026-04-27 08:39:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:21.590654692Z 2026-04-27 08:39:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:26.538263792Z 2026-04-27 08:39:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:26.590328054Z 2026-04-27 08:39:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:31.590940966Z 2026-04-27 08:39:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:36.591066716Z 2026-04-27 08:39:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:41.590221853Z 2026-04-27 08:39:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:46.591091917Z 2026-04-27 08:39:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:51.590681091Z 2026-04-27 08:39:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:56.538328155Z 2026-04-27 08:39:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:39:56.590168772Z 2026-04-27 08:39:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:01.590797328Z 2026-04-27 08:40:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:06.593241932Z 2026-04-27 08:40:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:11.590112411Z 2026-04-27 08:40:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:16.590333704Z 2026-04-27 08:40:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:21.590627047Z 2026-04-27 08:40:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:26.538635052Z 2026-04-27 08:40:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:26.590686314Z 2026-04-27 08:40:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:31.590472603Z 2026-04-27 08:40:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:36.590821074Z 2026-04-27 08:40:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:41.590313064Z 2026-04-27 08:40:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:46.590793956Z 2026-04-27 08:40:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:51.590734674Z 2026-04-27 08:40:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:56.53861383Z 2026-04-27 08:40:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:40:56.59019772Z 2026-04-27 08:40:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:01.590038594Z 2026-04-27 08:41:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:06.591148315Z 2026-04-27 08:41:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:11.591077759Z 2026-04-27 08:41:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:16.590647053Z 2026-04-27 08:41:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:21.590774128Z 2026-04-27 08:41:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:26.540376086Z 2026-04-27 08:41:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:26.598336908Z 2026-04-27 08:41:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:31.590496024Z 2026-04-27 08:41:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:36.590739779Z 2026-04-27 08:41:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:41.590690136Z 2026-04-27 08:41:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:46.59057033Z 2026-04-27 08:41:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:51.591025216Z 2026-04-27 08:41:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:56.538857077Z 2026-04-27 08:41:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:41:56.590063949Z 2026-04-27 08:41:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:01.590657436Z 2026-04-27 08:42:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:06.590652619Z 2026-04-27 08:42:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:11.59112939Z 2026-04-27 08:42:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:16.504035228Z 2026-04-27 08:42:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T08:42:16.504054538Z 2026-04-27 08:42:16 [info] [keepalive] ping OK
2026-04-27T08:42:16.590705031Z 2026-04-27 08:42:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:21.590424304Z 2026-04-27 08:42:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:26.538940863Z 2026-04-27 08:42:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:26.590200157Z 2026-04-27 08:42:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:31.5909286Z 2026-04-27 08:42:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:36.590284571Z 2026-04-27 08:42:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:41.590782697Z 2026-04-27 08:42:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:46.591295502Z 2026-04-27 08:42:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:51.590514356Z 2026-04-27 08:42:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:56.538580979Z 2026-04-27 08:42:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:42:56.596695546Z 2026-04-27 08:42:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:01.592563903Z 2026-04-27 08:43:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:06.591751364Z 2026-04-27 08:43:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:11.590913723Z 2026-04-27 08:43:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:16.590765907Z 2026-04-27 08:43:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:21.590876015Z 2026-04-27 08:43:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:26.538749607Z 2026-04-27 08:43:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:26.591142505Z 2026-04-27 08:43:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:31.590853622Z 2026-04-27 08:43:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:36.590749492Z 2026-04-27 08:43:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:41.590497188Z 2026-04-27 08:43:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:46.591797927Z 2026-04-27 08:43:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:51.591484319Z 2026-04-27 08:43:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:56.538635978Z 2026-04-27 08:43:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:43:56.593550053Z 2026-04-27 08:43:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:01.592401144Z 2026-04-27 08:44:01 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:06.590943947Z 2026-04-27 08:44:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:11.592130118Z 2026-04-27 08:44:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:16.592923279Z 2026-04-27 08:44:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:21.590931637Z 2026-04-27 08:44:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:26.538325795Z 2026-04-27 08:44:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:26.593523016Z 2026-04-27 08:44:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:31.591160354Z 2026-04-27 08:44:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:36.590866906Z 2026-04-27 08:44:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:41.590743922Z 2026-04-27 08:44:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:46.591439344Z 2026-04-27 08:44:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:51.590903538Z 2026-04-27 08:44:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:56.539571638Z 2026-04-27 08:44:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:44:56.590739019Z 2026-04-27 08:44:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:01.591170313Z 2026-04-27 08:45:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:06.59049631Z 2026-04-27 08:45:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:11.59356188Z 2026-04-27 08:45:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:16.590239006Z 2026-04-27 08:45:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:21.590534312Z 2026-04-27 08:45:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:26.538812807Z 2026-04-27 08:45:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:26.590243044Z 2026-04-27 08:45:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:31.591134231Z 2026-04-27 08:45:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:36.598130884Z 2026-04-27 08:45:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:41.590724183Z 2026-04-27 08:45:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:46.59131616Z 2026-04-27 08:45:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:51.59070822Z 2026-04-27 08:45:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:45:56.590767933Z 2026-04-27 08:45:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:46:01.590386065Z 2026-04-27 08:46:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:46:06.590703542Z 2026-04-27 08:46:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:46:11.591546809Z 2026-04-27 08:46:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:46:16.594488873Z 2026-04-27 08:46:16 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:46:21.590415698Z 2026-04-27 08:46:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.187"}
2026-04-27T08:46:26.590329172Z 2026-04-27 08:46:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.187"}
```
