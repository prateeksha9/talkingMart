const express = require("express");
const path = require("path");
const port = 8000;

// const Contact = require("./models/contact");

const app = express(); // storing express

// view mein HTML and Css
app.use(express.urlencoded()); //signifies middleware
app.use(express.json());
app.use(express.static("assets"));

// to see in what is the request url remove in production
app.use((req, res, next) => {
  console.log("requesting for:", req);
  next();
});

app.get("/", function (req, res) {
  res.send("<h1>Cool, working</h1>");
  // render  = display/load
});

app.post("/helloworld", function (req, res) {
  // console.log(req);
  return res.send("done", req.body);
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in printing the server", err);
  }
  console.log("Yup! express is running on port:", port);
});
