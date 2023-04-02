const express = require("express");
const { signupUser } = require("../Controllers/Auth.controller");
const AuthRouter = express.Router();

AuthRouter.post("/signup", signupUser);
AuthRouter.post("/login");

module.exports = { AuthRouter };
