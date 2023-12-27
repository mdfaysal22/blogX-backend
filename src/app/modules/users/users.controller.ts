import { NextFunction, Request, Response } from 'express'
import { userService } from './users.service'
import catchAsync from '../../utils/catchAsync'
import response from '../../utils/response'
import httpStatus from 'http-status'

const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body
    const result = await userService.signup(user)

    next()

    response(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Create Successful',
      data: result,
    })
  },
)

const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body
    const result = await userService.login(user)
    next()
    response(res, {
      statusCode: 200,
      success: true,
      message: 'Login successful',
      data: result,
    })
  },
)

export const userController = {
  signup,
  login,
}
