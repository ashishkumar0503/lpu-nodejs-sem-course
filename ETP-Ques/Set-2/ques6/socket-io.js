// A)Write a program using socket.io to send " wow server" message from 
// client to the server after every 2 seconds but after 12 seconds the client must 
// stop sending this "wow server" message to the server

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/message.html`)
});

io.on('connection', (socket) => {
    console.log('A user has connected');

    let interval = setInterval(() => {
        socket.emit('message', 'Wow server')
    }, 2000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('A user has disconnected');
    }, 13000);
});

http.listen(8000, () => {
    console.log('Listening to port 8000');
});