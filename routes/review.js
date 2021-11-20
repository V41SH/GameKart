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
    }catch(err){
      console.log(err)
    } 
    var gameImage = carousel.func(game.image_path)
    var gamePoster = gameImage.pop()
    res.render('review',{game:game, gameImage:gameImage, gamePoster:gamePoster})
  })
  .post((req,res)=>{
    var reviewData = new reviewModel({
      gameID: req.body.gameID,
      title: req.body.title,
      userName: req.cookies.userName,
      review: req.body.review,
    });
    reviewData.save((err, doc) => {
      if (!err){
          console.log("Details Entered Successfully")
          res.redirect("/home")
      }else{
          console.log('Error during record insertion : ' + err);
      }
  });
})

module.exports = router;