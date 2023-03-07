const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('error', (err) => {
  console.error('Ocurrió un error:', err);
});

myEmitter.emit('error', new Error('Algo salió mal'));

