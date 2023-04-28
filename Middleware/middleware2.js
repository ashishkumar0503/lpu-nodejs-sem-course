// the first function executes first, then the route handler and then the end function. This code summarizes how to use middleware before and after route handler; also how a route handler can be used as a middleware itself.

var express = require("express");
var app = express();

//First middleware before response is sent
app.use(function (req, res, next) {
  console.log("Start");
  next();
});

//Route handler
app.get("/", function (req, res, next) {
  res.send("Middle");
  next();
});

app.use("/", function (req, res) {
  console.log("End");
});

app.listen(3000);
