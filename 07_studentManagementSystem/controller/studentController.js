import httpError from "../middlewares/httpError.js";
import student from "../model/student.js";

async function AddStudent(req, res, next) {
  try {
    const { name, GRid, course, MobileNumber } = req.body;

    const NewStudent = await new student({
      name,
      GRid,
      course,
      MobileNumber,
    });

    await NewStudent.save();

    res
      .status(201)
      .json({ success: true, message: "student added", NewStudent });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
}

async function getAllStudent(req, res, next) {
  try {
    const AllStudentsData = await student.find();

    if (AllStudentsData.length <= 0) {
      res
        .status(404)
        .json({ success: true, message: "no students data found" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "student data found",
        total: AllStudentsData.length,
        AllStudentsData,
      });
  } catch (error) {
    next(new httpError(error.message, 500))
  }
}

async function Delete(req, res, next) {

  try {

    const { GRid } = req.params

    const find = await student.findOne({ GRid })

    if (!find) {
      return res.status(404)
        .json({ succces: false, message: "student not found" })

    }

    await student.deleteOne({ GRid })

    res.status(200)
      .json({ success: true, message: "student delated succesfully" })

  } catch (error) {
    next(new httpError(error.message, 500));

  }



}

export { AddStudent, getAllStudent,Delete };
