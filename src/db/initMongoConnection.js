import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_URL,
    MONGODB_DB,
  } = process.env;

  if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_URL || !MONGODB_DB) {
    console.error('Missing one or more MongoDB environment variables!');
    process.exit(1);
  }

  // Формуємо URI для підключення
  // Приклад URI: mongodb+srv://user:password@cluster0.mongodb.net/dbname?retryWrites=true&w=majority
  const mongoUri = `mongodb+srv://${encodeURIComponent(MONGODB_USER)}:${encodeURIComponent(
    MONGODB_PASSWORD,
  )}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(mongoUri);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection error:', error.message);
    process.exit(1);
  }
};


