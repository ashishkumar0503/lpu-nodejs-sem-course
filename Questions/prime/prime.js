// Create a server nodejs application to verify whether
// the number is prime or not

// Using http
// const fs = require('fs');
// const http = require('http');
// const server = http.createServer();

// server.on("request", (req, res) => {
//     fs.readFile("../prime/prime.html", 'utf-8', (err, content) => {
//         if (err) throw err;
//         res.end(content);
//     });
   
// });

// server.listen(1000, () => {
//     console.log('Listening to port 1000');
// })

//Using express

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/prime.html`);
});

app.post('/check', (req, res) => {
    const num = req.body.num;
    var flag = true;
    for (let i = 2; i <= num-1; i++) {
        if (num % i === 0) {
            flag = false;
            break;
        }
    }
    if (flag === true) {
        res.send(`${num} is prime`)
    } else {
        res.send(`${num} is not prime`);
    }
});

app.listen(8000, () => {
    console.log('Listening to port 8000');
});
