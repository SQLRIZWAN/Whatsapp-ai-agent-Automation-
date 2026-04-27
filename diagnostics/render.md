# Render Deploy Diagnostics

Run: 25014594770
Commit: 8558f3482ec6242a06600140e61a94f47fb57763
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7nrc40sfn5c73e9mfr0

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
  "updatedAt": "2026-04-27T12:56:10.214878Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7nrc40sfn5c73e9mfr0",
  "commit": {
    "id": "8558f3482ec6242a06600140e61a94f47fb57763",
    "message": "feat: move frontend to github pages and harden render backend",
    "createdAt": "2026-04-27T19:15:12Z"
  },
  "status": "build_failed",
  "trigger": "api",
  "createdAt": "2026-04-27T19:16:32.609221Z",
  "updatedAt": "2026-04-27T19:18:29.288483Z",
  "startedAt": "2026-04-27T19:16:32.545804Z",
  "finishedAt": "2026-04-27T19:18:29.287908Z"
}
```

## App logs (last 4h)
```
2026-04-27T18:29:37.758801368Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-27T18:29:39.055285077Z 
2026-04-27T18:29:39.055312039Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-27T18:29:39.05531893Z > node dist/index.js
2026-04-27T18:29:39.05532158Z 
2026-04-27T18:29:44.252998174Z 2026-04-27 18:29:44 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-27T18:29:45.555143956Z 2026-04-27 18:29:45 [info] Firestore initialized successfully
2026-04-27T18:29:45.559553765Z 2026-04-27 18:29:45 [info] ✅ Server running on http://localhost:10000
2026-04-27T18:29:45.559720737Z 2026-04-27 18:29:45 [info] Environment: production
2026-04-27T18:29:45.560511986Z 2026-04-27 18:29:45 [info] API URL: http://localhost:5000
2026-04-27T18:29:45.560682519Z 2026-04-27 18:29:45 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-27T18:29:51.351304056Z 2026-04-27 18:29:51 [info] {"method":"GET","path":"/health","status":200,"duration":"35ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:29:51.354737182Z 2026-04-27 18:29:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:29:52.058315293Z 2026-04-27 18:29:52 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T18:29:56.305246322Z 2026-04-27 18:29:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:01.304449032Z 2026-04-27 18:30:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:06.304445292Z 2026-04-27 18:30:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:11.304647747Z 2026-04-27 18:30:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:16.311805652Z 2026-04-27 18:30:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:21.304714195Z 2026-04-27 18:30:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:21.306815121Z 2026-04-27 18:30:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:26.305725702Z 2026-04-27 18:30:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:31.303643189Z 2026-04-27 18:30:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:36.303907182Z 2026-04-27 18:30:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:41.30449581Z 2026-04-27 18:30:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:46.304245405Z 2026-04-27 18:30:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:51.304175244Z 2026-04-27 18:30:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:51.305026168Z 2026-04-27 18:30:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:30:56.303856076Z 2026-04-27 18:30:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:01.304619448Z 2026-04-27 18:31:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:06.304212284Z 2026-04-27 18:31:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:11.304297887Z 2026-04-27 18:31:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:16.304779419Z 2026-04-27 18:31:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:21.30441231Z 2026-04-27 18:31:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:21.305278094Z 2026-04-27 18:31:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:26.313183642Z 2026-04-27 18:31:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:31.304278767Z 2026-04-27 18:31:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:36.304328839Z 2026-04-27 18:31:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:41.30514398Z 2026-04-27 18:31:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:46.303734705Z 2026-04-27 18:31:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:51.30391956Z 2026-04-27 18:31:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:51.304827117Z 2026-04-27 18:31:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:31:56.304430349Z 2026-04-27 18:31:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:01.305946174Z 2026-04-27 18:32:01 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:06.303795356Z 2026-04-27 18:32:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:11.303914787Z 2026-04-27 18:32:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:16.303579085Z 2026-04-27 18:32:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:21.304625227Z 2026-04-27 18:32:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:21.305542155Z 2026-04-27 18:32:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:26.30394081Z 2026-04-27 18:32:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:31.304423781Z 2026-04-27 18:32:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:36.304271815Z 2026-04-27 18:32:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:41.303900772Z 2026-04-27 18:32:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:46.303948092Z 2026-04-27 18:32:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:51.304356549Z 2026-04-27 18:32:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:51.305072432Z 2026-04-27 18:32:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:32:56.304096147Z 2026-04-27 18:32:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:01.304534457Z 2026-04-27 18:33:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:06.304349311Z 2026-04-27 18:33:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:11.303743945Z 2026-04-27 18:33:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:16.303943129Z 2026-04-27 18:33:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:21.304425174Z 2026-04-27 18:33:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:21.305161159Z 2026-04-27 18:33:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:26.303629375Z 2026-04-27 18:33:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:31.303809099Z 2026-04-27 18:33:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:36.304130034Z 2026-04-27 18:33:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:41.303338567Z 2026-04-27 18:33:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:46.304506636Z 2026-04-27 18:33:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:51.303612132Z 2026-04-27 18:33:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:51.305795495Z 2026-04-27 18:33:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:33:56.304648272Z 2026-04-27 18:33:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:01.30376462Z 2026-04-27 18:34:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:06.303471722Z 2026-04-27 18:34:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:11.303903298Z 2026-04-27 18:34:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:16.303662816Z 2026-04-27 18:34:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:21.303950432Z 2026-04-27 18:34:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:21.304677497Z 2026-04-27 18:34:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:26.303721641Z 2026-04-27 18:34:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:31.30388375Z 2026-04-27 18:34:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:36.303991785Z 2026-04-27 18:34:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:41.304323186Z 2026-04-27 18:34:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:46.30386059Z 2026-04-27 18:34:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:51.304912496Z 2026-04-27 18:34:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:51.305725947Z 2026-04-27 18:34:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:34:56.303755129Z 2026-04-27 18:34:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:01.307146921Z 2026-04-27 18:35:01 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:06.304283327Z 2026-04-27 18:35:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:11.304195391Z 2026-04-27 18:35:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:16.303614008Z 2026-04-27 18:35:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:21.304243586Z 2026-04-27 18:35:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:21.305036886Z 2026-04-27 18:35:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:26.304321874Z 2026-04-27 18:35:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:31.306157873Z 2026-04-27 18:35:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:36.303946981Z 2026-04-27 18:35:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:41.303414624Z 2026-04-27 18:35:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:46.30465066Z 2026-04-27 18:35:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:51.303580294Z 2026-04-27 18:35:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:51.304243913Z 2026-04-27 18:35:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:35:56.303551726Z 2026-04-27 18:35:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:01.304541865Z 2026-04-27 18:36:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:06.303914333Z 2026-04-27 18:36:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:11.305580264Z 2026-04-27 18:36:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:16.303888483Z 2026-04-27 18:36:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:21.304332604Z 2026-04-27 18:36:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:21.305039506Z 2026-04-27 18:36:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:26.304314289Z 2026-04-27 18:36:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:31.303777887Z 2026-04-27 18:36:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:36.304004252Z 2026-04-27 18:36:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:41.303864001Z 2026-04-27 18:36:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:46.303852799Z 2026-04-27 18:36:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:51.304056643Z 2026-04-27 18:36:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:51.304991413Z 2026-04-27 18:36:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:36:56.304363547Z 2026-04-27 18:36:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:01.304376748Z 2026-04-27 18:37:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:06.304282922Z 2026-04-27 18:37:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:11.303618125Z 2026-04-27 18:37:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:16.304193459Z 2026-04-27 18:37:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:21.304372175Z 2026-04-27 18:37:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:21.305042855Z 2026-04-27 18:37:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:26.303795755Z 2026-04-27 18:37:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:31.304148124Z 2026-04-27 18:37:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:36.30363841Z 2026-04-27 18:37:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:41.303265587Z 2026-04-27 18:37:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:46.303635949Z 2026-04-27 18:37:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:51.304132731Z 2026-04-27 18:37:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:51.304737516Z 2026-04-27 18:37:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:37:56.304122856Z 2026-04-27 18:37:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:01.303957959Z 2026-04-27 18:38:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:06.303457119Z 2026-04-27 18:38:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:11.303891178Z 2026-04-27 18:38:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:16.304590018Z 2026-04-27 18:38:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:21.304184436Z 2026-04-27 18:38:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:21.305601441Z 2026-04-27 18:38:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:26.304278391Z 2026-04-27 18:38:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:31.307812863Z 2026-04-27 18:38:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:36.303612999Z 2026-04-27 18:38:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:41.317248346Z 2026-04-27 18:38:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:46.303921012Z 2026-04-27 18:38:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:51.304223145Z 2026-04-27 18:38:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:51.305024255Z 2026-04-27 18:38:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:38:56.304287801Z 2026-04-27 18:38:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:01.304451445Z 2026-04-27 18:39:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:06.304037016Z 2026-04-27 18:39:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:11.304019067Z 2026-04-27 18:39:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:16.303918732Z 2026-04-27 18:39:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:21.305419358Z 2026-04-27 18:39:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:21.306247909Z 2026-04-27 18:39:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:26.303534691Z 2026-04-27 18:39:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:31.304219206Z 2026-04-27 18:39:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:36.304428796Z 2026-04-27 18:39:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:41.303399195Z 2026-04-27 18:39:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:46.303775458Z 2026-04-27 18:39:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:51.30357868Z 2026-04-27 18:39:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:51.30424612Z 2026-04-27 18:39:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:39:56.304641746Z 2026-04-27 18:39:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:01.304253283Z 2026-04-27 18:40:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:06.304114001Z 2026-04-27 18:40:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:11.304213646Z 2026-04-27 18:40:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:16.304340723Z 2026-04-27 18:40:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:21.304537347Z 2026-04-27 18:40:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:21.305326055Z 2026-04-27 18:40:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:26.304383395Z 2026-04-27 18:40:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:31.304177728Z 2026-04-27 18:40:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:36.304421097Z 2026-04-27 18:40:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:41.306040348Z 2026-04-27 18:40:41 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:46.303752668Z 2026-04-27 18:40:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:51.305217089Z 2026-04-27 18:40:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:51.305990146Z 2026-04-27 18:40:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:40:56.30387109Z 2026-04-27 18:40:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:01.303722101Z 2026-04-27 18:41:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:06.303494177Z 2026-04-27 18:41:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:11.303520422Z 2026-04-27 18:41:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:16.303937306Z 2026-04-27 18:41:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:21.303507508Z 2026-04-27 18:41:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:21.304090782Z 2026-04-27 18:41:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:26.307848616Z 2026-04-27 18:41:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:31.303563251Z 2026-04-27 18:41:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:36.304257899Z 2026-04-27 18:41:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:41.303738706Z 2026-04-27 18:41:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:46.303891623Z 2026-04-27 18:41:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:51.308085512Z 2026-04-27 18:41:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:51.309004921Z 2026-04-27 18:41:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:41:56.304809045Z 2026-04-27 18:41:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:01.307904853Z 2026-04-27 18:42:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:06.303717519Z 2026-04-27 18:42:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:11.303920592Z 2026-04-27 18:42:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:16.303559524Z 2026-04-27 18:42:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:21.30404907Z 2026-04-27 18:42:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:21.304643804Z 2026-04-27 18:42:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:26.303676172Z 2026-04-27 18:42:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:31.304379974Z 2026-04-27 18:42:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:36.303617308Z 2026-04-27 18:42:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:41.303431145Z 2026-04-27 18:42:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:45.57912839Z 2026-04-27 18:42:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-27T18:42:45.65074409Z 2026-04-27 18:42:45 [info] [keepalive] ping OK
2026-04-27T18:42:46.304352264Z 2026-04-27 18:42:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:51.304342655Z 2026-04-27 18:42:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:51.305002894Z 2026-04-27 18:42:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:42:56.304181125Z 2026-04-27 18:42:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:01.303373538Z 2026-04-27 18:43:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:06.303349299Z 2026-04-27 18:43:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:11.304316294Z 2026-04-27 18:43:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:16.307503556Z 2026-04-27 18:43:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:21.306776146Z 2026-04-27 18:43:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:21.306796038Z 2026-04-27 18:43:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:26.304370061Z 2026-04-27 18:43:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:31.303545105Z 2026-04-27 18:43:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:36.304164536Z 2026-04-27 18:43:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:41.304081686Z 2026-04-27 18:43:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:46.303974914Z 2026-04-27 18:43:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:51.303982572Z 2026-04-27 18:43:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:51.304150915Z 2026-04-27 18:43:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:43:56.303977999Z 2026-04-27 18:43:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:01.304142569Z 2026-04-27 18:44:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:06.303497379Z 2026-04-27 18:44:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:11.303758037Z 2026-04-27 18:44:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:16.303816189Z 2026-04-27 18:44:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:21.304672303Z 2026-04-27 18:44:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:21.305807317Z 2026-04-27 18:44:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:26.304247511Z 2026-04-27 18:44:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:31.303364095Z 2026-04-27 18:44:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:36.30517273Z 2026-04-27 18:44:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:41.305519137Z 2026-04-27 18:44:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:46.304430777Z 2026-04-27 18:44:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:51.304394036Z 2026-04-27 18:44:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:51.305318455Z 2026-04-27 18:44:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:44:56.304174892Z 2026-04-27 18:44:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:01.306103968Z 2026-04-27 18:45:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:06.304129164Z 2026-04-27 18:45:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:11.303969826Z 2026-04-27 18:45:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:16.304328286Z 2026-04-27 18:45:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:21.304102854Z 2026-04-27 18:45:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:26.303960408Z 2026-04-27 18:45:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:31.304641924Z 2026-04-27 18:45:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:36.304967163Z 2026-04-27 18:45:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:41.304454771Z 2026-04-27 18:45:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:46.305603143Z 2026-04-27 18:45:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T18:45:51.303660385Z 2026-04-27 18:45:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.146"}
2026-04-27T19:07:05.836362598Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-27T19:07:07.153266793Z 
2026-04-27T19:07:07.153285353Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-27T19:07:07.153290123Z > node dist/index.js
2026-04-27T19:07:07.153292253Z 
2026-04-27T19:07:12.541803649Z 2026-04-27 19:07:12 [info] [ai] Gemini ready — primary: gemini-2.5-flash, fallbacks: gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest
2026-04-27T19:07:13.938895581Z 2026-04-27 19:07:13 [info] Firestore initialized successfully
2026-04-27T19:07:13.947344467Z 2026-04-27 19:07:13 [info] ✅ Server running on http://localhost:10000
2026-04-27T19:07:13.947362478Z 2026-04-27 19:07:13 [info] Environment: production
2026-04-27T19:07:13.947365218Z 2026-04-27 19:07:13 [info] API URL: http://localhost:5000
2026-04-27T19:07:13.947368368Z 2026-04-27 19:07:13 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-27T19:07:23.699997708Z 2026-04-27 19:07:23 [info] {"method":"GET","path":"/health","status":200,"duration":"4ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:07:23.70230433Z 2026-04-27 19:07:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:07:24.76632431Z 2026-04-27 19:07:24 [error] Route / not found
2026-04-27T19:07:24.76633997Z Error: Route / not found
2026-04-27T19:07:24.76634326Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-27T19:07:24.766346171Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T19:07:24.766348511Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T19:07:24.766351081Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T19:07:24.766352821Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-27T19:07:24.766354571Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-27T19:07:24.766356291Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-27T19:07:24.766357971Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-27T19:07:24.766360021Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-27T19:07:24.766361701Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-27T19:07:24.767304516Z 2026-04-27 19:07:24 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-27T19:07:28.692150794Z 2026-04-27 19:07:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:07:33.692240401Z 2026-04-27 19:07:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:07:38.6924594Z 2026-04-27 19:07:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:07:43.694734644Z 2026-04-27 19:07:43 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:07:43.698619838Z 2026-04-27 19:07:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:07:48.692911956Z 2026-04-27 19:07:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:07:53.693211285Z 2026-04-27 19:07:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:07:58.691465367Z 2026-04-27 19:07:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:03.691488957Z 2026-04-27 19:08:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:08.692127381Z 2026-04-27 19:08:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:13.692468526Z 2026-04-27 19:08:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:13.693301638Z 2026-04-27 19:08:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:18.691894005Z 2026-04-27 19:08:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:23.69194204Z 2026-04-27 19:08:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:28.69145242Z 2026-04-27 19:08:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:33.692228662Z 2026-04-27 19:08:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:38.691498794Z 2026-04-27 19:08:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:43.69216813Z 2026-04-27 19:08:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:43.69290609Z 2026-04-27 19:08:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:48.694308666Z 2026-04-27 19:08:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:53.69270099Z 2026-04-27 19:08:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:08:58.692907592Z 2026-04-27 19:08:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:03.691859389Z 2026-04-27 19:09:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:08.691862553Z 2026-04-27 19:09:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:13.693357456Z 2026-04-27 19:09:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:13.694306422Z 2026-04-27 19:09:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:18.691491369Z 2026-04-27 19:09:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:23.691685025Z 2026-04-27 19:09:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:28.692105826Z 2026-04-27 19:09:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:33.692114405Z 2026-04-27 19:09:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:38.691810164Z 2026-04-27 19:09:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:43.6917859Z 2026-04-27 19:09:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:43.692650604Z 2026-04-27 19:09:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:48.692111834Z 2026-04-27 19:09:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:53.695050428Z 2026-04-27 19:09:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:09:58.691879356Z 2026-04-27 19:09:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:03.691958681Z 2026-04-27 19:10:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:08.692135476Z 2026-04-27 19:10:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:13.691575622Z 2026-04-27 19:10:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:13.692308781Z 2026-04-27 19:10:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:18.691961731Z 2026-04-27 19:10:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:23.692281938Z 2026-04-27 19:10:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:28.692400718Z 2026-04-27 19:10:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:33.692138457Z 2026-04-27 19:10:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:38.701088922Z 2026-04-27 19:10:38 [info] {"method":"GET","path":"/health","status":200,"duration":"7ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:43.692461764Z 2026-04-27 19:10:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:43.695409793Z 2026-04-27 19:10:43 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:48.692429106Z 2026-04-27 19:10:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:53.6921416Z 2026-04-27 19:10:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:10:58.691524335Z 2026-04-27 19:10:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:03.691865384Z 2026-04-27 19:11:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:08.691908184Z 2026-04-27 19:11:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:13.69218792Z 2026-04-27 19:11:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:13.693348121Z 2026-04-27 19:11:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:18.692799873Z 2026-04-27 19:11:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:23.692178612Z 2026-04-27 19:11:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:28.691700704Z 2026-04-27 19:11:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:33.694092571Z 2026-04-27 19:11:33 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:38.691647508Z 2026-04-27 19:11:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:43.692137542Z 2026-04-27 19:11:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:43.692769509Z 2026-04-27 19:11:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:48.691936107Z 2026-04-27 19:11:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:53.692594805Z 2026-04-27 19:11:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:11:58.692489681Z 2026-04-27 19:11:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:03.691153462Z 2026-04-27 19:12:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:08.691694443Z 2026-04-27 19:12:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:13.692193582Z 2026-04-27 19:12:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:13.6925187Z 2026-04-27 19:12:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:18.69233461Z 2026-04-27 19:12:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:23.693465343Z 2026-04-27 19:12:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:28.692177241Z 2026-04-27 19:12:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:33.691491984Z 2026-04-27 19:12:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:38.692711977Z 2026-04-27 19:12:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:43.693108226Z 2026-04-27 19:12:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:43.696497077Z 2026-04-27 19:12:43 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:48.692683973Z 2026-04-27 19:12:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:53.693162563Z 2026-04-27 19:12:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:12:58.693662812Z 2026-04-27 19:12:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:03.692172978Z 2026-04-27 19:13:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:08.692138941Z 2026-04-27 19:13:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:13.692056602Z 2026-04-27 19:13:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:13.693445599Z 2026-04-27 19:13:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:18.691665063Z 2026-04-27 19:13:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:23.692127287Z 2026-04-27 19:13:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:28.692370853Z 2026-04-27 19:13:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:33.691727805Z 2026-04-27 19:13:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:38.691684971Z 2026-04-27 19:13:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:43.69213314Z 2026-04-27 19:13:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:43.693044865Z 2026-04-27 19:13:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:48.69186963Z 2026-04-27 19:13:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:53.691840734Z 2026-04-27 19:13:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:13:58.692147897Z 2026-04-27 19:13:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:03.691608195Z 2026-04-27 19:14:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:08.69207684Z 2026-04-27 19:14:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:13.692182743Z 2026-04-27 19:14:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:13.693017356Z 2026-04-27 19:14:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:18.691984378Z 2026-04-27 19:14:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:23.691642188Z 2026-04-27 19:14:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:28.69210214Z 2026-04-27 19:14:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:33.69185338Z 2026-04-27 19:14:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:38.691876147Z 2026-04-27 19:14:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:43.691517362Z 2026-04-27 19:14:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:43.692528169Z 2026-04-27 19:14:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:48.692131872Z 2026-04-27 19:14:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:53.691873449Z 2026-04-27 19:14:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:14:58.691360237Z 2026-04-27 19:14:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:03.694481952Z 2026-04-27 19:15:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:08.691488212Z 2026-04-27 19:15:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:13.691559213Z 2026-04-27 19:15:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:13.69258472Z 2026-04-27 19:15:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:18.691351276Z 2026-04-27 19:15:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:23.691068605Z 2026-04-27 19:15:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:28.69138083Z 2026-04-27 19:15:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:33.69231235Z 2026-04-27 19:15:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:38.691765799Z 2026-04-27 19:15:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:43.692357479Z 2026-04-27 19:15:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:43.693043737Z 2026-04-27 19:15:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:48.693171213Z 2026-04-27 19:15:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:53.691642824Z 2026-04-27 19:15:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:15:58.692961829Z 2026-04-27 19:15:58 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:03.691745826Z 2026-04-27 19:16:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:08.691878048Z 2026-04-27 19:16:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:13.692081321Z 2026-04-27 19:16:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:13.693124659Z 2026-04-27 19:16:13 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:18.692114878Z 2026-04-27 19:16:18 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:23.692058433Z 2026-04-27 19:16:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:28.691897623Z 2026-04-27 19:16:28 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:33.691989769Z 2026-04-27 19:16:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:38.694702184Z 2026-04-27 19:16:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:43.692428395Z 2026-04-27 19:16:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:43.693305088Z 2026-04-27 19:16:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:48.69185893Z 2026-04-27 19:16:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:53.691315265Z 2026-04-27 19:16:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:16:58.692004883Z 2026-04-27 19:16:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:03.691793955Z 2026-04-27 19:17:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:08.691814133Z 2026-04-27 19:17:08 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:13.692413704Z 2026-04-27 19:17:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:13.693332499Z 2026-04-27 19:17:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:18.691723371Z 2026-04-27 19:17:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:23.694123399Z 2026-04-27 19:17:23 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:28.691782499Z 2026-04-27 19:17:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:33.691519375Z 2026-04-27 19:17:33 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:38.691915326Z 2026-04-27 19:17:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:43.691805904Z 2026-04-27 19:17:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:43.69242462Z 2026-04-27 19:17:43 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:48.691277629Z 2026-04-27 19:17:48 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:53.692832989Z 2026-04-27 19:17:53 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:17:58.691154901Z 2026-04-27 19:17:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:18:03.694012774Z 2026-04-27 19:18:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:18:08.692138939Z 2026-04-27 19:18:08 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:18:13.691447075Z 2026-04-27 19:18:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:18:13.692270737Z 2026-04-27 19:18:13 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:18:18.691680735Z 2026-04-27 19:18:18 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:18:23.691037411Z 2026-04-27 19:18:23 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:18:28.691838544Z 2026-04-27 19:18:28 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:18:33.692113932Z 2026-04-27 19:18:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.223"}
2026-04-27T19:18:38.691896596Z 2026-04-27 19:18:38 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.223"}
```
