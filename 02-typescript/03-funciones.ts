function sumarNumeros(
    numeroInicial: number,
    ...numerosASumarse: number[]
): number {
    return numeroInicial;
}

sumarNumeros(1, 2, 3, 4, 5);

function imprimir(mensaje: string): void {
    console.log('Hola', mensaje);
}

const arregloNumeros: number[] = [1, 2, 3];
const arregloNumerosDos: Array<number> = [1, 2, 3];
const arreglosNumerosTres: (number | string | boolean)[] = [1, "a", true];
const arreglosNumerosCuatro: Array<number, string, boolean> = [1, "a", true];
let arregloNumerosOTexto: number[] | string[] = ['1', '2'];
arregloNumerosOTexto = [1, 2, 3];
