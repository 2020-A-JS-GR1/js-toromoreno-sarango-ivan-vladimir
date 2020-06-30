const fs = require('fs');

function appendArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const contenidoAnterior = data;
                const contenidoAEscribir = contenidoAnterior + contenidoNuevo;
                escribirArchivo(path, contenidoAEscribir);
            }
        })
}

escribirArchivo(path, contenido) {
    fs.writeFile(
        path,
        contenidoAEscribir,
        (err2, data2) => {
            if (err2) {
                console.log(err2);
            } else {
                console.log('escritura terminada');
            }
        }
    )
}

appendArchivo('./ejemplo.txt', 'prueba');