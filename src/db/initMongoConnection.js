import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const initMongoConnection = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    const dbName = process.env.MONGODB_DB;

    if (!uri) throw new Error('MONGODB_URI is not defined in .env');
    if (!dbName) throw new Error('MONGODB_DB is not defined in .env');

    await mongoose.connect(uri, { dbName });

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export { initMongoConnection };










