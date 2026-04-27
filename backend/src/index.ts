import 'dotenv/config'
import { createApp } from './app'
import { startServer } from './server'
import logger from '@shared/utils/logger'

const main = async () => {
  try {
    const app = createApp()
    await startServer(app)
  } catch (error) {
    logger.error('Application startup failed:', error)
    process.exit(1)
  }
}

main()
// Trigger deployment Mon Apr 27 08:09:52 EDT 2026
// Deployment trigger v2 Mon Apr 27 08:25:22 EDT 2026
