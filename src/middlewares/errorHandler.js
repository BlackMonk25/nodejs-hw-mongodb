

export const errorHandler = (err, req, res, next) => {
  console.error('❌ ErrorHandler:', err);

  const status = err.status || 500;

  res.status(status).json({
    status,
    message: err.message || 'Something went wrong',
    ...(status === 500 && { data: err.message }), 
  });
};

