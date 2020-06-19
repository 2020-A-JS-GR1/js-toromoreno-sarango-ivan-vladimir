const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arregloTodo = [
    1, 2.3, true, 'HOLA', null, undefined, {}, [1, 2, true]
];


for (let numero of arreglo) { // Valores
    console.log('numero', numero);
}

for (let indice in arreglo) { // Índices
    console.log('numero', indice);
}

arreglo.push(11);
console.log(arreglo);

arreglo.pop();
console.log(arreglo);

arreglo.unshift(0);
console.log(arreglo);

arreglo.splice(0, 1);
console.log(arreglo);

arreglo.splice(0, 0, 1, 2, 3);
console.log(arreglo);

const indice = arreglo.indexOf(4);
console.log(indice);

arreglo.splice(indice, 1);
console.log(arreglo);
