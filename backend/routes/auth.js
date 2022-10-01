const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/createuser",
  /* A middleware function that is used to validate the user input. */
  [
    body("name").isString(),
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      /* Checking if the user already exists in the database. */
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }
      /* Creating a new user. */
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      /* Sending the user object to the client. */
      res.json(user);
      console.log(req.body);
    } catch (err) {
      res.status(500).send('some error occured')
    }
  }
);

module.exports = router;
