const express = require('express');
const router= express.Router();
const path = require('path');

router.route('/')
  .get(async(req,res)=>{
    res.render('login')
  })
  .post((req,res)=>{
    console.log(req.body)
    res.redirect("/home")
})

module.exports = router;