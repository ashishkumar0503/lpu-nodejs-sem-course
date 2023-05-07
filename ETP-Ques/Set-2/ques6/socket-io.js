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