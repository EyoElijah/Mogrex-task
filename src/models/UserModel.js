const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "name is required"],
  },
  phone: {
    type: String,
    required: [true, "phone is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  religion: {
    type: String,
    required: [true, "religion is required"],
  },
  state: {
    type: String,
    required: [true, "state is required"],
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
