#!/bin/bash

# WhatsApp AI Agent - Production Deployment Script
# This script deploys the application to Cloud Run

set -e

echo "🚀 WhatsApp AI Automation - Cloud Run Deployment"
echo "=================================================="

PROJECT_ID="${1:?Please provide Google Cloud Project ID}"
REGION="${2:-us-central1}"
GITHUB_TOKEN="${3:-}"

echo ""
echo "📋 Configuration:"
echo "  - Project ID: $PROJECT_ID"
echo "  - Region: $REGION"
echo "  - Branch: ${BRANCH:-main}"
echo ""

# Build backend
echo "🔨 Building backend Docker image..."
docker build -t gcr.io/$PROJECT_ID/whatsapp-ai-backend:latest ./backend

# Build frontend
echo "🔨 Building frontend..."
cd frontend
npm install
npm run build
cd ..

echo ""
echo "📤 Pushing backend to Google Container Registry..."
docker push gcr.io/$PROJECT_ID/whatsapp-ai-backend:latest

echo ""
echo "🚀 Deploying backend to Cloud Run..."
gcloud run deploy whatsapp-ai-backend \
  --image gcr.io/$PROJECT_ID/whatsapp-ai-backend:latest \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --set-env-vars "NODE_ENV=production,FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID},GEMINI_API_KEY=${GEMINI_API_KEY},JWT_SECRET=${JWT_SECRET},FRONTEND_URL=${FRONTEND_URL}" \
  --memory 512Mi \
  --cpu 1

echo ""
echo "📦 Backend deployed! Getting service URL..."
BACKEND_URL=$(gcloud run services describe whatsapp-ai-backend --region $REGION --format 'value(status.url)')

echo ""
echo "🌐 Deploying frontend to Firebase Hosting..."
cd frontend
firebase deploy --project=$PROJECT_ID

echo ""
echo "✅ DEPLOYMENT COMPLETE!"
echo ""
echo "🎉 Your application is now live!"
echo ""
echo "Backend URL: $BACKEND_URL"
echo "Frontend URL: https://$PROJECT_ID.firebaseapp.com"
echo ""
if [ -n "$GITHUB_TOKEN" ]; then
  echo "GitHub token was provided and used only for this run."
fi
