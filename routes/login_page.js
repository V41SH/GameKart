const express = require('express');
const router= express.Router();
const path = require('path');

router.route('/')
  .get(async(req,res)=>{
    res.sendFile(path.join(__dirname + '/../views/login_page/login_page.html'))
  })
  .post((req,res)=>{
  
})

module.exports = router;