# Render Deploy Diagnostics

Run: 24967772226
Commit: 875c0deeb64620a355c18c55b8ef2816dd5ab4c5
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n8dqho3t8c73ehmoa0

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
  "updatedAt": "2026-04-26T21:45:27.605304Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n8dqho3t8c73ehmoa0",
  "commit": {
    "id": "875c0deeb64620a355c18c55b8ef2816dd5ab4c5",
    "message": "fix: stabilize WhatsApp QR/auth flow and harden deployment security",
    "createdAt": "2026-04-26T21:42:44Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T21:43:06.292709Z",
  "updatedAt": "2026-04-26T21:45:27.604204Z",
  "startedAt": "2026-04-26T21:43:06.235439Z",
  "finishedAt": "2026-04-26T21:45:27.603987Z"
}
```

## App logs (last 4h)
```
2026-04-26T20:48:04.425965745Z 2026-04-26 20:48:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:06.404843471Z 2026-04-26 20:48:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:07.226734618Z 2026-04-26 20:48:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:11.404544327Z 2026-04-26 20:48:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:12.094972684Z 2026-04-26 20:48:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:15.116754918Z 2026-04-26 20:48:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:16.404411239Z 2026-04-26 20:48:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:19.696486212Z 2026-04-26 20:48:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:21.404823887Z 2026-04-26 20:48:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:23.280916619Z 2026-04-26 20:48:23 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:26.404891428Z 2026-04-26 20:48:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:27.696206894Z 2026-04-26 20:48:27 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:48:31.246028158Z 2026-04-26 20:48:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:31.406077519Z 2026-04-26 20:48:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:31.407512796Z 2026-04-26 20:48:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:35.836534844Z 2026-04-26 20:48:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:36.404479071Z 2026-04-26 20:48:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:39.424572868Z 2026-04-26 20:48:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:41.404299962Z 2026-04-26 20:48:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:43.659228271Z 2026-04-26 20:48:43 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:48:46.403766455Z 2026-04-26 20:48:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:47.283198135Z 2026-04-26 20:48:47 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:48:51.405004796Z 2026-04-26 20:48:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:52.445578615Z 2026-04-26 20:48:52 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:48:55.287253314Z 2026-04-26 20:48:55 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:48:56.404376Z 2026-04-26 20:48:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:59.657659631Z 2026-04-26 20:48:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:01.404472405Z 2026-04-26 20:49:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:01.405024779Z 2026-04-26 20:49:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:03.354653087Z 2026-04-26 20:49:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:06.404198982Z 2026-04-26 20:49:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:07.957349386Z 2026-04-26 20:49:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:11.224347681Z 2026-04-26 20:49:11 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:11.404602159Z 2026-04-26 20:49:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:15.623095569Z 2026-04-26 20:49:15 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:49:16.404039383Z 2026-04-26 20:49:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:19.321227599Z 2026-04-26 20:49:19 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:49:21.404796493Z 2026-04-26 20:49:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:23.4446145Z 2026-04-26 20:49:23 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:26.404148619Z 2026-04-26 20:49:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:27.215877061Z 2026-04-26 20:49:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:31.40439688Z 2026-04-26 20:49:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:31.405079087Z 2026-04-26 20:49:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:31.663817712Z 2026-04-26 20:49:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:35.3550877Z 2026-04-26 20:49:35 [info] {"method":"GET","path":"/status","status":200,"duration":"7ms","ip":"::1"}
2026-04-26T20:49:36.407819353Z 2026-04-26 20:49:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:41.404937217Z 2026-04-26 20:49:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:41.584457547Z 2026-04-26 20:49:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:43.139141753Z 2026-04-26 20:49:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:46.403924421Z 2026-04-26 20:49:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:47.635132169Z 2026-04-26 20:49:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:51.226028095Z 2026-04-26 20:49:51 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:49:51.404734654Z 2026-04-26 20:49:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:55.836685014Z 2026-04-26 20:49:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:49:56.404724347Z 2026-04-26 20:49:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:49:58.519767394Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T20:49:58.591668816Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T20:49:59.238720864Z 2026-04-26 20:49:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:01.404434245Z 2026-04-26 20:50:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:01.405233266Z 2026-04-26 20:50:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:03.918576326Z 2026-04-26 20:50:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:06.411689789Z 2026-04-26 20:50:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:06.609784715Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T20:50:06.674641156Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T20:50:07.144762881Z 2026-04-26 20:50:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:11.404387531Z 2026-04-26 20:50:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:12.587984894Z 2026-04-26 20:50:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:15.133455007Z 2026-04-26 20:50:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:16.404988668Z 2026-04-26 20:50:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:20.015218396Z 2026-04-26 20:50:20 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:50:21.40418308Z 2026-04-26 20:50:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:23.179702699Z 2026-04-26 20:50:23 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:26.404202896Z 2026-04-26 20:50:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:28.037215481Z 2026-04-26 20:50:28 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:50:31.105970537Z 2026-04-26 20:50:31 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:50:31.40408933Z 2026-04-26 20:50:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:31.404772137Z 2026-04-26 20:50:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:35.854061625Z 2026-04-26 20:50:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:36.404031747Z 2026-04-26 20:50:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:39.104406416Z 2026-04-26 20:50:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:41.407353123Z 2026-04-26 20:50:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:43.555691067Z 2026-04-26 20:50:43 [info] Client disconnected: E0kKI0lD8LiDlViiAAAB
2026-04-26T20:50:43.557461472Z 2026-04-26 20:50:43 [info] Client disconnected: l6K9Saiuz16i5jUfAAAD
2026-04-26T20:50:44.345913552Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:50:44.487577115Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:50:44.489850376Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:50:44.492132617Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:50:44.494329566Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:50:44.498615851Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:50:44.500556613Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:50:46.404639306Z 2026-04-26 20:50:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:51.404428266Z 2026-04-26 20:50:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:56.404692929Z 2026-04-26 20:50:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:51:01.403886086Z 2026-04-26 20:51:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:51:06.40443035Z 2026-04-26 20:51:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:51:11.404016001Z 2026-04-26 20:51:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:51:16.404713003Z 2026-04-26 20:51:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:51:21.404885133Z 2026-04-26 20:51:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:51:26.403907655Z 2026-04-26 20:51:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:51:31.404061259Z 2026-04-26 20:51:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:51:36.404639625Z 2026-04-26 20:51:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:51:41.405050438Z 2026-04-26 20:51:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:55:42.712061078Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T20:55:42.800249787Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T21:01:48.409278Z 2026-04-26 21:01:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:01:51.445507266Z 2026-04-26 21:01:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 15)
2026-04-26T21:01:51.538509348Z 2026-04-26 21:01:51 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:01:51.539897406Z 2026-04-26 21:01:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:01:53.410272333Z 2026-04-26 21:01:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:01:55.734237809Z 2026-04-26 21:01:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T21:01:55.837742859Z 2026-04-26 21:01:55 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:01:55.839343261Z 2026-04-26 21:01:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:01:55.930065307Z 2026-04-26 21:01:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:01:55.930092669Z 2026-04-26 21:01:55 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:01:55.9302621Z 2026-04-26 21:01:55 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 16)
2026-04-26T21:01:58.410074788Z 2026-04-26 21:01:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:00.115248966Z 2026-04-26 21:02:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:02:00.115352452Z 2026-04-26 21:02:00 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:02:00.115532624Z 2026-04-26 21:02:00 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 14)
2026-04-26T21:02:03.409770686Z 2026-04-26 21:02:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:08.409286992Z 2026-04-26 21:02:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:13.409360923Z 2026-04-26 21:02:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:13.410077138Z 2026-04-26 21:02:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:18.409484725Z 2026-04-26 21:02:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:23.409894556Z 2026-04-26 21:02:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:25.932889612Z 2026-04-26 21:02:25 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 16)
2026-04-26T21:02:26.028318187Z 2026-04-26 21:02:26 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:02:26.02992649Z 2026-04-26 21:02:26 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:02:28.410170757Z 2026-04-26 21:02:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:30.11859751Z 2026-04-26 21:02:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 14)
2026-04-26T21:02:30.225790995Z 2026-04-26 21:02:30 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:02:30.227499503Z 2026-04-26 21:02:30 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:02:31.032613204Z 2026-04-26 21:02:31 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:02:31.032639476Z 2026-04-26 21:02:31 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:02:31.032792155Z 2026-04-26 21:02:31 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 15)
2026-04-26T21:02:31.404312509Z 2026-04-26 21:02:31 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:02:31.404338371Z 2026-04-26 21:02:31 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:02:31.404422987Z 2026-04-26 21:02:31 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 17)
2026-04-26T21:02:33.410306628Z 2026-04-26 21:02:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:38.409450726Z 2026-04-26 21:02:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:43.409389353Z 2026-04-26 21:02:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:43.410088107Z 2026-04-26 21:02:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:48.4102815Z 2026-04-26 21:02:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:53.412616468Z 2026-04-26 21:02:53 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:02:58.409581554Z 2026-04-26 21:02:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:01.034537418Z 2026-04-26 21:03:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 15)
2026-04-26T21:03:01.120066214Z 2026-04-26 21:03:01 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:03:01.121828986Z 2026-04-26 21:03:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:03:01.40539093Z 2026-04-26 21:03:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 17)
2026-04-26T21:03:01.524742188Z 2026-04-26 21:03:01 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:03:01.604447393Z 2026-04-26 21:03:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:03:02.842871871Z 2026-04-26 21:03:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:03:02.842891412Z 2026-04-26 21:03:02 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:03:02.842895002Z 2026-04-26 21:03:02 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 18)
2026-04-26T21:03:03.409931184Z 2026-04-26 21:03:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:06.264994868Z 2026-04-26 21:03:06 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:03:06.26501902Z 2026-04-26 21:03:06 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:03:06.26502465Z 2026-04-26 21:03:06 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 16)
2026-04-26T21:03:08.410566831Z 2026-04-26 21:03:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:13.409569684Z 2026-04-26 21:03:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:13.410824494Z 2026-04-26 21:03:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:18.410215071Z 2026-04-26 21:03:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:23.409430506Z 2026-04-26 21:03:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:28.409457072Z 2026-04-26 21:03:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:32.843525524Z 2026-04-26 21:03:32 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 18)
2026-04-26T21:03:33.002716299Z 2026-04-26 21:03:33 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:03:33.004411767Z 2026-04-26 21:03:33 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:03:33.409770115Z 2026-04-26 21:03:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:33.58764628Z 2026-04-26 21:03:33 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:03:33.587668191Z 2026-04-26 21:03:33 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:03:33.587673832Z 2026-04-26 21:03:33 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 19)
2026-04-26T21:03:35.128541983Z 2026-04-26 21:03:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T21:03:35.204298576Z 2026-04-26 21:03:35 [info] [keepalive] ping OK
2026-04-26T21:03:36.26408674Z 2026-04-26 21:03:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 16)
2026-04-26T21:03:36.409275063Z 2026-04-26 21:03:36 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:03:36.410813131Z 2026-04-26 21:03:36 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:03:38.410166143Z 2026-04-26 21:03:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:40.751412481Z 2026-04-26 21:03:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:03:40.751467015Z 2026-04-26 21:03:40 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:03:40.751638476Z 2026-04-26 21:03:40 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 17)
2026-04-26T21:03:43.410236629Z 2026-04-26 21:03:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:43.411214071Z 2026-04-26 21:03:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:48.410312335Z 2026-04-26 21:03:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:53.410258782Z 2026-04-26 21:03:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:03:58.40992946Z 2026-04-26 21:03:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:03.410275241Z 2026-04-26 21:04:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:03.587969204Z 2026-04-26 21:04:03 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 19)
2026-04-26T21:04:03.693750839Z 2026-04-26 21:04:03 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:04:03.69548875Z 2026-04-26 21:04:03 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:04:06.346007726Z 2026-04-26 21:04:06 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:04:06.346030548Z 2026-04-26 21:04:06 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:04:06.346169216Z 2026-04-26 21:04:06 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 20)
2026-04-26T21:04:08.409944138Z 2026-04-26 21:04:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:10.753539684Z 2026-04-26 21:04:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 17)
2026-04-26T21:04:10.857345453Z 2026-04-26 21:04:10 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:04:10.858936694Z 2026-04-26 21:04:10 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:04:13.245871189Z 2026-04-26 21:04:13 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:04:13.245889461Z 2026-04-26 21:04:13 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:04:13.245992607Z 2026-04-26 21:04:13 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 18)
2026-04-26T21:04:13.411188294Z 2026-04-26 21:04:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:13.411823635Z 2026-04-26 21:04:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:18.409544396Z 2026-04-26 21:04:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:23.410912939Z 2026-04-26 21:04:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:28.409884028Z 2026-04-26 21:04:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:33.41031744Z 2026-04-26 21:04:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:36.346706724Z 2026-04-26 21:04:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 20)
2026-04-26T21:04:36.459875299Z 2026-04-26 21:04:36 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:04:36.46287851Z 2026-04-26 21:04:36 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:04:38.412181842Z 2026-04-26 21:04:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:41.389197702Z 2026-04-26 21:04:41 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:04:41.389232845Z 2026-04-26 21:04:41 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:04:41.389408966Z 2026-04-26 21:04:41 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 21)
2026-04-26T21:04:43.245949432Z 2026-04-26 21:04:43 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 18)
2026-04-26T21:04:43.326902165Z 2026-04-26 21:04:43 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:04:43.32870089Z 2026-04-26 21:04:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:04:43.410024347Z 2026-04-26 21:04:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:43.410674429Z 2026-04-26 21:04:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:45.526898607Z 2026-04-26 21:04:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:04:45.526928919Z 2026-04-26 21:04:45 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:04:45.527038656Z 2026-04-26 21:04:45 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 19)
2026-04-26T21:04:48.409919432Z 2026-04-26 21:04:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:53.40986358Z 2026-04-26 21:04:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:04:58.410431276Z 2026-04-26 21:04:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:03.41033353Z 2026-04-26 21:05:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:08.409872819Z 2026-04-26 21:05:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:11.391479489Z 2026-04-26 21:05:11 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 21)
2026-04-26T21:05:11.492364212Z 2026-04-26 21:05:11 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:05:11.493888559Z 2026-04-26 21:05:11 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:05:12.673970087Z 2026-04-26 21:05:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:05:12.673991748Z 2026-04-26 21:05:12 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:05:12.674068493Z 2026-04-26 21:05:12 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 22)
2026-04-26T21:05:13.410171636Z 2026-04-26 21:05:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:13.410844339Z 2026-04-26 21:05:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:15.527516224Z 2026-04-26 21:05:15 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 19)
2026-04-26T21:05:15.632877472Z 2026-04-26 21:05:15 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:05:15.634495035Z 2026-04-26 21:05:15 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:05:17.905819525Z 2026-04-26 21:05:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:05:17.905853177Z 2026-04-26 21:05:17 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:05:17.905959064Z 2026-04-26 21:05:17 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 20)
2026-04-26T21:05:18.413226968Z 2026-04-26 21:05:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:23.409640467Z 2026-04-26 21:05:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:28.410250961Z 2026-04-26 21:05:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:33.409936516Z 2026-04-26 21:05:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:38.410066099Z 2026-04-26 21:05:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:42.673825051Z 2026-04-26 21:05:42 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 22)
2026-04-26T21:05:42.775185884Z 2026-04-26 21:05:42 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:05:42.776760015Z 2026-04-26 21:05:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:05:43.410090994Z 2026-04-26 21:05:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:43.410764767Z 2026-04-26 21:05:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:44.377096896Z 2026-04-26 21:05:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:05:44.377173231Z 2026-04-26 21:05:44 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:05:44.377326561Z 2026-04-26 21:05:44 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 23)
2026-04-26T21:05:47.906644226Z 2026-04-26 21:05:47 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 20)
2026-04-26T21:05:48.006461761Z 2026-04-26 21:05:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:05:48.008077324Z 2026-04-26 21:05:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:05:48.409811219Z 2026-04-26 21:05:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:53.213836555Z 2026-04-26 21:05:53 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:05:53.213865687Z 2026-04-26 21:05:53 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:05:53.213946112Z 2026-04-26 21:05:53 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 21)
2026-04-26T21:05:53.409705064Z 2026-04-26 21:05:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:05:58.409984193Z 2026-04-26 21:05:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:03.409842375Z 2026-04-26 21:06:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:08.409634452Z 2026-04-26 21:06:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:13.409762319Z 2026-04-26 21:06:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:13.410422781Z 2026-04-26 21:06:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:14.3777063Z 2026-04-26 21:06:14 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 23)
2026-04-26T21:06:14.469531366Z 2026-04-26 21:06:14 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:06:14.471866584Z 2026-04-26 21:06:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:06:17.083777003Z 2026-04-26 21:06:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:06:17.083873319Z 2026-04-26 21:06:17 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:06:17.08389112Z 2026-04-26 21:06:17 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 24)
2026-04-26T21:06:18.410243568Z 2026-04-26 21:06:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:23.215725702Z 2026-04-26 21:06:23 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 21)
2026-04-26T21:06:23.40968362Z 2026-04-26 21:06:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:23.563707265Z 2026-04-26 21:06:23 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:06:23.565807259Z 2026-04-26 21:06:23 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:06:25.500336674Z 2026-04-26 21:06:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:06:25.500456371Z 2026-04-26 21:06:25 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:06:25.500510965Z 2026-04-26 21:06:25 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 22)
2026-04-26T21:06:28.40925569Z 2026-04-26 21:06:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:33.410167474Z 2026-04-26 21:06:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:38.409433832Z 2026-04-26 21:06:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:43.410473113Z 2026-04-26 21:06:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:43.411235322Z 2026-04-26 21:06:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:47.085732613Z 2026-04-26 21:06:47 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 24)
2026-04-26T21:06:47.258595738Z 2026-04-26 21:06:47 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:06:47.30654084Z 2026-04-26 21:06:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:06:48.41083263Z 2026-04-26 21:06:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:52.987324382Z 2026-04-26 21:06:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:06:52.987347544Z 2026-04-26 21:06:52 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:06:52.98759734Z 2026-04-26 21:06:52 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 25)
2026-04-26T21:06:53.409769325Z 2026-04-26 21:06:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:55.500920079Z 2026-04-26 21:06:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 22)
2026-04-26T21:06:55.606616628Z 2026-04-26 21:06:55 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:06:55.608638667Z 2026-04-26 21:06:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:06:58.410594781Z 2026-04-26 21:06:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:06:58.97844941Z 2026-04-26 21:06:58 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:06:58.978469412Z 2026-04-26 21:06:58 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:06:58.978576448Z 2026-04-26 21:06:58 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 23)
2026-04-26T21:07:03.409803942Z 2026-04-26 21:07:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:08.409827114Z 2026-04-26 21:07:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:13.41023596Z 2026-04-26 21:07:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:13.410765524Z 2026-04-26 21:07:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:18.410312705Z 2026-04-26 21:07:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:22.988512362Z 2026-04-26 21:07:22 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 25)
2026-04-26T21:07:23.093022455Z 2026-04-26 21:07:23 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:07:23.094375141Z 2026-04-26 21:07:23 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:07:23.410178145Z 2026-04-26 21:07:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:25.606372994Z 2026-04-26 21:07:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:07:25.606401046Z 2026-04-26 21:07:25 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:07:28.410040804Z 2026-04-26 21:07:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:28.979173425Z 2026-04-26 21:07:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 23)
2026-04-26T21:07:29.069249939Z 2026-04-26 21:07:29 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:07:29.070986029Z 2026-04-26 21:07:29 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:07:30.705969112Z 2026-04-26 21:07:30 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:07:30.705986623Z 2026-04-26 21:07:30 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:07:30.70609615Z 2026-04-26 21:07:30 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 24)
2026-04-26T21:07:33.411718638Z 2026-04-26 21:07:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:38.410313225Z 2026-04-26 21:07:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:43.410306481Z 2026-04-26 21:07:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:43.410980434Z 2026-04-26 21:07:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:48.409778932Z 2026-04-26 21:07:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:53.409595215Z 2026-04-26 21:07:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:07:58.411280186Z 2026-04-26 21:07:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:00.70655574Z 2026-04-26 21:08:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 24)
2026-04-26T21:08:00.877212484Z 2026-04-26 21:08:00 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:08:00.879198321Z 2026-04-26 21:08:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:08:02.527976859Z 2026-04-26 21:08:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:08:02.528020542Z 2026-04-26 21:08:02 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:08:02.528210414Z 2026-04-26 21:08:02 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 25)
2026-04-26T21:08:03.410535502Z 2026-04-26 21:08:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:08.411400729Z 2026-04-26 21:08:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:13.409490929Z 2026-04-26 21:08:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:13.409982701Z 2026-04-26 21:08:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:18.410161643Z 2026-04-26 21:08:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:23.409914608Z 2026-04-26 21:08:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:28.410400648Z 2026-04-26 21:08:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:32.529003869Z 2026-04-26 21:08:32 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 25)
2026-04-26T21:08:32.729405555Z 2026-04-26 21:08:32 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T21:08:32.731065491Z 2026-04-26 21:08:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T21:08:33.409460036Z 2026-04-26 21:08:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:33.865786285Z 2026-04-26 21:08:33 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T21:08:33.865806556Z 2026-04-26 21:08:33 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T21:08:38.410063993Z 2026-04-26 21:08:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:43.410901773Z 2026-04-26 21:08:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:43.411607458Z 2026-04-26 21:08:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:48.40949507Z 2026-04-26 21:08:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:53.410246054Z 2026-04-26 21:08:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:08:58.409650281Z 2026-04-26 21:08:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:03.409952975Z 2026-04-26 21:09:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:08.414600474Z 2026-04-26 21:09:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:13.409727917Z 2026-04-26 21:09:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:13.41040214Z 2026-04-26 21:09:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:18.40973873Z 2026-04-26 21:09:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:23.409985927Z 2026-04-26 21:09:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:28.410359262Z 2026-04-26 21:09:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:33.410264116Z 2026-04-26 21:09:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:38.409781234Z 2026-04-26 21:09:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:43.410573044Z 2026-04-26 21:09:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:43.41130315Z 2026-04-26 21:09:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:48.409900779Z 2026-04-26 21:09:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:53.410082898Z 2026-04-26 21:09:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:09:58.409916994Z 2026-04-26 21:09:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:03.409679785Z 2026-04-26 21:10:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:08.410806741Z 2026-04-26 21:10:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:13.409633921Z 2026-04-26 21:10:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:13.410299744Z 2026-04-26 21:10:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:18.409890191Z 2026-04-26 21:10:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:23.4104577Z 2026-04-26 21:10:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:28.410270911Z 2026-04-26 21:10:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:33.410409872Z 2026-04-26 21:10:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:38.410743764Z 2026-04-26 21:10:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:43.409608562Z 2026-04-26 21:10:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:43.41005223Z 2026-04-26 21:10:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:48.410095103Z 2026-04-26 21:10:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:53.409375506Z 2026-04-26 21:10:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:10:58.412034873Z 2026-04-26 21:10:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:03.409186768Z 2026-04-26 21:11:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:08.410015849Z 2026-04-26 21:11:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:13.409212586Z 2026-04-26 21:11:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:13.409729849Z 2026-04-26 21:11:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:18.409200562Z 2026-04-26 21:11:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:23.409851411Z 2026-04-26 21:11:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:28.41036128Z 2026-04-26 21:11:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:33.40964602Z 2026-04-26 21:11:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:38.410260575Z 2026-04-26 21:11:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:43.409683093Z 2026-04-26 21:11:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:43.41058014Z 2026-04-26 21:11:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:48.409663547Z 2026-04-26 21:11:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:53.410631693Z 2026-04-26 21:11:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:11:58.409466553Z 2026-04-26 21:11:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:03.410142049Z 2026-04-26 21:12:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:08.410196516Z 2026-04-26 21:12:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:13.410447305Z 2026-04-26 21:12:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:13.411172931Z 2026-04-26 21:12:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:18.409285983Z 2026-04-26 21:12:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:23.413411477Z 2026-04-26 21:12:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:28.412679602Z 2026-04-26 21:12:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:33.409691533Z 2026-04-26 21:12:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:38.409781939Z 2026-04-26 21:12:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:43.409757468Z 2026-04-26 21:12:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:43.410284682Z 2026-04-26 21:12:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:48.413121222Z 2026-04-26 21:12:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:53.4104183Z 2026-04-26 21:12:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:12:58.410096168Z 2026-04-26 21:12:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:03.410130029Z 2026-04-26 21:13:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:08.409404711Z 2026-04-26 21:13:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:13.40958048Z 2026-04-26 21:13:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:13.410229331Z 2026-04-26 21:13:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:18.409889957Z 2026-04-26 21:13:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:23.409852452Z 2026-04-26 21:13:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:28.410137636Z 2026-04-26 21:13:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:33.409846574Z 2026-04-26 21:13:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:38.41000175Z 2026-04-26 21:13:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:43.410405351Z 2026-04-26 21:13:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:43.411141688Z 2026-04-26 21:13:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:48.410270737Z 2026-04-26 21:13:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:53.410036337Z 2026-04-26 21:13:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:13:58.409792806Z 2026-04-26 21:13:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:03.410246578Z 2026-04-26 21:14:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:08.409708617Z 2026-04-26 21:14:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:13.409892372Z 2026-04-26 21:14:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:13.410726465Z 2026-04-26 21:14:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:18.410359384Z 2026-04-26 21:14:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:23.410185285Z 2026-04-26 21:14:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:28.409983304Z 2026-04-26 21:14:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:33.409571639Z 2026-04-26 21:14:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:38.409487104Z 2026-04-26 21:14:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:43.410020769Z 2026-04-26 21:14:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:43.410886364Z 2026-04-26 21:14:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:48.410925186Z 2026-04-26 21:14:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:53.409227798Z 2026-04-26 21:14:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:14:58.410262983Z 2026-04-26 21:14:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:03.409741329Z 2026-04-26 21:15:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:08.409335082Z 2026-04-26 21:15:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:13.409874655Z 2026-04-26 21:15:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:13.410486433Z 2026-04-26 21:15:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:18.410946Z 2026-04-26 21:15:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:23.41002246Z 2026-04-26 21:15:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:28.409677515Z 2026-04-26 21:15:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:33.409733875Z 2026-04-26 21:15:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:38.409820327Z 2026-04-26 21:15:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:43.409742418Z 2026-04-26 21:15:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:48.409799007Z 2026-04-26 21:15:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:53.410100791Z 2026-04-26 21:15:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:15:58.410027342Z 2026-04-26 21:15:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:16:03.411268475Z 2026-04-26 21:16:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:16:08.410285906Z 2026-04-26 21:16:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:16:13.410398506Z 2026-04-26 21:16:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:16:18.410329525Z 2026-04-26 21:16:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:16:23.409618192Z 2026-04-26 21:16:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:16:28.410147238Z 2026-04-26 21:16:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.170"}
2026-04-26T21:44:56.497927957Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T21:44:56.549069053Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T21:45:10.153284036Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T21:45:11.25212164Z 
2026-04-26T21:45:11.252145971Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T21:45:11.252152751Z > node dist/index.js
2026-04-26T21:45:11.252155331Z 
2026-04-26T21:45:16.646880192Z 2026-04-26 21:45:16 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T21:45:17.851981374Z 2026-04-26 21:45:17 [info] Firestore initialized successfully
2026-04-26T21:45:17.94543486Z 2026-04-26 21:45:17 [info] ✅ Server running on http://localhost:10000
2026-04-26T21:45:17.945562543Z 2026-04-26 21:45:17 [info] Environment: production
2026-04-26T21:45:17.945718796Z 2026-04-26 21:45:17 [info] API URL: http://localhost:5000
2026-04-26T21:45:17.94591228Z 2026-04-26 21:45:17 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T21:45:18.738818016Z 2026-04-26 21:45:18 [error] Route / not found
2026-04-26T21:45:18.738838836Z Error: Route / not found
2026-04-26T21:45:18.738843956Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T21:45:18.738848627Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T21:45:18.738854807Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T21:45:18.738859167Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T21:45:18.738862897Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T21:45:18.738866557Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T21:45:18.738870467Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T21:45:18.738874167Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T21:45:18.738877877Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T21:45:18.738881577Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T21:45:18.74249948Z 2026-04-26 21:45:18 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T21:45:26.938351764Z 2026-04-26 21:45:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:45:26.93988778Z 2026-04-26 21:45:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.134"}
2026-04-26T21:45:27.743974816Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T21:45:27.850330803Z 2026-04-26 21:45:27 [error] Route / not found
2026-04-26T21:45:27.850357394Z Error: Route / not found
2026-04-26T21:45:27.850362994Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T21:45:27.850368014Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T21:45:27.850372914Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T21:45:27.850378115Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T21:45:27.850382075Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T21:45:27.850386435Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T21:45:27.850390295Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T21:45:27.850394195Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T21:45:27.850417115Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T21:45:27.850419695Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T21:45:27.850422076Z 2026-04-26 21:45:27 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-26T21:45:27.918520224Z [0;32m[1m==> [0m[1m[0m
2026-04-26T21:45:27.941166884Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T21:45:27.949631952Z [0;32m[1m==> [0m[1m[0m
2026-04-26T21:45:27.961952113Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T21:45:27.981461889Z [0;32m[1m==> [0m[1m[0m
2026-04-26T21:45:27.987866441Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
```
