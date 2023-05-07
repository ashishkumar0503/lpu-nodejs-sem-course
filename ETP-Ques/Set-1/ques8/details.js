// Implement TCP Socket client and server applications with the following criteria. 
// a) Connect and send your details to the server from the client application 
// b) Display the student details in the server terminal after getting a request (connection) from a client terminal 
// c) Send a "Thank you" message to the client terminal.

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/socket.html`);
});


io.on('connection', (socket) => {
    console.log('A user has connected');

    socket.on('studentDetails', (data) => {
        console.log('Student name is: ' + data.name);
        console.log('Student reg no is: ' + data.regNo);
    })

    socket.on('disconnect', () => {
        console.log('Thank you');
    })
})

http.listen(8000, () => {
    console.log('Listening to port 8000');
});