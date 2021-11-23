const express = require('express')
const router= express.Router()
const bcrypt = require("bcrypt")
const userModel = require("../models/user")
router.route('/')
  .get(async(req,res)=>{
    res.render("signup")
  })
  .post(async(req,res)=>{
  
    var hashedpwd = await  bcrypt.hashSync(req.body.pwd,9)

    console.log(hashedpwd)

    var userDetails = new userModel({
      userName: req.body.username,
      admin: false,
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      password: hashedpwd,
    });
  
    await userDetails.save((err) => {
      if (!err){
        console.log("Details Entered Successfully")
      }else{
          console.log('Error during record insertion : ' + err);
      }
    });
    res.sendStatus(200)
})

module.exports = router;