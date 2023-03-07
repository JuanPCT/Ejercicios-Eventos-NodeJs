const os = require('os');

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

setInterval(() => {
    let freemem = os.freemem();

    myEmitter.emit('myEvent', freemem);
}, 2000);

myEmitter.on('myEvent', (memory) => {
    console.log(memory);
});


