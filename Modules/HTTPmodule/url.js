const http = require('http');

const server = http.createServer((req, res) => {
    res.write("I'm write\n");

    console.log(req.url); //Going to fetch the url that you try to access with server
    
    res.end("Hello, I'm a response in a web server");
});

server.listen(8000, () => {
    console.log("Listening to port number 8000");
});

