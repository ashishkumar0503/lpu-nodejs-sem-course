// Q6 a) Implement a client-server application with the express, HTTP, and socket.io 
// modules to display the student (yóur) details in the server console after getting 
// a request (connection) from a client. Then Broadcast the only odd visitor count from 
// the server to all clients with the new client connections.

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/message.html`);
});

let visitorCount = 0;

io.on('connection', (socket) => {
    visitorCount++;
    console.log(`${visitorCount} user connected...`);
    if (visitorCount % 2 !== 0) {
        socket.emit('oddVisitorCount', visitorCount);
    }

    socket.on('studentDetails', (data) => {
        console.log('Student name is: ' + data.name);
        console.log('Student reg no is: ' + data.regNo);
    })

    socket.on('disconnect', () => {
        visitorCount--;
        console.log(`${visitorCount}th user disconnected`);
        if (visitorCount % 2 !== 0) {
            socket.emit('oddVisitorCount', visitorCount);
        }
    })
})

http.listen(8000, () => {
    console.log('Listening to port 8000');
});