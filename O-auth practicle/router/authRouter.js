import express from "express";
import passport from "../config/passport.js";

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get(
  "/google/login",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/profile");
  },
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(new Error("failed to logOut"));
    }
  });

  res.redirect("/");
});

export default router;
