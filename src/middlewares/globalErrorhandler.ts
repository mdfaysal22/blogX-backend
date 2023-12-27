/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { NextFunction, Request, Response } from 'express'
import { IGenericErrorMessage } from '../interfaces/IGenericErrorMessage'
import config from '../config'
import ApiError from '../interfaces/ApiError'
import { handleMongooseValidationError } from '../errors/handleMongooseValidationError'
import { logger } from '../logger/logger'

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  config.node_env === 'developer'
    ? console.log('Global Error', error)
    : logger.infoLogger.error('Global Error', error)

  let statusCode = 500
  let message = 'Something went wrong'
  let errorMessages: IGenericErrorMessage[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleMongooseValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors: errorMessages,
    stack: config.node_env === 'development' ? error?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
