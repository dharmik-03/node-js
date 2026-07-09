import httpError from "../middlewares/httpError.js";
import User from "../model/user.model.js";

const addUser = async function (req, res, next) {
  try {
    const { name, email, password, address, MobileNumber, Role } = req.body;

    const newUser = {
      name,
      email,
      password,
      address,
      MobileNumber,
      Role,
    };

    const SaveToNewuser = new User(newUser);

    await SaveToNewuser.save();

    res
      .status(201)
      .json({ success: true, message: "nwe user added", user: SaveToNewuser });
  } catch (error) {
    throw new Error(error.message);
  }
};

const GetById = async function (req, res, next) {
  try {
    const { id } = req.params;

    const findUser = await User.findById(id);

    if (!findUser) {
      return console.log("user not found by id");
    }

    res.status(200).json({ success: true, message: "user found", findUser });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAll = async function (req, res, next) {
  try {
    const findUser = await User.find();

    if (findUser.length === 0) {
      return console.log("user data not found");
    }

    res
      .status(200)
      .json({ success: true, message: "user data found", date: findUser });
  } catch (error) {
    throw new Error(error.message);
  }
};

const login = async function (req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findByCredentials(email, password);

    const token = await user.generateAuthToken();

    res
      .status(200)
      .json({ success: true, message: "user login succesfully", user, token });
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUser = async function (req, res, next) {
  try {
    const user = req.user;

    await user.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "user delete successfully" });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default { addUser, GetById, getAll, login, deleteUser };
