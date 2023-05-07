// b) Create a node.js web server application with the HTTP module to 
// perform sort operations on a given set of values. 
// Accept a series of values from the input text fields of the client page 
// and provide the output values as a response with the click event on a button.

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
    <html>
      <head>
        <title>Sort values</title>
      </head>
      <body>
        <h1>Sort values</h1>
        <form action="/sort" method="get">
          <label for="values">Enter comma-separated values:</label>
          <input type="text" id="values" name="values" required>
          <button type="submit">Sort</button>
        </form>
      </body>
    </html>`);
  } else if (pathname === '/sort') {
    const values = query.values;
    if (!values) {
      res.statusCode = 400;
      res.end('Values parameter is missing');
      return;
    }
    const sortedValues = values.split(',').map(Number).sort((a, b) => a - b);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(sortedValues.toString());
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
