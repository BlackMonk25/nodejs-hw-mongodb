<<<<<<< HEAD
// 1. Імпортуємо бібліотеки
import express from 'express';       // Express — фреймворк для створення сервера
import cors from 'cors';             // CORS — дозволяє іншим сайтам надсилати запити
import pinoHttp from 'pino-http';    // Pino — виводить лог кожного запиту в консоль
import contactsRoutes from './routes/contactsRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
=======
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { getEnvVar } from './utils/getEnvVar.js';

import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import contactRoute from './routers/contacts.js';

const PORT = getEnvVar('PORT', '3000');

export const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
>>>>>>> bc491624e7d702211853fd7d9a0859acb17e456f

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

<<<<<<< HEAD
// 2. Створюємо функцію setupServer
export const setupServer = () => {
  const app = express(); // створення екземпляру сервера

  // 3. Підключення middleware
  app.use(cors());        // Дозволяє запити з будь-якого джерела
  app.use(pinoHttp());    // Лог кожного запиту
  app.use(express.json()); //парсінг тіла запиту
  
  app.use('/contacts', contactsRoutes);//маршрути контактів
//4. підключення обробників помилок
  
  // 4. Підключення обробників помилок
app.use(notFoundHandler);  // ловить 404
app.use(errorHandler);     // ловить все інше


  // 5. Отримуємо порт зі змінної оточення або 3000
  const PORT = process.env.PORT || 3000;
=======
  app.use('/contacts', contactRoute); 

  app.use(notFoundHandler);
  app.use(errorHandler);
>>>>>>> bc491624e7d702211853fd7d9a0859acb17e456f

  // 6. Запускаємо сервер
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
};

<<<<<<< HEAD
=======




>>>>>>> bc491624e7d702211853fd7d9a0859acb17e456f
