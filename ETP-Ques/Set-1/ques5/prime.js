// Create a web server application with the http module for the following scenario 
// a) Create a server node.js application using http module to verify whether a number is prime or not. 
// b) Accept a number from the input text field of the client page and provide the output values as a 
// response with the click event on a button

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile('../ques5/prime.html', 'utf-8', (err, content) => {
        if (err) {
            console.error(err);
        } else {
            res.end(content);
        }
    })

});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});