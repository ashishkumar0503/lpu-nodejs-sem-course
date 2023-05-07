// Q8 a) Implement a client-server application with the express, HTTP, and socket.io 
// modules to display the student (your) details in the server console after getting a 
// request (connection) from a client. Then Trigger events from the server to display a 
// series of even numbers after every 2 seconds on the client web page. 
// Finally, display Thank you in the server console with the termination of connect from the client.

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/connection.html`);
});

io.on('connection', (socket) => {
    console.log('A user has connected');

    socket.on('studentDetails', (data) => {
        console.log('Student name is: ' + data.name);
        console.log('Student reg no is: ' + data.regNo);
    });

    let num = 0;
    let result = [];

    let interval = setInterval(() => {
        num += 2;
        result.push(num);
        socket.emit('even', result);
    }, 2000);

    socket.on('disconnect', () => {
        clearInterval(interval);
        console.log('Thankyou');
    })
})

http.listen(8000, () => {
    console.log('Listening to port 8000');
});