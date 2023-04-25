const http = require('http');

const server = http.createServer((req, res) => {
    res.write("I'm write\n");
    
    res.end("Hello, I'm a response in a web server");

    //res.write() : It will not work after res.end() has been declared. It will work only before res.end()
    //When we write res.end() multiple times, only one will be executed which is declared first
    //But when we write res.write() multiple times, it will work
});

server.listen(1000, () => {
    console.log("Listening to port number 1000");
});

