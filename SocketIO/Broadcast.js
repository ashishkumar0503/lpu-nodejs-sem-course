// 1. Broadcasting
// (a) Users can see how many user connected
// (b) If user connect, then we will show a welcome message to users, and other users can see how many user connected

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/socket.html`);
});

var users = 0;

io.on('connection', (socket) => {
    console.log('A user has connected');
    users++;

    // global broadcast
    // io.sockets.emit('broadcast', {message: users + ' users connected...'});
    
    // custom broadcast
    socket.emit('newUserConnect', {message: 'Hi, Welcome Dear...'});
    socket.broadcast.emit('newUserConnect', {message: users + ' users connected'});

    socket.on('disconnect', () => {
        console.log('A user has disconnected');
        users--;
        // io.sockets.emit('broadcast', {message: users + ' users disconnected...'});

        socket.broadcast.emit('newUserConnect', {message: users + ' users disconnected...'});
    });
});

http.listen(8000, () => {
    console.log('Listening to port 8000');
});