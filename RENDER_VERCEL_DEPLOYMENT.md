# Render.com & Vercel Deployment Guide

## Current Status ✅

- Backend code: Ready
- Frontend code: Built and ready  
- GitHub branch: `claude/whatsapp-ai-automation-MBek3`
- render.yaml: Configured ✅
- vercel.json: Configured ✅
- npm dependencies: Installed ✅
- Frontend build: Complete (dist/ directory ready) ✅

## Prerequisites

Before deploying, you'll need:

### 1. Gemini API Key
- Visit: https://aistudio.google.com/app/apikey
- Create/copy your API key
- Save it for later

### 2. Firebase Credentials
- Project ID
- Private Key
- Client Email
- Database URL

These are from your Firebase service account. Get them from:
- Firebase Console → Project Settings → Service Accounts → Generate New Private Key (JSON)

### 3. Render Account
- Signup at: https://render.com
- API Token: `rnd_2SelzueR3PwG3dDruXeO0Vli7jZf` (already provided)

### 4. Vercel Account  
- Signup at: https://vercel.com
- API Token: `vcp_3AnEqHNnVDBRn7hPCtUFwlNt6jIAqXLk4KOLQwiZPkUcbrHvlJ0UmcRh` (already provided)

---

## Deployment Steps

### Step 1: Deploy Backend to Render

1. **Connect GitHub Repository**
   - Go to https://dashboard.render.com/new/web
   - Select "New Web Service"
   - Click "Connect" to link your GitHub account
   - Select repository: `SQLRIZWAN/Whatsapp-ai-agent-Automation-`
   - Select branch: `claude/whatsapp-ai-automation-MBek3`

2. **Configure Service**
   - Name: `whatsapp-ai-backend`
   - Environment: `Node`
   - Build Command: `cd backend && npm install && npm run build`
   - Start Command: `cd backend && npm start`
   - Plan: Free tier is fine

3. **Add Environment Variables**
   
   In Render dashboard, add these environment variables:
   
   ```
   NODE_ENV=production
   PORT=5000
   API_URL=https://whatsapp-ai-backend-xxxx.onrender.com  (replace xxxx with your render subdomain)
   JWT_SECRET=<generate-a-random-32-char-string>
   FRONTEND_URL=https://your-vercel-app.vercel.app
   
   # Firebase
   FIREBASE_PROJECT_ID=<your-firebase-project-id>
   FIREBASE_PRIVATE_KEY=<your-firebase-private-key>
   FIREBASE_CLIENT_EMAIL=<your-firebase-client-email>
   FIREBASE_DATABASE_URL=<your-firebase-database-url>
   
   # Gemini
   GEMINI_API_KEY=<your-gemini-api-key>
   ```

   **Important:** For FIREBASE_PRIVATE_KEY with multiline strings, make sure to preserve newlines properly or escape them as `\n`.

4. **Deploy**
   - Click "Create Web Service"
   - Wait for build and deployment (~5-10 minutes)
   - Once live, you'll get a URL like: `https://whatsapp-ai-backend-xxxx.onrender.com`
   - Note this URL for frontend configuration

### Step 2: Deploy Frontend to Vercel

1. **Import Project**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select: `SQLRIZWAN/Whatsapp-ai-agent-Automation-`
   - Vercel will auto-detect it's a monorepo

2. **Configure Project**
   - Project Name: `whatsapp-ai-automation`
   - Framework Preset: Vite
   - Root Directory: `./frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Add Environment Variables**
   
   In Vercel project settings:
   
   ```
   VITE_API_URL=https://whatsapp-ai-backend-xxxx.onrender.com
   VITE_APP_NAME=WhatsApp AI Automation
   VITE_APP_VERSION=1.0.0
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build (~3-5 minutes)
   - Once deployed, you'll get a URL like: `https://whatsapp-ai-automation-xxxxx.vercel.app`

### Step 3: Verify Deployments

1. **Backend Health Check**
   ```bash
   curl https://whatsapp-ai-backend-xxxx.onrender.com/health
   ```
   
   Expected response:
   ```json
   {"status":"ok","timestamp":"...","uptime":"..."}
   ```

2. **Frontend Check**
   - Visit your Vercel URL in a browser
   - Should see the login page

3. **Test Auth Endpoint**
   ```bash
   curl -X POST https://whatsapp-ai-backend-xxxx.onrender.com/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"test123","displayName":"Test User"}'
   ```

---

## Common Issues & Solutions

### Issue: `Cannot find module` errors during build

**Solution:** Ensure all dependencies are listed in package.json. Render will run `npm install` before building.

### Issue: Environment variables not loading

**Solution:** 
- Check variable names exactly match what's in the code
- Restart deployment after changing env vars
- Firebase private key must have proper formatting (preserve \n characters)

### Issue: CORS errors on frontend

**Solution:** 
- Verify `FRONTEND_URL` is set correctly in backend
- Check that frontend `VITE_API_URL` points to correct backend domain
- Redeploy both services after changes

### Issue: Firebase authentication failures

**Solution:**
- Verify Firebase credentials are correct
- Ensure `FIREBASE_PRIVATE_KEY` is properly formatted
- Check Firebase project has Firestore enabled
- Verify security rules are deployed

### Issue: Render build takes too long or times out

**Solution:**
- Render free tier has limited resources
- Can upgrade to paid plan or use build cache
- Ensure dependencies are minimal

---

## Monitoring & Logs

### Render Logs
- Go to Service Dashboard
- Click "Logs" tab
- Stream logs in real-time

### Vercel Logs
- Go to Deployment
- Click specific deployment
- View build logs and runtime logs

### Checking Live Status
```bash
# Test backend is responding
curl https://whatsapp-ai-backend-xxxx.onrender.com/health

# Test auth is working
curl -X POST https://whatsapp-ai-backend-xxxx.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

---

## Next Steps

1. ✅ Ensure you have all required credentials:
   - Gemini API key
   - Firebase project credentials
   - Strong JWT secret

2. ✅ Deploy backend to Render following Step 1

3. ✅ Deploy frontend to Vercel following Step 2

4. ✅ Run verification tests from Step 3

5. ✅ Create test user account in deployed app

6. ✅ Test WhatsApp QR connection and messaging

7. ⚠️ **DELETE TOKENS** after deployment:
   - Render API token: `rnd_2SelzueR3PwG3dDruXeO0Vli7jZf`
   - Vercel API token: `vcp_3AnEqHNnVDBRn7hPCtUFwlNt6jIAqXLk4KOLQwiZPkUcbrHvlJ0UmcRh`

---

## Production Checklist

- [ ] Gemini API key added to Render
- [ ] Firebase credentials added to Render  
- [ ] JWT_SECRET is strong and random
- [ ] FRONTEND_URL points to Vercel domain
- [ ] VITE_API_URL points to Render domain
- [ ] Backend deployed and health check passes
- [ ] Frontend deployed and loads in browser
- [ ] Login/register endpoints working
- [ ] Database connection verified
- [ ] WebSocket connection tested
- [ ] API tokens deleted from systems
- [ ] Custom domain configured (optional)
- [ ] SSL certificate validated (should be automatic)

---

## Custom Domain (Optional)

### Render Custom Domain
1. In Render dashboard → Settings → Custom Domain
2. Add your domain
3. Update DNS records as instructed

### Vercel Custom Domain
1. In Vercel project → Settings → Domains
2. Add your domain
3. Update DNS records as instructed

---

## Support

For issues:
1. Check Render/Vercel logs
2. Review deployment configuration
3. Verify all environment variables are set
4. Test API endpoints with curl
5. Check Firebase security rules are not blocking requests

**Last Updated:** 2026-04-22
**Status:** Ready for Deployment ✅
