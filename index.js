const fs = require('fs');
const http = require('http');

const indexPage = fs.readFileSync('./index.html', 'utf-8');
const empPage = fs.readFileSync('./emp.html', 'utf-8');
const loginPage = fs.readFileSync('./login.html', 'utf-8');

const server = http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/index') {
        res.end(indexPage);
    } else if(req.url === '/emp') {
        res.end(empPage);
    } else if(req.url === '/login') {
        res.end(loginPage);
    } else {
        res.end("Error 404 : Page not found");
    }
});

server.listen(4000, () => {
    console.log("Server running at port 4000");
})



