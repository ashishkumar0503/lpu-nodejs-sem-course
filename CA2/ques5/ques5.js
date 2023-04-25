// Create a nodejs application to write a atsring "This is a Nodejs class"
// Print first five and last three characters using buffer module.
const http = require('http');
const server = http.createServer();


server.on('request', (req, res) => {
    const str = "This is a Nodejs class";
    const buf = Buffer.from(str, 'utf-8');
    
    res.write('This is a Nodejs class\n');
    res.write(`First 5 characters: ${buf.toString('utf-8', 0, 5)}\n`);
    res.write(`Last 3 characters: ${buf.toString('utf-8', buf.length - 3, buf.length)}`);

    res.end();
});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});
