import Joi from "joi";

export const restaurant = Joi.object({
    RestaurantName: Joi.string().min(2).max(100).trim().required().messages({
        "string.base": "Restaurant name must be a string",
        "string.min": "Restaurant name must contain at least 2 characters",
        "string.max": "Restaurant name can contain a maximum of 100 characters",
        "string.empty": "Restaurant name is required",
        "any.required": "Restaurant name is required",
    }),

    Description: Joi.string().max(500).messages({
        "string.base": "Description must be a string",
        "string.max": "Description can contain a maximum of 500 characters",
    }),

    Location: Joi.string().min(5).max(150).required().messages({
        "string.base": "Location must be a string",
        "string.min": "Location must contain at least 5 characters",
        "string.max": "Location can contain a maximum of 150 characters",
        "string.empty": "Location is required",
        "any.required": "Location is required",
    }),

    City: Joi.string().min(2).max(50).required().messages({
        "string.base": "City must be a string",
        "string.min": "City must contain at least 2 characters",
        "string.max": "City can contain a maximum of 50 characters",
        "string.empty": "City is required",
        "any.required": "City is required",
    }),

    State: Joi.string().min(2).max(50).required().messages({
        "string.base": "State must be a string",
        "string.min": "State must contain at least 2 characters",
        "string.max": "State can contain a maximum of 50 characters",
        "string.empty": "State is required",
        "any.required": "State is required",
    }),

    isOpen: Joi.boolean().default(true),

    ContactNumber: Joi.string()
        .pattern(/^(\+91)?[6-9]\d{9}$/)
        .required()
        .messages({
            "string.base": "Contact number must be a string",
            "string.empty": "Contact number is required",
            "string.pattern.base": "Enter a valid 10-digit Indian mobile number",
            "any.required": "Contact number is required",
        }),

    OpeningTime: Joi.string().required().messages({
        "string.base": "Opening time must be a string",
        "string.empty": "Opening time is required",
        "any.required": "Opening time is required",
    }),

    ClosingTime: Joi.string().required().messages({
        "string.base": "Closing time must be a string",
        "string.empty": "Closing time is required",
        "any.required": "Closing time is required",
    }),

    Image: Joi.string().messages({
        "string.base": "Image must be a string",
        "string.empty": "Image is required",
        // "any.required": "Image is required",
    }),


});


