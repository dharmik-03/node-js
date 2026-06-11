import httpError from "../middleware/httpError.js";
import userModel from "../model/userModel.js";

const Add = async (req, res, next) => {
  try {
    const { name, Email, password } = req.body;

    if (!name || !Email || !password) {
      return next(new httpError("all field are required", 400));
    }

    const newUser = new userModel({
      name,
      Email,
      password,
    });

    await newUser.save();

    res.status(200).json({ success: true, message: "new user added" ,newUser});
  } catch (error) {
    return next(new httpError(error.message, 500));
  }
};

export default { Add };
