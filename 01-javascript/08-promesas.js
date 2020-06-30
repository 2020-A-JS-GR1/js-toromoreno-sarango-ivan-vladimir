const miPrimerPromesa = new Promise(
    (resolve, reject) => {
        resolve('Felicidad');
    }
)
miPrimerPromesa
    .then(
        (contenido) => {
            console.log('Contenido then', contenido);
        }
    )
    .catch(
        (error) => {
            console.error('Contenido catch', error);
        }
    )

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(numero);
            } else {
                reject('Es impar');
            }
        }
    )
    return miPrimerPromesa;
}

function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    )
    return miPrimerPromesa;
}

promesaEsPar(2)
    .then(
        (contenido) => {
            console.log('Contenido then', contenido);
            return promesaElevarAlCuadrado(contenido);
        }
    )
    .then(
        (numeroParAlCuadrado) => {
            console.log('Numero par al cuadrado: ', numeroParAlCuadrado)
        }
    )
    .catch(
        (error) => {
            console.error('Contenido catch', error);
        }
    )
