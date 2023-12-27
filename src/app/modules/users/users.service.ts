import config from '../../../config'
import { logger } from '../../../logger/logger'
import { IUser, IUserLogin } from './users.interface'
import { User } from './users.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signup = async (user: IUser): Promise<IUser | null> => {
  const existingUser = await User.findOne({ email: user.email })
  user = {
    name: user.name,
    password: await bcrypt.hash(user.password, 10),
    email: user.email,
    role: user.role || 'user',
  }
  if (!existingUser) {
    const result = await User.create(user)
    return result
  } else {
    logger.infoLogger.info('User already exists')
    return null
  }
}

const login = async (user: IUserLogin) => {
  const existingUser = await User.findOne({ email: user.email })
  if (existingUser) {
    const isValidPassword = await bcrypt.compare(
      user.password,
      existingUser?.password,
    )
    if (isValidPassword) {
      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser?._id,
        },
        config.jwtSecret!,
        { expiresIn: '1h' },
      )
      return token
    } else {
      logger.errorLogger.error('Authentication Error')
    }
  } else {
    logger.errorLogger.error('Authentication Error')
  }
}

export const userService = {
  signup,
  login,
}
