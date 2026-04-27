# Render Deploy Diagnostics

Run: 24991306392
Commit: 8747eef67062e06e97ef4e9026cf34bf5aa84659
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7nk4pgg4nts73b7ohq0

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
  "updatedAt": "2026-04-27T11:05:56.425687Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7nk4pgg4nts73b7ohq0",
  "commit": {
    "id": "8747eef67062e06e97ef4e9026cf34bf5aa84659",
    "message": "Fix QR/WhatsApp connection, add multi-provider AI support (Gemini, Groq, OpenAI), update settings UI with tabs, and update documentation",
    "createdAt": "2026-04-27T11:02:48Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-27T11:03:02.677172Z",
  "updatedAt": "2026-04-27T11:05:56.424015Z",
  "startedAt": "2026-04-27T11:03:02.633942Z",
  "finishedAt": "2026-04-27T11:05:56.423751Z"
}
```

## App logs (last 4h)
```
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
2026-04-27T10:45:34.289648422Z 2026-04-27 10:45:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:45:34.302091174Z 2026-04-27 10:45:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:45:39.302818985Z 2026-04-27 10:45:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:45:44.301896006Z 2026-04-27 10:45:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:45:49.349598105Z 2026-04-27 10:45:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:45:54.301998628Z 2026-04-27 10:45:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:45:59.301819139Z 2026-04-27 10:45:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:04.289640939Z 2026-04-27 10:46:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:04.302291876Z 2026-04-27 10:46:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:09.302412685Z 2026-04-27 10:46:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:14.302099544Z 2026-04-27 10:46:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:19.302662645Z 2026-04-27 10:46:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:24.301940825Z 2026-04-27 10:46:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:29.302209129Z 2026-04-27 10:46:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:34.289967841Z 2026-04-27 10:46:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:34.302202577Z 2026-04-27 10:46:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:39.303412296Z 2026-04-27 10:46:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:44.301829626Z 2026-04-27 10:46:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:49.301993209Z 2026-04-27 10:46:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:54.302614695Z 2026-04-27 10:46:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:46:59.302841871Z 2026-04-27 10:46:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:04.290283477Z 2026-04-27 10:47:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:04.302241776Z 2026-04-27 10:47:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:09.302411042Z 2026-04-27 10:47:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:14.301954362Z 2026-04-27 10:47:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:19.302397055Z 2026-04-27 10:47:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:24.303923135Z 2026-04-27 10:47:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:29.301872107Z 2026-04-27 10:47:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:34.289961642Z 2026-04-27 10:47:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:34.302441854Z 2026-04-27 10:47:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:39.302905789Z 2026-04-27 10:47:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:44.303067657Z 2026-04-27 10:47:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:49.302500488Z 2026-04-27 10:47:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:54.302051831Z 2026-04-27 10:47:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:47:59.301678717Z 2026-04-27 10:47:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:04.292818621Z 2026-04-27 10:48:04 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:04.301660142Z 2026-04-27 10:48:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:09.304737126Z 2026-04-27 10:48:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:14.302001754Z 2026-04-27 10:48:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:19.301948819Z 2026-04-27 10:48:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:24.302680885Z 2026-04-27 10:48:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:29.301409752Z 2026-04-27 10:48:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:34.290305532Z 2026-04-27 10:48:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:34.301763339Z 2026-04-27 10:48:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:39.301940962Z 2026-04-27 10:48:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:44.303698225Z 2026-04-27 10:48:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:49.302438603Z 2026-04-27 10:48:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:54.303155451Z 2026-04-27 10:48:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:48:59.302035513Z 2026-04-27 10:48:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:04.29031829Z 2026-04-27 10:49:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:04.302498695Z 2026-04-27 10:49:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:09.302095885Z 2026-04-27 10:49:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:14.301695957Z 2026-04-27 10:49:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:19.302393536Z 2026-04-27 10:49:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:24.302138092Z 2026-04-27 10:49:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:29.303756455Z 2026-04-27 10:49:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:34.290070296Z 2026-04-27 10:49:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:34.302292892Z 2026-04-27 10:49:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:39.302261474Z 2026-04-27 10:49:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:44.30234893Z 2026-04-27 10:49:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:49.304620311Z 2026-04-27 10:49:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:54.301796775Z 2026-04-27 10:49:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:49:59.302526898Z 2026-04-27 10:49:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:04.290703088Z 2026-04-27 10:50:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:04.302341999Z 2026-04-27 10:50:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:09.301830222Z 2026-04-27 10:50:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:14.302127896Z 2026-04-27 10:50:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:19.302377439Z 2026-04-27 10:50:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:24.301992167Z 2026-04-27 10:50:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:29.30224733Z 2026-04-27 10:50:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:34.290286369Z 2026-04-27 10:50:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:34.301647103Z 2026-04-27 10:50:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:39.303773205Z 2026-04-27 10:50:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:44.30164693Z 2026-04-27 10:50:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:49.301856275Z 2026-04-27 10:50:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:54.306204583Z 2026-04-27 10:50:54 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:50:59.301755062Z 2026-04-27 10:50:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:04.291557986Z 2026-04-27 10:51:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:04.302254184Z 2026-04-27 10:51:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:09.302494291Z 2026-04-27 10:51:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:14.302069173Z 2026-04-27 10:51:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:19.303146451Z 2026-04-27 10:51:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:24.30261833Z 2026-04-27 10:51:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:29.301932595Z 2026-04-27 10:51:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:34.295987188Z 2026-04-27 10:51:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:34.302964523Z 2026-04-27 10:51:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:39.302371141Z 2026-04-27 10:51:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:44.302112788Z 2026-04-27 10:51:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:49.302662076Z 2026-04-27 10:51:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:54.302085345Z 2026-04-27 10:51:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:51:59.302216133Z 2026-04-27 10:51:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:04.289801437Z 2026-04-27 10:52:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:04.301530231Z 2026-04-27 10:52:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:09.301422334Z 2026-04-27 10:52:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:14.302601389Z 2026-04-27 10:52:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:19.303793045Z 2026-04-27 10:52:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:24.30212115Z 2026-04-27 10:52:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:29.302560738Z 2026-04-27 10:52:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:34.290026712Z 2026-04-27 10:52:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:34.302141335Z 2026-04-27 10:52:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:39.301996689Z 2026-04-27 10:52:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:44.301828233Z 2026-04-27 10:52:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:49.302097388Z 2026-04-27 10:52:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:54.302016185Z 2026-04-27 10:52:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:52:59.302030395Z 2026-04-27 10:52:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:04.289434189Z 2026-04-27 10:53:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:04.30184647Z 2026-04-27 10:53:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:09.301626504Z 2026-04-27 10:53:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:14.30264225Z 2026-04-27 10:53:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:19.30220972Z 2026-04-27 10:53:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:24.302066628Z 2026-04-27 10:53:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:29.302640434Z 2026-04-27 10:53:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:34.290719807Z 2026-04-27 10:53:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:34.302315408Z 2026-04-27 10:53:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:39.302544676Z 2026-04-27 10:53:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:44.302314383Z 2026-04-27 10:53:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:49.301835054Z 2026-04-27 10:53:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:54.301994931Z 2026-04-27 10:53:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:53:59.302035394Z 2026-04-27 10:53:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:04.292463839Z 2026-04-27 10:54:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:04.302251104Z 2026-04-27 10:54:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:09.302505475Z 2026-04-27 10:54:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:14.301973136Z 2026-04-27 10:54:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:19.302233948Z 2026-04-27 10:54:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:24.302648134Z 2026-04-27 10:54:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:29.303588784Z 2026-04-27 10:54:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:34.290214186Z 2026-04-27 10:54:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:34.301700533Z 2026-04-27 10:54:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:39.302935681Z 2026-04-27 10:54:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:44.302380435Z 2026-04-27 10:54:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:49.302345812Z 2026-04-27 10:54:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:54.301714544Z 2026-04-27 10:54:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:54:59.302413579Z 2026-04-27 10:54:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:04.289861754Z 2026-04-27 10:55:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:04.301977587Z 2026-04-27 10:55:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:09.303929365Z 2026-04-27 10:55:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:14.302254473Z 2026-04-27 10:55:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:19.30328346Z 2026-04-27 10:55:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:24.301928016Z 2026-04-27 10:55:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:29.30244172Z 2026-04-27 10:55:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:34.290381359Z 2026-04-27 10:55:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:34.301483257Z 2026-04-27 10:55:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:39.301648432Z 2026-04-27 10:55:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:44.303000098Z 2026-04-27 10:55:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:49.301694917Z 2026-04-27 10:55:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:54.30291522Z 2026-04-27 10:55:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:55:59.304240885Z 2026-04-27 10:55:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:04.290214007Z 2026-04-27 10:56:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:04.302143575Z 2026-04-27 10:56:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:09.305470292Z 2026-04-27 10:56:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:14.30281846Z 2026-04-27 10:56:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:19.307570573Z 2026-04-27 10:56:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:24.304924882Z 2026-04-27 10:56:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:29.302304561Z 2026-04-27 10:56:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:34.290375908Z 2026-04-27 10:56:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:34.302409689Z 2026-04-27 10:56:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:39.301943453Z 2026-04-27 10:56:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:44.302608756Z 2026-04-27 10:56:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:49.302127301Z 2026-04-27 10:56:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:54.302015225Z 2026-04-27 10:56:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:56:55.695908608Z 2026-04-27 10:56:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T10:56:55.751246274Z 2026-04-27 10:56:55 [info] [keepalive] ping OK
2026-04-27T10:56:59.302086814Z 2026-04-27 10:56:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:04.290644255Z 2026-04-27 10:57:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:04.302341758Z 2026-04-27 10:57:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:09.30169688Z 2026-04-27 10:57:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:14.302243821Z 2026-04-27 10:57:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:19.302134877Z 2026-04-27 10:57:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:24.302531376Z 2026-04-27 10:57:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:29.302382971Z 2026-04-27 10:57:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:34.289725334Z 2026-04-27 10:57:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:34.302230297Z 2026-04-27 10:57:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:39.303393066Z 2026-04-27 10:57:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:44.301982571Z 2026-04-27 10:57:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:49.302445114Z 2026-04-27 10:57:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:54.302198559Z 2026-04-27 10:57:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:57:59.305314158Z 2026-04-27 10:57:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:04.290219121Z 2026-04-27 10:58:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:04.301934865Z 2026-04-27 10:58:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:09.301874796Z 2026-04-27 10:58:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:14.30192429Z 2026-04-27 10:58:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:19.302536278Z 2026-04-27 10:58:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:24.30248874Z 2026-04-27 10:58:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:29.301476048Z 2026-04-27 10:58:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:34.290247631Z 2026-04-27 10:58:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:34.301999306Z 2026-04-27 10:58:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:39.301815365Z 2026-04-27 10:58:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:44.302029595Z 2026-04-27 10:58:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:49.301799604Z 2026-04-27 10:58:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:54.301738168Z 2026-04-27 10:58:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:58:59.301681112Z 2026-04-27 10:58:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:04.292351845Z 2026-04-27 10:59:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:04.302692674Z 2026-04-27 10:59:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:09.301995043Z 2026-04-27 10:59:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:14.301821676Z 2026-04-27 10:59:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:19.302177972Z 2026-04-27 10:59:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:24.305226356Z 2026-04-27 10:59:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:29.302385542Z 2026-04-27 10:59:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:34.301768654Z 2026-04-27 10:59:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:39.301962088Z 2026-04-27 10:59:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:44.302551701Z 2026-04-27 10:59:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:49.301913865Z 2026-04-27 10:59:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:54.302010007Z 2026-04-27 10:59:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T10:59:59.302222602Z 2026-04-27 10:59:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T11:00:04.302052719Z 2026-04-27 11:00:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T11:00:09.302364617Z 2026-04-27 11:00:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.135"}
2026-04-27T11:00:14.302375058Z 2026-04-27 11:00:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.135"}
2026-04-27T11:00:52.502133802Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-27T11:00:53.617320637Z 
2026-04-27T11:00:53.617352049Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-27T11:00:53.617357789Z > node dist/index.js
2026-04-27T11:00:53.61736131Z 
2026-04-27T11:00:58.408091649Z 2026-04-27 11:00:58 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-27T11:00:59.598238755Z 2026-04-27 11:00:59 [info] Firestore initialized successfully
2026-04-27T11:00:59.60293609Z 2026-04-27 11:00:59 [info] ✅ Server running on http://localhost:10000
2026-04-27T11:00:59.603114301Z 2026-04-27 11:00:59 [info] Environment: production
2026-04-27T11:00:59.603288572Z 2026-04-27 11:00:59 [info] API URL: http://localhost:5000
2026-04-27T11:00:59.603484824Z 2026-04-27 11:00:59 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-27T11:01:01.591244759Z 2026-04-27 11:01:01 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:01.594052029Z 2026-04-27 11:01:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:02.474761905Z 2026-04-27 11:01:02 [info] Client connected: DPBL37rIENLI5NtRAAAB
2026-04-27T11:01:04.801642576Z 2026-04-27 11:01:04 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-27T11:01:04.8030238Z 2026-04-27 11:01:04 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket DPBL37rIENLI5NtRAAAB
2026-04-27T11:01:05.093237011Z 2026-04-27 11:01:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:05.175304185Z 2026-04-27 11:01:05 [info] Client connected: YMn55sm7xjDsURO5AAAD
2026-04-27T11:01:06.003240459Z 2026-04-27 11:01:06 [info] {"method":"GET","path":"/messages","status":200,"duration":"790ms","ip":"::1"}
2026-04-27T11:01:06.099603083Z 2026-04-27 11:01:06 [info] {"method":"GET","path":"/calls","status":200,"duration":"872ms","ip":"::1"}
2026-04-27T11:01:06.100396062Z 2026-04-27 11:01:06 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket YMn55sm7xjDsURO5AAAD
2026-04-27T11:01:06.101646908Z 2026-04-27 11:01:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:06.400956062Z 2026-04-27 11:01:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:06.58397453Z 2026-04-27 11:01:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:06.970574666Z 2026-04-27 11:01:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:07.303306834Z 2026-04-27 11:01:07 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T11:01:07.606979464Z 2026-04-27 11:01:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:07.895875785Z 2026-04-27 11:01:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:08.255640178Z 2026-04-27 11:01:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:08.561303379Z 2026-04-27 11:01:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:08.867823602Z 2026-04-27 11:01:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:09.694535661Z 2026-04-27 11:01:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:11.584866296Z 2026-04-27 11:01:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:13.931735204Z 2026-04-27 11:01:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:16.584089841Z 2026-04-27 11:01:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:17.688925125Z 2026-04-27 11:01:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:21.585849849Z 2026-04-27 11:01:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:22.014832845Z 2026-04-27 11:01:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:25.692439892Z 2026-04-27 11:01:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:26.584026678Z 2026-04-27 11:01:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:30.004120714Z 2026-04-27 11:01:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:01:31.582895739Z 2026-04-27 11:01:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:31.583616483Z 2026-04-27 11:01:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:36.583547377Z 2026-04-27 11:01:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:41.582851673Z 2026-04-27 11:01:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:46.583329679Z 2026-04-27 11:01:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:51.584574532Z 2026-04-27 11:01:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:01:56.583041464Z 2026-04-27 11:01:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:01.591133531Z 2026-04-27 11:02:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:01.594224699Z 2026-04-27 11:02:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:06.583245606Z 2026-04-27 11:02:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:11.583855166Z 2026-04-27 11:02:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:12.62906291Z 2026-04-27 11:02:12 [info] Client disconnected: DPBL37rIENLI5NtRAAAB
2026-04-27T11:02:15.230940141Z 2026-04-27 11:02:15 [info] Client disconnected: YMn55sm7xjDsURO5AAAD
2026-04-27T11:02:16.583031159Z 2026-04-27 11:02:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:21.583077873Z 2026-04-27 11:02:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:26.583729664Z 2026-04-27 11:02:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:31.583696792Z 2026-04-27 11:02:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:31.584529363Z 2026-04-27 11:02:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:36.583152789Z 2026-04-27 11:02:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:41.584130168Z 2026-04-27 11:02:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:46.583066401Z 2026-04-27 11:02:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:51.583875578Z 2026-04-27 11:02:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:02:56.584708165Z 2026-04-27 11:02:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:01.583240592Z 2026-04-27 11:03:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:01.584107765Z 2026-04-27 11:03:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:06.584117461Z 2026-04-27 11:03:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:11.583139306Z 2026-04-27 11:03:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:16.583163842Z 2026-04-27 11:03:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:21.583440371Z 2026-04-27 11:03:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:26.583906252Z 2026-04-27 11:03:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:31.584814559Z 2026-04-27 11:03:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:31.58483735Z 2026-04-27 11:03:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:36.583570974Z 2026-04-27 11:03:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:41.58301501Z 2026-04-27 11:03:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:46.583733453Z 2026-04-27 11:03:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:51.583551121Z 2026-04-27 11:03:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:03:56.583612542Z 2026-04-27 11:03:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:01.583832602Z 2026-04-27 11:04:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:01.584645542Z 2026-04-27 11:04:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:06.584090035Z 2026-04-27 11:04:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:11.583324454Z 2026-04-27 11:04:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:16.583789777Z 2026-04-27 11:04:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:21.583085178Z 2026-04-27 11:04:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:26.583171897Z 2026-04-27 11:04:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:31.583572784Z 2026-04-27 11:04:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:31.584446238Z 2026-04-27 11:04:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:36.583616819Z 2026-04-27 11:04:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:41.584012694Z 2026-04-27 11:04:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:46.58359534Z 2026-04-27 11:04:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:51.584710078Z 2026-04-27 11:04:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:04:56.583419748Z 2026-04-27 11:04:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:01.583267557Z 2026-04-27 11:05:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:01.584059136Z 2026-04-27 11:05:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:06.583735134Z 2026-04-27 11:05:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:11.583350387Z 2026-04-27 11:05:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:16.582909697Z 2026-04-27 11:05:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:21.583174009Z 2026-04-27 11:05:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:26.58344712Z 2026-04-27 11:05:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:31.583850089Z 2026-04-27 11:05:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:31.584650928Z 2026-04-27 11:05:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:33.270812477Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-27T11:05:33.35016911Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-27T11:05:36.582989427Z 2026-04-27 11:05:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:41.5836222Z 2026-04-27 11:05:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:45.860456866Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-27T11:05:46.582858467Z 2026-04-27 11:05:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:46.878020424Z 
2026-04-27T11:05:46.878049747Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-27T11:05:46.878058487Z > node dist/index.js
2026-04-27T11:05:46.878061828Z 
2026-04-27T11:05:51.583730504Z 2026-04-27 11:05:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:51.651214325Z 2026-04-27 11:05:51 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-27T11:05:52.753816349Z 2026-04-27 11:05:52 [info] Firestore initialized successfully
2026-04-27T11:05:52.757935393Z 2026-04-27 11:05:52 [info] ✅ Server running on http://localhost:10000
2026-04-27T11:05:52.758111367Z 2026-04-27 11:05:52 [info] Environment: production
2026-04-27T11:05:52.758272319Z 2026-04-27 11:05:52 [info] API URL: http://localhost:5000
2026-04-27T11:05:52.758464585Z 2026-04-27 11:05:52 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-27T11:05:53.011914823Z 2026-04-27 11:05:53 [error] Route / not found
2026-04-27T11:05:53.011932234Z Error: Route / not found
2026-04-27T11:05:53.011936154Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T11:05:53.011939605Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T11:05:53.011943045Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T11:05:53.011946035Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T11:05:53.011948646Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T11:05:53.011951276Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T11:05:53.011953836Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T11:05:53.011956886Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T11:05:53.011959676Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T11:05:53.011962436Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T11:05:53.017169115Z 2026-04-27 11:05:53 [info] {"method":"HEAD","path":"/","status":404,"duration":"7ms","ip":"::1"}
2026-04-27T11:05:53.662432615Z 2026-04-27 11:05:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:05:53.664438092Z 2026-04-27 11:05:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:05:56.58347424Z 2026-04-27 11:05:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:05:56.604260546Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-27T11:05:56.736754844Z [0;32m[1m==> [0m[1m[0m
2026-04-27T11:05:56.739408677Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-27T11:05:56.741878776Z [0;32m[1m==> [0m[1m[0m
2026-04-27T11:05:56.744179171Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-27T11:05:56.746539027Z [0;32m[1m==> [0m[1m[0m
2026-04-27T11:05:56.749014437Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-27T11:05:57.956065646Z 2026-04-27 11:05:57 [error] Route / not found
2026-04-27T11:05:57.956082317Z Error: Route / not found
2026-04-27T11:05:57.956085447Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T11:05:57.956087977Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T11:05:57.956090258Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T11:05:57.956092898Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T11:05:57.956094928Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T11:05:57.956096668Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T11:05:57.956098358Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T11:05:57.956100029Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T11:05:57.95611498Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T11:05:57.95611705Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T11:05:57.956952105Z 2026-04-27 11:05:57 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-27T11:05:58.661567235Z 2026-04-27 11:05:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:01.583523213Z 2026-04-27 11:06:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:03.66216555Z 2026-04-27 11:06:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:03.663557839Z 2026-04-27 11:06:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:06.583108477Z 2026-04-27 11:06:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:08.662611584Z 2026-04-27 11:06:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
```
