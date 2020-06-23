/**
 * Enunciado:
 * Deber 01
 * Utilizando el arreglo de la clase vamos a realizar las siguientes operaciones:
 * Por cada vocal dentro de la palabra del estudiante 0.1 decimas
 * Por cada consonante dentro de la palabra del estudiante 0.05 decimas
 * Filtren cuales personas pasaron
 * Ejm: Carolina => 14(original) + aoia (4)*.1 + crln(4).05 = 14.6
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];
let arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];
const noteToPass = 14;

function getExtraPoints(word) {
    let points = 0;
    [...word].forEach(letter => {
        vowels.includes(letter) ? points += 0.1 : points += 0.05;
    });
    return points;
}

arreglo = arreglo.map(estudiante => {
    estudiante.nota += getExtraPoints(estudiante.nombre);
    return estudiante;
});

pasados = arreglo.filter(estudiante => {
    return estudiante.nota >= noteToPass;
})

console.log(pasados);
