const express = require('express');
const router= express.Router();
const path = require('path');

router.route('/')
  .get(async(req,res)=>{
    res.render("game_detail")
  })
  .post((req,res)=>{
  
})

module.exports = router;