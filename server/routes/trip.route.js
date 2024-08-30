import express from 'express';
import * as tripController from '../controllers/trip.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

// POST Endpoints
router.post('/', verifyToken, tripController.createTrip);

// GET Endpoints
router.get('/', verifyToken, tripController.getTrips);

export default router;