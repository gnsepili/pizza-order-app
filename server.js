require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo')(session)



const app = express();
const PORT = process.env.PORT || 3000;


//Database connection
const url = "mongodb://localhost/pizza";
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedIndex: true,
  useFindAndModify: true,
});


const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB connected");
  }).catch((err) => {
    console.log("DB connection Failed");
  });



//Session store
let mongoStore = new MongoDbStore({
                  mongooseConnection: connection,
                  collection: 'sessions'
                });


//Session Config
app.use(session({
  secret:process.env.COOKIE_SECRET,
  resave: false,
  store: mongoStore,
  saveUninitialized:false,
  cookie:{maxAge:1000*60*60*24} //24Hrs
}));

app.use(flash())

//Assetsget
app.use(express.static("public"));

app.use(express.json())

// Global middleware
app.use((req, res, next) => {
  res.locals.session = req.session
  res.locals.user = req.user
  next()
})


//set templete engine
app.use(expressLayouts);
app.set("views", path.join(__dirname, "resources/views"));
app.set("view engine", "ejs");

require("./routes/web.js")(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
