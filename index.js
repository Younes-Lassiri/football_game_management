import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js'

dotenv.config();

const app = express();


app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error', err);
  }
};



app.use('/api/auth',authRoutes )




const PORT =  8000;
app.listen(PORT, () => {
connectDB();

  console.log(`Server is running on port ${PORT}`);
});
