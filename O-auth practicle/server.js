import express from "express";
import httpError from "./middlewares/httpError.js";
import ConnectDB from "./config/DB.js";
import dotenv from "dotenv";
import router from "./router/authRouter.js";
import session from "express-session";
import passport from "passport";
import ProfileRouter from "./router/profileRouter.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 20 * 60 * 60 * 1000,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
app.use(express.json());
app.use("/auth", router);
app.use("/profile", ProfileRouter);

app.get("/", (req, res, next) => {
  res.render("home", { user: req.user });
});

app.use((req, res, next) => {
  res.status(404).json({ mesage: "requested route not found" });
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(new httpError(error.message));
  }

  res
    .status(error.statusCode || 500)
    .json({ mesage: error.message || "internal server error" });
});

const port = 5000;

async function startServer(req, res, next) {
  try {
    const connect = await ConnectDB();

    if (!connect) {
      return console.log("failed to connect DB");
    }
    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error.mesage);
    process.exit(1);
  }
}

startServer();
