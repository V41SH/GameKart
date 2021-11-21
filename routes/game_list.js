const express = require('express');
const router= express.Router();
const gameModel = require("../models/games")
const reviewModel = require("../models/reviews")
const fs = require("fs")

router.route('/')
  .get(async(req,res)=>{
    try{
      game_list = await gameModel.find({})
    }catch(err){
      console.log(err)
    } 
    res.render("game_list",{isLoggedIn:req.session.isLoggedIn,game_list:game_list})
  })

  .post((req,res)=>{
    var gameID = req.body.game
    gameModel.findOne({_id:gameID},function(err,gameData){
      if(err){
        console.log(err)
      }else{
        var path = 'public' + gameData.image_path 
        console.log("Path is : "+path)
        fs.rm(path,{recursive:true},function(err){console.log(err)})
      }
    })

    gameModel.deleteOne({_id:gameID})
      .then(function(){
        reviewModel.deleteMany({gameID:gameID})
      })
      .then(function(){
        console.log("Records Deleted Successfully")
      })
      .catch(function(error){
        console.log(error)
      })
    
      res.sendStatus(200)
  })

module.exports = router;