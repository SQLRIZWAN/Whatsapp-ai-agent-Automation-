# Render Deploy Diagnostics

Run: 24966205561
Commit: c164902c7d55c69f49d78ec6ec3746d4e0316b1d
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n78h8sfn5c73dtfnq0

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
  "updatedAt": "2026-04-26T20:26:41.393303Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n78h8sfn5c73dtfnq0",
  "commit": {
    "id": "c164902c7d55c69f49d78ec6ec3746d4e0316b1d",
    "message": "debug: add detailed logging to connection.update and spawn events",
    "createdAt": "2026-04-26T20:23:20Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T20:23:33.092224Z",
  "updatedAt": "2026-04-26T20:26:41.39186Z",
  "startedAt": "2026-04-26T20:23:33.049659Z",
  "finishedAt": "2026-04-26T20:26:41.391666Z"
}
```

## App logs (last 4h)
```
2026-04-26T20:09:50.123987135Z 2026-04-26 20:09:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:53.16100724Z 2026-04-26 20:09:53 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:55.124433311Z 2026-04-26 20:09:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:57.761108909Z 2026-04-26 20:09:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:00.125668599Z 2026-04-26 20:10:00 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:01.163772444Z 2026-04-26 20:10:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:04.244908205Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T20:10:04.404527657Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T20:10:05.123425098Z 2026-04-26 20:10:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:05.124194438Z 2026-04-26 20:10:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:06.321788964Z 2026-04-26 20:10:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:09.080503192Z 2026-04-26 20:10:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:10.12335104Z 2026-04-26 20:10:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:13.680519876Z 2026-04-26 20:10:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:15.122806511Z 2026-04-26 20:10:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:17.179654393Z 2026-04-26 20:10:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:20.123207695Z 2026-04-26 20:10:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:21.680770274Z 2026-04-26 20:10:21 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:25.12348354Z 2026-04-26 20:10:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:25.141506479Z 2026-04-26 20:10:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:29.064009833Z 2026-04-26 20:10:29 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:10:30.123896765Z 2026-04-26 20:10:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:30.163035656Z 2026-04-26 20:10:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:34.09842633Z 2026-04-26 20:10:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:35.126171842Z 2026-04-26 20:10:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:35.126190793Z 2026-04-26 20:10:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:38.916959198Z 2026-04-26 20:10:38 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:40.123884888Z 2026-04-26 20:10:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:42.1227998Z 2026-04-26 20:10:42 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:45.124145293Z 2026-04-26 20:10:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:46.475410234Z 2026-04-26 20:10:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:50.037560489Z 2026-04-26 20:10:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:50.12368939Z 2026-04-26 20:10:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:54.578078008Z 2026-04-26 20:10:54 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:10:55.123494475Z 2026-04-26 20:10:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:10:58.805016954Z 2026-04-26 20:10:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:00.123008531Z 2026-04-26 20:11:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:02.821042527Z 2026-04-26 20:11:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:05.123251955Z 2026-04-26 20:11:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:05.124602834Z 2026-04-26 20:11:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:06.123359513Z 2026-04-26 20:11:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:10.124358775Z 2026-04-26 20:11:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:10.347618332Z 2026-04-26 20:11:10 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:11:14.049069645Z 2026-04-26 20:11:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:15.123076099Z 2026-04-26 20:11:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:20.122887964Z 2026-04-26 20:11:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:20.540432576Z 2026-04-26 20:11:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:22.117259506Z 2026-04-26 20:11:22 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:25.123408097Z 2026-04-26 20:11:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:26.669553353Z 2026-04-26 20:11:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:30.078422057Z 2026-04-26 20:11:30 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:11:30.125054293Z 2026-04-26 20:11:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:34.441260767Z 2026-04-26 20:11:34 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:35.123423514Z 2026-04-26 20:11:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:35.124409659Z 2026-04-26 20:11:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:38.058893523Z 2026-04-26 20:11:38 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:11:40.123630156Z 2026-04-26 20:11:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:42.572559792Z 2026-04-26 20:11:42 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:11:45.12462913Z 2026-04-26 20:11:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:46.012944175Z 2026-04-26 20:11:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:50.123612812Z 2026-04-26 20:11:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:50.419898095Z 2026-04-26 20:11:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:11:54.025518328Z 2026-04-26 20:11:54 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:11:55.123164211Z 2026-04-26 20:11:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:11:59.476539997Z 2026-04-26 20:11:59 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:12:00.123258855Z 2026-04-26 20:12:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:02.025171659Z 2026-04-26 20:12:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:12:05.124018964Z 2026-04-26 20:12:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:05.124784535Z 2026-04-26 20:12:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:06.961983629Z 2026-04-26 20:12:06 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:12:10.034240731Z 2026-04-26 20:12:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:12:10.123488568Z 2026-04-26 20:12:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:14.932160546Z 2026-04-26 20:12:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:12:15.126528407Z 2026-04-26 20:12:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:18.189635995Z 2026-04-26 20:12:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:12:20.122841702Z 2026-04-26 20:12:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:23.734149511Z 2026-04-26 20:12:23 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:12:25.123968416Z 2026-04-26 20:12:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:28.208405761Z 2026-04-26 20:12:28 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:12:30.314556677Z 2026-04-26 20:12:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:35.123552407Z 2026-04-26 20:12:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:35.124433535Z 2026-04-26 20:12:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:40.124172507Z 2026-04-26 20:12:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:43.568428636Z 2026-04-26 20:12:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:12:45.12363392Z 2026-04-26 20:12:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:50.14077139Z 2026-04-26 20:12:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:12:55.123038839Z 2026-04-26 20:12:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:00.123219881Z 2026-04-26 20:13:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:00.932182692Z 2026-04-26 20:13:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:05.123750245Z 2026-04-26 20:13:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:05.124503665Z 2026-04-26 20:13:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:10.125813661Z 2026-04-26 20:13:10 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:15.123870172Z 2026-04-26 20:13:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:15.396055196Z 2026-04-26 20:13:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:17.931797739Z 2026-04-26 20:13:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:13:20.123392021Z 2026-04-26 20:13:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:20.854931454Z 2026-04-26 20:13:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:25.123936827Z 2026-04-26 20:13:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:25.534540851Z 2026-04-26 20:13:25 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:28.657160535Z 2026-04-26 20:13:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:29.601649225Z 2026-04-26 20:13:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:30.123199038Z 2026-04-26 20:13:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:30.147327769Z 2026-04-26 20:13:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:30.722892594Z 2026-04-26 20:13:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:31.629944425Z 2026-04-26 20:13:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:35.124363594Z 2026-04-26 20:13:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:35.125162167Z 2026-04-26 20:13:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:36.094392729Z 2026-04-26 20:13:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:36.441318473Z 2026-04-26 20:13:36 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:13:36.744603829Z 2026-04-26 20:13:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:37.580575451Z 2026-04-26 20:13:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:38.368962245Z 2026-04-26 20:13:38 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:39.057407856Z 2026-04-26 20:13:39 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:13:39.39840772Z 2026-04-26 20:13:39 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:13:40.123340418Z 2026-04-26 20:13:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:40.14369345Z 2026-04-26 20:13:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:43.789741851Z 2026-04-26 20:13:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:45.123234801Z 2026-04-26 20:13:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:48.763680662Z 2026-04-26 20:13:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:50.123143305Z 2026-04-26 20:13:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:51.823528335Z 2026-04-26 20:13:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:13:55.124765122Z 2026-04-26 20:13:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:13:56.686260022Z 2026-04-26 20:13:56 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T20:13:59.715832898Z 2026-04-26 20:13:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:14:00.128076561Z 2026-04-26 20:14:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:04.36581243Z 2026-04-26 20:14:04 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T20:14:05.12320884Z 2026-04-26 20:14:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:05.123857813Z 2026-04-26 20:14:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:07.788560672Z 2026-04-26 20:14:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:14:10.123382822Z 2026-04-26 20:14:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:12.390794605Z 2026-04-26 20:14:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:14:15.123785969Z 2026-04-26 20:14:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:16.401837932Z 2026-04-26 20:14:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:14:20.123212721Z 2026-04-26 20:14:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:23.797896551Z 2026-04-26 20:14:23 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:14:25.122904692Z 2026-04-26 20:14:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:26.178997164Z 2026-04-26 20:14:26 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:14:30.125385636Z 2026-04-26 20:14:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:35.122817828Z 2026-04-26 20:14:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:35.123471861Z 2026-04-26 20:14:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:36.143518315Z 2026-04-26 20:14:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:14:40.123617022Z 2026-04-26 20:14:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:40.146964122Z 2026-04-26 20:14:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:14:44.268823068Z 2026-04-26 20:14:44 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:14:45.123783424Z 2026-04-26 20:14:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:50.123690908Z 2026-04-26 20:14:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:14:55.132204641Z 2026-04-26 20:14:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
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
2026-04-26T20:17:24.01867195Z 2026-04-26 20:17:24 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:17:28.394281252Z 2026-04-26 20:17:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
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
```
