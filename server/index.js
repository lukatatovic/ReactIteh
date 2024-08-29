import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server ready');
});

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  connectDB;
  console.log('Server is running on port 8000');
});