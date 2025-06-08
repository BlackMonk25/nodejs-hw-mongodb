
import mongoose from 'mongoose';

export async function initMongoConnection() {
  const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;

  const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

  try {
<<<<<<< HEAD
    await mongoose.connect(connectionString);
    console.log('✅ Mongo connection successfully established!');
  } catch (error) {
    console.error('❌ Mongo connection failed:', error.message);
    process.exit(1); // якщо немає з'єднання - завершує нахуй цю хуйню
=======
    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
      { serverSelectionTimeoutMS: 30000 },
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log(error);
    throw error;
>>>>>>> bc491624e7d702211853fd7d9a0859acb17e456f
  }
}
