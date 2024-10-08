import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {connectDB} from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import tripRoutes from './routes/trip.route.js';
import categoryRoutes from './routes/category.route.js';
import transactionRoutes from './routes/transaction.route.js';

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Server ready');
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/transactions', transactionRoutes);

app.listen(port, () => {
  connectDB;
  console.log('Server is running on port 8000');
});