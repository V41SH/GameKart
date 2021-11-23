const express = require('express')
const router= express.Router()
const UserModel = require("../models/user")
const ls = require("sessionstorage")
const bcrypt = require("bcrypt")
router.route('/')
  .get(async(req,res)=>{
    res.render('login')
  })
  .post((req,res)=>{
    UserModel.findOne({userName:req.body.username},function(err,user){
      if(err){
        console.log(err)
      } else {        
        if(user){
          bcrypt.compare(req.body.password,user.password,function(err,result){
            if(result){
              if(user.admin){ 
                //Admin User
                req.session.userName = user.userName
                req.session.isAdmin = true
                res.redirect("/adminConsole") //Define Admin Route
              } else { 
                //Normal User
                req.session.userName = user.userName
                req.session.isUser = true
                ls.setItem("user", user.userName)
                ls.setItem("cart", [])
                res.redirect("/home")
              }         
            }
            else{
            res.render('login',{msg:"Incorrect Password"})
          }})
        }else{
        res.render('login',{msg:"Incorrect Credentials"})
        }
      }})    
  })

module.exports = router; 