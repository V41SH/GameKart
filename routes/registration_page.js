const express = require('express');
const router= express.Router();
const path = require('path');

router.route('/')
  .get(async(req,res)=>{
    res.sendFile(path.join(__dirname + '/../views/registration_page/registration_page.html'))
  })
  .post((req,res)=>{
  
})

module.exports = router;