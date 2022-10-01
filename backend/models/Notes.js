const mongoose = require("mongoose");
const { Schema } = mongoose;
const NotesSchema = new Schema({
/* Defining the schema for the database. */
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
/* Creating a model for the database. */
const Notes = mongoose.model("notes", NotesSchema);
module.exports = Notes
