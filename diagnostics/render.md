# Render Deploy Diagnostics

Run: 24966695578
Commit: 0dbd3b5126fd80b7daf914fa619b03438d1845c7
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7n7k6l7vvec738vnm1g

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
  "updatedAt": "2026-04-26T20:50:44.201346Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7n7k6l7vvec738vnm1g",
  "commit": {
    "id": "0dbd3b5126fd80b7daf914fa619b03438d1845c7",
    "message": "fix: downgrade Baileys to stable v6.6.0 for better WhatsApp compatibility",
    "createdAt": "2026-04-26T20:48:05Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-26T20:48:26.542236Z",
  "updatedAt": "2026-04-26T20:50:44.199507Z",
  "startedAt": "2026-04-26T20:48:26.498616Z",
  "finishedAt": "2026-04-26T20:50:44.199366Z"
}
```

## App logs (last 4h)
```
2026-04-26T20:38:09.189104574Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-26T20:38:09.32267991Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-26T20:42:35.128427402Z 2026-04-26 20:42:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:35.128465143Z 2026-04-26 20:42:35 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:35.128957087Z 2026-04-26 20:42:35 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 2000ms (attempt 2)
2026-04-26T20:42:36.283589273Z 2026-04-26 20:42:36 [info] Client disconnected: 5wx1sVHFLHCwLxj7AAAF
2026-04-26T20:42:37.131042358Z 2026-04-26 20:42:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 2)
2026-04-26T20:42:37.242235692Z 2026-04-26 20:42:37 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:37.254790671Z 2026-04-26 20:42:37 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:37.364473783Z 2026-04-26 20:42:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:38.031228097Z 2026-04-26 20:42:38 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:42:39.757396635Z 2026-04-26 20:42:39 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T20:42:39.855786654Z 2026-04-26 20:42:39 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:39.858503979Z 2026-04-26 20:42:39 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:40.497491013Z 2026-04-26 20:42:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T20:42:40.598902585Z 2026-04-26 20:42:40 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:40.649115768Z 2026-04-26 20:42:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:40.927092198Z 2026-04-26 20:42:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:40.927118349Z 2026-04-26 20:42:40 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:40.92751872Z 2026-04-26 20:42:40 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 9)
2026-04-26T20:42:42.340012158Z 2026-04-26 20:42:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:42.340051829Z 2026-04-26 20:42:42 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:42.340153372Z 2026-04-26 20:42:42 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 11)
2026-04-26T20:42:42.364806726Z 2026-04-26 20:42:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:42.628064308Z 2026-04-26 20:42:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:42.628086679Z 2026-04-26 20:42:42 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:42.628093799Z 2026-04-26 20:42:42 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 4000ms (attempt 3)
2026-04-26T20:42:45.196245011Z 2026-04-26 20:42:45 [info] {"method":"GET","path":"/calls","status":200,"duration":"116ms","ip":"::1"}
2026-04-26T20:42:45.238911384Z 2026-04-26 20:42:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:45.41470234Z 2026-04-26 20:42:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:45.462786864Z 2026-04-26 20:42:45 [info] {"method":"GET","path":"/messages","status":200,"duration":"320ms","ip":"::1"}
2026-04-26T20:42:46.114578763Z 2026-04-26 20:42:46 [info] Client connected: ZEQZvs9YDo7VzZGuAAAJ
2026-04-26T20:42:46.417194276Z 2026-04-26 20:42:46 [info] {"method":"GET","path":"/calls","status":200,"duration":"100ms","ip":"::1"}
2026-04-26T20:42:46.44870491Z 2026-04-26 20:42:46 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket ZEQZvs9YDo7VzZGuAAAJ
2026-04-26T20:42:46.628889778Z 2026-04-26 20:42:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 3)
2026-04-26T20:42:46.675054968Z 2026-04-26 20:42:46 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:42:46.73424726Z 2026-04-26 20:42:46 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:46.74936317Z 2026-04-26 20:42:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:47.365088808Z 2026-04-26 20:42:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:48.971887945Z 2026-04-26 20:42:48 [info] Client disconnected: ZEQZvs9YDo7VzZGuAAAJ
2026-04-26T20:42:48.971907276Z 2026-04-26 20:42:48 [info] Client disconnected: h5aHhSHHdEUmEedxAAAH
2026-04-26T20:42:50.440348506Z 2026-04-26 20:42:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:42:50.440380356Z 2026-04-26 20:42:50 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:42:50.440559481Z 2026-04-26 20:42:50 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 8000ms (attempt 4)
2026-04-26T20:42:52.053129809Z 2026-04-26 20:42:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:52.36469475Z 2026-04-26 20:42:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:52.60515268Z 2026-04-26 20:42:52 [info] Client connected: Bqhc-EH87_Cn7eQ7AAAL
2026-04-26T20:42:52.914647844Z 2026-04-26 20:42:52 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket Bqhc-EH87_Cn7eQ7AAAL
2026-04-26T20:42:53.478902815Z 2026-04-26 20:42:53 [info] Client connected: DH9qBKe9I-sytw7PAAAN
2026-04-26T20:42:53.792725379Z 2026-04-26 20:42:53 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket DH9qBKe9I-sytw7PAAAN
2026-04-26T20:42:54.449375123Z 2026-04-26 20:42:54 [info] {"method":"GET","path":"/messages","status":200,"duration":"152ms","ip":"::1"}
2026-04-26T20:42:55.893303793Z 2026-04-26 20:42:55 [info] Client disconnected: DH9qBKe9I-sytw7PAAAN
2026-04-26T20:42:55.895191865Z 2026-04-26 20:42:55 [info] Client disconnected: Bqhc-EH87_Cn7eQ7AAAL
2026-04-26T20:42:57.364724025Z 2026-04-26 20:42:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:42:57.523668584Z 2026-04-26 20:42:57 [info] Client connected: fWMy_wImmi6sJpMuAAAP
2026-04-26T20:42:57.862992835Z 2026-04-26 20:42:57 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket fWMy_wImmi6sJpMuAAAP
2026-04-26T20:42:57.989917756Z 2026-04-26 20:42:57 [info] {"method":"GET","path":"/messages","status":200,"duration":"166ms","ip":"::1"}
2026-04-26T20:42:58.441216193Z 2026-04-26 20:42:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 4)
2026-04-26T20:42:58.570311664Z 2026-04-26 20:42:58 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:42:58.572192197Z 2026-04-26 20:42:58 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:42:59.149248051Z 2026-04-26 20:42:59 [info] Client connected: dPMaM7TZ4C1qWf1BAAAR
2026-04-26T20:42:59.262285476Z 2026-04-26 20:42:59 [info] {"method":"GET","path":"/calls","status":200,"duration":"102ms","ip":"::1"}
2026-04-26T20:42:59.599538351Z 2026-04-26 20:42:59 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket dPMaM7TZ4C1qWf1BAAAR
2026-04-26T20:43:01.754702148Z 2026-04-26 20:43:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:01.754745039Z 2026-04-26 20:43:01 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:01.755182901Z 2026-04-26 20:43:01 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 16000ms (attempt 5)
2026-04-26T20:43:02.36444203Z 2026-04-26 20:43:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:07.365224095Z 2026-04-26 20:43:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:10.302165257Z 2026-04-26 20:43:10 [info] {"method":"GET","path":"/calls","status":200,"duration":"100ms","ip":"::1"}
2026-04-26T20:43:10.928326134Z 2026-04-26 20:43:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T20:43:11.025400307Z 2026-04-26 20:43:11 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:11.028152083Z 2026-04-26 20:43:11 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:12.307355384Z 2026-04-26 20:43:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:12.307430496Z 2026-04-26 20:43:12 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:12.308409374Z 2026-04-26 20:43:12 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 10)
2026-04-26T20:43:12.34578077Z 2026-04-26 20:43:12 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T20:43:12.366881815Z 2026-04-26 20:43:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:12.455938126Z 2026-04-26 20:43:12 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:12.46440255Z 2026-04-26 20:43:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:14.243023453Z 2026-04-26 20:43:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:14.243717333Z 2026-04-26 20:43:14 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:14.243732963Z 2026-04-26 20:43:14 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 12)
2026-04-26T20:43:15.372608925Z 2026-04-26 20:43:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:16.446226343Z 2026-04-26 20:43:16 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:17.07487048Z 2026-04-26 20:43:17 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:17.365914002Z 2026-04-26 20:43:17 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:17.755826657Z 2026-04-26 20:43:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 5)
2026-04-26T20:43:17.861793456Z 2026-04-26 20:43:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:17.865203341Z 2026-04-26 20:43:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:18.318867794Z 2026-04-26 20:43:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:19.39744373Z 2026-04-26 20:43:19 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:19.397465841Z 2026-04-26 20:43:19 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:19.397470221Z 2026-04-26 20:43:19 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 6)
2026-04-26T20:43:19.47891163Z 2026-04-26 20:43:19 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:20.011463571Z 2026-04-26 20:43:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:22.053784909Z 2026-04-26 20:43:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:22.365166195Z 2026-04-26 20:43:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:25.427209647Z 2026-04-26 20:43:25 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:43:27.364889321Z 2026-04-26 20:43:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:28.125421756Z 2026-04-26 20:43:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:32.365233175Z 2026-04-26 20:43:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:32.932251192Z 2026-04-26 20:43:32 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:37.36534039Z 2026-04-26 20:43:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:39.301831512Z 2026-04-26 20:43:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:41.97005092Z 2026-04-26 20:43:41 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:42.307989793Z 2026-04-26 20:43:42 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 10)
2026-04-26T20:43:42.364689166Z 2026-04-26 20:43:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:42.413806238Z 2026-04-26 20:43:42 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:42.415779803Z 2026-04-26 20:43:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:43.851833714Z 2026-04-26 20:43:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:44.243625601Z 2026-04-26 20:43:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T20:43:44.358642191Z 2026-04-26 20:43:44 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:44.360477613Z 2026-04-26 20:43:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:45.021792365Z 2026-04-26 20:43:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:45.021852087Z 2026-04-26 20:43:45 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:45.022254888Z 2026-04-26 20:43:45 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 13)
2026-04-26T20:43:46.037291622Z 2026-04-26 20:43:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:46.037334613Z 2026-04-26 20:43:46 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:46.037374204Z 2026-04-26 20:43:46 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 11)
2026-04-26T20:43:47.365629075Z 2026-04-26 20:43:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:49.399897279Z 2026-04-26 20:43:49 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 6)
2026-04-26T20:43:49.505099668Z 2026-04-26 20:43:49 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:43:49.549211951Z 2026-04-26 20:43:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:43:50.332874527Z 2026-04-26 20:43:50 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:43:52.053722528Z 2026-04-26 20:43:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:52.365257829Z 2026-04-26 20:43:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:43:54.786505506Z 2026-04-26 20:43:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:43:54.786535027Z 2026-04-26 20:43:54 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:43:54.786770324Z 2026-04-26 20:43:54 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 7)
2026-04-26T20:43:56.958275944Z 2026-04-26 20:43:56 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:43:57.364957174Z 2026-04-26 20:43:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:02.367107558Z 2026-04-26 20:44:02 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:02.758987307Z 2026-04-26 20:44:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:03.942853394Z 2026-04-26 20:44:03 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:07.365457296Z 2026-04-26 20:44:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:08.213675292Z 2026-04-26 20:44:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:12.365098318Z 2026-04-26 20:44:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:15.02266914Z 2026-04-26 20:44:15 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T20:44:15.128395243Z 2026-04-26 20:44:15 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:15.130310286Z 2026-04-26 20:44:15 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:16.038071854Z 2026-04-26 20:44:16 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 11)
2026-04-26T20:44:16.137867472Z 2026-04-26 20:44:16 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:16.139765765Z 2026-04-26 20:44:16 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:17.365010899Z 2026-04-26 20:44:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:18.383775407Z 2026-04-26 20:44:18 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:18.383842498Z 2026-04-26 20:44:18 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:18.384239969Z 2026-04-26 20:44:18 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 12)
2026-04-26T20:44:20.461493605Z 2026-04-26 20:44:20 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:20.461522576Z 2026-04-26 20:44:20 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:20.461549947Z 2026-04-26 20:44:20 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 14)
2026-04-26T20:44:22.053235515Z 2026-04-26 20:44:22 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:22.364392286Z 2026-04-26 20:44:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:24.786554699Z 2026-04-26 20:44:24 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 7)
2026-04-26T20:44:24.881896233Z 2026-04-26 20:44:24 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:24.883671522Z 2026-04-26 20:44:24 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:27.364483882Z 2026-04-26 20:44:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:27.707716672Z 2026-04-26 20:44:27 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:27.707740993Z 2026-04-26 20:44:27 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:27.708079552Z 2026-04-26 20:44:27 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 8)
2026-04-26T20:44:30.978104143Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-26T20:44:31.030409849Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-26T20:44:32.364677901Z 2026-04-26 20:44:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:37.364367726Z 2026-04-26 20:44:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:40.635152277Z 2026-04-26 20:44:40 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:44:42.364958276Z 2026-04-26 20:44:42 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:43.957459844Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T20:44:45.061654727Z 
2026-04-26T20:44:45.061674078Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T20:44:45.061679028Z > node dist/index.js
2026-04-26T20:44:45.061681328Z 
2026-04-26T20:44:45.202053198Z 2026-04-26 20:44:45 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:47.365370811Z 2026-04-26 20:44:47 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:48.384805307Z 2026-04-26 20:44:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 12)
2026-04-26T20:44:48.549365522Z 2026-04-26 20:44:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:48.553527707Z 2026-04-26 20:44:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:49.260189749Z 2026-04-26 20:44:49 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T20:44:49.891774146Z 2026-04-26 20:44:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:49.891844458Z 2026-04-26 20:44:49 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:49.892256099Z 2026-04-26 20:44:49 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 13)
2026-04-26T20:44:49.903682146Z 2026-04-26 20:44:49 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:50.262014198Z 2026-04-26 20:44:50 [info] Firestore initialized successfully
2026-04-26T20:44:50.266402791Z 2026-04-26 20:44:50 [info] ✅ Server running on http://localhost:10000
2026-04-26T20:44:50.266600896Z 2026-04-26 20:44:50 [info] Environment: production
2026-04-26T20:44:50.35448363Z 2026-04-26 20:44:50 [info] API URL: http://localhost:5000
2026-04-26T20:44:50.360068143Z 2026-04-26 20:44:50 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T20:44:50.46193392Z 2026-04-26 20:44:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 14)
2026-04-26T20:44:50.561987265Z 2026-04-26 20:44:50 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:50.563987221Z 2026-04-26 20:44:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:50.858931836Z 2026-04-26 20:44:50 [error] Route / not found
2026-04-26T20:44:50.858950296Z Error: Route / not found
2026-04-26T20:44:50.858954456Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:44:50.858958526Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:44:50.858961646Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:44:50.858964816Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:44:50.858967806Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:44:50.858970837Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:44:50.858973497Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:44:50.858980347Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:44:50.858986127Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:44:50.858988787Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:44:50.863126543Z 2026-04-26 20:44:50 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T20:44:51.405892976Z 2026-04-26 20:44:51 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:44:51.407513468Z 2026-04-26 20:44:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:44:51.591898941Z 2026-04-26 20:44:51 [info] Client disconnected: fWMy_wImmi6sJpMuAAAP
2026-04-26T20:44:51.594582636Z 2026-04-26 20:44:51 [info] Client disconnected: dPMaM7TZ4C1qWf1BAAAR
2026-04-26T20:44:52.143893139Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:44:52.150436424Z 2026-04-26 20:44:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:44:52.150470204Z 2026-04-26 20:44:52 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:44:52.150699481Z 2026-04-26 20:44:52 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 15)
2026-04-26T20:44:52.224350672Z 2026-04-26 20:44:52 [error] Route / not found
2026-04-26T20:44:52.224366373Z Error: Route / not found
2026-04-26T20:44:52.224370053Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:44:52.224373163Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:44:52.224376413Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:44:52.224379463Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:44:52.224382003Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:44:52.224384703Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:44:52.224401163Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:44:52.224404344Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:44:52.224418214Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:44:52.224421154Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:44:52.225235685Z 2026-04-26 20:44:52 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:52.226377778Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:44:52.228851914Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:44:52.233203141Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:44:52.235228795Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:44:52.237094325Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:44:52.238681348Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:44:52.365586651Z 2026-04-26 20:44:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:56.405201184Z 2026-04-26 20:44:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:44:56.814311834Z 2026-04-26 20:44:56 [info] {"method":"GET","path":"/status","status":200,"duration":"33ms","ip":"::1"}
2026-04-26T20:44:57.359138961Z 2026-04-26 20:44:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:44:57.365460851Z 2026-04-26 20:44:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:44:57.70937654Z 2026-04-26 20:44:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 8)
2026-04-26T20:44:57.797914966Z 2026-04-26 20:44:57 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:44:57.797936457Z 2026-04-26 20:44:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:44:57.910686689Z 2026-04-26 20:44:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:01.405807367Z 2026-04-26 20:45:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:01.407255924Z 2026-04-26 20:45:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:01.893515095Z 2026-04-26 20:45:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:02.365676081Z 2026-04-26 20:45:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:02.386747695Z 2026-04-26 20:45:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:45:02.386793156Z 2026-04-26 20:45:02 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:45:02.387055664Z 2026-04-26 20:45:02 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 9)
2026-04-26T20:45:04.266936031Z 2026-04-26 20:45:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:04.478425604Z 2026-04-26 20:45:04 [info] Client connected: E0kKI0lD8LiDlViiAAAB
2026-04-26T20:45:04.757061061Z 2026-04-26 20:45:04 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket E0kKI0lD8LiDlViiAAAB
2026-04-26T20:45:05.522149555Z 2026-04-26 20:45:05 [info] Client connected: l6K9Saiuz16i5jUfAAAD
2026-04-26T20:45:06.122556072Z 2026-04-26 20:45:06 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket l6K9Saiuz16i5jUfAAAD
2026-04-26T20:45:06.404499234Z 2026-04-26 20:45:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:07.365324075Z 2026-04-26 20:45:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:10.740638807Z 2026-04-26 20:45:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:11.405044099Z 2026-04-26 20:45:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:12.367668483Z 2026-04-26 20:45:12 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:12.798872634Z 2026-04-26 20:45:12 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:13.651080974Z 2026-04-26 20:45:13 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:14.15752296Z 2026-04-26 20:45:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:14.190489703Z 2026-04-26 20:45:14 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T20:45:16.404333995Z 2026-04-26 20:45:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:17.365588859Z 2026-04-26 20:45:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:18.378210868Z 2026-04-26 20:45:18 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:19.894597415Z 2026-04-26 20:45:19 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 13)
2026-04-26T20:45:20.008760792Z 2026-04-26 20:45:20 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:45:20.011022194Z 2026-04-26 20:45:20 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:45:20.409883387Z 2026-04-26 20:45:20 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:21.405218804Z 2026-04-26 20:45:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:22.052716244Z 2026-04-26 20:45:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:45:22.052904629Z 2026-04-26 20:45:22 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:45:22.053083425Z 2026-04-26 20:45:22 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 14)
2026-04-26T20:45:22.152044809Z 2026-04-26 20:45:22 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 15)
2026-04-26T20:45:22.237923991Z 2026-04-26 20:45:22 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:45:22.250769988Z 2026-04-26 20:45:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:45:22.365583102Z 2026-04-26 20:45:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:25.379686263Z 2026-04-26 20:45:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:45:25.379735055Z 2026-04-26 20:45:25 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:45:25.379963781Z 2026-04-26 20:45:25 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 16)
2026-04-26T20:45:26.405139469Z 2026-04-26 20:45:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:27.371328915Z 2026-04-26 20:45:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:30.162873644Z 2026-04-26 20:45:30 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:31.404740689Z 2026-04-26 20:45:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:31.40595354Z 2026-04-26 20:45:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:31.407597692Z 2026-04-26 20:45:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:32.364719085Z 2026-04-26 20:45:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:32.387446995Z 2026-04-26 20:45:32 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 9)
2026-04-26T20:45:32.5015493Z 2026-04-26 20:45:32 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-26T20:45:32.503903346Z 2026-04-26 20:45:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-26T20:45:33.568356621Z 2026-04-26 20:45:33 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:36.404504686Z 2026-04-26 20:45:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:37.364677178Z 2026-04-26 20:45:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:38.048173876Z 2026-04-26 20:45:38 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-26T20:45:38.048196866Z 2026-04-26 20:45:38 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=405, error=Connection Failure
2026-04-26T20:45:38.04833793Z 2026-04-26 20:45:38 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 30000ms (attempt 10)
2026-04-26T20:45:41.405006323Z 2026-04-26 20:45:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:42.364442744Z 2026-04-26 20:45:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:46.404689581Z 2026-04-26 20:45:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:47.364832559Z 2026-04-26 20:45:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.227"}
2026-04-26T20:45:51.405236143Z 2026-04-26 20:45:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:56.405747986Z 2026-04-26 20:45:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:45:57.763697449Z 2026-04-26 20:45:57 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:45:59.248913564Z 2026-04-26 20:45:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:00.314815496Z 2026-04-26 20:46:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:00.827071624Z 2026-04-26 20:46:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:01.403985893Z 2026-04-26 20:46:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:01.404863775Z 2026-04-26 20:46:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:01.419671274Z 2026-04-26 20:46:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:01.943830235Z 2026-04-26 20:46:01 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:02.535668176Z 2026-04-26 20:46:02 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:03.626188387Z 2026-04-26 20:46:03 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:46:04.604513892Z 2026-04-26 20:46:04 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:06.405107766Z 2026-04-26 20:46:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:08.023277328Z 2026-04-26 20:46:08 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:11.348618488Z 2026-04-26 20:46:11 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:11.404473986Z 2026-04-26 20:46:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:14.212615962Z 2026-04-26 20:46:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:15.095466569Z 2026-04-26 20:46:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:16.404915005Z 2026-04-26 20:46:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:21.409762269Z 2026-04-26 20:46:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:26.404700741Z 2026-04-26 20:46:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:28.623852442Z 2026-04-26 20:46:28 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:29.509771408Z 2026-04-26 20:46:29 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:30.107147891Z 2026-04-26 20:46:30 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:46:31.40408358Z 2026-04-26 20:46:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:31.404755157Z 2026-04-26 20:46:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:31.548810078Z 2026-04-26 20:46:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:35.906166493Z 2026-04-26 20:46:35 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:46:36.404734482Z 2026-04-26 20:46:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:39.280546163Z 2026-04-26 20:46:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:41.404493304Z 2026-04-26 20:46:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:43.926501846Z 2026-04-26 20:46:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:46.404298989Z 2026-04-26 20:46:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:47.104613823Z 2026-04-26 20:46:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:51.403848899Z 2026-04-26 20:46:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:46:51.555236228Z 2026-04-26 20:46:51 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:46:55.251429986Z 2026-04-26 20:46:55 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:46:56.404185132Z 2026-04-26 20:46:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:00.300178067Z 2026-04-26 20:47:00 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:47:01.407647997Z 2026-04-26 20:47:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:01.407824921Z 2026-04-26 20:47:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:03.254170992Z 2026-04-26 20:47:03 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:47:06.404383271Z 2026-04-26 20:47:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:07.803518364Z 2026-04-26 20:47:07 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:11.404564096Z 2026-04-26 20:47:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:11.703440383Z 2026-04-26 20:47:11 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:15.652625552Z 2026-04-26 20:47:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:16.404563158Z 2026-04-26 20:47:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:19.224695005Z 2026-04-26 20:47:19 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:47:21.404672674Z 2026-04-26 20:47:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:23.44951498Z 2026-04-26 20:47:23 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:26.40427766Z 2026-04-26 20:47:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:27.117084106Z 2026-04-26 20:47:27 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:31.404893494Z 2026-04-26 20:47:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:31.405713505Z 2026-04-26 20:47:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:31.700672263Z 2026-04-26 20:47:31 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:35.130939126Z 2026-04-26 20:47:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:36.404913204Z 2026-04-26 20:47:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:40.089013166Z 2026-04-26 20:47:40 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:41.404453063Z 2026-04-26 20:47:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:43.182186646Z 2026-04-26 20:47:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:46.4053548Z 2026-04-26 20:47:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:47.762013052Z 2026-04-26 20:47:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:51.405865269Z 2026-04-26 20:47:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:51.594577192Z 2026-04-26 20:47:51 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:47:55.736034017Z 2026-04-26 20:47:55 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:47:56.404548093Z 2026-04-26 20:47:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:47:59.204731389Z 2026-04-26 20:47:59 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:48:01.404391308Z 2026-04-26 20:48:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:48:01.405085446Z 2026-04-26 20:48:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
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
2026-04-26T20:50:28.207307393Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-26T20:50:29.222634619Z 
2026-04-26T20:50:29.222664071Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-26T20:50:29.222669401Z > node dist/index.js
2026-04-26T20:50:29.222671972Z 
2026-04-26T20:50:31.105970537Z 2026-04-26 20:50:31 [info] {"method":"GET","path":"/status","status":200,"duration":"0ms","ip":"::1"}
2026-04-26T20:50:31.40408933Z 2026-04-26 20:50:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:31.404772137Z 2026-04-26 20:50:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:33.711944653Z 2026-04-26 20:50:33 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-26T20:50:35.109532907Z 2026-04-26 20:50:35 [info] Firestore initialized successfully
2026-04-26T20:50:35.115145935Z 2026-04-26 20:50:35 [info] ✅ Server running on http://localhost:10000
2026-04-26T20:50:35.115325526Z 2026-04-26 20:50:35 [info] Environment: production
2026-04-26T20:50:35.115487006Z 2026-04-26 20:50:35 [info] API URL: http://localhost:5000
2026-04-26T20:50:35.115667708Z 2026-04-26 20:50:35 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-26T20:50:35.854061625Z 2026-04-26 20:50:35 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:35.880985065Z 2026-04-26 20:50:35 [error] Route / not found
2026-04-26T20:50:35.881002436Z Error: Route / not found
2026-04-26T20:50:35.881005777Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:50:35.881009417Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:50:35.881012487Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:50:35.881015397Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:50:35.881017557Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:50:35.881019688Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:50:35.881022018Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:50:35.881024428Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:50:35.881026678Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:50:35.881028848Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:50:35.884624107Z 2026-04-26 20:50:35 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-26T20:50:36.404031747Z 2026-04-26 20:50:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:39.104406416Z 2026-04-26 20:50:39 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:41.407353123Z 2026-04-26 20:50:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:43.412197745Z 2026-04-26 20:50:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T20:50:43.413557122Z 2026-04-26 20:50:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
2026-04-26T20:50:43.555691067Z 2026-04-26 20:50:43 [info] Client disconnected: E0kKI0lD8LiDlViiAAAB
2026-04-26T20:50:43.557461472Z 2026-04-26 20:50:43 [info] Client disconnected: l6K9Saiuz16i5jUfAAAD
2026-04-26T20:50:44.234093154Z 2026-04-26 20:50:44 [info] {"method":"GET","path":"/status","status":200,"duration":"3ms","ip":"::1"}
2026-04-26T20:50:44.345913552Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-26T20:50:44.452303098Z 2026-04-26 20:50:44 [error] Route / not found
2026-04-26T20:50:44.452323729Z Error: Route / not found
2026-04-26T20:50:44.452327949Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-26T20:50:44.4523322Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:50:44.4523366Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:50:44.45234091Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:50:44.45234314Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-26T20:50:44.452345261Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-26T20:50:44.452359791Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-26T20:50:44.452362162Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-26T20:50:44.452364252Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-26T20:50:44.452366482Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-26T20:50:44.453055646Z 2026-04-26 20:50:44 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-26T20:50:44.487577115Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:50:44.489850376Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:50:44.492132617Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:50:44.494329566Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-26T20:50:44.498615851Z [0;32m[1m==> [0m[1m[0m
2026-04-26T20:50:44.500556613Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-26T20:50:46.404639306Z 2026-04-26 20:50:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.221"}
2026-04-26T20:50:47.156730777Z 2026-04-26 20:50:47 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-26T20:50:48.410559378Z 2026-04-26 20:50:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.170"}
```
