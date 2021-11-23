const express = require("express")
const path = require("path")
const app = express()

const cookieparser = require("cookie-parser")
const session = require('express-session')
const oneDay = 1000 * 60 * 60 * 24;
app.use(cookieparser())
app.use(session({
    secret: "secretKeyforSigningtheSessioncookie",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay }
}))

const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://nishit:iwp_project_db@cluster0.8ntrt.mongodb.net/IWP_Data?retryWrites=true&w=majority' 
mongoose
  .connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((res) => {
    console.log('Mongodb Connected');
  });

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

function isAdminLogged(req,res,next){
    if(req.session.isAdmin){
        next()
    } else {
        res.redirect("/login")
    }
}

function isUserLogged(req,res,next){
  if(req.session.isUser){
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
const add_game = require('./routes/add_game')
const cart = require("./routes/cart")
const purchase_game = require("./routes/purchase_game")
const adminConsole = require("./routes/admin_console")
const txHistory = require("./routes/txHistory")
const userDetails = require("./routes/userDetails")

//routing
app.use('/', landing_page)
app.use('/home', homepage)
app.use('/login', login)
app.use('/signup', signup)
app.use('/game', game_detail)
app.use('/review', isUserLogged, review);
app.use('/gamelist', isAdminLogged, game_list)
app.use('/add', isAdminLogged, add_game)
app.use('/cart', cart)
app.use('/purchase', isUserLogged,  purchase_game)
app.use('/adminConsole', adminConsole)
app.use('/txHistory', isAdminLogged, txHistory)
app.use('/userDetails', isAdminLogged, userDetails)

const port=process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
 