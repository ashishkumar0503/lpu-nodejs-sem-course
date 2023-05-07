const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/socket.html`);
});

var roomno = 1;
var full = 0;

io.on('connection', (socket) => {
    console.log('A user has connected');

    socket.join('room-'+roomno);
    io.sockets.in('room-'+roomno).emit('connectedRoom', 'You are connected to room no. ' + roomno);

    // multiple rooms with limit
    full++;
    if (full >= 2) {
        full = 0;
        roomno++;
    }

    socket.on('disconnect', () => {
        console.log('A user has disconnected');
    });
});

http.listen(8000, () => {
    console.log('Listening to port 8000');
});