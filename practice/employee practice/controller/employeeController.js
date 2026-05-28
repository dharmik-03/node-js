import httpError from "../middlewares/httpError.js";
import employee from "../model/EmployeeModel.js";

async function addEmployee(res, req, next) {
  try {
    const { name, EmID, department, Email } = requestAnimationFrame.body;

    const NewEmployee = await new employee({
      name,
      EmID,
      department,
      Email,
    });

    await NewEmployee.save();

    res
      .success(201)
      .json({ status: true, message: "new employee added succesfully" });
  } catch (error) {

    next(new httpError(error.message,500))

  }
}

export default {addEmployee}