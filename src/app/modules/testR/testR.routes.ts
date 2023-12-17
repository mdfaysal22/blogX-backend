import express from 'express';
import { testController } from './testR.controller';
import authenticateToken from '../../utils/authentication';

const router = express.Router();

router.post("/create", authenticateToken, testController.create);
// router.get("/", authenticateToken, )

export const testRoute = router;