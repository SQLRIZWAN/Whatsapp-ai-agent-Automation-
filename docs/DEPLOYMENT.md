# Deployment Guide

## GitHub-Based Deployment

This project is designed to be deployed and managed using GitHub. All code, configuration, and CI/CD is handled through GitHub repositories and GitHub Actions.

### Prerequisites

- GitHub account
- GitHub repository (SQLRIZWAN/whatsapp-ai-agent-automation-)
- GitHub Actions enabled
- GitHub Secrets configured

### GitHub Secrets Configuration

You must add the following secrets to your GitHub repository:

```
FIREBASE_PROJECT_ID          - Your Firebase project ID
FIREBASE_PRIVATE_KEY         - Firebase service account private key (escaped newlines)
FIREBASE_CLIENT_EMAIL        - Firebase service account email
FIREBASE_DATABASE_URL        - Firebase database URL
GEMINI_API_KEY               - Google Gemini API key
JWT_SECRET                   - JWT signing secret
NODE_ENV                     - production
```

**How to add GitHub Secrets:**
1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add each secret with its value

### Deployment Strategies

#### Option 1: Google Cloud Run (Recommended for Backend)

**Backend Deployment:**

```bash
# Build Docker image
docker build -t whatsapp-ai-backend:latest ./backend

# Push to Google Container Registry
docker tag whatsapp-ai-backend:latest gcr.io/YOUR_PROJECT_ID/whatsapp-ai-backend:latest
docker push gcr.io/YOUR_PROJECT_ID/whatsapp-ai-backend:latest

# Deploy to Cloud Run
gcloud run deploy whatsapp-ai-backend \
  --image gcr.io/YOUR_PROJECT_ID/whatsapp-ai-backend:latest \
  --platform managed \
  --region us-central1 \
  --set-env-vars "JWT_SECRET=$JWT_SECRET,GEMINI_API_KEY=$GEMINI_API_KEY"
```

#### Option 2: Vercel (Recommended for Frontend)

**Frontend Deployment:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel --prod
```

#### Option 3: GitHub Pages + GitHub Actions (Free)

**Frontend only - Static site hosting:**

```yaml
name: Deploy Frontend to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: cd frontend && npm install
      
      - name: Build
        run: cd frontend && npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/dist
```

### Using Docker

#### Build Docker Image

```bash
cd backend
docker build -t whatsapp-ai-backend:latest .
```

**Dockerfile:**

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

#### Run Locally

```bash
docker run -p 5000:5000 \
  -e JWT_SECRET=$JWT_SECRET \
  -e GEMINI_API_KEY=$GEMINI_API_KEY \
  -e FIREBASE_PROJECT_ID=$FIREBASE_PROJECT_ID \
  whatsapp-ai-backend:latest
```

### GitHub Actions CI/CD Pipeline

**`.github/workflows/backend-tests.yml`:**

```yaml
name: Backend Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: cd backend && npm install
      - run: cd backend && npm run lint
      - run: cd backend && npm test
```

**`.github/workflows/frontend-tests.yml`:**

```yaml
name: Frontend Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: cd frontend && npm install
      - run: cd frontend && npm run lint
      - run: cd frontend && npm test
```

### Environment Files for Deployment

#### Backend Production (.env.production)

```
NODE_ENV=production
PORT=5000
JWT_SECRET=[from GitHub Secrets]
FIREBASE_PROJECT_ID=[from GitHub Secrets]
FIREBASE_PRIVATE_KEY=[from GitHub Secrets]
FIREBASE_CLIENT_EMAIL=[from GitHub Secrets]
FIREBASE_DATABASE_URL=[from GitHub Secrets]
GEMINI_API_KEY=[from GitHub Secrets]
FRONTEND_URL=https://yourdomain.com
API_URL=https://api.yourdomain.com
USE_FIRESTORE_EMULATOR=false
LOG_LEVEL=info
```

#### Frontend Production (.env.production)

```
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME=WhatsApp AI Automation
```

### Deployment Checklist

- [ ] GitHub Secrets configured
- [ ] Docker image builds successfully
- [ ] All tests passing
- [ ] Environment variables set correctly
- [ ] Firestore database ready
- [ ] Gemini API key active
- [ ] Firebase credentials valid
- [ ] CORS configured correctly
- [ ] SSL/HTTPS enabled
- [ ] Monitoring set up
- [ ] Error tracking enabled
- [ ] Logs configured

### Post-Deployment

1. **Verify Application**
   ```bash
   curl https://your-api-domain.com/health
   ```

2. **Monitor Performance**
   - Check Firebase Console for database stats
   - Monitor API response times
   - Track error rates

3. **Backup Strategy**
   - Enable Firestore automated backups
   - Regularly export database
   - Version control all code

### Scaling Considerations

- **Backend:** Cloud Run scales automatically
- **Database:** Firestore scales automatically
- **Storage:** Cloud Storage for media files
- **CDN:** Use Cloud CDN for static assets

### Troubleshooting

**Build Fails:**
```bash
# Clear node_modules and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Deployment Fails:**
- Check GitHub Actions logs
- Verify GitHub Secrets are set
- Check Cloud Run logs
- Verify Firestore connectivity

### Cost Estimation

- **Cloud Run (Backend):** ~$0.00-20/month (depending on usage)
- **Firestore:** ~$0.06/100k reads, $0.18/100k writes
- **Cloud Storage:** ~$0.020/GB
- **Domain:** ~$10-15/year

### Support

For deployment issues:
1. Check GitHub Actions logs
2. Review Cloud Run logs
3. Check Firestore error logs
4. Review application error logs in `logs/error.log`

---

**Last Updated:** 2026-04-22
