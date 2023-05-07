// b) Create a node.js web server application with the http module 
// to perform the search operation on a given set of values. 
// Accept a series of values from the input text fields of the client page 
// and provide the output values as a response with the click event on a button.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Serve the HTML form to the client
    fs.readFile('../ques1/search.html', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
      }
      res.write(data);
      res.end();
    });
  } else if (req.method === 'POST') {
    // Collect the data sent by the client
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      // Parse the data as URL encoded form data
      const params = new URLSearchParams(body);
      const searchQuery = params.get('search');

      // Perform the search operation on the given set of values
      const values = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
      const searchResults = values.filter((value) =>
        value.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Send the search results as the response to the client
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<h2>Search results:</h2>`);
      if (searchResults.length > 0) {
        res.write(`<ul>`);
        searchResults.forEach((result) => {
          res.write(`<li>${result}</li>`);
        });
        res.write(`</ul>`);
      } else {
        res.write(`<p>No results found.</p>`);
      }
      res.end();
    });
  } else {
    // Handle unsupported HTTP methods
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.write('Method not supported.');
    res.end();
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
