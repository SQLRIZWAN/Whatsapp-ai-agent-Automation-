# Render Deploy Diagnostics

Run: 24958220815
Commit: 4ca1607e4a3e70affb8b136bd4bbbb75272a457b
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n1g4svikkc73b1hot0

## Service details
```json
{
  "autoDeploy": "no",
  "autoDeployTrigger": "off",
  "branch": "claude/fix-ai-messaging-stability-a9TSt",
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
  "updatedAt": "2026-04-26T13:52:26.197755Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n1g4svikkc73b1hot0",
  "commit": {
    "id": "4ca1607e4a3e70affb8b136bd4bbbb75272a457b",
    "message": "urls: run 24956722662",
    "createdAt": "2026-04-26T12:41:10Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T13:50:12.026468Z",
  "updatedAt": "2026-04-26T13:52:26.196225Z",
  "startedAt": "2026-04-26T13:50:11.943748Z",
  "finishedAt": "2026-04-26T13:52:26.196042Z"
}
```

## App logs (last 4h)
```
2026-04-26T13:35:45.771712351Z 2026-04-26 13:35:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:35:45.772354342Z 2026-04-26 13:35:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:35:50.771912175Z 2026-04-26 13:35:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:35:55.771999682Z 2026-04-26 13:35:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:00.771504872Z 2026-04-26 13:36:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:05.771351233Z 2026-04-26 13:36:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:10.77159525Z 2026-04-26 13:36:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:15.771817357Z 2026-04-26 13:36:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:15.77250179Z 2026-04-26 13:36:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:20.771699492Z 2026-04-26 13:36:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:25.771378564Z 2026-04-26 13:36:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:30.771221287Z 2026-04-26 13:36:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:35.771721543Z 2026-04-26 13:36:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:40.771871105Z 2026-04-26 13:36:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:45.771912302Z 2026-04-26 13:36:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:45.772763606Z 2026-04-26 13:36:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:50.771280896Z 2026-04-26 13:36:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:36:55.772007647Z 2026-04-26 13:36:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:00.771402164Z 2026-04-26 13:37:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:05.771643185Z 2026-04-26 13:37:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:10.773897263Z 2026-04-26 13:37:10 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:15.771972747Z 2026-04-26 13:37:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:15.772706624Z 2026-04-26 13:37:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:20.772242561Z 2026-04-26 13:37:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:25.771831081Z 2026-04-26 13:37:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:30.772159578Z 2026-04-26 13:37:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:35.771737049Z 2026-04-26 13:37:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:40.771994302Z 2026-04-26 13:37:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:45.771346579Z 2026-04-26 13:37:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:45.771968029Z 2026-04-26 13:37:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:50.771748723Z 2026-04-26 13:37:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:37:55.771531377Z 2026-04-26 13:37:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:00.771888259Z 2026-04-26 13:38:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:05.771633572Z 2026-04-26 13:38:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:10.771581787Z 2026-04-26 13:38:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:15.772280781Z 2026-04-26 13:38:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:15.772995517Z 2026-04-26 13:38:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:18.791727231Z 2026-04-26 13:38:18 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-26T13:38:19.052643815Z 2026-04-26 13:38:19 [info] {"method":"GET","path":"/messages","status":200,"duration":"305ms","ip":"::1"}
2026-04-26T13:38:19.145252543Z 2026-04-26 13:38:19 [info] Client connected: uBsoudvTAxxlv8mSAAAB
2026-04-26T13:38:19.350328638Z 2026-04-26 13:38:19 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:38:19.644557782Z 2026-04-26 13:38:19 [info] {"method":"GET","path":"/calls","status":200,"duration":"876ms","ip":"::1"}
2026-04-26T13:38:19.646860028Z 2026-04-26 13:38:19 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket uBsoudvTAxxlv8mSAAAB
2026-04-26T13:38:19.844857294Z 2026-04-26 13:38:19 [info] [wa] using WA web version 2.3000.1035194821
2026-04-26T13:38:19.951208363Z 2026-04-26 13:38:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1160ms","ip":"::1"}
2026-04-26T13:38:20.047161673Z 2026-04-26 13:38:20 [info] Client connected: RSqyK3jIyq0nEvnSAAAD
2026-04-26T13:38:20.370614319Z 2026-04-26 13:38:20 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket RSqyK3jIyq0nEvnSAAAD
2026-04-26T13:38:21.649187207Z 2026-04-26 13:38:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:21.649969797Z 2026-04-26 13:38:21 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:38:25.771339521Z 2026-04-26 13:38:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:26.824100261Z 2026-04-26 13:38:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:38:30.771642771Z 2026-04-26 13:38:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:30.974398399Z 2026-04-26 13:38:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:38:34.801294254Z 2026-04-26 13:38:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:38:35.771196524Z 2026-04-26 13:38:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:38.467245062Z 2026-04-26 13:38:38 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:38:40.77238453Z 2026-04-26 13:38:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:42.785540606Z 2026-04-26 13:38:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:38:45.772081142Z 2026-04-26 13:38:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:45.7728448Z 2026-04-26 13:38:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:46.474676763Z 2026-04-26 13:38:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:38:50.772063073Z 2026-04-26 13:38:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:50.799563855Z 2026-04-26 13:38:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:38:54.601943028Z 2026-04-26 13:38:54 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:38:55.772044203Z 2026-04-26 13:38:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:38:58.79205427Z 2026-04-26 13:38:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:39:00.771445367Z 2026-04-26 13:39:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:02.470471358Z 2026-04-26 13:39:02 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T13:39:05.772457354Z 2026-04-26 13:39:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:06.75320595Z 2026-04-26 13:39:06 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T13:39:10.490755976Z 2026-04-26 13:39:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:39:10.771423091Z 2026-04-26 13:39:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:14.792184153Z 2026-04-26 13:39:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:39:15.771783767Z 2026-04-26 13:39:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:15.772505952Z 2026-04-26 13:39:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:18.484794641Z 2026-04-26 13:39:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T13:39:20.772325545Z 2026-04-26 13:39:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:21.446321694Z 2026-04-26 13:39:21 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:39:25.772603946Z 2026-04-26 13:39:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:30.771388433Z 2026-04-26 13:39:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:35.771600931Z 2026-04-26 13:39:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:40.778421388Z 2026-04-26 13:39:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:41.362593395Z 2026-04-26 13:39:41 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:39:45.772294274Z 2026-04-26 13:39:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:45.773039211Z 2026-04-26 13:39:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:50.77182973Z 2026-04-26 13:39:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:39:54.376077611Z 2026-04-26 13:39:54 [info] Client disconnected: uBsoudvTAxxlv8mSAAAB
2026-04-26T13:39:55.182382444Z 2026-04-26 13:39:55 [info] Client disconnected: RSqyK3jIyq0nEvnSAAAD
2026-04-26T13:39:55.772229391Z 2026-04-26 13:39:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:00.77227734Z 2026-04-26 13:40:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:01.350722254Z 2026-04-26 13:40:01 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:40:05.772152698Z 2026-04-26 13:40:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:10.77114422Z 2026-04-26 13:40:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:15.771880074Z 2026-04-26 13:40:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:15.773380669Z 2026-04-26 13:40:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:16.051089026Z 2026-04-26 13:40:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T13:40:16.072947711Z 2026-04-26 13:40:16 [info] [keepalive] ping OK
2026-04-26T13:40:20.774713179Z 2026-04-26 13:40:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:21.357001718Z 2026-04-26 13:40:21 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:40:25.771544966Z 2026-04-26 13:40:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:30.771533483Z 2026-04-26 13:40:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:35.772208363Z 2026-04-26 13:40:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:40.771737222Z 2026-04-26 13:40:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:41.454166766Z 2026-04-26 13:40:41 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:40:45.772396792Z 2026-04-26 13:40:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:45.773185312Z 2026-04-26 13:40:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:50.771941062Z 2026-04-26 13:40:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:40:55.77145541Z 2026-04-26 13:40:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:00.771721646Z 2026-04-26 13:41:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:01.359286899Z 2026-04-26 13:41:01 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T13:41:01.359394746Z 2026-04-26 13:41:01 [info] [wa] reconnecting in 2000ms (attempt 2)
2026-04-26T13:41:03.361237578Z 2026-04-26 13:41:03 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T13:41:03.554910841Z 2026-04-26 13:41:03 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:41:04.552381849Z 2026-04-26 13:41:04 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:41:05.77257374Z 2026-04-26 13:41:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:10.771254236Z 2026-04-26 13:41:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:15.772134012Z 2026-04-26 13:41:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:15.772858178Z 2026-04-26 13:41:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:20.772071108Z 2026-04-26 13:41:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:25.771033023Z 2026-04-26 13:41:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:30.771643913Z 2026-04-26 13:41:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:35.772126225Z 2026-04-26 13:41:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:40.771186197Z 2026-04-26 13:41:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:45.771447096Z 2026-04-26 13:41:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:45.772037353Z 2026-04-26 13:41:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:50.772252119Z 2026-04-26 13:41:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:41:55.771822604Z 2026-04-26 13:41:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:00.771257741Z 2026-04-26 13:42:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:04.555345194Z 2026-04-26 13:42:04 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:42:05.772002301Z 2026-04-26 13:42:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:10.771476691Z 2026-04-26 13:42:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:15.771847238Z 2026-04-26 13:42:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:15.772603986Z 2026-04-26 13:42:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:20.771842712Z 2026-04-26 13:42:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:24.645817061Z 2026-04-26 13:42:24 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:42:25.772003686Z 2026-04-26 13:42:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:30.771386972Z 2026-04-26 13:42:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:35.771897879Z 2026-04-26 13:42:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:40.771738284Z 2026-04-26 13:42:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:44.653701691Z 2026-04-26 13:42:44 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:42:45.772164897Z 2026-04-26 13:42:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:45.773087565Z 2026-04-26 13:42:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:50.771135117Z 2026-04-26 13:42:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:42:55.77219369Z 2026-04-26 13:42:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:00.771949471Z 2026-04-26 13:43:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:04.74593656Z 2026-04-26 13:43:04 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:43:05.77214354Z 2026-04-26 13:43:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:10.772155487Z 2026-04-26 13:43:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:15.771442859Z 2026-04-26 13:43:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:15.77209155Z 2026-04-26 13:43:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:20.77182352Z 2026-04-26 13:43:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:24.651041434Z 2026-04-26 13:43:24 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:43:25.771634556Z 2026-04-26 13:43:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:30.771933146Z 2026-04-26 13:43:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:35.775269072Z 2026-04-26 13:43:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:40.772065035Z 2026-04-26 13:43:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:44.587385117Z 2026-04-26 13:43:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T13:43:44.587608841Z 2026-04-26 13:43:44 [info] [wa] reconnecting in 4000ms (attempt 3)
2026-04-26T13:43:45.777029774Z 2026-04-26 13:43:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:45.777050856Z 2026-04-26 13:43:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:48.587704622Z 2026-04-26 13:43:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T13:43:48.698615854Z 2026-04-26 13:43:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:43:49.348757435Z 2026-04-26 13:43:49 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:43:50.771340771Z 2026-04-26 13:43:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:43:55.771997029Z 2026-04-26 13:43:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:00.771488415Z 2026-04-26 13:44:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:05.777317802Z 2026-04-26 13:44:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:10.771740608Z 2026-04-26 13:44:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:15.773386061Z 2026-04-26 13:44:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:15.773415543Z 2026-04-26 13:44:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:20.771424097Z 2026-04-26 13:44:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:25.77319841Z 2026-04-26 13:44:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:30.771680825Z 2026-04-26 13:44:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:35.771522847Z 2026-04-26 13:44:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:40.771721172Z 2026-04-26 13:44:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:45.771937759Z 2026-04-26 13:44:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:45.772655684Z 2026-04-26 13:44:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:49.353836888Z 2026-04-26 13:44:49 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:44:50.771712058Z 2026-04-26 13:44:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:44:55.771955528Z 2026-04-26 13:44:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:00.771941293Z 2026-04-26 13:45:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:05.771157078Z 2026-04-26 13:45:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:09.351413576Z 2026-04-26 13:45:09 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:45:10.774161505Z 2026-04-26 13:45:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:15.77492967Z 2026-04-26 13:45:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:15.776386523Z 2026-04-26 13:45:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:20.771096315Z 2026-04-26 13:45:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:25.771623707Z 2026-04-26 13:45:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:29.346001674Z 2026-04-26 13:45:29 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:45:30.771586563Z 2026-04-26 13:45:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:35.847383001Z 2026-04-26 13:45:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:40.772294907Z 2026-04-26 13:45:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:45.772193111Z 2026-04-26 13:45:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:45.772943938Z 2026-04-26 13:45:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:49.452820337Z 2026-04-26 13:45:49 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:45:50.77168552Z 2026-04-26 13:45:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:45:55.772152341Z 2026-04-26 13:45:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:00.771988883Z 2026-04-26 13:46:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:05.771295032Z 2026-04-26 13:46:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:09.450065032Z 2026-04-26 13:46:09 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:46:10.771079181Z 2026-04-26 13:46:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:15.771955021Z 2026-04-26 13:46:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:15.772752852Z 2026-04-26 13:46:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:20.771730221Z 2026-04-26 13:46:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:25.771578196Z 2026-04-26 13:46:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:29.363813129Z 2026-04-26 13:46:29 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T13:46:29.363849622Z 2026-04-26 13:46:29 [info] [wa] reconnecting in 8000ms (attempt 4)
2026-04-26T13:46:30.77186529Z 2026-04-26 13:46:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:35.771577779Z 2026-04-26 13:46:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:37.365574103Z 2026-04-26 13:46:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T13:46:37.464726931Z 2026-04-26 13:46:37 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:46:37.850319445Z 2026-04-26 13:46:37 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:46:40.772632162Z 2026-04-26 13:46:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:45.772068574Z 2026-04-26 13:46:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:45.772724106Z 2026-04-26 13:46:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:50.772011959Z 2026-04-26 13:46:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:46:55.771834996Z 2026-04-26 13:46:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:00.772070281Z 2026-04-26 13:47:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:05.771394638Z 2026-04-26 13:47:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:10.771562589Z 2026-04-26 13:47:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:15.771675007Z 2026-04-26 13:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:15.772335459Z 2026-04-26 13:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:20.771914134Z 2026-04-26 13:47:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:25.771704623Z 2026-04-26 13:47:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:30.772044627Z 2026-04-26 13:47:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:35.772166758Z 2026-04-26 13:47:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:37.854281111Z 2026-04-26 13:47:37 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:47:40.775200244Z 2026-04-26 13:47:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:45.771849417Z 2026-04-26 13:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:45.775243812Z 2026-04-26 13:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:50.771232753Z 2026-04-26 13:47:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:55.772031789Z 2026-04-26 13:47:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:47:57.849769196Z 2026-04-26 13:47:57 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:48:00.771440598Z 2026-04-26 13:48:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:05.771977989Z 2026-04-26 13:48:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:10.771946145Z 2026-04-26 13:48:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:15.772432373Z 2026-04-26 13:48:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:15.773086525Z 2026-04-26 13:48:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:17.945013306Z 2026-04-26 13:48:17 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:48:20.772154714Z 2026-04-26 13:48:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:25.771746548Z 2026-04-26 13:48:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:30.426810857Z 2026-04-26 13:48:30 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:48:30.426833288Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:48:30.426838439Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:48:30.426842729Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:48:30.426849169Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:48:30.42685379Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:48:30.42685806Z Caused by: Error
2026-04-26T13:48:30.426871051Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:48:30.426874401Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:48:30.426877651Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:48:30.426880461Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:48:30.426883301Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:48:30.426886182Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:48:30.426889022Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:48:30.426891522Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:48:30.426894312Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:48:30.426896813Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:48:30.772818276Z 2026-04-26 13:48:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:35.771286969Z 2026-04-26 13:48:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:37.852272954Z 2026-04-26 13:48:37 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:48:40.77144085Z 2026-04-26 13:48:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:45.771898291Z 2026-04-26 13:48:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:45.772454356Z 2026-04-26 13:48:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:50.772409005Z 2026-04-26 13:48:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:55.771690642Z 2026-04-26 13:48:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:48:57.853175259Z 2026-04-26 13:48:57 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:49:00.771711467Z 2026-04-26 13:49:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:05.771753843Z 2026-04-26 13:49:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:10.771882566Z 2026-04-26 13:49:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:15.771340317Z 2026-04-26 13:49:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:15.771850639Z 2026-04-26 13:49:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:17.845887895Z 2026-04-26 13:49:17 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T13:49:17.846006283Z 2026-04-26 13:49:17 [info] [wa] reconnecting in 16000ms (attempt 5)
2026-04-26T13:49:20.7716134Z 2026-04-26 13:49:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:25.772024742Z 2026-04-26 13:49:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:28.523899139Z 2026-04-26 13:49:28 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:49:28.52392191Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:49:28.523927241Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:49:28.523931901Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:49:28.523936971Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:49:28.523941401Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:49:28.523945142Z Caused by: Error
2026-04-26T13:49:28.523949632Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:49:28.523953402Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:49:28.523957672Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:49:28.523961543Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:49:28.523965293Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:49:28.523969273Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:49:28.523972973Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:49:28.523976693Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:49:28.523980494Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:49:28.523987114Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:49:30.773692204Z 2026-04-26 13:49:30 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:33.847667066Z 2026-04-26 13:49:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T13:49:33.952975135Z 2026-04-26 13:49:33 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:49:34.50391762Z 2026-04-26 13:49:34 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:49:35.772360147Z 2026-04-26 13:49:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:40.771052422Z 2026-04-26 13:49:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:45.771761625Z 2026-04-26 13:49:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:45.772442448Z 2026-04-26 13:49:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:50.771202479Z 2026-04-26 13:49:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:49:54.211470976Z 2026-04-26 13:49:54 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:49:54.211498568Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:49:54.211505478Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:49:54.211510959Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:49:54.211516849Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:49:54.211521799Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:49:54.21152649Z Caused by: Error
2026-04-26T13:49:54.21153241Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:49:54.211540861Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:49:54.211546891Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:49:54.211552231Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:49:54.211557402Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:49:54.211562462Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:49:54.211567892Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:49:54.211572693Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:49:54.211580813Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:49:54.211586274Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:49:55.771348568Z 2026-04-26 13:49:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:00.77106272Z 2026-04-26 13:50:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:05.771916875Z 2026-04-26 13:50:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:10.771477338Z 2026-04-26 13:50:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:14.244235934Z 2026-04-26 13:50:14 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:14.244883965Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:14.244892606Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:50:14.244895636Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:50:14.244898306Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:50:14.244900686Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:50:14.244902946Z Caused by: Error
2026-04-26T13:50:14.244905696Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:50:14.244908167Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:14.244910717Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:50:14.244912897Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:50:14.244914887Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:50:14.244916987Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:50:14.244919317Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:50:14.244921677Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:50:14.244924168Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:50:14.244926398Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:15.830348067Z 2026-04-26 13:50:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:15.830882371Z 2026-04-26 13:50:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:20.772503567Z 2026-04-26 13:50:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:25.77203355Z 2026-04-26 13:50:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:30.771178869Z 2026-04-26 13:50:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:32.688012865Z 2026-04-26 13:50:32 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:32.688033266Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:32.688039277Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:50:32.688042827Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:50:32.688056898Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:50:32.688058678Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:50:32.688060348Z Caused by: Error
2026-04-26T13:50:32.688062708Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:50:32.688064478Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:32.688066908Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:50:32.688068779Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:50:32.688070459Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:50:32.688072699Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:50:32.688076269Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:50:32.688079489Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:50:32.688082529Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:50:32.688085669Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:34.545285139Z 2026-04-26 13:50:34 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:50:35.772716511Z 2026-04-26 13:50:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:40.771259143Z 2026-04-26 13:50:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:45.771328033Z 2026-04-26 13:50:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:45.772033668Z 2026-04-26 13:50:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:50.77213635Z 2026-04-26 13:50:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:54.51685107Z 2026-04-26 13:50:54 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:50:55.772228712Z 2026-04-26 13:50:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:50:57.913794959Z 2026-04-26 13:50:57 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:57.91381957Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:50:57.913825261Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:50:57.913829651Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:50:57.913844122Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:50:57.913846572Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:50:57.913848642Z Caused by: Error
2026-04-26T13:50:57.913851802Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:50:57.913854092Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:50:57.913856553Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:50:57.913858733Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:50:57.913860893Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:50:57.913863013Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:50:57.913865263Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:50:57.913867373Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:50:57.913869564Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:50:57.913871784Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:51:00.771602589Z 2026-04-26 13:51:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:05.773157875Z 2026-04-26 13:51:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:10.772065464Z 2026-04-26 13:51:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:14.644957932Z 2026-04-26 13:51:14 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:51:15.772594386Z 2026-04-26 13:51:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:15.773377835Z 2026-04-26 13:51:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:20.771994997Z 2026-04-26 13:51:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:25.772137025Z 2026-04-26 13:51:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:30.772286065Z 2026-04-26 13:51:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:34.530458551Z 2026-04-26 13:51:34 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:51:35.770979733Z 2026-04-26 13:51:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:40.771403031Z 2026-04-26 13:51:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:45.771864362Z 2026-04-26 13:51:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:45.772650402Z 2026-04-26 13:51:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:50.772167694Z 2026-04-26 13:51:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:51:52.544741478Z 2026-04-26 13:51:52 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:51:52.544760859Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:51:52.544764509Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:51:52.544767509Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:51:52.54477413Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:51:52.54477649Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:51:52.54477878Z Caused by: Error
2026-04-26T13:51:52.54478202Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:51:52.54478439Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:51:52.54478779Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:51:52.544790061Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:51:52.544792401Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:51:52.544794641Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:51:52.544799221Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:51:52.544801921Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:51:52.544804322Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:51:52.544806452Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:51:54.549406078Z 2026-04-26 13:51:54 [info] [wa] QR generated for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T13:51:55.772463446Z 2026-04-26 13:51:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:00.772220933Z 2026-04-26 13:52:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:05.123481697Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T13:52:05.185579603Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T13:52:05.77209889Z 2026-04-26 13:52:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:10.771946815Z 2026-04-26 13:52:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:14.533679889Z 2026-04-26 13:52:14 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=408, msg=QR refs attempts ended)
2026-04-26T13:52:14.533723842Z 2026-04-26 13:52:14 [info] [wa] reconnecting in 30000ms (attempt 6)
2026-04-26T13:52:15.774272017Z 2026-04-26 13:52:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:15.775148002Z 2026-04-26 13:52:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:18.801365203Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T13:52:19.900615331Z 
2026-04-26T13:52:19.900639172Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T13:52:19.900644392Z > node dist/index.js
2026-04-26T13:52:19.900646872Z 
2026-04-26T13:52:20.772680502Z 2026-04-26 13:52:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:23.999649293Z 2026-04-26 13:52:23 [info] [ai] Gemini ready — model: gemini-2.5-flash
2026-04-26T13:52:24.893429591Z 2026-04-26 13:52:24 [info] Firestore initialized successfully
2026-04-26T13:52:24.897704911Z 2026-04-26 13:52:24 [info] ✅ Server running on http://localhost:10000
2026-04-26T13:52:24.89788626Z 2026-04-26 13:52:24 [info] Environment: production
2026-04-26T13:52:24.89807025Z 2026-04-26 13:52:24 [info] API URL: http://localhost:5000
2026-04-26T13:52:24.898271931Z 2026-04-26 13:52:24 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T13:52:25.513346978Z 2026-04-26 13:52:25 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:25.515445461Z 2026-04-26 13:52:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:25.776270085Z 2026-04-26 13:52:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:25.875877632Z 2026-04-26 13:52:25 [error] Route / not found
2026-04-26T13:52:25.875897453Z Error: Route / not found
2026-04-26T13:52:25.875902263Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T13:52:25.875905523Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T13:52:25.875909003Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T13:52:25.875912693Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T13:52:25.875915634Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T13:52:25.875918163Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T13:52:25.875920774Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T13:52:25.875923424Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T13:52:25.875925804Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T13:52:25.875927984Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T13:52:25.876735647Z 2026-04-26 13:52:25 [info] {"method":"HEAD","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T13:52:26.366000571Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T13:52:26.485764949Z 2026-04-26 13:52:26 [error] Route / not found
2026-04-26T13:52:26.48578536Z Error: Route / not found
2026-04-26T13:52:26.48579062Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T13:52:26.485795401Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T13:52:26.485799921Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T13:52:26.485803741Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T13:52:26.485806471Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T13:52:26.485809171Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T13:52:26.485812051Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T13:52:26.485814642Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T13:52:26.485834863Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T13:52:26.485837953Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T13:52:26.48654077Z 2026-04-26 13:52:26 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T13:52:26.617782183Z [0;32m[1m==> [0m[1m[0m
2026-04-26T13:52:26.622237132Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T13:52:26.627057371Z [0;32m[1m==> [0m[1m[0m
2026-04-26T13:52:26.635214458Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T13:52:26.639673477Z [0;32m[1m==> [0m[1m[0m
2026-04-26T13:52:26.644077725Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T13:52:30.507939714Z 2026-04-26 13:52:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:30.772498174Z 2026-04-26 13:52:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:35.507223843Z 2026-04-26 13:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:35.510195304Z 2026-04-26 13:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.141"}
2026-04-26T13:52:35.771686239Z 2026-04-26 13:52:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T13:52:37.996709986Z 2026-04-26 13:52:37 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:52:37.996728657Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T13:52:37.996733347Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T13:52:37.996737678Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T13:52:37.996742118Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T13:52:37.996745818Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T13:52:37.996749688Z Caused by: Error
2026-04-26T13:52:37.996754028Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T13:52:37.996757929Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T13:52:37.996762089Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T13:52:37.996765919Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T13:52:37.996769949Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T13:52:37.99677395Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T13:52:37.99677772Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T13:52:37.99678145Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T13:52:37.99678511Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T13:52:37.996788921Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
```
