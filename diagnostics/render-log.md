# Render deploy log — Tue Sep 29 16:50:41 UTC 2026
Commit: 21509721b239ff6069fede9634f5ecad8c807c80

```
2026-09-29T16:41:32.471955595Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-09-29T16:41:32.827384337Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-09-29T16:42:05.603716179Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
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
2026-09-29T16:47:17.401918081Z 2026-09-29 16:47:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:22.407473573Z 2026-09-29 16:47:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:27.40130714Z 2026-09-29 16:47:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:32.401670181Z 2026-09-29 16:47:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:37.327368828Z 2026-09-29 16:47:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:37.404213686Z 2026-09-29 16:47:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:42.401475468Z 2026-09-29 16:47:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:47.401579213Z 2026-09-29 16:47:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:52.401698987Z 2026-09-29 16:47:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:47:57.402564009Z 2026-09-29 16:47:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:02.401468662Z 2026-09-29 16:48:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:07.327829304Z 2026-09-29 16:48:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:07.401691277Z 2026-09-29 16:48:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:12.401691467Z 2026-09-29 16:48:12 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:17.402106007Z 2026-09-29 16:48:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:22.403474971Z 2026-09-29 16:48:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:27.401235064Z 2026-09-29 16:48:27 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:32.410996909Z 2026-09-29 16:48:32 [info] {"method":"GET","path":"/health","status":200,"duration":"5ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:37.327941213Z 2026-09-29 16:48:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:37.401598991Z 2026-09-29 16:48:37 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:42.401657921Z 2026-09-29 16:48:42 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:47.401348401Z 2026-09-29 16:48:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:52.401298588Z 2026-09-29 16:48:52 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:48:57.402482285Z 2026-09-29 16:48:57 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:02.401761825Z 2026-09-29 16:49:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:07.327089719Z 2026-09-29 16:49:07 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:07.40246694Z 2026-09-29 16:49:07 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:09.562763504Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-09-29T16:49:09.921263734Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-09-29T16:49:12.401098922Z 2026-09-29 16:49:12 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:17.401840628Z 2026-09-29 16:49:17 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:22.40244073Z 2026-09-29 16:49:22 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:23.854501319Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-09-29T16:49:25.05427552Z 
2026-09-29T16:49:25.054303292Z > whatsapp-ai-agent-backend@1.0.0 start
2026-09-29T16:49:25.054309523Z > node dist/index.js
2026-09-29T16:49:25.054312593Z 
2026-09-29T16:49:27.401853141Z 2026-09-29 16:49:27 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:29.850759181Z 2026-09-29 16:49:29 [info] [ai] Gemini REST ready — chain: gemini-2.5-flash → gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest → gemini-2.5-flash-lite → gemini-2.0-flash-001 → gemini-2.0-flash-lite-001
2026-09-29T16:49:29.851285783Z 2026-09-29 16:49:29 [info] [ai] Imagen chain: imagen-4.0-generate-001 → imagen-4.0-fast-generate-001 → imagen-4.0-ultra-generate-001 → imagen-3.0-generate-002 → imagen-3.0-generate-001 → imagen-3.0-fast-generate-001
2026-09-29T16:49:29.851428885Z 2026-09-29 16:49:29 [info] [ai] TTS chain: gemini-2.5-flash-preview-tts → gemini-2.5-pro-preview-tts → gemini-3.1-flash-tts-preview → gemini-2.0-flash-preview-tts
2026-09-29T16:49:31.052463917Z 2026-09-29 16:49:31 [info] Firestore initialized successfully
2026-09-29T16:49:31.056492111Z 2026-09-29 16:49:31 [info] ✅ Server running on http://localhost:10000
2026-09-29T16:49:31.056690317Z 2026-09-29 16:49:31 [info] Environment: production
2026-09-29T16:49:31.056789505Z 2026-09-29 16:49:31 [info] API URL: http://localhost:5000
2026-09-29T16:49:31.0568641Z 2026-09-29 16:49:31 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-09-29T16:49:31.612664753Z 2026-09-29 16:49:31 [error] Route / not found
2026-09-29T16:49:31.612696696Z Error: Route / not found
2026-09-29T16:49:31.612701776Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-09-29T16:49:31.612706497Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:49:31.612711177Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:49:31.612715337Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:49:31.612719267Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-09-29T16:49:31.612723448Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-09-29T16:49:31.612727748Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-09-29T16:49:31.612731759Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:49:31.612735509Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:49:31.612739389Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:49:31.616503982Z 2026-09-29 16:49:31 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-09-29T16:49:32.402042762Z 2026-09-29 16:49:32 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:37.206119018Z 2026-09-29 16:49:37 [info] [startup] available text/vision models: deep-research-pro-preview-12-2025, gemini-2.5-computer-use-preview-10-2025, gemini-2.5-flash, gemini-2.5-flash-image, gemini-2.5-flash-lite, gemini-2.5-flash-native-audio-latest, gemini-2.5-flash-native-audio-preview-09-2025, gemini-2.5-flash-native-audio-preview-12-2025, gemini-2.5-flash-preview-tts, gemini-2.5-pro, gemini-2.5-pro-preview-tts, gemini-3-flash-preview, gemini-3-pro-image, gemini-3-pro-image-preview, gemini-3.1-flash-image, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite, gemini-3.1-flash-lite-image, gemini-3.1-flash-lite-preview, gemini-3.1-flash-live-preview, gemini-3.1-flash-tts-preview, gemini-3.1-pro-preview, gemini-3.1-pro-preview-customtools, gemini-3.5-flash, gemini-3.5-flash-lite, gemini-3.6-flash, gemini-3.7-flash, gemini-3.8-flash, gemini-3.8-flash-lite-tts, gemini-3.8-flash-tts
2026-09-29T16:49:37.206180283Z 2026-09-29 16:49:37 [info] [startup] available image-gen models: gemini-2.5-flash-image, gemini-3-pro-image, gemini-3-pro-image-preview, gemini-3.1-flash-image, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite-image
2026-09-29T16:49:37.206258899Z 2026-09-29 16:49:37 [info] [startup] available tts models: gemini-2.5-flash-preview-tts, gemini-2.5-pro-preview-tts, gemini-3.1-flash-tts-preview, gemini-3.8-flash-lite-tts, gemini-3.8-flash-tts
2026-09-29T16:49:37.328034051Z 2026-09-29 16:49:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:37.403035663Z 2026-09-29 16:49:37 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.207"}
2026-09-29T16:49:38.050657673Z 2026-09-29 16:49:38 [info] [ai] text OK via gemini-2.5-flash
2026-09-29T16:49:38.050676954Z 2026-09-29 16:49:38 [info] [startup] readiness: firestore=true ai=true(gemini-2.5-flash) tts.gemini=true tts.elevenlabs=false tts.gtts=true
2026-09-29T16:49:39.328532389Z 2026-09-29 16:49:39 [info] {"method":"GET","path":"/health","status":200,"duration":"2ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:49:39.330481006Z 2026-09-29 16:49:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:49:41.400861135Z 2026-09-29 16:49:41 [error] Route / not found
2026-09-29T16:49:41.400890688Z Error: Route / not found
2026-09-29T16:49:41.400895948Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-09-29T16:49:41.400899658Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:49:41.400902999Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:49:41.400906639Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:49:41.400909649Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-09-29T16:49:41.40091282Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-09-29T16:49:41.4009157Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-09-29T16:49:41.40091888Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-09-29T16:49:41.40092173Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-09-29T16:49:41.400924711Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-09-29T16:49:41.402067092Z 2026-09-29 16:49:41 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-09-29T16:49:41.474602927Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-09-29T16:49:42.048631215Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:49:42.056095379Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-09-29T16:49:42.060754379Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:49:42.069582274Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-09-29T16:49:42.075586965Z [0;32m[1m==> [0m[1m[0m
2026-09-29T16:49:42.08106499Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-09-29T16:49:44.331658006Z 2026-09-29 16:49:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:49:49.33149813Z 2026-09-29 16:49:49 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:49:54.338226096Z 2026-09-29 16:49:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:49:59.338667148Z 2026-09-29 16:49:59 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:50:02.470779726Z 2026-09-29 16:50:02 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-09-29T16:50:04.331434553Z 2026-09-29 16:50:04 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:50:09.326060487Z 2026-09-29 16:50:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:50:09.330146865Z 2026-09-29 16:50:09 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:50:14.330740359Z 2026-09-29 16:50:14 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.129"}
2026-09-29T16:50:19.331374595Z 2026-09-29 16:50:19 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.129"}
```
