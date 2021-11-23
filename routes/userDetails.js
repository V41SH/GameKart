const express = require('express');
const router= express.Router();
const userModel = require("../models/user") 


router.route('/')
  .get(async(req,res)=>{
    users = await userModel.find({})
    res.render('userDetails',{data:users})
  })

module.exports = router;