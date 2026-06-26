import userModel from "../model/UserModel.js"
import httpError from "../middlewares/httpError.js"

async function Add(req, res, next) {

  try {

    const { name, UserEmail, Password } = req.body

    const NewUser = new userModel({

      name,
      UserEmail,
      Password

    })

    await NewUser.save()

    res.status(201).json({ success: true, message: "user added", NewUser })

  } catch (error) {

    next(new httpError(error.message))

  }

}
const GetById = async (req, res, next) => {
  try {

    const id = req.params.id

    const findUser = await userModel.findById(id);

    if (!findUser) {
      return next(new httpError("no user found", 404));
    }

    res.status(200).json({
      success: true,
      message: "user data found",
      findUser,
    });
  } catch (error) {
    next(new httpError(error.message));
  }
};


const GetAllUser = async (req, res, next) => {
  try {
    const findUser = await userModel.find();

    if (findUser.length === 0) {
      return next(new httpError("no user found", 404));
    }

    res.status(200).json({
      success: true,
      message: "user data found",
      total: findUser.length,
      findUser,
    });
  } catch (error) {
    next(new httpError(error.message));
  }
};


const loggin = async (req, res, next) => {
  try {
    const { UserEmail, Password } = req.body;

    const user = await userModel.findByCredentials(UserEmail, Password);

    const token = await user.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "user login successful",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    next(new httpError(error.message, 500));
  }
};


const AuthLoggin = async function (req, res, next) {
  try {
    const user = req.user;

    if (!user) {
      return next(new httpError("unable to login", 401));
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(new httpError(error.message));
  }
};

const deletes = async (req, res, next) => {
    try {
        const { id } = req.params;

        await userModel.deleteOne({ _id: id });

        res.json({
            success: true,
            message: "User deleted"
        });

    } catch (error) {
        next(error.message);
    }
};


const logOut = async (req, res, next) => {
  try {
    const user = req.user


    user.tokens = user.tokens.filter((t) => t.token != req.token);

    await user.save()

    res.status(200).json({ success: true, message: "user log out successfully" });

  } catch (error) {

    next(new httpError(error.message, 500));
  }
}

const logoutALL = async (req, res, next) => {
  try {
    req.user.tokens = []


    await req.user.save()

    res.status(200).json({ success: true, message: "user log out from all successfully" });

  } catch (error) {

    next(new httpError(error.message, 500));

  }
}



export default { Add, GetAllUser, GetById, loggin, AuthLoggin, deletes, logOut, logoutALL }