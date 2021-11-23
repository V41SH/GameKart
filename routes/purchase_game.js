const express = require('express');
const router= express.Router();
const ls = require("sessionstorage")
const txHistoryModel = require("../models/tx_history")

router.route('/')
  .get((req,res)=>{
    var cartItems = ls.getItem("cart")
    var totalCost = 0
    cartItems.forEach(element => {
        totalCost += Number(element.cost)
    });
    res.render('purchase_game',{totalCost:totalCost})
  })
  
  .post((req,res)=>{
    var cartItems = ls.getItem("cart")
    var games = []
    var totalCost = 0
    cartItems.forEach(element => {
        games.push(element.item)
        totalCost += Number(element.cost)
    });

    var tx = new txHistoryModel({
        name : req.body.name,
        userName : ls.getItem("user"),
        purchase : games,
        cost : totalCost,
    })

    tx.save((err,doc)=>{
        if(err){
            console.log(err)
        } else {
            console.log("Tx Successful")
        }
    })
    ls.removeItem("cart")
    ls.setItem("cart",[])
    res.redirect("\home")
})

module.exports = router;