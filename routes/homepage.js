const express = require('express')
const router= express.Router()
const path = require('path')

router.route('/')
  .get(async(req,res)=>{
    res.render('homepage',{isLoggedIn:req.session.isLoggedIn})
  })
  .post((req,res)=>{
    req.session.destroy()
})

module.exports = router 