const express = require('express');
const router= express.Router();

router.route('/')
  .get((req,res)=>{
    res.render('landing_page')
  })
  .post((req,res)=>{
  
})

module.exports = router;