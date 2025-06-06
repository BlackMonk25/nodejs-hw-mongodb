// import { isHttpError } from 'http-errors';

// export const errorHandler = (err, req, res, next) => {
//   console.error('❌ ErrorHandler:', err);

//   if (isHttpError(err)) {
//     return res.status(err.status).json({
//       status: err.status,
//       message: err.message,
//     });
//   }

  
//   return res.status(500).json({
//     status: 500,
//     message: 'Something went wrong',
//     data: err.message,
//   });
// };

export const errorHandler = (err, req, res, next) => {
  console.error('❌ ErrorHandler:', err);

  const status = err.status || 500;

  res.status(status).json({
    status,
    message: err.message || 'Something went wrong',
    ...(status === 500 && { data: err.message }), 
  });
};
