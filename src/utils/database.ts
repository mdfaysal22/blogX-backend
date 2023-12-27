import mongoose from 'mongoose'
import config from '../config'
import { logger } from '../logger/logger'

const database = async () => {
  if (config.database_url) {
    await mongoose.connect(config.database_url)
    logger.infoLogger.info('DB Connected')
  } else {
    logger.errorLogger.error('Database URL not founded !!')
  }
}

export default database
