// Mutable e inmutables
// Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;
// Constantes
const configuracionArchivos = 'PDF';
// configuracionArchivos = 'XML';
// Tipos de variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = 'Adrian'; // string
const booleano = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
if (1) {
    console.log('Es truty');
} else {
    console.log('Es falsy');
}
if (-1) {
    console.log('Es truty');
} else {
    console.log('Es false')
}
if (null) {
    console.log('Es truty');
} else {
    console.log('Es falsy');
}
if (undefined) {
    console.log('Es truty');
} else {
    console.log('Es falsy');
}

// Orden de importncia
// 1) "const"
// 2) "let"
// 3) X -> "var"

// Objetos Js (JSON) - Arreglos

const ivan = {
    nombre: 'Iván', //lave: valor,
    'apellido': 'Toromoreno',
    edad: 23,
    hijos: null,
    casado: false,
    zapatos: {
        color: 'plomo',
        talla: '40'
    },
    mascotas: [
        'Kirenya',
        'Lunita'
    ],
}; // object

ivan.nombre; // 'Iván'
ivan.apellido // 'Toromoreno'
ivan['nombre'] // Iván
console.log(ivan);
ivan.nombre = 'Vladimir';
console.log(ivan);
ivan['nombre'] = 'Iván;'
console.log(ivan);
ivan.sueldo = 1000;
console.log(ivan);
ivan['gastos'] = 200;
console.log(ivan);
ivan.nombre = undefined;
delete ivan.nombre;

console.log(Object.keys(ivan));

console.log(Object.values(ivan));

let e1 = 5;
let e2 = e1;
e2++;
console.log(e1);

let rafael = {
    nombre: 'Rafael',
}

let lenin = Object.assign({}, rafael);

lenin.nombre = 'Lenin';

console.log(rafael);
console.log(lenin);

const arregloNumeros = []; //object


console.log(arregloNumeros);