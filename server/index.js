import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {connectDB} from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';

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

app.listen(port, () => {
  connectDB;
  console.log('Server is running on port 8000');
});