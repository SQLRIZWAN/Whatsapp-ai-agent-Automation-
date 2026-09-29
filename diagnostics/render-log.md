# Render deploy log — Tue Sep 29 16:47:15 UTC 2026
Commit: 17edff8b103ef1dd1d08e21ed2fdc6e626c4c77a

```
2026-09-29T16:41:32.471955595Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-09-29T16:41:32.827384337Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-09-29T16:41:48.103862144Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-09-29T16:41:49.641481935Z 
2026-09-29T16:41:49.641495705Z > whatsapp-ai-agent-backend@1.0.0 start
2026-09-29T16:41:49.641500715Z > node dist/index.js
2026-09-29T16:41:49.641503326Z 
2026-09-29T16:41:59.442362316Z 2026-09-29 16:41:59 [info] [ai] Gemini REST ready — chain: gemini-2.5-flash → gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest → gemini-2.5-flash-lite → gemini-2.0-flash-001 → gemini-2.0-flash-lite-001
2026-09-29T16:41:59.442815066Z 2026-09-29 16:41:59 [info] [ai] Imagen chain: imagen-4.0-generate-001 → imagen-4.0-fast-generate-001 → imagen-4.0-ultra-generate-001 → imagen-3.0-generate-002 → imagen-3.0-generate-001 → imagen-3.0-fast-generate-001
2026-09-29T16:41:59.442921097Z 2026-09-29 16:41:59 [info] [ai] TTS chain: gemini-2.5-flash-preview-tts → gemini-2.5-pro-preview-tts → gemini-3.1-flash-tts-preview → gemini-2.0-flash-preview-tts
2026-09-29T16:42:01.009144294Z 2026-09-29 16:42:01 [info] Firestore initialized successfully
2026-09-29T16:42:01.014614235Z 2026-09-29 16:42:01 [info] ✅ Server running on http://localhost:10000
2026-09-29T16:42:01.014803778Z 2026-09-29 16:42:01 [info] Environment: production
2026-09-29T16:42:01.01488423Z 2026-09-29 16:42:01 [info] API URL: http://localhost:5000
2026-09-29T16:42:01.014928351Z 2026-09-29 16:42:01 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-09-29T16:42:01.132492898Z 2026-09-29 16:42:01 [error] Route / not found
2026-09-29T16:42:01.132505208Z Error: Route / not found
2026-09-29T16:42:01.132509068Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-09-29T16:42:01.132512869Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:42:01.132516169Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:42:01.132519458Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:42:01.132522179Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-09-29T16:42:01.132524949Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-09-29T16:42:01.132527689Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-09-29T16:42:01.132530459Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:42:01.132533149Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:42:01.132535869Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:42:01.137238584Z 2026-09-29 16:42:01 [info] {"method":"HEAD","path":"/","status":404,"duration":"5ms","ip":"::1"}
2026-09-29T16:42:01.861176181Z 2026-09-29 16:42:01 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:01.863838515Z 2026-09-29 16:42:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:05.603716179Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-09-29T16:42:06.505963486Z 2026-09-29 16:42:06 [error] Route / not found
2026-09-29T16:42:06.505988057Z Error: Route / not found
2026-09-29T16:42:06.505994187Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-09-29T16:42:06.505999307Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:42:06.506004527Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:42:06.506020027Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:42:06.506022097Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-09-29T16:42:06.506024048Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-09-29T16:42:06.506026037Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-09-29T16:42:06.506027917Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:42:06.506029728Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:42:06.506031568Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:42:06.506832834Z 2026-09-29 16:42:06 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-09-29T16:42:06.864627608Z 2026-09-29 16:42:06 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:07.167103079Z 2026-09-29 16:42:07 [info] [startup] available text/vision models: deep-research-pro-preview-12-2025, gemini-2.5-computer-use-preview-10-2025, gemini-2.5-flash, gemini-2.5-flash-image, gemini-2.5-flash-lite, gemini-2.5-flash-native-audio-latest, gemini-2.5-flash-native-audio-preview-09-2025, gemini-2.5-flash-native-audio-preview-12-2025, gemini-2.5-flash-preview-tts, gemini-2.5-pro, gemini-2.5-pro-preview-tts, gemini-3-flash-preview, gemini-3-pro-image, gemini-3-pro-image-preview, gemini-3.1-flash-image, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite, gemini-3.1-flash-lite-image, gemini-3.1-flash-lite-preview, gemini-3.1-flash-live-preview, gemini-3.1-flash-tts-preview, gemini-3.1-pro-preview, gemini-3.1-pro-preview-customtools, gemini-3.5-flash, gemini-3.5-flash-lite, gemini-3.6-flash, gemini-3.7-flash, gemini-3.8-flash, gemini-3.8-flash-lite-tts, gemini-3.8-flash-tts
2026-09-29T16:42:07.16716053Z 2026-09-29 16:42:07 [info] [startup] available image-gen models: gemini-2.5-flash-image, gemini-3-pro-image, gemini-3-pro-image-preview, gemini-3.1-flash-image, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite-image
2026-09-29T16:42:07.16718343Z 2026-09-29 16:42:07 [info] [startup] available tts models: gemini-2.5-flash-preview-tts, gemini-2.5-pro-preview-tts, gemini-3.1-flash-tts-preview, gemini-3.8-flash-lite-tts, gemini-3.8-flash-tts
2026-09-29T16:42:07.51537214Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:42:07.573526684Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-09-29T16:42:07.595473089Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:42:07.613084734Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-09-29T16:42:07.647117489Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:42:07.667844648Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-09-29T16:42:07.705446318Z 2026-09-29 16:42:07 [info] [ai] text OK via gemini-2.5-flash
2026-09-29T16:42:07.705465559Z 2026-09-29 16:42:07 [info] [startup] readiness: firestore=true ai=true(gemini-2.5-flash) tts.gemini=true tts.elevenlabs=false tts.gtts=true
2026-09-29T16:42:11.865100446Z 2026-09-29 16:42:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:16.863773136Z 2026-09-29 16:42:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:21.864431257Z 2026-09-29 16:42:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:23.50693946Z 2026-09-29 16:42:23 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-09-29T16:42:26.864393345Z 2026-09-29 16:42:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:31.858547662Z 2026-09-29 16:42:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:31.862569174Z 2026-09-29 16:42:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:36.864394117Z 2026-09-29 16:42:36 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:41.863899902Z 2026-09-29 16:42:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:46.863008341Z 2026-09-29 16:42:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:51.863033374Z 2026-09-29 16:42:51 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:42:56.863887483Z 2026-09-29 16:42:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:01.859410123Z 2026-09-29 16:43:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:01.862564768Z 2026-09-29 16:43:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:06.863884183Z 2026-09-29 16:43:06 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:11.863464903Z 2026-09-29 16:43:11 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:16.863485888Z 2026-09-29 16:43:16 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:21.863563129Z 2026-09-29 16:43:21 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:26.863587802Z 2026-09-29 16:43:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:31.861286838Z 2026-09-29 16:43:31 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:31.86381942Z 2026-09-29 16:43:31 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:36.365319177Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-09-29T16:43:36.649952208Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-09-29T16:43:36.863170158Z 2026-09-29 16:43:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:41.86351153Z 2026-09-29 16:43:41 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:46.863104385Z 2026-09-29 16:43:46 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:48.433270779Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-09-29T16:43:49.92821787Z 
2026-09-29T16:43:49.928250481Z > whatsapp-ai-agent-backend@1.0.0 start
2026-09-29T16:43:49.928257711Z > node dist/index.js
2026-09-29T16:43:49.928260171Z 
2026-09-29T16:43:51.863282316Z 2026-09-29 16:43:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:43:54.933496386Z 2026-09-29 16:43:54 [info] [ai] Gemini REST ready — chain: gemini-2.5-flash → gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest → gemini-2.5-flash-lite → gemini-2.0-flash-001 → gemini-2.0-flash-lite-001
2026-09-29T16:43:54.934215383Z 2026-09-29 16:43:54 [info] [ai] Imagen chain: imagen-4.0-generate-001 → imagen-4.0-fast-generate-001 → imagen-4.0-ultra-generate-001 → imagen-3.0-generate-002 → imagen-3.0-generate-001 → imagen-3.0-fast-generate-001
2026-09-29T16:43:54.934227714Z 2026-09-29 16:43:54 [info] [ai] TTS chain: gemini-2.5-flash-preview-tts → gemini-2.5-pro-preview-tts → gemini-3.1-flash-tts-preview → gemini-2.0-flash-preview-tts
2026-09-29T16:43:56.234164201Z 2026-09-29 16:43:56 [info] Firestore initialized successfully
2026-09-29T16:43:56.327792439Z 2026-09-29 16:43:56 [info] ✅ Server running on http://localhost:10000
2026-09-29T16:43:56.328641089Z 2026-09-29 16:43:56 [info] Environment: production
2026-09-29T16:43:56.32865706Z 2026-09-29 16:43:56 [info] API URL: http://localhost:5000
2026-09-29T16:43:56.32866103Z 2026-09-29 16:43:56 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-09-29T16:43:56.699517072Z 2026-09-29 16:43:56 [error] Route / not found
2026-09-29T16:43:56.699548753Z Error: Route / not found
2026-09-29T16:43:56.699552913Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-09-29T16:43:56.699556173Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:43:56.699559644Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:43:56.699562673Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:43:56.699565033Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-09-29T16:43:56.699567284Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-09-29T16:43:56.699569454Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-09-29T16:43:56.699571864Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:43:56.699574184Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:43:56.699576424Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:43:56.705296363Z 2026-09-29 16:43:56 [info] {"method":"HEAD","path":"/","status":404,"duration":"6ms","ip":"::1"}
2026-09-29T16:43:56.867456978Z 2026-09-29 16:43:56 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:44:01.859646417Z 2026-09-29 16:44:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:44:01.862494935Z 2026-09-29 16:44:01 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.216"}
2026-09-29T16:44:02.554263455Z 2026-09-29 16:44:02 [info] [startup] available text/vision models: deep-research-pro-preview-12-2025, gemini-2.5-computer-use-preview-10-2025, gemini-2.5-flash, gemini-2.5-flash-image, gemini-2.5-flash-lite, gemini-2.5-flash-native-audio-latest, gemini-2.5-flash-native-audio-preview-09-2025, gemini-2.5-flash-native-audio-preview-12-2025, gemini-2.5-flash-preview-tts, gemini-2.5-pro, gemini-2.5-pro-preview-tts, gemini-3-flash-preview, gemini-3-pro-image, gemini-3-pro-image-preview, gemini-3.1-flash-image, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite, gemini-3.1-flash-lite-image, gemini-3.1-flash-lite-preview, gemini-3.1-flash-live-preview, gemini-3.1-flash-tts-preview, gemini-3.1-pro-preview, gemini-3.1-pro-preview-customtools, gemini-3.5-flash, gemini-3.5-flash-lite, gemini-3.6-flash, gemini-3.7-flash, gemini-3.8-flash, gemini-3.8-flash-lite-tts, gemini-3.8-flash-tts
2026-09-29T16:44:02.554313356Z 2026-09-29 16:44:02 [info] [startup] available image-gen models: gemini-2.5-flash-image, gemini-3-pro-image, gemini-3-pro-image-preview, gemini-3.1-flash-image, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite-image
2026-09-29T16:44:02.554411049Z 2026-09-29 16:44:02 [info] [startup] available tts models: gemini-2.5-flash-preview-tts, gemini-2.5-pro-preview-tts, gemini-3.1-flash-tts-preview, gemini-3.8-flash-lite-tts, gemini-3.8-flash-tts
2026-09-29T16:44:03.176041403Z 2026-09-29 16:44:03 [info] [ai] text OK via gemini-2.5-flash
2026-09-29T16:44:03.176129885Z 2026-09-29 16:44:03 [info] [startup] readiness: firestore=true ai=true(gemini-2.5-flash) tts.gemini=true tts.elevenlabs=false tts.gtts=true
2026-09-29T16:44:05.572917457Z 2026-09-29 16:44:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:05.574851144Z 2026-09-29 16:44:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:08.646804829Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-09-29T16:44:08.729948956Z 2026-09-29 16:44:08 [error] Route / not found
2026-09-29T16:44:08.729978207Z Error: Route / not found
2026-09-29T16:44:08.729982247Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-09-29T16:44:08.729985587Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:44:08.729988437Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:44:08.729991357Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:44:08.729993737Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-09-29T16:44:08.729996227Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-09-29T16:44:08.730001797Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-09-29T16:44:08.730004537Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:44:08.730006878Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:44:08.730008998Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:44:08.731190836Z 2026-09-29 16:44:08 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-09-29T16:44:09.697699688Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:44:09.703415086Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-09-29T16:44:09.706245745Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:44:09.708206135Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-09-29T16:44:09.711205558Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:44:09.713829292Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-09-29T16:44:10.575675342Z 2026-09-29 16:44:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:15.576614411Z 2026-09-29 16:44:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:20.536021681Z 2026-09-29 16:44:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-09-29T16:44:20.576012393Z 2026-09-29 16:44:20 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:25.576380659Z 2026-09-29 16:44:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:30.57657333Z 2026-09-29 16:44:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:35.572618931Z 2026-09-29 16:44:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:35.575816919Z 2026-09-29 16:44:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:40.575882567Z 2026-09-29 16:44:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:45.576393856Z 2026-09-29 16:44:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:50.576256949Z 2026-09-29 16:44:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:44:55.57603021Z 2026-09-29 16:44:55 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:00.575912163Z 2026-09-29 16:45:00 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:05.571553163Z 2026-09-29 16:45:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:05.575760385Z 2026-09-29 16:45:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:10.57610744Z 2026-09-29 16:45:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:15.576648779Z 2026-09-29 16:45:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:20.575723152Z 2026-09-29 16:45:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:25.582129844Z 2026-09-29 16:45:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:30.575785106Z 2026-09-29 16:45:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:35.571398034Z 2026-09-29 16:45:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:35.575239458Z 2026-09-29 16:45:35 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:40.575416328Z 2026-09-29 16:45:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:45.57570993Z 2026-09-29 16:45:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:50.57588158Z 2026-09-29 16:45:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:45:55.575523286Z 2026-09-29 16:45:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:46:00.576832824Z 2026-09-29 16:46:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:46:05.571581441Z 2026-09-29 16:46:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:46:05.575858375Z 2026-09-29 16:46:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:46:07.938402578Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-09-29T16:46:08.206392866Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-09-29T16:46:10.575637935Z 2026-09-29 16:46:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:46:15.575524567Z 2026-09-29 16:46:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:46:19.706568975Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-09-29T16:46:20.576247039Z 2026-09-29 16:46:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:46:20.914537823Z 
2026-09-29T16:46:20.914560464Z > whatsapp-ai-agent-backend@1.0.0 start
2026-09-29T16:46:20.914565944Z > node dist/index.js
2026-09-29T16:46:20.914569224Z 
2026-09-29T16:46:25.575974798Z 2026-09-29 16:46:25 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.26.42"}
2026-09-29T16:46:25.903284284Z 2026-09-29 16:46:25 [info] [ai] Gemini REST ready — chain: gemini-2.5-flash → gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest → gemini-2.5-flash-lite → gemini-2.0-flash-001 → gemini-2.0-flash-lite-001
2026-09-29T16:46:25.903799437Z 2026-09-29 16:46:25 [info] [ai] Imagen chain: imagen-4.0-generate-001 → imagen-4.0-fast-generate-001 → imagen-4.0-ultra-generate-001 → imagen-3.0-generate-002 → imagen-3.0-generate-001 → imagen-3.0-fast-generate-001
2026-09-29T16:46:25.903951521Z 2026-09-29 16:46:25 [info] [ai] TTS chain: gemini-2.5-flash-preview-tts → gemini-2.5-pro-preview-tts → gemini-3.1-flash-tts-preview → gemini-2.0-flash-preview-tts
2026-09-29T16:46:27.208792653Z 2026-09-29 16:46:27 [info] Firestore initialized successfully
2026-09-29T16:46:27.302476066Z 2026-09-29 16:46:27 [info] ✅ Server running on http://localhost:10000
2026-09-29T16:46:27.302676351Z 2026-09-29 16:46:27 [info] Environment: production
2026-09-29T16:46:27.302792274Z 2026-09-29 16:46:27 [info] API URL: http://localhost:5000
2026-09-29T16:46:27.302877626Z 2026-09-29 16:46:27 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-09-29T16:46:27.400093138Z 2026-09-29 16:46:27 [info] {"method":"GET","path":"/health","status":200,"duration":"68ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:46:27.402827447Z 2026-09-29 16:46:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:46:28.241642424Z 2026-09-29 16:46:28 [error] Route / not found
2026-09-29T16:46:28.241665725Z Error: Route / not found
2026-09-29T16:46:28.241671925Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-09-29T16:46:28.241677305Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:46:28.241682515Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:46:28.241688375Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:46:28.241692776Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-09-29T16:46:28.241697176Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-09-29T16:46:28.241701546Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-09-29T16:46:28.241706186Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:46:28.241710946Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:46:28.241715436Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:46:28.244341472Z 2026-09-29 16:46:28 [info] {"method":"HEAD","path":"/","status":404,"duration":"3ms","ip":"::1"}
2026-09-29T16:46:28.984531105Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-09-29T16:46:29.128663968Z 2026-09-29 16:46:29 [error] Route / not found
2026-09-29T16:46:29.128691318Z Error: Route / not found
2026-09-29T16:46:29.128698308Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-09-29T16:46:29.128704189Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:46:29.128708209Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:46:29.128725649Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:46:29.128728529Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-09-29T16:46:29.128730559Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-09-29T16:46:29.128733939Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-09-29T16:46:29.128737319Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:46:29.12874049Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:46:29.12874389Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:46:29.129504679Z 2026-09-29 16:46:29 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-09-29T16:46:29.67061637Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:46:29.676779339Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-09-29T16:46:29.68223653Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:46:29.691858633Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-09-29T16:46:29.697160511Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:46:29.701982307Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-09-29T16:46:32.706323016Z 2026-09-29 16:46:32 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:46:33.450455096Z 2026-09-29 16:46:33 [info] [startup] available text/vision models: deep-research-pro-preview-12-2025, gemini-2.5-computer-use-preview-10-2025, gemini-2.5-flash, gemini-2.5-flash-image, gemini-2.5-flash-lite, gemini-2.5-flash-native-audio-latest, gemini-2.5-flash-native-audio-preview-09-2025, gemini-2.5-flash-native-audio-preview-12-2025, gemini-2.5-flash-preview-tts, gemini-2.5-pro, gemini-2.5-pro-preview-tts, gemini-3-flash-preview, gemini-3-pro-image, gemini-3-pro-image-preview, gemini-3.1-flash-image, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite, gemini-3.1-flash-lite-image, gemini-3.1-flash-lite-preview, gemini-3.1-flash-live-preview, gemini-3.1-flash-tts-preview, gemini-3.1-pro-preview, gemini-3.1-pro-preview-customtools, gemini-3.5-flash, gemini-3.5-flash-lite, gemini-3.6-flash, gemini-3.7-flash, gemini-3.8-flash, gemini-3.8-flash-lite-tts, gemini-3.8-flash-tts
2026-09-29T16:46:33.450507577Z 2026-09-29 16:46:33 [info] [startup] available image-gen models: gemini-2.5-flash-image, gemini-3-pro-image, gemini-3-pro-image-preview, gemini-3.1-flash-image, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite-image
2026-09-29T16:46:33.45061326Z 2026-09-29 16:46:33 [info] [startup] available tts models: gemini-2.5-flash-preview-tts, gemini-2.5-pro-preview-tts, gemini-3.1-flash-tts-preview, gemini-3.8-flash-lite-tts, gemini-3.8-flash-tts
2026-09-29T16:46:33.986279511Z 2026-09-29 16:46:33 [info] [ai] text OK via gemini-2.5-flash
2026-09-29T16:46:33.986324652Z 2026-09-29 16:46:33 [info] [startup] readiness: firestore=true ai=true(gemini-2.5-flash) tts.gemini=true tts.elevenlabs=false tts.gtts=true
2026-09-29T16:46:37.328592763Z 2026-09-29 16:46:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:46:37.401664717Z 2026-09-29 16:46:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:46:42.402943113Z 2026-09-29 16:46:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:46:47.402308601Z 2026-09-29 16:46:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:46:52.402434268Z 2026-09-29 16:46:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:46:53.650700092Z 2026-09-29 16:46:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-09-29T16:46:57.401880957Z 2026-09-29 16:46:57 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:02.401694086Z 2026-09-29 16:47:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:07.327811466Z 2026-09-29 16:47:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:07.401257669Z 2026-09-29 16:47:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:12.40198149Z 2026-09-29 16:47:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
```
