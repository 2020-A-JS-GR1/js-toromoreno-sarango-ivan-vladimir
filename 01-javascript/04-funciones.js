// 04-funciones.js

function soloNumeros(a, b, c) {
    return a - b + c; // Valor a devolver
}

function soloLetras(a, b, c) { // Devuelve undefined
    console.log(a, b, c);
}

// soloNumeros('v',true,[1,2,3]);
soloNumeros();
soloNumeros(1, 2, 3, 4, 5, 6, 7);
soloLetras();

// Funciones nombradas
function funcionNombrada() { }
funcionNombrada();
const funcionNombradaDos = function () { } // Funciones Anónimas
var funcionNombradaTres = function () { }; // Funciones sin nombre
let funcionNombradaCuatro = function opcional() { } // Funciones anónimas
funcionNombradaDos();
funcionNombradaTres();
funcionNombradaCuatro();

const funcionNombradaCinco = () => {
}; // Fat arrow functions

const funcionNombradaSeis = (x) => {
    return x + 1; // Fat arrow functions
}

const funcionNombradaSiete = (x) => x + 1;

const funcionNombradaOcho = x => x + 1;

const funcionNombradaNueve = (x, y, z) => x + y + z;

function sumarNumeros(numeroInicial, ...otrosNumeros) { // Parámetros infinitos
    return numeroInicial + otrosNumeros.reduce((a, v) => a + v, 0);
}

console.log(sumarNumeros(1, 2, 3, 4, 5));
