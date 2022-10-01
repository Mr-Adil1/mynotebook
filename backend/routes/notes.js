const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
router.post('/',(req,res)=>{
   const nots = Notes(req.body);
   nots.save();
   res.send(req.body);
})

module.exports = router