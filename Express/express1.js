// Using http module

/*
const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile("../Express/temperature.html", 'utf-8', (err, content) => {
        if(err) throw err;
        res.end(content);
    });
});

server.listen(2000, () => {
    console.log("Listening to port 2000");
});
*/

// Using express

/*
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/temperature.html"); // for downloading the content.txt file
});

app.post("/convert", (req, res) => {
  const val = Number(req.body.in);
  // res.send(req.body.give);
  if (req.body.give == 0) {
    const f = val * 1.8 + 32;
    res.send(`${val} °C is ${f} °F`);
  } else {
    console.log(req.body.give);
    const c = (((val - 32) * 5) / 9).toFixed(2);
    res.send(`${val} °F is ${c} °C`);
  }
  // document.getElementById('#ans').innerHTML = c;
});

app.listen(2000, () => {
  console.log("server is listening on port 2000");
});
*/

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/temperature.html`);
});

app.post('/convert', (req, res) => {
    const far = req.body.far;
    const cel = req.body.cel;

    console.log(req.body);
    
    if(req.body.f) {
      const c = ((parseFloat(far) - 32) * 5/9).toFixed(2);
      res.send(`${far} °F is ${c} °C`);
    } 
    else {
      const f = ((parseFloat(cel) *9) / 5 + 32).toFixed(2);
      res.send(`${cel} °C is ${f} °F`);
    }
});

app.listen(2000, () => {
    console.log('Listening to port 2000');
});


