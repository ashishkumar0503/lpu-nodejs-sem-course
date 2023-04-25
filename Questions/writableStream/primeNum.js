// Implement a nodejs application to create a writable stream with a new
// sample.txt file and perform the following task
// (a) Find the prime numbers upto 100 and write the values to the sample.txt file with the writable stream
// (b) Display the message "Task Completed" at the end of the console window

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    const wstream = fs.createWriteStream("../writableStream/sample.txt");

    wstream.on('error', (err) => {
        console.log(err);
        res.end("File doesn't exists");
    });

    wstream.write('Prime numbers between 1 and 100: ')
    for (let i = 1; i <= 100; i++) {
        let flag = 0; 
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag === 0) {
            wstream.write(`${i.toString() + " "}`);
        }
    }
    console.log('Task Completed');
    res.end('File written');
});

server.listen(1000, () => {
    console.log("Listening to Port 1000");
});