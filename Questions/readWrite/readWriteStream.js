// Create a readable stream using fs module and demonstrate its working.
// Create a writable stream using fs module and demonstrate its working.

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    // 1.
    // const rstream = fs.createReadStream('../readWrite/read.txt');

    // rstream.on('error', (err) => {
    //     console.log(err);
    //     res.end('File doesnt exist');
    // });
    // rstream.on('data', (readData) => {
    //     res.end(readData);
    // });
    // rstream.on('end', () => {
    //     res.end();
    // });

    // 2.

    var data = "I'm writable stream";
    const wstream = fs.createWriteStream('../readWrite/write.txt');

    //wstream.write("I'm writable stream");
    wstream.write(data, 'utf-8');

    // To end writing a file
    wstream.end();

    wstream.on('error', (err) => {
        console.log(err.stack);
    });

    wstream.on('finish', () => {
        res.end('Finished Writing');
    })
});

server.listen(1000, () => {
    console.log('Listening to port 1000');
});