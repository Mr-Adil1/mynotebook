const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
/* Destructuring the body and validationResult from express-validator. */
const { body, validationResult } = require("express-validator");
router.post(
  "/createnotes",
  [
    /* Validating the input. */
    body("title", "title must be 3 chracters long").isLength({ min: 3 }),
    body("description", "description must be 3 to 5 chrasters long").isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      /* Creating a new note. */
      let nots = await Notes.create({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
      });
     /* Sending the response to the client. */
      res.json(nots);
    } catch (error) {
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
