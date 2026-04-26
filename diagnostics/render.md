# Render Deploy Diagnostics

Run: 24965786290
Commit: 0bd4241192de4834f9878fcc8b415530ac4e3ee3
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n6uogk1i2s739gsi30

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
  "updatedAt": "2026-04-26T20:05:09.244602Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n6uogk1i2s739gsi30",
  "commit": {
    "id": "0bd4241192de4834f9878fcc8b415530ac4e3ee3",
    "message": "fix: resolve ESLint empty block statement error in baileyService",
    "createdAt": "2026-04-26T20:02:31Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T20:02:43.061385Z",
  "updatedAt": "2026-04-26T20:05:09.239919Z",
  "startedAt": "2026-04-26T20:02:42.982605Z",
  "finishedAt": "2026-04-26T20:05:09.239726Z"
}
```

## App logs (last 4h)
```
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
2026-04-26T19:55:04.772727968Z 2026-04-26 19:55:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:05.807743963Z 2026-04-26 19:55:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:08.356554336Z 2026-04-26 19:55:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
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
2026-04-26T19:55:14.693268585Z Error: Route / not found
2026-04-26T19:55:14.693272065Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T19:55:14.693275105Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T19:55:14.693277795Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T19:55:14.693281675Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T19:55:14.693284065Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T19:55:14.693286385Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T19:55:14.693301226Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T19:55:14.693303966Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T19:55:14.693306236Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T19:55:14.693308696Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T19:55:14.694153013Z 2026-04-26 19:55:14 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:15.248697547Z 2026-04-26 19:55:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:15.61996178Z 2026-04-26 19:55:15 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T19:55:15.620006211Z 2026-04-26 19:55:15 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T19:55:15.807708226Z 2026-04-26 19:55:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:16.430647102Z 2026-04-26 19:55:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:17.620809635Z 2026-04-26 19:55:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T19:55:17.715047611Z 2026-04-26 19:55:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:55:18.136734874Z 2026-04-26 19:55:18 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:55:20.244055533Z 2026-04-26 19:55:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:20.247078496Z 2026-04-26 19:55:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:20.809044101Z 2026-04-26 19:55:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:20.954286326Z 2026-04-26 19:55:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:21.841753207Z 2026-04-26 19:55:21 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T19:55:21.843681779Z 2026-04-26 19:55:21 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T19:55:24.433720985Z 2026-04-26 19:55:24 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:25.24730542Z 2026-04-26 19:55:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:25.817007299Z 2026-04-26 19:55:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:26.138186604Z 2026-04-26 19:55:26 [info] Client connected: g0Bs0tZyUhU5rG0aAAAB
2026-04-26T19:55:26.467184434Z 2026-04-26 19:55:26 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket g0Bs0tZyUhU5rG0aAAAB
2026-04-26T19:55:27.319023746Z 2026-04-26 19:55:27 [info] Client connected: xch0uMYquhrTsVdbAAAD
2026-04-26T19:55:28.134703325Z 2026-04-26 19:55:28 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket xch0uMYquhrTsVdbAAAD
2026-04-26T19:55:28.87527325Z 2026-04-26 19:55:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:30.247155787Z 2026-04-26 19:55:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:30.80741657Z 2026-04-26 19:55:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:32.449780241Z 2026-04-26 19:55:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:35.247577343Z 2026-04-26 19:55:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:35.807899478Z 2026-04-26 19:55:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:36.894824167Z 2026-04-26 19:55:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:37.842298174Z 2026-04-26 19:55:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T19:55:37.941323052Z 2026-04-26 19:55:37 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:55:38.373861009Z 2026-04-26 19:55:38 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T19:55:40.255275169Z 2026-04-26 19:55:40 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:40.59994229Z 2026-04-26 19:55:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:40.807823923Z 2026-04-26 19:55:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:45.148409199Z 2026-04-26 19:55:45 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T19:55:45.247708649Z 2026-04-26 19:55:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:45.808306901Z 2026-04-26 19:55:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:48.573349444Z 2026-04-26 19:55:48 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:55:50.243936136Z 2026-04-26 19:55:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:50.246781545Z 2026-04-26 19:55:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:50.80841048Z 2026-04-26 19:55:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:53.011030635Z 2026-04-26 19:55:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:55:55.247445932Z 2026-04-26 19:55:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:55:55.808103621Z 2026-04-26 19:55:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:55:56.574475305Z 2026-04-26 19:55:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:00.247755331Z 2026-04-26 19:56:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:00.808244932Z 2026-04-26 19:56:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:56:01.234236837Z 2026-04-26 19:56:01 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:56:04.532681392Z 2026-04-26 19:56:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:05.248529128Z 2026-04-26 19:56:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:05.808086856Z 2026-04-26 19:56:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.70"}
2026-04-26T19:56:09.418709971Z 2026-04-26 19:56:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:10.247020477Z 2026-04-26 19:56:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:12.536768368Z 2026-04-26 19:56:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:15.247160289Z 2026-04-26 19:56:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:16.894242686Z 2026-04-26 19:56:16 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:56:20.248411583Z 2026-04-26 19:56:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:20.248433953Z 2026-04-26 19:56:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:20.505505235Z 2026-04-26 19:56:20 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:56:25.069722759Z 2026-04-26 19:56:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:25.247383678Z 2026-04-26 19:56:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:28.474157157Z 2026-04-26 19:56:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:30.247482416Z 2026-04-26 19:56:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:33.038249227Z 2026-04-26 19:56:33 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:56:35.247344808Z 2026-04-26 19:56:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:36.491810733Z 2026-04-26 19:56:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:40.255326135Z 2026-04-26 19:56:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:41.056918332Z 2026-04-26 19:56:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:44.503132776Z 2026-04-26 19:56:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:45.247604339Z 2026-04-26 19:56:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:49.044422344Z 2026-04-26 19:56:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:50.243006096Z 2026-04-26 19:56:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:50.246902736Z 2026-04-26 19:56:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:52.455062916Z 2026-04-26 19:56:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:56:55.247247173Z 2026-04-26 19:56:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:56:57.212954192Z 2026-04-26 19:56:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:00.247282733Z 2026-04-26 19:57:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:00.453175552Z 2026-04-26 19:57:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:05.011871675Z 2026-04-26 19:57:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:05.247199269Z 2026-04-26 19:57:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:08.466748893Z 2026-04-26 19:57:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:10.247139324Z 2026-04-26 19:57:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:13.091849038Z 2026-04-26 19:57:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:15.247287623Z 2026-04-26 19:57:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:16.457149285Z 2026-04-26 19:57:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:20.24351944Z 2026-04-26 19:57:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:20.247268997Z 2026-04-26 19:57:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:21.969195247Z 2026-04-26 19:57:21 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:57:24.45124265Z 2026-04-26 19:57:24 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:57:25.247439804Z 2026-04-26 19:57:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:29.655274933Z 2026-04-26 19:57:29 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:57:30.247459216Z 2026-04-26 19:57:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:32.471591851Z 2026-04-26 19:57:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:35.248098381Z 2026-04-26 19:57:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:36.953201204Z 2026-04-26 19:57:36 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:57:40.247158822Z 2026-04-26 19:57:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:40.455992281Z 2026-04-26 19:57:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:45.169784091Z 2026-04-26 19:57:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:45.247387505Z 2026-04-26 19:57:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:48.595926953Z 2026-04-26 19:57:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:50.243555784Z 2026-04-26 19:57:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:50.247681119Z 2026-04-26 19:57:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:53.172064574Z 2026-04-26 19:57:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:57:55.247491782Z 2026-04-26 19:57:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:57:56.431833588Z 2026-04-26 19:57:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:00.247976048Z 2026-04-26 19:58:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:01.336375632Z 2026-04-26 19:58:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:04.587367494Z 2026-04-26 19:58:04 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T19:58:05.24933441Z 2026-04-26 19:58:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:09.303460186Z 2026-04-26 19:58:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:10.247488216Z 2026-04-26 19:58:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:12.466588983Z 2026-04-26 19:58:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:15.247244102Z 2026-04-26 19:58:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:17.087923707Z 2026-04-26 19:58:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:20.243781603Z 2026-04-26 19:58:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:20.24656564Z 2026-04-26 19:58:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:20.434479679Z 2026-04-26 19:58:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:25.013715468Z 2026-04-26 19:58:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:25.247601001Z 2026-04-26 19:58:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:28.516206801Z 2026-04-26 19:58:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:30.24808629Z 2026-04-26 19:58:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:33.074909957Z 2026-04-26 19:58:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:35.248134609Z 2026-04-26 19:58:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:36.517174892Z 2026-04-26 19:58:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:40.248425502Z 2026-04-26 19:58:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:41.074864035Z 2026-04-26 19:58:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:44.510974253Z 2026-04-26 19:58:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:45.247951678Z 2026-04-26 19:58:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:46.629816968Z 2026-04-26 19:58:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T19:58:49.033548603Z 2026-04-26 19:58:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:50.243374749Z 2026-04-26 19:58:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:50.247371521Z 2026-04-26 19:58:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:52.482985183Z 2026-04-26 19:58:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:58:55.253044501Z 2026-04-26 19:58:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:58:57.176643125Z 2026-04-26 19:58:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:59:00.247935729Z 2026-04-26 19:59:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:00.870231798Z 2026-04-26 19:59:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:59:05.247356939Z 2026-04-26 19:59:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:05.312438545Z 2026-04-26 19:59:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:59:08.4924326Z 2026-04-26 19:59:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:59:10.247977792Z 2026-04-26 19:59:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:13.335290702Z 2026-04-26 19:59:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:59:15.247615724Z 2026-04-26 19:59:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:16.410021564Z 2026-04-26 19:59:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:59:20.243818664Z 2026-04-26 19:59:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:20.246745934Z 2026-04-26 19:59:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:20.73643946Z 2026-04-26 19:59:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:59:24.437437091Z 2026-04-26 19:59:24 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:59:25.24719209Z 2026-04-26 19:59:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:30.247742938Z 2026-04-26 19:59:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:35.247559089Z 2026-04-26 19:59:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:40.247343248Z 2026-04-26 19:59:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:42.152590542Z 2026-04-26 19:59:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T19:59:45.247704078Z 2026-04-26 19:59:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:50.243303449Z 2026-04-26 19:59:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:50.247379753Z 2026-04-26 19:59:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T19:59:55.24819075Z 2026-04-26 19:59:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:00.248184939Z 2026-04-26 20:00:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:05.248010654Z 2026-04-26 20:00:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:09.659964517Z 2026-04-26 20:00:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:00:10.247177075Z 2026-04-26 20:00:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:15.248063949Z 2026-04-26 20:00:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:16.771069173Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T20:00:16.884348021Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T20:00:20.244603634Z 2026-04-26 20:00:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:20.247370411Z 2026-04-26 20:00:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:25.247074918Z 2026-04-26 20:00:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:30.247221535Z 2026-04-26 20:00:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:35.247436062Z 2026-04-26 20:00:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:36.693147725Z 2026-04-26 20:00:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:00:40.247269319Z 2026-04-26 20:00:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:45.247649396Z 2026-04-26 20:00:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:50.243284516Z 2026-04-26 20:00:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:50.247208966Z 2026-04-26 20:00:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:00:55.247837247Z 2026-04-26 20:00:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:00.247564439Z 2026-04-26 20:01:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:01.598665038Z 2026-04-26 20:01:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:01:05.24785881Z 2026-04-26 20:01:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:10.248761374Z 2026-04-26 20:01:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:15.247562453Z 2026-04-26 20:01:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:20.243772398Z 2026-04-26 20:01:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:20.247434643Z 2026-04-26 20:01:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:25.24718886Z 2026-04-26 20:01:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:28.426171525Z 2026-04-26 20:01:28 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:01:30.247740282Z 2026-04-26 20:01:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:35.246972605Z 2026-04-26 20:01:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:40.247017765Z 2026-04-26 20:01:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:45.247128895Z 2026-04-26 20:01:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:49.21735014Z 2026-04-26 20:01:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:01:50.243268832Z 2026-04-26 20:01:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:50.247294784Z 2026-04-26 20:01:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:01:55.252091048Z 2026-04-26 20:01:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:00.249175013Z 2026-04-26 20:02:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:05.247455831Z 2026-04-26 20:02:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:10.247142817Z 2026-04-26 20:02:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:14.763831876Z 2026-04-26 20:02:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:02:15.248099457Z 2026-04-26 20:02:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:20.243644145Z 2026-04-26 20:02:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:20.246489684Z 2026-04-26 20:02:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:25.247081875Z 2026-04-26 20:02:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:30.246994041Z 2026-04-26 20:02:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:35.247593931Z 2026-04-26 20:02:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:40.250393874Z 2026-04-26 20:02:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:41.081995294Z 2026-04-26 20:02:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:02:45.247308826Z 2026-04-26 20:02:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:50.243726146Z 2026-04-26 20:02:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:50.246595325Z 2026-04-26 20:02:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:02:55.24763326Z 2026-04-26 20:02:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:00.248282625Z 2026-04-26 20:03:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:05.248337806Z 2026-04-26 20:03:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:07.31272526Z 2026-04-26 20:03:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:03:10.247860767Z 2026-04-26 20:03:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:15.247804194Z 2026-04-26 20:03:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:20.243351221Z 2026-04-26 20:03:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:20.247238561Z 2026-04-26 20:03:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:25.247931722Z 2026-04-26 20:03:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:25.594910444Z 2026-04-26 20:03:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:03:30.24758338Z 2026-04-26 20:03:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:34.582613437Z 2026-04-26 20:03:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:03:35.246924272Z 2026-04-26 20:03:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:40.247285033Z 2026-04-26 20:03:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:45.24750867Z 2026-04-26 20:03:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:50.243416838Z 2026-04-26 20:03:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:50.24741925Z 2026-04-26 20:03:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:03:55.248426412Z 2026-04-26 20:03:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:00.247269558Z 2026-04-26 20:04:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:05.248058323Z 2026-04-26 20:04:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:10.24707166Z 2026-04-26 20:04:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:15.247796232Z 2026-04-26 20:04:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:20.243338096Z 2026-04-26 20:04:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:20.247377809Z 2026-04-26 20:04:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:22.535986038Z 2026-04-26 20:04:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:04:25.24722082Z 2026-04-26 20:04:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:30.246945199Z 2026-04-26 20:04:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:31.043566597Z 2026-04-26 20:04:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:04:34.699678972Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T20:04:34.760265356Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T20:04:35.249877871Z 2026-04-26 20:04:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:40.247144317Z 2026-04-26 20:04:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:45.247651378Z 2026-04-26 20:04:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:48.978682226Z 2026-04-26 20:04:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:04:49.072278767Z 2026-04-26 20:04:49 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:04:49.621469378Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T20:04:50.243206087Z 2026-04-26 20:04:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:50.247189999Z 2026-04-26 20:04:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:50.930993345Z 
2026-04-26T20:04:50.931021587Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T20:04:50.931026457Z > node dist/index.js
2026-04-26T20:04:50.931028447Z 
2026-04-26T20:04:55.247404362Z 2026-04-26 20:04:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:56.316233918Z 2026-04-26 20:04:56 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T20:04:57.411195252Z 2026-04-26 20:04:57 [info] Firestore initialized successfully
2026-04-26T20:04:57.416009549Z 2026-04-26 20:04:57 [info] ✅ Server running on http://localhost:10000
2026-04-26T20:04:57.416192212Z 2026-04-26 20:04:57 [info] Environment: production
2026-04-26T20:04:57.416479131Z 2026-04-26 20:04:57 [info] API URL: http://localhost:5000
2026-04-26T20:04:57.416717416Z 2026-04-26 20:04:57 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T20:04:58.24030528Z 2026-04-26 20:04:58 [error] Route / not found
2026-04-26T20:04:58.240326502Z Error: Route / not found
2026-04-26T20:04:58.240330062Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:04:58.240333162Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:04:58.240337062Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:04:58.240340213Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:04:58.240343293Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:04:58.240346043Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:04:58.240348613Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:04:58.240354694Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:04:58.240357504Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:04:58.240360214Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:04:58.244473875Z 2026-04-26 20:04:58 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T20:05:00.247514552Z 2026-04-26 20:05:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:03.248115669Z 2026-04-26 20:05:03 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:05:05.127231045Z 2026-04-26 20:05:05 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:05:05.128140815Z 2026-04-26 20:05:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:05:05.248213983Z 2026-04-26 20:05:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:05.333488233Z 2026-04-26 20:05:05 [info] Client disconnected: xch0uMYquhrTsVdbAAAD
2026-04-26T20:05:05.334183987Z 2026-04-26 20:05:05 [info] Client disconnected: g0Bs0tZyUhU5rG0aAAAB
2026-04-26T20:05:09.401463174Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:05:09.482717105Z 2026-04-26 20:05:09 [error] Route / not found
2026-04-26T20:05:09.482737726Z Error: Route / not found
2026-04-26T20:05:09.482742756Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:05:09.482747637Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:05:09.482752267Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:05:09.482756717Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:05:09.482760417Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:05:09.482764268Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:05:09.482767918Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:05:09.482771678Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:05:09.48279325Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:05:09.48279624Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:05:09.48445756Z 2026-04-26 20:05:09 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T20:05:09.532921149Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:05:09.53934362Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:05:09.543640695Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:05:09.548613667Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:05:09.552442209Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:05:09.556499638Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:05:10.127193345Z 2026-04-26 20:05:10 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:05:10.24727633Z 2026-04-26 20:05:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:15.125716679Z 2026-04-26 20:05:15 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:05:15.247280894Z 2026-04-26 20:05:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:20.124263806Z 2026-04-26 20:05:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:05:20.247768618Z 2026-04-26 20:05:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:25.124621982Z 2026-04-26 20:05:25 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:05:25.248097888Z 2026-04-26 20:05:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
```
