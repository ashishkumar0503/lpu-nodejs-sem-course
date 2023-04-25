var http = require('http');

//Handle HTTP Request (Routing)

var server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Welcome to index page");
    } else if(req.url === '/login') {
        res.end("Welcome to Login Page");
    } else if(req.url === '/emp') {
        res.end("Welcome to Employees Page");
    } else if(req.url === '/emp/dashboard') {
        res.end("Welcome to Employee Dashboard Page");
    } else {
        res.end("Page 404");
    }
})

server.listen(2000, () => {
    console.log("Server started at port 2000");
})