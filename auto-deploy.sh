#!/bin/bash

# WhatsApp AI Agent - Complete Auto-Deployment Script
# This script handles BOTH Render and Vercel deployment via APIs

set -e

echo "🚀 WhatsApp AI Automation - Full Stack Auto-Deploy"
echo "===================================================="
echo ""

# Configuration
RENDER_TOKEN="${RENDER_API_TOKEN:-rnd_2SelzueR3PwG3dDruXeO0Vli7jZf}"
VERCEL_TOKEN="${VERCEL_API_TOKEN:-vcp_3AnEqHNnVDBRn7hPCtUFwlNt6jIAqXLk4KOLQwiZPkUcbrHvlJ0UmcRh}"
GITHUB_REPO="SQLRIZWAN/Whatsapp-ai-agent-Automation-"
BRANCH="claude/whatsapp-ai-automation-MBek3"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_step() {
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLUE}▶ $1${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

print_success() {
  echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
  echo -e "${RED}❌ $1${NC}"
}

print_warning() {
  echo -e "${YELLOW}⚠️  $1${NC}"
}

# ============================================
# STEP 1: Deploy Backend to Render
# ============================================
print_step "STEP 1: Deploying Backend to Render.com"

echo "Creating web service..."
RENDER_RESPONSE=$(curl -s -X POST https://api.render.com/v1/services \
  -H "Authorization: Bearer $RENDER_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<RENDER_PAYLOAD
{
  "type": "web_service",
  "name": "whatsapp-ai-backend",
  "repo": "https://github.com/$GITHUB_REPO",
  "branch": "$BRANCH",
  "rootDir": "backend",
  "buildCommand": "npm install && npm run build",
  "startCommand": "npm start",
  "envVars": [
    {"key": "NODE_ENV", "value": "production"},
    {"key": "PORT", "value": "5000"},
    {"key": "API_URL", "value": "https://whatsapp-ai-backend.onrender.com"},
    {"key": "JWT_SECRET", "value": "sql_rrr_secure_jwt_token_2026_xyz"},
    {"key": "FIREBASE_PROJECT_ID", "value": "whatsapp-ai-agent-fed73"},
    {"key": "FIREBASE_CLIENT_EMAIL", "value": "firebase-adminsdk-fbsvc@whatsapp-ai-agent-fed73.iam.gserviceaccount.com"},
    {"key": "FIREBASE_PRIVATE_KEY", "value": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVjYcg5g3QTeo3\n9g9Y+a64aL1bz0gzmv3xOH+gR6/nDAXTfUkKc6eXMrmv6OlBObDnGytoN0LBMvoE\nnBaMytYkdcjpHKpUn0Hhl7KnoGEMl7zoswUxKqulNobNSdGv5vXQNuuann7NOMll1\nn9ttZ0lG7a3G9n83asVjaqlvkeG08C+ofWk70NI7Utt+SBKA9SGXjfIfLhzzElY+0\nnOoBUyXzayWbKgPo7g4vQgxp6SvtMd3N+/i5BjMBssFUNYlBq5yZHGHWAmxDjflCp\nng5XZ70BpV2Po1P9BWmPjs6NiDCnMOPu5sK8H1lrPXwiptngFhIEmkw62s1tkUTF3\nnYu+GQHQ3AgMBAAECggEATKHIW1RioZzMDz/TmxSiD5e6V79GxAn61Xx2Q/BlnW4R\nniyZ6tu7wtU+lFYxm4IwQwKXdyjyGTmj6EcZqHVDKftAWPKl5urtS8RRfliNary5y\nn/EtzEpplNSvw+wY/FvPWuPSYP4+N2uGSuCOY7B5tpUk1nBvD1ZXtci2oYZibbj+a\nnWbEojdluLRLn9x/jbAeEnMPl3/MGLVRw8SG6VbjO6p3UnbtNlcYLjoSnjmtElyqe\nnaMMMo/gSaJ543tzRWJyhfHt63kpRjKKfcMByp3Yu/VgDDEhN7luzSmeGyDcEQLDp\nnnrpS41hngCWu4B1X9H7ODofQQw55o54h1IlhLlP0QuQKBgQDzAj8qb2DckHt9p1l/\nnfUk4Sow1ThTaGROd2iiDbvYyw/grZlDDycSE84rpPri6WMkUF1/b5Jn999Guufhc\nnnnKZF1mc1qg7lmqMl6TFMF6QFjBb+Q/Khb/8sCREWKHbGpaVlKRlr85Sp1q1NX6ra\nnnjW0Y19q+Nhbzc+Aml80KT+LLGQKBgQDg+CeyR/SQr0d4bXWgCQBlceYhwimnCx6D\nnndgk4T7k2L5AVzlkAxcIrS9jV9luTNBqlA3HqVH5NYt8wS8lZyCsuSsoWFtX0DfKC\nnnmUPz8xAOjl6ndy7bTHsccXSpaQvrhEQsnb8+0yWMQWgdCmA2WT2KjFictFN9OfmF\nn76zTZ/lzzwKBgQC+Q1QRdYLxLm6BwzVfjEh3umZsleXdnSSuwtBVl9tLhAQadXKi\nn2Kb1MXnhhSo9PKazBFoZYLLxFccmdpTubfgBVg0ZBzzsvBZg6GOgoCHb9gNKsQiX\nnnPYkcgTzPjH7yqV8GBVfSHbSYBW1K10x+MZzphpfNtavikSc/EDuJh2KagQKBgQCT\nncRBTP+WBjd8Bhnu4zy1o9UUmiulRoG/3KL0SMu3oHXQlVWvVHccMKUGLuVJ7P4LW\nn81MNiSLeBRbRyFnGhflG/O1FXOlMebee8GQg1gSlBlbaKrqC77UgBxu2jCpLyPwF\nnnYb2dpzTMn3Fk1xAHjqVO0Hyi92xgfkaTCWnzhATa8QKBgEMXUwQPQ1p1q/Neb8Wp\nnnntS6+1EgFN9s2ZAP8YpWV7N7Y2rslt2cSBH3z6eKPD0L/mQgOCz7p5lKtgpnaUWs8\nnn9D6X+MO5EZgZE5p0+y4UaoXTxDckE9BOjjiBZCuwlQfPx1QsWMaZ3yEesVUDldi1\nnlscF2AbWESj1bOiv3HHONUzc\n-----END PRIVATE KEY-----\n"},
    {"key": "FIREBASE_DATABASE_URL", "value": "https://whatsapp-ai-agent-fed73.firebaseio.com"},
    {"key": "GEMINI_API_KEY", "value": "AIzaSyCh03ZDm1lflX595rVHwsBD3l43nn5azyg"},
    {"key": "LOG_LEVEL", "value": "info"},
    {"key": "USE_FIRESTORE_EMULATOR", "value": "false"}
  ],
  "plan": "free"
}
RENDER_PAYLOAD
)

RENDER_SERVICE_ID=$(echo "$RENDER_RESPONSE" | grep -o '"id":"[^"]*' | head -1 | cut -d'"' -f4)

if [ -z "$RENDER_SERVICE_ID" ] || echo "$RENDER_RESPONSE" | grep -q "error"; then
  print_error "Failed to create Render service"
  print_warning "Response: $RENDER_RESPONSE"
  print_warning "You may need to manually create the service. See PRODUCTION_DEPLOYMENT_READY.md"
else
  print_success "Render service created: $RENDER_SERVICE_ID"
  print_warning "Build may take 5-10 minutes. Check Render dashboard for progress."
fi

echo ""

# ============================================
# STEP 2: Deploy Frontend to Vercel
# ============================================
print_step "STEP 2: Deploying Frontend to Vercel"

echo "Importing project to Vercel..."
VERCEL_RESPONSE=$(curl -s -X POST https://api.vercel.com/v9/projects \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d @- <<VERCEL_PAYLOAD
{
  "gitRepository": {
    "repo": "$GITHUB_REPO",
    "type": "github"
  },
  "name": "whatsapp-ai-automation",
  "rootDirectory": "frontend",
  "buildCommand": "npm run build",
  "framework": "vite",
  "env": [
    {"key": "VITE_API_URL", "value": "https://whatsapp-ai-backend.onrender.com"},
    {"key": "VITE_APP_NAME", "value": "WhatsApp AI Automation"},
    {"key": "VITE_APP_VERSION", "value": "1.0.0"}
  ]
}
VERCEL_PAYLOAD
)

VERCEL_PROJECT_ID=$(echo "$VERCEL_RESPONSE" | grep -o '"id":"[^"]*' | head -1 | cut -d'"' -f4)

if [ -z "$VERCEL_PROJECT_ID" ] || echo "$VERCEL_RESPONSE" | grep -q "error"; then
  print_error "Failed to create Vercel project"
  print_warning "Response: $VERCEL_RESPONSE"
  print_warning "You may need to manually create the project. See PRODUCTION_DEPLOYMENT_READY.md"
else
  print_success "Vercel project created: $VERCEL_PROJECT_ID"
  print_warning "Build may take 3-5 minutes. Check Vercel dashboard for progress."
fi

echo ""

# ============================================
# STEP 3: Provide Deployment Information
# ============================================
print_step "DEPLOYMENT INFORMATION"

echo "📋 Service IDs:"
echo "  Render Backend Service ID: $RENDER_SERVICE_ID"
echo "  Vercel Frontend Project ID: $VERCEL_PROJECT_ID"
echo ""

echo "🌐 Expected Live URLs (after build completes):"
echo "  Backend: https://whatsapp-ai-backend.onrender.com"
echo "  Frontend: https://whatsapp-ai-automation.vercel.app"
echo ""

print_warning "⏳ Deployments are in progress (5-10 minutes total)"
print_warning "📊 Monitor progress:"
echo "  • Render: https://dashboard.render.com"
echo "  • Vercel: https://vercel.com/dashboard"
echo ""

print_success "Setup complete! Check dashboards for deployment status."
