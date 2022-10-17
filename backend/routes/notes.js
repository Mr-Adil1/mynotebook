const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
var fetchuser = require("../middleware/fetchuser");
/* Destructuring the body and validationResult from express-validator. */
const { body, validationResult } = require("express-validator");
/* This is a route handler. fetching all user notes. */
router.get("/fetchnotes", fetchuser, async (req, res) => {
  try {
    let note = await Notes.find({ user: req.user.id });
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

/* This is a route handler. It is used to add a note. */
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "title must be 3 characters long").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savenot = await note.save();
      res.json(savenot);
    } catch (error) {
      console.log(error);
      res.status(500).send("some error occured");
    }
  }
);

/* This is a route handler. It is used to update a note. */
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  let { title, description, tag } = req.body;
  /* Creating an empty object. */
  let newnote = {};
/* Checking if the title, description and tag is present in the request body. If it is present then it
is adding it to the newnote object. */
  if (title) {
    newnote.title = title;
  }
  if (description) {
    newnote.description = description;
  }
  if (tag) {
    newnote.tag = tag;
  }
  /* Finding the note by the id. */
  let note = await Notes.findById(req.params.id);
  /* Checking if the note is present or not. If it is not present then it is returning a 404 status
  code. */
  if(!note){return res.status(404).send('note found')};
  /* Checking if the user is the owner of the note. If it is not the owner then it is returning a 401
  status code. */
  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed");
  };
  /* Finding the note by the id and updating it. */
  note = await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true});
  res.json({note});
});


router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
 try {
   /* Finding the note by the id. */
   let note = await Notes.findById(req.params.id);
   /* Checking if the note is present or not. If it is not present then it is returning a 404 status
   code. */
   if(!note){return res.status(404).send('note found')};
   /* Checking if the user is the owner of the note. If it is not the owner then it is returning a 401
   status code. */
   if(note.user.toString() !== req.user.id){
     return res.status(401).send("Not Allowed");
   };
   /* Finding the note by the id and deleting it. */
   note = await Notes.findByIdAndDelete(req.params.id);
   /* Sending a json response. */
   res.json({"success":"note has been deletetd",note:note});
 } catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
 }
})
module.exports = router;
