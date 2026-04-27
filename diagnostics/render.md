# Render Deploy Diagnostics

Run: 24994874771
Commit: 32cb925dc8a77ad061aa2091d42469885bfaf3ed
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7nlbicvikkc73bbi6u0

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
  "updatedAt": "2026-04-27T12:28:51.441518Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7nlbicvikkc73bbi6u0",
  "commit": {
    "id": "32cb925dc8a77ad061aa2091d42469885bfaf3ed",
    "message": "Trigger deployment after VERCEL_PROJECT_ID and ORG_ID update",
    "createdAt": "2026-04-27T12:25:22Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-27T12:25:45.597894Z",
  "updatedAt": "2026-04-27T12:28:51.439586Z",
  "startedAt": "2026-04-27T12:25:45.548143Z",
  "finishedAt": "2026-04-27T12:28:51.439386Z"
}
```

## App logs (last 4h)
```
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
2026-04-27T12:12:39.604858049Z 2026-04-27 12:12:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:12:44.621849673Z 2026-04-27 12:12:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:12:49.60512321Z 2026-04-27 12:12:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:12:54.627433735Z 2026-04-27 12:12:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:12:54.627500767Z 2026-04-27 12:12:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:12:59.604755581Z 2026-04-27 12:12:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:04.621023883Z 2026-04-27 12:13:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:09.604891723Z 2026-04-27 12:13:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:14.625822499Z 2026-04-27 12:13:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:19.605050494Z 2026-04-27 12:13:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:24.621615611Z 2026-04-27 12:13:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:24.622453114Z 2026-04-27 12:13:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:29.607909125Z 2026-04-27 12:13:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:34.619120237Z 2026-04-27 12:13:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:39.60506199Z 2026-04-27 12:13:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:44.604235208Z 2026-04-27 12:13:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:49.604778382Z 2026-04-27 12:13:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:54.616952658Z 2026-04-27 12:13:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:54.617770999Z 2026-04-27 12:13:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:13:59.604756528Z 2026-04-27 12:13:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:04.620438497Z 2026-04-27 12:14:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:09.604239029Z 2026-04-27 12:14:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:14.619907337Z 2026-04-27 12:14:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:19.607052667Z 2026-04-27 12:14:19 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:24.624440959Z 2026-04-27 12:14:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:24.625228691Z 2026-04-27 12:14:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:29.605376382Z 2026-04-27 12:14:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:34.60438368Z 2026-04-27 12:14:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:39.604721893Z 2026-04-27 12:14:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:44.62608167Z 2026-04-27 12:14:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:49.605108259Z 2026-04-27 12:14:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:54.62036759Z 2026-04-27 12:14:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:54.620963566Z 2026-04-27 12:14:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:14:59.605460842Z 2026-04-27 12:14:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:04.604153028Z 2026-04-27 12:15:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:09.603987783Z 2026-04-27 12:15:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:14.625268375Z 2026-04-27 12:15:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:19.604786624Z 2026-04-27 12:15:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:24.60544926Z 2026-04-27 12:15:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:24.606367565Z 2026-04-27 12:15:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:29.604748369Z 2026-04-27 12:15:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:34.619920224Z 2026-04-27 12:15:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:39.604668861Z 2026-04-27 12:15:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:44.628245561Z 2026-04-27 12:15:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:49.604401346Z 2026-04-27 12:15:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:54.616995259Z 2026-04-27 12:15:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:54.617981796Z 2026-04-27 12:15:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:15:59.604122899Z 2026-04-27 12:15:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:04.607886784Z 2026-04-27 12:16:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:09.604563698Z 2026-04-27 12:16:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:14.62500562Z 2026-04-27 12:16:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:19.605341155Z 2026-04-27 12:16:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:24.605084899Z 2026-04-27 12:16:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:24.605730687Z 2026-04-27 12:16:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:29.605347758Z 2026-04-27 12:16:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:34.604509956Z 2026-04-27 12:16:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:39.60429344Z 2026-04-27 12:16:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:44.627361669Z 2026-04-27 12:16:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:49.605095731Z 2026-04-27 12:16:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:54.621919331Z 2026-04-27 12:16:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:54.669639042Z 2026-04-27 12:16:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:16:59.604991765Z 2026-04-27 12:16:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:04.727634295Z 2026-04-27 12:17:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:09.605897593Z 2026-04-27 12:17:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:14.625429474Z 2026-04-27 12:17:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:19.604448566Z 2026-04-27 12:17:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:23.237474594Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-27T12:17:23.31275345Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-27T12:17:24.619224629Z 2026-04-27 12:17:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:24.619754453Z 2026-04-27 12:17:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:29.604364464Z 2026-04-27 12:17:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:34.622130255Z 2026-04-27 12:17:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:39.604238958Z 2026-04-27 12:17:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:44.606324708Z 2026-04-27 12:17:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:49.606527896Z 2026-04-27 12:17:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:54.604645967Z 2026-04-27 12:17:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:54.605838909Z 2026-04-27 12:17:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:17:59.604215927Z 2026-04-27 12:17:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:04.618315076Z 2026-04-27 12:18:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:09.605240566Z 2026-04-27 12:18:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:14.625936311Z 2026-04-27 12:18:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:19.604421943Z 2026-04-27 12:18:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:24.605282364Z 2026-04-27 12:18:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:24.606389994Z 2026-04-27 12:18:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:29.604342807Z 2026-04-27 12:18:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:34.622732608Z 2026-04-27 12:18:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:39.605169454Z 2026-04-27 12:18:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:44.623169304Z 2026-04-27 12:18:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:49.605247729Z 2026-04-27 12:18:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:54.607812853Z 2026-04-27 12:18:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:54.60883542Z 2026-04-27 12:18:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:18:59.605415884Z 2026-04-27 12:18:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:04.619514196Z 2026-04-27 12:19:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:09.604950229Z 2026-04-27 12:19:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:14.631346131Z 2026-04-27 12:19:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:19.604659197Z 2026-04-27 12:19:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:24.624720098Z 2026-04-27 12:19:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:24.625500289Z 2026-04-27 12:19:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:29.604151328Z 2026-04-27 12:19:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:34.654886801Z 2026-04-27 12:19:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:39.604452158Z 2026-04-27 12:19:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:44.623872319Z 2026-04-27 12:19:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:49.604256592Z 2026-04-27 12:19:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:54.605311239Z 2026-04-27 12:19:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:54.60682024Z 2026-04-27 12:19:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:19:59.604672141Z 2026-04-27 12:19:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:04.619742043Z 2026-04-27 12:20:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:09.604732268Z 2026-04-27 12:20:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:14.604204501Z 2026-04-27 12:20:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:19.604447624Z 2026-04-27 12:20:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:24.62010585Z 2026-04-27 12:20:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:24.620923962Z 2026-04-27 12:20:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:29.604337252Z 2026-04-27 12:20:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:34.623965984Z 2026-04-27 12:20:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:39.605071821Z 2026-04-27 12:20:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:44.626320975Z 2026-04-27 12:20:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:49.604132333Z 2026-04-27 12:20:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:54.673185009Z 2026-04-27 12:20:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:54.673240161Z 2026-04-27 12:20:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:20:59.604360334Z 2026-04-27 12:20:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:04.641478622Z 2026-04-27 12:21:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:09.604995634Z 2026-04-27 12:21:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:14.624429407Z 2026-04-27 12:21:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:19.604528223Z 2026-04-27 12:21:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:24.623697427Z 2026-04-27 12:21:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:24.624410576Z 2026-04-27 12:21:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:29.604245084Z 2026-04-27 12:21:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:34.618958068Z 2026-04-27 12:21:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:39.604472777Z 2026-04-27 12:21:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:44.604221128Z 2026-04-27 12:21:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:49.604150253Z 2026-04-27 12:21:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:54.617104138Z 2026-04-27 12:21:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:54.617651982Z 2026-04-27 12:21:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:21:59.606011036Z 2026-04-27 12:21:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:04.620213813Z 2026-04-27 12:22:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:09.604594409Z 2026-04-27 12:22:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:14.604968183Z 2026-04-27 12:22:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:19.604963277Z 2026-04-27 12:22:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:24.617877557Z 2026-04-27 12:22:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:24.618587106Z 2026-04-27 12:22:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:29.606557026Z 2026-04-27 12:22:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:34.6255993Z 2026-04-27 12:22:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:39.605302207Z 2026-04-27 12:22:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:44.673635963Z 2026-04-27 12:22:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:49.605260839Z 2026-04-27 12:22:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:54.62427393Z 2026-04-27 12:22:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:54.62429006Z 2026-04-27 12:22:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:22:59.604617692Z 2026-04-27 12:22:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:04.623794706Z 2026-04-27 12:23:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:09.605068873Z 2026-04-27 12:23:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:14.628033137Z 2026-04-27 12:23:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:19.604026941Z 2026-04-27 12:23:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:24.612313751Z 2026-04-27 12:23:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:24.69687122Z 2026-04-27 12:23:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:29.604237261Z 2026-04-27 12:23:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:34.605018259Z 2026-04-27 12:23:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:39.604895481Z 2026-04-27 12:23:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:44.625476269Z 2026-04-27 12:23:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:49.604220804Z 2026-04-27 12:23:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:54.604219288Z 2026-04-27 12:23:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:54.604906016Z 2026-04-27 12:23:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:23:59.605119256Z 2026-04-27 12:23:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:04.61704397Z 2026-04-27 12:24:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:09.607685451Z 2026-04-27 12:24:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:14.60529469Z 2026-04-27 12:24:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:19.605140248Z 2026-04-27 12:24:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:24.617160442Z 2026-04-27 12:24:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:24.61785282Z 2026-04-27 12:24:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:29.604081962Z 2026-04-27 12:24:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:34.624903341Z 2026-04-27 12:24:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:39.604590466Z 2026-04-27 12:24:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:44.604322088Z 2026-04-27 12:24:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:49.604194633Z 2026-04-27 12:24:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:54.624301972Z 2026-04-27 12:24:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:54.624781334Z 2026-04-27 12:24:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:24:59.608633949Z 2026-04-27 12:24:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:04.60426663Z 2026-04-27 12:25:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:09.604326118Z 2026-04-27 12:25:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:14.604257333Z 2026-04-27 12:25:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:15.061069163Z 2026-04-27 12:25:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T12:25:15.146502115Z 2026-04-27 12:25:15 [info] [keepalive] ping OK
2026-04-27T12:25:19.605026519Z 2026-04-27 12:25:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:24.616877013Z 2026-04-27 12:25:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:24.617590612Z 2026-04-27 12:25:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:29.604576028Z 2026-04-27 12:25:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:34.616874413Z 2026-04-27 12:25:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:39.608227095Z 2026-04-27 12:25:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:44.631828582Z 2026-04-27 12:25:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:49.604469331Z 2026-04-27 12:25:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:54.618454359Z 2026-04-27 12:25:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:54.619052715Z 2026-04-27 12:25:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:25:59.604342693Z 2026-04-27 12:25:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:04.604407836Z 2026-04-27 12:26:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:09.605134047Z 2026-04-27 12:26:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:14.604413618Z 2026-04-27 12:26:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:19.605648412Z 2026-04-27 12:26:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:24.604423799Z 2026-04-27 12:26:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:24.605240191Z 2026-04-27 12:26:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:29.610659405Z 2026-04-27 12:26:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:34.619358308Z 2026-04-27 12:26:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:39.604558909Z 2026-04-27 12:26:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:44.604937157Z 2026-04-27 12:26:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:49.604766799Z 2026-04-27 12:26:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:54.622810721Z 2026-04-27 12:26:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:54.623370906Z 2026-04-27 12:26:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:26:59.605202797Z 2026-04-27 12:26:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:04.621948064Z 2026-04-27 12:27:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:09.604310476Z 2026-04-27 12:27:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:14.636026344Z 2026-04-27 12:27:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:19.604719527Z 2026-04-27 12:27:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:24.61992352Z 2026-04-27 12:27:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:24.620475935Z 2026-04-27 12:27:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:29.604219432Z 2026-04-27 12:27:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:34.618734914Z 2026-04-27 12:27:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:39.604962916Z 2026-04-27 12:27:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:44.605161473Z 2026-04-27 12:27:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:49.604191338Z 2026-04-27 12:27:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:54.618272576Z 2026-04-27 12:27:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:27:59.604170166Z 2026-04-27 12:27:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:28:04.626890396Z 2026-04-27 12:28:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:28:09.604918233Z 2026-04-27 12:28:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:28:14.679111004Z 2026-04-27 12:28:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:28:19.604945768Z 2026-04-27 12:28:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:28:20.103127506Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-27T12:28:20.204029996Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-27T12:28:24.624029527Z 2026-04-27 12:28:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-27T12:28:33.610848111Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-27T12:28:34.708177194Z 
2026-04-27T12:28:34.708224307Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-27T12:28:34.708231977Z > node dist/index.js
2026-04-27T12:28:34.708234597Z 
2026-04-27T12:28:40.004028649Z 2026-04-27 12:28:39 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-27T12:28:41.40385833Z 2026-04-27 12:28:41 [info] Firestore initialized successfully
2026-04-27T12:28:41.40952016Z 2026-04-27 12:28:41 [info] ✅ Server running on http://localhost:10000
2026-04-27T12:28:41.40966848Z 2026-04-27 12:28:41 [info] Environment: production
2026-04-27T12:28:41.409852702Z 2026-04-27 12:28:41 [info] API URL: http://localhost:5000
2026-04-27T12:28:41.410103348Z 2026-04-27 12:28:41 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-27T12:28:42.011360181Z 2026-04-27 12:28:42 [error] Route / not found
2026-04-27T12:28:42.011387883Z Error: Route / not found
2026-04-27T12:28:42.011394653Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T12:28:42.011400514Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:28:42.011407194Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:28:42.011412775Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:28:42.011417865Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T12:28:42.011422855Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T12:28:42.011428276Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T12:28:42.011433286Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:28:42.011438256Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:28:42.011443037Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:28:42.015602138Z 2026-04-27 12:28:42 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-27T12:28:50.402000747Z 2026-04-27 12:28:50 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:28:50.404440566Z 2026-04-27 12:28:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:28:51.794415423Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-27T12:28:51.834417175Z 2026-04-27 12:28:51 [error] Route / not found
2026-04-27T12:28:51.834442536Z Error: Route / not found
2026-04-27T12:28:51.834448287Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T12:28:51.834453627Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:28:51.834458497Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:28:51.834463998Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:28:51.834468428Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T12:28:51.834472638Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T12:28:51.834477028Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T12:28:51.834481409Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T12:28:51.83450427Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T12:28:51.834507761Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T12:28:51.835479284Z 2026-04-27 12:28:51 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-27T12:28:51.917425375Z [0;32m[1m==> [0m[1m[0m
2026-04-27T12:28:51.920017476Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-27T12:28:51.922147117Z [0;32m[1m==> [0m[1m[0m
2026-04-27T12:28:51.924277358Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-27T12:28:51.92647024Z [0;32m[1m==> [0m[1m[0m
2026-04-27T12:28:51.928683653Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-27T12:28:55.404289996Z 2026-04-27 12:28:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
2026-04-27T12:29:00.40422809Z 2026-04-27 12:29:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.133"}
```
