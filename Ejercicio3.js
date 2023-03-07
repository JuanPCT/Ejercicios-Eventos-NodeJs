const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.emit('myEvent', { name: 'Juan', age: 22 });

myEmitter.on('myEvent', (data) => {
  console.log(`Nombre: ${data.name}, Edad: ${data.age}`);
});
