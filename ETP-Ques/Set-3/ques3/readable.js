const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    const rs = fs.createReadStream('../ques3/employee.txt');

    rs.on('error', (err) => {
        console.log(err);
    });
    rs.on('data', (data) => {
        res.write(data);
    });
    rs.on('end', () => {
        res.end();
    });
});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});