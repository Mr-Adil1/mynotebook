const mongoose = require("mongoose");
const { Schema } = mongoose;
/* This is creating a schema for the database. */
const UserSchema = new Schema({
/* Creating a schema for the database. */
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
/* Creating a model for the database. */
const User = mongoose.model("user", UserSchema);
module.exports = User;
