// Create a web server application with the http module for the following scenario
// a) Create a server node.js application using http module to verify whether a number is prime or not.
// b) Accept a number from the input text field of the client page and provide the output values as a
// response with the click event on a button

const fs = require("fs");
const http = require("http");
const server = http.createServer();
const qs = require("querystring");

// server.on('request', (req, res) => {
//     fs.readFile('../ques5/prime.html', 'utf-8', (err, content) => {
//         if (err) {
//             console.error(err);
//         } else {
//             res.end(content);
//         }
//     })

// });

function prime(num) {
  let flag = true;
  if (num < 2) {
    return;
  }
  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

server.on("request", (req, res) => {
  if (req.method === "GET") {
    fs.readFile("../ques5/prime.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      const params = new URLSearchParams(body);
      const query = params.get("num");
      const number = parseInt(query);
      const result = prime(number);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`${number} is${result ? "" : " not"} a prime number.`);
    });
  }
});

server.listen(8000, () => {
  console.log("Listening to port 8000");
});
