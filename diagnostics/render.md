# Render Deploy Diagnostics

Run: 24994874771
Commit: 32cb925dc8a77ad061aa2091d42469885bfaf3ed
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7nlon8sfn5c73e5frn0

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
  "updatedAt": "2026-04-27T12:56:10.214878Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7nlon8sfn5c73e5frn0",
  "commit": {
    "id": "32cb925dc8a77ad061aa2091d42469885bfaf3ed",
    "message": "Trigger deployment after VERCEL_PROJECT_ID and ORG_ID update",
    "createdAt": "2026-04-27T12:25:22Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-27T12:53:50.011103Z",
  "updatedAt": "2026-04-27T12:56:10.212988Z",
  "startedAt": "2026-04-27T12:53:49.957489Z",
  "finishedAt": "2026-04-27T12:56:10.212702Z"
}
```

## App logs (last 4h)
```
2026-04-27T12:30:10.404761437Z 2026-04-27 12:30:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:15.404696627Z 2026-04-27 12:30:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:20.398032736Z 2026-04-27 12:30:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:20.404175907Z 2026-04-27 12:30:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:25.404876526Z 2026-04-27 12:30:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:30.404512776Z 2026-04-27 12:30:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:35.410094123Z 2026-04-27 12:30:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:40.404156388Z 2026-04-27 12:30:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:45.404516084Z 2026-04-27 12:30:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:50.397772066Z 2026-04-27 12:30:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:50.403790649Z 2026-04-27 12:30:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:30:55.404514348Z 2026-04-27 12:30:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:00.404828979Z 2026-04-27 12:31:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:05.404572734Z 2026-04-27 12:31:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:10.404398923Z 2026-04-27 12:31:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:15.404381053Z 2026-04-27 12:31:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:20.397942563Z 2026-04-27 12:31:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:20.403828887Z 2026-04-27 12:31:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:25.406390904Z 2026-04-27 12:31:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:30.404542483Z 2026-04-27 12:31:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:35.403878209Z 2026-04-27 12:31:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:40.404234351Z 2026-04-27 12:31:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:45.404000594Z 2026-04-27 12:31:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:50.398657704Z 2026-04-27 12:31:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:50.403387663Z 2026-04-27 12:31:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:31:55.407171068Z 2026-04-27 12:31:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:00.407376469Z 2026-04-27 12:32:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:05.413202537Z 2026-04-27 12:32:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:10.404087799Z 2026-04-27 12:32:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:15.404644172Z 2026-04-27 12:32:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:20.397659063Z 2026-04-27 12:32:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:20.404087652Z 2026-04-27 12:32:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:25.404466123Z 2026-04-27 12:32:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:30.403805676Z 2026-04-27 12:32:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:35.406100252Z 2026-04-27 12:32:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:40.404091566Z 2026-04-27 12:32:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:45.407269159Z 2026-04-27 12:32:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:50.398352112Z 2026-04-27 12:32:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:50.403350858Z 2026-04-27 12:32:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:32:55.404112092Z 2026-04-27 12:32:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:00.404268776Z 2026-04-27 12:33:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:05.404176174Z 2026-04-27 12:33:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:10.404478167Z 2026-04-27 12:33:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:15.404106806Z 2026-04-27 12:33:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:20.397700892Z 2026-04-27 12:33:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:20.404250229Z 2026-04-27 12:33:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:25.404406272Z 2026-04-27 12:33:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:30.404384393Z 2026-04-27 12:33:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:35.405494637Z 2026-04-27 12:33:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:40.404689967Z 2026-04-27 12:33:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:45.404029855Z 2026-04-27 12:33:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:47.796843791Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-27T12:33:47.876247913Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-27T12:33:50.39810659Z 2026-04-27 12:33:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:50.404227719Z 2026-04-27 12:33:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:33:55.404664598Z 2026-04-27 12:33:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:00.40452263Z 2026-04-27 12:34:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:05.404425244Z 2026-04-27 12:34:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:10.404161226Z 2026-04-27 12:34:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:15.407850607Z 2026-04-27 12:34:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:20.397691743Z 2026-04-27 12:34:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:20.403576698Z 2026-04-27 12:34:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:25.40469447Z 2026-04-27 12:34:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:30.404035926Z 2026-04-27 12:34:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:35.404722459Z 2026-04-27 12:34:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:40.40476476Z 2026-04-27 12:34:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:45.404382663Z 2026-04-27 12:34:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:50.39823982Z 2026-04-27 12:34:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:50.407462351Z 2026-04-27 12:34:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:34:55.411990924Z 2026-04-27 12:34:55 [info] {"method":"GET","path":"/health","status":200,"duration":"5ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:00.40384356Z 2026-04-27 12:35:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:05.404564644Z 2026-04-27 12:35:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:10.404467464Z 2026-04-27 12:35:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:15.404480981Z 2026-04-27 12:35:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:20.397827523Z 2026-04-27 12:35:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:20.404172667Z 2026-04-27 12:35:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:25.405085852Z 2026-04-27 12:35:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:30.405962905Z 2026-04-27 12:35:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:35.405074472Z 2026-04-27 12:35:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:40.404426804Z 2026-04-27 12:35:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:45.404653334Z 2026-04-27 12:35:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:50.397363552Z 2026-04-27 12:35:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:50.403595889Z 2026-04-27 12:35:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:35:55.40462622Z 2026-04-27 12:35:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:00.40410008Z 2026-04-27 12:36:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:05.403877588Z 2026-04-27 12:36:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:10.404893298Z 2026-04-27 12:36:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:15.407571285Z 2026-04-27 12:36:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:20.397622098Z 2026-04-27 12:36:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:20.403654962Z 2026-04-27 12:36:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:25.412008589Z 2026-04-27 12:36:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:30.4047885Z 2026-04-27 12:36:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:35.404710827Z 2026-04-27 12:36:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:40.404450321Z 2026-04-27 12:36:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:45.404653966Z 2026-04-27 12:36:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:50.39841707Z 2026-04-27 12:36:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:50.404656646Z 2026-04-27 12:36:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:36:55.403683094Z 2026-04-27 12:36:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:00.403835874Z 2026-04-27 12:37:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:05.404628155Z 2026-04-27 12:37:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:10.40500365Z 2026-04-27 12:37:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:15.404277052Z 2026-04-27 12:37:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:20.3976654Z 2026-04-27 12:37:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:20.404093289Z 2026-04-27 12:37:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:25.404401418Z 2026-04-27 12:37:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:30.404576618Z 2026-04-27 12:37:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:35.403795475Z 2026-04-27 12:37:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:40.404320797Z 2026-04-27 12:37:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:45.404910974Z 2026-04-27 12:37:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:50.398435929Z 2026-04-27 12:37:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:50.403559753Z 2026-04-27 12:37:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:37:55.404375743Z 2026-04-27 12:37:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:00.404635317Z 2026-04-27 12:38:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:05.404181524Z 2026-04-27 12:38:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:10.4043288Z 2026-04-27 12:38:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:15.404166216Z 2026-04-27 12:38:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:20.397751963Z 2026-04-27 12:38:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:20.403739614Z 2026-04-27 12:38:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:25.404735734Z 2026-04-27 12:38:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:30.403724623Z 2026-04-27 12:38:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:35.405020943Z 2026-04-27 12:38:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:40.404083787Z 2026-04-27 12:38:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:45.404408742Z 2026-04-27 12:38:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:50.403078319Z 2026-04-27 12:38:50 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:50.403471735Z 2026-04-27 12:38:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:38:55.403875185Z 2026-04-27 12:38:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:00.404874354Z 2026-04-27 12:39:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:05.40383928Z 2026-04-27 12:39:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:10.404355727Z 2026-04-27 12:39:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:15.403766031Z 2026-04-27 12:39:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:20.397879079Z 2026-04-27 12:39:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:20.403859229Z 2026-04-27 12:39:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:25.404012182Z 2026-04-27 12:39:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:30.404791425Z 2026-04-27 12:39:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:35.404174176Z 2026-04-27 12:39:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:40.403826455Z 2026-04-27 12:39:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:45.408975222Z 2026-04-27 12:39:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:50.399254839Z 2026-04-27 12:39:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:50.403286762Z 2026-04-27 12:39:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:39:55.406987294Z 2026-04-27 12:39:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:00.403875501Z 2026-04-27 12:40:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:05.404405536Z 2026-04-27 12:40:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:10.404616209Z 2026-04-27 12:40:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:15.404139828Z 2026-04-27 12:40:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:20.397989236Z 2026-04-27 12:40:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:20.403777493Z 2026-04-27 12:40:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:25.404269815Z 2026-04-27 12:40:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:30.404636747Z 2026-04-27 12:40:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:35.407361394Z 2026-04-27 12:40:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:40.406051916Z 2026-04-27 12:40:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:45.40430551Z 2026-04-27 12:40:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:50.400551913Z 2026-04-27 12:40:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:50.404373892Z 2026-04-27 12:40:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:40:55.407487973Z 2026-04-27 12:40:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:00.404066177Z 2026-04-27 12:41:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:05.405064959Z 2026-04-27 12:41:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:10.405430039Z 2026-04-27 12:41:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:15.404284321Z 2026-04-27 12:41:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:20.398275725Z 2026-04-27 12:41:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:20.403038126Z 2026-04-27 12:41:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:25.4043952Z 2026-04-27 12:41:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:30.405314755Z 2026-04-27 12:41:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:35.404775235Z 2026-04-27 12:41:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:40.404449119Z 2026-04-27 12:41:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:41.432225195Z 2026-04-27 12:41:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:41:41.605024709Z 2026-04-27 12:41:41 [info] [keepalive] ping OK
2026-04-27T12:41:45.405534825Z 2026-04-27 12:41:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:50.397757522Z 2026-04-27 12:41:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:50.403562891Z 2026-04-27 12:41:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:41:55.404166814Z 2026-04-27 12:41:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:00.404597167Z 2026-04-27 12:42:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:05.404506144Z 2026-04-27 12:42:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:10.403956472Z 2026-04-27 12:42:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:15.403844248Z 2026-04-27 12:42:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:20.398989454Z 2026-04-27 12:42:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:20.407953149Z 2026-04-27 12:42:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:25.404576931Z 2026-04-27 12:42:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:30.404435155Z 2026-04-27 12:42:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:35.404656471Z 2026-04-27 12:42:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:40.404783421Z 2026-04-27 12:42:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:45.403609096Z 2026-04-27 12:42:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:50.398267049Z 2026-04-27 12:42:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:50.403125056Z 2026-04-27 12:42:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:42:55.403853805Z 2026-04-27 12:42:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:00.404198828Z 2026-04-27 12:43:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:05.404234691Z 2026-04-27 12:43:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:10.404585714Z 2026-04-27 12:43:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:15.404290345Z 2026-04-27 12:43:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:20.397825653Z 2026-04-27 12:43:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:20.403578259Z 2026-04-27 12:43:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:25.404300345Z 2026-04-27 12:43:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:30.404097731Z 2026-04-27 12:43:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:35.404103621Z 2026-04-27 12:43:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:40.404428061Z 2026-04-27 12:43:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:45.404694927Z 2026-04-27 12:43:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:50.39818014Z 2026-04-27 12:43:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:50.405634506Z 2026-04-27 12:43:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:43:55.404514041Z 2026-04-27 12:43:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:00.403971474Z 2026-04-27 12:44:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:05.405889236Z 2026-04-27 12:44:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:10.404517714Z 2026-04-27 12:44:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:15.404574525Z 2026-04-27 12:44:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:20.404580902Z 2026-04-27 12:44:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:25.403955938Z 2026-04-27 12:44:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:30.404152577Z 2026-04-27 12:44:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:35.404702509Z 2026-04-27 12:44:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:40.404185151Z 2026-04-27 12:44:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:45.404124302Z 2026-04-27 12:44:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:44:50.40445774Z 2026-04-27 12:44:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:46:37.196275692Z 2026-04-27 12:46:37 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:46:37.287036204Z 2026-04-27 12:46:37 [info] {"method":"GET","path":"/status","status":200,"duration":"47ms","ip":"::1"}
2026-04-27T12:46:37.312447978Z 2026-04-27 12:46:37 [info] Client connected: d4O3PEZv6AYgMHnfAAAF
2026-04-27T12:46:37.624527525Z 2026-04-27 12:46:37 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket d4O3PEZv6AYgMHnfAAAF
2026-04-27T12:46:38.197254356Z 2026-04-27 12:46:38 [info] Client connected: MLA_TGd6s0RNMLU_AAAH
2026-04-27T12:46:38.475936215Z 2026-04-27 12:46:38 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket MLA_TGd6s0RNMLU_AAAH
2026-04-27T12:46:40.579432516Z 2026-04-27 12:46:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:46:41.704179801Z 2026-04-27 12:46:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:46:45.579873858Z 2026-04-27 12:46:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:46:46.034307886Z 2026-04-27 12:46:46 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T12:46:49.736454533Z 2026-04-27 12:46:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:46:50.579423206Z 2026-04-27 12:46:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:46:54.155344277Z 2026-04-27 12:46:54 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T12:46:55.579460537Z 2026-04-27 12:46:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:46:56.998788278Z 2026-04-27 12:46:56 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:46:56.998826099Z 2026-04-27 12:46:56 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:46:57.086547049Z 2026-04-27 12:46:57 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:46:57.737283499Z 2026-04-27 12:46:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:47:00.579381354Z 2026-04-27 12:47:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:02.011396106Z 2026-04-27 12:47:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:47:05.570306589Z 2026-04-27 12:47:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:05.578645663Z 2026-04-27 12:47:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:05.742379959Z 2026-04-27 12:47:05 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T12:47:10.023176886Z 2026-04-27 12:47:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:47:10.57967857Z 2026-04-27 12:47:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:13.73900565Z 2026-04-27 12:47:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:47:15.579237567Z 2026-04-27 12:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:17.005785042Z 2026-04-27 12:47:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:47:17.005911576Z 2026-04-27 12:47:17 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:47:17.095621269Z 2026-04-27 12:47:17 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:47:18.021250956Z 2026-04-27 12:47:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:47:20.578817744Z 2026-04-27 12:47:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:21.734928552Z 2026-04-27 12:47:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:47:25.579430358Z 2026-04-27 12:47:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:26.111636669Z 2026-04-27 12:47:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:47:29.731518201Z 2026-04-27 12:47:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:47:30.579404545Z 2026-04-27 12:47:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:34.009266294Z 2026-04-27 12:47:34 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T12:47:35.570929204Z 2026-04-27 12:47:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:35.578849627Z 2026-04-27 12:47:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:37.086385651Z 2026-04-27 12:47:37 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:47:37.086496494Z 2026-04-27 12:47:37 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:47:37.18853534Z 2026-04-27 12:47:37 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:47:37.734515201Z 2026-04-27 12:47:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T12:47:40.580130618Z 2026-04-27 12:47:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:45.579259091Z 2026-04-27 12:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:50.578942629Z 2026-04-27 12:47:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:55.579275964Z 2026-04-27 12:47:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:47:57.09434639Z 2026-04-27 12:47:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-27T12:47:57.094452353Z 2026-04-27 12:47:57 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-27T12:47:57.223036443Z 2026-04-27 12:47:57 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 2000ms (attempt 2)
2026-04-27T12:47:59.224616819Z 2026-04-27 12:47:59 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-27T12:47:59.391323315Z 2026-04-27 12:47:59 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:47:59.393673798Z 2026-04-27 12:47:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-27T12:48:00.131436639Z 2026-04-27 12:48:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:48:00.13146147Z 2026-04-27 12:48:00 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:48:00.189237885Z 2026-04-27 12:48:00 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:48:00.579820324Z 2026-04-27 12:48:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:05.570437427Z 2026-04-27 12:48:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:05.579284825Z 2026-04-27 12:48:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:10.579114175Z 2026-04-27 12:48:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:12.779264724Z 2026-04-27 12:48:12 [info] Client disconnected: d4O3PEZv6AYgMHnfAAAF
2026-04-27T12:48:13.773032514Z 2026-04-27 12:48:13 [info] Client disconnected: MLA_TGd6s0RNMLU_AAAH
2026-04-27T12:48:15.578854803Z 2026-04-27 12:48:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:20.579432193Z 2026-04-27 12:48:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:25.57920225Z 2026-04-27 12:48:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:30.580096888Z 2026-04-27 12:48:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:35.572536238Z 2026-04-27 12:48:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:35.582609309Z 2026-04-27 12:48:35 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:40.579058317Z 2026-04-27 12:48:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:45.580393126Z 2026-04-27 12:48:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:50.579645718Z 2026-04-27 12:48:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:48:55.578857099Z 2026-04-27 12:48:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:00.138868592Z 2026-04-27 12:49:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:49:00.138896003Z 2026-04-27 12:49:00 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:49:00.386963117Z 2026-04-27 12:49:00 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:49:00.57957068Z 2026-04-27 12:49:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:05.570302282Z 2026-04-27 12:49:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:05.578480652Z 2026-04-27 12:49:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:10.579345027Z 2026-04-27 12:49:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:15.579110581Z 2026-04-27 12:49:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:20.288540554Z 2026-04-27 12:49:20 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:49:20.288563934Z 2026-04-27 12:49:20 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:49:20.488390171Z 2026-04-27 12:49:20 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:49:20.579303277Z 2026-04-27 12:49:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:25.57866461Z 2026-04-27 12:49:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:30.578951647Z 2026-04-27 12:49:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:35.570475519Z 2026-04-27 12:49:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:35.579196794Z 2026-04-27 12:49:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:40.302508638Z 2026-04-27 12:49:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:49:40.30256831Z 2026-04-27 12:49:40 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:49:40.386351514Z 2026-04-27 12:49:40 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:49:40.579289235Z 2026-04-27 12:49:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:45.579807958Z 2026-04-27 12:49:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:50.580087215Z 2026-04-27 12:49:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:49:55.579807435Z 2026-04-27 12:49:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:00.321558295Z 2026-04-27 12:50:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:50:00.321606436Z 2026-04-27 12:50:00 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:50:00.392999967Z 2026-04-27 12:50:00 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:50:00.579189677Z 2026-04-27 12:50:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:05.571140888Z 2026-04-27 12:50:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:05.579224345Z 2026-04-27 12:50:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:10.57951576Z 2026-04-27 12:50:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:15.578997084Z 2026-04-27 12:50:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:20.324468683Z 2026-04-27 12:50:20 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:50:20.324492204Z 2026-04-27 12:50:20 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:50:20.584958372Z 2026-04-27 12:50:20 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:50:20.785729933Z 2026-04-27 12:50:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:25.579135322Z 2026-04-27 12:50:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:30.579409905Z 2026-04-27 12:50:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:35.570556083Z 2026-04-27 12:50:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:35.578590419Z 2026-04-27 12:50:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:40.337065376Z 2026-04-27 12:50:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-27T12:50:40.337147958Z 2026-04-27 12:50:40 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-27T12:50:40.579087348Z 2026-04-27 12:50:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:40.701730548Z 2026-04-27 12:50:40 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 4000ms (attempt 3)
2026-04-27T12:50:44.704449131Z 2026-04-27 12:50:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-27T12:50:44.817258126Z 2026-04-27 12:50:44 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:50:44.88801412Z 2026-04-27 12:50:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-27T12:50:45.532064888Z 2026-04-27 12:50:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:50:45.532112929Z 2026-04-27 12:50:45 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:50:45.588826555Z 2026-04-27 12:50:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:45.589349929Z 2026-04-27 12:50:45 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:50:50.579788057Z 2026-04-27 12:50:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:50:55.580232384Z 2026-04-27 12:50:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:00.579040597Z 2026-04-27 12:51:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:05.570412529Z 2026-04-27 12:51:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:05.579160885Z 2026-04-27 12:51:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:10.57996866Z 2026-04-27 12:51:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:15.580292072Z 2026-04-27 12:51:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:20.580717777Z 2026-04-27 12:51:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:25.580099853Z 2026-04-27 12:51:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:30.578916804Z 2026-04-27 12:51:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:35.570263223Z 2026-04-27 12:51:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:35.578955057Z 2026-04-27 12:51:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:40.579716239Z 2026-04-27 12:51:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:45.540443944Z 2026-04-27 12:51:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:51:45.540475125Z 2026-04-27 12:51:45 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:51:45.591869078Z 2026-04-27 12:51:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:45.592584657Z 2026-04-27 12:51:45 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:51:50.57928394Z 2026-04-27 12:51:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:51:55.579774665Z 2026-04-27 12:51:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:00.579079657Z 2026-04-27 12:52:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:05.550520779Z 2026-04-27 12:52:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:52:05.550594861Z 2026-04-27 12:52:05 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:52:05.587411352Z 2026-04-27 12:52:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:05.588642474Z 2026-04-27 12:52:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:05.588658405Z 2026-04-27 12:52:05 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:52:10.580816824Z 2026-04-27 12:52:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:15.57953905Z 2026-04-27 12:52:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:20.579366395Z 2026-04-27 12:52:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:25.560530887Z 2026-04-27 12:52:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:52:25.560563798Z 2026-04-27 12:52:25 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:52:25.790743291Z 2026-04-27 12:52:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:25.791499701Z 2026-04-27 12:52:25 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:52:30.579563878Z 2026-04-27 12:52:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:35.570604396Z 2026-04-27 12:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:35.579131225Z 2026-04-27 12:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:40.579200165Z 2026-04-27 12:52:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:45.57945807Z 2026-04-27 12:52:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:45.689258074Z 2026-04-27 12:52:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:52:45.69206085Z 2026-04-27 12:52:45 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:52:45.889532373Z 2026-04-27 12:52:45 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:52:50.578960276Z 2026-04-27 12:52:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:52:55.579355164Z 2026-04-27 12:52:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:00.582606388Z 2026-04-27 12:53:00 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:05.570936991Z 2026-04-27 12:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:05.57943959Z 2026-04-27 12:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:05.701259577Z 2026-04-27 12:53:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:53:05.701314759Z 2026-04-27 12:53:05 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:53:05.786046958Z 2026-04-27 12:53:05 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:53:10.579499708Z 2026-04-27 12:53:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:15.578827276Z 2026-04-27 12:53:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:20.579639914Z 2026-04-27 12:53:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:25.579004263Z 2026-04-27 12:53:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:25.70933843Z 2026-04-27 12:53:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-27T12:53:25.709365141Z 2026-04-27 12:53:25 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-27T12:53:25.835112053Z 2026-04-27 12:53:25 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 8000ms (attempt 4)
2026-04-27T12:53:30.579468631Z 2026-04-27 12:53:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:33.837472701Z 2026-04-27 12:53:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-27T12:53:33.943921505Z 2026-04-27 12:53:33 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:53:33.946197126Z 2026-04-27 12:53:33 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-27T12:53:34.766881515Z 2026-04-27 12:53:34 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:53:34.766911046Z 2026-04-27 12:53:34 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:53:34.789210046Z 2026-04-27 12:53:34 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:53:35.570534826Z 2026-04-27 12:53:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:35.578934552Z 2026-04-27 12:53:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:40.579194244Z 2026-04-27 12:53:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:45.579033004Z 2026-04-27 12:53:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:50.579011447Z 2026-04-27 12:53:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:53:55.578899948Z 2026-04-27 12:53:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:00.579248941Z 2026-04-27 12:54:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:05.570691855Z 2026-04-27 12:54:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:05.57869013Z 2026-04-27 12:54:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:10.579003662Z 2026-04-27 12:54:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:15.579464777Z 2026-04-27 12:54:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:20.579289075Z 2026-04-27 12:54:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:25.579676097Z 2026-04-27 12:54:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:30.578939959Z 2026-04-27 12:54:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:34.775168478Z 2026-04-27 12:54:34 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:54:34.775208728Z 2026-04-27 12:54:34 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:54:34.789501123Z 2026-04-27 12:54:34 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:54:35.572566989Z 2026-04-27 12:54:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:35.579520986Z 2026-04-27 12:54:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:40.579922778Z 2026-04-27 12:54:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:45.579424636Z 2026-04-27 12:54:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:50.579688594Z 2026-04-27 12:54:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:54:54.785556221Z 2026-04-27 12:54:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:54:54.785590571Z 2026-04-27 12:54:54 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:54:54.800604455Z 2026-04-27 12:54:54 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:54:55.578901713Z 2026-04-27 12:54:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:00.579287564Z 2026-04-27 12:55:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:05.570470766Z 2026-04-27 12:55:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:05.578724819Z 2026-04-27 12:55:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:10.581051421Z 2026-04-27 12:55:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:14.794550882Z 2026-04-27 12:55:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:55:14.794586933Z 2026-04-27 12:55:14 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:55:14.810203473Z 2026-04-27 12:55:14 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:55:15.579703324Z 2026-04-27 12:55:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:20.581076018Z 2026-04-27 12:55:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:25.579708258Z 2026-04-27 12:55:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:30.57920733Z 2026-04-27 12:55:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:34.800717349Z 2026-04-27 12:55:34 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:55:34.800750329Z 2026-04-27 12:55:34 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:55:34.888068061Z 2026-04-27 12:55:34 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:55:35.570149172Z 2026-04-27 12:55:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:35.578478746Z 2026-04-27 12:55:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:38.88772082Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-27T12:55:38.947516678Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-27T12:55:40.581893133Z 2026-04-27 12:55:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:45.579264488Z 2026-04-27 12:55:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:50.579676213Z 2026-04-27 12:55:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:53.235576882Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-27T12:55:54.628089511Z 
2026-04-27T12:55:54.628115182Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-27T12:55:54.628120792Z > node dist/index.js
2026-04-27T12:55:54.628123772Z 
2026-04-27T12:55:54.822066704Z 2026-04-27 12:55:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=true, lastDisconnect=false
2026-04-27T12:55:54.822093185Z 2026-04-27 12:55:54 [info] [wa] QR code received for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:55:54.888560284Z 2026-04-27 12:55:54 [info] [wa] QR code emitted for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-27T12:55:55.57938287Z 2026-04-27 12:55:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:55:59.530178565Z 2026-04-27 12:55:59 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-27T12:56:00.57959257Z 2026-04-27 12:56:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:56:00.824831644Z 2026-04-27 12:56:00 [info] Firestore initialized successfully
2026-04-27T12:56:00.921916397Z 2026-04-27 12:56:00 [info] ✅ Server running on http://localhost:10000
2026-04-27T12:56:00.922195893Z 2026-04-27 12:56:00 [info] Environment: production
2026-04-27T12:56:00.922371857Z 2026-04-27 12:56:00 [info] API URL: http://localhost:5000
2026-04-27T12:56:00.922546992Z 2026-04-27 12:56:00 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-27T12:56:01.833947005Z 2026-04-27 12:56:01 [error] Route / not found
2026-04-27T12:56:01.833967215Z Error: Route / not found
2026-04-27T12:56:01.833972325Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T12:56:01.833976855Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:56:01.833979965Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:56:01.833982975Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:56:01.833985355Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T12:56:01.833987775Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T12:56:01.833990196Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T12:56:01.833992896Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:56:01.833995376Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:56:01.833997836Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:56:01.837713772Z 2026-04-27 12:56:01 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-27T12:56:05.570748656Z 2026-04-27 12:56:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:56:05.579338957Z 2026-04-27 12:56:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:56:09.459583821Z 2026-04-27 12:56:09 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.235"}
2026-04-27T12:56:09.462826477Z 2026-04-27 12:56:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.235"}
2026-04-27T12:56:10.348366Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-27T12:56:10.425109467Z [0;32m[1m==> [0m[1m[0m
2026-04-27T12:56:10.429946397Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-27T12:56:10.434423497Z [0;32m[1m==> [0m[1m[0m
2026-04-27T12:56:10.441310291Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-27T12:56:10.445832352Z [0;32m[1m==> [0m[1m[0m
2026-04-27T12:56:10.448971235Z 2026-04-27 12:56:10 [error] Route / not found
2026-04-27T12:56:10.448992095Z Error: Route / not found
2026-04-27T12:56:10.448997145Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T12:56:10.449000855Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:56:10.449004475Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:56:10.449008645Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:56:10.449011756Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T12:56:10.449014936Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T12:56:10.449017656Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T12:56:10.449020596Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:56:10.449037766Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:56:10.449041166Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:56:10.449858875Z 2026-04-27 12:56:10 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-27T12:56:10.450259091Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-27T12:56:10.579879855Z 2026-04-27 12:56:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
2026-04-27T12:56:14.462708301Z 2026-04-27 12:56:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.235"}
2026-04-27T12:56:14.822618743Z 2026-04-27 12:56:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-27T12:56:14.822656554Z 2026-04-27 12:56:14 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=408, error=QR refs attempts ended
2026-04-27T12:56:15.107083195Z 2026-04-27 12:56:15 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 16000ms (attempt 5)
2026-04-27T12:56:15.579291452Z 2026-04-27 12:56:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.25"}
```
