import express from "express";
import studentController from "../controller/studentController.js";

const route = express.Router();

route.post("/add", studentController.AddStudent);
route.get("/AllStudent", studentController.getAllStudent);
route.get("/StudentWithId/:id",studentController.StudentFind)
route.delete("/delete/:id", studentController.Delete);
route.patch("/:id",studentController.updateById)


export default route;
