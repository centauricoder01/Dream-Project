const express = require("express");
const { signupUser, loginUser } = require("../Controllers/Auth.controller");
const AuthRouter = express.Router();

AuthRouter.post("/signup", signupUser);
AuthRouter.post("/login", loginUser);

module.exports = { AuthRouter };
