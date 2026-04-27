import { io } from 'socket.io-client'

const API_URL =
  import.meta.env.VITE_API_URL ||
  (window.location.hostname === 'localhost' ? 'http://localhost:5000' : window.location.origin)

export const createSocket = (token: string) => {
  const socket = io(API_URL, {
    transports: ['websocket', 'polling'],
    withCredentials: true,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 2000,
  })

  socket.on('connect', () => {
    socket.emit('authenticate', token)
  })

  return socket
}
