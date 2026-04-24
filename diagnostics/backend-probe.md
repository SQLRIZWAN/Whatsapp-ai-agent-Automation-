== /health ==
{"status":"ok","timestamp":"2026-04-24T18:40:21.097Z","uptime":137.363293475}
HTTP: 200

== POST /api/auth/register (test flow) ==
Request: {
  "email": "probe_1777056021@example.com",
  "password": "TestPass123!",
  "displayName": "Probe User"
}
{"success":true,"message":"User registered successfully","data":{"user":{"uid":"333a6148-0603-46db-ab00-26be10a14218","email":"probe_1777056021@example.com","displayName":"Probe User","status":"active"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzMzNhNjE0OC0wNjAzLTQ2ZGItYWIwMC0yNmJlMTBhMTQyMTgiLCJlbWFpbCI6InByb2JlXzE3NzcwNTYwMjFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NzcwNTYwMjUsImV4cCI6MTc3NzY2MDgyNX0.scpZk33mWTprmfpgIwQ2U7UwUSiku7y9lc9jCpSolqc"},"timestamp":"2026-04-24T18:40:25.566Z"}
HTTP: 201

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
```
