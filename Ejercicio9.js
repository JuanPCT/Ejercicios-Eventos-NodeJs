process.on('exit', (code) => {
    console.log(`El proceso ha finalizado con código ${code}`);
});

process.on('uncaughtException', (err) => {
    console.error('¡Excepción no capturada:', err.message);

    process.exit(1); 
});

throw new Error('Algo salió mal');
