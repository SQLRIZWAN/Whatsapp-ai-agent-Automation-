# Production Setup Guide

## Quick Start (5 minutes)

### Prerequisites
- Google Cloud Project
- GitHub token (already provided)
- Firebase Project
- Gemini API key

### Step 1: Set Environment Variables

```bash
export PROJECT_ID="your-gcp-project-id"
export FIREBASE_PROJECT_ID="your-firebase-project-id"
export GEMINI_API_KEY="your-gemini-api-key"
export JWT_SECRET="generate-a-random-secret-key"
export FRONTEND_URL="https://your-domain.com"
export NODE_ENV="production"
```

### Step 2: Deploy to Cloud Run

```bash
# Clone the repository
git clone https://github.com/SQLRIZWAN/Whatsapp-ai-agent-Automation-.git
cd Whatsapp-ai-agent-Automation-
git checkout claude/whatsapp-ai-automation-MBek3

# Make deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh $PROJECT_ID us-central1
```

### Step 3: Deploy Frontend to Firebase

```bash
cd frontend
npm install
npm run build

# Login to Firebase
firebase login

# Deploy
firebase deploy --project=$FIREBASE_PROJECT_ID
```

## Detailed Setup

### 1. Create Google Cloud Project

```bash
# Create new project
gcloud projects create whatsapp-ai-bot

# Set as default
gcloud config set project whatsapp-ai-bot

# Enable required APIs
gcloud services enable \
  run.googleapis.com \
  containerregistry.googleapis.com \
  firestore.googleapis.com \
  cloudbuild.googleapis.com \
  cloudresourcemanager.googleapis.com
```

### 2. Setup Firebase

```bash
# Create Firebase project
firebase projects:create whatsapp-ai-bot

# Initialize Firestore
firebase firestore:create --project=whatsapp-ai-bot

# Deploy security rules
firebase deploy --only firestore:rules --project=whatsapp-ai-bot
```

### 3. Configure GitHub Secrets

Add these to your GitHub repository:

```
FIREBASE_PROJECT_ID         = your-firebase-project-id
FIREBASE_PRIVATE_KEY        = your-service-account-private-key
FIREBASE_CLIENT_EMAIL       = your-service-account-email
FIREBASE_DATABASE_URL       = your-firestore-database-url
GEMINI_API_KEY              = your-gemini-api-key
JWT_SECRET                  = your-random-secret-key
GCP_PROJECT_ID              = your-gcp-project-id
GOOGLE_APPLICATION_CREDENTIALS = your-service-account-json
```

### 4. Docker Build & Deploy

```bash
# Build Docker image
cd backend
docker build -t gcr.io/$PROJECT_ID/whatsapp-ai-backend:latest .

# Push to Google Container Registry
docker push gcr.io/$PROJECT_ID/whatsapp-ai-backend:latest

# Deploy to Cloud Run
gcloud run deploy whatsapp-ai-backend \
  --image gcr.io/$PROJECT_ID/whatsapp-ai-backend:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars "\
    NODE_ENV=production,\
    FIREBASE_PROJECT_ID=$FIREBASE_PROJECT_ID,\
    FIREBASE_PRIVATE_KEY=$FIREBASE_PRIVATE_KEY,\
    FIREBASE_CLIENT_EMAIL=$FIREBASE_CLIENT_EMAIL,\
    GEMINI_API_KEY=$GEMINI_API_KEY,\
    JWT_SECRET=$JWT_SECRET,\
    FRONTEND_URL=$FRONTEND_URL" \
  --memory 512Mi \
  --cpu 1 \
  --timeout 3600 \
  --max-instances 100
```

### 5. Configure Custom Domain

```bash
# Map custom domain to Cloud Run
gcloud run services update-traffic whatsapp-ai-backend \
  --region us-central1

# Add domain mapping
gcloud beta run domain-mappings create \
  --service=whatsapp-ai-backend \
  --domain=api.yourdomain.com \
  --region=us-central1
```

### 6. Setup SSL Certificate

```bash
# Use Google-managed SSL certificate
gcloud compute ssl-certificates create whatsapp-ai-cert \
  --domains=api.yourdomain.com

# Configure load balancer with SSL
# (detailed steps in GCP Console)
```

## Environment Variables

### Backend Production (.env)

```
NODE_ENV=production
PORT=5000
API_URL=https://api.yourdomain.com

# Firebase
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-email@....iam.gserviceaccount.com
FIREBASE_DATABASE_URL=https://your-project.firebaseio.com

# Gemini
GEMINI_API_KEY=your-gemini-api-key

# JWT
JWT_SECRET=your-random-secret-key-min-32-chars
JWT_EXPIRY=7d

# Frontend
FRONTEND_URL=https://yourdomain.com

# Logging
LOG_LEVEL=info
LOG_FILE=/var/log/app.log

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend Production (.env)

```
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME=WhatsApp AI Automation
VITE_APP_VERSION=1.0.0
```

## Monitoring & Logging

### Cloud Logging

```bash
# View recent logs
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=whatsapp-ai-backend" \
  --limit 50 \
  --format json
```

### Cloud Monitoring

```bash
# Create alerts for error rate
gcloud alpha monitoring policies create \
  --notification-channels=YOUR_CHANNEL_ID \
  --display-name="WhatsApp AI Error Rate Alert" \
  --condition-display-name="Error Rate > 5%" \
  --condition-threshold-value=0.05
```

## Performance Tuning

### Cloud Run Settings

```yaml
# Optimal settings for this application
max_instances: 100
min_instances: 1
cpu: 1
memory: 512Mi
timeout: 3600
concurrency: 80
```

### Database Optimization

```bash
# Create indexes for common queries
gcloud firestore indexes composite create \
  --collection=messages \
  --field-config field-path=conversationId,order=ascending \
  --field-config field-path=timestamp,order=descending
```

## Backup & Disaster Recovery

### Automated Backups

```bash
# Enable automated daily backups
gcloud firestore backups create \
  --project=$PROJECT_ID \
  --retention=30d
```

### Manual Export

```bash
# Export to Cloud Storage
gcloud firestore export gs://your-bucket/backup-$(date +%s)
```

### Restore from Backup

```bash
# Restore from backup
gcloud firestore restore \
  --backup-name=projects/$PROJECT_ID/locations/us-central1/backups/BACKUP_ID
```

## Scaling Configuration

### Auto-Scaling

Cloud Run automatically scales based on requests:
- Min instances: 1
- Max instances: 100
- Requests per instance: 80

### Load Testing

```bash
# Test with Apache Bench
ab -n 1000 -c 10 https://api.yourdomain.com/health

# Test with wrk
wrk -t4 -c100 -d30s https://api.yourdomain.com/health
```

## Security Checklist

- [ ] Enable Cloud Armor for DDoS protection
- [ ] Configure VPC Service Controls
- [ ] Enable VPC connector for database access
- [ ] Set up Secrets Manager for sensitive data
- [ ] Enable audit logging
- [ ] Configure firewall rules
- [ ] Setup WAF rules
- [ ] Enable SSL/TLS
- [ ] Configure CORS properly
- [ ] Use service accounts with minimal permissions

## Cost Optimization

### Estimated Monthly Costs

- **Cloud Run:** ~$5-20 (based on usage)
- **Firestore:** ~$10-50 (based on operations)
- **Cloud Storage:** ~$2-5 (for media files)
- **Cloud Logging:** ~$5-10

**Total estimate: $22-85/month**

### Cost Reduction Tips

1. Set appropriate max instances limit
2. Use Firestore data retention policies
3. Archive old messages and calls
4. Use Cloud CDN for static assets
5. Optimize database indexes

## Post-Deployment

### Health Check

```bash
# Check backend health
curl https://api.yourdomain.com/health

# Response should be:
# {"status":"ok","timestamp":"...","uptime":...}
```

### Verify Database

```bash
# Check Firestore connection
curl https://api.yourdomain.com/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Test API Endpoints

```bash
# Test registration
curl -X POST https://api.yourdomain.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123","displayName":"Test User"}'

# Test login
curl -X POST https://api.yourdomain.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

## Troubleshooting

### Application Won't Start

```bash
# Check logs
gcloud logging read "resource.type=cloud_run_revision" --limit 50

# Check service status
gcloud run services describe whatsapp-ai-backend --region us-central1

# Check resource usage
gcloud monitoring timeseries list --filter='metric.type=run.googleapis.com/request_count'
```

### Database Connection Issues

```bash
# Test Firestore connectivity
firebase firestore:delete --project=$PROJECT_ID --all-collections

# Redeploy security rules
firebase deploy --only firestore:rules --project=$PROJECT_ID
```

### Performance Issues

```bash
# Check request latency
gcloud monitoring timeseries list --filter='metric.type=run.googleapis.com/request_latencies'

# Scale up if needed
gcloud run services update whatsapp-ai-backend \
  --region us-central1 \
  --max-instances 200
```

## Clean Up

```bash
# Delete Cloud Run service
gcloud run services delete whatsapp-ai-backend --region us-central1

# Delete Docker image
gcloud container images delete gcr.io/$PROJECT_ID/whatsapp-ai-backend:latest

# Delete Firestore database
gcloud firestore databases delete --project=$PROJECT_ID

# Delete project
gcloud projects delete $PROJECT_ID
```

---

**Last Updated:** 2026-04-22
**Status:** Production Ready ✅
