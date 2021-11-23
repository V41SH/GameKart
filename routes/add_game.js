const express = require('express')
const path = require('path')
const router= express.Router()
const gameModel = require("../models/games")
const move = require("../public/js/moveFiles.js")
const fs = require("fs")

//have to compulsoryily make game poster png only

const multer = require('multer')
const storage = multer.diskStorage({
    destination: path.join(__dirname,"../public/site_data/uploads/temp_folder/"),
    filename: function(req, file, cb){
        if(file.fieldname=='face_image'){
            cb(null, "gamePoster"+path.extname(file.originalname))
        } else {
            cb(null, "gameImage-"+Date.now()+path.extname(file.originalname))
        }
    }
})

const upload = multer({
    storage: storage,
}).fields([
    {name:'face_image', maxCount:1},
    {name:'game_image',maxCount:5},
]) //remember here

router.route('/')
    .get(async(req,res)=>{
        res.render("add_game",{isLoggedIn:req.session.isAdmin})
    })
    .post((req, res)=>{
        upload(req, res, (err)=>{
            if(err){
                res.render('game_image',{msg:err})
            }else{
                var folderName = (req.body.name).replace(/\s/g, "_");
                var fromPath = "public/site_data/uploads/temp_folder"
                var toPath = "public/site_data/uploads/"+folderName
                var imagePath = "/site_data/uploads/"+folderName
                fs.mkdir(toPath,(err) =>{
                    if(err){
                        console.log(err)
                        return
                    }
                    move.func(fromPath,toPath)
                    var gameDetails = new gameModel({
                        name: req.body.name,
                        cost: req.body.cost,
                        caption: req.body.caption,
                        description: req.body.description,
                        image_path: imagePath,
                    });
                    gameDetails .save((err, doc) => {
                        if (!err){
                            console.log("Details Entered Successfully")
                        }else{
                            console.log('Error during record insertion : ' + err);
                        }
                    });
                })               
                res.redirect("/adminConsole")
            }
        })
        
    })

module.exports = router;