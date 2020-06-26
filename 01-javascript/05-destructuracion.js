const adrian = {
    nombre: 'Adrian'
};
const carolina = {
    nombre: 'Carolina',
    apellido: 'Eguez'
};

const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];

const adrianCarolina = {
    ...adrian,
    ...carolina
}

const superArreglo = [
    ...arregloUno,
    ...arregloDos
]

// adrianCarolina.nombre = 'Juan';

console.log(adrian);
console.log(adrianCarolina);
console.log(superArreglo);

