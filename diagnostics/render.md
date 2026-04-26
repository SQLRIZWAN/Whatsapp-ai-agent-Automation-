# Render Deploy Diagnostics

Run: 24966296835
Commit: 010c9a89660e77b34850efa9e50e0ca436ec9a97
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n7b7ok1i2s739h37u0

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
  "updatedAt": "2026-04-26T20:33:03.157529Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n7b7ok1i2s739h37u0",
  "commit": {
    "id": "010c9a89660e77b34850efa9e50e0ca436ec9a97",
    "message": "fix: optimize Firestore writes with batch operations and timeouts to prevent quota exhaustion",
    "createdAt": "2026-04-26T20:28:03Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T20:29:19.532638Z",
  "updatedAt": "2026-04-26T20:33:03.15601Z",
  "startedAt": "2026-04-26T20:29:19.426318Z",
  "finishedAt": "2026-04-26T20:33:03.15581Z"
}
```

## App logs (last 4h)
```
2026-04-26T20:15:00.123865062Z 2026-04-26 20:15:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:05.122985795Z 2026-04-26 20:15:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:05.123760587Z 2026-04-26 20:15:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:09.534333988Z 2026-04-26 20:15:09 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:15:10.122937633Z 2026-04-26 20:15:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:10.623289998Z 2026-04-26 20:15:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:15:10.966557171Z 2026-04-26 20:15:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:15:11.848678448Z 2026-04-26 20:15:11 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:15:15.12391188Z 2026-04-26 20:15:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:20.12298023Z 2026-04-26 20:15:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:25.12342257Z 2026-04-26 20:15:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:30.023864755Z 2026-04-26 20:15:30 [info] Client disconnected: XoR3ARbiHCjEbZgIAAAD
2026-04-26T20:15:30.037172932Z 2026-04-26 20:15:30 [info] Client disconnected: XZFhrafUVSdRAMEgAAAF
2026-04-26T20:15:30.123267561Z 2026-04-26 20:15:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:32.031317961Z 2026-04-26 20:15:32 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:15:32.711354337Z 2026-04-26 20:15:32 [info] {"method":"GET","path":"/messages","status":200,"duration":"201ms","ip":"::1"}
2026-04-26T20:15:32.989058369Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T20:15:33.006676298Z 2026-04-26 20:15:33 [info] {"method":"GET","path":"/calls","status":200,"duration":"128ms","ip":"::1"}
2026-04-26T20:15:33.072487396Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T20:15:33.65496364Z 2026-04-26 20:15:33 [info] Client connected: lPKJUcU7FuujIew6AAAH
2026-04-26T20:15:33.994235279Z 2026-04-26 20:15:33 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket lPKJUcU7FuujIew6AAAH
2026-04-26T20:15:34.462650467Z 2026-04-26 20:15:34 [info] Client connected: MpSrcwo559V3L_EaAAAJ
2026-04-26T20:15:34.972757995Z 2026-04-26 20:15:34 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket MpSrcwo559V3L_EaAAAJ
2026-04-26T20:15:35.12368Z 2026-04-26 20:15:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:35.124363745Z 2026-04-26 20:15:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:40.123154487Z 2026-04-26 20:15:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:40.886913937Z 2026-04-26 20:15:40 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:15:43.255513594Z 2026-04-26 20:15:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:15:44.478163993Z 2026-04-26 20:15:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:15:45.124031196Z 2026-04-26 20:15:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:48.880969173Z 2026-04-26 20:15:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:15:50.123419438Z 2026-04-26 20:15:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:52.597163742Z 2026-04-26 20:15:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:15:55.124924769Z 2026-04-26 20:15:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:57.379662727Z 2026-04-26 20:15:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:16:00.125020127Z 2026-04-26 20:16:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:03.572293188Z 2026-04-26 20:16:03 [info] Client disconnected: MpSrcwo559V3L_EaAAAJ
2026-04-26T20:16:03.573158855Z 2026-04-26 20:16:03 [info] Client disconnected: lPKJUcU7FuujIew6AAAH
2026-04-26T20:16:04.793848398Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:16:04.927361713Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:16:04.929663494Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:16:04.932446278Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:16:04.937327779Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:16:04.941454659Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:16:04.948098636Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:16:05.122962044Z 2026-04-26 20:16:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:10.12712141Z 2026-04-26 20:16:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:15.123008221Z 2026-04-26 20:16:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:15.210118587Z 2026-04-26 20:16:15 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:16:20.123599102Z 2026-04-26 20:16:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:25.123480837Z 2026-04-26 20:16:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:30.122944663Z 2026-04-26 20:16:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:35.122727622Z 2026-04-26 20:16:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:40.12356962Z 2026-04-26 20:16:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:45.123016525Z 2026-04-26 20:16:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:50.123287766Z 2026-04-26 20:16:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:55.123203223Z 2026-04-26 20:16:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:17:00.12311266Z 2026-04-26 20:17:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:17:33.392921995Z 2026-04-26 20:17:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:17:33.39316107Z 2026-04-26 20:17:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:17:38.392337733Z 2026-04-26 20:17:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:17:43.392305302Z 2026-04-26 20:17:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:17:43.99625863Z 2026-04-26 20:17:43 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:17:48.392646799Z 2026-04-26 20:17:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:17:49.553087177Z 2026-04-26 20:17:49 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:17:53.019485363Z 2026-04-26 20:17:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:17:53.393377514Z 2026-04-26 20:17:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:17:58.393899267Z 2026-04-26 20:17:58 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:03.392259142Z 2026-04-26 20:18:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:03.393758418Z 2026-04-26 20:18:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:03.70565044Z 2026-04-26 20:18:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:08.392494651Z 2026-04-26 20:18:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:13.191646172Z 2026-04-26 20:18:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:13.391960868Z 2026-04-26 20:18:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:14.284899319Z 2026-04-26 20:18:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:18.392004216Z 2026-04-26 20:18:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:18.48833506Z 2026-04-26 20:18:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:19.024787162Z 2026-04-26 20:18:19 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:18:21.916490217Z 2026-04-26 20:18:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:22.559580787Z 2026-04-26 20:18:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:22.836567104Z 2026-04-26 20:18:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:23.392432433Z 2026-04-26 20:18:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:28.402018175Z 2026-04-26 20:18:28 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:28.456318826Z 2026-04-26 20:18:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:29.189052041Z 2026-04-26 20:18:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:29.612987849Z 2026-04-26 20:18:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:30.912494537Z 2026-04-26 20:18:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:31.356337921Z 2026-04-26 20:18:31 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:18:32.183479046Z 2026-04-26 20:18:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:32.750658397Z 2026-04-26 20:18:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:33.392921013Z 2026-04-26 20:18:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:33.392945093Z 2026-04-26 20:18:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:36.07232219Z 2026-04-26 20:18:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:36.755523938Z 2026-04-26 20:18:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:38.392038589Z 2026-04-26 20:18:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:39.488206179Z 2026-04-26 20:18:39 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:18:43.392681505Z 2026-04-26 20:18:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:44.133718238Z 2026-04-26 20:18:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:47.396424097Z 2026-04-26 20:18:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:48.392818242Z 2026-04-26 20:18:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:51.830091776Z 2026-04-26 20:18:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:52.551509849Z 2026-04-26 20:18:52 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:18:53.392105675Z 2026-04-26 20:18:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:18:55.388628841Z 2026-04-26 20:18:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:18:58.391877358Z 2026-04-26 20:18:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:03.034390057Z 2026-04-26 20:19:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:03.392234242Z 2026-04-26 20:19:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:03.393548836Z 2026-04-26 20:19:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:05.935645969Z 2026-04-26 20:19:05 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:08.39270775Z 2026-04-26 20:19:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:10.683893753Z 2026-04-26 20:19:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:13.394824699Z 2026-04-26 20:19:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:13.931090588Z 2026-04-26 20:19:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:18.392197653Z 2026-04-26 20:19:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:18.44787511Z 2026-04-26 20:19:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:21.808274963Z 2026-04-26 20:19:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:23.39241912Z 2026-04-26 20:19:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:26.584408979Z 2026-04-26 20:19:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:27.592398443Z 2026-04-26 20:19:27 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:19:28.393098016Z 2026-04-26 20:19:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:29.882858794Z 2026-04-26 20:19:29 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:19:33.392043062Z 2026-04-26 20:19:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:33.392756275Z 2026-04-26 20:19:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:35.971730242Z 2026-04-26 20:19:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:38.392262712Z 2026-04-26 20:19:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:39.331030998Z 2026-04-26 20:19:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:43.393227347Z 2026-04-26 20:19:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:43.873469244Z 2026-04-26 20:19:43 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:19:47.164089282Z 2026-04-26 20:19:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:48.393185515Z 2026-04-26 20:19:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:51.687976198Z 2026-04-26 20:19:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:19:53.392232517Z 2026-04-26 20:19:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:55.281192994Z 2026-04-26 20:19:55 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:19:58.392848469Z 2026-04-26 20:19:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:19:59.890173325Z 2026-04-26 20:19:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:00.868907597Z 2026-04-26 20:20:00 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:20:03.156783405Z 2026-04-26 20:20:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:03.391890014Z 2026-04-26 20:20:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:03.392608967Z 2026-04-26 20:20:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:08.307620758Z 2026-04-26 20:20:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:08.392635011Z 2026-04-26 20:20:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:11.180036522Z 2026-04-26 20:20:11 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:13.39184555Z 2026-04-26 20:20:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:18.39322132Z 2026-04-26 20:20:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:18.686943889Z 2026-04-26 20:20:18 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:20:19.192951688Z 2026-04-26 20:20:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:23.143988354Z 2026-04-26 20:20:23 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:23.3923216Z 2026-04-26 20:20:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:27.6936577Z 2026-04-26 20:20:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:28.391826489Z 2026-04-26 20:20:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:31.149743016Z 2026-04-26 20:20:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:32.709669565Z 2026-04-26 20:20:32 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:20:33.391847398Z 2026-04-26 20:20:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:33.392608552Z 2026-04-26 20:20:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:35.876714407Z 2026-04-26 20:20:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:38.39418121Z 2026-04-26 20:20:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:40.690520724Z 2026-04-26 20:20:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:43.392300227Z 2026-04-26 20:20:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:44.874696808Z 2026-04-26 20:20:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:48.393163674Z 2026-04-26 20:20:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:49.032544402Z 2026-04-26 20:20:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:53.115197881Z 2026-04-26 20:20:53 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:20:53.393774369Z 2026-04-26 20:20:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:20:56.734075706Z 2026-04-26 20:20:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:20:58.392417908Z 2026-04-26 20:20:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:01.064587514Z 2026-04-26 20:21:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:01.512014138Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T20:21:01.595828738Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T20:21:03.392033867Z 2026-04-26 20:21:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:03.392698359Z 2026-04-26 20:21:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:04.459676633Z 2026-04-26 20:21:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:06.463321119Z 2026-04-26 20:21:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:21:08.39186609Z 2026-04-26 20:21:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:09.073955883Z 2026-04-26 20:21:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:12.655543804Z 2026-04-26 20:21:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:13.391897298Z 2026-04-26 20:21:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:16.912965976Z 2026-04-26 20:21:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:18.393646178Z 2026-04-26 20:21:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:20.612961937Z 2026-04-26 20:21:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:23.396014441Z 2026-04-26 20:21:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:25.154800074Z 2026-04-26 20:21:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:28.392945247Z 2026-04-26 20:21:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:28.564382737Z 2026-04-26 20:21:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:33.392804666Z 2026-04-26 20:21:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:33.393947267Z 2026-04-26 20:21:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:33.976139652Z 2026-04-26 20:21:33 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:21:36.652796512Z 2026-04-26 20:21:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:38.057567746Z 2026-04-26 20:21:38 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:21:38.39229284Z 2026-04-26 20:21:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:41.233621999Z 2026-04-26 20:21:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:43.392690602Z 2026-04-26 20:21:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:46.538408812Z 2026-04-26 20:21:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:48.393015193Z 2026-04-26 20:21:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:53.394791282Z 2026-04-26 20:21:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:57.306964089Z 2026-04-26 20:21:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:57.826377021Z 2026-04-26 20:21:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:21:58.392827244Z 2026-04-26 20:21:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:21:58.866010608Z 2026-04-26 20:21:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:22:01.203398115Z 2026-04-26 20:22:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:22:03.392553828Z 2026-04-26 20:22:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:03.393269771Z 2026-04-26 20:22:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:04.61055394Z 2026-04-26 20:22:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:22:08.392833603Z 2026-04-26 20:22:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:10.341137593Z 2026-04-26 20:22:10 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:22:13.392257273Z 2026-04-26 20:22:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:18.392564081Z 2026-04-26 20:22:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:23.392740267Z 2026-04-26 20:22:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:28.391939387Z 2026-04-26 20:22:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:33.04900624Z 2026-04-26 20:22:33 [info] Client disconnected: 6k1rLNrAVRMDtWRgAAAB
2026-04-26T20:22:33.392262668Z 2026-04-26 20:22:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:33.392884199Z 2026-04-26 20:22:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:33.459788437Z 2026-04-26 20:22:33 [info] Client disconnected: KkpkIbBHI1m0erLmAAAD
2026-04-26T20:22:38.392223163Z 2026-04-26 20:22:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:42.04203952Z 2026-04-26 20:22:42 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:22:43.392820112Z 2026-04-26 20:22:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:48.39337355Z 2026-04-26 20:22:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:53.392064037Z 2026-04-26 20:22:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:22:58.392339682Z 2026-04-26 20:22:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:03.392583218Z 2026-04-26 20:23:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:03.39326307Z 2026-04-26 20:23:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:08.392811175Z 2026-04-26 20:23:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:13.391823342Z 2026-04-26 20:23:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:13.47272386Z 2026-04-26 20:23:13 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:23:18.392242944Z 2026-04-26 20:23:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:23.392494245Z 2026-04-26 20:23:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:28.392113995Z 2026-04-26 20:23:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:33.394327913Z 2026-04-26 20:23:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:33.397166034Z 2026-04-26 20:23:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:38.393889185Z 2026-04-26 20:23:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:43.391696095Z 2026-04-26 20:23:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:44.801739262Z 2026-04-26 20:23:44 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:23:48.39301136Z 2026-04-26 20:23:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:53.392105756Z 2026-04-26 20:23:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:23:58.39214146Z 2026-04-26 20:23:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:03.393271625Z 2026-04-26 20:24:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:03.393295716Z 2026-04-26 20:24:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:08.392798923Z 2026-04-26 20:24:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:13.394326567Z 2026-04-26 20:24:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:17.422862032Z 2026-04-26 20:24:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:24:18.392110915Z 2026-04-26 20:24:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:23.392734065Z 2026-04-26 20:24:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:28.39187095Z 2026-04-26 20:24:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:33.392611484Z 2026-04-26 20:24:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:33.393234135Z 2026-04-26 20:24:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:38.391985297Z 2026-04-26 20:24:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:43.394253441Z 2026-04-26 20:24:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:48.393374179Z 2026-04-26 20:24:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:50.751825241Z 2026-04-26 20:24:50 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:24:53.392104602Z 2026-04-26 20:24:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:24:58.394544272Z 2026-04-26 20:24:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:03.391856391Z 2026-04-26 20:25:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:03.392857089Z 2026-04-26 20:25:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:08.392524231Z 2026-04-26 20:25:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:13.392002962Z 2026-04-26 20:25:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:18.392929229Z 2026-04-26 20:25:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:21.729601949Z 2026-04-26 20:25:21 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:25:23.392996912Z 2026-04-26 20:25:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:28.392648648Z 2026-04-26 20:25:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:33.392687522Z 2026-04-26 20:25:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:33.393572438Z 2026-04-26 20:25:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:38.392092988Z 2026-04-26 20:25:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:43.392543432Z 2026-04-26 20:25:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:48.392384666Z 2026-04-26 20:25:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:53.392387484Z 2026-04-26 20:25:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:25:57.204514019Z 2026-04-26 20:25:57 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:25:58.391990346Z 2026-04-26 20:25:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:03.392089698Z 2026-04-26 20:26:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:03.393068345Z 2026-04-26 20:26:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:08.392986325Z 2026-04-26 20:26:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:13.392681741Z 2026-04-26 20:26:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:18.393035991Z 2026-04-26 20:26:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:20.245865899Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T20:26:20.3610146Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T20:26:23.392156099Z 2026-04-26 20:26:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:26.792777565Z 2026-04-26 20:26:26 [warn] [wa] persistSessionStatus failed Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T20:26:26.792818215Z Error: Total timeout of API google.firestore.v1.Firestore exceeded 600000 milliseconds retrying error Error: 8 RESOURCE_EXHAUSTED: Quota exceeded.  before any response was received.
2026-04-26T20:26:26.792825266Z     at repeat (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:66:31)
2026-04-26T20:26:26.792828655Z     at Timeout._onTimeout (/opt/render/project/src/backend/node_modules/google-gax/build/src/normalCalls/retries.js:108:25)
2026-04-26T20:26:26.792832206Z     at listOnTimeout (node:internal/timers:605:17)
2026-04-26T20:26:26.792835096Z     at process.processTimers (node:internal/timers:541:7)
2026-04-26T20:26:26.792837586Z Caused by: Error
2026-04-26T20:26:26.792840936Z     at _firestore._traceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:438:27)
2026-04-26T20:26:26.792843776Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T20:26:26.792847226Z     at NoopContextManager.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/context/NoopContextManager.js:14:19)
2026-04-26T20:26:26.792849916Z     at ContextAPI.with (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/api/context.js:51:46)
2026-04-26T20:26:26.792852426Z     at NoopTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/NoopTracer.js:54:31)
2026-04-26T20:26:26.792854826Z     at ProxyTracer.startActiveSpan (/opt/render/project/src/backend/node_modules/@opentelemetry/api/build/src/trace/ProxyTracer.js:27:24)
2026-04-26T20:26:26.792857396Z     at EnabledTraceUtil.startActiveSpan (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:102:28)
2026-04-26T20:26:26.792859956Z     at WriteBatch.commit (/opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/write-batch.js:436:43)
2026-04-26T20:26:26.792862636Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/reference/document-reference.js:350:31
2026-04-26T20:26:26.792865226Z     at /opt/render/project/src/backend/node_modules/@google-cloud/firestore/build/src/telemetry/enabled-trace-util.js:110:30
2026-04-26T20:26:26.793276303Z 2026-04-26 20:26:26 [info] {"method":"POST","path":"/disconnect","status":200,"duration":"601942ms","ip":"::1"}
2026-04-26T20:26:28.392064883Z 2026-04-26 20:26:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:30.705799683Z 2026-04-26 20:26:30 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:26:33.167423897Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T20:26:33.392804042Z 2026-04-26 20:26:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:33.393470734Z 2026-04-26 20:26:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:34.269058441Z 
2026-04-26T20:26:34.269095702Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T20:26:34.269101232Z > node dist/index.js
2026-04-26T20:26:34.269103812Z 
2026-04-26T20:26:38.391989094Z 2026-04-26 20:26:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:38.561839815Z 2026-04-26 20:26:38 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T20:26:39.462016023Z 2026-04-26 20:26:39 [info] Firestore initialized successfully
2026-04-26T20:26:39.66224502Z 2026-04-26 20:26:39 [info] ✅ Server running on http://localhost:10000
2026-04-26T20:26:39.662411665Z 2026-04-26 20:26:39 [info] Environment: production
2026-04-26T20:26:39.662670893Z 2026-04-26 20:26:39 [info] API URL: http://localhost:5000
2026-04-26T20:26:39.662974183Z 2026-04-26 20:26:39 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T20:26:40.471299649Z 2026-04-26 20:26:40 [error] Route / not found
2026-04-26T20:26:40.47132349Z Error: Route / not found
2026-04-26T20:26:40.47132857Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:26:40.47133308Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:26:40.47133786Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:26:40.47134235Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:26:40.47134548Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:26:40.4713492Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:26:40.47135354Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:26:40.47135598Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:26:40.471358111Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:26:40.471360301Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:26:40.475323863Z 2026-04-26 20:26:40 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T20:26:40.639612438Z 2026-04-26 20:26:40 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:26:40.641420474Z 2026-04-26 20:26:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:26:41.554832951Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:26:41.623701023Z 2026-04-26 20:26:41 [error] Route / not found
2026-04-26T20:26:41.623716984Z Error: Route / not found
2026-04-26T20:26:41.623720384Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:26:41.623722984Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:26:41.623727294Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:26:41.623731144Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:26:41.623733924Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:26:41.623736795Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:26:41.623739785Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:26:41.623743325Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:26:41.623762565Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:26:41.623764655Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:26:41.624485388Z 2026-04-26 20:26:41 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T20:26:41.654034361Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:26:41.656535098Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:26:41.659590358Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:26:41.661921542Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:26:41.664077401Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:26:41.666682911Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:26:43.392877049Z 2026-04-26 20:26:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:45.639307898Z 2026-04-26 20:26:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:26:48.392402989Z 2026-04-26 20:26:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:50.640257746Z 2026-04-26 20:26:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:26:50.641703671Z 2026-04-26 20:26:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:26:53.392473281Z 2026-04-26 20:26:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:26:55.637742646Z 2026-04-26 20:26:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:26:58.392783158Z 2026-04-26 20:26:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:27:00.638584129Z 2026-04-26 20:27:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:01.486528679Z 2026-04-26 20:27:01 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:27:03.392551256Z 2026-04-26 20:27:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:27:05.639125472Z 2026-04-26 20:27:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:08.392475268Z 2026-04-26 20:27:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:27:10.637709332Z 2026-04-26 20:27:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:13.391944033Z 2026-04-26 20:27:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:27:15.637332214Z 2026-04-26 20:27:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:18.391864337Z 2026-04-26 20:27:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:27:20.637647147Z 2026-04-26 20:27:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:20.638534585Z 2026-04-26 20:27:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:23.39335911Z 2026-04-26 20:27:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:27:25.638493975Z 2026-04-26 20:27:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:28.392477632Z 2026-04-26 20:27:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:27:30.637277459Z 2026-04-26 20:27:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:32.62916058Z 2026-04-26 20:27:32 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:27:33.394080889Z 2026-04-26 20:27:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:27:35.641260302Z 2026-04-26 20:27:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:38.395989343Z 2026-04-26 20:27:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:27:40.637218696Z 2026-04-26 20:27:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:45.638770401Z 2026-04-26 20:27:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:50.638389407Z 2026-04-26 20:27:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:50.639611105Z 2026-04-26 20:27:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:27:55.637868917Z 2026-04-26 20:27:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:00.639143891Z 2026-04-26 20:28:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:05.638501785Z 2026-04-26 20:28:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:10.638055074Z 2026-04-26 20:28:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:15.6381772Z 2026-04-26 20:28:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:20.637266283Z 2026-04-26 20:28:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:20.638075788Z 2026-04-26 20:28:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:25.638223453Z 2026-04-26 20:28:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:30.641677458Z 2026-04-26 20:28:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:35.637368516Z 2026-04-26 20:28:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:40.638022887Z 2026-04-26 20:28:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:45.63748373Z 2026-04-26 20:28:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:50.638238903Z 2026-04-26 20:28:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:50.639010946Z 2026-04-26 20:28:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:28:55.637926661Z 2026-04-26 20:28:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:00.637292867Z 2026-04-26 20:29:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:05.63787064Z 2026-04-26 20:29:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:10.638101282Z 2026-04-26 20:29:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:15.637324671Z 2026-04-26 20:29:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:20.638293353Z 2026-04-26 20:29:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:20.639679216Z 2026-04-26 20:29:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:25.638576132Z 2026-04-26 20:29:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:30.63786595Z 2026-04-26 20:29:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:35.638147657Z 2026-04-26 20:29:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:40.638620069Z 2026-04-26 20:29:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:45.638701658Z 2026-04-26 20:29:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:50.637477956Z 2026-04-26 20:29:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:50.638291831Z 2026-04-26 20:29:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:29:55.63782306Z 2026-04-26 20:29:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:00.637978788Z 2026-04-26 20:30:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:05.637239027Z 2026-04-26 20:30:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:10.638093304Z 2026-04-26 20:30:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:15.638133975Z 2026-04-26 20:30:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:20.637997129Z 2026-04-26 20:30:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:20.638717091Z 2026-04-26 20:30:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:25.638191342Z 2026-04-26 20:30:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:30.637877239Z 2026-04-26 20:30:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:35.638049849Z 2026-04-26 20:30:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:40.637281689Z 2026-04-26 20:30:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:45.637171709Z 2026-04-26 20:30:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:50.638159871Z 2026-04-26 20:30:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:50.638899714Z 2026-04-26 20:30:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:30:55.637818961Z 2026-04-26 20:30:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:00.637368507Z 2026-04-26 20:31:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:05.638211841Z 2026-04-26 20:31:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:10.637909379Z 2026-04-26 20:31:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:15.637386769Z 2026-04-26 20:31:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:20.637736225Z 2026-04-26 20:31:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:20.638522469Z 2026-04-26 20:31:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:25.638061329Z 2026-04-26 20:31:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:30.638279279Z 2026-04-26 20:31:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:35.638497417Z 2026-04-26 20:31:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:40.637441145Z 2026-04-26 20:31:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:45.637489896Z 2026-04-26 20:31:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:49.357113252Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T20:31:50.068786916Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T20:31:50.637573588Z 2026-04-26 20:31:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:50.638435224Z 2026-04-26 20:31:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:31:51.206344156Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T20:31:51.272458208Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T20:31:55.638143763Z 2026-04-26 20:31:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:00.639709197Z 2026-04-26 20:32:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:05.638180205Z 2026-04-26 20:32:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:10.637373904Z 2026-04-26 20:32:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:15.637561523Z 2026-04-26 20:32:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:20.63739692Z 2026-04-26 20:32:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:20.63807306Z 2026-04-26 20:32:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:25.637662709Z 2026-04-26 20:32:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:30.63771824Z 2026-04-26 20:32:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:35.640073962Z 2026-04-26 20:32:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:40.637254742Z 2026-04-26 20:32:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:45.63761536Z 2026-04-26 20:32:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:50.638522854Z 2026-04-26 20:32:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:50.638546984Z 2026-04-26 20:32:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:54.652589034Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T20:32:55.502887343Z [0;33m[1m==> [0m[1mNo open ports detected, continuing to scan...[0m
2026-04-26T20:32:55.591114822Z [0;33m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T20:32:55.638053814Z 2026-04-26 20:32:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:32:56.075880312Z 
2026-04-26T20:32:56.075909613Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T20:32:56.075914863Z > node dist/index.js
2026-04-26T20:32:56.075917853Z 
2026-04-26T20:33:00.637101727Z 2026-04-26 20:33:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:33:00.952728358Z 2026-04-26 20:33:00 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T20:33:01.958081279Z 2026-04-26 20:33:01 [info] Firestore initialized successfully
2026-04-26T20:33:02.050482927Z 2026-04-26 20:33:02 [info] ✅ Server running on http://localhost:10000
2026-04-26T20:33:02.050675032Z 2026-04-26 20:33:02 [info] Environment: production
2026-04-26T20:33:02.050923499Z 2026-04-26 20:33:02 [info] API URL: http://localhost:5000
2026-04-26T20:33:02.051132435Z 2026-04-26 20:33:02 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T20:33:02.449215446Z 2026-04-26 20:33:02 [info] {"method":"GET","path":"/health","status":200,"duration":"388ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:33:02.548539868Z 2026-04-26 20:33:02 [info] {"method":"GET","path":"/health","status":200,"duration":"93ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:33:02.683533179Z 2026-04-26 20:33:02 [error] Route / not found
2026-04-26T20:33:02.68355482Z Error: Route / not found
2026-04-26T20:33:02.68356067Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:33:02.68356652Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:33:02.68357262Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:33:02.683577841Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:33:02.683581121Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:33:02.683584121Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:33:02.683587101Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:33:02.683590151Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:33:02.683593171Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:33:02.683596131Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:33:02.684494556Z 2026-04-26 20:33:02 [info] {"method":"HEAD","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T20:33:03.317122506Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:33:03.376620943Z 2026-04-26 20:33:03 [error] Route / not found
2026-04-26T20:33:03.376643994Z Error: Route / not found
2026-04-26T20:33:03.376651304Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:33:03.376657194Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:33:03.376663114Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:33:03.376669295Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:33:03.376673245Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:33:03.376676615Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:33:03.376681275Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:33:03.376686505Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:33:03.376708196Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:33:03.376711796Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:33:03.377552719Z 2026-04-26 20:33:03 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T20:33:03.469953746Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:33:03.475032923Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:33:03.4783922Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:33:03.481119042Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:33:03.485028522Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:33:03.488320268Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:33:05.638164542Z 2026-04-26 20:33:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.173"}
2026-04-26T20:33:07.654311714Z 2026-04-26 20:33:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
```
