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
    res.status(500).send("Internal Server Error");
  }
});

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
    const {title,description,tag} = req.body
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let note = new Notes({
        title,
        description,
        tag,
        user: req.user.id
      });
      const savenot = await note.save();
      res.json(savenot);
    } catch (error) {
      console.log(error);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
