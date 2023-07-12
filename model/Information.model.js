const mongoose = require("mongoose");

const InformationSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
      trim: true
    },
    originalname: {
      type: String,
      required: true
    },
    text: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Information", InformationSchema); 