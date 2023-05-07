// b) Create a node.js web server application with the HTTP module for
// conversion between Celsius and Fahrenheit.
// Accept temperature values from the input text fields of the client page and
// provide the output values as a response with the click event on a button.

const http = require("http");
const server = http.createServer();
const fs = require("fs");
const querystring = require("querystring");

server.on('request', (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const html = fs.readFileSync(__dirname + "/temp.html", "utf8");
    res.end(html);
  } else if (req.method === "POST" && req.url == "/") {
    var body = "";
    req.on("data", (chunk) => {
      body += chunk;
      var { temp, conversion } = querystring.parse(body);
      temp = parseInt(temp, 10);
      console.log(conversion);
      if (conversion == "f") {
        res.end((temp * 33.8).toString());
      } else {
        res.end((temp / 33.8).toString());
      }
    });
  }
});

// Start the server
server.listen(8000, () => {
  console.log("Server running at 8000");
});
