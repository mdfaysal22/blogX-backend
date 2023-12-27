import mongoose from 'mongoose'
import { IGenericErrorResponse } from '../interfaces/IGenericErrorResponse'
import { IGenericErrorMessage } from '../interfaces/IGenericErrorMessage'
import httpStatus from 'http-status'

export const handleMongooseValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (el: IGenericErrorMessage) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    },
  )

  const statusCode = httpStatus.BAD_REQUEST
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}
