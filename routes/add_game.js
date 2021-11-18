const express = require('express');
const path = require('path')
const router= express.Router();


const multer = require('multer')
const storage = multer.diskStorage({
    destination: path.join(__dirname,"../public/site_data/uploads/temp_folder/"),
    filename: function(req,file,cb){
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
}).array('game_image',5) //remember here



router.route('/')
  .get(async(req,res)=>{
    res.render("add_game")
  })
  .post((req,res)=>{
      upload(req,res,(err)=>{
          if(err){
              res.render('game_image',{msg:err})
          } else {
              console.log(req.body)
              res.send("test")
          }
      })
  })

module.exports = router;