import httpError from "../middlewares/httpError.js";
import User from "../model/user.model.js";
import cloudinary from "../config/cloudinary.js";

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
      Image: req.file?.path,
      cloudinary_id: req.file.filename,
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

const authLogin = async function (req, res, next) {
  try {

    const user = req.user

    if (!user) {
      return next(new httpError("invalid token"))
    }

    res.status(200).json({ success: true, message: "authLogin Successfully" })

  } catch (error) {
    throw new Error(error.message)

  }
}

const logout = async function (req, res, next) {

  try {

    const user = req.user

    user.tokens = user.tokens.filter((t) =>
      t.token != req.token
    )

    await user.save()

    res.status(200).json({ success: true, message: "user logout successfull" })

  } catch (error) {
    throw new Error(error.message)
  }

}

const logoutAll = async function (req, res, next) {
  try {

    const user = req.user

    user.tokens = []


    await user.save()

    res.status(200).json({ success: true, message: "All device logout successfully" })
  } catch (error) {
    throw new Error(error.message)
  }
}


const update = async function (req, res, next) {
  try {

    const user = req.user

    const update = Object.keys(req.body)

    const allowedField = ["name", "password","image"]

    const isValid = update.every((f) =>
      allowedField.includes(f)

    )

    if (!isValid) {
      return next(new httpError("only allowed field can be updated"))
    }

    update.forEach((update) =>
      user[update] = req.body[update]
    )

    await cloudinary.uploader.destroy(user.cloudinary_id)

    user.image = req.file.path
    user.cloudinary_id = req.file.filename

    await user.save()

    res.status(200).json({ success: true, message: "user updated successfully", Data: user })

  } catch (error) {
    throw new Error(error.message)
  }
}

const deleteUser = async function (req, res, next) {
  try {
    const user = req.user;

    await cloudinary.uploader.destroy(user.cloudinary_id)

    await user.deleteOne();



    res
      .status(200)
      .json({ success: true, message: "user delete successfully" });
  } catch (error) {
    throw new Error(error.message);
  }
};





export default { addUser, getAll, login, deleteUser, authLogin, logout, logoutAll, update };
