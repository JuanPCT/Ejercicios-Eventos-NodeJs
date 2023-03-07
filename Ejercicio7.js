const { Readable, Writable } = require('stream');

const readableStream = new Readable({
  read() {
    this.emit('leerDatos');
  }
});

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    this.emit('escribirDatos', chunk);
    callback();
  }
});

readableStream.on('leerDatos', () => {
  console.log('Se leyeron datos del stream.');
});

writableStream.on('escribirDatos', (chunk) => {
  console.log(`Se escribieron ${chunk.length} bytes en el stream.`);
});

writableStream.write('Hola, mundo!');
