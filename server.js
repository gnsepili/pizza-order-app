const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
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

//Assetsget
app.use(express.static("public"));

//set templete engine
app.use(expressLayouts);
app.set("views", path.join(__dirname, "resources/views"));
app.set("view engine", "ejs");

require("./routes/web.js")(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
