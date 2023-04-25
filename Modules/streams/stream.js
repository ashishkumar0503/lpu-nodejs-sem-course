// Streams are the objects that let you read data
// from a source or write data to the destination in
// continuous manner.

// 4 Types of streams:
// i. Readable: Stream which is used for read operation
// ii. Writable: Stream which is used for write operation
// iii. Duplex: Stream used for both read and write operation
// iv. Transform: A type of duplex stream where output is computed based on input


//Task
/*
const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');
const event = new EventEmitter();

var readData;
event.on('read', (fileName) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if(err) throw err;
        console.log(data);
        readData = data;
    })
})

const server = http.createServer((req, res) => { 
    res.end(readData);
});

server.listen(1000, () => {
    event.emit('read', "../streams/stream.txt");
    console.log("Server created");
})
*/

/*
const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile("../streams/stream.txt", (err, data) => {
        if(err) throw err;
        res.end(data.toString());
    });
});

server.listen(1000, () => {
    console.log("Listening to Port 1000");
});
*/

// Do the same task with stream
const fs = require('fs');
const http = require('http');
const server = http.createServer();

//1. createReadStream()

server.on('request', (req, res) => {
    const rstream = fs.createReadStream("stream.txt");
    // data will be read chunk by chunk in continuous manner

    //using error event to check file exist or not
    rstream.on('error', (err) => {
        console.log(err);
        res.end("File doesn't exist");
    });
    rstream.on('data', (readData) => {
        res.write(readData);
    });
    rstream.on('end', () => {
        res.end();
    });
});

server.listen(1000, () => {
    console.log("Listening to Port 1000");
});