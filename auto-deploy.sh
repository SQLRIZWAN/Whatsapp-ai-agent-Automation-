#!/bin/bash

# Secure auto-deploy helper for Render + Vercel
set -euo pipefail

RENDER_TOKEN="${RENDER_API_TOKEN:-}"
VERCEL_TOKEN="${VERCEL_API_TOKEN:-}"
GITHUB_REPO="${GITHUB_REPO:-SQLRIZWAN/Whatsapp-ai-agent-Automation-}"
BRANCH="${BRANCH:-main}"
RENDER_SERVICE_NAME="${RENDER_SERVICE_NAME:-whatsapp-ai-backend}"
VERCEL_PROJECT_NAME="${VERCEL_PROJECT_NAME:-whatsapp-ai-automation}"
FRONTEND_URL="${FRONTEND_URL:-https://${VERCEL_PROJECT_NAME}.vercel.app}"
BACKEND_URL="${BACKEND_URL:-https://${RENDER_SERVICE_NAME}.onrender.com}"

if [[ -z "$RENDER_TOKEN" || -z "$VERCEL_TOKEN" ]]; then
  echo "Missing required tokens. Set RENDER_API_TOKEN and VERCEL_API_TOKEN."
  exit 1
fi

if [[ -z "${JWT_SECRET:-}" || -z "${FIREBASE_PROJECT_ID:-}" || -z "${FIREBASE_CLIENT_EMAIL:-}" || -z "${FIREBASE_PRIVATE_KEY:-}" || -z "${GEMINI_API_KEY:-}" ]]; then
  echo "Missing required backend env vars."
  echo "Required: JWT_SECRET FIREBASE_PROJECT_ID FIREBASE_CLIENT_EMAIL FIREBASE_PRIVATE_KEY GEMINI_API_KEY"
  exit 1
fi

echo "Deploying backend to Render service: ${RENDER_SERVICE_NAME}"
echo "Deploying frontend to Vercel project: ${VERCEL_PROJECT_NAME}"
echo "GitHub repo: ${GITHUB_REPO} (branch: ${BRANCH})"

# Render service upsert
RENDER_EXISTING=$(curl -s -H "Authorization: Bearer ${RENDER_TOKEN}" "https://api.render.com/v1/services?name=${RENDER_SERVICE_NAME}&limit=20")
RENDER_SERVICE_ID=$(echo "$RENDER_EXISTING" | jq -r --arg n "$RENDER_SERVICE_NAME" '[.[] | select(.service.name==$n)] | .[0].service.id // empty')

if [[ -z "$RENDER_SERVICE_ID" ]]; then
  OWNER_ID=$(curl -s -H "Authorization: Bearer ${RENDER_TOKEN}" "https://api.render.com/v1/owners?limit=1" | jq -r '.[0].owner.id')
  CREATE_PAYLOAD=$(jq -n \
    --arg owner "$OWNER_ID" \
    --arg name "$RENDER_SERVICE_NAME" \
    --arg repo "https://github.com/${GITHUB_REPO}" \
    --arg branch "$BRANCH" \
    --arg frontend "$FRONTEND_URL" \
    --arg jwt "$JWT_SECRET" \
    --arg fpid "$FIREBASE_PROJECT_ID" \
    --arg fem "$FIREBASE_CLIENT_EMAIL" \
    --arg fpk "$FIREBASE_PRIVATE_KEY" \
    --arg gem "$GEMINI_API_KEY" \
    '{
      type:"web_service",
      name:$name,
      ownerId:$owner,
      repo:$repo,
      branch:$branch,
      rootDir:"backend",
      autoDeploy:"yes",
      serviceDetails:{
        env:"node",
        region:"oregon",
        plan:"free",
        runtime:"node",
        healthCheckPath:"/health",
        envSpecificDetails:{
          buildCommand:"npm install --include=dev && npm run build",
          startCommand:"npm start"
        }
      },
      envVars:[
        {key:"NODE_ENV",value:"production"},
        {key:"FRONTEND_URL",value:$frontend},
        {key:"JWT_SECRET",value:$jwt},
        {key:"FIREBASE_PROJECT_ID",value:$fpid},
        {key:"FIREBASE_CLIENT_EMAIL",value:$fem},
        {key:"FIREBASE_PRIVATE_KEY",value:$fpk},
        {key:"GEMINI_API_KEY",value:$gem}
      ]
    }')
  RENDER_CREATE_RESP=$(curl -s -X POST "https://api.render.com/v1/services" \
    -H "Authorization: Bearer ${RENDER_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "$CREATE_PAYLOAD")
  RENDER_SERVICE_ID=$(echo "$RENDER_CREATE_RESP" | jq -r '.service.id // empty')
fi

if [[ -z "$RENDER_SERVICE_ID" ]]; then
  echo "Render service create/resolve failed."
  exit 1
fi

echo "Render service id: ${RENDER_SERVICE_ID}"

# Trigger fresh deploy
curl -s -X POST "https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys" \
  -H "Authorization: Bearer ${RENDER_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"clearCache":"do_not_clear"}' >/dev/null

# Vercel project upsert
VERCEL_LIST=$(curl -s -H "Authorization: Bearer ${VERCEL_TOKEN}" "https://api.vercel.com/v9/projects")
VERCEL_PROJECT_ID=$(echo "$VERCEL_LIST" | jq -r --arg n "$VERCEL_PROJECT_NAME" '.projects[]? | select(.name==$n) | .id' | head -n1)

if [[ -z "$VERCEL_PROJECT_ID" ]]; then
  VERCEL_CREATE=$(curl -s -X POST "https://api.vercel.com/v9/projects" \
    -H "Authorization: Bearer ${VERCEL_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "$(jq -n \
      --arg repo "$GITHUB_REPO" \
      --arg name "$VERCEL_PROJECT_NAME" \
      '{
        name:$name,
        framework:"vite",
        gitRepository:{type:"github",repo:$repo},
        rootDirectory:"frontend"
      }')")
  VERCEL_PROJECT_ID=$(echo "$VERCEL_CREATE" | jq -r '.id // empty')
fi

if [[ -z "$VERCEL_PROJECT_ID" ]]; then
  echo "Vercel project create/resolve failed."
  exit 1
fi

echo "Vercel project id: ${VERCEL_PROJECT_ID}"

# Set frontend env and trigger deployment
curl -s -X POST "https://api.vercel.com/v10/projects/${VERCEL_PROJECT_ID}/env" \
  -H "Authorization: Bearer ${VERCEL_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "$(jq -n --arg key "VITE_API_URL" --arg value "$BACKEND_URL" '{key:$key,value:$value,target:["production"]}')" >/dev/null || true

curl -s -X POST "https://api.vercel.com/v13/deployments" \
  -H "Authorization: Bearer ${VERCEL_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "$(jq -n \
    --arg name "$VERCEL_PROJECT_NAME" \
    --arg repo "$GITHUB_REPO" \
    --arg branch "$BRANCH" \
    '{name:$name,gitSource:{type:"github",repo:$repo,ref:$branch}}')" >/dev/null

echo "Deployment triggers sent."
echo "Backend expected URL: ${BACKEND_URL}"
echo "Frontend expected URL: ${FRONTEND_URL}"
