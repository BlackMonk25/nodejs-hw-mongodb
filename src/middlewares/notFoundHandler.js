import createHttpError from 'http-errors';

export const notFoundHandler = (req, res, next) => {
  next(createHttpError.NotFound('Route not found'));
};