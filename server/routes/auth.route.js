import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.get('/signup', authController.signup);

router.get('/login', authController.login);

router.get('/logout', authController.logout);

export default router;