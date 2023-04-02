const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    userName: String,
    email: String,
    password: String,
  },
  {
    versionKey: false,
  }
);

const authModel = mongoose.model("Auth", authSchema);

module.exports = { authModel };
