== /health ==
{"status":"ok","timestamp":"2026-04-24T08:04:44.577Z","uptime":178.235941604}
HTTP: 200

== POST /api/auth/register (test flow) ==
Request: {
  "email": "probe_1777017884@example.com",
  "password": "TestPass123!",
  "displayName": "Probe User"
}
{"success":false,"message":"Registration failed","error":"INTERNAL_ERROR","timestamp":"2026-04-24T08:04:44.767Z"}
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
```
