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




app.get('/',(request,response)=>{
    response.render("home")
});

app.get('/cart',(request,response)=>{
    response.render("customers/cart")
});

app.get('/login',(request,response)=>{
    response.render("auth/login")
});

app.get('/register',(request,response)=>{
    response.render("auth/register")
});


app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
});