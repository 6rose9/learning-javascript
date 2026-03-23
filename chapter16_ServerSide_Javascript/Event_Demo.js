//create and handle your own events.
const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

// 👉 “When something happens → run this function”
setTimeout(()=>{
    console.log('Emitting event1');
    eventEmitter.emit('taskDone');
},3000);

eventEmitter.on('taskDone', ()=>{
    console.log('taskDone event received, executing callback');
});