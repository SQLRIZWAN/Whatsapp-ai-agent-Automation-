# Render deploy log — Wed Apr 29 18:13:02 UTC 2026
Commit: c8318747326fb23d9bb811acd7a67c26816603d9

```
2026-04-29T18:12:17.134979885Z     at /opt/render/project/src/backend/dist/app.js:82:9
2026-04-29T18:12:17.134982896Z     at Layer.handle [as handle_request] (/opt/render/project/src/backend/node_modules/express/lib/router/layer.js:95:5)
2026-04-29T18:12:17.134985996Z     at trim_prefix (/opt/render/project/src/backend/node_modules/express/lib/router/index.js:328:13)
2026-04-29T18:12:17.134989076Z     at /opt/render/project/src/backend/node_modules/express/lib/router/index.js:286:9
2026-04-29T18:12:17.135649336Z 2026-04-29 18:12:17 [info] {"method":"GET","path":"/","status":404,"duration":"1ms","ip":"::1"}
2026-04-29T18:12:19.315976929Z 2026-04-29 18:12:19 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.98"}
2026-04-29T18:12:20.66057192Z 2026-04-29 18:12:20 [info] [server] auto-reconnecting WhatsApp for uid=2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:20.808026446Z 2026-04-29 18:12:20 [info] [wa] 2a0780dd-50a4-4fda-bf7b-dad5714154dd has stored creds — reconnecting silently
2026-04-29T18:12:20.808347855Z 2026-04-29 18:12:20 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:21.014801452Z 2026-04-29 18:12:21 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:21.094241806Z 2026-04-29 18:12:21 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:21.287486777Z 2026-04-29 18:12:21 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:21.291146607Z 2026-04-29 18:12:21 [warn] [ai] text failed — gemini-2.5-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T18:12:21.291303652Z 2026-04-29 18:12:21 [info] [ai] text 429 — waiting 4000ms before retry
2026-04-29T18:12:22.209873005Z 2026-04-29 18:12:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:22.209891776Z 2026-04-29 18:12:22 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:22.37582683Z 2026-04-29 18:12:22 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:22.553994252Z 2026-04-29 18:12:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:22.770598284Z 2026-04-29 18:12:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:22.770975735Z 2026-04-29 18:12:22 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:22.771038527Z 2026-04-29 18:12:22 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:23.360871997Z 2026-04-29 18:12:23 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:23.484844549Z 2026-04-29 18:12:23 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:23.48740301Z 2026-04-29 18:12:23 [info] [wa] Connected as 919012277862
2026-04-29T18:12:23.651403876Z 2026-04-29 18:12:23 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:24.101014878Z 2026-04-29 18:12:24 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:24.192326309Z 2026-04-29 18:12:24 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:24.19236631Z 2026-04-29 18:12:24 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:24.20269931Z 2026-04-29 18:12:24 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:24.25061909Z 2026-04-29 18:12:24 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:24.250634251Z 2026-04-29 18:12:24 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:24.309236668Z 2026-04-29 18:12:24 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:24.316174001Z 2026-04-29 18:12:24 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.98"}
2026-04-29T18:12:24.499130394Z 2026-04-29 18:12:24 [info] [wa] Connected as 919012277862
2026-04-29T18:12:25.310274915Z 2026-04-29 18:12:25 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:25.406134282Z 2026-04-29 18:12:25 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:25.40872507Z 2026-04-29 18:12:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:25.520305379Z 2026-04-29 18:12:25 [warn] [ai] text failed — gemini-2.5-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T18:12:25.520582567Z 2026-04-29 18:12:25 [warn] [ai] text — moving to next model after gemini-2.5-flash
2026-04-29T18:12:25.629204267Z 2026-04-29 18:12:25 [warn] [ai] text failed — gemini-2.5-flash-preview-05-20: [404] models/gemini-2.5-flash-preview-05-20 is not found for API version v1beta, or is not supported for generateContent. Call
2026-04-29T18:12:25.629226048Z 2026-04-29 18:12:25 [warn] [ai] text — moving to next model after gemini-2.5-flash-preview-05-20
2026-04-29T18:12:25.730384365Z 2026-04-29 18:12:25 [warn] [ai] text failed — gemini-2.0-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T18:12:25.730421246Z 2026-04-29 18:12:25 [info] [ai] text 429 — waiting 4000ms before retry
2026-04-29T18:12:25.768976326Z 2026-04-29 18:12:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:25.769492012Z 2026-04-29 18:12:25 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:25.833097728Z 2026-04-29 18:12:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:25.891579055Z 2026-04-29 18:12:25 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:25.930842592Z 2026-04-29 18:12:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:25.93110718Z 2026-04-29 18:12:25 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:25.931179622Z 2026-04-29 18:12:25 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:26.043610457Z 2026-04-29 18:12:26 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:26.044546574Z 2026-04-29 18:12:26 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:26.398516099Z 2026-04-29 18:12:26 [info] [wa] Connected as 919012277862
2026-04-29T18:12:26.892132747Z 2026-04-29 18:12:26 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:27.074743866Z 2026-04-29 18:12:27 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:27.076980159Z 2026-04-29 18:12:27 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:27.480525257Z 2026-04-29 18:12:27 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:27.480555437Z 2026-04-29 18:12:27 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:27.551637291Z 2026-04-29 18:12:27 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:27.621583221Z 2026-04-29 18:12:27 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:27.86240845Z 2026-04-29 18:12:27 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:27.862499916Z 2026-04-29 18:12:27 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:27.862511027Z 2026-04-29 18:12:27 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:28.352592237Z 2026-04-29 18:12:28 [info] [wa] Connected as 919012277862
2026-04-29T18:12:28.62202689Z 2026-04-29 18:12:28 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:28.712525836Z 2026-04-29 18:12:28 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:28.714696072Z 2026-04-29 18:12:28 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:29.113731491Z 2026-04-29 18:12:29 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:29.113751632Z 2026-04-29 18:12:29 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:29.200686829Z 2026-04-29 18:12:29 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:29.232037544Z 2026-04-29 18:12:29 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:29.276743192Z 2026-04-29 18:12:29 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:29.276961138Z 2026-04-29 18:12:29 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:29.27703115Z 2026-04-29 18:12:29 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:29.316257207Z 2026-04-29 18:12:29 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.98"}
2026-04-29T18:12:29.741730549Z 2026-04-29 18:12:29 [info] [wa] Connected as 919012277862
2026-04-29T18:12:29.830625537Z 2026-04-29 18:12:29 [warn] [ai] text failed — gemini-2.0-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T18:12:29.830696879Z 2026-04-29 18:12:29 [warn] [ai] text — moving to next model after gemini-2.0-flash
2026-04-29T18:12:29.93700571Z 2026-04-29 18:12:29 [warn] [ai] text failed — gemini-2.0-flash-lite: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T18:12:29.937055542Z 2026-04-29 18:12:29 [info] [ai] text 429 — waiting 4000ms before retry
2026-04-29T18:12:30.232420414Z 2026-04-29 18:12:30 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:30.332383348Z 2026-04-29 18:12:30 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:30.332400449Z 2026-04-29 18:12:30 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:30.672016602Z 2026-04-29 18:12:30 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:30.672046503Z 2026-04-29 18:12:30 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:30.724747049Z 2026-04-29 18:12:30 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:30.790802608Z 2026-04-29 18:12:30 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:30.807684444Z 2026-04-29 18:12:30 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:30.807700985Z 2026-04-29 18:12:30 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:30.807706446Z 2026-04-29 18:12:30 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:31.042781921Z 2026-04-29 18:12:31 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:31.086053578Z 2026-04-29 18:12:31 [info] [wa] Connected as 919012277862
2026-04-29T18:12:31.791248217Z 2026-04-29 18:12:31 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:31.886592999Z 2026-04-29 18:12:31 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:31.888729843Z 2026-04-29 18:12:31 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:32.366873484Z 2026-04-29 18:12:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:32.367113951Z 2026-04-29 18:12:32 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:32.432724601Z 2026-04-29 18:12:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:32.489238306Z 2026-04-29 18:12:32 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:32.529389203Z 2026-04-29 18:12:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:32.529828906Z 2026-04-29 18:12:32 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:32.529880057Z 2026-04-29 18:12:32 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:32.990589946Z 2026-04-29 18:12:32 [info] [wa] Connected as 919012277862
2026-04-29T18:12:33.489197007Z 2026-04-29 18:12:33 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:33.588951486Z 2026-04-29 18:12:33 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:33.592765138Z 2026-04-29 18:12:33 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:34.049208141Z 2026-04-29 18:12:34 [warn] [ai] text failed — gemini-2.0-flash-lite: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T18:12:34.049233312Z 2026-04-29 18:12:34 [warn] [ai] text — moving to next model after gemini-2.0-flash-lite
2026-04-29T18:12:34.155251684Z 2026-04-29 18:12:34 [warn] [ai] text failed — gemini-1.5-flash-latest: [404] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListMo
2026-04-29T18:12:34.15543632Z 2026-04-29 18:12:34 [warn] [ai] text — moving to next model after gemini-1.5-flash-latest
2026-04-29T18:12:34.155730769Z 2026-04-29 18:12:34 [info] [startup] readiness: firestore=true ai=false tts.gemini=true tts.elevenlabs=false tts.gtts=true
2026-04-29T18:12:34.155807411Z 2026-04-29 18:12:34 [error] [startup] ❌ Gemini FAILED: AI unavailable (text): gemini-1.5-flash-latest: [404] models/gemini-1.5-flash-latest is not found for API version v1beta, or is not supported for generateContent. Call ListMo
2026-04-29T18:12:34.156067889Z 2026-04-29 18:12:34 [error] [startup] Check GEMINI_API_KEY in Render environment variables!
2026-04-29T18:12:34.316655564Z 2026-04-29 18:12:34 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.98"}
2026-04-29T18:12:34.874097521Z 2026-04-29 18:12:34 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:34.874162603Z 2026-04-29 18:12:34 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:34.992365731Z 2026-04-29 18:12:34 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:35.220109648Z 2026-04-29 18:12:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:35.469848707Z 2026-04-29 18:12:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:35.469874548Z 2026-04-29 18:12:35 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:35.469878738Z 2026-04-29 18:12:35 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:35.780968799Z 2026-04-29 18:12:35 [info] [wa] Connected as 919012277862
2026-04-29T18:12:35.992946344Z 2026-04-29 18:12:35 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:36.043057859Z 2026-04-29 18:12:36 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:36.08809326Z 2026-04-29 18:12:36 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:36.089647347Z 2026-04-29 18:12:36 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:36.605784999Z 2026-04-29 18:12:36 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:36.635678297Z 2026-04-29 18:12:36 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:36.635696408Z 2026-04-29 18:12:36 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:36.680820722Z 2026-04-29 18:12:36 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:36.681055098Z 2026-04-29 18:12:36 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:36.6811118Z 2026-04-29 18:12:36 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:36.806447933Z 2026-04-29 18:12:36 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:37.120100367Z 2026-04-29 18:12:37 [info] [wa] Connected as 919012277862
2026-04-29T18:12:37.806950982Z 2026-04-29 18:12:37 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:37.900149011Z 2026-04-29 18:12:37 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:37.902127147Z 2026-04-29 18:12:37 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:38.494626665Z 2026-04-29 18:12:38 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:38.494649595Z 2026-04-29 18:12:38 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:38.617396379Z 2026-04-29 18:12:38 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:38.637965332Z 2026-04-29 18:12:38 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:38.69690585Z 2026-04-29 18:12:38 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:38.69735687Z 2026-04-29 18:12:38 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:38.697506421Z 2026-04-29 18:12:38 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:38.959810322Z 2026-04-29 18:12:38 [info] [wa] Connected as 919012277862
2026-04-29T18:12:39.316380275Z 2026-04-29 18:12:39 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.98"}
2026-04-29T18:12:39.617565731Z 2026-04-29 18:12:39 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:39.710448699Z 2026-04-29 18:12:39 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:39.712270643Z 2026-04-29 18:12:39 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:40.088968655Z 2026-04-29 18:12:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:40.088985916Z 2026-04-29 18:12:40 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:40.108515817Z 2026-04-29 18:12:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:40.197782386Z 2026-04-29 18:12:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:40.198128757Z 2026-04-29 18:12:40 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:40.202391605Z 2026-04-29 18:12:40 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:40.292224981Z 2026-04-29 18:12:40 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:40.669741133Z 2026-04-29 18:12:40 [info] [wa] Connected as 919012277862
2026-04-29T18:12:41.043280825Z 2026-04-29 18:12:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:41.221322429Z 2026-04-29 18:12:41 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::1"}
2026-04-29T18:12:41.29288384Z 2026-04-29 18:12:41 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:41.383868708Z 2026-04-29 18:12:41 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:41.385698743Z 2026-04-29 18:12:41 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:42.000155746Z 2026-04-29 18:12:41 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:42.000184057Z 2026-04-29 18:12:42 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:42.106720855Z 2026-04-29 18:12:42 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:42.136471365Z 2026-04-29 18:12:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:42.165750825Z 2026-04-29 18:12:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:42.16684548Z 2026-04-29 18:12:42 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:42.169363903Z 2026-04-29 18:12:42 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:42.535492273Z 2026-04-29 18:12:42 [info] [wa] Connected as 919012277862
2026-04-29T18:12:43.108133913Z 2026-04-29 18:12:43 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:43.200947139Z 2026-04-29 18:12:43 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:43.203067763Z 2026-04-29 18:12:43 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:44.134030306Z 2026-04-29 18:12:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:44.134049387Z 2026-04-29 18:12:44 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:44.247965949Z 2026-04-29 18:12:44 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:44.316464922Z 2026-04-29 18:12:44 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.98"}
2026-04-29T18:12:44.460413043Z 2026-04-29 18:12:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:44.686792798Z 2026-04-29 18:12:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:44.687000554Z 2026-04-29 18:12:44 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:44.687314953Z 2026-04-29 18:12:44 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:45.132177786Z 2026-04-29 18:12:45 [info] [wa] Connected as 919012277862
2026-04-29T18:12:45.249072529Z 2026-04-29 18:12:45 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:45.330290736Z 2026-04-29 18:12:45 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:45.331796929Z 2026-04-29 18:12:45 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:46.042605074Z 2026-04-29 18:12:46 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:46.147569314Z 2026-04-29 18:12:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:46.183601396Z 2026-04-29 18:12:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:46.183623486Z 2026-04-29 18:12:46 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:46.29200884Z 2026-04-29 18:12:46 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:46.306381689Z 2026-04-29 18:12:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:46.306578732Z 2026-04-29 18:12:46 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:46.306586983Z 2026-04-29 18:12:46 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:46.538505737Z 2026-04-29 18:12:46 [info] [wa] Connected as 919012277862
2026-04-29T18:12:47.292442409Z 2026-04-29 18:12:47 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:47.481009289Z 2026-04-29 18:12:47 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:47.482672749Z 2026-04-29 18:12:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:47.965905959Z 2026-04-29 18:12:47 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:47.965938561Z 2026-04-29 18:12:47 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:48.05908767Z 2026-04-29 18:12:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:48.073915905Z 2026-04-29 18:12:48 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:48.092359029Z 2026-04-29 18:12:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:48.092575375Z 2026-04-29 18:12:48 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:48.092626607Z 2026-04-29 18:12:48 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:48.788722771Z 2026-04-29 18:12:48 [info] [wa] Connected as 919012277862
2026-04-29T18:12:49.075571583Z 2026-04-29 18:12:49 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:49.172431584Z 2026-04-29 18:12:49 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:49.174094158Z 2026-04-29 18:12:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:49.315916936Z 2026-04-29 18:12:49 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.98"}
2026-04-29T18:12:49.689921841Z 2026-04-29 18:12:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:49.689961232Z 2026-04-29 18:12:49 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:49.762882637Z 2026-04-29 18:12:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:49.796967654Z 2026-04-29 18:12:49 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:49.831440834Z 2026-04-29 18:12:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:49.831621927Z 2026-04-29 18:12:49 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:49.831627567Z 2026-04-29 18:12:49 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:50.034070578Z 2026-04-29 18:12:50 [info] [wa] Connected as 919012277862
2026-04-29T18:12:50.797234858Z 2026-04-29 18:12:50 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:51.042739537Z 2026-04-29 18:12:51 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:51.109216102Z 2026-04-29 18:12:51 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:51.111248573Z 2026-04-29 18:12:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:51.453676304Z 2026-04-29 18:12:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:51.453695035Z 2026-04-29 18:12:51 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:51.50628216Z 2026-04-29 18:12:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:51.587599081Z 2026-04-29 18:12:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:51.587841078Z 2026-04-29 18:12:51 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:51.587850029Z 2026-04-29 18:12:51 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:51.621651758Z 2026-04-29 18:12:51 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:52.029596708Z 2026-04-29 18:12:52 [info] [wa] Connected as 919012277862
2026-04-29T18:12:52.622123025Z 2026-04-29 18:12:52 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:52.705886536Z 2026-04-29 18:12:52 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:52.707737534Z 2026-04-29 18:12:52 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:53.606110358Z 2026-04-29 18:12:53 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:53.606131139Z 2026-04-29 18:12:53 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:53.715008337Z 2026-04-29 18:12:53 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:53.956098072Z 2026-04-29 18:12:53 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:54.208323931Z 2026-04-29 18:12:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:54.208844836Z 2026-04-29 18:12:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:54.209078163Z 2026-04-29 18:12:54 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:54.316924978Z 2026-04-29 18:12:54 [info] {"method":"GET","path":"/health","status":200,"duration":"1ms","ip":"::ffff:10.203.24.98"}
2026-04-29T18:12:54.530678575Z 2026-04-29 18:12:54 [info] [wa] Connected as 919012277862
2026-04-29T18:12:54.715423025Z 2026-04-29 18:12:54 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:54.811128928Z 2026-04-29 18:12:54 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:54.813218891Z 2026-04-29 18:12:54 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:55.360846488Z 2026-04-29 18:12:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:55.36086822Z 2026-04-29 18:12:55 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:55.377940261Z 2026-04-29 18:12:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:55.39288233Z 2026-04-29 18:12:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:55.393258711Z 2026-04-29 18:12:55 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:55.393368184Z 2026-04-29 18:12:55 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:55.472205925Z 2026-04-29 18:12:55 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:55.833267298Z 2026-04-29 18:12:55 [info] [wa] Connected as 919012277862
2026-04-29T18:12:56.042770427Z 2026-04-29 18:12:56 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:56.046923281Z 2026-04-29 18:12:56 [info] {"method":"GET","path":"/health","status":200,"duration":"3ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:12:56.475332014Z 2026-04-29 18:12:56 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:56.570686271Z 2026-04-29 18:12:56 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:56.57562781Z 2026-04-29 18:12:56 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:57.401015605Z 2026-04-29 18:12:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:57.401063817Z 2026-04-29 18:12:57 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:57.50744073Z 2026-04-29 18:12:57 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:57.707629389Z 2026-04-29 18:12:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:57.917719365Z 2026-04-29 18:12:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:57.91823638Z 2026-04-29 18:12:57 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:57.918246621Z 2026-04-29 18:12:57 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:58.19145108Z 2026-04-29 18:12:58 [info] [wa] Connected as 919012277862
2026-04-29T18:12:58.50826426Z 2026-04-29 18:12:58 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:12:58.60153384Z 2026-04-29 18:12:58 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:58.603124608Z 2026-04-29 18:12:58 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:12:59.125330025Z 2026-04-29 18:12:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:12:59.125349216Z 2026-04-29 18:12:59 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:12:59.144494828Z 2026-04-29 18:12:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:59.179414776Z 2026-04-29 18:12:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:12:59.179652673Z 2026-04-29 18:12:59 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:12:59.179657703Z 2026-04-29 18:12:59 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:12:59.235675352Z 2026-04-29 18:12:59 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:12:59.315943793Z 2026-04-29 18:12:59 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.98"}
2026-04-29T18:12:59.510449862Z 2026-04-29 18:12:59 [info] [wa] Connected as 919012277862
2026-04-29T18:13:00.235394867Z 2026-04-29 18:13:00 [info] [wa] spawning connection for 2a0780dd-50a4-4fda-bf7b-dad5714154dd (attempt 1)
2026-04-29T18:13:00.440825663Z 2026-04-29 18:13:00 [info] [wa-auth] loaded existing creds for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:13:00.441862184Z 2026-04-29 18:13:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=connecting, qr=false, lastDisconnect=false
2026-04-29T18:13:00.849079792Z 2026-04-29 18:13:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=close, qr=false, lastDisconnect=true
2026-04-29T18:13:00.849114113Z 2026-04-29 18:13:00 [warn] [wa] Connection closed for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: code=440, error=Stream Errored (conflict)
2026-04-29T18:13:00.877196566Z 2026-04-29 18:13:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:13:00.954848976Z 2026-04-29 18:13:00 [info] [wa] Reconnecting 2a0780dd-50a4-4fda-bf7b-dad5714154dd in 1000ms (attempt 1)
2026-04-29T18:13:00.97482928Z 2026-04-29 18:13:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=undefined, qr=false, lastDisconnect=false
2026-04-29T18:13:00.975026393Z 2026-04-29 18:13:00 [info] [wa] connection.update for 2a0780dd-50a4-4fda-bf7b-dad5714154dd: connection=open, qr=false, lastDisconnect=false
2026-04-29T18:13:00.975030304Z 2026-04-29 18:13:00 [info] [wa] Connection opened for 2a0780dd-50a4-4fda-bf7b-dad5714154dd
2026-04-29T18:13:01.042713334Z 2026-04-29 18:13:01 [info] {"method":"GET","path":"/health","status":200,"duration":"0ms","ip":"::ffff:10.203.24.209"}
2026-04-29T18:13:01.219413164Z 2026-04-29 18:13:01 [info] [ai] image gen via Imagen: imagen-3.0-generate-002
2026-04-29T18:13:01.275103698Z 2026-04-29 18:13:01 [info] [wa] Connected as 919012277862
2026-04-29T18:13:01.354075491Z 2026-04-29 18:13:01 [warn] [ai] Imagen imagen-3.0-generate-002 failed: models/imagen-3.0-generate-002 is not found for API version v1beta, or is not supported for predict. Call ListModels to see the list of available models and the
2026-04-29T18:13:01.354090522Z 2026-04-29 18:13:01 [info] [ai] image gen via Imagen: imagen-3.0-fast-generate-001
2026-04-29T18:13:01.453978761Z 2026-04-29 18:13:01 [warn] [ai] Imagen imagen-3.0-fast-generate-001 failed: models/imagen-3.0-fast-generate-001 is not found for API version v1beta, or is not supported for predict. Call ListModels to see the list of available models an
2026-04-29T18:13:01.454100639Z 2026-04-29 18:13:01 [info] [ai] image gen via Gemini: gemini-2.0-flash-preview-image-generation
2026-04-29T18:13:01.549819121Z 2026-04-29 18:13:01 [warn] [ai] Gemini image-gen gemini-2.0-flash-preview-image-generation failed: models/gemini-2.0-flash-preview-image-generation is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list o
2026-04-29T18:13:01.549840713Z 2026-04-29 18:13:01 [info] [ai] image gen via Gemini: gemini-2.0-flash-exp-image-generation
2026-04-29T18:13:01.649167193Z 2026-04-29 18:13:01 [warn] [ai] Gemini image-gen gemini-2.0-flash-exp-image-generation failed: models/gemini-2.0-flash-exp-image-generation is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of av
2026-04-29T18:13:01.650171232Z 2026-04-29 18:13:01 [error] [ai] all image generation models failed
2026-04-29T18:13:01.886372901Z 2026-04-29 18:13:01 [warn] [ai] text failed — gemini-2.5-flash: [429] You exceeded your current quota, please check your plan and billing details. For more information on this error, head to
2026-04-29T18:13:01.886388042Z 2026-04-29 18:13:01 [info] [ai] text 429 — waiting 4000ms before retry
```
