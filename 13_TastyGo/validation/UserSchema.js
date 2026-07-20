import Joi from "joi";

export const register = Joi.object({
  name: Joi.string().min(2).max(50).trim().required().messages({
    "string.base": "must be a string",
    "string.min": "minmun 2 character required",
    "string.max": "maximum 50 character",
    "string.empty": "name is required",
    "any.required": "name is required",
  }),
  email: Joi.string().email().trim().required().messages({
    "string.base": "email must be string",
    "string.email": "enter valid email",
    "string.empty": "email is required",
    "any.required": "email is required",
  }),
  password: Joi.string().min(6).max(12).required().messages({
    "string.base": "password must be string",
    "string.min": "password must be minimum 6 character",
    "string.max": "password can set upto max 12 character",
    "string.empty": "password is required",
    "any.required": "password is required",
  }),

  address: Joi.string().min(5).max(100).required().messages({
    "string.base": " address must be string",
    "string.min": "address can set minimum 5 character",
    "string.max": "address can set maximum 100 character",
    "string.empty": "address is required",
    "any.required": "address is required",
  }),
  MobileNumber: Joi.string()
    .pattern(/^(\+91)?[6-9]\d{9}$/)
    .required()
    .messages({
      "string.base": "mobile number must be string",
      "string.empty": "mobile number is required",
      "string.pattern.base": "enter a valid 10-digit indian mobile number",
      "any.required": "Mobile number is required",
    }),
  Role: Joi.string()
    .valid("user", "provider")
    .default("user"),
});


export const updateUserSchema = register
  .fork(["name", "address", "password", "MobileNumber"], (fields) => fields.optional())
  .fork(["Role", "email"], (fields) => fields.forbidden())
  .or("name", "address", "password", "MobileNumber")
  .messages({
    "object.missing":
      "Name, Address, Phone and Password  any one required to update"
  })

