// b) Create a web server application with an HTTP module to provide the file 
// name in the URL of the client request from a browser. 
// Include the URL module in the server application and parse the URL to 
// get the file name from the client request. 
// Access the file and display the content as a response to the client(user) request in the browser. 
// Create a test.txt file and add personal information (name, roll no) in the server system.

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the URL to get the file name from the client request
  const reqUrl = url.parse(req.url, true);
  const fileName = '../ques10/' + reqUrl.pathname;

  // Read the file and display the content as a response to the client request
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

server.listen(8000, () => {
  console.log('Server running at 8000');
});
