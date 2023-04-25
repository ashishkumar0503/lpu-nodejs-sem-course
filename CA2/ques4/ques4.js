// Demonstrate the working of streams and fire any two events in nodejs

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream('../ques4/streams.txt');

    rstream.on('error', (err) => {
        console.log(err);
    });
    rstream.on('data', (readData) => {
        res.write(readData);
    });
    rstream.on('end', () => {
        res.end();
    });
});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});
