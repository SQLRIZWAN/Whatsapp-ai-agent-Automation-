# Render Deploy Diagnostics

Run: 24991720314
Commit: b45e1e52a373a5b75d7e60f45906936be00dc3e1
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7nk9da8qa3s73a9a0ng

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
  "updatedAt": "2026-04-27T11:16:29.348701Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7nk9da8qa3s73a9a0ng",
  "commit": {
    "id": "b45e1e52a373a5b75d7e60f45906936be00dc3e1",
    "message": "Fix syntax errors in SettingsPage.tsx styles and verify type safety",
    "createdAt": "2026-04-27T11:12:31Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-27T11:12:54.897987Z",
  "updatedAt": "2026-04-27T11:16:29.347483Z",
  "startedAt": "2026-04-27T11:12:54.663709Z",
  "finishedAt": "2026-04-27T11:16:29.347293Z"
}
```

## App logs (last 4h)
```
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
2026-04-27T11:06:11.583195049Z 2026-04-27 11:06:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:13.66574103Z 2026-04-27 11:06:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:16.58670195Z 2026-04-27 11:06:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:18.661765598Z 2026-04-27 11:06:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:21.58318586Z 2026-04-27 11:06:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:23.660867369Z 2026-04-27 11:06:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:26.583349975Z 2026-04-27 11:06:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:28.661726558Z 2026-04-27 11:06:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:31.583589911Z 2026-04-27 11:06:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:33.661143035Z 2026-04-27 11:06:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:33.662446518Z 2026-04-27 11:06:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:36.584018059Z 2026-04-27 11:06:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:38.661592794Z 2026-04-27 11:06:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:41.583352028Z 2026-04-27 11:06:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:43.662167693Z 2026-04-27 11:06:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:46.583270101Z 2026-04-27 11:06:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:48.661462032Z 2026-04-27 11:06:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:51.583055375Z 2026-04-27 11:06:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.153"}
2026-04-27T11:06:53.661247881Z 2026-04-27 11:06:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:06:58.661098945Z 2026-04-27 11:06:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:03.661615973Z 2026-04-27 11:07:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:03.662673336Z 2026-04-27 11:07:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:08.661006852Z 2026-04-27 11:07:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:13.661613348Z 2026-04-27 11:07:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:18.661222566Z 2026-04-27 11:07:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:23.661864206Z 2026-04-27 11:07:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:28.661611046Z 2026-04-27 11:07:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:33.661428043Z 2026-04-27 11:07:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:33.662711283Z 2026-04-27 11:07:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:38.660972748Z 2026-04-27 11:07:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:43.661545245Z 2026-04-27 11:07:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:48.660429531Z 2026-04-27 11:07:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:53.661060404Z 2026-04-27 11:07:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:07:58.660670067Z 2026-04-27 11:07:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:03.661478015Z 2026-04-27 11:08:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:03.662136727Z 2026-04-27 11:08:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:08.661202589Z 2026-04-27 11:08:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:13.660929054Z 2026-04-27 11:08:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:18.661594193Z 2026-04-27 11:08:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:23.660928758Z 2026-04-27 11:08:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:28.662439185Z 2026-04-27 11:08:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:33.66111587Z 2026-04-27 11:08:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:33.661961867Z 2026-04-27 11:08:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:38.661077857Z 2026-04-27 11:08:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:43.661820495Z 2026-04-27 11:08:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:48.661775042Z 2026-04-27 11:08:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:53.661771514Z 2026-04-27 11:08:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:08:58.660903378Z 2026-04-27 11:08:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:03.661685762Z 2026-04-27 11:09:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:03.662415789Z 2026-04-27 11:09:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:08.661606679Z 2026-04-27 11:09:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:13.66092243Z 2026-04-27 11:09:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:18.661875689Z 2026-04-27 11:09:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:23.662257295Z 2026-04-27 11:09:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:28.661116082Z 2026-04-27 11:09:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:33.661656381Z 2026-04-27 11:09:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:33.662527899Z 2026-04-27 11:09:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:38.66295566Z 2026-04-27 11:09:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:43.661015316Z 2026-04-27 11:09:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:48.661649225Z 2026-04-27 11:09:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:53.661003023Z 2026-04-27 11:09:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:09:58.661741011Z 2026-04-27 11:09:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:03.66070331Z 2026-04-27 11:10:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:03.661441759Z 2026-04-27 11:10:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:08.661134976Z 2026-04-27 11:10:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:13.662325591Z 2026-04-27 11:10:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:18.661574165Z 2026-04-27 11:10:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:23.661412166Z 2026-04-27 11:10:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:28.66115473Z 2026-04-27 11:10:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:33.665802399Z 2026-04-27 11:10:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:33.6658179Z 2026-04-27 11:10:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:38.661588023Z 2026-04-27 11:10:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:43.660875333Z 2026-04-27 11:10:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:48.6607545Z 2026-04-27 11:10:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:53.660929291Z 2026-04-27 11:10:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:58.661218932Z 2026-04-27 11:10:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:10:59.828037974Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-27T11:10:59.920486054Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-27T11:11:03.661142964Z 2026-04-27 11:11:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:03.661998061Z 2026-04-27 11:11:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:08.661074868Z 2026-04-27 11:11:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:13.660882313Z 2026-04-27 11:11:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:18.661666305Z 2026-04-27 11:11:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:23.661816628Z 2026-04-27 11:11:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:28.66119349Z 2026-04-27 11:11:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:33.661387638Z 2026-04-27 11:11:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:33.6621819Z 2026-04-27 11:11:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:38.661648271Z 2026-04-27 11:11:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:43.661437408Z 2026-04-27 11:11:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:48.661217785Z 2026-04-27 11:11:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:53.661034475Z 2026-04-27 11:11:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:11:58.661104236Z 2026-04-27 11:11:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:03.661684128Z 2026-04-27 11:12:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:03.662428296Z 2026-04-27 11:12:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:08.661215078Z 2026-04-27 11:12:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:13.662354785Z 2026-04-27 11:12:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:18.661250306Z 2026-04-27 11:12:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:23.661147057Z 2026-04-27 11:12:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:28.66081593Z 2026-04-27 11:12:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:33.661316179Z 2026-04-27 11:12:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:33.662029535Z 2026-04-27 11:12:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:38.660697821Z 2026-04-27 11:12:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:43.661579151Z 2026-04-27 11:12:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:48.66115994Z 2026-04-27 11:12:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:53.661204586Z 2026-04-27 11:12:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:12:58.660903975Z 2026-04-27 11:12:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:03.661289649Z 2026-04-27 11:13:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:03.66205648Z 2026-04-27 11:13:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:08.660977139Z 2026-04-27 11:13:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:13.661011147Z 2026-04-27 11:13:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:18.661717477Z 2026-04-27 11:13:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:23.660748458Z 2026-04-27 11:13:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:28.66133186Z 2026-04-27 11:13:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:33.660797465Z 2026-04-27 11:13:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:33.661514002Z 2026-04-27 11:13:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:38.661110428Z 2026-04-27 11:13:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:43.661049962Z 2026-04-27 11:13:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:48.661604115Z 2026-04-27 11:13:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:53.661248197Z 2026-04-27 11:13:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:13:58.664771284Z 2026-04-27 11:13:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:03.661677262Z 2026-04-27 11:14:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:03.662514868Z 2026-04-27 11:14:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:08.661537033Z 2026-04-27 11:14:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:13.660980841Z 2026-04-27 11:14:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:18.661365405Z 2026-04-27 11:14:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:23.660762101Z 2026-04-27 11:14:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:28.660809419Z 2026-04-27 11:14:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:33.660667032Z 2026-04-27 11:14:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:33.661355686Z 2026-04-27 11:14:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:38.660803598Z 2026-04-27 11:14:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:43.661142001Z 2026-04-27 11:14:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:48.661118335Z 2026-04-27 11:14:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:53.66082677Z 2026-04-27 11:14:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:14:58.661820475Z 2026-04-27 11:14:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:03.660901202Z 2026-04-27 11:15:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:03.6616382Z 2026-04-27 11:15:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:08.660804683Z 2026-04-27 11:15:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:13.660575315Z 2026-04-27 11:15:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:18.661354546Z 2026-04-27 11:15:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:23.661557183Z 2026-04-27 11:15:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:28.663506477Z 2026-04-27 11:15:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:33.663793392Z 2026-04-27 11:15:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:33.664411121Z 2026-04-27 11:15:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:38.66054837Z 2026-04-27 11:15:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:43.660789982Z 2026-04-27 11:15:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:48.186790295Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-27T11:15:48.237682834Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-27T11:15:48.661447437Z 2026-04-27 11:15:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:53.661270368Z 2026-04-27 11:15:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:15:58.660700678Z 2026-04-27 11:15:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:03.669532057Z 2026-04-27 11:16:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:03.669554939Z 2026-04-27 11:16:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:08.661518224Z 2026-04-27 11:16:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:13.200003992Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-27T11:16:13.662300112Z 2026-04-27 11:16:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:14.399320095Z 
2026-04-27T11:16:14.399354956Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-27T11:16:14.399360406Z > node dist/index.js
2026-04-27T11:16:14.399363076Z 
2026-04-27T11:16:18.661099305Z 2026-04-27 11:16:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:19.300121581Z 2026-04-27 11:16:19 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-27T11:16:20.599939Z 2026-04-27 11:16:20 [info] Firestore initialized successfully
2026-04-27T11:16:20.605430658Z 2026-04-27 11:16:20 [info] ✅ Server running on http://localhost:10000
2026-04-27T11:16:20.605456249Z 2026-04-27 11:16:20 [info] Environment: production
2026-04-27T11:16:20.605460289Z 2026-04-27 11:16:20 [info] API URL: http://localhost:5000
2026-04-27T11:16:20.605464259Z 2026-04-27 11:16:20 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-27T11:16:21.614117398Z 2026-04-27 11:16:21 [error] Route / not found
2026-04-27T11:16:21.614136418Z Error: Route / not found
2026-04-27T11:16:21.614140548Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T11:16:21.614144008Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T11:16:21.614147218Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T11:16:21.614150328Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T11:16:21.614152728Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T11:16:21.614155289Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T11:16:21.614157869Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T11:16:21.614160449Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T11:16:21.614177949Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T11:16:21.61419399Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T11:16:21.61803244Z 2026-04-27 11:16:21 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-27T11:16:23.662007424Z 2026-04-27 11:16:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:28.660666138Z 2026-04-27 11:16:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:28.751571599Z 2026-04-27 11:16:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:16:28.753536226Z 2026-04-27 11:16:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:16:29.466123775Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-27T11:16:29.565652872Z 2026-04-27 11:16:29 [error] Route / not found
2026-04-27T11:16:29.565669853Z Error: Route / not found
2026-04-27T11:16:29.565674102Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T11:16:29.565678253Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T11:16:29.565681993Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T11:16:29.565685663Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T11:16:29.565688833Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T11:16:29.565692833Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T11:16:29.565712724Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T11:16:29.565719814Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T11:16:29.565735734Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T11:16:29.565738034Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T11:16:29.566475845Z 2026-04-27 11:16:29 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-27T11:16:29.594948862Z [0;32m[1m==> [0m[1m[0m
2026-04-27T11:16:29.597133251Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-27T11:16:29.599358991Z [0;32m[1m==> [0m[1m[0m
2026-04-27T11:16:29.602912487Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-27T11:16:29.605242Z [0;32m[1m==> [0m[1m[0m
2026-04-27T11:16:29.607940073Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
```
