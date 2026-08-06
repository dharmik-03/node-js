import { CloudinaryStorage } from "multer-storage-cloudinary";

import multer from "multer";
import path from "path";

import cloudinary from "../config/cloudinary.js";

// const storage = new CloudinaryStorage({
//     cloudinary,
//     params: {
//         folder: "tastyGO",
//         allowed_formats: ["jpg", "jpeg", "png", "webp"],
//         transformation: [
//             {
//                 height: 800,
//                 width: 800,
//                 crop: "limit",
//             },
//             {
//                 fetch_format: "webp",
//             },
//             {
//                 quality: "auto"
//             }
//         ]
//     }
// })

// const upload = multer({
//     storage,
//     limits: {
//         fileSize: 5 * 1024 * 1024
//     }
// })

// export default upload

const createUpload = ({
    folder,
    formats,
    mimeTypes = [],
    transformation,
    fileSize = 5 * 1024 * 1024,
    resource_type = "auto",

}) => {
    const storage = new CloudinaryStorage({
        cloudinary,
        params: async (req, file) => ({
            folder,
            allowed_formats: formats,
            transformation,
            resource_type
        })
    })

    return multer({
        storage,
        limits: { fileSize },
        fileFilter: (req, file, cb) => {
            const ext = path.extname(file.originalname).toLowerCase();

            const allowedExt = [".jpg", ".jpeg", ".png", ".pdf"];

            if (allowedExt.includes(ext)) {
                return cb(null, true);
            }

            return cb(new Error("Only JPG, JPEG, PNG and PDF files are allowed."), false);
        }
    });
}

export const uploadDocument = createUpload({
    folder: "tastyGo/Documents",
    formats: ["jpg", "jpeg", "png", "pdf"],
    mimeTypes: ["image/jpg", "image/jpeg", "image/png", "application/pdf"],
    fileSize: 5 * 1024 * 1024,

    transformation: [{ quality: "auto", fetch_format: "auto" }],

});

