# Render deploy log — Wed Apr 29 23:48:09 UTC 2026
Commit: 44d8369d3d1407ae7f8e759be1648aa47af93174

```
2026-04-29T23:46:40.81192204Z 2026-04-29 23:46:40 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:46:45.811743582Z 2026-04-29 23:46:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:46:45.812484063Z 2026-04-29 23:46:45 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:46:50.812178407Z 2026-04-29 23:46:50 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:46:55.812274353Z 2026-04-29 23:46:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:00.813702172Z 2026-04-29 23:47:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:01.740862542Z [0;34m[1m==> [0m[1mDeploying...[0m
2026-04-29T23:47:01.798406243Z [0;34m[1m==> [0m[1mSetting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance[0m
2026-04-29T23:47:05.811684459Z 2026-04-29 23:47:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:10.811603693Z 2026-04-29 23:47:10 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:15.811265602Z 2026-04-29 23:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:15.811845814Z 2026-04-29 23:47:15 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:20.476548308Z [32m[1m==>(B[m [1mRunning 'npm start'(B[m
2026-04-29T23:47:20.811837001Z 2026-04-29 23:47:20 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:21.486838575Z 
2026-04-29T23:47:21.486865236Z > whatsapp-ai-agent-backend@1.0.0 start
2026-04-29T23:47:21.486873516Z > node dist/index.js
2026-04-29T23:47:21.486876216Z 
2026-04-29T23:47:25.811406033Z 2026-04-29 23:47:25 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:26.170200397Z 2026-04-29 23:47:26 [info] [ai] Gemini REST ready — chain: gemini-2.5-flash → gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest → gemini-2.5-flash-lite → gemini-2.0-flash-001 → gemini-2.0-flash-lite-001
2026-04-29T23:47:26.170725162Z 2026-04-29 23:47:26 [info] [ai] Imagen chain: imagen-4.0-generate-001 → imagen-4.0-fast-generate-001 → imagen-4.0-ultra-generate-001 → imagen-3.0-generate-002 → imagen-3.0-generate-001 → imagen-3.0-fast-generate-001
2026-04-29T23:47:26.170861886Z 2026-04-29 23:47:26 [info] [ai] TTS chain: gemini-2.5-flash-preview-tts → gemini-2.5-pro-preview-tts → gemini-3.1-flash-tts-preview → gemini-2.0-flash-preview-tts
2026-04-29T23:47:27.372557431Z 2026-04-29 23:47:27 [info] Firestore initialized successfully
2026-04-29T23:47:27.376436343Z 2026-04-29 23:47:27 [info] ✅ Server running on http://localhost:10000
2026-04-29T23:47:27.376654559Z 2026-04-29 23:47:27 [info] Environment: production
2026-04-29T23:47:27.376774993Z 2026-04-29 23:47:27 [info] API URL: http://localhost:5000
2026-04-29T23:47:27.376863835Z 2026-04-29 23:47:27 [info] Frontend URL: https://whatsapp-ai-automation.vercel.app
2026-04-29T23:47:28.248168275Z 2026-04-29 23:47:28 [error] Route / not found
2026-04-29T23:47:28.248199656Z Error: Route / not found
2026-04-29T23:47:28.248205937Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-04-29T23:47:28.248211367Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-29T23:47:28.248215967Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-29T23:47:28.248221137Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-29T23:47:28.248224297Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-29T23:47:28.248226807Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-29T23:47:28.248230097Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-04-29T23:47:28.248232837Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-29T23:47:28.248235807Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-29T23:47:28.248238667Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-29T23:47:28.252100949Z 2026-04-29 23:47:28 [info] {"method":"HEAD","path":"/","status":404,"duration":"4ms","ip":"::1"}
2026-04-29T23:47:30.811463902Z 2026-04-29 23:47:30 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:33.08106263Z 2026-04-29 23:47:33 [info] [server] auto-reconnecting WhatsApp for uid=2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:33.466923905Z 2026-04-29 23:47:33 [info] [wa] 2a0780dd-50a4-4fda-bf7b-dad5714154dd has stored creds — reconnecting silently
2026-04-29T23:47:33.467356648Z 2026-04-29 23:47:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:33.765368849Z 2026-04-29 23:47:33 [info] {"method":"GET","path":"/health","status":200,"duration":"90ms","ip":"::ffff:10.203.24.123"}
2026-04-29T23:47:33.768083568Z 2026-04-29 23:47:33 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.123"}
2026-04-29T23:47:33.789932878Z 2026-04-29 23:47:33 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:33.97072454Z 2026-04-29 23:47:33 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:33.974025705Z 2026-04-29 23:47:33 [info] [startup] available text/vision models: deep-research-pro-preview-12-2025, gemini-2.0-flash, gemini-2.0-flash-001, gemini-2.0-flash-lite, gemini-2.0-flash-lite-001, gemini-2.5-computer-use-preview-10-2025, gemini-2.5-flash, gemini-2.5-flash-image, gemini-2.5-flash-lite, gemini-2.5-flash-native-audio-latest, gemini-2.5-flash-native-audio-preview-09-2025, gemini-2.5-flash-native-audio-preview-12-2025, gemini-2.5-flash-preview-tts, gemini-2.5-pro, gemini-2.5-pro-preview-tts, gemini-3-flash-preview, gemini-3-pro-image-preview, gemini-3-pro-preview, gemini-3.1-flash-image-preview, gemini-3.1-flash-lite-preview, gemini-3.1-flash-live-preview, gemini-3.1-flash-tts-preview, gemini-3.1-pro-preview, gemini-3.1-pro-preview-customtools, gemini-flash-latest, gemini-flash-lite-latest, gemini-pro-latest, lyria-3-pro-preview, nano-banana-pro-preview
2026-04-29T23:47:33.974054636Z 2026-04-29 23:47:33 [info] [startup] available image-gen models: gemini-2.5-flash-image, gemini-3-pro-image-preview, gemini-3.1-flash-image-preview, imagen-4.0-fast-generate-001, imagen-4.0-generate-001, imagen-4.0-ultra-generate-001
2026-04-29T23:47:33.97418616Z 2026-04-29 23:47:33 [info] [startup] available tts models: gemini-2.5-flash-preview-tts, gemini-2.5-pro-preview-tts, gemini-3.1-flash-tts-preview
2026-04-29T23:47:34.286272578Z 2026-04-29 23:47:34 [warn] [ai] text failed — gemini-2.5-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T23:47:34.286443263Z 2026-04-29 23:47:34 [info] [ai] text 429 — waiting 4000ms before retry
2026-04-29T23:47:34.425058089Z [0;32m[1m==> [0m[1mYour service is live 🎉[0m
2026-04-29T23:47:34.510649467Z 2026-04-29 23:47:34 [error] Route / not found
2026-04-29T23:47:34.510677227Z Error: Route / not found
2026-04-29T23:47:34.510682097Z     at /opt/render/project/src/backend/dist/app.js:134:15
2026-04-29T23:47:34.510685708Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-29T23:47:34.510689218Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-29T23:47:34.510692788Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-29T23:47:34.510695418Z     at router.process_params (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:346:12)
2026-04-29T23:47:34.510698288Z     at next (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:280:10)
2026-04-29T23:47:34.510700668Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-04-29T23:47:34.510702998Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-29T23:47:34.510705478Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-29T23:47:34.510711438Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-29T23:47:34.511373747Z 2026-04-29 23:47:34 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-29T23:47:34.561621096Z [0;32m[1m==> [0m[1m[0m
2026-04-29T23:47:34.564396112Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-29T23:47:34.567468846Z [0;32m[1m==> [0m[1m[0m
2026-04-29T23:47:34.570279824Z [0;32m[1m==> [0m[1mAvailable at your primary URL https://whatsapp-ai-backend-8ylf.onrender.com[0m
2026-04-29T23:47:34.573474551Z [0;32m[1m==> [0m[1m[0m
2026-04-29T23:47:34.579205189Z [0;32m[1m==> [0m[1m///////////////////////////////////////////////////////////[0m
2026-04-29T23:47:35.086137417Z 2026-04-29 23:47:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:35.086170528Z 2026-04-29 23:47:35 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:35.197299487Z 2026-04-29 23:47:35 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:35.391337417Z 2026-04-29 23:47:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:35.632715897Z 2026-04-29 23:47:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:35.633160579Z 2026-04-29 23:47:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:35.633300514Z 2026-04-29 23:47:35 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:35.812194278Z 2026-04-29 23:47:35 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:35.928609877Z 2026-04-29 23:47:35 [info] [wa] Connected as 919012277862
2026-04-29T23:47:36.089662369Z 2026-04-29 23:47:36 [warn] [keepalive] ping failed: fetch failed
2026-04-29T23:47:36.197712097Z 2026-04-29 23:47:36 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:36.286834944Z 2026-04-29 23:47:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:36.322324754Z 2026-04-29 23:47:36 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:37.073934448Z 2026-04-29 23:47:37 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:37.074058282Z 2026-04-29 23:47:37 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:37.192997021Z 2026-04-29 23:47:37 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:37.339984641Z 2026-04-29 23:47:37 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:37.596435356Z 2026-04-29 23:47:37 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:37.596599875Z 2026-04-29 23:47:37 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:37.596620126Z 2026-04-29 23:47:37 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:38.026893239Z 2026-04-29 23:47:38 [info] [wa] Connected as 919012277862
2026-04-29T23:47:38.193951649Z 2026-04-29 23:47:38 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:38.296422894Z 2026-04-29 23:47:38 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:38.298489674Z 2026-04-29 23:47:38 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:38.449166398Z 2026-04-29 23:47:38 [warn] [ai] text failed — gemini-2.5-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T23:47:38.449298551Z 2026-04-29 23:47:38 [warn] [ai] text — moving to next model after gemini-2.5-flash
2026-04-29T23:47:38.547636917Z 2026-04-29 23:47:38 [warn] [ai] text failed — gemini-2.5-flash-preview-05-20: [404] models/gemini-2.5-flash-preview-05-20 is not found for API version v1beta, or is not supported for generateContent. Call
2026-04-29T23:47:38.547669998Z 2026-04-29 23:47:38 [warn] [ai] text — moving to next model after gemini-2.5-flash-preview-05-20
2026-04-29T23:47:38.575915622Z 2026-04-29 23:47:38 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.123"}
2026-04-29T23:47:38.660155641Z 2026-04-29 23:47:38 [warn] [ai] text failed — gemini-2.0-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T23:47:38.660182481Z 2026-04-29 23:47:38 [info] [ai] text 429 — waiting 4000ms before retry
2026-04-29T23:47:38.952696107Z 2026-04-29 23:47:38 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:38.952711078Z 2026-04-29 23:47:38 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:39.021259772Z 2026-04-29 23:47:39 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:39.0215528Z 2026-04-29 23:47:39 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:39.021612572Z 2026-04-29 23:47:39 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:39.049353532Z 2026-04-29 23:47:39 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:39.053347727Z 2026-04-29 23:47:39 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:39.307834724Z 2026-04-29 23:47:39 [info] [wa] Connected as 919012277862
2026-04-29T23:47:40.050575527Z 2026-04-29 23:47:40 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:40.155056586Z 2026-04-29 23:47:40 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:40.155074847Z 2026-04-29 23:47:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:40.811640881Z 2026-04-29 23:47:40 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:41.340527529Z 2026-04-29 23:47:41 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:41.34056317Z 2026-04-29 23:47:41 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:41.494342374Z 2026-04-29 23:47:41 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:41.632389519Z 2026-04-29 23:47:41 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:41.889907293Z 2026-04-29 23:47:41 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:41.890097053Z 2026-04-29 23:47:41 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:41.890113464Z 2026-04-29 23:47:41 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:42.45555817Z 2026-04-29 23:47:42 [info] [wa] Connected as 919012277862
2026-04-29T23:47:42.494929702Z 2026-04-29 23:47:42 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:42.597634553Z 2026-04-29 23:47:42 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:42.60100359Z 2026-04-29 23:47:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:42.768258932Z 2026-04-29 23:47:42 [warn] [ai] text failed — gemini-2.0-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T23:47:42.7685428Z 2026-04-29 23:47:42 [warn] [ai] text — moving to next model after gemini-2.0-flash
2026-04-29T23:47:42.892635588Z 2026-04-29 23:47:42 [warn] [ai] text failed — gemini-2.0-flash-lite: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T23:47:42.892669229Z 2026-04-29 23:47:42 [info] [ai] text 429 — waiting 4000ms before retry
2026-04-29T23:47:43.454045934Z 2026-04-29 23:47:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:43.460671901Z 2026-04-29 23:47:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:43.460689922Z 2026-04-29 23:47:43 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:43.565024683Z 2026-04-29 23:47:43 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:43.581776877Z 2026-04-29 23:47:43 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.123"}
2026-04-29T23:47:43.652236549Z 2026-04-29 23:47:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:43.657271854Z 2026-04-29 23:47:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:43.65990906Z 2026-04-29 23:47:43 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:43.999674135Z 2026-04-29 23:47:43 [info] [wa] Connected as 919012277862
2026-04-29T23:47:44.564898933Z 2026-04-29 23:47:44 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:44.747145718Z 2026-04-29 23:47:44 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:44.747199512Z 2026-04-29 23:47:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:45.110796421Z 2026-04-29 23:47:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:45.111097559Z 2026-04-29 23:47:45 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:45.15251993Z 2026-04-29 23:47:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:45.230167852Z 2026-04-29 23:47:45 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:45.24549495Z 2026-04-29 23:47:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:45.245740154Z 2026-04-29 23:47:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:45.245750834Z 2026-04-29 23:47:45 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:45.691953782Z 2026-04-29 23:47:45 [info] [wa] Connected as 919012277862
2026-04-29T23:47:45.81154779Z 2026-04-29 23:47:45 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:46.229977158Z 2026-04-29 23:47:46 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:46.317984686Z 2026-04-29 23:47:46 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:46.320032085Z 2026-04-29 23:47:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:47.000313399Z 2026-04-29 23:47:47 [warn] [ai] text failed — gemini-2.0-flash-lite: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T23:47:47.000549955Z 2026-04-29 23:47:47 [warn] [ai] text — moving to next model after gemini-2.0-flash-lite
2026-04-29T23:47:47.08776312Z 2026-04-29 23:47:47 [warn] [ai] text failed — gemini-1.5-flash-latest: [404] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListMo
2026-04-29T23:47:47.087800631Z 2026-04-29 23:47:47 [warn] [ai] text — moving to next model after gemini-1.5-flash-latest
2026-04-29T23:47:47.368850891Z 2026-04-29 23:47:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:47.368873462Z 2026-04-29 23:47:47 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:47.457972867Z 2026-04-29 23:47:47 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:47.491024947Z 2026-04-29 23:47:47 [info] [ai] text OK via gemini-2.5-flash-lite
2026-04-29T23:47:47.491179691Z 2026-04-29 23:47:47 [info] [startup] readiness: firestore=true ai=true(gemini-2.5-flash-lite) tts.gemini=true tts.elevenlabs=false tts.gtts=true
2026-04-29T23:47:47.670768229Z 2026-04-29 23:47:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:47.809570241Z 2026-04-29 23:47:47 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::1"}
2026-04-29T23:47:47.861197279Z 2026-04-29 23:47:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:47.861495808Z 2026-04-29 23:47:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:47.8615741Z 2026-04-29 23:47:47 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:48.308168666Z 2026-04-29 23:47:48 [info] [wa] Connected as 919012277862
2026-04-29T23:47:48.45772856Z 2026-04-29 23:47:48 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:48.553491646Z 2026-04-29 23:47:48 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:48.554900724Z 2026-04-29 23:47:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:48.576351568Z 2026-04-29 23:47:48 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.123"}
2026-04-29T23:47:49.069330322Z 2026-04-29 23:47:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:49.069367203Z 2026-04-29 23:47:49 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:49.120375102Z 2026-04-29 23:47:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:49.120586904Z 2026-04-29 23:47:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:49.120605305Z 2026-04-29 23:47:49 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:49.132377188Z 2026-04-29 23:47:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:49.169358096Z 2026-04-29 23:47:49 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:49.449060556Z 2026-04-29 23:47:49 [info] [wa] Connected as 919012277862
2026-04-29T23:47:50.169487641Z 2026-04-29 23:47:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:50.266671613Z 2026-04-29 23:47:50 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:50.269305519Z 2026-04-29 23:47:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:50.812439932Z 2026-04-29 23:47:50 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:50.821573619Z 2026-04-29 23:47:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:50.82159191Z 2026-04-29 23:47:50 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:50.917203597Z 2026-04-29 23:47:50 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:50.934188359Z 2026-04-29 23:47:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:50.979705641Z 2026-04-29 23:47:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:50.980034251Z 2026-04-29 23:47:50 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:50.980093363Z 2026-04-29 23:47:50 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:51.531009836Z 2026-04-29 23:47:51 [info] [wa] Connected as 919012277862
2026-04-29T23:47:51.917173972Z 2026-04-29 23:47:51 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:52.010144923Z 2026-04-29 23:47:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:52.01153183Z 2026-04-29 23:47:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:52.438720808Z 2026-04-29 23:47:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:52.438748308Z 2026-04-29 23:47:52 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:52.532072343Z 2026-04-29 23:47:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:52.564701564Z 2026-04-29 23:47:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:52.564869874Z 2026-04-29 23:47:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:52.564918526Z 2026-04-29 23:47:52 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:52.608584145Z 2026-04-29 23:47:52 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:52.832403514Z 2026-04-29 23:47:52 [info] [wa] Connected as 919012277862
2026-04-29T23:47:53.576561744Z 2026-04-29 23:47:53 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.123"}
2026-04-29T23:47:53.608866435Z 2026-04-29 23:47:53 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:53.700498227Z 2026-04-29 23:47:53 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:53.702726211Z 2026-04-29 23:47:53 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:54.297416001Z 2026-04-29 23:47:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:54.297441042Z 2026-04-29 23:47:54 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:54.361877706Z 2026-04-29 23:47:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:54.395707988Z 2026-04-29 23:47:54 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:54.487035825Z 2026-04-29 23:47:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:54.487332623Z 2026-04-29 23:47:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:54.487398405Z 2026-04-29 23:47:54 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:54.865727933Z 2026-04-29 23:47:54 [info] [wa] Connected as 919012277862
2026-04-29T23:47:55.396819695Z 2026-04-29 23:47:55 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:55.554157709Z 2026-04-29 23:47:55 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:55.555672813Z 2026-04-29 23:47:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:55.811501603Z 2026-04-29 23:47:55 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:47:55.998859465Z 2026-04-29 23:47:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:55.998888765Z 2026-04-29 23:47:55 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:56.093077202Z 2026-04-29 23:47:56 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:56.095922583Z 2026-04-29 23:47:56 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:56.12762336Z 2026-04-29 23:47:56 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:56.12780857Z 2026-04-29 23:47:56 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:56.12781958Z 2026-04-29 23:47:56 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:56.314499002Z 2026-04-29 23:47:56 [info] [wa] Connected as 919012277862
2026-04-29T23:47:57.096684017Z 2026-04-29 23:47:57 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:57.1921553Z 2026-04-29 23:47:57 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:57.194741334Z 2026-04-29 23:47:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:57.818405469Z 2026-04-29 23:47:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:57.81843355Z 2026-04-29 23:47:57 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:57.903956147Z 2026-04-29 23:47:57 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:57.96662376Z 2026-04-29 23:47:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:58.030941464Z 2026-04-29 23:47:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:58.030953104Z 2026-04-29 23:47:57 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:58.030969825Z 2026-04-29 23:47:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:58.220899841Z 2026-04-29 23:47:58 [info] [wa] Connected as 919012277862
2026-04-29T23:47:58.577169153Z 2026-04-29 23:47:58 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.123"}
2026-04-29T23:47:58.904587089Z 2026-04-29 23:47:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:47:59.000471161Z 2026-04-29 23:47:59 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:59.002323534Z 2026-04-29 23:47:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:47:59.440916037Z 2026-04-29 23:47:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:47:59.440983989Z 2026-04-29 23:47:59 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:47:59.4670605Z 2026-04-29 23:47:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:59.535082512Z 2026-04-29 23:47:59 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:47:59.583876114Z 2026-04-29 23:47:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:47:59.587015478Z 2026-04-29 23:47:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:47:59.587068091Z 2026-04-29 23:47:59 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:47:59.78684686Z 2026-04-29 23:47:59 [info] [wa] Connected as 919012277862
2026-04-29T23:48:00.536218177Z 2026-04-29 23:48:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:48:00.628717964Z 2026-04-29 23:48:00 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:48:00.630930198Z 2026-04-29 23:48:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:48:00.811323885Z 2026-04-29 23:48:00 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:48:01.346965516Z 2026-04-29 23:48:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:48:01.346990257Z 2026-04-29 23:48:01 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:48:01.454458092Z 2026-04-29 23:48:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:48:01.459522984Z 2026-04-29 23:48:01 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:48:01.645374387Z 2026-04-29 23:48:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:48:01.645706626Z 2026-04-29 23:48:01 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:48:01.645737657Z 2026-04-29 23:48:01 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:48:01.858519722Z 2026-04-29 23:48:01 [info] [wa] Connected as 919012277862
2026-04-29T23:48:02.46060911Z 2026-04-29 23:48:02 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:48:02.554278469Z 2026-04-29 23:48:02 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:48:02.555776593Z 2026-04-29 23:48:02 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:48:03.519558205Z 2026-04-29 23:48:03 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:48:03.519602216Z 2026-04-29 23:48:03 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:48:03.576264889Z 2026-04-29 23:48:03 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.123"}
2026-04-29T23:48:03.577069903Z 2026-04-29 23:48:03 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.123"}
2026-04-29T23:48:03.623693457Z 2026-04-29 23:48:03 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:48:03.780343814Z 2026-04-29 23:48:03 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:48:04.052250706Z 2026-04-29 23:48:04 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:48:04.052478729Z 2026-04-29 23:48:04 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:48:04.05249632Z 2026-04-29 23:48:04 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:48:04.249289713Z 2026-04-29 23:48:04 [info] [wa] Connected as 919012277862
2026-04-29T23:48:04.624890564Z 2026-04-29 23:48:04 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:48:04.711546353Z 2026-04-29 23:48:04 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:48:04.742830055Z 2026-04-29 23:48:04 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:48:05.605575205Z 2026-04-29 23:48:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:48:05.605597167Z 2026-04-29 23:48:05 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:48:05.772236926Z 2026-04-29 23:48:05 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:48:05.812431717Z 2026-04-29 23:48:05 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.27.84"}
2026-04-29T23:48:05.915482496Z 2026-04-29 23:48:05 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:48:06.110123148Z 2026-04-29 23:48:06 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:48:06.110382305Z 2026-04-29 23:48:06 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:48:06.110431467Z 2026-04-29 23:48:06 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:48:06.448473773Z 2026-04-29 23:48:06 [info] [wa] Connected as 919012277862
2026-04-29T23:48:06.772792043Z 2026-04-29 23:48:06 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T23:48:06.863605344Z 2026-04-29 23:48:06 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:48:06.865170341Z 2026-04-29 23:48:06 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T23:48:07.234709772Z 2026-04-29 23:48:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:48:07.278710441Z 2026-04-29 23:48:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T23:48:07.278741722Z 2026-04-29 23:48:07 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T23:48:07.315804154Z 2026-04-29 23:48:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T23:48:07.315827835Z 2026-04-29 23:48:07 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T23:48:07.315833255Z 2026-04-29 23:48:07 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T23:48:07.372360892Z 2026-04-29 23:48:07 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T23:48:07.575311828Z 2026-04-29 23:48:07 [info] [wa] Connected as 919012277862
```
