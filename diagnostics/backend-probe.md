== /health ==
{"status":"ok","timestamp":"2026-04-24T08:17:35.129Z","uptime":122.511559043}
HTTP: 200

== POST /api/auth/register (test flow) ==
Request: {
  "email": "probe_1777018655@example.com",
  "password": "TestPass123!",
  "displayName": "Probe User"
}
{"success":false,"message":"Registration failed","error":"INTERNAL_ERROR","timestamp":"2026-04-24T08:17:35.318Z"}
HTTP: 500

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
```
