const express = require('express');
const router= express.Router();
const path = require('path');

router.route('/')
  .get(async(req,res)=>{
    res.sendFile(path.join(__dirname + '/../views/homepage/homepage.html'))
  })
  .post((req,res)=>{
  
})

module.exports = router;