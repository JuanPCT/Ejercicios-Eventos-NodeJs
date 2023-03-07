const EventEmitter = require('events');
const miEmitter = new EventEmitter();

miEmitter.on('mensaje', (mensaje)=>{
    console.log(`Se recibio un mensaje: ${mensaje}`);
});

miEmitter.emit('miEvento');
