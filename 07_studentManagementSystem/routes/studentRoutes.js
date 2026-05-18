import express from "express";
import {AddStudent ,getAllStudent,Delete} from "../controller/studentController.js";

const route = express.Router();

route.post("/add", AddStudent);
route.get("/AllStudent", getAllStudent);
route.delete("/delete/:GRid", Delete);

export default route;
