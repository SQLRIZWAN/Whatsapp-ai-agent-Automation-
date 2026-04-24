# Render Deploy Diagnostics

Run: 24905793979
Commit: ce244390d0b2cb276fec724e6a374e5b8b8fb9f2
Service ID: srv-d7kkne0sfn5c73b9t5cg
Deploy ID: dep-d7lrg357vvec73co9ig0

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
  "updatedAt": "2026-04-24T18:38:10.524867Z"
}
```

## Latest deploy
```json
{
  "id": "dep-d7lrg357vvec73co9ig0",
  "commit": {
    "id": "ce244390d0b2cb276fec724e6a374e5b8b8fb9f2",
    "message": "Ship real Baileys WhatsApp + Gemini AI pipeline (Phase 3-6)\n\nBackend:\n- Firestore-backed Baileys auth state (stable QR — scan once, session resumes\n  across restarts; no disk writes, all state in Firestore)\n- Real Baileys socket per user: QR via Socket.IO, auto-reconnect on drops,\n  logout clears creds\n- Incoming call handler: reject immediately, then send a TTS voice note\n  explaining that SQL 💉 doesn't take live calls, plus a follow-up text\n  suggesting the forwarding number if configured\n- Message handler: text/image/voice/video dispatched to Gemini; voice notes\n  get native audio understanding and a voice-note reply; all media stays in\n  RAM buffers and is GC'd after use (no disk writes)\n- AIService.generateFromAudio added for Gemini multimodal audio input\n- Lazy Gemini client — service no longer crashes if GEMINI_API_KEY unset\n- TTS service: google-tts-api MP3 + ffmpeg-static opus transcode with pitch\n  shift for a deeper male-sounding voice; OGG/Opus output ready for WA PTT\n- Default system prompt flipped to the SQL 💉 persona; prompt builder injects\n  conditional rules (call-question answer + urgent-keyword forwarding hint)\n- Whatsapp routes rewritten: /connect /status /disconnect /logout + existing\n  /messages /calls /send-message all return the live snapshot\n- Socket.IO wired into baileyService so dashboard gets status+QR updates\n\nFrontend:\n- New SettingsPage: system prompt editor (prefilled with SQL 💉 persona) +\n  call-forwarding toggle and number; reset-to-default button; saves straight\n  to Firestore via /api/config/*\n- DashboardPage rebuilt: live connection pill, QR image, WhatsApp-scan\n  instructions, real-time updates via Socket.IO, Unlink button, feature list\n- Added whatsappApi and configApi clients\n- Routes: added /settings protected route",
    "createdAt": "2026-04-24T18:35:27Z"
  },
  "status": "live",
  "trigger": "api",
  "createdAt": "2026-04-24T18:35:56.463639Z",
  "updatedAt": "2026-04-24T18:38:10.523242Z",
  "startedAt": "2026-04-24T18:35:56.357563Z",
  "finishedAt": "2026-04-24T18:38:10.523016Z"
}
```

## Build logs (last 4h)
```
2026-04-24T18:35:59.060125177Z [34m[1m==>(B[m [1mCloning from https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-(B[m
2026-04-24T18:36:04.817071882Z [34m[1m==>(B[m [1mChecking out commit ce244390d0b2cb276fec724e6a374e5b8b8fb9f2 in branch main(B[m
2026-04-24T18:36:06.122013139Z [34m[1m==>(B[m [1mUsing Node.js version 24.14.1 (default)(B[m
2026-04-24T18:36:06.146289031Z [34m[1m==>(B[m [1mDocs on specifying a Node.js version: https://render.com/docs/node-version(B[m
2026-04-24T18:36:08.30657393Z [34m[1m==>(B[m [1mRunning build command 'npm install --include=dev && npm run build'...(B[m
2026-04-24T18:37:36.616490664Z 
2026-04-24T18:37:36.616516595Z added 586 packages, and audited 587 packages in 1m
2026-04-24T18:37:36.616527285Z 
2026-04-24T18:37:36.616652489Z 111 packages are looking for funding
2026-04-24T18:37:36.6166997Z   run `npm fund` for details
2026-04-24T18:37:36.762804286Z 
2026-04-24T18:37:36.762821567Z 24 vulnerabilities (2 low, 12 moderate, 8 high, 2 critical)
2026-04-24T18:37:36.762825917Z 
2026-04-24T18:37:36.762830097Z To address issues that do not require attention, run:
2026-04-24T18:37:36.762834067Z   npm audit fix
2026-04-24T18:37:36.762837867Z 
2026-04-24T18:37:36.762841727Z To address all issues (including breaking changes), run:
2026-04-24T18:37:36.762845947Z   npm audit fix --force
2026-04-24T18:37:36.762849747Z 
2026-04-24T18:37:36.762854148Z Run `npm audit` for details.
2026-04-24T18:37:36.984110728Z 
2026-04-24T18:37:36.984133708Z > whatsapp-ai-agent-backend@1.0.0 build
2026-04-24T18:37:36.984139439Z > tsc && tsc-alias
2026-04-24T18:37:36.984143449Z 
2026-04-24T18:37:40.366529568Z [34;1m==>[0;22m [1mUploading build...[22m
2026-04-24T18:37:46.435479339Z [34;1m==>[0;22m [1mUploaded in 3.8s. Compression took 2.3s[22m
2026-04-24T18:37:46.467017791Z [32;1m==>[0;22m [1mBuild successful 🎉[22m
```

## App logs (last 4h)
```
2026-04-24T18:37:49.222503739Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T18:37:49.289718063Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T18:38:02.227804161Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T18:38:03.646035818Z 
2026-04-24T18:38:03.646069841Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T18:38:03.646079401Z > node dist/index.js
2026-04-24T18:38:03.646083511Z 
2026-04-24T18:38:08.334829669Z 2026-04-24 18:38:08 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-24T18:38:09.629584799Z 2026-04-24 18:38:09 [info] Firestore initialized successfully
2026-04-24T18:38:09.643014465Z 2026-04-24 18:38:09 [info] ✅ Server running on http://localhost:10000
2026-04-24T18:38:09.643033637Z 2026-04-24 18:38:09 [info] Environment: production
2026-04-24T18:38:09.643038257Z 2026-04-24 18:38:09 [info] API URL: http://localhost:5000
2026-04-24T18:38:09.643043108Z 2026-04-24 18:38:09 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-24T18:38:09.739989086Z 2026-04-24 18:38:09 [info] {"method":"GET","path":"/health","status":200,"duration":"7ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:09.825273221Z 2026-04-24 18:38:09 [info] {"method":"GET","path":"/health","status":200,"duration":"81ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:09.926197558Z 2026-04-24 18:38:09 [error] Route / not found
2026-04-24T18:38:09.926208979Z Error: Route / not found
2026-04-24T18:38:09.926216209Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T18:38:09.92622129Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:38:09.9262259Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:38:09.926248282Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:38:09.926252402Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T18:38:09.926256703Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T18:38:09.926260813Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T18:38:09.926264903Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:38:09.926268913Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:38:09.926272984Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:38:09.933256457Z 2026-04-24 18:38:09 [info] {"method":"HEAD","path":"/","status":404,"duration":"18ms","ip":"::1"}
2026-04-24T18:38:10.666740535Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T18:38:10.908676931Z [0;32m[1m==> [0m[1m[0m
2026-04-24T18:38:10.912358146Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T18:38:10.913094065Z 2026-04-24 18:38:10 [error] Route / not found
2026-04-24T18:38:10.913112046Z Error: Route / not found
2026-04-24T18:38:10.913117686Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T18:38:10.913122777Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:38:10.913127777Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:38:10.913174501Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:38:10.913179391Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T18:38:10.913183981Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T18:38:10.913188472Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T18:38:10.913192752Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:38:10.913205943Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:38:10.913208793Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:38:10.915442041Z 2026-04-24 18:38:10 [info] {"method":"GET","path":"/","status":404,"duration":"2ms","ip":"::1"}
2026-04-24T18:38:10.916610505Z [0;32m[1m==> [0m[1m[0m
2026-04-24T18:38:10.919360656Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T18:38:10.92226855Z [0;32m[1m==> [0m[1m[0m
2026-04-24T18:38:10.925017361Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T18:38:14.741831839Z 2026-04-24 18:38:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:19.666113037Z 2026-04-24 18:38:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:19.74110004Z 2026-04-24 18:38:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:24.741028179Z 2026-04-24 18:38:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
```
