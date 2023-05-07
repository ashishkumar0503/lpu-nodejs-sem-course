const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/socket.html`);
});

// custom namespace
var namespace = io.of('/custom-namespace');

namespace.on('connection', (socket) => {
    console.log('A user has connected');

    namespace.emit('customEvent', 'Custom namespace event called');

    socket.on('disconnect', () => {
        console.log('A user has disconnected');
    });
});

http.listen(8000, () => {
    console.log('Listening to port 8000');
});