# API Documentation

## Base URL

```
https://api.yourdomain.com
```

For local development:
```
http://localhost:5000
```

## Authentication

All API endpoints (except login/register) require authentication via JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Response Format

All responses follow this format:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {},
  "timestamp": "2026-04-22T10:30:00.000Z"
}
```

## Error Responses

```json
{
  "success": false,
  "message": "Error description",
  "error": "ERROR_CODE",
  "timestamp": "2026-04-22T10:30:00.000Z"
}
```

---

## Authentication Endpoints

### Register User

**POST** `/api/auth/register`

Register a new user account.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "displayName": "User Name"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "uid": "uuid-string",
      "email": "user@example.com",
      "displayName": "User Name",
      "status": "active"
    },
    "token": "jwt-token-string"
  }
}
```

**Status Codes:**
- `201` - Created
- `400` - Validation error
- `409` - User already exists

---

### Login

**POST** `/api/auth/login`

Login with email and password.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "uid": "uuid-string",
      "email": "user@example.com",
      "displayName": "User Name",
      "status": "active"
    },
    "token": "jwt-token-string"
  }
}
```

**Status Codes:**
- `200` - OK
- `400` - Invalid credentials
- `401` - Unauthorized

---

### Logout

**POST** `/api/auth/logout`

Logout the current user.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

**Status Codes:**
- `200` - OK
- `401` - Unauthorized

---

### Refresh Token

**POST** `/api/auth/refresh`

Refresh JWT token.

**Authentication:** Required (old token)

**Response:**
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "token": "new-jwt-token-string"
  }
}
```

**Status Codes:**
- `200` - OK
- `401` - Invalid token

---

### Get Current User

**GET** `/api/auth/me`

Get current authenticated user's information.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "message": "Success",
  "data": {
    "uid": "uuid-string",
    "email": "user@example.com",
    "displayName": "User Name",
    "status": "active",
    "preferences": {
      "timezone": "UTC",
      "notifications": true,
      "theme": "light"
    }
  }
}
```

**Status Codes:**
- `200` - OK
- `401` - Unauthorized
- `404` - User not found

---

### Update Profile

**PUT** `/api/auth/profile`

Update user profile.

**Authentication:** Required

**Request:**
```json
{
  "displayName": "New Name",
  "preferences": {
    "timezone": "GMT",
    "notifications": false,
    "theme": "dark"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "uid": "uuid-string",
    "email": "user@example.com",
    "displayName": "New Name",
    "preferences": {
      "timezone": "GMT",
      "notifications": false,
      "theme": "dark"
    }
  }
}
```

**Status Codes:**
- `200` - OK
- `400` - Invalid data
- `401` - Unauthorized

---

## WhatsApp Endpoints

### Generate QR Code

**POST** `/api/whatsapp/qr`

Generate a new WhatsApp QR code for connection.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "message": "QR code generated",
  "data": {
    "qrCode": "data:image/png;base64,..."
  }
}
```

**Status Codes:**
- `200` - OK
- `401` - Unauthorized

---

### Get Current QR Code

**GET** `/api/whatsapp/qr`

Retrieve the current QR code.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "message": "QR code retrieved",
  "data": {
    "qrCode": "data:image/png;base64,..."
  }
}
```

**Status Codes:**
- `200` - OK
- `401` - Unauthorized
- `404` - QR code not found or expired

---

### Get Connection Status

**GET** `/api/whatsapp/status`

Get current WhatsApp connection status.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "message": "Connection status retrieved",
  "data": {
    "status": "connected"
  }
}
```

**Status Codes:**
- `200` - OK
- `401` - Unauthorized

---

### Disconnect WhatsApp

**POST** `/api/whatsapp/disconnect`

Disconnect the WhatsApp session.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "message": "Disconnected successfully"
}
```

**Status Codes:**
- `200` - OK
- `401` - Unauthorized

---

### Get Messages

**GET** `/api/whatsapp/messages?limit=50`

Get message history.

**Authentication:** Required

**Query Parameters:**
- `limit` (optional, default: 50) - Number of messages to retrieve

**Response:**
```json
{
  "success": true,
  "message": "Messages retrieved",
  "data": {
    "messages": [
      {
        "messageId": "uuid",
        "from": "+1234567890",
        "to": "+0987654321",
        "content": "Hello there!",
        "type": "text",
        "isFromAI": false,
        "status": "delivered",
        "timestamp": 1713787800000
      }
    ]
  }
}
```

**Status Codes:**
- `200` - OK
- `401` - Unauthorized

---

### Send Message

**POST** `/api/whatsapp/send-message`

Send a WhatsApp message.

**Authentication:** Required

**Request:**
```json
{
  "to": "+1234567890",
  "message": "Hello, this is a test message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent"
}
```

**Status Codes:**
- `200` - OK
- `400` - Invalid request
- `401` - Unauthorized

---

### Get Call History

**GET** `/api/whatsapp/calls?limit=50`

Get call history.

**Authentication:** Required

**Query Parameters:**
- `limit` (optional, default: 50) - Number of calls to retrieve

**Response:**
```json
{
  "success": true,
  "message": "Calls retrieved",
  "data": {
    "calls": [
      {
        "callId": "uuid",
        "from": "+1234567890",
        "to": "+0987654321",
        "callType": "incoming",
        "status": "forwarded",
        "duration": 0,
        "forwardedTo": "+1111111111",
        "timestamp": 1713787800000
      }
    ]
  }
}
```

**Status Codes:**
- `200` - OK
- `401` - Unauthorized

---

## Configuration Endpoints

### Get Configuration

**GET** `/api/config`

Get user's current configuration.

**Authentication:** Required

**Response:**
```json
{
  "success": true,
  "message": "Configuration retrieved",
  "data": {
    "uid": "uuid",
    "systemPrompt": "You are a helpful assistant...",
    "aiModel": "gemini-pro",
    "temperature": 0.7,
    "maxOutputTokens": 2048,
    "callForwarding": {
      "enabled": false,
      "phoneNumber": "",
      "forwardOnNo": false,
      "forwardOnBusy": false
    },
    "messageProcessing": {
      "enabled": true,
      "processImages": true,
      "processVideos": true,
      "maxFileSize": 52428800
    },
    "responseSettings": {
      "autoRespond": true,
      "delaySeconds": 0,
      "typing": false
    }
  }
}
```

**Status Codes:**
- `200` - OK
- `401` - Unauthorized

---

### Update Configuration

**PUT** `/api/config`

Update user's configuration.

**Authentication:** Required

**Request:**
```json
{
  "systemPrompt": "New system prompt...",
  "temperature": 0.8,
  "maxOutputTokens": 3000
}
```

**Response:**
```json
{
  "success": true,
  "message": "Configuration updated",
  "data": {
    "uid": "uuid",
    "systemPrompt": "New system prompt...",
    "temperature": 0.8,
    "maxOutputTokens": 3000
  }
}
```

**Status Codes:**
- `200` - OK
- `400` - Invalid data
- `401` - Unauthorized

---

### Update System Prompt

**PUT** `/api/config/system-prompt`

Update the AI system prompt.

**Authentication:** Required

**Request:**
```json
{
  "systemPrompt": "You are a customer service AI assistant..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "System prompt updated",
  "data": {
    "systemPrompt": "You are a customer service AI assistant..."
  }
}
```

**Status Codes:**
- `200` - OK
- `400` - Invalid system prompt
- `401` - Unauthorized

---

### Update Call Forwarding

**PUT** `/api/config/forwarding`

Configure call forwarding settings.

**Authentication:** Required

**Request:**
```json
{
  "enabled": true,
  "phoneNumber": "+1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Call forwarding updated",
  "data": {
    "callForwarding": {
      "enabled": true,
      "phoneNumber": "+1234567890",
      "forwardOnNo": true,
      "forwardOnBusy": true
    }
  }
}
```

**Status Codes:**
- `200` - OK
- `400` - Invalid phone number
- `401` - Unauthorized

---

### Update AI Settings

**PUT** `/api/config/ai-settings`

Update AI model parameters.

**Authentication:** Required

**Request:**
```json
{
  "temperature": 0.5,
  "maxOutputTokens": 1500
}
```

**Response:**
```json
{
  "success": true,
  "message": "AI settings updated",
  "data": {
    "temperature": 0.5,
    "maxOutputTokens": 1500
  }
}
```

**Status Codes:**
- `200` - OK
- `400` - Invalid parameters
- `401` - Unauthorized

---

## WebSocket Events

Connect to WebSocket at `/socket.io/`

### Authentication

Emit `authenticate` event with JWT token:
```javascript
socket.emit('authenticate', token)
```

### Message Events

Listen for incoming messages:
```javascript
socket.on('message_received', (data) => {
  // Handle incoming message
})
```

### Call Events

Listen for incoming calls:
```javascript
socket.on('call_notification', (data) => {
  // Handle incoming call
})
```

### Status Updates

Listen for status changes:
```javascript
socket.on('status_update', (data) => {
  // Handle status update
})
```

---

## Rate Limiting

- **Default:** 100 requests per 15 minutes per user
- **Response:** `429 Too Many Requests`

## CORS

CORS is enabled for the configured frontend URL only.

## Error Codes

| Code | Meaning |
|------|---------|
| `UNAUTHORIZED` | Missing or invalid authentication |
| `FORBIDDEN` | User not allowed to access resource |
| `NOT_FOUND` | Resource not found |
| `VALIDATION_ERROR` | Invalid input data |
| `DATABASE_ERROR` | Database operation failed |
| `INTERNAL_ERROR` | Server error |
| `RATE_LIMIT` | Too many requests |
| `INVALID_TOKEN` | Invalid JWT token |

---

**Last Updated:** 2026-04-22
