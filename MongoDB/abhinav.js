// server.js

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ashish")
.then(() => console.log('Connected Successfully'))
.catch((err) => console.log(err));

// Define message schema
const messageSchema = new mongoose.Schema({
  text: String,
  timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/abhi.html`)
});

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('a user connected');

  // Receive message from client and store in database
  socket.on('message', (text) => {
    console.log(`message: ${text}`);
    const message = new Message({ text });
    message.save();
    io.emit('message', text);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start server
http.listen(8000, () => {
  console.log('listening on *:8000');
});