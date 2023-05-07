// Q1 a) Include the http module to create a server application and use the fs module 
// to duplicate the original.txt file as the duplicate.txt file in the server with 
// the client(user) request from the browser. 
// Create a source.txt file and add personal information 
// (name, city, state) in the server system for duplication.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/duplication.txt') {
        fs.readFile('../ques1/source.txt', 'utf-8', (err, data) => {
            if (err) throw err;

            fs.writeFile('../ques1/duplication.txt', (data), (err) => {
                if (err) throw err;

                console.log('File has been duplicated');
                res.end('File has been duplicated');
            });
        });
    } else if(req.url === '/source.txt') {
        const info = 'Name: Ashish Kumar\nCity: Phagwara\nState: Punjab';
        fs.writeFile('../ques1/source.txt', info, (err, data) => {
            if (err) throw err;

            console.log('File has been created');
            res.end('Source file has been created');
        });
    }
});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});