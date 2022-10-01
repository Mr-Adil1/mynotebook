const express = require("express");
const router = express.Router();
const User = require("../models/User");
/* Importing the body and validationResult from the express-validator library. */
const { body, validationResult } = require("express-validator");
/* A library that is used to hash the password. */
const bcrypt = require("bcryptjs");
/* Used to generate a token for the user. */
const jwt = require("jsonwebtoken");
/* A secret key that is used to generate the token. */
const JWT_SECRET = 'adilisagood$$boy'
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
      const salt = await bcrypt.genSaltSync(10);
      let secPass = await bcrypt.hash(req.body.password, salt);
      /* Creating a new user. */
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      /* Generating a token for the user. */
      const authtoken = jwt.sign(data, JWT_SECRET);
      /* Sending the user object to the client. */
      res.json({authToken:authtoken});
    } catch (err) {
      console.log(err);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
