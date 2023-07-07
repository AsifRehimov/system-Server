const mongoose = require("mongoose");

const InformationSchema = new mongoose.Schema(
  {
    fileType: {
      type: String,
      require: true,
    },
    file: {
      type: Buffer,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Information", InformationSchema); 