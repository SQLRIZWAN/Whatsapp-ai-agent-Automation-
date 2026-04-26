# Render Deploy Diagnostics

Run: 24966000950
Commit: 91a4fa23341685b47f5cde1d8bfd0d22addcfd50
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n73p9j2pic738k4n2g

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
  "updatedAt": "2026-04-26T20:16:04.640932Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n73p9j2pic738k4n2g",
  "commit": {
    "id": "91a4fa23341685b47f5cde1d8bfd0d22addcfd50",
    "message": "fix: improve Baileys connection stability - use stable WA version, Windows Chrome browser, increase timeouts",
    "createdAt": "2026-04-26T20:13:13Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T20:13:26.024947Z",
  "updatedAt": "2026-04-26T20:16:04.634616Z",
  "startedAt": "2026-04-26T20:13:25.893982Z",
  "finishedAt": "2026-04-26T20:16:04.634426Z"
}
```

## App logs (last 4h)
```
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
2026-04-26T20:04:50.243206087Z 2026-04-26 20:04:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:50.247189999Z 2026-04-26 20:04:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:04:55.247404362Z 2026-04-26 20:04:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:00.247514552Z 2026-04-26 20:05:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:03.248115669Z 2026-04-26 20:05:03 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:05:05.248213983Z 2026-04-26 20:05:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:05.333488233Z 2026-04-26 20:05:05 [info] Client disconnected: xch0uMYquhrTsVdbAAAD
2026-04-26T20:05:05.334183987Z 2026-04-26 20:05:05 [info] Client disconnected: g0Bs0tZyUhU5rG0aAAAB
2026-04-26T20:05:09.401463174Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:05:09.532921149Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:05:09.53934362Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:05:09.543640695Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:05:09.548613667Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:05:09.552442209Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:05:09.556499638Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:05:10.24727633Z 2026-04-26 20:05:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:15.247280894Z 2026-04-26 20:05:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:20.247768618Z 2026-04-26 20:05:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:25.248097888Z 2026-04-26 20:05:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:30.247644461Z 2026-04-26 20:05:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:35.248277414Z 2026-04-26 20:05:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:40.247074469Z 2026-04-26 20:05:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:45.247430615Z 2026-04-26 20:05:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:50.247909053Z 2026-04-26 20:05:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:05:55.247110713Z 2026-04-26 20:05:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:06:00.247701001Z 2026-04-26 20:06:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:06:05.248063684Z 2026-04-26 20:06:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.224"}
2026-04-26T20:07:40.124073303Z 2026-04-26 20:07:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:07:45.125236745Z 2026-04-26 20:07:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:07:50.123740501Z 2026-04-26 20:07:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:07:55.123425045Z 2026-04-26 20:07:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:00.122906405Z 2026-04-26 20:08:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:05.122945162Z 2026-04-26 20:08:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:05.123721043Z 2026-04-26 20:08:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:09.818146623Z 2026-04-26 20:08:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:08:10.123862628Z 2026-04-26 20:08:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:15.123796779Z 2026-04-26 20:08:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:20.124991263Z 2026-04-26 20:08:20 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:25.123622258Z 2026-04-26 20:08:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:30.123993178Z 2026-04-26 20:08:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:35.123388024Z 2026-04-26 20:08:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:35.12424411Z 2026-04-26 20:08:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:39.351975656Z 2026-04-26 20:08:39 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T20:08:40.123494726Z 2026-04-26 20:08:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:40.842955662Z 2026-04-26 20:08:40 [info] Client connected: pWJtqh52IIbspIPCAAAB
2026-04-26T20:08:41.014259692Z 2026-04-26 20:08:41 [info] Client disconnected: pWJtqh52IIbspIPCAAAB
2026-04-26T20:08:44.970404464Z 2026-04-26 20:08:44 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:08:45.123420557Z 2026-04-26 20:08:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:45.3131224Z 2026-04-26 20:08:45 [info] {"method":"GET","path":"/messages","status":200,"duration":"323ms","ip":"::1"}
2026-04-26T20:08:45.639892864Z 2026-04-26 20:08:45 [info] {"method":"GET","path":"/calls","status":200,"duration":"165ms","ip":"::1"}
2026-04-26T20:08:45.842805328Z 2026-04-26 20:08:45 [info] Client connected: XoR3ARbiHCjEbZgIAAAD
2026-04-26T20:08:46.142724311Z 2026-04-26 20:08:46 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket XoR3ARbiHCjEbZgIAAAD
2026-04-26T20:08:46.822603617Z 2026-04-26 20:08:46 [info] Client connected: XZFhrafUVSdRAMEgAAAF
2026-04-26T20:08:47.122201059Z 2026-04-26 20:08:47 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket XZFhrafUVSdRAMEgAAAF
2026-04-26T20:08:48.677325907Z 2026-04-26 20:08:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:08:50.123024737Z 2026-04-26 20:08:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:53.18396985Z 2026-04-26 20:08:53 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:08:55.123421979Z 2026-04-26 20:08:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:08:56.64782212Z 2026-04-26 20:08:56 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:00.123598996Z 2026-04-26 20:09:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:01.123607668Z 2026-04-26 20:09:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:01.415314509Z 2026-04-26 20:09:01 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:09:02.111889226Z 2026-04-26 20:09:02 [info] {"method":"POST","path":"/connect","status":200,"duration":"1414ms","ip":"::1"}
2026-04-26T20:09:05.123764073Z 2026-04-26 20:09:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:05.124539605Z 2026-04-26 20:09:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:09.307437264Z 2026-04-26 20:09:09 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:10.124732754Z 2026-04-26 20:09:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:12.521404241Z 2026-04-26 20:09:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:15.12368312Z 2026-04-26 20:09:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:17.014829033Z 2026-04-26 20:09:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:19.810598095Z 2026-04-26 20:09:19 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:09:20.122854542Z 2026-04-26 20:09:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:25.123610028Z 2026-04-26 20:09:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:25.601166988Z 2026-04-26 20:09:25 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:09:29.093928105Z 2026-04-26 20:09:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:30.123123342Z 2026-04-26 20:09:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:33.566503931Z 2026-04-26 20:09:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:35.123798763Z 2026-04-26 20:09:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:35.124398872Z 2026-04-26 20:09:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:37.078158855Z 2026-04-26 20:09:37 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:40.12412164Z 2026-04-26 20:09:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:41.712680644Z 2026-04-26 20:09:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:45.123678808Z 2026-04-26 20:09:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:09:45.160572741Z 2026-04-26 20:09:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:09:49.51901406Z 2026-04-26 20:09:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
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
2026-04-26T20:15:46.374217176Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T20:15:47.569236665Z 
2026-04-26T20:15:47.569267445Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T20:15:47.569274716Z > node dist/index.js
2026-04-26T20:15:47.569276856Z 
2026-04-26T20:15:48.880969173Z 2026-04-26 20:15:48 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:15:50.123419438Z 2026-04-26 20:15:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:52.575535431Z 2026-04-26 20:15:52 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T20:15:52.597163742Z 2026-04-26 20:15:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:15:53.567121001Z 2026-04-26 20:15:53 [info] Firestore initialized successfully
2026-04-26T20:15:53.573571797Z 2026-04-26 20:15:53 [info] ✅ Server running on http://localhost:10000
2026-04-26T20:15:53.573859392Z 2026-04-26 20:15:53 [info] Environment: production
2026-04-26T20:15:53.574082806Z 2026-04-26 20:15:53 [info] API URL: http://localhost:5000
2026-04-26T20:15:53.574361421Z 2026-04-26 20:15:53 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T20:15:53.769328609Z 2026-04-26 20:15:53 [error] Route / not found
2026-04-26T20:15:53.769349229Z Error: Route / not found
2026-04-26T20:15:53.769354659Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:15:53.76935948Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:15:53.769363909Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:15:53.76936788Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:15:53.76937162Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:15:53.76937536Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:15:53.76937905Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:15:53.76938286Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:15:53.76938654Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:15:53.76939029Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:15:53.972191458Z 2026-04-26 20:15:53 [info] {"method":"HEAD","path":"/","status":404,"duration":"201ms","ip":"::1"}
2026-04-26T20:15:55.124924769Z 2026-04-26 20:15:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:15:57.379662727Z 2026-04-26 20:15:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:16:00.125020127Z 2026-04-26 20:16:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:03.394239449Z 2026-04-26 20:16:03 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:16:03.395956559Z 2026-04-26 20:16:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:16:03.572293188Z 2026-04-26 20:16:03 [info] Client disconnected: MpSrcwo559V3L_EaAAAJ
2026-04-26T20:16:03.573158855Z 2026-04-26 20:16:03 [info] Client disconnected: lPKJUcU7FuujIew6AAAH
2026-04-26T20:16:04.793848398Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:16:04.915326283Z 2026-04-26 20:16:04 [error] Route / not found
2026-04-26T20:16:04.915346933Z Error: Route / not found
2026-04-26T20:16:04.915351814Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:16:04.915356214Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:16:04.915360804Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:16:04.915365174Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:16:04.915368784Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:16:04.915372504Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:16:04.915376104Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:16:04.915380114Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:16:04.915396924Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:16:04.915399604Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:16:04.916130027Z 2026-04-26 20:16:04 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T20:16:04.927361713Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:16:04.928232094Z 2026-04-26 20:16:04 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:16:04.929663494Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:16:04.932446278Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:16:04.937327779Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:16:04.941454659Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:16:04.948098636Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:16:05.122962044Z 2026-04-26 20:16:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.34"}
2026-04-26T20:16:08.372167191Z 2026-04-26 20:16:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:16:08.394158704Z 2026-04-26 20:16:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.113"}
2026-04-26T20:16:10.12712141Z 2026-04-26 20:16:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.34"}
```
