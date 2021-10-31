const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullname: {
      type: String,
    },
    description: {
      type: String,
    },
    photo: {
      type: String,
    },

    college: {
      type: String,
    },
    highschool: {
      type: String,
    },
    school: {
      type: String,
    },
    expertise: { type: String },

    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    projects: [  {type:String} ]
  },
  { timestamps: true } 
);

const UserInfo = mongoose.model("UserInfo", userSchema);

module.exports = UserInfo; 
