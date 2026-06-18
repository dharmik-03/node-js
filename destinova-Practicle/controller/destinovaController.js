import express from "express";
import packages from "../model/destinovaModel.js";
import cloudinary from "../config/cloudinary.js";
import httpError from "../middlewares/httpError.js";

const addPackages = async function (req, res, next) {
  try {
    const { packageName, packagePrice, Date, destination } = req.body;

    const NewPackage = new packages({
      packageName,
      packagePrice,
      Date,
      destination,
      image: req.file?.path,
      cloudinary_id: req.file?.filename,
    });

    await NewPackage.save();

    res.status(201).json({
      success: true,
      message: "new package added",
      NewPackage,
    });
  } catch (error) {
    next(new httpError(error.message));
  }
};

const GetAllPackage = async (req, res, next) => {
  try {
    const Package = await packages.find();

    if (Package.length <= 0) {
      return res
        .status(404)
        .json({ success: false, message: "no package found" });
    }

    res.status(200).json({ success: true, message: "package found", Package });
  } catch (error) {
    throw next(new httpError(error.message));
  }
};

const GetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Package = await packages.findById(id);

    if (!Package) {
      return res
        .status(404)
        .json({ success: false, message: "package not found" });
    }

    res.status(200).json({ success: true, message: "package found", Package });
  } catch (error) {
    throw next(new httpError(error.message));
  }
};

const DeletePackage = async (req, res, next) => {

  try {

    const id = req.params.id

    const PackageDelete = await Packages.findById(id)

    if (!PackageDelete) {
      return res.status(404).json({ succes: false, message: "no package found" })
    }

    await cloudinary.uploader.destroy(PackageDelete.cloudinary_id)
    await PackageDelete.deleteOne()

    res.status(200).json({ success: true, message: "package deleted successfully" })
  } catch (error) {
    next(new httpError(error.message))
  }

}


export default { addPackages, GetAllPackage, GetById ,DeletePackage};
