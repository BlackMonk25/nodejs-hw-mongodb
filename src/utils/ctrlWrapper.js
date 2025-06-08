<<<<<<< HEAD
export const ctrlWrapper = (controller) => {
    return async (req, res, next) => {
      try {
        await controller(req, res);
      } catch (err) {
        next(err); // передаємо помилку далі
      }
    };
};
  
// Якщо в контролері виникла помилка — вона потрапить в catch, і вона передається далі

// А Express вже передасть її у  errorHandler.
=======
export const ctrlWrapper = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
>>>>>>> bc491624e7d702211853fd7d9a0859acb17e456f
