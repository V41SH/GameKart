const express = require('express');
const router= express.Router();
const txHistoryModel = require("../models/tx_history") 


router.route('/')
  .get(async(req,res)=>{
    txHistory = await txHistoryModel.find({})
    var data = []
    txHistory.forEach(tx => {
        var temp = []
        temp.push(tx.userName)
        temp.push(((tx.createdAt).toString()).slice(4,15))
        temp.push((tx.purchase).length)
        temp.push(tx.cost)
        data.push(temp)
    });
    res.render('txHistory',{data:data})
  })

module.exports = router;