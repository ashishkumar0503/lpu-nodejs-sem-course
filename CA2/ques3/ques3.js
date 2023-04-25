const http = require("http");
const url = require("url");

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write(`<html><body><a href='/home'>Home</a><br/><a href='/contact'>Contact</a><br/><a href='/support'>Support</a><br/></body></html>`);
        res.end();
    }
    if(req.url == '/home'){
        res.write(`<html><body>This is the home page<br/><br/><a href='/'>Back</a></body></html>`);
        res.end();
    }
    if(req.url == '/contact'){
        res.write(`<html><body>This is the contact page<br/><br/><a href='/'>Back</a></body></html>`);
        res.end();
    }
    if(req.url == '/support'){
        res.write(`<html><body>This is the support page<br/><br/><input type="text" placeholder="Hi, how can I help you!"/><br/><br/><a href='/'>Back</a></body></html>`);
        res.end();
    }
});

server.listen(8000, ()=>{
    console.log('Listening to port 8000');
});