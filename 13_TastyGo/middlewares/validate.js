import httpError from "./httpError.js";

const validate = (schema) => (req, res, next) => {
  try {

    if (req.body.restaurants && !Array.isArray(req.body.restaurants)) {
      req.body.restaurants = [req.body.restaurants];
    }

    const { error, value } = schema.validate(req.body, {
      abortEarly: true,
      allowUnknown: false,
    });

    if (error) {
      return next(new httpError(error.details[0].message, 400));
    }

    req.body = value;

    next();
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

export default validate;