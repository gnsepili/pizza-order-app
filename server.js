const express = require('express');
const ejs = require('ejs');
const expressLayouts= require('express-ejs-layouts');
const path= require('path');

const app = express();
const PORT= process.env.PORT || 3000;
//Assetsget
app.use(express.static('public'));


//set templete engine
app.use(expressLayouts);
app.set('views',path.join(__dirname,'resources/views'));
app.set('view engine', 'ejs')


require('./routes/web.js')(app);


app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
});