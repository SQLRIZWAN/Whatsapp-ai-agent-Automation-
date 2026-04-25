== /health ==
{"status":"ok","timestamp":"2026-04-25T06:41:54.889Z","uptime":136.712808306}
HTTP: 200

== POST /api/auth/register (test flow) ==
Request: {
  "email": "probe_1777099314@example.com",
  "password": "TestPass123!",
  "displayName": "Probe User"
}
{"success":true,"message":"User registered successfully","data":{"user":{"uid":"38fda635-ff98-43df-b228-a97690e16bd4","email":"probe_1777099314@example.com","displayName":"Probe User","status":"active"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzOGZkYTYzNS1mZjk4LTQzZGYtYjIyOC1hOTc2OTBlMTZiZDQiLCJlbWFpbCI6InByb2JlXzE3NzcwOTkzMTRAZXhhbXBsZS5jb20iLCJpYXQiOjE3NzcwOTkzMTgsImV4cCI6MTc3NzcwNDExOH0.LgztcrDJLsBshnhMHHLG8NmOWlgihmxWq8yESE8NTnI"},"timestamp":"2026-04-25T06:41:58.965Z"}
HTTP: 201

== GET /api/whatsapp/status (auth'd — creates Baileys runtime, kicks QR) ==
token length: 240
{"success":true,"message":"Status","data":{"status":"connecting","qrCode":null,"phone":null,"attempts":1,"lastError":null},"timestamp":"2026-04-25T06:42:00.373Z"}
HTTP: 200

== Sleep 10s, then GET /api/whatsapp/status again (QR should be present) ==
{"success":true,"message":"Status","data":{"status":"qr","qrCode":"data:image/png;base64,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
== Render app logs (last 30 min) ==
```
2026-04-25T06:39:13.946226252Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-25T06:39:14.026344543Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-25T06:39:36.482697294Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-25T06:39:38.085944495Z 
2026-04-25T06:39:38.085972157Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-25T06:39:38.085976967Z > node dist/index.js
2026-04-25T06:39:38.085980137Z 
2026-04-25T06:39:42.774332341Z 2026-04-25 06:39:42 [info] AI Service initialized with primary model: gemini-2.5-flash
2026-04-25T06:39:43.682915956Z 2026-04-25 06:39:43 [info] Firestore initialized successfully
2026-04-25T06:39:43.971140498Z 2026-04-25 06:39:43 [info] ✅ Server running on http://localhost:10000
2026-04-25T06:39:43.971302668Z 2026-04-25 06:39:43 [info] Environment: production
2026-04-25T06:39:43.971526651Z 2026-04-25 06:39:43 [info] API URL: http://localhost:5000
2026-04-25T06:39:43.971743484Z 2026-04-25 06:39:43 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-25T06:39:44.329964654Z 2026-04-25 06:39:44 [error] Route / not found
2026-04-25T06:39:44.329988986Z Error: Route / not found
2026-04-25T06:39:44.329993936Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T06:39:44.329997676Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T06:39:44.330003697Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T06:39:44.330007537Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T06:39:44.330010907Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T06:39:44.330014007Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T06:39:44.330016957Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T06:39:44.330020207Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T06:39:44.330023288Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T06:39:44.330026408Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T06:39:44.335631151Z 2026-04-25 06:39:44 [info] {"method":"HEAD","path":"/","status":404,"duration":"6ms","ip":"::1"}
2026-04-25T06:39:44.513667687Z 2026-04-25 06:39:44 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:39:44.515846306Z 2026-04-25 06:39:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:39:45.171146663Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-25T06:39:45.203871799Z 2026-04-25 06:39:45 [error] Route / not found
2026-04-25T06:39:45.20389526Z Error: Route / not found
2026-04-25T06:39:45.203900601Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-25T06:39:45.203904361Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T06:39:45.203907951Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T06:39:45.203912072Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T06:39:45.203915112Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-25T06:39:45.203918392Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-25T06:39:45.203921292Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-25T06:39:45.203924332Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-25T06:39:45.203944013Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-25T06:39:45.203947354Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-25T06:39:45.204660336Z 2026-04-25 06:39:45 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-25T06:39:45.244507373Z [0;32m[1m==> [0m[1m[0m
2026-04-25T06:39:45.246765694Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T06:39:45.248980933Z [0;32m[1m==> [0m[1m[0m
2026-04-25T06:39:45.250875595Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-25T06:39:45.252878329Z [0;32m[1m==> [0m[1m[0m
2026-04-25T06:39:45.254753009Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-25T06:39:49.516244108Z 2026-04-25 06:39:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:39:54.51649479Z 2026-04-25 06:39:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:39:59.516092774Z 2026-04-25 06:39:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:04.516146885Z 2026-04-25 06:40:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:09.52383673Z 2026-04-25 06:40:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:14.512027247Z 2026-04-25 06:40:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:14.514700585Z 2026-04-25 06:40:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:19.515653701Z 2026-04-25 06:40:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:24.515772776Z 2026-04-25 06:40:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:29.515106135Z 2026-04-25 06:40:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:34.516189328Z 2026-04-25 06:40:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:39.51606896Z 2026-04-25 06:40:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:44.512294934Z 2026-04-25 06:40:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:44.515101951Z 2026-04-25 06:40:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:49.516194515Z 2026-04-25 06:40:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:54.51545091Z 2026-04-25 06:40:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:40:59.516159172Z 2026-04-25 06:40:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:04.5158Z 2026-04-25 06:41:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:09.516361003Z 2026-04-25 06:41:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:14.512544446Z 2026-04-25 06:41:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:14.515375414Z 2026-04-25 06:41:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:19.515719624Z 2026-04-25 06:41:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:24.515621058Z 2026-04-25 06:41:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:29.576185476Z 2026-04-25 06:41:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:34.51581515Z 2026-04-25 06:41:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:39.516595867Z 2026-04-25 06:41:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:44.51259064Z 2026-04-25 06:41:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:44.515317611Z 2026-04-25 06:41:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:49.516043205Z 2026-04-25 06:41:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:54.516003244Z 2026-04-25 06:41:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:41:54.890807209Z 2026-04-25 06:41:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T06:41:58.965668791Z 2026-04-25 06:41:58 [info] User registered: probe_1777099314@example.com
2026-04-25T06:41:58.966576375Z 2026-04-25 06:41:58 [info] {"method":"POST","path":"/register","status":201,"duration":"3870ms","ip":"::1"}
2026-04-25T06:41:59.137432715Z 2026-04-25 06:41:59 [info] [wa] spawning connection for 38fda635-ff98-43df-b228-a97690e16bd4 (attempt 1)
2026-04-25T06:41:59.376080242Z 2026-04-25 06:41:59 [info] [wa-auth] no creds doc — initializing new creds for 38fda635-ff98-43df-b228-a97690e16bd4
2026-04-25T06:41:59.868615692Z 2026-04-25 06:41:59 [info] {"method":"GET","path":"/health","status":200,"duration":"93ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:00.269681017Z 2026-04-25 06:42:00 [info] [wa] using WA web version 2.3000.1035194821
2026-04-25T06:42:00.469495938Z 2026-04-25 06:42:00 [info] {"method":"GET","path":"/status","status":200,"duration":"1335ms","ip":"::1"}
2026-04-25T06:42:02.176522956Z 2026-04-25 06:42:02 [info] [wa] QR generated for 38fda635-ff98-43df-b228-a97690e16bd4
2026-04-25T06:42:04.515595181Z 2026-04-25 06:42:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:09.517697187Z 2026-04-25 06:42:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:10.529837465Z 2026-04-25 06:42:10 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-25T06:42:14.512663279Z 2026-04-25 06:42:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:14.515558601Z 2026-04-25 06:42:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:19.515918114Z 2026-04-25 06:42:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:24.515972419Z 2026-04-25 06:42:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:29.515024424Z 2026-04-25 06:42:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:34.515643473Z 2026-04-25 06:42:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:39.515951963Z 2026-04-25 06:42:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:44.512306479Z 2026-04-25 06:42:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:44.514593464Z 2026-04-25 06:42:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:49.515412635Z 2026-04-25 06:42:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
2026-04-25T06:42:54.515675423Z 2026-04-25 06:42:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.74"}
```
