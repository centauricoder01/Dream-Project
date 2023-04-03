const express = require("express");
const {
  signupUser,
  loginUser,
  passwordChange,
} = require("../Controllers/Auth.controller");
const AuthRouter = express.Router();

AuthRouter.post("/signup", signupUser);
AuthRouter.post("/login", loginUser);
AuthRouter.post("/passchg", passwordChange);

module.exports = { AuthRouter };
