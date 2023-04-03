const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    userName: String,
    email: String,
    Password: String,
  },
  {
    versionKey: false,
  }
);

const authModel = mongoose.model("Auth", authSchema);

module.exports = { authModel };
