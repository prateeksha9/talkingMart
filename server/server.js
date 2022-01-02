const express = require("express");
const path = require("path");
const port = 8000;

// const Contact = require("./models/contact");

const app = express(); // storing express
app.set("view engine", "ejs"); //name of view engine
app.set("views", path.join(__dirname, "views")); //path of views
app.use(express.urlencoded()); //signifies middleware

// view mein HTML and Css
app.use(express.urlencoded()); //signifies middleware
app.use(express.json());
app.use(express.static("assets"));

// to see in what is the request url remove in production
app.use((req, res, next) => {
  console.log("requesting for:", req.url);
  console.log(req.params);
  next();
});

var contactList = ["prateeksha.@gmail.com", "prateek@gmail.com"];

app.get("/", function (req, res) {
  return res.render("home");
});

app.get("/helloworld", function (req, res) {
  // let isThere = contactList.contains({email});
  // if(isThere){
  //   return res.render("helloworld", {title:"present Sir"})
  // } else{
  //   return res.render("helloworld", {title: "not found"});
  // }
  return res.render("helloworld", { title: "Not present" });
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in printing the server", err);
  }
  console.log("Yup! express is running on port:", port);
});
