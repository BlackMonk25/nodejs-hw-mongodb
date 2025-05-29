import express from 'express';
import contactsRouter from './routes/contactsRouter.js';

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(contactsRouter);

  app.use((req, res) => {
    res.status(404).json({ status: 404, message: 'Not found' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
};

