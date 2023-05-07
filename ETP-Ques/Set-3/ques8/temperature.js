// b) Create a node.js web server application with the HTTP module for 
// conversion between Celsius and Fahrenheit. 
// Accept temperature values from the input text fields of the client page and 
// provide the output values as a response with the click event on a button.

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Parse the URL to get the pathname and query parameters
  const { pathname, query } = url.parse(req.url, true);
  const { temp, unit } = query;

  // Check if the request is for the homepage
  if (pathname === '/') {
    // Read the HTML file and send it as the response
    fs.readFile('../ques8/temp.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
  // Check if the request is for temperature conversion
  else if (pathname === '/convert') {
    // Check if the temperature value and unit are provided in the query parameters
    if (temp && unit) {
      const celsius = unit === 'c' ? parseFloat(temp) : (parseFloat(temp) - 32) * 5 / 9;
      const fahrenheit = unit === 'f' ? parseFloat(temp) : parseFloat(temp) * 9 / 5 + 32;

      // Send the converted temperature values as the response
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Celsius: ${celsius.toFixed(2)}\nFahrenheit: ${fahrenheit.toFixed(2)}`);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Bad request');
    }
  }
  // Return a 404 error for other requests
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Start the server
server.listen(8000, () => {
  console.log('Server running at 8000');
});
