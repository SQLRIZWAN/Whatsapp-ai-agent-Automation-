# Render Deploy Diagnostics

Run: 24994170150
Commit: 3cf4e387169872418e55ea61a2dc1c7ffd527d81
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7nl471j2pic73ckoj60

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
  "updatedAt": "2026-04-27T12:12:25.722849Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7nl471j2pic73ckoj60",
  "commit": {
    "id": "3cf4e387169872418e55ea61a2dc1c7ffd527d81",
    "message": "Trigger deployment with code change after VERCEL_TOKEN update",
    "createdAt": "2026-04-27T12:09:52Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-27T12:10:04.690755Z",
  "updatedAt": "2026-04-27T12:12:25.721527Z",
  "startedAt": "2026-04-27T12:10:04.639523Z",
  "finishedAt": "2026-04-27T12:12:25.72131Z"
}
```

## App logs (last 4h)
```
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
2026-04-27T11:16:13.662300112Z 2026-04-27 11:16:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:18.661099305Z 2026-04-27 11:16:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
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
2026-04-27T11:16:33.66133446Z 2026-04-27 11:16:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:33.757479142Z 2026-04-27 11:16:33 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:16:38.661255703Z 2026-04-27 11:16:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:38.754258976Z 2026-04-27 11:16:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:16:43.660603212Z 2026-04-27 11:16:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:43.754285684Z 2026-04-27 11:16:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:16:48.660859943Z 2026-04-27 11:16:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:48.749632818Z 2026-04-27 11:16:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:16:48.754691133Z 2026-04-27 11:16:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:16:53.660902858Z 2026-04-27 11:16:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:53.755749762Z 2026-04-27 11:16:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:16:58.661633608Z 2026-04-27 11:16:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:16:58.753727014Z 2026-04-27 11:16:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:03.66099098Z 2026-04-27 11:17:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:17:03.754104505Z 2026-04-27 11:17:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:08.661174017Z 2026-04-27 11:17:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:17:08.754065125Z 2026-04-27 11:17:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:13.661403379Z 2026-04-27 11:17:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:17:13.753611065Z 2026-04-27 11:17:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:18.661224239Z 2026-04-27 11:17:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:17:18.749465299Z 2026-04-27 11:17:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:18.753909236Z 2026-04-27 11:17:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:23.661370126Z 2026-04-27 11:17:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:17:23.753670794Z 2026-04-27 11:17:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:28.661313967Z 2026-04-27 11:17:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.137"}
2026-04-27T11:17:28.753630587Z 2026-04-27 11:17:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:33.753822698Z 2026-04-27 11:17:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:38.754857965Z 2026-04-27 11:17:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:43.754799941Z 2026-04-27 11:17:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:48.749728654Z 2026-04-27 11:17:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:48.753206983Z 2026-04-27 11:17:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:53.754664805Z 2026-04-27 11:17:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:17:58.757207077Z 2026-04-27 11:17:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:03.755027486Z 2026-04-27 11:18:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:08.754902935Z 2026-04-27 11:18:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:13.760517818Z 2026-04-27 11:18:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:18.749531658Z 2026-04-27 11:18:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:18.753296965Z 2026-04-27 11:18:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:23.753911928Z 2026-04-27 11:18:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:28.753862321Z 2026-04-27 11:18:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:33.754000602Z 2026-04-27 11:18:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:38.754883004Z 2026-04-27 11:18:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:43.753578955Z 2026-04-27 11:18:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:48.750092245Z 2026-04-27 11:18:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:48.753200163Z 2026-04-27 11:18:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:53.75449582Z 2026-04-27 11:18:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:18:58.753983896Z 2026-04-27 11:18:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:03.754131192Z 2026-04-27 11:19:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:08.753599739Z 2026-04-27 11:19:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:13.753603782Z 2026-04-27 11:19:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:18.750328143Z 2026-04-27 11:19:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:18.754357548Z 2026-04-27 11:19:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:23.753805327Z 2026-04-27 11:19:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:28.753634148Z 2026-04-27 11:19:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:33.754273443Z 2026-04-27 11:19:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:38.75358072Z 2026-04-27 11:19:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:43.753341922Z 2026-04-27 11:19:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:48.752860027Z 2026-04-27 11:19:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:48.756148141Z 2026-04-27 11:19:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:53.754552456Z 2026-04-27 11:19:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:19:58.753634051Z 2026-04-27 11:19:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:03.755224618Z 2026-04-27 11:20:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:08.754027286Z 2026-04-27 11:20:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:13.75400701Z 2026-04-27 11:20:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:18.749961438Z 2026-04-27 11:20:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:18.753737996Z 2026-04-27 11:20:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:23.754300007Z 2026-04-27 11:20:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:28.753323035Z 2026-04-27 11:20:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:33.753871708Z 2026-04-27 11:20:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:38.754225576Z 2026-04-27 11:20:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:43.753280118Z 2026-04-27 11:20:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:48.749427697Z 2026-04-27 11:20:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:48.753590766Z 2026-04-27 11:20:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:53.753983216Z 2026-04-27 11:20:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:20:58.753275947Z 2026-04-27 11:20:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:03.753805394Z 2026-04-27 11:21:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:08.754449836Z 2026-04-27 11:21:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:13.753689887Z 2026-04-27 11:21:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:18.749274566Z 2026-04-27 11:21:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:18.753689532Z 2026-04-27 11:21:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:23.753504862Z 2026-04-27 11:21:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:27.532103329Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-27T11:21:27.60928484Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-27T11:21:28.760720694Z 2026-04-27 11:21:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:33.754869034Z 2026-04-27 11:21:33 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:38.753967666Z 2026-04-27 11:21:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:43.753673257Z 2026-04-27 11:21:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:48.749291751Z 2026-04-27 11:21:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:48.753322046Z 2026-04-27 11:21:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:53.753996756Z 2026-04-27 11:21:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:21:58.753252676Z 2026-04-27 11:21:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:03.760237387Z 2026-04-27 11:22:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:08.755794983Z 2026-04-27 11:22:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:13.760815311Z 2026-04-27 11:22:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:18.749174902Z 2026-04-27 11:22:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:18.753077484Z 2026-04-27 11:22:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:23.753824021Z 2026-04-27 11:22:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:28.756299928Z 2026-04-27 11:22:28 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:33.754327908Z 2026-04-27 11:22:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:38.754017297Z 2026-04-27 11:22:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:43.754445147Z 2026-04-27 11:22:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:48.749756162Z 2026-04-27 11:22:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:48.757808683Z 2026-04-27 11:22:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:53.754113047Z 2026-04-27 11:22:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:22:58.754268613Z 2026-04-27 11:22:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:03.753571174Z 2026-04-27 11:23:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:08.753549456Z 2026-04-27 11:23:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:13.75355017Z 2026-04-27 11:23:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:18.750355193Z 2026-04-27 11:23:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:18.753969216Z 2026-04-27 11:23:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:23.75360551Z 2026-04-27 11:23:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:28.753851553Z 2026-04-27 11:23:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:33.762562998Z 2026-04-27 11:23:33 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:38.755771102Z 2026-04-27 11:23:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:43.756722848Z 2026-04-27 11:23:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:48.749943273Z 2026-04-27 11:23:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:48.753468914Z 2026-04-27 11:23:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:53.758380174Z 2026-04-27 11:23:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:23:58.756064068Z 2026-04-27 11:23:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:03.753679271Z 2026-04-27 11:24:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:08.755041722Z 2026-04-27 11:24:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:13.757876226Z 2026-04-27 11:24:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:18.749157441Z 2026-04-27 11:24:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:18.753049922Z 2026-04-27 11:24:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:23.754422836Z 2026-04-27 11:24:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:28.753931538Z 2026-04-27 11:24:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:33.754166901Z 2026-04-27 11:24:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:38.754307752Z 2026-04-27 11:24:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:43.753314192Z 2026-04-27 11:24:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:48.754803353Z 2026-04-27 11:24:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:48.762598166Z 2026-04-27 11:24:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:53.754170795Z 2026-04-27 11:24:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:24:58.776869503Z 2026-04-27 11:24:58 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:03.754364912Z 2026-04-27 11:25:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:08.753768506Z 2026-04-27 11:25:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:13.755873549Z 2026-04-27 11:25:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:18.750156649Z 2026-04-27 11:25:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:18.753503975Z 2026-04-27 11:25:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:23.75421944Z 2026-04-27 11:25:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:28.754085511Z 2026-04-27 11:25:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:33.754264882Z 2026-04-27 11:25:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:38.754649019Z 2026-04-27 11:25:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:43.754337978Z 2026-04-27 11:25:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:48.749404896Z 2026-04-27 11:25:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:48.753454471Z 2026-04-27 11:25:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:53.753890413Z 2026-04-27 11:25:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:25:58.753300515Z 2026-04-27 11:25:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:03.753249895Z 2026-04-27 11:26:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:08.754152562Z 2026-04-27 11:26:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:13.754527335Z 2026-04-27 11:26:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:18.749306359Z 2026-04-27 11:26:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:18.753271522Z 2026-04-27 11:26:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:23.753849651Z 2026-04-27 11:26:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:28.753340471Z 2026-04-27 11:26:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:33.753427099Z 2026-04-27 11:26:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:38.75394934Z 2026-04-27 11:26:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:43.756796518Z 2026-04-27 11:26:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:48.74960349Z 2026-04-27 11:26:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:48.754074888Z 2026-04-27 11:26:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:53.753596853Z 2026-04-27 11:26:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:26:58.753374345Z 2026-04-27 11:26:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:03.754115816Z 2026-04-27 11:27:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:08.753919141Z 2026-04-27 11:27:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:13.753263164Z 2026-04-27 11:27:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:18.749136558Z 2026-04-27 11:27:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:18.754432329Z 2026-04-27 11:27:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:23.753940378Z 2026-04-27 11:27:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:28.762675971Z 2026-04-27 11:27:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:33.757432586Z 2026-04-27 11:27:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:38.755319981Z 2026-04-27 11:27:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:43.75335114Z 2026-04-27 11:27:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:48.753089919Z 2026-04-27 11:27:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:48.753358507Z 2026-04-27 11:27:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:53.763139014Z 2026-04-27 11:27:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:27:58.754444264Z 2026-04-27 11:27:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:03.753682601Z 2026-04-27 11:28:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:08.754157715Z 2026-04-27 11:28:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:13.754007801Z 2026-04-27 11:28:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:18.750286058Z 2026-04-27 11:28:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:18.753285154Z 2026-04-27 11:28:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:23.753484925Z 2026-04-27 11:28:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:28.753392268Z 2026-04-27 11:28:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:33.754952857Z 2026-04-27 11:28:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:38.755656492Z 2026-04-27 11:28:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:43.755798281Z 2026-04-27 11:28:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:48.749411632Z 2026-04-27 11:28:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:48.75354326Z 2026-04-27 11:28:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:53.753635567Z 2026-04-27 11:28:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:28:58.760364504Z 2026-04-27 11:28:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:03.753750578Z 2026-04-27 11:29:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:08.753636338Z 2026-04-27 11:29:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:13.753816227Z 2026-04-27 11:29:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:18.749928838Z 2026-04-27 11:29:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:18.754371576Z 2026-04-27 11:29:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:20.69479337Z 2026-04-27 11:29:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-27T11:29:20.71011847Z 2026-04-27 11:29:20 [info] [keepalive] ping OK
2026-04-27T11:29:23.753923175Z 2026-04-27 11:29:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:28.753473093Z 2026-04-27 11:29:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:33.754295429Z 2026-04-27 11:29:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:38.753652683Z 2026-04-27 11:29:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:43.756742283Z 2026-04-27 11:29:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:48.749109486Z 2026-04-27 11:29:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:48.753036719Z 2026-04-27 11:29:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:53.754336358Z 2026-04-27 11:29:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:29:58.753495274Z 2026-04-27 11:29:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:03.756121871Z 2026-04-27 11:30:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:08.753837476Z 2026-04-27 11:30:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:13.75397184Z 2026-04-27 11:30:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:18.749604865Z 2026-04-27 11:30:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:18.753655761Z 2026-04-27 11:30:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:23.756088941Z 2026-04-27 11:30:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:28.754417023Z 2026-04-27 11:30:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:33.7553592Z 2026-04-27 11:30:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:38.757069858Z 2026-04-27 11:30:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:43.754564366Z 2026-04-27 11:30:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:48.749565891Z 2026-04-27 11:30:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:48.753377141Z 2026-04-27 11:30:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:53.755521751Z 2026-04-27 11:30:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:30:58.766860415Z 2026-04-27 11:30:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:03.756797714Z 2026-04-27 11:31:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:08.754508787Z 2026-04-27 11:31:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:13.753481945Z 2026-04-27 11:31:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:18.750277561Z 2026-04-27 11:31:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:18.753474812Z 2026-04-27 11:31:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:23.758186285Z 2026-04-27 11:31:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:28.754145127Z 2026-04-27 11:31:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:33.754547505Z 2026-04-27 11:31:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:38.754199842Z 2026-04-27 11:31:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:43.769457437Z 2026-04-27 11:31:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:48.753522406Z 2026-04-27 11:31:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:53.753690607Z 2026-04-27 11:31:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:31:58.757480281Z 2026-04-27 11:31:58 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:32:03.754155282Z 2026-04-27 11:32:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:32:08.754445296Z 2026-04-27 11:32:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:32:13.753624188Z 2026-04-27 11:32:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:32:18.753912131Z 2026-04-27 11:32:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:32:23.75405784Z 2026-04-27 11:32:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.171"}
2026-04-27T11:32:28.755102345Z 2026-04-27 11:32:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.171"}
2026-04-27T12:11:54.311784955Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-27T12:11:54.427062754Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-27T12:12:07.847787911Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-27T12:12:08.949130876Z 
2026-04-27T12:12:08.949161087Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-27T12:12:08.949164917Z > node dist/index.js
2026-04-27T12:12:08.949166747Z 
2026-04-27T12:12:13.655742538Z 2026-04-27 12:12:13 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-27T12:12:14.958002799Z 2026-04-27 12:12:14 [info] Firestore initialized successfully
2026-04-27T12:12:15.048234732Z 2026-04-27 12:12:15 [info] ✅ Server running on http://localhost:10000
2026-04-27T12:12:15.048363666Z 2026-04-27 12:12:15 [info] Environment: production
2026-04-27T12:12:15.04853619Z 2026-04-27 12:12:15 [info] API URL: http://localhost:5000
2026-04-27T12:12:15.048736136Z 2026-04-27 12:12:15 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-27T12:12:15.240238608Z 2026-04-27 12:12:15 [error] Route / not found
2026-04-27T12:12:15.240259379Z Error: Route / not found
2026-04-27T12:12:15.240266299Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T12:12:15.240271709Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:12:15.240277239Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:12:15.24028252Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:12:15.24028694Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T12:12:15.24029112Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T12:12:15.24029544Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T12:12:15.24030339Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:12:15.24030823Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:12:15.24031278Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:12:15.244280537Z 2026-04-27 12:12:15 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-27T12:12:24.619050656Z 2026-04-27 12:12:24 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:12:24.620707241Z 2026-04-27 12:12:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:12:25.926747189Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-27T12:12:25.947794928Z 2026-04-27 12:12:25 [error] Route / not found
2026-04-27T12:12:25.947817039Z Error: Route / not found
2026-04-27T12:12:25.947822319Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T12:12:25.947826909Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:12:25.947832229Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:12:25.947837539Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:12:25.94785433Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T12:12:25.94785901Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T12:12:25.94786338Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T12:12:25.94786803Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:12:25.94788705Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:12:25.94789023Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:12:25.948535898Z 2026-04-27 12:12:25 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-27T12:12:26.126456624Z [0;32m[1m==> [0m[1m[0m
2026-04-27T12:12:26.128965377Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-27T12:12:26.131324907Z [0;32m[1m==> [0m[1m[0m
2026-04-27T12:12:26.133876911Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-27T12:12:26.136145479Z [0;32m[1m==> [0m[1m[0m
2026-04-27T12:12:26.138802705Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-27T12:12:29.604627527Z 2026-04-27 12:12:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:12:34.604698478Z 2026-04-27 12:12:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
```
