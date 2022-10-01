const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const { body, validationResult } = require("express-validator");
router.post('/',[
   body('title','title must be 3 chracters long').isLength({min:3}),
   body('description','description must be 3 to 5 chrasters long').isLength({min:3}),
],(req,res)=>{
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
  Notes.create({
   title:req.body.title,
   description:req.body.description,
   tag:req.body.tag,
  }).then((note)=> res.json(note))
  .catch((err)=>{
   res.json({error:err.message})
  })
})

module.exports = router