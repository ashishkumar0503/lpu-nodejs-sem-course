const http = require('http');
const server = http.createServer();
const fs = require('fs');

function factorial(number) {
    let result = 1;
    for(let i = 2; i <= number; i++) {
        result *= i;
    }       
    return result;
}

server.on('request', (req, res) => {
    if (req.method === "GET") {
        fs.readFile('../ques4/fact.html', 'utf-8', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    } else if(req.method === "POST") {
        let body = '';
        req.on('data', (data) => {
            body += data;
        })

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const query = params.get('num');
            const number = parseInt(query);
            const result = factorial(number);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(result.toString());
        });
    }
});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});