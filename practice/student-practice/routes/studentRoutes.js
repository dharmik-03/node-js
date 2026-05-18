import express from "express"
import { AddStudent, getAllStudent,Deletes } from "../controller/studentController.js"


const route = express.Router()

route.post("/add", AddStudent)
route.get("/AllSudent", getAllStudent)
route.delete("/delete/:GRid",Deletes)

export default route