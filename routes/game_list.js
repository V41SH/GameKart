const express = require('express');
const router= express.Router();
const gameModel = require("../models/games")
const reviewModel = require("../models/reviews")
router.route('/')
  .get(async(req,res)=>{
    try{
      game_list = await gameModel.find({})
    }catch(err){
      console.log(err)
    } 
    console.log(req.session)
    res.render("game_list",{isLoggedIn:req.session.isLoggedIn,game_list:game_list})
  })

  .post(async(req,res)=>{
    try{
      await gameModel.deleteOne({gameID:game})
      await reviewModel.deleteMany({gameID:game})
    } catch (error){
      console.log(error)
    }
    res.sendStatus(200)
})

module.exports = router;
