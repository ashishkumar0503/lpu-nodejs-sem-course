// b) Create a node js web server application with the HTTP module 
// for computing the sum of digits of a given number. 
// Accept a number from an input text field of the client page and provide 
// the output value as a response with the click event on a button.

const fs = require('fs');
const http = require('http');

function sum(number) {
    let result = 0;
    let n = number;
    while(n > 0) {
        result += n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        fs.readFile('../ques6/sum.html', 'utf-8', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    } else if(req.method === "POST") {
        let body = '';
        req.on('data', (data) => {
            body += data;
        })
        req.on('end', () => {
            const params = new URLSearchParams(body);
            const query = params.get('num');
            const number = parseInt(query);
            const result = sum(number);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(result.toString());
        });
    }
});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});