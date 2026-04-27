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
