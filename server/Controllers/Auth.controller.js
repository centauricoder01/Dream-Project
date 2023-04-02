const { authModel } = require("../Models/Auth.models");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  const { userName, email } = req.body;

  let checkEmail = await authModel.findOne({ email });

  if (checkEmail) {
    return res.send({ message: "user already exist." });
  }

  let Password = "AC" + Math.floor(1000 + Math.random() * 90000000) + "DC";

  bcrypt.hash(Password, 10, function (err, hash) {
    if (hash) {
      res.send({ message: "user added successfully", hash });
    } else {
      console.log(err);
    }
  });
};

module.exports = { signupUser };
