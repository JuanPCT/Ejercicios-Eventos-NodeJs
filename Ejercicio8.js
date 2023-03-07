const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const emitEvent = () => {
  myEmitter.emit('miEvento');
};

setTimeout(emitEvent, 3000);

myEmitter.on('miEvento', () => {
  console.log('Se emitió el evento después de 3 segundos.');
});
