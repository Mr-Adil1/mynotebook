const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
router.get(
  "/",
  [
    body("name").isString(),
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => res.json(user))
    .catch((err)=>{
     res.json({error:`${err.message.slice(73,91)} already existd`})
    });
    console.log(req.body);
  }
);

module.exports = router;
