import app from './app'
import config from './config'
import { logger } from './logger/logger'
import database from './utils/database'

const run = async () => {
  try {
    await database()
    app.listen(config.port, () => {
      logger.infoLogger.info(`Server is running at ${config.port} `)
    })
  } catch (error) {
    logger.errorLogger.error('Error: ', error)
  }
}

run()
