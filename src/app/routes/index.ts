import express from 'express'
import { userRouter } from '../modules/users/users.router'

const router = express.Router()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const moduleRouters: any[] = [{ path: '/user', route: userRouter }]

moduleRouters.forEach(route => router.use(route.path, route.route))

export default router
