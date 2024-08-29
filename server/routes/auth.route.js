import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

// POST Endpoints
router.post('/signup', authController.signup);
router.post('/verify-email', authController.verifyEmail);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/forgot-password', authController.forgotPassword);

// PUT Endpoints
router.put('/reset-password/:token', authController.resetPassword);

export default router;