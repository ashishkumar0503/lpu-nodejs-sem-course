// 1. Create a nodejs application to display the implementation of events and timers, listeners

// Events and Listeners
const EventEmitter = require('events');
const events = new EventEmitter();

events.on('saved', () => {
    console.log('A saved event occurred');
});

events.on('start', (start, end) => {
    console.log(`Started from ${start} and ends in ${end}`);
});

events.emit('saved'); // Listeners
events.emit('start', 1, 100);

// Timers
// setInterval(function A() {
//     console.log('Hello world');
// }, 1000);




