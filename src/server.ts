import app from './app'
import config from './config'
import { logger } from './logger/logger'
import database from './utils/database'
import { Server } from 'http'

// Handled UnCaught Exception
process.on('uncaughtException', error => {
  logger.errorLogger.error('Uncaught Exception.....', error)
  process.exit(1)
})

let server: Server
const run = async () => {
  try {
    await database()
    server = app.listen(config.port, () => {
      logger.infoLogger.info(`Server is running at ${config.port} `)
    })
  } catch (error) {
    logger.errorLogger.error('Error: ', error)
  }

  // Unhandled Rejection
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        logger.errorLogger.error('Unhandled Promise Rejection', error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

run()

// SIGTERM Signal Received
process.on('SIGTERM', () => {
  logger.infoLogger.info('Received a SIGTERM signal')
  if (server) {
    server.close(error => {
      if (!error) {
        logger.infoLogger.info('Server closed successfully!')
      } else {
        logger.errorLogger.error('Failed to close the server', error)
      }
    })
  }
})
