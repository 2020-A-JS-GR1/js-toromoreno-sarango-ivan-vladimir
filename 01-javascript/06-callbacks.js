const fs = require('fs');

console.log('Primero');

fs.readFile(
    './ejemplo.txt',
    'utf-8',
    (error, contenido) => {
        console.log('Segundo');
        if (error) {
            console.log('Hubo error', error);
        } else {
            console.log(contenido);
        }
    }
)

console.log('Final');
