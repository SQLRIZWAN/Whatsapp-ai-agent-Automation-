# Render deploy log — Tue Sep 29 16:42:44 UTC 2026
Commit: 69519645d8c7629a00bddcd3525a3238e1601822

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
```
