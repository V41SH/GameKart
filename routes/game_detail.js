const express = require('express');
const router= express.Router();

router.route('/')
  .get(async(req,res)=>{
    res.render("game_detail")
  })
  .post((req,res)=>{
  
})

module.exports = router;