const express = require('express');
const router= express.Router();
const ls = require("sessionstorage")

router.get('/',async(req,res)=>{
    var user = ls.getItem("user")
    var cartItems = ls.getItem("cart")
    var totalCost = 0
    cartItems.forEach(element => {
        totalCost += Number(element.cost)
    });
    res.render('cart',{cartItems:cartItems,totalCost:totalCost,user:user})
})

router.post('/remove',(req,res)=>{
    var item = req.body.item
    var cartItems = ls.getItem("cart")

    for(let i=0;i<cartItems.length;i++){
        if(cartItems[i].item == item){
            cartItems.splice(i,1)
            break
        }
    }

    ls.setItem("cart",cartItems)
    res.sendStatus(200)
})

router.post('/add',(req,res)=>{
    var item = req.body.item
    var cost = req.body.cost
    var cartItems = ls.getItem("cart")
    cartItems.push({item:item,cost:cost})
    ls.setItem("cart",cartItems)
    res.sendStatus(200)
})  

module.exports = router;