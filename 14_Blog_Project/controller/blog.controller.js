import Blog from "../model/blog.model.js";
import cloudinary from "../config/cloudinary.js";
import httpError from "../middlewares/httpError.js";

const Add = async (req, res, next) => {
  try {
    const { title, description, category } = req.body;

    const blog = await Blog.create({
      title,
      description,
      category,
      author: req.user._id,
      image: req.file?.path,
      cloudinary_id: req.file?.filename,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

const getAll = async (req, res, next) => {
  try {
    const blogs = await Blog.find().populate(
      "author",
      "name email Role"
    );

    res.status(200).json({
      success: true,
      total: blogs.length,
      blogs,
    });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};


const Update = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(new httpError("Blog not found", 404));
    }

    const updates = Object.keys(req.body);

    const allowedFields = [
      "title",
      "description",
      "category",
    ];

    const isValid = updates.every((field) =>
      allowedFields.includes(field)
    );

    if (!isValid) {
      return next(new httpError("Invalid update field", 400));
    }

    updates.forEach((field) => {
      blog[field] = req.body[field];
    });

    if (req.file) {
      if (blog.cloudinary_id) {
        await cloudinary.uploader.destroy(blog.cloudinary_id);
      }

      blog.image = req.file.path;
      blog.cloudinary_id = req.file.filename;
    }

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

const Delete = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(new httpError("Blog not found", 404));
    }

    if (blog.cloudinary_id) {
      await cloudinary.uploader.destroy(blog.cloudinary_id);
    }

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

export default {
  Add,
  getAll,
  Update,
  Delete,
};