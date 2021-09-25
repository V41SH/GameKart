const path=require('path');
const express = require('express');
const app = express();



app.use(express.static(path.join(__dirname +  '/views/')));
app.set('view engine', 'ejs');



const landing_page = require('./routes/landing_page')





//routing
app.use('/', landing_page);




const port=process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
 