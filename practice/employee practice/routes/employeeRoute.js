import express from "express";
import employee from "../controller/employeeController.js";

const route = express.Router();

route.post("/addEmployee", employee.addEmployee);

export default route;
