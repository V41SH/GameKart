const express = require('express');
const router= express.Router();
const carousel = require("../public/js/game_carousel")
const gameModel = require("../models/games")

router.route('/')
  .get(async(req,res)=>{
    var gameID = req.query.id
    gameModel.findOne({_id:gameID},function(err,game){
      if(err){
        console.log(err)
      } else{
        var gameImage = carousel.func(game.image_path)
        var gamePoster = gameImage.pop()
        console.log(gameImage)
        res.render('game_detail',{isLoggedIn:req.session.isLoggedIn, game:game, gameImage:gameImage, gamePoster:gamePoster })    
      }})    
  })
  .post((req,res)=>{
  })

module.exports = router;