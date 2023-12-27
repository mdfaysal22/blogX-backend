import { NextFunction, Request, Response } from 'express'
import { userService } from './users.service'

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body
    const result = await userService.signup(user)
    res.status(200).json({
      status: 200,
      message: 'User create Success',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body
    const result = await userService.login(user)
    res.status(200).json({
      status: 200,
      message: 'Login Successful',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  signup,
  login,
}
