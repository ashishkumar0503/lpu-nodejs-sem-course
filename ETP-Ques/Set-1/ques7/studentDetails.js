const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

let visitorCount = 0;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/student.html`)
})

// Handle socket.io connections
io.on('connection', (socket) => {
  visitorCount++;
  console.log(`New visitor connected. Total visitor count: ${visitorCount}`);

  // Send student details to the server console on request
  socket.on('getStudentDetails', (student) => {
    console.log(`Received student details: ${JSON.stringify(student)}`);
  });
  

  // Broadcast odd visitor count to all clients
  if (visitorCount % 2 === 1) {
    io.emit('oddVisitorCount', visitorCount);
  }

  // Disconnect event
  socket.on('disconnect', () => {
    visitorCount--;
    console.log(`Visitor disconnected. Total visitor count: ${visitorCount}`);

    // Broadcast odd visitor count to all clients
    if (visitorCount % 2 === 1) {
      io.emit('oddVisitorCount', visitorCount);
    }
  });
});

// Start the server
server.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});
