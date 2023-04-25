const EventEmitter = require('events');

//EventEmitter is a class, create a new instance of the EventEmitter class.
const event = new EventEmitter();

//Attach one or more event handlers to the event by using the on() method.
event.on('saved', () => {
    console.log("A saved event occurred");
});

// The event will occurred only once no matter how many calls(emit) have been done.
// event.once('saved', () => {
//     console.log("A saved event occurred");
// });

event.on('start', (start, end) => {
    console.log(`Started from ${start} to ${end}`);
});

event.emit('saved');
event.emit('saved');
event.emit('start', 1, 100);
console.log("abc", event.getMaxListeners(5));  // => abc, 10
event.emit();
