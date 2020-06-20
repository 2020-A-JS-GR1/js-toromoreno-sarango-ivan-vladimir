const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Iván',
        nota: 6
    },
    {
        id: 3,
        nombre: 'Kali',
        nota: 20
    },
    {
        id: 4,
        nombre: 'Marcelo',
        nota: 4
    },
    {
        id: 5,
        nombre: 'Pedro',
        nota: 12
    },
]

const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual),
                console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === 'Iván';
        }
    );
console.log('respuestaFind', respuestaFind);


const respuestaFindIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual),
                console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === 'Iván';
        }
    );
console.log('respuestaFind', respuestaFindIndex);

const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual),
                console.log('arregloCompleto', arregloCompleto);
        }
    );
console.log('respuestaFind', respuestaForEach);


const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            valorActual.nota++;
            return valorActual;
        }
    );
console.log('respuestaFind', respuestaMap);

const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota > 10;
        }
    );
console.log('respuestaFind', respuestaFilter);
