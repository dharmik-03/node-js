import Joi from "joi";

export const createBlogSchema = Joi.object({
    title: Joi.string().min(3).max(100).required().messages({
        "string.empty": "Title is required",
        "string.min": "Title must be at least 3 characters",
        "string.max": "Title can be maximum 100 characters",
        "any.required": "Title is required",
    }),

    description: Joi.string().min(10).required().messages({
        "string.empty": "Description is required",
        "string.min": "Description must be at least 10 characters",
        "any.required": "Description is required",
    }),

    category: Joi.string()
        .valid("Education", "Travel", "Food", "Business", "Other")
        .required()
        .messages({
            "any.only": "Invalid category",
            "any.required": "Category is required",
        }),
});

export const updateBlogSchema = createBlogSchema
    .fork(["title", "description", "category"], (field) => field.optional())
    .or("title", "description", "category")
    .messages({
        "object.missing":
            "Title, Description or Category any one field is required to update",
    });