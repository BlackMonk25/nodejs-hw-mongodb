import express from 'express';       // Express — фреймворк для створення сервера
import cors from 'cors';             // CORS — дозволяє іншим сайтам надсилати запити
import pinoHttp from 'pino-http';   // Pino — виводить лог кожного запиту в консоль

import contactsRoutes from './routes/contactsRoutes.js'; // маршрути контактів
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());               // Дозволяє запити з будь-якого джерела
  app.use(pinoHttp({             // Лог кожного запиту
    transport: {
      target: 'pino-pretty',
    },
  }));
  app.use(express.json());       // парсінг тіла запиту

  app.use('/contacts', contactsRoutes);  // маршрути контактів

  app.use(notFoundHandler);      // обробник 404 помилок
  app.use(errorHandler);         // обробник інших помилок

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
};

