const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.get("/", (req, res) => {
  const user = User(req.body);
  user.save();
  res.send(req.body);
  console.log(req.body);
});

module.exports = router;
