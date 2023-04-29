var app = require('express')();
var http = require('http').createServer( app );
var io = require('socket.io')( http );

app.get( '/', (req, res) => {
    res.sendFile(`${__dirname}/socket.html`);
});

io.on('connection', (socket) => {
    console.log('A user has connected!');

    setTimeout(() => {
        // socket.send('Sent message from server side by pre-reserved events');
    }, 3000);

    socket.on('disconnect', () => {
        console.log('A user has disconnected');
    })
});

http.listen( 8000, () => {
    console.log('Listening to port 8000');
});