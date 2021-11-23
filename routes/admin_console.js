const express = require('express');
const router= express.Router();

router.route('/')
  .get((req,res)=>{
        res.render('admin_console')
  })
  .post((req,res)=>{
  
})

module.exports = router;