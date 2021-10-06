const path=require('path');
const express = require('express');
const app = express();



app.use(express.static(path.join(__dirname +  '/views/')));
app.set('view engine', 'ejs');



const landing_page = require('./routes/landing_page')
const home_page = require('./routes/homepage')
const login_page = require('./routes/login_page')
const reg_page = require('./routes/registration_page')
const game_detail = require('./routes/game_detail')
const review = require('./routes/review')




//routing
app.use('/', landing_page)
app.use('/home', home_page)
app.use('/login', login_page)
app.use('/signup', reg_page)
app.use('/game', game_detail)
app.use('/review', review);




const port=process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
 