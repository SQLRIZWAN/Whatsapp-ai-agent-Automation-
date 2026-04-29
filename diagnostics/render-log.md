# Render deploy log — Wed Apr 29 23:34:20 UTC 2026
Commit: 1c08614e4531821b4a512a7c3ddb56913e218e6a

```
2026-04-29T23:33:29.310054931Z 2026-04-29 23:33:29 [info] {"method":"GET","path":"/calls","status":200,"duration":"375ms","ip":"::1"}
2026-04-29T23:33:30.17782391Z 
2026-04-29T23:33:30.177846481Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-29T23:33:30.177851721Z > node dist/index.js
2026-04-29T23:33:30.177855031Z 
2026-04-29T23:33:30.910751751Z 2026-04-29 23:33:30 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:33:34.873768589Z 2026-04-29 23:33:34 [info] [ai] Gemini REST ready — chain: gemini-2.5-flash → gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest → gemini-2.5-flash-lite → gemini-2.0-flash-001 → gemini-2.0-flash-lite-001
2026-04-29T23:33:34.874160921Z 2026-04-29 23:33:34 [info] [ai] Imagen chain: imagen-4.0-generate-001 → imagen-4.0-fast-generate-001 → imagen-4.0-ultra-generate-001 → imagen-3.0-generate-002 → imagen-3.0-generate-001 → imagen-3.0-fast-generate-001
2026-04-29T23:33:34.874300218Z 2026-04-29 23:33:34 [info] [ai] TTS chain: gemini-2.5-flash-preview-tts → gemini-2.5-pro-preview-tts → gemini-3.1-flash-tts-preview → gemini-2.0-flash-preview-tts
2026-04-29T23:33:35.91091257Z 2026-04-29 23:33:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:33:36.075968934Z 2026-04-29 23:33:36 [info] Firestore initialized successfully
2026-04-29T23:33:36.170827258Z 2026-04-29 23:33:36 [info] ✅ Server running on http://localhost:10000
2026-04-29T23:33:36.17103857Z 2026-04-29 23:33:36 [info] Environment: production
2026-04-29T23:33:36.171304555Z 2026-04-29 23:33:36 [info] API URL: http://localhost:5000
2026-04-29T23:33:36.171314225Z 2026-04-29 23:33:36 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-29T23:33:37.073503784Z 2026-04-29 23:33:37 [error] Route / not found
2026-04-29T23:33:37.073524725Z Error: Route / not found
2026-04-29T23:33:37.073529525Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-04-29T23:33:37.073534035Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-29T23:33:37.073538225Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-29T23:33:37.073541795Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-29T23:33:37.073544806Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-29T23:33:37.073548006Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-29T23:33:37.073550826Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-04-29T23:33:37.073554336Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-29T23:33:37.073557447Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-29T23:33:37.073560667Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-29T23:33:37.080703551Z 2026-04-29 23:33:37 [info] {"method":"HEAD","path":"/","status":404,"duration":"8ms","ip":"::1"}
2026-04-29T23:33:40.906677096Z 2026-04-29 23:33:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:33:40.910623198Z 2026-04-29 23:33:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:33:41.750706669Z 2026-04-29 23:33:41 [info] [server] auto-reconnecting WhatsApp for uid=2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:41.852101565Z 2026-04-29 23:33:41 [info] [wa] 2a0780dd-50a4-4fda-bf7b-dad5714154dd has stored creds — reconnecting silently
2026-04-29T23:33:41.852392502Z 2026-04-29 23:33:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:33:41.954343529Z 2026-04-29 23:33:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:42.003254032Z 2026-04-29 23:33:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:33:42.770438795Z 2026-04-29 23:33:42 [info] [startup] available text/vision models: deep-research-pro-preview-12-2025, gemini-2.0-flash, gemini-2.0-flash-001, gemini-2.0-flash-lite, gemini-2.0-flash-lite-001, gemini-2.5-computer-use-preview-10-2025, gemini-2.5-flash, gemini-2.5-flash-image, gemini-2.5-flash-lite, gemini-2.5-flash-native-audio-latest, gemini-2.5-flash-native-audio-preview-09-2025, gemini-2.5-flash-native-audio-preview-12-2025, gemini-2.5-flash-preview-tts, gemini-2.5-pro, gemini-2.5-pro-preview-tts, gemini-3-flash-preview, gemini-3-pro-image-preview, gemini-3-pro-preview, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite-preview, gemini-3.1-flash-live-preview, gemini-3.1-flash-tts-preview, gemini-3.1-pro-preview, gemini-3.1-pro-preview-customtools, gemini-flash-latest, gemini-flash-lite-latest, gemini-pro-latest, lyria-3-pro-preview, nano-banana-pro-preview
2026-04-29T23:33:42.770505459Z 2026-04-29 23:33:42 [info] [startup] available image-gen models: gemini-2.5-flash-image, gemini-3-pro-image-preview, gemini-3.1-flash-image-preview, imagen-4.0-fast-generate-001, imagen-4.0-generate-001, imagen-4.0-ultra-generate-001
2026-04-29T23:33:42.770540291Z 2026-04-29 23:33:42 [info] [startup] available tts models: gemini-2.5-flash-preview-tts, gemini-2.5-pro-preview-tts, gemini-3.1-flash-tts-preview
2026-04-29T23:33:42.968352916Z 2026-04-29 23:33:42 [warn] [ai] text failed — gemini-2.5-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T23:33:42.968528006Z 2026-04-29 23:33:42 [info] [ai] text 429 — waiting 4000ms before retry
2026-04-29T23:33:43.05932373Z 2026-04-29 23:33:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:33:43.05935042Z 2026-04-29 23:33:43 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:33:43.16058252Z 2026-04-29 23:33:43 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:33:43.344672792Z 2026-04-29 23:33:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:43.563566342Z 2026-04-29 23:33:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:43.563960194Z 2026-04-29 23:33:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:33:43.564025608Z 2026-04-29 23:33:43 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:43.78494594Z 2026-04-29 23:33:43 [info] [wa] Connected as 919012277862
2026-04-29T23:33:43.894734721Z 2026-04-29 23:33:43 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-29T23:33:44.094742864Z 2026-04-29 23:33:44 [info] {"method":"GET","path":"/messages","status":200,"duration":"171ms","ip":"::1"}
2026-04-29T23:33:44.16119408Z 2026-04-29 23:33:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:33:44.254155777Z 2026-04-29 23:33:44 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:44.274721278Z 2026-04-29 23:33:44 [info] {"method":"GET","path":"/calls","status":200,"duration":"335ms","ip":"::1"}
2026-04-29T23:33:44.284051497Z 2026-04-29 23:33:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:33:45.082820435Z 2026-04-29 23:33:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:33:45.084288727Z 2026-04-29 23:33:45 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:33:45.110017977Z 2026-04-29 23:33:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:45.195838589Z 2026-04-29 23:33:45 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:33:45.383990572Z 2026-04-29 23:33:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:45.384136525Z 2026-04-29 23:33:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:33:45.384146995Z 2026-04-29 23:33:45 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:45.813086492Z 2026-04-29 23:33:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:33:45.814597326Z 2026-04-29 23:33:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:33:45.911042702Z 2026-04-29 23:33:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:33:45.968342534Z 2026-04-29 23:33:45 [info] [wa] Connected as 919012277862
2026-04-29T23:33:46.043012432Z 2026-04-29 23:33:46 [info] Client disconnected: ofV8y-0g_ER0PDi7AAAL
2026-04-29T23:33:46.043026893Z 2026-04-29 23:33:46 [info] Client disconnected: 7iBvyAW68Gk1c517AAAJ
2026-04-29T23:33:46.195975053Z 2026-04-29 23:33:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:33:46.283689528Z 2026-04-29 23:33:46 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:46.28624576Z 2026-04-29 23:33:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:33:46.966776162Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-29T23:33:47.084973009Z 2026-04-29 23:33:47 [error] Route / not found
2026-04-29T23:33:47.08499337Z Error: Route / not found
2026-04-29T23:33:47.084997271Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-04-29T23:33:47.085000511Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-29T23:33:47.085014792Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-29T23:33:47.085018312Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-29T23:33:47.085021082Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-29T23:33:47.085023672Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-29T23:33:47.085026112Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-04-29T23:33:47.085029022Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-29T23:33:47.085031493Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-29T23:33:47.085033933Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-29T23:33:47.0857135Z 2026-04-29 23:33:47 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-29T23:33:47.132212686Z 2026-04-29 23:33:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:33:47.132237616Z 2026-04-29 23:33:47 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:33:47.187956539Z [0;32m[1m==> [0m[1m[0m
2026-04-29T23:33:47.19669416Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-29T23:33:47.200896191Z [0;32m[1m==> [0m[1m[0m
2026-04-29T23:33:47.207422728Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-29T23:33:47.211936837Z [0;32m[1m==> [0m[1m[0m
2026-04-29T23:33:47.217078231Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-29T23:33:47.239072368Z 2026-04-29 23:33:47 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:33:47.430886802Z 2026-04-29 23:33:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:47.607767712Z 2026-04-29 23:33:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:47.608002825Z 2026-04-29 23:33:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:33:47.608044667Z 2026-04-29 23:33:47 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:47.618628167Z 2026-04-29 23:33:47 [info] [ai] text OK via gemini-2.5-flash
2026-04-29T23:33:47.618698501Z 2026-04-29 23:33:47 [info] [startup] readiness: firestore=true ai=true(gemini-2.5-flash) tts.gemini=true tts.elevenlabs=false tts.gtts=true
2026-04-29T23:33:47.853794592Z 2026-04-29 23:33:47 [info] [wa] Connected as 919012277862
2026-04-29T23:33:48.239244307Z 2026-04-29 23:33:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:33:48.312616445Z 2026-04-29 23:33:48 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:48.314492519Z 2026-04-29 23:33:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:33:49.249940099Z 2026-04-29 23:33:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:33:49.251962122Z 2026-04-29 23:33:49 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:33:49.265128148Z 2026-04-29 23:33:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:49.343823788Z 2026-04-29 23:33:49 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:33:49.455844174Z 2026-04-29 23:33:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:49.456021068Z 2026-04-29 23:33:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:33:49.456035808Z 2026-04-29 23:33:49 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:49.888536635Z 2026-04-29 23:33:49 [info] [wa] Connected as 919012277862
2026-04-29T23:33:50.345345069Z 2026-04-29 23:33:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:33:50.443451112Z 2026-04-29 23:33:50 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:50.448948108Z 2026-04-29 23:33:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:33:50.812361706Z 2026-04-29 23:33:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:33:50.911232432Z 2026-04-29 23:33:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:33:51.307837758Z 2026-04-29 23:33:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:33:51.307857268Z 2026-04-29 23:33:51 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:33:51.428618936Z 2026-04-29 23:33:51 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:33:51.567875588Z 2026-04-29 23:33:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:51.753121953Z 2026-04-29 23:33:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:51.753382058Z 2026-04-29 23:33:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:33:51.753437031Z 2026-04-29 23:33:51 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:51.96692681Z 2026-04-29 23:33:51 [info] [wa] Connected as 919012277862
2026-04-29T23:33:52.429028191Z 2026-04-29 23:33:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:33:52.513862467Z 2026-04-29 23:33:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:52.515641169Z 2026-04-29 23:33:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:33:53.410049982Z 2026-04-29 23:33:53 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:33:53.410084034Z 2026-04-29 23:33:53 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:33:53.514039833Z 2026-04-29 23:33:53 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:33:53.674538614Z 2026-04-29 23:33:53 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:54.182850826Z 2026-04-29 23:33:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:54.18299492Z 2026-04-29 23:33:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:33:54.18300403Z 2026-04-29 23:33:54 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:54.514192328Z 2026-04-29 23:33:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:33:54.525512309Z 2026-04-29 23:33:54 [info] [wa] Connected as 919012277862
2026-04-29T23:33:54.607594779Z 2026-04-29 23:33:54 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:54.609327366Z 2026-04-29 23:33:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:33:55.520073947Z 2026-04-29 23:33:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:33:55.520098398Z 2026-04-29 23:33:55 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:33:55.637422425Z 2026-04-29 23:33:55 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:33:55.811731714Z 2026-04-29 23:33:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:33:55.820839701Z 2026-04-29 23:33:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:55.912750102Z 2026-04-29 23:33:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:33:56.073261377Z 2026-04-29 23:33:56 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:56.075455109Z 2026-04-29 23:33:56 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:33:56.07547611Z 2026-04-29 23:33:56 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:56.282017622Z 2026-04-29 23:33:56 [info] [wa] Connected as 919012277862
2026-04-29T23:33:56.637672045Z 2026-04-29 23:33:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:33:56.722089222Z 2026-04-29 23:33:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:56.723843283Z 2026-04-29 23:33:56 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:33:58.008892135Z 2026-04-29 23:33:58 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:33:58.008917847Z 2026-04-29 23:33:58 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:33:58.104060185Z 2026-04-29 23:33:58 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:33:58.315448191Z 2026-04-29 23:33:58 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:58.490834963Z 2026-04-29 23:33:58 [info] Client connected: YnLLf_7yTnKV_xZtAAAB
2026-04-29T23:33:58.592338384Z 2026-04-29 23:33:58 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:58.592506288Z 2026-04-29 23:33:58 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:33:58.592578339Z 2026-04-29 23:33:58 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:58.75656203Z 2026-04-29 23:33:58 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket YnLLf_7yTnKV_xZtAAAB
2026-04-29T23:33:58.873832975Z 2026-04-29 23:33:58 [info] [wa] Connected as 919012277862
2026-04-29T23:33:58.916683137Z 2026-04-29 23:33:58 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-29T23:33:59.075927034Z 2026-04-29 23:33:59 [info] {"method":"GET","path":"/calls","status":200,"duration":"174ms","ip":"::1"}
2026-04-29T23:33:59.174781279Z 2026-04-29 23:33:59 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:33:59.269416699Z 2026-04-29 23:33:59 [info] {"method":"GET","path":"/messages","status":200,"duration":"279ms","ip":"::1"}
2026-04-29T23:33:59.366635333Z 2026-04-29 23:33:59 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:33:59.368499357Z 2026-04-29 23:33:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:33:59.479088255Z 2026-04-29 23:33:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-29T23:33:59.539117118Z 2026-04-29 23:33:59 [info] Client connected: SbkZLFi2LROXO7gTAAAD
2026-04-29T23:33:59.843950202Z 2026-04-29 23:33:59 [info] User 2a0780dd-50a4-4fda-bf7b-dad5714154dd authenticated with socket SbkZLFi2LROXO7gTAAAD
2026-04-29T23:33:59.90693173Z 2026-04-29 23:33:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:59.909980816Z 2026-04-29 23:33:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:33:59.910017237Z 2026-04-29 23:33:59 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:33:59.941831693Z 2026-04-29 23:33:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:33:59.942048035Z 2026-04-29 23:33:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:33:59.942084807Z 2026-04-29 23:33:59 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:00.013758016Z 2026-04-29 23:34:00 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:00.161111854Z 2026-04-29 23:34:00 [info] [wa] Connected as 919012277862
2026-04-29T23:34:00.811735385Z 2026-04-29 23:34:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:34:00.911259291Z 2026-04-29 23:34:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:34:01.013835283Z 2026-04-29 23:34:01 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:01.101470045Z 2026-04-29 23:34:01 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:01.103222886Z 2026-04-29 23:34:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:01.67129171Z 2026-04-29 23:34:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:01.671323542Z 2026-04-29 23:34:01 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:01.762446012Z 2026-04-29 23:34:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:01.778044105Z 2026-04-29 23:34:01 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:01.839003094Z 2026-04-29 23:34:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:01.83924052Z 2026-04-29 23:34:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:01.839300491Z 2026-04-29 23:34:01 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:02.182034376Z 2026-04-29 23:34:02 [info] [wa] Connected as 919012277862
2026-04-29T23:34:02.778662815Z 2026-04-29 23:34:02 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:02.86513652Z 2026-04-29 23:34:02 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:02.867186245Z 2026-04-29 23:34:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:04.068046177Z 2026-04-29 23:34:04 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:04.068086228Z 2026-04-29 23:34:04 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:04.174243954Z 2026-04-29 23:34:04 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:04.410138425Z 2026-04-29 23:34:04 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:04.645285699Z 2026-04-29 23:34:04 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:04.645504212Z 2026-04-29 23:34:04 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:04.645597407Z 2026-04-29 23:34:04 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:04.878125595Z 2026-04-29 23:34:04 [info] [wa] Connected as 919012277862
2026-04-29T23:34:05.173982693Z 2026-04-29 23:34:05 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:05.269875328Z 2026-04-29 23:34:05 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:05.271718661Z 2026-04-29 23:34:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:05.812700958Z 2026-04-29 23:34:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:34:05.897825271Z 2026-04-29 23:34:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:05.91059099Z 2026-04-29 23:34:05 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:34:05.929031116Z 2026-04-29 23:34:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:05.929065117Z 2026-04-29 23:34:05 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:05.967230996Z 2026-04-29 23:34:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:05.967432151Z 2026-04-29 23:34:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:05.967449831Z 2026-04-29 23:34:05 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:06.028476683Z 2026-04-29 23:34:06 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:06.278546526Z 2026-04-29 23:34:06 [info] [wa] Connected as 919012277862
2026-04-29T23:34:07.029004148Z 2026-04-29 23:34:07 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:07.11145045Z 2026-04-29 23:34:07 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:07.113576938Z 2026-04-29 23:34:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:07.486956191Z 2026-04-29 23:34:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:07.486972861Z 2026-04-29 23:34:07 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:07.517099208Z 2026-04-29 23:34:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:07.58600578Z 2026-04-29 23:34:07 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:07.616646202Z 2026-04-29 23:34:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:07.61804666Z 2026-04-29 23:34:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:07.61806248Z 2026-04-29 23:34:07 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:07.85474077Z 2026-04-29 23:34:07 [info] [wa] Connected as 919012277862
2026-04-29T23:34:08.586740582Z 2026-04-29 23:34:08 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:08.678086611Z 2026-04-29 23:34:08 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:08.680293913Z 2026-04-29 23:34:08 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:09.205407012Z 2026-04-29 23:34:09 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:09.205439174Z 2026-04-29 23:34:09 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:09.29731052Z 2026-04-29 23:34:09 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:09.300405883Z 2026-04-29 23:34:09 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:09.371400675Z 2026-04-29 23:34:09 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:09.371561899Z 2026-04-29 23:34:09 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:09.371579899Z 2026-04-29 23:34:09 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:09.81750934Z 2026-04-29 23:34:09 [info] [wa] Connected as 919012277862
2026-04-29T23:34:10.301581893Z 2026-04-29 23:34:10 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:10.384274918Z 2026-04-29 23:34:10 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:10.385934051Z 2026-04-29 23:34:10 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:10.780488029Z 2026-04-29 23:34:10 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:10.780510589Z 2026-04-29 23:34:10 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:10.8117025Z 2026-04-29 23:34:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:34:10.817698694Z 2026-04-29 23:34:10 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:10.884002912Z 2026-04-29 23:34:10 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:10.910881602Z 2026-04-29 23:34:10 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:34:10.917540003Z 2026-04-29 23:34:10 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:10.917740144Z 2026-04-29 23:34:10 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:10.917758245Z 2026-04-29 23:34:10 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:11.09256572Z 2026-04-29 23:34:11 [info] [wa] Connected as 919012277862
2026-04-29T23:34:11.885165324Z 2026-04-29 23:34:11 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:11.985831161Z 2026-04-29 23:34:11 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:11.987735936Z 2026-04-29 23:34:11 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:12.54250238Z 2026-04-29 23:34:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:12.542535631Z 2026-04-29 23:34:12 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:12.62297973Z 2026-04-29 23:34:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:12.651824677Z 2026-04-29 23:34:12 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:12.752713408Z 2026-04-29 23:34:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:12.752903552Z 2026-04-29 23:34:12 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:12.752948943Z 2026-04-29 23:34:12 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:13.001061803Z 2026-04-29 23:34:13 [info] [wa] Connected as 919012277862
2026-04-29T23:34:13.652621047Z 2026-04-29 23:34:13 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:13.748230581Z 2026-04-29 23:34:13 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:13.750128526Z 2026-04-29 23:34:13 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:14.145186435Z 2026-04-29 23:34:14 [info] {"method":"GET","path":"/calls","status":200,"duration":"93ms","ip":"::1"}
2026-04-29T23:34:14.275507512Z 2026-04-29 23:34:14 [info] {"method":"GET","path":"/messages","status":200,"duration":"226ms","ip":"::1"}
2026-04-29T23:34:14.602663909Z 2026-04-29 23:34:14 [info] {"method":"GET","path":"/status","status":200,"duration":"1ms","ip":"::1"}
2026-04-29T23:34:14.656075865Z 2026-04-29 23:34:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:14.656100605Z 2026-04-29 23:34:14 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:14.755539224Z 2026-04-29 23:34:14 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:14.988196168Z 2026-04-29 23:34:14 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:15.217830765Z 2026-04-29 23:34:15 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:15.218163623Z 2026-04-29 23:34:15 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:15.218170214Z 2026-04-29 23:34:15 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:15.427390764Z 2026-04-29 23:34:15 [info] [wa] Connected as 919012277862
2026-04-29T23:34:15.756725987Z 2026-04-29 23:34:15 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:15.812116048Z 2026-04-29 23:34:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:34:15.813007418Z 2026-04-29 23:34:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:34:15.841546792Z 2026-04-29 23:34:15 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:15.842963586Z 2026-04-29 23:34:15 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:15.910817815Z 2026-04-29 23:34:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.25.108"}
2026-04-29T23:34:16.605709669Z 2026-04-29 23:34:16 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:16.605754071Z 2026-04-29 23:34:16 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:16.692115031Z 2026-04-29 23:34:16 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:16.829628968Z 2026-04-29 23:34:16 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:17.008583219Z 2026-04-29 23:34:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:17.009431828Z 2026-04-29 23:34:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:17.009444029Z 2026-04-29 23:34:17 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:17.28242358Z 2026-04-29 23:34:17 [info] [wa] Connected as 919012277862
2026-04-29T23:34:17.692040231Z 2026-04-29 23:34:17 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:34:17.790145024Z 2026-04-29 23:34:17 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:17.793177833Z 2026-04-29 23:34:17 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:34:18.598582048Z 2026-04-29 23:34:18 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:34:18.598604739Z 2026-04-29 23:34:18 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:34:18.685260268Z 2026-04-29 23:34:18 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:34:18.924901853Z 2026-04-29 23:34:18 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:19.084936744Z 2026-04-29 23:34:19 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:34:19.085163697Z 2026-04-29 23:34:19 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:34:19.085175037Z 2026-04-29 23:34:19 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:34:19.269585186Z 2026-04-29 23:34:19 [info] [wa] Connected as 919012277862
```
