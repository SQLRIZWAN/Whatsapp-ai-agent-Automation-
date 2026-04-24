== /health ==
{"status":"ok","timestamp":"2026-04-24T18:51:03.178Z","uptime":779.444123892}
HTTP: 200

== POST /api/auth/register (test flow) ==
Request: {
  "email": "probe_1777056663@example.com",
  "password": "TestPass123!",
  "displayName": "Probe User"
}
{"success":true,"message":"User registered successfully","data":{"user":{"uid":"e159a035-e028-4212-a7f7-8b1e7a878c58","email":"probe_1777056663@example.com","displayName":"Probe User","status":"active"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJlMTU5YTAzNS1lMDI4LTQyMTItYTdmNy04YjFlN2E4NzhjNTgiLCJlbWFpbCI6InByb2JlXzE3NzcwNTY2NjNAZXhhbXBsZS5jb20iLCJpYXQiOjE3NzcwNTY2NjQsImV4cCI6MTc3NzY2MTQ2NH0.7tvs6_8bAOeQubFmEsWt-y9GqGy8qB_hSvurEGzR724"},"timestamp":"2026-04-24T18:51:04.545Z"}
HTTP: 201

== GET /api/whatsapp/status (auth'd — creates Baileys runtime, kicks QR) ==
token length: 240
{"success":true,"message":"Status","data":{"status":"connecting","qrCode":null,"phone":null},"timestamp":"2026-04-24T18:51:04.956Z"}
HTTP: 200

== Sleep 10s, then GET /api/whatsapp/status again (QR should be present) ==
{"success":true,"message":"Status","data":{"status":"connecting","qrCode":null,"phone":null},"timestamp":"2026-04-24T18:51:15.132Z"}
HTTP: 200

== Render app logs (last 30 min) ==
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
2026-04-24T18:38:29.7403136Z 2026-04-24 18:38:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:34.741330031Z 2026-04-24 18:38:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:39.740400726Z 2026-04-24 18:38:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:44.743496413Z 2026-04-24 18:38:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:49.664730462Z 2026-04-24 18:38:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:49.739938061Z 2026-04-24 18:38:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:54.742902929Z 2026-04-24 18:38:54 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:38:59.744653146Z 2026-04-24 18:38:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:04.739930017Z 2026-04-24 18:39:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:09.740333091Z 2026-04-24 18:39:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:14.739763764Z 2026-04-24 18:39:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:19.6654869Z 2026-04-24 18:39:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:19.740647945Z 2026-04-24 18:39:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:24.740386381Z 2026-04-24 18:39:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:29.739795082Z 2026-04-24 18:39:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:34.74076746Z 2026-04-24 18:39:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:39.740423009Z 2026-04-24 18:39:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:44.739658217Z 2026-04-24 18:39:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:49.666304762Z 2026-04-24 18:39:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:49.740521087Z 2026-04-24 18:39:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:54.73982046Z 2026-04-24 18:39:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:39:59.740724353Z 2026-04-24 18:39:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:04.740118373Z 2026-04-24 18:40:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:09.740636397Z 2026-04-24 18:40:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:14.739575413Z 2026-04-24 18:40:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:19.665281308Z 2026-04-24 18:40:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:19.739911074Z 2026-04-24 18:40:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:21.09863639Z 2026-04-24 18:40:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-24T18:40:24.846279395Z 2026-04-24 18:40:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:25.565972197Z 2026-04-24 18:40:25 [info] User registered: probe_1777056021@example.com
2026-04-24T18:40:25.567720388Z 2026-04-24 18:40:25 [info] {"method":"POST","path":"/register","status":201,"duration":"4349ms","ip":"::1"}
2026-04-24T18:40:29.741119466Z 2026-04-24 18:40:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:34.740078753Z 2026-04-24 18:40:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:39.740506091Z 2026-04-24 18:40:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:44.742562141Z 2026-04-24 18:40:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:49.666216162Z 2026-04-24 18:40:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:49.740128784Z 2026-04-24 18:40:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:54.740276731Z 2026-04-24 18:40:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:40:59.739836633Z 2026-04-24 18:40:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:04.739672247Z 2026-04-24 18:41:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:09.740647966Z 2026-04-24 18:41:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:14.739756455Z 2026-04-24 18:41:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:19.665480711Z 2026-04-24 18:41:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:19.739798714Z 2026-04-24 18:41:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:24.742913403Z 2026-04-24 18:41:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:29.739808016Z 2026-04-24 18:41:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:34.740474122Z 2026-04-24 18:41:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:39.739894734Z 2026-04-24 18:41:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:44.739551374Z 2026-04-24 18:41:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:49.665412761Z 2026-04-24 18:41:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:49.739648577Z 2026-04-24 18:41:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:54.740649848Z 2026-04-24 18:41:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:41:59.739873566Z 2026-04-24 18:41:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:04.741213641Z 2026-04-24 18:42:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:09.740799546Z 2026-04-24 18:42:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:14.739522897Z 2026-04-24 18:42:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:19.664648888Z 2026-04-24 18:42:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:19.739981767Z 2026-04-24 18:42:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:24.740273825Z 2026-04-24 18:42:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:29.739757472Z 2026-04-24 18:42:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:34.739806851Z 2026-04-24 18:42:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:39.740500969Z 2026-04-24 18:42:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:44.739652042Z 2026-04-24 18:42:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:49.664941486Z 2026-04-24 18:42:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:49.740176218Z 2026-04-24 18:42:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:54.739907243Z 2026-04-24 18:42:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:42:59.740017718Z 2026-04-24 18:42:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:04.740330498Z 2026-04-24 18:43:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:09.739827586Z 2026-04-24 18:43:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:14.739750616Z 2026-04-24 18:43:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:16.059927591Z [0;32m[1m==> [0m[1mDetected service running on port 10000[0m
2026-04-24T18:43:16.282271278Z [0;32m[1m==> [0m[1mDocs on specifying a port: https://render.com/docs/web-services#port-binding[0m
2026-04-24T18:43:19.664953455Z 2026-04-24 18:43:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:19.740313435Z 2026-04-24 18:43:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:24.739663422Z 2026-04-24 18:43:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:29.739779358Z 2026-04-24 18:43:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:34.74039897Z 2026-04-24 18:43:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:39.740117416Z 2026-04-24 18:43:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:44.741200784Z 2026-04-24 18:43:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:49.665029559Z 2026-04-24 18:43:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:49.74080128Z 2026-04-24 18:43:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:54.739607787Z 2026-04-24 18:43:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:43:59.739760445Z 2026-04-24 18:43:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:04.739917443Z 2026-04-24 18:44:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:09.740589101Z 2026-04-24 18:44:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:14.757353094Z 2026-04-24 18:44:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:19.665762283Z 2026-04-24 18:44:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:19.739849368Z 2026-04-24 18:44:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:24.739790461Z 2026-04-24 18:44:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:29.741530458Z 2026-04-24 18:44:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:34.741326189Z 2026-04-24 18:44:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:39.740949607Z 2026-04-24 18:44:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:44.739772116Z 2026-04-24 18:44:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:49.665200621Z 2026-04-24 18:44:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:49.739782633Z 2026-04-24 18:44:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:54.739847265Z 2026-04-24 18:44:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:44:59.740943874Z 2026-04-24 18:44:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:04.7403978Z 2026-04-24 18:45:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:09.739635059Z 2026-04-24 18:45:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:14.73997227Z 2026-04-24 18:45:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:19.665334161Z 2026-04-24 18:45:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:19.739853458Z 2026-04-24 18:45:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:24.740743942Z 2026-04-24 18:45:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:29.739754515Z 2026-04-24 18:45:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:34.740075906Z 2026-04-24 18:45:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:39.740887264Z 2026-04-24 18:45:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:44.739571492Z 2026-04-24 18:45:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:49.664942874Z 2026-04-24 18:45:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:49.740089838Z 2026-04-24 18:45:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:54.740543189Z 2026-04-24 18:45:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:45:59.739906009Z 2026-04-24 18:45:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:04.74009666Z 2026-04-24 18:46:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:09.741137645Z 2026-04-24 18:46:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:14.739633609Z 2026-04-24 18:46:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:19.664713679Z 2026-04-24 18:46:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:19.739616905Z 2026-04-24 18:46:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:24.739926756Z 2026-04-24 18:46:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:29.73976045Z 2026-04-24 18:46:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:34.740259944Z 2026-04-24 18:46:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:39.739860051Z 2026-04-24 18:46:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:44.739681575Z 2026-04-24 18:46:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:49.66537074Z 2026-04-24 18:46:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:49.740549877Z 2026-04-24 18:46:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:54.740422375Z 2026-04-24 18:46:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:46:59.739668996Z 2026-04-24 18:46:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:04.742104956Z 2026-04-24 18:47:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:07.251618238Z 2026-04-24 18:47:07 [info] Client connected: 7g6C1F9T2CgT-rBwAAAB
2026-04-24T18:47:07.428031415Z 2026-04-24 18:47:07 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:07.539738031Z 2026-04-24 18:47:07 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket 7g6C1F9T2CgT-rBwAAAB
2026-04-24T18:47:07.928035315Z 2026-04-24 18:47:07 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:08.025878101Z 2026-04-24 18:47:08 [info] {"method":"GET","path":"/status","status":200,"duration":"599ms","ip":"::1"}
2026-04-24T18:47:08.962643459Z 2026-04-24 18:47:08 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:09.740149116Z 2026-04-24 18:47:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:11.463839588Z 2026-04-24 18:47:11 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:11.62444063Z 2026-04-24 18:47:11 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:14.739647296Z 2026-04-24 18:47:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:16.159065433Z 2026-04-24 18:47:16 [info] Client disconnected: 7g6C1F9T2CgT-rBwAAAB
2026-04-24T18:47:16.6183511Z 2026-04-24 18:47:16 [info] {"method":"GET","path":"/","status":200,"duration":"90ms","ip":"::1"}
2026-04-24T18:47:16.780602816Z 2026-04-24 18:47:16 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:19.283034487Z 2026-04-24 18:47:19 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:19.490025357Z 2026-04-24 18:47:19 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:19.66532091Z 2026-04-24 18:47:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:19.739997659Z 2026-04-24 18:47:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:23.797598807Z 2026-04-24 18:47:23 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:24.739997257Z 2026-04-24 18:47:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:26.302023577Z 2026-04-24 18:47:26 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:26.407919147Z 2026-04-24 18:47:26 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:28.403161779Z 2026-04-24 18:47:28 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:29.739851534Z 2026-04-24 18:47:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:30.902702653Z 2026-04-24 18:47:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:31.051911571Z 2026-04-24 18:47:31 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:31.874003201Z 2026-04-24 18:47:31 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:34.376547291Z 2026-04-24 18:47:34 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:34.52630932Z 2026-04-24 18:47:34 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:34.739547378Z 2026-04-24 18:47:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:38.418614393Z 2026-04-24 18:47:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:39.740285591Z 2026-04-24 18:47:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:40.426958948Z 2026-04-24 18:47:40 [info] System prompt updated for user 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:40.427710844Z 2026-04-24 18:47:40 [info] {"method":"PUT","path":"/system-prompt","status":200,"duration":"135ms","ip":"::1"}
2026-04-24T18:47:40.919622007Z 2026-04-24 18:47:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:41.030632231Z 2026-04-24 18:47:41 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:41.24427623Z 2026-04-24 18:47:41 [info] Call forwarding updated for user 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:41.331078768Z 2026-04-24 18:47:41 [info] {"method":"PUT","path":"/forwarding","status":200,"duration":"199ms","ip":"::1"}
2026-04-24T18:47:44.73990618Z 2026-04-24 18:47:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:45.641088351Z 2026-04-24 18:47:45 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:47.16255942Z 2026-04-24 18:47:47 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:47.290671416Z 2026-04-24 18:47:47 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:47.327311693Z 2026-04-24 18:47:47 [info] {"method":"GET","path":"/status","status":200,"duration":"165ms","ip":"::1"}
2026-04-24T18:47:47.749189545Z 2026-04-24 18:47:47 [info] Client connected: zkgWfM0G52FisD6SAAAD
2026-04-24T18:47:48.07174948Z 2026-04-24 18:47:48 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket zkgWfM0G52FisD6SAAAD
2026-04-24T18:47:48.141531043Z 2026-04-24 18:47:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:48.241510699Z 2026-04-24 18:47:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:49.670536667Z 2026-04-24 18:47:49 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:49.740505883Z 2026-04-24 18:47:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:50.513299167Z 2026-04-24 18:47:50 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:51.197121799Z 2026-04-24 18:47:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:53.015732808Z 2026-04-24 18:47:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:53.128506524Z 2026-04-24 18:47:53 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:53.696920103Z 2026-04-24 18:47:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:53.802747988Z 2026-04-24 18:47:53 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:54.538692679Z 2026-04-24 18:47:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:54.740802362Z 2026-04-24 18:47:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:47:55.328090937Z 2026-04-24 18:47:55 [info] Client disconnected: zkgWfM0G52FisD6SAAAD
2026-04-24T18:47:55.762062856Z 2026-04-24 18:47:55 [info] {"method":"GET","path":"/","status":200,"duration":"101ms","ip":"::1"}
2026-04-24T18:47:56.831307087Z 2026-04-24 18:47:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:57.040362312Z 2026-04-24 18:47:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:57.145371116Z 2026-04-24 18:47:57 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:57.853663313Z 2026-04-24 18:47:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:47:59.33055742Z 2026-04-24 18:47:59 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:59.483509678Z 2026-04-24 18:47:59 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:47:59.654290143Z 2026-04-24 18:47:59 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-24T18:47:59.740370687Z 2026-04-24 18:47:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:00.176699713Z 2026-04-24 18:48:00 [info] Client connected: wnHR1Kvm8id0MNj1AAAF
2026-04-24T18:48:00.354357114Z 2026-04-24 18:48:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:00.480389764Z 2026-04-24 18:48:00 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:00.525388278Z 2026-04-24 18:48:00 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket wnHR1Kvm8id0MNj1AAAF
2026-04-24T18:48:01.677985819Z 2026-04-24 18:48:01 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:04.179757581Z 2026-04-24 18:48:04 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:04.239714476Z 2026-04-24 18:48:04 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:04.344855309Z 2026-04-24 18:48:04 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:04.655128234Z 2026-04-24 18:48:04 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:04.740199142Z 2026-04-24 18:48:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:06.740865671Z 2026-04-24 18:48:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:06.846663334Z 2026-04-24 18:48:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:07.154928738Z 2026-04-24 18:48:07 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:07.268352672Z 2026-04-24 18:48:07 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:07.342687356Z 2026-04-24 18:48:07 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:09.740291617Z 2026-04-24 18:48:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:09.843066363Z 2026-04-24 18:48:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:09.956490897Z 2026-04-24 18:48:09 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:11.764112342Z 2026-04-24 18:48:11 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:14.265681138Z 2026-04-24 18:48:14 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:14.36200321Z 2026-04-24 18:48:14 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:14.703539018Z 2026-04-24 18:48:14 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:14.739981081Z 2026-04-24 18:48:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:17.206590206Z 2026-04-24 18:48:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:17.310075075Z 2026-04-24 18:48:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:17.594398154Z 2026-04-24 18:48:17 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:19.665185Z 2026-04-24 18:48:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:19.739630752Z 2026-04-24 18:48:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:20.098718207Z 2026-04-24 18:48:20 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:20.629394227Z 2026-04-24 18:48:20 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:21.139063601Z 2026-04-24 18:48:21 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:21.662928519Z 2026-04-24 18:48:21 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:23.642572122Z 2026-04-24 18:48:23 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:23.825165873Z 2026-04-24 18:48:23 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:24.164094725Z 2026-04-24 18:48:24 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:24.285708134Z 2026-04-24 18:48:24 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:24.742219683Z 2026-04-24 18:48:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:25.126040312Z 2026-04-24 18:48:25 [error] Route / not found
2026-04-24T18:48:25.126055603Z Error: Route / not found
2026-04-24T18:48:25.126060413Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T18:48:25.126065324Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:48:25.126070084Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:48:25.126074494Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:48:25.126078875Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T18:48:25.126083325Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T18:48:25.126087805Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T18:48:25.126092216Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:48:25.126102216Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:48:25.126105237Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:48:25.126108137Z 2026-04-24 18:48:25 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T18:48:25.604751535Z 2026-04-24 18:48:25 [error] Route /favicon.ico not found
2026-04-24T18:48:25.604765746Z Error: Route /favicon.ico not found
2026-04-24T18:48:25.604769227Z     at /opt/render/project/src/backend/dist/app.js:62:15
2026-04-24T18:48:25.604772057Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:48:25.604775107Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:48:25.604778037Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:48:25.604781087Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-24T18:48:25.604784418Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-24T18:48:25.604787968Z     at /opt/render/project/src/backend/dist/app.js:44:9
2026-04-24T18:48:25.604791278Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-24T18:48:25.604794408Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-24T18:48:25.604797779Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-24T18:48:25.605419935Z 2026-04-24 18:48:25 [info] {"method":"GET","path":"/favicon.ico","status":404,"duration":"1ms","ip":"::1"}
2026-04-24T18:48:26.289254399Z 2026-04-24 18:48:26 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:28.06908851Z 2026-04-24 18:48:28 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:28.567300866Z 2026-04-24 18:48:28 [info] Client disconnected: wnHR1Kvm8id0MNj1AAAF
2026-04-24T18:48:28.788921663Z 2026-04-24 18:48:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:28.881384786Z 2026-04-24 18:48:28 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:29.740630422Z 2026-04-24 18:48:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:30.571443376Z 2026-04-24 18:48:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:30.661337896Z 2026-04-24 18:48:30 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:32.991609179Z 2026-04-24 18:48:32 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:33.749344763Z 2026-04-24 18:48:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:34.740200117Z 2026-04-24 18:48:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:35.492566819Z 2026-04-24 18:48:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:35.630696076Z 2026-04-24 18:48:35 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:35.650295875Z 2026-04-24 18:48:35 [info] {"method":"GET","path":"/status","status":200,"duration":"2ms","ip":"::1"}
2026-04-24T18:48:36.189104765Z 2026-04-24 18:48:36 [info] Client connected: A_c7oU1E8g-u3UrTAAAH
2026-04-24T18:48:36.248555853Z 2026-04-24 18:48:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:36.350072755Z 2026-04-24 18:48:36 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:36.524638583Z 2026-04-24 18:48:36 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket A_c7oU1E8g-u3UrTAAAH
2026-04-24T18:48:37.817700987Z 2026-04-24 18:48:37 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:39.740080666Z 2026-04-24 18:48:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:40.318713742Z 2026-04-24 18:48:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:40.427605006Z 2026-04-24 18:48:40 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:40.65705341Z 2026-04-24 18:48:40 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:43.158697502Z 2026-04-24 18:48:43 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:43.263712566Z 2026-04-24 18:48:43 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:44.739992557Z 2026-04-24 18:48:44 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:45.174940489Z 2026-04-24 18:48:45 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:46.639842717Z 2026-04-24 18:48:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:47.088711593Z 2026-04-24 18:48:47 [info] Client disconnected: A_c7oU1E8g-u3UrTAAAH
2026-04-24T18:48:47.52452531Z 2026-04-24 18:48:47 [info] {"method":"GET","path":"/","status":200,"duration":"89ms","ip":"::1"}
2026-04-24T18:48:47.675287434Z 2026-04-24 18:48:47 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:47.782738391Z 2026-04-24 18:48:47 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:48.342721368Z 2026-04-24 18:48:48 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:49.140720552Z 2026-04-24 18:48:49 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:49.246306318Z 2026-04-24 18:48:49 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:49.666061442Z 2026-04-24 18:48:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:49.74018446Z 2026-04-24 18:48:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:50.843925397Z 2026-04-24 18:48:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:51.028703162Z 2026-04-24 18:48:51 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:53.208083621Z 2026-04-24 18:48:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:54.739841641Z 2026-04-24 18:48:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:48:55.708699996Z 2026-04-24 18:48:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:55.857671716Z 2026-04-24 18:48:55 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:56.018715001Z 2026-04-24 18:48:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:58.519726095Z 2026-04-24 18:48:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:58.631406969Z 2026-04-24 18:48:58 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:48:59.492483643Z 2026-04-24 18:48:59 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:48:59.74025885Z 2026-04-24 18:48:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:01.994706788Z 2026-04-24 18:49:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:02.102016434Z 2026-04-24 18:49:02 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:03.562118892Z 2026-04-24 18:49:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:04.740393889Z 2026-04-24 18:49:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:05.213531855Z 2026-04-24 18:49:05 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:06.062154064Z 2026-04-24 18:49:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:06.152031383Z 2026-04-24 18:49:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:07.714115567Z 2026-04-24 18:49:07 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:08.026443986Z 2026-04-24 18:49:08 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:08.754827399Z 2026-04-24 18:49:08 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:09.740003838Z 2026-04-24 18:49:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:11.255656841Z 2026-04-24 18:49:11 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:11.355983943Z 2026-04-24 18:49:11 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:11.574485306Z 2026-04-24 18:49:11 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:14.077697016Z 2026-04-24 18:49:14 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:14.174593281Z 2026-04-24 18:49:14 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:14.739568723Z 2026-04-24 18:49:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:15.101183146Z 2026-04-24 18:49:15 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:17.60096997Z 2026-04-24 18:49:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:17.701028272Z 2026-04-24 18:49:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:18.134278047Z 2026-04-24 18:49:18 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:19.665563392Z 2026-04-24 18:49:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:19.740475089Z 2026-04-24 18:49:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:19.929304757Z 2026-04-24 18:49:19 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:20.632691077Z 2026-04-24 18:49:20 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:20.735335003Z 2026-04-24 18:49:20 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:22.430012799Z 2026-04-24 18:49:22 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:22.52084274Z 2026-04-24 18:49:22 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:24.74037745Z 2026-04-24 18:49:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:25.191102655Z 2026-04-24 18:49:25 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:27.312188113Z 2026-04-24 18:49:27 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:27.690808512Z 2026-04-24 18:49:27 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:27.799861868Z 2026-04-24 18:49:27 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:28.10435693Z 2026-04-24 18:49:28 [info] System prompt updated for user 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:28.104378791Z 2026-04-24 18:49:28 [info] {"method":"PUT","path":"/system-prompt","status":200,"duration":"113ms","ip":"::1"}
2026-04-24T18:49:28.873054546Z 2026-04-24 18:49:28 [info] Call forwarding updated for user 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:28.969734115Z 2026-04-24 18:49:28 [info] {"method":"PUT","path":"/forwarding","status":200,"duration":"204ms","ip":"::1"}
2026-04-24T18:49:29.739796194Z 2026-04-24 18:49:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:29.812476604Z 2026-04-24 18:49:29 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:29.921339266Z 2026-04-24 18:49:29 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:32.451849793Z 2026-04-24 18:49:32 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:33.913526439Z 2026-04-24 18:49:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:34.74043411Z 2026-04-24 18:49:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:34.95222106Z 2026-04-24 18:49:34 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:35.041417868Z 2026-04-24 18:49:35 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:36.414707886Z 2026-04-24 18:49:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:36.518302044Z 2026-04-24 18:49:36 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:36.886556225Z 2026-04-24 18:49:36 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-24T18:49:37.507967598Z 2026-04-24 18:49:37 [info] Client connected: epn9VTSoFUy8Si_HAAAJ
2026-04-24T18:49:37.817913418Z 2026-04-24 18:49:37 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket epn9VTSoFUy8Si_HAAAJ
2026-04-24T18:49:38.392387842Z 2026-04-24 18:49:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:39.740015447Z 2026-04-24 18:49:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:40.89371295Z 2026-04-24 18:49:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:40.950574614Z 2026-04-24 18:49:40 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:41.025626941Z 2026-04-24 18:49:41 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:43.451701977Z 2026-04-24 18:49:43 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:43.519839056Z 2026-04-24 18:49:43 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:43.55736421Z 2026-04-24 18:49:43 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:44.752859097Z 2026-04-24 18:49:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:45.622925225Z 2026-04-24 18:49:45 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:46.020351283Z 2026-04-24 18:49:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:46.18235556Z 2026-04-24 18:49:46 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:48.123692711Z 2026-04-24 18:49:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:48.226671092Z 2026-04-24 18:49:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:48.647703941Z 2026-04-24 18:49:48 [info] Client disconnected: epn9VTSoFUy8Si_HAAAJ
2026-04-24T18:49:49.561111998Z 2026-04-24 18:49:49 [info] {"method":"GET","path":"/","status":200,"duration":"93ms","ip":"::1"}
2026-04-24T18:49:49.665361585Z 2026-04-24 18:49:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:49.739953698Z 2026-04-24 18:49:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:51.819282985Z 2026-04-24 18:49:51 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:53.734842213Z 2026-04-24 18:49:53 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:54.319511741Z 2026-04-24 18:49:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:54.432670936Z 2026-04-24 18:49:54 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:54.742984703Z 2026-04-24 18:49:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:49:56.236363376Z 2026-04-24 18:49:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:56.337123551Z 2026-04-24 18:49:56 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:49:58.607384094Z 2026-04-24 18:49:58 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:49:59.739932102Z 2026-04-24 18:49:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:01.107703527Z 2026-04-24 18:50:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:01.214473702Z 2026-04-24 18:50:01 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:01.384040167Z 2026-04-24 18:50:01 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:03.626460652Z 2026-04-24 18:50:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:03.885024549Z 2026-04-24 18:50:03 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:03.999401645Z 2026-04-24 18:50:03 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:04.740495302Z 2026-04-24 18:50:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:06.127152393Z 2026-04-24 18:50:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:06.233486556Z 2026-04-24 18:50:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:07.205151171Z 2026-04-24 18:50:07 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:09.707711612Z 2026-04-24 18:50:09 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:09.739639556Z 2026-04-24 18:50:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:09.808748498Z 2026-04-24 18:50:09 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:10.733943119Z 2026-04-24 18:50:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:12.587602786Z 2026-04-24 18:50:12 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:13.235083403Z 2026-04-24 18:50:13 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:13.425311987Z 2026-04-24 18:50:13 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:14.739612313Z 2026-04-24 18:50:14 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:15.087929219Z 2026-04-24 18:50:15 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:15.183914206Z 2026-04-24 18:50:15 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:15.369903091Z 2026-04-24 18:50:15 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:17.869777581Z 2026-04-24 18:50:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:17.97392423Z 2026-04-24 18:50:17 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:19.664943002Z 2026-04-24 18:50:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:19.740293812Z 2026-04-24 18:50:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:20.241306398Z 2026-04-24 18:50:20 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:22.532990727Z 2026-04-24 18:50:22 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:22.741029616Z 2026-04-24 18:50:22 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:22.925913608Z 2026-04-24 18:50:22 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:23.131530655Z 2026-04-24 18:50:23 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:24.740927587Z 2026-04-24 18:50:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:25.033209753Z 2026-04-24 18:50:25 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:25.140323814Z 2026-04-24 18:50:25 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:25.632108818Z 2026-04-24 18:50:25 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:26.231674723Z 2026-04-24 18:50:26 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:28.941548048Z 2026-04-24 18:50:28 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:29.740131516Z 2026-04-24 18:50:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:31.44211159Z 2026-04-24 18:50:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:31.530866814Z 2026-04-24 18:50:31 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:31.818653803Z 2026-04-24 18:50:31 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:33.936607406Z 2026-04-24 18:50:33 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:34.319776856Z 2026-04-24 18:50:34 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:34.416140421Z 2026-04-24 18:50:34 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:34.739830462Z 2026-04-24 18:50:34 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:36.436883596Z 2026-04-24 18:50:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:36.525080869Z 2026-04-24 18:50:36 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:38.088892963Z 2026-04-24 18:50:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:39.250042966Z 2026-04-24 18:50:39 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:39.740190187Z 2026-04-24 18:50:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:40.589638558Z 2026-04-24 18:50:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:40.684476339Z 2026-04-24 18:50:40 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:41.750671782Z 2026-04-24 18:50:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:41.85626715Z 2026-04-24 18:50:41 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:44.313119364Z 2026-04-24 18:50:44 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:44.739629543Z 2026-04-24 18:50:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:46.297506582Z 2026-04-24 18:50:46 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:46.814725483Z 2026-04-24 18:50:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:46.916718451Z 2026-04-24 18:50:46 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:47.552332279Z 2026-04-24 18:50:47 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-24T18:50:48.207304868Z 2026-04-24 18:50:48 [info] Client connected: tfa1Vdvux96qDy07AAAL
2026-04-24T18:50:48.516496811Z 2026-04-24 18:50:48 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket tfa1Vdvux96qDy07AAAL
2026-04-24T18:50:48.731297967Z 2026-04-24 18:50:48 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:48.798096596Z 2026-04-24 18:50:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:48.974303218Z 2026-04-24 18:50:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:49.665416457Z 2026-04-24 18:50:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:49.739928794Z 2026-04-24 18:50:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:49.862735742Z 2026-04-24 18:50:49 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:51.231650733Z 2026-04-24 18:50:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:51.336315661Z 2026-04-24 18:50:51 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:52.36312179Z 2026-04-24 18:50:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:52.463306072Z 2026-04-24 18:50:52 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:54.680184973Z 2026-04-24 18:50:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:54.739666103Z 2026-04-24 18:50:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:50:55.454841006Z 2026-04-24 18:50:55 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:57.181162785Z 2026-04-24 18:50:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:57.282392046Z 2026-04-24 18:50:57 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:57.956666412Z 2026-04-24 18:50:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:57.958011743Z 2026-04-24 18:50:57 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:50:58.062027582Z 2026-04-24 18:50:58 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:50:59.739840544Z 2026-04-24 18:50:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:00.458905169Z 2026-04-24 18:51:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:00.538053394Z 2026-04-24 18:51:00 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:03.179342147Z 2026-04-24 18:51:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-24T18:51:03.605200568Z 2026-04-24 18:51:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:03.66898067Z 2026-04-24 18:51:03 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:04.54547445Z 2026-04-24 18:51:04 [info] User registered: probe_1777056663@example.com
2026-04-24T18:51:04.546074014Z 2026-04-24 18:51:04 [info] {"method":"POST","path":"/register","status":201,"duration":"976ms","ip":"::1"}
2026-04-24T18:51:04.740010816Z 2026-04-24 18:51:04 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:04.864339298Z 2026-04-24 18:51:04 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:04.955340881Z 2026-04-24 18:51:04 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:04.956943301Z 2026-04-24 18:51:04 [info] {"method":"GET","path":"/status","status":200,"duration":"93ms","ip":"::1"}
2026-04-24T18:51:06.106021949Z 2026-04-24 18:51:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:06.169068776Z 2026-04-24 18:51:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:06.182904783Z 2026-04-24 18:51:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:06.253296962Z 2026-04-24 18:51:06 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:08.102625653Z 2026-04-24 18:51:08 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:09.740844257Z 2026-04-24 18:51:09 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:09.92440106Z 2026-04-24 18:51:09 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:10.603633048Z 2026-04-24 18:51:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:10.699347945Z 2026-04-24 18:51:10 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:10.990884224Z 2026-04-24 18:51:10 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:11.824666991Z 2026-04-24 18:51:11 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:12.425022825Z 2026-04-24 18:51:12 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:12.579949632Z 2026-04-24 18:51:12 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:13.491422714Z 2026-04-24 18:51:13 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:13.598153986Z 2026-04-24 18:51:13 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:14.325441978Z 2026-04-24 18:51:14 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:14.410873624Z 2026-04-24 18:51:14 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:14.739791346Z 2026-04-24 18:51:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:15.132799854Z 2026-04-24 18:51:15 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-24T18:51:15.926622554Z 2026-04-24 18:51:15 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:18.025009111Z 2026-04-24 18:51:18 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:18.427322036Z 2026-04-24 18:51:18 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:18.559938359Z 2026-04-24 18:51:18 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:18.713944597Z 2026-04-24 18:51:18 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:19.588441967Z 2026-04-24 18:51:19 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:19.665433539Z 2026-04-24 18:51:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:19.739754042Z 2026-04-24 18:51:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:20.525381678Z 2026-04-24 18:51:20 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:20.613924107Z 2026-04-24 18:51:20 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:21.214290932Z 2026-04-24 18:51:21 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:21.297869529Z 2026-04-24 18:51:21 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:22.08969595Z 2026-04-24 18:51:22 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:22.174099928Z 2026-04-24 18:51:22 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:22.75987979Z 2026-04-24 18:51:22 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:24.408113144Z 2026-04-24 18:51:24 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:24.740509767Z 2026-04-24 18:51:24 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:24.981578112Z 2026-04-24 18:51:24 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:25.263182317Z 2026-04-24 18:51:25 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:25.353470756Z 2026-04-24 18:51:25 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:26.90967532Z 2026-04-24 18:51:26 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:26.997580161Z 2026-04-24 18:51:26 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:27.482187337Z 2026-04-24 18:51:27 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:27.567197611Z 2026-04-24 18:51:27 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:27.829359248Z 2026-04-24 18:51:27 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:28.454405314Z 2026-04-24 18:51:28 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:28.474087339Z 2026-04-24 18:51:28 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:29.739742978Z 2026-04-24 18:51:29 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:30.330023977Z 2026-04-24 18:51:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:30.412002934Z 2026-04-24 18:51:30 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:30.955599593Z 2026-04-24 18:51:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:30.975356834Z 2026-04-24 18:51:30 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:31.050621497Z 2026-04-24 18:51:31 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:31.233474637Z 2026-04-24 18:51:31 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:32.900514302Z 2026-04-24 18:51:32 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:34.739691432Z 2026-04-24 18:51:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:35.400846946Z 2026-04-24 18:51:35 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:35.486958252Z 2026-04-24 18:51:35 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:35.548436782Z 2026-04-24 18:51:35 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:35.55974085Z 2026-04-24 18:51:35 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:36.547550755Z 2026-04-24 18:51:36 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:38.049529083Z 2026-04-24 18:51:38 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:38.062108096Z 2026-04-24 18:51:38 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:38.142303569Z 2026-04-24 18:51:38 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:38.327898645Z 2026-04-24 18:51:38 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:38.746284266Z 2026-04-24 18:51:38 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:39.048404989Z 2026-04-24 18:51:39 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:39.154203701Z 2026-04-24 18:51:39 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:39.739859014Z 2026-04-24 18:51:39 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:40.249806789Z 2026-04-24 18:51:40 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:41.246643002Z 2026-04-24 18:51:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:41.323846941Z 2026-04-24 18:51:41 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:41.360902999Z 2026-04-24 18:51:41 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:42.75036731Z 2026-04-24 18:51:42 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:42.832224658Z 2026-04-24 18:51:42 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:43.861614141Z 2026-04-24 18:51:43 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:44.025728007Z 2026-04-24 18:51:44 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:44.739605403Z 2026-04-24 18:51:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:45.851583879Z 2026-04-24 18:51:45 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:47.896536468Z 2026-04-24 18:51:47 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:48.353786303Z 2026-04-24 18:51:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:48.432853141Z 2026-04-24 18:51:48 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:48.690629489Z 2026-04-24 18:51:48 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:49.66516672Z 2026-04-24 18:51:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:49.740457185Z 2026-04-24 18:51:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:50.397592797Z 2026-04-24 18:51:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:50.480067891Z 2026-04-24 18:51:50 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:50.85414986Z 2026-04-24 18:51:50 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:51.191760914Z 2026-04-24 18:51:51 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:51.3357506Z 2026-04-24 18:51:51 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:52.144851156Z 2026-04-24 18:51:52 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:53.355781421Z 2026-04-24 18:51:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:53.469737346Z 2026-04-24 18:51:53 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:54.548732878Z 2026-04-24 18:51:54 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:54.64771798Z 2026-04-24 18:51:54 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:54.755320658Z 2026-04-24 18:51:54 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:54.757111613Z 2026-04-24 18:51:54 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:56.747142264Z 2026-04-24 18:51:56 [warn] [wa] connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (code=405)
2026-04-24T18:51:57.049222474Z 2026-04-24 18:51:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:57.139197951Z 2026-04-24 18:51:57 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:57.391185865Z 2026-04-24 18:51:57 [warn] [wa] connection closed for e159a035-e028-4212-a7f7-8b1e7a878c58 (code=405)
2026-04-24T18:51:59.250459372Z 2026-04-24 18:51:59 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:59.33898382Z 2026-04-24 18:51:59 [info] [wa-auth] no creds doc — initializing new creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-24T18:51:59.739523832Z 2026-04-24 18:51:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.218"}
2026-04-24T18:51:59.891378078Z 2026-04-24 18:51:59 [info] [wa] spawning connection for e159a035-e028-4212-a7f7-8b1e7a878c58
2026-04-24T18:51:59.974924893Z 2026-04-24 18:51:59 [info] [wa-auth] no creds doc — initializing new creds for e159a035-e028-4212-a7f7-8b1e7a878c58
```
