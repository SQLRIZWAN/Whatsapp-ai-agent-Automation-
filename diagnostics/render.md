# Render Deploy Diagnostics

Run: 24852842749
Commit: 76f763ca91f376c6a4eddcbc81ff15026ae39771
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: 

## Service details
```json
{
  "autoDeploy": "yes",
  "autoDeployTrigger": "commit",
  "branch": "claude/production-deployment-setup-pnyZn",
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
      "buildCommand": "npm install && npm run build",
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
  "updatedAt": "2026-04-23T18:48:40.389715Z"
}
```

## Latest deploy
```json
[
  {
    "deploy": {
      "id": "dep-d7l6j24sbpoc73bcrl80",
      "commit": {
        "id": "76f763ca91f376c6a4eddcbc81ff15026ae39771",
        "message": "Deploy workflow v2: commit diagnostics + URLs to repo, autoDeploy off, correct rootDir",
        "createdAt": "2026-04-23T18:48:27Z"
      },
      "status": "queued",
      "trigger": "api",
      "createdAt": "2026-04-23T18:48:41.978788Z",
      "updatedAt": "2026-04-23T18:48:41.978788Z"
    },
    "cursor": "Ef1SCoWNUWtqMjRzYnBvYzczYmNybDgw"
  },
  {
    "deploy": {
      "id": "dep-d7l6ive8bjmc73bo0k00",
      "commit": {
        "id": "76f763ca91f376c6a4eddcbc81ff15026ae39771",
        "message": "Deploy workflow v2: commit diagnostics + URLs to repo, autoDeploy off, correct rootDir",
        "createdAt": "2026-04-23T18:48:27Z"
      },
      "status": "build_in_progress",
      "trigger": "new_commit",
      "createdAt": "2026-04-23T18:48:29.64238Z",
      "updatedAt": "2026-04-23T18:48:29.64238Z",
      "startedAt": "2026-04-23T18:48:29.627101Z"
    },
    "cursor": "Ef1SCoWNUWtpdmU4YmptYzczYm8wazAw"
  },
  {
    "deploy": {
      "id": "dep-d7kvpm86kfic73b8917g",
      "commit": {
        "id": "60749edaa986bcf175bb82f6861646bda627e439",
        "message": "Add Render diagnose workflow",
        "createdAt": "2026-04-23T11:04:45Z"
      },
      "status": "build_failed",
      "trigger": "api",
      "createdAt": "2026-04-23T11:04:58.589869Z",
      "updatedAt": "2026-04-23T11:06:26.73175Z",
      "startedAt": "2026-04-23T11:05:45.143122Z",
      "finishedAt": "2026-04-23T11:06:26.731236Z"
    },
    "cursor": "kLkCD3AitntwbTg2a2ZpYzczYjg5MTdn"
  },
  {
    "deploy": {
      "id": "dep-d7kvpk0k1i2s73dujsu0",
      "commit": {
        "id": "60749edaa986bcf175bb82f6861646bda627e439",
        "message": "Add Render diagnose workflow",
        "createdAt": "2026-04-23T11:04:45Z"
      },
      "status": "build_failed",
      "trigger": "new_commit",
      "createdAt": "2026-04-23T11:04:48.310096Z",
      "updatedAt": "2026-04-23T11:05:44.751356Z",
      "startedAt": "2026-04-23T11:04:48.306065Z",
      "finishedAt": "2026-04-23T11:05:44.750773Z"
    },
    "cursor": "kLkCD3AitntwazBrMWkyczczZHVqc3Uw"
  },
  {
    "deploy": {
      "id": "dep-d7kvoigembgs73ao3lq0",
      "commit": {
        "id": "ff6c25a4990fb951ea5b7e0a54d41704aabf1d07",
        "message": "Vercel deploy: pre-link project via .vercel/project.json + capture logs as artifact",
        "createdAt": "2026-04-23T11:02:21Z"
      },
      "status": "build_failed",
      "trigger": "api",
      "createdAt": "2026-04-23T11:02:35.364926Z",
      "updatedAt": "2026-04-23T11:04:10.551289Z",
      "startedAt": "2026-04-23T11:03:18.970208Z",
      "finishedAt": "2026-04-23T11:04:10.548982Z"
    },
    "cursor": "kLkCD3AitntvaWdlbWJnczczYW8zbHEw"
  },
  {
    "deploy": {
      "id": "dep-d7kvofok1i2s73duj39g",
      "commit": {
        "id": "ff6c25a4990fb951ea5b7e0a54d41704aabf1d07",
        "message": "Vercel deploy: pre-link project via .vercel/project.json + capture logs as artifact",
        "createdAt": "2026-04-23T11:02:21Z"
      },
      "status": "build_failed",
      "trigger": "new_commit",
      "createdAt": "2026-04-23T11:02:23.443541Z",
      "updatedAt": "2026-04-23T11:03:18.586937Z",
      "startedAt": "2026-04-23T11:02:23.439974Z",
      "finishedAt": "2026-04-23T11:03:18.586063Z"
    },
    "cursor": "kLkCD3AitntvZm9rMWkyczczZHVqMzln"
  },
  {
    "deploy": {
      "id": "dep-d7kkoot2pjvc7381k4k0",
      "commit": {
        "id": "b88b8ec156cb26cf93dfaa45e49566df33b1bc88",
        "message": "Harden Vercel deploy: create project via API, alias canonical domain, emit URLs artifact",
        "createdAt": "2026-04-22T22:31:53Z"
      },
      "status": "build_failed",
      "trigger": "api",
      "createdAt": "2026-04-22T22:32:04.249992Z",
      "updatedAt": "2026-04-22T22:33:29.598902Z",
      "startedAt": "2026-04-22T22:32:39.756142Z",
      "finishedAt": "2026-04-22T22:33:29.596768Z"
    },
    "cursor": "HTLNxkdJQxVvb3QycGp2YzczODFrNGsw"
  },
  {
    "deploy": {
      "id": "dep-d7kkomq8qa3s739uo40g",
      "commit": {
        "id": "b88b8ec156cb26cf93dfaa45e49566df33b1bc88",
        "message": "Harden Vercel deploy: create project via API, alias canonical domain, emit URLs artifact",
        "createdAt": "2026-04-22T22:31:53Z"
      },
      "status": "build_failed",
      "trigger": "new_commit",
      "createdAt": "2026-04-22T22:31:55.647205Z",
      "updatedAt": "2026-04-22T22:32:39.536831Z",
      "startedAt": "2026-04-22T22:31:55.64281Z",
      "finishedAt": "2026-04-22T22:32:39.536192Z"
    },
    "cursor": "HTLNxkdJQxVvbXE4cWEzczczOXVvNDBn"
  },
  {
    "deploy": {
      "id": "dep-d7kknegsfn5c73b9t5tg",
      "commit": {
        "id": "8475cb90402bd800f7fd7f438336e70dbbf92f13",
        "message": "Fix backend build and automate Render+Vercel deployment\n\n- Add tsc-alias + relaxed tsconfig so @shared/@modules/@websocket paths\n  resolve post-build and the project compiles on Render\n- Install missing @types (uuid, qrcode, cors) used by services\n- Loosen asyncHandler and tokenService signatures to match actual handlers\n- Make Firestore init non-fatal when credentials are missing so /health\n  can come up and credentials can be added post-deploy\n- Prevent Vite's tsc pass from emitting stray .js next to .tsx sources\n- Rewrite deploy workflow to:\n    * create or redeploy Render service via API (with env vars from\n      secrets) and return its live URL\n    * deploy frontend via Vercel CLI, wired to the backend URL\n    * wait on /health and print final URLs",
        "createdAt": "2026-04-22T22:29:00Z"
      },
      "status": "build_failed",
      "trigger": "manual",
      "createdAt": "2026-04-22T22:29:14.810148Z",
      "updatedAt": "2026-04-22T22:29:58.127989Z",
      "startedAt": "2026-04-22T22:29:14.791245Z",
      "finishedAt": "2026-04-22T22:29:58.1273Z"
    },
    "cursor": "HTLNxkdJQxVuZWdzZm41YzczYjl0NXRn"
  }
]
```

## Build logs (last 4h)
```
2026-04-23T18:48:32.775261932Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-23T18:48:33.45829658Z [34m[1m==>(B[m [1mChecking out commit 76f763ca91f376c6a4eddcbc81ff15026ae39771 in branch claude/production-deployment-setup-pnyZn(B[m
2026-04-23T18:48:34.836002326Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-23T18:48:34.859898684Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-23T18:48:36.750997539Z [34m[1m==>(B[m [1mRunning build command 'cd backend && npm install && npm run build'...(B[m
```

## App logs (last 4h)
```
```
