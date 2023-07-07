const mongoose = require("mongoose");

const InformationSchema = new mongoose.Schema(
  {
    fullName: {
      type: binData,
      default: "",
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    bio: {
      type: String,
      max: 100,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Information", InformationSchema); 