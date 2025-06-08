
import express from 'express';       
import cors from 'cors';             
import pinoHttp from 'pino-http';   
import contactsRoutes from './routes/contactsRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';



export const setupServer = () => {
  const app = express(); 


  app.use(cors());       
  app.use(pinoHttp());   
  app.use(express.json()); 
  
  app.use('/contacts', contactsRoutes);

  
 
app.use(notFoundHandler);  
app.use(errorHandler);     


  
  const PORT = process.env.PORT || 3000;

 
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
};




