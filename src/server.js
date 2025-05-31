import express from 'express';
import cors from 'cors';
import pino from 'pino';
import pinoHttp from 'pino-http';
import {
  getContactsController,
  getContactByIdController,
} from './controllers/contactsController.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());

  const logger = pino();
  app.use(pinoHttp({ logger }));

  // GET /contacts - всі контакти
  app.get('/contacts', getContactsController);

  // GET /contacts/:contactId - контакт за id
  app.get('/contacts/:contactId', getContactByIdController);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  return app;
};



