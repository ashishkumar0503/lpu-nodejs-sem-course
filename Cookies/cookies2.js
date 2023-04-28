//cookie-parser is a middleware which parses
// cookies attached to the client request object
var express = require("express");
var app = express();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function (req, res) {
  res.cookie("INT222", "KE050").send("Our website has set the cookies"); //Sets course = html
  console.log("Cookies: ", req.cookies);
});

// app.get('/', function(req, res){
// res.cookie('courses','js');//Sets course = html
// console.log('Cookies: ', req.cookies);
// });

app.get("/clear", function (req, res) {
  res.clearCookie("INT222", "courses");
  res.send("cookie cleared");
});

app.listen(2000);
