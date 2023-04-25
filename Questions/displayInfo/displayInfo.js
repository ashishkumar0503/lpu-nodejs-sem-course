// Create a web server application with http module for the following scenario -
// (a) Create a test.txt file and add personal information (name, roll no) in the server system
// (b) Access the file and display the content as a response to the client req in the browser

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    fs.writeFile('../displayInfo/test.txt', `${'Ashish Kumar, 12008756'}`, (err) => {
        if (err) throw err;

        fs.readFile('test.txt', 'utf-8', (err, content) => {
            if (err) throw err;

            res.end(content);
        })
    });
    //res.end('File written in test.txt');
});

server.listen(1000, () => {
    console.log('Listening to port 1000');
})