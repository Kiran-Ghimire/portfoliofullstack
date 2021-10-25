const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    photo: {
      type: String,
    },
    projectname: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Addproject = mongoose.model("Addproject", projectSchema);

module.exports = Addproject;
