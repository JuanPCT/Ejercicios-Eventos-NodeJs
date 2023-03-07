const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const myEventHandler = () => {
    console.log('Se emitió el evento personalizado');
};

myEmitter.on('myEvent', myEventHandler);

myEmitter.removeListener('myEvent', myEventHandler);
