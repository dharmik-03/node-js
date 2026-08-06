import Joi from "joi";
import mongoose from "mongoose";

const objectId = (value, helpers) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.message("Invalid Restaurant ID");
    }
    return value;
};

export const register = Joi.object({
    restaurants: Joi.array()
        .items(
            Joi.string()
                .custom(objectId)
                .required()
        )
        .min(1)
        .required()
        .messages({

            "array.min": "At least one restaurant is required",
            "any.required": "Restaurants are required"
        }),

    AccNumber: Joi.string()
        .trim()
        .pattern(/^[0-9]{9,18}$/)
        .required()
        .messages({
            "string.empty": "Account Number is required",
            "string.pattern.base": "Account Number must contain only digits and be 9 to 18 digits long",
            "any.required": "Account Number is required"
        }),
});

