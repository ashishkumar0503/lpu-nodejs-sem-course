const http = require('http');
const server = http.createServer();
const fs = require('fs');

const isArmstrong = number => {
    let num = number;
    const len = String(num).split("").length;
    let res = 0;
    while(num){
       const last = num % 10;
       res += Math.pow(last, len);
       num = Math.floor(num / 10);
    };
    return res === number;
 };
 const armstrongBetween = (upper) => {
    const res = [];
    for(let i = 1; i <= upper; i++){
       if(isArmstrong(i)){
          res.push(i);
       };
    };
    return res;
 };
  

server.on('request', (req, res) => {
    if (req.method === "GET") {
        fs.readFile('../ques7/arms.html', 'utf-8', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    } else if (req.method === "POST") {
        let body = '';
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            const params = new URLSearchParams(body);
            const query = params.get('num');
            //const number = parseInt(query);
            const result = armstrongBetween(query);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(result.toString());
        });
    }
});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});