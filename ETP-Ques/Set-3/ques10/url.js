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
