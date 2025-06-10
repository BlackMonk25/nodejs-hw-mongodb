import express from 'express';           
import cors from 'cors';                
import pinoHttp from 'pino-http';       
import cookieParser from 'cookie-parser';

import router from './routers/index.js'; 
import { errorHandler } from './middlewares/errorHandler.js';      
import { notFoundHandler } from './middlewares/notFoundHandler.js'; 
import { UPLOAD_DIR } from './constants/index.js';                  

export const setupServer = () => {
  const app = express(); 

  app.use(cors()); 
  app.use(pinoHttp()); 
  app.use(express.json()); 
  app.use(cookieParser()); 

  app.use('/uploads', express.static(UPLOAD_DIR));

  app.use(router);

  app.use(notFoundHandler); 
  app.use(errorHandler);    

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
};





