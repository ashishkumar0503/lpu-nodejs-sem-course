const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile('../ques6/fibo.html', 'utf-8', (err, content) => {
        if (err) {
            console.error(err);
        } else {
            res.end(content);
        }
    });
});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});