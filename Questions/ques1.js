// Create an application in nodejs for basic unitconverter using events

// const EventEmitter = require('events');
// const event = new EventEmitter();
const http = require('http');
const server = http.createServer();

server.on("request", (req, res)=> {
    var far = 132;
    var cel = ((far-32) * 5/9).toFixed(2);
    res.end(cel);
});

server.listen(1000, () => {
    console.log("Server started");
});
// event.on("start", () => {
    // var far = 132;
    // var cel = ((far-32) * 5/9).toFixed(2);
//     console.log(cel);
// });

// event.emit("start");