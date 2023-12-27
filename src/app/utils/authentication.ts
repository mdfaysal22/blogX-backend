import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../../config'

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  jwt.verify(token, config.jwtSecret!, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' })
    next()
  })
}

export default authenticateToken
