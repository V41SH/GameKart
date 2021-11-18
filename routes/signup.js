const express = require('express');
const router= express.Router();
const userModel = require("../models/user")
router.route('/')
  .get(async(req,res)=>{
    res.render("signup")
  })
  .post((req,res)=>{
  
    var userDetails = new userModel({
      userName: req.body.username,
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      password: req.body.pwd,
    });
  
    userDetails .save((err, doc) => {
      if (!err){
        console.log("Details Entered Successfully")
      }else{
          console.log('Error during record insertion : ' + err);
      }
    });
    res.sendStatus(200)
})

module.exports = router;