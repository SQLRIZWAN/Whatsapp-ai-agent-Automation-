# Render Deploy Diagnostics

Run: 24965583948
Commit: c84d4e752606760303b4de45598129f25455b212
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n6q3osfn5c73dt8kog

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
  "updatedAt": "2026-04-26T19:55:11.570284Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n6q3osfn5c73dt8kog",
  "commit": {
    "id": "c84d4e752606760303b4de45598129f25455b212",
    "message": "fix: deep fix for QR persistence and session conflicts",
    "createdAt": "2026-04-26T19:52:30Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T19:52:47.590884Z",
  "updatedAt": "2026-04-26T19:55:11.56751Z",
  "startedAt": "2026-04-26T19:52:47.543559Z",
  "finishedAt": "2026-04-26T19:55:11.567352Z"
}
```

## App logs (last 4h)
```
2026-04-26T19:41:03.130166303Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T19:41:04.335469138Z 
2026-04-26T19:41:04.335492978Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T19:41:04.335498488Z > node dist/index.js
2026-04-26T19:41:04.335501408Z 
2026-04-26T19:41:09.0271265Z 2026-04-26 19:41:09 [info] [ai] Gemini ready — model: gemini-2.5-flash
2026-04-26T19:41:09.929249081Z 2026-04-26 19:41:09 [info] Firestore initialized successfully
2026-04-26T19:41:10.020948134Z 2026-04-26 19:41:10 [info] ✅ Server running on http://localhost:10000
2026-04-26T19:41:10.021305242Z 2026-04-26 19:41:10 [info] Environment: production
2026-04-26T19:41:10.021481226Z 2026-04-26 19:41:10 [info] API URL: http://localhost:5000
2026-04-26T19:41:10.02166155Z 2026-04-26 19:41:10 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T19:41:15.806397182Z 2026-04-26 19:41:15 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:15.809025458Z 2026-04-26 19:41:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:20.808304809Z 2026-04-26 19:41:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:25.808556321Z 2026-04-26 19:41:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:30.808276132Z 2026-04-26 19:41:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:35.808435513Z 2026-04-26 19:41:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:40.808323327Z 2026-04-26 19:41:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:45.798529573Z 2026-04-26 19:41:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:45.808049188Z 2026-04-26 19:41:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:50.808709689Z 2026-04-26 19:41:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:41:55.808209945Z 2026-04-26 19:41:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:00.808431216Z 2026-04-26 19:42:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:05.80781514Z 2026-04-26 19:42:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:10.807543891Z 2026-04-26 19:42:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:15.798508883Z 2026-04-26 19:42:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:15.807799933Z 2026-04-26 19:42:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:20.808953626Z 2026-04-26 19:42:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:25.808230127Z 2026-04-26 19:42:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:30.807534049Z 2026-04-26 19:42:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:35.807829662Z 2026-04-26 19:42:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:40.808761169Z 2026-04-26 19:42:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:45.798095487Z 2026-04-26 19:42:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:45.807860507Z 2026-04-26 19:42:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:50.808718782Z 2026-04-26 19:42:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:42:55.80920824Z 2026-04-26 19:42:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:00.812432236Z 2026-04-26 19:43:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:05.808518159Z 2026-04-26 19:43:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:10.807439143Z 2026-04-26 19:43:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:15.79814141Z 2026-04-26 19:43:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:15.807287756Z 2026-04-26 19:43:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:20.807849106Z 2026-04-26 19:43:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:25.807947745Z 2026-04-26 19:43:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:30.807321118Z 2026-04-26 19:43:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:35.808375848Z 2026-04-26 19:43:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:40.808253213Z 2026-04-26 19:43:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:45.797793545Z 2026-04-26 19:43:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:45.808150618Z 2026-04-26 19:43:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:50.807996881Z 2026-04-26 19:43:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:43:55.807734023Z 2026-04-26 19:43:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:00.808535307Z 2026-04-26 19:44:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:05.808119976Z 2026-04-26 19:44:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:10.808365118Z 2026-04-26 19:44:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:15.798035983Z 2026-04-26 19:44:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:15.809655883Z 2026-04-26 19:44:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:20.807401922Z 2026-04-26 19:44:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:25.810950906Z 2026-04-26 19:44:25 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:30.807904677Z 2026-04-26 19:44:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:35.807767732Z 2026-04-26 19:44:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:40.807771079Z 2026-04-26 19:44:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:45.799004779Z 2026-04-26 19:44:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:45.807919181Z 2026-04-26 19:44:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:50.807826546Z 2026-04-26 19:44:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:44:55.808474867Z 2026-04-26 19:44:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:00.807970374Z 2026-04-26 19:45:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:05.807777497Z 2026-04-26 19:45:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:10.808089281Z 2026-04-26 19:45:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:15.798516563Z 2026-04-26 19:45:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:15.807582708Z 2026-04-26 19:45:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:20.80779085Z 2026-04-26 19:45:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:25.807733566Z 2026-04-26 19:45:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:30.808583772Z 2026-04-26 19:45:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:35.808037498Z 2026-04-26 19:45:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:40.807384921Z 2026-04-26 19:45:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:45.798008687Z 2026-04-26 19:45:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:45.807121333Z 2026-04-26 19:45:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:50.808184553Z 2026-04-26 19:45:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:45:55.807895835Z 2026-04-26 19:45:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:00.81149794Z 2026-04-26 19:46:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:05.80840613Z 2026-04-26 19:46:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:10.807968759Z 2026-04-26 19:46:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:15.797973411Z 2026-04-26 19:46:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:15.807624259Z 2026-04-26 19:46:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:20.807422872Z 2026-04-26 19:46:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:25.807822178Z 2026-04-26 19:46:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:30.808718975Z 2026-04-26 19:46:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:35.808382835Z 2026-04-26 19:46:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:40.808032515Z 2026-04-26 19:46:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:45.798189041Z 2026-04-26 19:46:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:45.807723976Z 2026-04-26 19:46:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:50.808386778Z 2026-04-26 19:46:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:46:55.807948696Z 2026-04-26 19:46:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:00.807702389Z 2026-04-26 19:47:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:05.808405262Z 2026-04-26 19:47:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:10.80797572Z 2026-04-26 19:47:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:15.797935391Z 2026-04-26 19:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:15.807008897Z 2026-04-26 19:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:20.808043237Z 2026-04-26 19:47:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:25.808381002Z 2026-04-26 19:47:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:28.326687359Z 2026-04-26 19:47:28 [info] User logged in: rizwanhasan9012277862@gmail.com
2026-04-26T19:47:28.327366464Z 2026-04-26 19:47:28 [info] {"method":"POST","path":"/login","status":200,"duration":"1182ms","ip":"::1"}
2026-04-26T19:47:29.502117772Z 2026-04-26 19:47:29 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T19:47:29.626032758Z 2026-04-26 19:47:29 [info] {"method":"GET","path":"/messages","status":200,"duration":"250ms","ip":"::1"}
2026-04-26T19:47:29.919726918Z 2026-04-26 19:47:29 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:47:30.119866284Z 2026-04-26 19:47:30 [info] Client connected: H9cwh3QyDaJykCMkAAAB
2026-04-26T19:47:30.223537835Z 2026-04-26 19:47:30 [info] [wa] using WA web version 2.3000.1035194821
2026-04-26T19:47:30.421857382Z 2026-04-26 19:47:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1053ms","ip":"::1"}
2026-04-26T19:47:30.521913325Z 2026-04-26 19:47:30 [info] {"method":"GET","path":"/calls","status":200,"duration":"487ms","ip":"::1"}
2026-04-26T19:47:30.523557341Z 2026-04-26 19:47:30 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket H9cwh3QyDaJykCMkAAAB
2026-04-26T19:47:30.818958247Z 2026-04-26 19:47:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:30.895620257Z 2026-04-26 19:47:30 [info] Client connected: Oqb41ip3CO8lEX0nAAAD
2026-04-26T19:47:31.185880952Z 2026-04-26 19:47:31 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket Oqb41ip3CO8lEX0nAAAD
2026-04-26T19:47:32.720183747Z 2026-04-26 19:47:32 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:47:35.808378237Z 2026-04-26 19:47:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:37.35746476Z 2026-04-26 19:47:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:47:40.808263163Z 2026-04-26 19:47:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:41.051623029Z 2026-04-26 19:47:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:47:45.362053169Z 2026-04-26 19:47:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:47:45.79803421Z 2026-04-26 19:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:45.807427332Z 2026-04-26 19:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:49.053164993Z 2026-04-26 19:47:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:47:50.808323959Z 2026-04-26 19:47:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:53.337406459Z 2026-04-26 19:47:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:47:55.808491356Z 2026-04-26 19:47:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:47:57.034366455Z 2026-04-26 19:47:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:00.808223235Z 2026-04-26 19:48:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:01.349778809Z 2026-04-26 19:48:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:05.039552241Z 2026-04-26 19:48:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:05.810128109Z 2026-04-26 19:48:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:09.310873407Z 2026-04-26 19:48:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:10.807872284Z 2026-04-26 19:48:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:13.086039195Z 2026-04-26 19:48:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:14.016852899Z 2026-04-26 19:48:14 [info] Client disconnected: H9cwh3QyDaJykCMkAAAB
2026-04-26T19:48:14.036996702Z 2026-04-26 19:48:14 [info] Client disconnected: Oqb41ip3CO8lEX0nAAAD
2026-04-26T19:48:15.488087381Z 2026-04-26 19:48:15 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:48:15.582786187Z 2026-04-26 19:48:15 [info] {"method":"GET","path":"/calls","status":200,"duration":"99ms","ip":"::1"}
2026-04-26T19:48:15.634757435Z 2026-04-26 19:48:15 [info] {"method":"GET","path":"/messages","status":200,"duration":"162ms","ip":"::1"}
2026-04-26T19:48:15.798539156Z 2026-04-26 19:48:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:15.807487199Z 2026-04-26 19:48:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:16.180227593Z 2026-04-26 19:48:16 [info] Client connected: znX-6g9xLs4YfVR3AAAF
2026-04-26T19:48:16.454409858Z 2026-04-26 19:48:16 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket znX-6g9xLs4YfVR3AAAF
2026-04-26T19:48:17.236990124Z 2026-04-26 19:48:17 [info] Client connected: M_Js4bVRaoX1-U7xAAAH
2026-04-26T19:48:17.527807227Z 2026-04-26 19:48:17 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket M_Js4bVRaoX1-U7xAAAH
2026-04-26T19:48:19.793581182Z 2026-04-26 19:48:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:20.807717467Z 2026-04-26 19:48:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:24.243870996Z 2026-04-26 19:48:24 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:25.807762861Z 2026-04-26 19:48:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:27.954608999Z 2026-04-26 19:48:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:30.808383228Z 2026-04-26 19:48:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:32.233425047Z 2026-04-26 19:48:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:32.619974798Z 2026-04-26 19:48:32 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:48:35.808289219Z 2026-04-26 19:48:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:35.966576872Z 2026-04-26 19:48:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:36.646670335Z 2026-04-26 19:48:36 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=515, msg=Stream Errored (restart required))
2026-04-26T19:48:36.647094844Z 2026-04-26 19:48:36 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T19:48:38.647996735Z 2026-04-26 19:48:38 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T19:48:38.810161081Z 2026-04-26 19:48:38 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:48:39.619426551Z 2026-04-26 19:48:39 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:48:40.808661821Z 2026-04-26 19:48:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:45.313256123Z 2026-04-26 19:48:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:45.798613678Z 2026-04-26 19:48:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:45.807573421Z 2026-04-26 19:48:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:48.921635296Z 2026-04-26 19:48:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:50.807851611Z 2026-04-26 19:48:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:53.409402396Z 2026-04-26 19:48:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:48:55.807422885Z 2026-04-26 19:48:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:48:56.954236093Z 2026-04-26 19:48:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:00.807781567Z 2026-04-26 19:49:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:01.203605067Z 2026-04-26 19:49:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:04.932219596Z 2026-04-26 19:49:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:05.807629387Z 2026-04-26 19:49:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:09.260014587Z 2026-04-26 19:49:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:10.807640882Z 2026-04-26 19:49:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:12.922472742Z 2026-04-26 19:49:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:15.798157972Z 2026-04-26 19:49:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:15.807698177Z 2026-04-26 19:49:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:17.25894673Z 2026-04-26 19:49:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:20.807351134Z 2026-04-26 19:49:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:20.95414473Z 2026-04-26 19:49:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:21.980557969Z 2026-04-26 19:49:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:22.099975396Z 2026-04-26 19:49:22 [info] {"method":"GET","path":"/calls","status":200,"duration":"124ms","ip":"::1"}
2026-04-26T19:49:22.122754006Z 2026-04-26 19:49:22 [info] {"method":"GET","path":"/messages","status":200,"duration":"152ms","ip":"::1"}
2026-04-26T19:49:22.199025736Z 2026-04-26 19:49:22 [info] Client connected: RDliLm_ugKqrhxqzAAAJ
2026-04-26T19:49:22.489860429Z 2026-04-26 19:49:22 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket RDliLm_ugKqrhxqzAAAJ
2026-04-26T19:49:23.554427738Z 2026-04-26 19:49:23 [info] Client connected: FSTUhDSvDAz61vTOAAAL
2026-04-26T19:49:23.889133385Z 2026-04-26 19:49:23 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket FSTUhDSvDAz61vTOAAAL
2026-04-26T19:49:25.808120374Z 2026-04-26 19:49:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:26.418197662Z 2026-04-26 19:49:26 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:49:30.750833067Z 2026-04-26 19:49:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:30.80908982Z 2026-04-26 19:49:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:34.299579628Z 2026-04-26 19:49:34 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T19:49:35.807837337Z 2026-04-26 19:49:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:39.621633137Z 2026-04-26 19:49:39 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:49:39.730276653Z 2026-04-26 19:49:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:40.812388979Z 2026-04-26 19:49:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:42.419489053Z 2026-04-26 19:49:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:45.798539116Z 2026-04-26 19:49:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:45.807902517Z 2026-04-26 19:49:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:46.933364916Z 2026-04-26 19:49:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:49:48.744469656Z 2026-04-26 19:49:48 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=515, msg=Stream Errored (restart required))
2026-04-26T19:49:48.744490597Z 2026-04-26 19:49:48 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T19:49:50.808030815Z 2026-04-26 19:49:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:51.45940666Z 2026-04-26 19:49:51 [info] Client disconnected: znX-6g9xLs4YfVR3AAAF
2026-04-26T19:49:52.538260026Z 2026-04-26 19:49:52 [info] Client disconnected: M_Js4bVRaoX1-U7xAAAH
2026-04-26T19:49:52.745019302Z 2026-04-26 19:49:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T19:49:52.830840727Z 2026-04-26 19:49:52 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:49:53.425168316Z 2026-04-26 19:49:53 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:49:54.617364399Z 2026-04-26 19:49:54 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T19:49:55.808386097Z 2026-04-26 19:49:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:49:58.184019075Z 2026-04-26 19:49:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:00.808559175Z 2026-04-26 19:50:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:02.292111123Z 2026-04-26 19:50:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:05.754010847Z 2026-04-26 19:50:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:05.808293885Z 2026-04-26 19:50:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:10.27485581Z 2026-04-26 19:50:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:10.808757849Z 2026-04-26 19:50:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:13.756604851Z 2026-04-26 19:50:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:15.797911121Z 2026-04-26 19:50:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:15.807805664Z 2026-04-26 19:50:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:18.432321394Z 2026-04-26 19:50:18 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:50:20.807915741Z 2026-04-26 19:50:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:22.016315303Z 2026-04-26 19:50:22 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:50:25.807840625Z 2026-04-26 19:50:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:26.644162017Z 2026-04-26 19:50:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:29.734948952Z 2026-04-26 19:50:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:30.807543914Z 2026-04-26 19:50:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:34.260513516Z 2026-04-26 19:50:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:35.807422706Z 2026-04-26 19:50:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:37.796915682Z 2026-04-26 19:50:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:40.807706248Z 2026-04-26 19:50:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:42.257091561Z 2026-04-26 19:50:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:45.756983573Z 2026-04-26 19:50:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:45.798158118Z 2026-04-26 19:50:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:45.80755556Z 2026-04-26 19:50:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:50.111795126Z 2026-04-26 19:50:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:50.813934422Z 2026-04-26 19:50:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:53.427029947Z 2026-04-26 19:50:53 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:50:53.885778911Z 2026-04-26 19:50:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:50:55.808411769Z 2026-04-26 19:50:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:50:58.197019437Z 2026-04-26 19:50:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:00.808400825Z 2026-04-26 19:51:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:01.816245004Z 2026-04-26 19:51:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:05.807568113Z 2026-04-26 19:51:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:06.134820689Z 2026-04-26 19:51:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:09.847857484Z 2026-04-26 19:51:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:10.808320555Z 2026-04-26 19:51:10 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:13.42702362Z 2026-04-26 19:51:13 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:51:14.358733733Z 2026-04-26 19:51:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:15.798250854Z 2026-04-26 19:51:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:15.811192152Z 2026-04-26 19:51:15 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:17.83701904Z 2026-04-26 19:51:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:20.808055621Z 2026-04-26 19:51:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:22.399922008Z 2026-04-26 19:51:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:25.807697489Z 2026-04-26 19:51:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:25.809398326Z 2026-04-26 19:51:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:30.224560707Z 2026-04-26 19:51:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:30.80745454Z 2026-04-26 19:51:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:33.824520151Z 2026-04-26 19:51:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:33.824540781Z 2026-04-26 19:51:33 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:51:35.807567878Z 2026-04-26 19:51:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:38.315546243Z 2026-04-26 19:51:38 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:40.807974513Z 2026-04-26 19:51:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:41.77845619Z 2026-04-26 19:51:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:45.797929254Z 2026-04-26 19:51:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:45.808508081Z 2026-04-26 19:51:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:46.553805856Z 2026-04-26 19:51:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:49.798762367Z 2026-04-26 19:51:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:50.808550158Z 2026-04-26 19:51:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:53.425764192Z 2026-04-26 19:51:53 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:51:54.094576422Z 2026-04-26 19:51:54 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:51:55.80785692Z 2026-04-26 19:51:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:51:57.754046415Z 2026-04-26 19:51:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:52:00.807732174Z 2026-04-26 19:52:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:02.911658831Z 2026-04-26 19:52:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:52:05.808026366Z 2026-04-26 19:52:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:05.843229764Z 2026-04-26 19:52:05 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:52:10.556384753Z 2026-04-26 19:52:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:52:10.810484316Z 2026-04-26 19:52:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:13.380573006Z 2026-04-26 19:52:13 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:52:14.350656284Z 2026-04-26 19:52:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:52:15.798070706Z 2026-04-26 19:52:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:15.807384756Z 2026-04-26 19:52:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:18.334418341Z 2026-04-26 19:52:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:52:20.808250162Z 2026-04-26 19:52:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:22.115356486Z 2026-04-26 19:52:22 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:52:25.807701137Z 2026-04-26 19:52:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:26.149760141Z 2026-04-26 19:52:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:52:29.936111783Z 2026-04-26 19:52:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:52:30.807709844Z 2026-04-26 19:52:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:33.373593334Z 2026-04-26 19:52:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T19:52:33.373672186Z 2026-04-26 19:52:33 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T19:52:34.324128842Z 2026-04-26 19:52:34 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T19:52:34.444381817Z 2026-04-26 19:52:34 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:52:34.447212278Z 2026-04-26 19:52:34 [info] {"method":"GET","path":"/status","status":200,"duration":"227ms","ip":"::1"}
2026-04-26T19:52:35.625669257Z 2026-04-26 19:52:35 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:52:35.808884166Z 2026-04-26 19:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:40.807671947Z 2026-04-26 19:52:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:41.316407956Z 2026-04-26 19:52:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:52:41.375423325Z 2026-04-26 19:52:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T19:52:41.478423079Z 2026-04-26 19:52:41 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:52:41.820891403Z 2026-04-26 19:52:41 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:52:44.449296157Z 2026-04-26 19:52:44 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:52:45.797679659Z 2026-04-26 19:52:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:45.808146984Z 2026-04-26 19:52:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:49.204514791Z 2026-04-26 19:52:49 [info] {"method":"GET","path":"/status","status":200,"duration":"5ms","ip":"::1"}
2026-04-26T19:52:50.807685872Z 2026-04-26 19:52:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:52.335778638Z 2026-04-26 19:52:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:52:55.807920394Z 2026-04-26 19:52:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:52:57.415227704Z 2026-04-26 19:52:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:00.441544314Z 2026-04-26 19:53:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:00.815328071Z 2026-04-26 19:53:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:04.696279497Z 2026-04-26 19:53:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:05.808640824Z 2026-04-26 19:53:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:08.282531957Z 2026-04-26 19:53:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:10.808401197Z 2026-04-26 19:53:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:13.432358916Z 2026-04-26 19:53:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:15.798351368Z 2026-04-26 19:53:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:15.807168928Z 2026-04-26 19:53:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:16.393499595Z 2026-04-26 19:53:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:17.544968843Z 2026-04-26 19:53:17 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:53:17.789866299Z 2026-04-26 19:53:17 [info] {"method":"GET","path":"/calls","status":200,"duration":"260ms","ip":"::1"}
2026-04-26T19:53:17.832084786Z 2026-04-26 19:53:17 [info] {"method":"GET","path":"/messages","status":200,"duration":"299ms","ip":"::1"}
2026-04-26T19:53:18.126302723Z 2026-04-26 19:53:18 [info] Client connected: iLDHSBS6clIuxUYWAAAN
2026-04-26T19:53:18.42663663Z 2026-04-26 19:53:18 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket iLDHSBS6clIuxUYWAAAN
2026-04-26T19:53:18.945413355Z 2026-04-26 19:53:18 [info] Client connected: XwGU5F_s2h3rf4XPAAAP
2026-04-26T19:53:19.225273592Z 2026-04-26 19:53:19 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket XwGU5F_s2h3rf4XPAAAP
2026-04-26T19:53:20.81109702Z 2026-04-26 19:53:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:21.543630971Z 2026-04-26 19:53:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:21.933563855Z 2026-04-26 19:53:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:24.415161373Z 2026-04-26 19:53:24 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:53:25.808006661Z 2026-04-26 19:53:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:26.310614468Z 2026-04-26 19:53:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:28.936462878Z 2026-04-26 19:53:28 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:53:29.935721373Z 2026-04-26 19:53:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:30.807549879Z 2026-04-26 19:53:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:32.371051197Z 2026-04-26 19:53:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:34.295620469Z 2026-04-26 19:53:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:35.622381196Z 2026-04-26 19:53:35 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:53:35.80811871Z 2026-04-26 19:53:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:36.774618851Z 2026-04-26 19:53:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:37.932111939Z 2026-04-26 19:53:37 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:53:40.349685851Z 2026-04-26 19:53:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:40.808130228Z 2026-04-26 19:53:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:41.826403242Z 2026-04-26 19:53:41 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:53:42.267885025Z 2026-04-26 19:53:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:45.287794798Z 2026-04-26 19:53:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:45.79762555Z 2026-04-26 19:53:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:45.807810229Z 2026-04-26 19:53:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:45.931599981Z 2026-04-26 19:53:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:48.375079469Z 2026-04-26 19:53:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:50.390894983Z 2026-04-26 19:53:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:50.808279697Z 2026-04-26 19:53:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:52.830556549Z 2026-04-26 19:53:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:53.932182326Z 2026-04-26 19:53:53 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T19:53:55.605815522Z 2026-04-26 19:53:55 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:53:55.80802788Z 2026-04-26 19:53:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:53:56.342840996Z 2026-04-26 19:53:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:53:58.251669212Z 2026-04-26 19:53:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:00.595739384Z 2026-04-26 19:54:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:00.807552496Z 2026-04-26 19:54:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:01.919449904Z 2026-04-26 19:54:01 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:54:02.330060189Z 2026-04-26 19:54:02 [info] {"method":"GET","path":"/status","status":200,"duration":"11ms","ip":"::1"}
2026-04-26T19:54:04.35353768Z 2026-04-26 19:54:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:05.808864829Z 2026-04-26 19:54:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:06.288840945Z 2026-04-26 19:54:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:08.760656152Z 2026-04-26 19:54:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:09.932803135Z 2026-04-26 19:54:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:10.030431583Z 2026-04-26 19:54:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:10.033504439Z 2026-04-26 19:54:10 [info] [keepalive] ping OK
2026-04-26T19:54:10.807628868Z 2026-04-26 19:54:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:12.735489263Z 2026-04-26 19:54:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:14.253157523Z 2026-04-26 19:54:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:15.621740447Z 2026-04-26 19:54:15 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:54:15.798420505Z 2026-04-26 19:54:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:15.807715384Z 2026-04-26 19:54:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:16.673034523Z 2026-04-26 19:54:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:18.073206137Z 2026-04-26 19:54:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:20.311412803Z 2026-04-26 19:54:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:20.808280992Z 2026-04-26 19:54:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:21.920004376Z 2026-04-26 19:54:21 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:54:24.83366656Z 2026-04-26 19:54:24 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:25.807579823Z 2026-04-26 19:54:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:28.295285011Z 2026-04-26 19:54:28 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:54:30.808095449Z 2026-04-26 19:54:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:33.323228547Z 2026-04-26 19:54:33 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:54:35.718192962Z 2026-04-26 19:54:35 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:54:36.025701882Z 2026-04-26 19:54:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:36.382067721Z 2026-04-26 19:54:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:40.807232202Z 2026-04-26 19:54:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:40.97323379Z 2026-04-26 19:54:40 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:54:41.842759689Z 2026-04-26 19:54:41 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:54:44.476151359Z 2026-04-26 19:54:44 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:54:45.79803529Z 2026-04-26 19:54:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:45.806824129Z 2026-04-26 19:54:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:48.85713808Z 2026-04-26 19:54:48 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:54:49.788232797Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T19:54:49.846500796Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T19:54:50.807662143Z 2026-04-26 19:54:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:52.475071231Z 2026-04-26 19:54:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:54:53.403252901Z 2026-04-26 19:54:53 [info] Client disconnected: iLDHSBS6clIuxUYWAAAN
2026-04-26T19:54:54.178463692Z 2026-04-26 19:54:54 [info] Client disconnected: XwGU5F_s2h3rf4XPAAAP
2026-04-26T19:54:55.641916977Z 2026-04-26 19:54:55 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:54:55.80769659Z 2026-04-26 19:54:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:54:56.703282999Z 2026-04-26 19:54:56 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:55:00.37844583Z 2026-04-26 19:55:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:00.80739983Z 2026-04-26 19:55:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:01.848457596Z 2026-04-26 19:55:01 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:55:02.027400883Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T19:55:03.126146329Z 
2026-04-26T19:55:03.12618426Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T19:55:03.12619032Z > node dist/index.js
2026-04-26T19:55:03.12619383Z 
2026-04-26T19:55:04.772727968Z 2026-04-26 19:55:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:05.807743963Z 2026-04-26 19:55:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:07.333901625Z 2026-04-26 19:55:07 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T19:55:08.330443511Z 2026-04-26 19:55:08 [info] Firestore initialized successfully
2026-04-26T19:55:08.356554336Z 2026-04-26 19:55:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:08.535051075Z 2026-04-26 19:55:08 [info] ✅ Server running on http://localhost:10000
2026-04-26T19:55:08.535199008Z 2026-04-26 19:55:08 [info] Environment: production
2026-04-26T19:55:08.535380371Z 2026-04-26 19:55:08 [info] API URL: http://localhost:5000
2026-04-26T19:55:08.627447323Z 2026-04-26 19:55:08 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T19:55:09.396466554Z 2026-04-26 19:55:09 [error] Route / not found
2026-04-26T19:55:09.396490004Z Error: Route / not found
2026-04-26T19:55:09.396494915Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T19:55:09.396499285Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T19:55:09.396503815Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T19:55:09.396511935Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T19:55:09.396515695Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T19:55:09.396519105Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T19:55:09.396522755Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T19:55:09.396527025Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T19:55:09.396531235Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T19:55:09.396535355Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T19:55:09.401106569Z 2026-04-26 19:55:09 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-26T19:55:10.245277644Z 2026-04-26 19:55:10 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:10.247465219Z 2026-04-26 19:55:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:10.471972273Z 2026-04-26 19:55:10 [info] Client disconnected: FSTUhDSvDAz61vTOAAAL
2026-04-26T19:55:10.471991724Z 2026-04-26 19:55:10 [info] Client disconnected: RDliLm_ugKqrhxqzAAAJ
2026-04-26T19:55:10.808913895Z 2026-04-26 19:55:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:11.765226235Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T19:55:11.883178591Z [0;32m[1m==> [0m[1m[0m
2026-04-26T19:55:11.887805915Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T19:55:11.891962936Z [0;32m[1m==> [0m[1m[0m
2026-04-26T19:55:11.896032005Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T19:55:11.903566546Z [0;32m[1m==> [0m[1m[0m
2026-04-26T19:55:11.908029806Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
```
