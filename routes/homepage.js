const express = require('express')
const router= express.Router()
const gameModel = require("../models/games")
const carousel = require("../public/js/homePage_carousel")
const ls = require('sessionstorage')
router.route('/')
  .get((req,res)=>{
    gameModel.find({},function(err,games){
      if(err){
        console.log(err)
      } else{
        var carouselImages = carousel.func("public/site_data/uploads")
        res.render('homepage',{isLoggedIn:req.session.isLoggedIn,gameList:games,carouselImages:carouselImages})    
      }})    
  })
  .post((req,res)=>{
    ls.clear()
    req.session.destroy()
})

module.exports = router 