//1. Custom Event create on server side and catch on client side
//2. Custom event created on client side and catch on server side

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/socket.html`);
});

io.on('connection', (socket) => {
    console.log('A user has connected');

    //2. custom event created on client side and catch on server side
    socket.on('myCustomEventFromClientSide', (data) => {
        console.log(data);
    })
    
    // setTimeout(() => {
    //     // 1. custom event created on server side and catch on client side
    //     // socket.emit('myCustomEvent', {desc: 'A custom message from server side'});
    // }, 3000)

    socket.on('disconnect', () => {
        console.log('A user has disconnected');
    });
})

http.listen(8000, () => {
    console.log('Listening to port 8000');
});