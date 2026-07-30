import express from "express";
import blogController from "../controller/blog.controller.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/upload.js";
import validate from "../middlewares/validate.js";
import {
    createBlogSchema,
    updateBlogSchema,
} from "../validation/blogSchema.js";

import checkRole from "../middlewares/checkRole.js"

const router = express.Router();

router.post(
    "/add",
    auth,
    upload.single("image"),
    validate(createBlogSchema),
    blogController.Add
);

router.get("/getAll", auth, checkRole("user", "admin"), blogController.getAll);


router.patch(
    "/update/:id",
    auth,
    upload.single("image"),
    validate(updateBlogSchema),
    blogController.Update
);

router.delete(
    "/delete/:id",
    auth,
    checkRole("admin", "user"),
    blogController.Delete
);

export default router;