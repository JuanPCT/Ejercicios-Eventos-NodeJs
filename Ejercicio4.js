const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.once('myEvent', () => {
    console.log('Se emitió el evento personalizado');
});

myEmitter.emit('myEvent');