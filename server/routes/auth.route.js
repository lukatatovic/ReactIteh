import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

// POST Endpoints
router.post('/signup', authController.signup);
router.post('/verify-email', authController.verifyEmail);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

export default router;