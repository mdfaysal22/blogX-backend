import express from 'express';
import { userRouter } from '../modules/users/users.router';
import { testRoute } from '../modules/testR/testR.routes';

const router = express.Router();

const moduleRouters : any[] = [
    {path: "/user", route : userRouter},
    {path: "/test", route: testRoute}
];

moduleRouters.forEach(route => router.use(route.path, route.route))

export default router