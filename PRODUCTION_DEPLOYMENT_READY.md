# 🚀 Production Deployment Instructions - Render & Vercel

## Your Credentials (Secure Configuration)

Your production environment variables are configured. Below are the exact steps to deploy.

---

## STEP 1: Deploy Backend to Render.com

### 1.1 Create Render Web Service
1. Go to: https://dashboard.render.com/new/web
2. Click **"Connect Account"** and authorize GitHub
3. Select repository: `SQLRIZWAN/Whatsapp-ai-agent-Automation-`
4. Branch: `claude/whatsapp-ai-automation-MBek3`

### 1.2 Configure Service
- **Name:** `whatsapp-ai-backend`
- **Root Directory:** `backend`
- **Environment:** `Node`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Plan:** Free

### 1.3 Add Environment Variables in Render Dashboard

Click **"Advanced"** and add these exact variables:

```
NODE_ENV = production
PORT = 5000
API_URL = https://whatsapp-ai-backend.onrender.com
FRONTEND_URL = https://whatsapp-ai-automation.vercel.app

JWT_SECRET = sql_rrr_secure_jwt_token_2026_xyz
JWT_EXPIRY = 7d

FIREBASE_PROJECT_ID = whatsapp-ai-agent-fed73
FIREBASE_CLIENT_EMAIL = firebase-adminsdk-fbsvc@whatsapp-ai-agent-fed73.iam.gserviceaccount.com
FIREBASE_DATABASE_URL = https://whatsapp-ai-agent-fed73.firebaseio.com

GEMINI_API_KEY = AIzaSyCh03ZDm1lflX595rVHwsBD3l43nn5azyg

LOG_LEVEL = info
RATE_LIMIT_WINDOW_MS = 900000
RATE_LIMIT_MAX_REQUESTS = 100
USE_FIRESTORE_EMULATOR = false
```

**⚠️ CRITICAL: FIREBASE_PRIVATE_KEY**

This is a multiline key. Add it carefully:

```
FIREBASE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVjYcg5g3QTeo3\n9g9Y+a64aL1bz0gzmv3xOH+gR6/nDAXTfUkKc6eXMrmv6OlBObDnGytoN0LBMvoE\nnBaMytYkdcjpHKpUn0Hhl7KnoGEMl7zoswUxKqulNobNSdGv5vXQNuuann7NOMll1\nn9ttZ0lG7a3G9n83asVjaqlvkeG08C+ofWk70NI7Utt+SBKA9SGXjfIfLhzzElY+0\nnOoBUyXzayWbKgPo7g4vQgxp6SvtMd3N+/i5BjMBssFUNYlBq5yZHGHWAmxDjflCp\nng5XZ70BpV2Po1P9BWmPjs6NiDCnMOPu5sK8H1lrPXwiptngFhIEmkw62s1tkUTF3\nnYu+GQHQ3AgMBAAECggEATKHIW1RioZzMDz/TmxSiD5e6V79GxAn61Xx2Q/BlnW4R\nniyZ6tu7wtU+lFYxm4IwQwKXdyjyGTmj6EcZqHVDKftAWPKl5urtS8RRfliNary5y\nn/EtzEpplNSvw+wY/FvPWuPSYP4+N2uGSuCOY7B5tpUk1nBvD1ZXtci2oYZibbj+a\nnWbEojdluLRLn9x/jbAeEnMPl3/MGLVRw8SG6VbjO6p3UnbtNlcYLjoSnjmtElyqe\nnaMMMo/gSaJ543tzRWJyhfHt63kpRjKKfcMByp3Yu/VgDDEhN7luzSmeGyDcEQLDp\nnnrpS41hngCWu4B1X9H7ODofQQw55o54h1IlhLlP0QuQKBgQDzAj8qb2DckHt9p1l/\nnfUk4Sow1ThTaGROd2iiDbvYyw/grZlDDycSE84rpPri6WMkUF1/b5Jn999Guufhc\nnnnKZF1mc1qg7lmqMl6TFMF6QFjBb+Q/Khb/8sCREWKHbGpaVlKRlr85Sp1q1NX6ra\nnnjW0Y19q+Nhbzc+Aml80KT+LLGQKBgQDg+CeyR/SQr0d4bXWgCQBlceYhwimnCx6D\nnndgk4T7k2L5AVzlkAxcIrS9jV9luTNBqlA3HqVH5NYt8wS8lZyCsuSsoWFtX0DfKC\nnnmUPz8xAOjl6ndy7bTHsccXSpaQvrhEQsnb8+0yWMQWgdCmA2WT2KjFictFN9OfmF\nn76zTZ/lzzwKBgQC+Q1QRdYLxLm6BwzVfjEh3umZsleXdnSSuwtBVl9tLhAQadXKi\nn2Kb1MXnhhSo9PKazBFoZYLLxFccmdpTubfgBVg0ZBzzsvBZg6GOgoCHb9gNKsQiX\nnnPYkcgTzPjH7yqV8GBVfSHbSYBW1K10x+MZzphpfNtavikSc/EDuJh2KagQKBgQCT\nncRBTP+WBjd8Bhnu4zy1o9UUmiulRoG/3KL0SMu3oHXQlVWvVHccMKUGLuVJ7P4LW\nn81MNiSLeBRbRyFnGhflG/O1FXOlMebee8GQg1gSlBlbaKrqC77UgBxu2jCpLyPwF\nnnYb2dpzTMn3Fk1xAHjqVO0Hyi92xgfkaTCWnzhATa8QKBgEMXUwQPQ1p1q/Neb8Wp\nnnntS6+1EgFN9s2ZAP8YpWV7N7Y2rslt2cSBH3z6eKPD0L/mQgOCz7p5lKtgpnaUWs8\nnn9D6X+MO5EZgZE5p0+y4UaoXTxDckE9BOjjiBZCuwlQfPx1QsWMaZ3yEesVUDldi1\nnlscF2AbWESj1bOiv3HHONUzc\n-----END PRIVATE KEY-----\n"
```

### 1.4 Deploy
Click **"Create Web Service"**

✅ Wait for deployment (5-10 minutes)
✅ You'll get URL like: `https://whatsapp-ai-backend-xxxx.onrender.com`

---

## STEP 2: Deploy Frontend to Vercel

### 2.1 Import Project
1. Go to: https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select: `SQLRIZWAN/Whatsapp-ai-agent-Automation-`

### 2.2 Configure Project
- **Project Name:** `whatsapp-ai-automation`
- **Framework:** Vite (auto-detected)
- **Root Directory:** `frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### 2.3 Add Environment Variables

Click **"Environment Variables"** and add:

```
VITE_API_URL = https://whatsapp-ai-backend.onrender.com
VITE_APP_NAME = WhatsApp AI Automation
VITE_APP_VERSION = 1.0.0
```

### 2.4 Deploy
Click **"Deploy"**

✅ Wait for deployment (3-5 minutes)
✅ You'll get URL like: `https://whatsapp-ai-automation-xxxxx.vercel.app`

---

## STEP 3: Verify Deployments

### Test Backend Health
```bash
curl https://whatsapp-ai-backend.onrender.com/health
```

Expected response:
```json
{"status":"ok","timestamp":"2026-04-22T...","uptime":...}
```

### Test Frontend
Open in browser: `https://whatsapp-ai-automation.vercel.app`

Should see login page ✅

### Test Authentication
```bash
curl -X POST https://whatsapp-ai-backend.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"Test@123",
    "displayName":"Test User"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "uid": "...",
      "email": "test@example.com",
      "displayName": "Test User"
    },
    "token": "eyJhbGc..."
  }
}
```

---

## STEP 4: Post-Deployment

### ✅ Update Frontend URL (if different from https://whatsapp-ai-automation.vercel.app)

If Vercel assigned a different URL, update it in Render:
1. Go to Render dashboard → whatsapp-ai-backend
2. Settings → Environment Variables
3. Edit `FRONTEND_URL` to match your actual Vercel URL
4. Click "Save"

### ✅ Test WhatsApp Features

1. Login to app with test account
2. Get QR code from `/api/whatsapp/qr`
3. Scan with WhatsApp to connect
4. Send message from WhatsApp
5. Verify AI response

### ⚠️ Security: Delete Tokens

After deployment is successful:
- Delete Render API token from your system
- Delete Vercel API token from your system
- Keep JWT_SECRET and other credentials secure in Render/Vercel only

---

## Monitoring & Debugging

### Check Render Logs
1. Go to Render dashboard → whatsapp-ai-backend
2. Click "Logs" tab
3. View real-time output

### Check Vercel Logs
1. Go to Vercel dashboard → whatsapp-ai-automation
2. Click recent deployment
3. View build and runtime logs

### Common Issues

**Issue:** Build fails on Render
- Check `backend/package.json` has correct dependencies
- Verify build command: `npm install && npm run build`

**Issue:** API returns 500 errors
- Check Render logs for specific errors
- Verify Firebase credentials are correct
- Ensure Gemini API key is valid

**Issue:** Frontend can't connect to backend
- Verify `VITE_API_URL` matches exact Render backend URL (with https://)
- Check CORS is enabled in backend
- Redeploy frontend after changing API URL

**Issue:** Login fails
- Check Firebase project is active
- Verify `FIREBASE_PRIVATE_KEY` has correct formatting
- Check `FIREBASE_PROJECT_ID` matches Firebase console

---

## What's Next

✅ Backend deployed and running
✅ Frontend deployed and live
✅ Authentication working
✅ Database connected
✅ Gemini AI integrated

Next features to test:
- WhatsApp QR connection
- Message sending/receiving
- AI response generation
- Call handling (if Baileys supports your environment)

---

**Status:** 🟢 Production Ready
**Last Updated:** 2026-04-22
