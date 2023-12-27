import express from 'express'
import { userController } from './users.controller'

const router = express.Router()

router.post('/create', userController.signup)
router.post('/login', userController.login)

export const userRouter = router
