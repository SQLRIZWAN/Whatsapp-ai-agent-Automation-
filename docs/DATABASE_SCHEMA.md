# Database Schema (Firestore)

## Collections Overview

### 1. users/{uid}

Stores user account information.

**Document ID:** `uid` (UUID)

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `uid` | string | Unique user identifier |
| `email` | string | User email address |
| `passwordHash` | string | Hashed password (bcrypt) |
| `displayName` | string | User's display name |
| `createdAt` | timestamp | Account creation date |
| `updatedAt` | timestamp | Last update date |
| `status` | string | Account status: 'active', 'inactive', 'suspended' |
| `preferences.timezone` | string | User timezone (e.g., 'UTC') |
| `preferences.notifications` | boolean | Enable notifications |
| `preferences.theme` | string | UI theme: 'light', 'dark' |

**Example:**

```json
{
  "uid": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "passwordHash": "$2b$10$...",
  "displayName": "John Doe",
  "createdAt": 1713787800000,
  "updatedAt": 1713787900000,
  "status": "active",
  "preferences": {
    "timezone": "UTC",
    "notifications": true,
    "theme": "light"
  }
}
```

**Indexes:**
- `email` (ascending)
- `status` (ascending)
- `createdAt` (descending)

---

### 2. sessions/{uid}/active/{sessionId}

Stores active WhatsApp sessions for each user.

**Document Path:** `sessions/{uid}/active/{sessionId}`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `sessionId` | string | Session identifier |
| `uid` | string | User ID |
| `deviceInfo.id` | string | Device ID |
| `deviceInfo.name` | string | Device name |
| `deviceInfo.clientToken` | string | Baileys client token |
| `qrCode.data` | string | Base64 QR code data |
| `qrCode.expiresAt` | timestamp | QR code expiration time |
| `qrCode.scanned` | boolean | Whether QR was scanned |
| `qrCode.scannedAt` | timestamp | When QR was scanned |
| `whatsappPhone` | string | Connected WhatsApp phone number |
| `connectionStatus` | string | 'disconnected', 'connecting', 'connected' |
| `createdAt` | timestamp | Session creation time |
| `lastActivityAt` | timestamp | Last activity time |
| `expiresAt` | timestamp | Session expiration time |

**Example:**

```json
{
  "sessionId": "session_550e8400_1713787800000",
  "uid": "550e8400-e29b-41d4-a716-446655440000",
  "deviceInfo": {
    "id": "device-1234",
    "name": "My Device",
    "clientToken": "token-xyz"
  },
  "qrCode": {
    "data": "data:image/png;base64,...",
    "expiresAt": 1713791400000,
    "scanned": true,
    "scannedAt": 1713789300000
  },
  "whatsappPhone": "+1234567890",
  "connectionStatus": "connected",
  "createdAt": 1713787800000,
  "lastActivityAt": 1713790200000,
  "expiresAt": 1714392600000
}
```

**Indexes:**
- `connectionStatus` (ascending)
- `createdAt` (descending)
- `expiresAt` (ascending)

---

### 3. configurations/{uid}

Stores user's AI and automation configuration.

**Document ID:** `uid`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `uid` | string | User ID |
| `systemPrompt` | string | AI system prompt (up to 2000 chars) |
| `aiModel` | string | AI model: 'gemini-pro', 'gemini-pro-vision' |
| `temperature` | number | AI temperature (0-1) |
| `maxOutputTokens` | number | Max output tokens (1-4096) |
| `callForwarding.enabled` | boolean | Enable call forwarding |
| `callForwarding.phoneNumber` | string | Forwarding phone number |
| `callForwarding.forwardOnNo` | boolean | Forward on no answer |
| `callForwarding.forwardOnBusy` | boolean | Forward on busy |
| `messageProcessing.enabled` | boolean | Enable message processing |
| `messageProcessing.processImages` | boolean | Process image messages |
| `messageProcessing.processVideos` | boolean | Process video messages |
| `messageProcessing.maxFileSize` | number | Max file size in bytes |
| `responseSettings.autoRespond` | boolean | Enable auto-response |
| `responseSettings.delaySeconds` | number | Delay before responding |
| `responseSettings.typing` | boolean | Show typing indicator |
| `createdAt` | timestamp | Creation time |
| `updatedAt` | timestamp | Last update time |

**Example:**

```json
{
  "uid": "550e8400-e29b-41d4-a716-446655440000",
  "systemPrompt": "You are a helpful customer service AI...",
  "aiModel": "gemini-pro",
  "temperature": 0.7,
  "maxOutputTokens": 2048,
  "callForwarding": {
    "enabled": true,
    "phoneNumber": "+1111111111",
    "forwardOnNo": true,
    "forwardOnBusy": true
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
    "typing": true
  },
  "createdAt": 1713787800000,
  "updatedAt": 1713790200000
}
```

---

### 4. messages/{uid}/history/{messageId}

Stores message history for each user.

**Document Path:** `messages/{uid}/history/{messageId}`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `messageId` | string | Message identifier |
| `uid` | string | User ID |
| `from` | string | Sender's phone number |
| `to` | string | Recipient's phone number |
| `content` | string | Message content |
| `type` | string | 'text', 'image', 'video', 'audio' |
| `mediaUrl` | string | URL to media file (optional) |
| `mediaMetadata.filename` | string | Original filename |
| `mediaMetadata.size` | number | File size in bytes |
| `mediaMetadata.mimeType` | string | MIME type |
| `isFromAI` | boolean | Whether message is from AI |
| `aiResponse.text` | string | AI generated response |
| `aiResponse.model` | string | AI model used |
| `aiResponse.tokensUsed` | number | Tokens used |
| `aiResponse.processedAt` | timestamp | Processing time |
| `status` | string | 'sent', 'delivered', 'read', 'failed' |
| `timestamp` | timestamp | Message time |
| `conversationId` | string | Conversation identifier |

**Example:**

```json
{
  "messageId": "msg-uuid-123",
  "uid": "550e8400-e29b-41d4-a716-446655440000",
  "from": "+1234567890",
  "to": "550e8400-e29b-41d4-a716-446655440000",
  "content": "Hello, how can I help you?",
  "type": "text",
  "isFromAI": true,
  "aiResponse": {
    "text": "Hello, how can I help you?",
    "model": "gemini-pro",
    "tokensUsed": 45,
    "processedAt": 1713787850000
  },
  "status": "delivered",
  "timestamp": 1713787800000,
  "conversationId": "+0987654321_550e8400-e29b-41d4-a716-446655440000"
}
```

**Indexes:**
- `conversationId` + `timestamp` (descending)
- `isFromAI` + `timestamp` (descending)
- `status` + `timestamp` (descending)

---

### 5. calls/{uid}/history/{callId}

Stores call history for each user.

**Document Path:** `calls/{uid}/history/{callId}`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `callId` | string | Call identifier |
| `uid` | string | User ID |
| `from` | string | Caller's phone number |
| `to` | string | Recipient's phone number |
| `callType` | string | 'incoming', 'outgoing' |
| `status` | string | 'missed', 'declined', 'forwarded', 'handled', 'failed' |
| `duration` | number | Call duration in seconds |
| `forwardedTo` | string | Phone number call was forwarded to |
| `aiDecision.decision` | string | 'forward', 'handle', 'decline' |
| `aiDecision.reason` | string | Reason for decision |
| `aiDecision.timestamp` | timestamp | Decision time |
| `timestamp` | timestamp | Call time |

**Example:**

```json
{
  "callId": "call-uuid-456",
  "uid": "550e8400-e29b-41d4-a716-446655440000",
  "from": "+1234567890",
  "to": "550e8400-e29b-41d4-a716-446655440000",
  "callType": "incoming",
  "status": "forwarded",
  "duration": 0,
  "forwardedTo": "+1111111111",
  "aiDecision": {
    "decision": "forward",
    "reason": "Urgent customer issue detected",
    "timestamp": 1713787800000
  },
  "timestamp": 1713787800000
}
```

**Indexes:**
- `status` + `timestamp` (descending)
- `callType` + `timestamp` (descending)
- `timestamp` (descending)

---

### 6. qrCodes/{uid}

Stores QR code data for WhatsApp connection.

**Document ID:** `uid`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `uid` | string | User ID |
| `currentQR.data` | string | Current QR code data (base64) |
| `currentQR.generatedAt` | timestamp | Generation time |
| `currentQR.expiresAt` | timestamp | Expiration time |
| `history` | array | Array of previous QR codes |
| `lastScannedAt` | timestamp | When QR was last scanned |

**Example:**

```json
{
  "uid": "550e8400-e29b-41d4-a716-446655440000",
  "currentQR": {
    "data": "data:image/png;base64,...",
    "generatedAt": 1713787800000,
    "expiresAt": 1713791400000
  },
  "history": [
    {
      "data": "data:image/png;base64,...",
      "generatedAt": 1713784200000,
      "scannedAt": 1713785100000
    }
  ],
  "lastScannedAt": 1713785100000
}
```

---

### 7. deviceTokens/{uid}/{tokenId}

Stores API tokens for user sessions.

**Document Path:** `deviceTokens/{uid}/{tokenId}`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `tokenId` | string | Token identifier |
| `uid` | string | User ID |
| `token` | string | JWT token |
| `deviceType` | string | 'web', 'mobile' |
| `lastUsed` | timestamp | Last usage time |
| `expiresAt` | timestamp | Token expiration time |

---

### 8. auditLogs/{uid}/{logId}

Stores audit trail for security and debugging.

**Document Path:** `auditLogs/{uid}/{logId}`

**Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `logId` | string | Log identifier |
| `uid` | string | User ID |
| `action` | string | Action performed |
| `resource` | string | Resource affected |
| `changes` | object | Changes made |
| `status` | string | 'success', 'failure' |
| `error` | string | Error message if failed |
| `ipAddress` | string | IP address |
| `userAgent` | string | User agent string |
| `timestamp` | timestamp | Log time |

---

## Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
    }

    match /sessions/{uid}/active/{sessionId} {
      allow read, write: if request.auth.uid == uid;
    }

    match /configurations/{uid} {
      allow read, write: if request.auth.uid == uid;
    }

    match /messages/{uid}/history/{messageId} {
      allow read: if request.auth.uid == uid;
      allow create: if request.auth.uid == uid && request.resource.data.uid == uid;
      allow update, delete: if request.auth.uid == uid;
    }

    match /calls/{uid}/history/{callId} {
      allow read: if request.auth.uid == uid;
      allow create: if request.auth.uid == uid;
      allow update, delete: if request.auth.uid == uid;
    }

    match /qrCodes/{uid} {
      allow read, write: if request.auth.uid == uid;
    }

    match /deviceTokens/{uid}/{tokenId} {
      allow read, write: if request.auth.uid == uid;
    }

    match /auditLogs/{uid}/{logId} {
      allow read: if request.auth.uid == uid;
      allow create: if request.auth.uid == uid;
    }
  }
}
```

---

## Indexing Strategy

**Composite Indexes:**

1. **Messages by conversation:**
   - Collection: `messages/{uid}/history`
   - Fields: `conversationId` (Asc), `timestamp` (Desc)

2. **Messages by AI response:**
   - Collection: `messages/{uid}/history`
   - Fields: `isFromAI` (Asc), `timestamp` (Desc)

3. **Calls by type:**
   - Collection: `calls/{uid}/history`
   - Fields: `callType` (Asc), `timestamp` (Desc)

4. **Sessions by status:**
   - Collection: `sessions/{uid}/active`
   - Fields: `connectionStatus` (Asc), `createdAt` (Desc)

---

## Data Retention

- **Messages:** Retained indefinitely (consider archiving after 1 year)
- **Call logs:** Retained for 90 days
- **Sessions:** Expired sessions deleted after 7 days
- **Audit logs:** Retained for 180 days
- **QR code history:** Retained for 30 days

---

## Backup Strategy

- Enable automatic daily backups in Firebase Console
- Export data weekly to Cloud Storage
- Keep 30-day backup retention

---

**Last Updated:** 2026-04-22
