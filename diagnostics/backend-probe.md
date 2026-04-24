== /health ==
{"status":"ok","timestamp":"2026-04-24T08:25:55.191Z","uptime":115.396717794}
HTTP: 200

== POST /api/auth/register (test flow) ==
Request: {
  "email": "probe_1777019155@example.com",
  "password": "TestPass123!",
  "displayName": "Probe User"
}
{"success":true,"message":"User registered successfully","data":{"user":{"uid":"aeb99f85-39c6-4166-8ee4-88ffe17b768d","email":"probe_1777019155@example.com","displayName":"Probe User","status":"active"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhZWI5OWY4NS0zOWM2LTQxNjYtOGVlNC04OGZmZTE3Yjc2OGQiLCJlbWFpbCI6InByb2JlXzE3NzcwMTkxNTVAZXhhbXBsZS5jb20iLCJpYXQiOjE3NzcwMTkxNTksImV4cCI6MTc3NzYyMzk1OX0.zmMRHaput7lmxLS0nwjrDW0QRsNJsllg9LFAajfc3TI"},"timestamp":"2026-04-24T08:25:59.131Z"}
HTTP: 201

== Render app logs (last 30 min) ==
```
2026-04-24T08:01:32.505451647Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:01:32.636976528Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:01:45.048489308Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:01:46.253945398Z 
2026-04-24T08:01:46.25397862Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:01:46.25398602Z > node dist/index.js
2026-04-24T08:01:46.25398986Z 
2026-04-24T08:01:54.161274421Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:01:54.400511317Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:01:54.403084275Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:01:54.410039723Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:01:54.412044808Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:01:54.414249559Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:01:54.416167842Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:06:43.570226717Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:06:43.643505607Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:06:58.62985498Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:07:00.04265232Z 
2026-04-24T08:07:00.042689511Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:07:00.042698611Z > node dist/index.js
2026-04-24T08:07:00.042704011Z 
2026-04-24T08:07:04.986591745Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:07:05.097722728Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:07:05.100048831Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:07:05.102539087Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:07:05.105904594Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:07:05.107848118Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:07:05.109767252Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:11:10.837639221Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:11:10.924986003Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:11:26.404322152Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:11:27.516537605Z 
2026-04-24T08:11:27.516564606Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:11:27.516569346Z > node dist/index.js
2026-04-24T08:11:27.516571826Z 
2026-04-24T08:11:32.282582975Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:11:32.42495291Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:11:32.428259556Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:11:32.429933356Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:11:32.432695447Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:11:32.434828017Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:11:32.436739302Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:15:15.30683113Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:15:15.435322827Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:15:31.016428408Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:15:32.535234711Z 
2026-04-24T08:15:32.535263531Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:15:32.535268032Z > node dist/index.js
2026-04-24T08:15:32.535270302Z 
2026-04-24T08:15:35.213156904Z 2026-04-24 08:15:35 [error] Failed to initialize Firestore (continuing without persistence): Failed to parse private key: Error: Unparsed DER bytes remain after ASN.1 parsing.
2026-04-24T08:15:35.213178355Z Error: Failed to parse private key: Error: Unparsed DER bytes remain after ASN.1 parsing.
2026-04-24T08:15:35.213181975Z     at new ServiceAccount (/opt/render/project/src/backend/node_modules/firebase-admin/lib/app/credential-internal.js:153:19)
2026-04-24T08:15:35.213184655Z     at new ServiceAccountCredential (/opt/render/project/src/backend/node_modules/firebase-admin/lib/app/credential-internal.js:70:15)
2026-04-24T08:15:35.213186975Z     at Object.cert (/opt/render/project/src/backend/node_modules/firebase-admin/lib/app/credential-factory.js:103:54)
2026-04-24T08:15:35.213190085Z     at initializeFirestore (/opt/render/project/src/backend/dist/modules/database/firestore.js:27:69)
2026-04-24T08:15:35.213193195Z     at startServer (/opt/render/project/src/backend/dist/server.js:16:51)
2026-04-24T08:15:35.213195385Z     at main (/opt/render/project/src/backend/dist/index.js:13:40)
2026-04-24T08:15:35.213197585Z     at Object.<anonymous> (/opt/render/project/src/backend/dist/index.js:20:1)
2026-04-24T08:15:35.213199815Z     at Module._compile (node:internal/modules/cjs/loader:1812:14)
2026-04-24T08:15:35.213202765Z     at Object..js (node:internal/modules/cjs/loader:1943:10)
2026-04-24T08:15:35.213204955Z     at Module.load (node:internal/modules/cjs/loader:1533:32)
2026-04-24T08:15:35.219622278Z 2026-04-24 08:15:35 [info] ✅ Server running on http://localhost:10000
2026-04-24T08:15:35.219851113Z 2026-04-24 08:15:35 [info] Environment: production
2026-04-24T08:15:35.220106819Z 2026-04-24 08:15:35 [info] API URL: http://localhost:5000
2026-04-24T08:15:35.220436967Z 2026-04-24 08:15:35 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-24T08:15:35.585514898Z 2026-04-24 08:15:35 [error] Route / not found
2026-04-24T08:15:35.585538699Z Error: Route / not found
2026-04-24T08:15:35.585543699Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:15:35.585548269Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:15:35.585553209Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:15:35.585558349Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:15:35.585562199Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:15:35.585565919Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:15:35.585569789Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:15:35.585573999Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:15:35.585577659Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:15:35.58558148Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:15:35.589933503Z 2026-04-24 08:15:35 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-04-24T08:15:39.384281482Z 2026-04-24 08:15:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:39.386008894Z 2026-04-24 08:15:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:40.259096429Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:15:40.36813786Z 2026-04-24 08:15:40 [error] Route / not found
2026-04-24T08:15:40.368160481Z Error: Route / not found
2026-04-24T08:15:40.368164751Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:15:40.368168281Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:15:40.368171361Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:15:40.368174751Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:15:40.368177211Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:15:40.368180001Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:15:40.368182641Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:15:40.368185431Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:15:40.368188111Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:15:40.368190771Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:15:40.36894786Z 2026-04-24 08:15:40 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:15:40.372982763Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:15:40.375468116Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:15:40.377719084Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:15:40.382003614Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:15:40.385388156Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:15:40.387507125Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:15:44.383729485Z 2026-04-24 08:15:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:49.383076875Z 2026-04-24 08:15:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:49.383990696Z 2026-04-24 08:15:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:54.384813081Z 2026-04-24 08:15:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:15:59.383809704Z 2026-04-24 08:15:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:04.384821933Z 2026-04-24 08:16:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:09.383538889Z 2026-04-24 08:16:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:14.382881399Z 2026-04-24 08:16:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:19.382717311Z 2026-04-24 08:16:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:19.38350772Z 2026-04-24 08:16:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:24.382551804Z 2026-04-24 08:16:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:29.383513403Z 2026-04-24 08:16:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:34.382742722Z 2026-04-24 08:16:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:39.383020205Z 2026-04-24 08:16:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:44.382464149Z 2026-04-24 08:16:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:49.382904316Z 2026-04-24 08:16:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:49.383774557Z 2026-04-24 08:16:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:54.382796891Z 2026-04-24 08:16:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:16:59.383538856Z 2026-04-24 08:16:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:04.382859267Z 2026-04-24 08:17:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:09.383297845Z 2026-04-24 08:17:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:14.382407711Z 2026-04-24 08:17:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:19.386493137Z 2026-04-24 08:17:19 [info] {"method":"GET","path":"/health","status":200,"duration":"5ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:19.387560342Z 2026-04-24 08:17:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:24.383754619Z 2026-04-24 08:17:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:29.38261092Z 2026-04-24 08:17:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:34.382888795Z 2026-04-24 08:17:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:35.130325258Z 2026-04-24 08:17:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-24T08:17:35.317898603Z 2026-04-24 08:17:35 [error] Registration error: Firestore not initialized. Call initializeFirestore first.
2026-04-24T08:17:35.317919454Z Error: Firestore not initialized. Call initializeFirestore first.
2026-04-24T08:17:35.317924764Z     at getFirestore (/opt/render/project/src/backend/dist/modules/database/firestore.js:48:15)
2026-04-24T08:17:35.317929614Z     at UserRepository.getUserByEmail (/opt/render/project/src/backend/dist/modules/database/repositories/userRepository.js:26:49)
2026-04-24T08:17:35.317933754Z     at AuthService.register (/opt/render/project/src/backend/dist/modules/auth/services/authService.js:24:65)
2026-04-24T08:17:35.317937764Z     at /opt/render/project/src/backend/dist/modules/auth/controllers/authController.js:12:48
2026-04-24T08:17:35.317941964Z     at /opt/render/project/src/backend/dist/shared/utils/errorHandler.js:43:25
2026-04-24T08:17:35.317946284Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:17:35.317950514Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/route.js:149:13)
2026-04-24T08:17:35.317954344Z     at Route.dispatch (/opt/render/project/src/backend/node_modules/express/lib/router/route.js:119:3)
2026-04-24T08:17:35.317958135Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:17:35.317961875Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:284:15
2026-04-24T08:17:35.3181961Z 2026-04-24 08:17:35 [error] Registration failed
2026-04-24T08:17:35.318210741Z Error: Registration failed
2026-04-24T08:17:35.318215521Z     at AuthService.register (/opt/render/project/src/backend/dist/modules/auth/services/authService.js:59:19)
2026-04-24T08:17:35.318229551Z     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
2026-04-24T08:17:35.318231961Z     at async /opt/render/project/src/backend/dist/modules/auth/controllers/authController.js:12:20
2026-04-24T08:17:35.318882686Z 2026-04-24 08:17:35 [info] {"method":"POST","path":"/api/auth/register","status":500,"duration":"1ms","ip":"::1"}
2026-04-24T08:17:39.383355715Z 2026-04-24 08:17:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:44.383067876Z 2026-04-24 08:17:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:49.382766547Z 2026-04-24 08:17:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:49.383600377Z 2026-04-24 08:17:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:54.383290289Z 2026-04-24 08:17:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:17:59.383170974Z 2026-04-24 08:17:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:04.382356655Z 2026-04-24 08:18:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:09.383494281Z 2026-04-24 08:18:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:14.383247975Z 2026-04-24 08:18:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:19.383414098Z 2026-04-24 08:18:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:19.384830792Z 2026-04-24 08:18:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:24.382398164Z 2026-04-24 08:18:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:29.382208339Z 2026-04-24 08:18:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:34.382894135Z 2026-04-24 08:18:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:39.383226572Z 2026-04-24 08:18:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:44.382227579Z 2026-04-24 08:18:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:49.382801783Z 2026-04-24 08:18:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:49.383479429Z 2026-04-24 08:18:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:54.382390764Z 2026-04-24 08:18:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:18:59.38307977Z 2026-04-24 08:18:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:04.383265515Z 2026-04-24 08:19:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:09.383325187Z 2026-04-24 08:19:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:14.382397076Z 2026-04-24 08:19:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:19.382717084Z 2026-04-24 08:19:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:19.38337604Z 2026-04-24 08:19:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:24.382684324Z 2026-04-24 08:19:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:29.382371309Z 2026-04-24 08:19:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:34.38238493Z 2026-04-24 08:19:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:39.383239532Z 2026-04-24 08:19:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:44.3822453Z 2026-04-24 08:19:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:49.382501837Z 2026-04-24 08:19:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:49.383158273Z 2026-04-24 08:19:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:54.382750385Z 2026-04-24 08:19:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:19:59.384682323Z 2026-04-24 08:19:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:04.382832871Z 2026-04-24 08:20:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:09.382464784Z 2026-04-24 08:20:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:14.3833909Z 2026-04-24 08:20:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:19.383247709Z 2026-04-24 08:20:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:19.383992027Z 2026-04-24 08:20:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:24.383388704Z 2026-04-24 08:20:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:29.382549387Z 2026-04-24 08:20:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:34.382628932Z 2026-04-24 08:20:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:39.382988013Z 2026-04-24 08:20:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:40.340750837Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-24T08:20:40.423233225Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-24T08:20:44.382605657Z 2026-04-24 08:20:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:49.383150673Z 2026-04-24 08:20:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:49.38386648Z 2026-04-24 08:20:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:54.383149597Z 2026-04-24 08:20:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:20:59.382442123Z 2026-04-24 08:20:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:04.383155554Z 2026-04-24 08:21:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:09.383337752Z 2026-04-24 08:21:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:14.382725691Z 2026-04-24 08:21:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:19.383153385Z 2026-04-24 08:21:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:19.383914543Z 2026-04-24 08:21:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:24.382461822Z 2026-04-24 08:21:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:29.38260434Z 2026-04-24 08:21:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:34.382560633Z 2026-04-24 08:21:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:39.383165157Z 2026-04-24 08:21:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:44.382247299Z 2026-04-24 08:21:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:49.383753728Z 2026-04-24 08:21:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:49.384647309Z 2026-04-24 08:21:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:54.38242207Z 2026-04-24 08:21:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:21:59.382393834Z 2026-04-24 08:21:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:04.38373264Z 2026-04-24 08:22:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:09.383053508Z 2026-04-24 08:22:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:14.382694794Z 2026-04-24 08:22:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:19.382264239Z 2026-04-24 08:22:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:19.382894654Z 2026-04-24 08:22:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:24.382890449Z 2026-04-24 08:22:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:29.383283784Z 2026-04-24 08:22:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:34.388871692Z 2026-04-24 08:22:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:39.382289782Z 2026-04-24 08:22:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:44.382860202Z 2026-04-24 08:22:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:49.382434938Z 2026-04-24 08:22:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:49.383235987Z 2026-04-24 08:22:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:54.384167555Z 2026-04-24 08:22:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:22:59.382235786Z 2026-04-24 08:22:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:04.386858993Z 2026-04-24 08:23:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:09.383173523Z 2026-04-24 08:23:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:14.382593566Z 2026-04-24 08:23:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:19.382623805Z 2026-04-24 08:23:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:19.383931456Z 2026-04-24 08:23:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:24.383173856Z 2026-04-24 08:23:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:29.383303167Z 2026-04-24 08:23:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:34.382261981Z 2026-04-24 08:23:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:39.382427083Z 2026-04-24 08:23:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:44.383134508Z 2026-04-24 08:23:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:46.31348493Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-24T08:23:46.399489058Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-24T08:23:49.382559344Z 2026-04-24 08:23:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:49.3832547Z 2026-04-24 08:23:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:54.382569713Z 2026-04-24 08:23:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:58.590622244Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-24T08:23:59.383007913Z 2026-04-24 08:23:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:23:59.704697591Z 
2026-04-24T08:23:59.704719142Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-24T08:23:59.704724082Z > node dist/index.js
2026-04-24T08:23:59.704726412Z 
2026-04-24T08:24:02.694375457Z 2026-04-24 08:24:02 [info] Firestore initialized successfully
2026-04-24T08:24:02.699394602Z 2026-04-24 08:24:02 [info] ✅ Server running on http://localhost:10000
2026-04-24T08:24:02.699505965Z 2026-04-24 08:24:02 [info] Environment: production
2026-04-24T08:24:02.699739812Z 2026-04-24 08:24:02 [info] API URL: http://localhost:5000
2026-04-24T08:24:02.699938687Z 2026-04-24 08:24:02 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-24T08:24:02.795054191Z 2026-04-24 08:24:02 [error] Route / not found
2026-04-24T08:24:02.795070302Z Error: Route / not found
2026-04-24T08:24:02.795073732Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:24:02.795077932Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:24:02.795082752Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:24:02.795086282Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:24:02.795088752Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:24:02.795091412Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:24:02.795094072Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:24:02.795097183Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:24:02.795100513Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:24:02.795102263Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:24:02.798885295Z 2026-04-24 08:24:02 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-24T08:24:04.382800778Z 2026-04-24 08:24:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:06.735881052Z 2026-04-24 08:24:06 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:06.738247345Z 2026-04-24 08:24:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:07.717468596Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-24T08:24:07.834563255Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:24:07.836366366Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:24:07.83832595Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:24:07.840175902Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-24T08:24:07.84186264Z [0;32m[1m==> [0m[1m[0m
2026-04-24T08:24:07.844209323Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-24T08:24:07.935392382Z 2026-04-24 08:24:07 [error] Route / not found
2026-04-24T08:24:07.935409592Z Error: Route / not found
2026-04-24T08:24:07.935415033Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T08:24:07.935421273Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:24:07.935426953Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:24:07.935430773Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:24:07.935434313Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T08:24:07.935438363Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T08:24:07.935442023Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T08:24:07.935445783Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T08:24:07.935449234Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T08:24:07.935466154Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T08:24:07.936127032Z 2026-04-24 08:24:07 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T08:24:09.383181897Z 2026-04-24 08:24:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:11.735401155Z 2026-04-24 08:24:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:14.383203237Z 2026-04-24 08:24:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:16.737080416Z 2026-04-24 08:24:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:16.74093329Z 2026-04-24 08:24:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:19.383033464Z 2026-04-24 08:24:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:21.734722318Z 2026-04-24 08:24:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:24.382989673Z 2026-04-24 08:24:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:26.738401442Z 2026-04-24 08:24:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:29.38280105Z 2026-04-24 08:24:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:31.735670982Z 2026-04-24 08:24:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:34.383140279Z 2026-04-24 08:24:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:36.734079893Z 2026-04-24 08:24:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:39.382763032Z 2026-04-24 08:24:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:41.733722936Z 2026-04-24 08:24:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:44.383088371Z 2026-04-24 08:24:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:46.734477578Z 2026-04-24 08:24:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:46.735469385Z 2026-04-24 08:24:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:49.382936429Z 2026-04-24 08:24:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:51.73371546Z 2026-04-24 08:24:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:54.392756354Z 2026-04-24 08:24:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:24:56.733605438Z 2026-04-24 08:24:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:24:59.382608435Z 2026-04-24 08:24:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:25:01.734061231Z 2026-04-24 08:25:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:04.382134516Z 2026-04-24 08:25:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.242"}
2026-04-24T08:25:06.734835352Z 2026-04-24 08:25:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:11.733817464Z 2026-04-24 08:25:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:16.734015728Z 2026-04-24 08:25:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:16.734858171Z 2026-04-24 08:25:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:21.733649327Z 2026-04-24 08:25:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:26.733704696Z 2026-04-24 08:25:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:31.733784766Z 2026-04-24 08:25:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:36.734065199Z 2026-04-24 08:25:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:41.734531088Z 2026-04-24 08:25:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:46.733931077Z 2026-04-24 08:25:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:46.734598065Z 2026-04-24 08:25:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:51.735775072Z 2026-04-24 08:25:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:55.192164652Z 2026-04-24 08:25:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-24T08:25:57.596189332Z 2026-04-24 08:25:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:25:59.131535143Z 2026-04-24 08:25:59 [info] User registered: probe_1777019155@example.com
2026-04-24T08:25:59.132284843Z 2026-04-24 08:25:59 [info] {"method":"POST","path":"/register","status":201,"duration":"3682ms","ip":"::1"}
2026-04-24T08:26:01.73428298Z 2026-04-24 08:26:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:26:06.734275313Z 2026-04-24 08:26:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:26:11.734963774Z 2026-04-24 08:26:11 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:26:16.734267557Z 2026-04-24 08:26:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:26:16.735169731Z 2026-04-24 08:26:16 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:26:21.734876475Z 2026-04-24 08:26:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:26:26.734697081Z 2026-04-24 08:26:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:26:31.734946748Z 2026-04-24 08:26:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:26:36.733760866Z 2026-04-24 08:26:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
2026-04-24T08:26:41.753416465Z 2026-04-24 08:26:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.185"}
```
