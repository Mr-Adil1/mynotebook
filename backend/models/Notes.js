const mongoose = require("mongoose");
const { Schema } = mongoose;
const NotesSchema = new Schema({
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
const Notes = mongoose.model("notes", NotesSchema);
Notes.createIndexes();
module.exports = Notes
