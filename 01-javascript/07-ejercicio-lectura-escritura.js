const fs = require('fs');

function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const contenidoAnterior = data;
                const contenidoAEscribir = contenidoAnterior + contenidoNuevo;
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
        })
}

escribirArchivo('./ejemplo.txt', 'prueba');