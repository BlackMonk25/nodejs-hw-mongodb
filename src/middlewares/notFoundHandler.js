<<<<<<< HEAD
import createError from 'http-errors';

export const notFoundHandler = (req, res, next) => {
  next(createError(404, 'Route not found'));
};
=======
import createHttpError from 'http-errors';

export const notFoundHandler = (req, res, next) => {
  next(createHttpError.NotFound('Route not found'));
};
>>>>>>> bc491624e7d702211853fd7d9a0859acb17e456f
