//Pipe Method / Event : Take readable stream and convert it into writable stream

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream("../streams/stream.txt");
    rstream.pipe(res);
});

server.listen(4000, () => {
    console.log("Listening to port 4000");
});
