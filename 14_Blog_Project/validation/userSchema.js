import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 2 characters",
    "any.required": "Name is required",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Enter a valid email",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters",
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),

  MobileNumber: Joi.string()
    .pattern(/^(\+91)?[6-9]\d{9}$/)
    .required()
    .messages({
      "string.pattern.base": "Enter a valid 10-digit Indian mobile number",
      "string.empty": "Mobile number is required",
      "any.required": "Mobile number is required",
    }),

  address: Joi.string().min(5).required().messages({
    "string.min": "Address must be at least 5 characters",
    "string.empty": "Address is required",
    "any.required": "Address is required",
  }),
  Role: Joi.string()
    .valid("user", "admin")
    .default("user")
    .messages({
      "any.only": "Role must be either user or admin",
    }),
});


export const updateUserSchema = registerSchema
  .fork(
    ["name", "address"],
    (field) => field.optional()
  )
  .fork(
    ["email", "password", "MobileNumber", "Role"],
    (field) => field.forbidden()
  )
  .or("name", "address")
  .messages({
    "object.missing":
      "Name, Address or Image any one field is required to update",
  });