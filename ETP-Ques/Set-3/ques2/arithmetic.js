// Q2 a) Implement an express application to Pass 2 numbers in the URL of the client 
// request to the server and access those 2 numbers from the URL using the params object 
// and perform basic arithmetic operations (+,-,",/) in the server node.js application. 
// Finally, add a button on the client page and provide the output values as a response with a click event.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/arith.html`);
});

app.get("/:num1/:num2", (req, res) => {
  var op = "";
  var num1 = parseInt(req.params.num1);
  console.log(num1);
  var num2 = parseInt(req.params.num2);
  op += `addition is ${num1 + num2} `;
  op += ` sub is ${num1 - num2} `;

  op += ` mul is ${num1 * num2} `;

  op += `div is ${num1 / num2}`;

  res.send(op);
});

app.get("/submit", (req, res) => {
  console.log(req.query);
  console.log(req.query.num1);
  res.redirect(`/${req.query.num1}/${req.query.num2}`);
});

app.listen(8000);
