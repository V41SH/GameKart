const express = require("express")
const path = require("path")
const mongoose = require('mongoose')
const cookieparser = require("cookie-parser")


const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.use(cookieparser())

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// mongoose.connect(
//     'mongodb+srv://nishit:iwp_project_db@cluster0.8ntrt.mongodb.net/IWP_Data?retryWrites=true&w=majority',{
//         useNewUrlParser: true, 
//         useUnifiedTopology: true
//     }
// )

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected to DB successfully");
// })




function isAuth(req,res,next){
    if(req.cookies.isloggedIn === "true"){
        next()
    } else {
        res.redirect("/login")
    }
}





const landing_page = require('./routes/landing_page')
const homepage = require('./routes/homepage')
const login = require('./routes/login_page')
const signup = require('./routes/signup')
const game_detail = require('./routes/game_detail')
const review = require('./routes/review')
const game_list = require('./routes/game_list')





//routing
app.use('/', landing_page)
app.use('/home', homepage)
app.use('/login', login)
app.use('/signup', signup)
app.use('/game', game_detail)
app.use('/review', review);
app.use('/gamelist', game_list)




const port=process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
 