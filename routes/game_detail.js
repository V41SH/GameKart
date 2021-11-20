const express = require('express');
const router= express.Router();
const carousel = require("../public/js/game_carousel")
const gameModel = require("../models/games")
const reviewModel = require("../models/reviews")


router.route('/')
  .get(async(req,res)=>{
    var gameID = req.query.id
    try{
      var game = await gameModel.findOne({_id:gameID})
      //var reviews = await reviewModel.findOne({gameID:gameID})
    }catch(err){
      console.log(err)
    } 
      var gameImage = carousel.func(game.image_path)
      var gamePoster = gameImage.pop()
      res.render('game_detail',{isLoggedIn:req.session.isLoggedIn, game:game, gameImage:gameImage, gamePoster:gamePoster,reviews:reviews})    
  })
  .post((req,res)=>{
  })

module.exports = router;