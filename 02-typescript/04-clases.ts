class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido: string = '';

    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = `${nombreParametro} ${apellidoParametro}`;
    }

    private mostrarNombreApellido(): string {
        return this.nombreYApellido;
    }
}

class Usuario extends Persona {
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,
        public estadoCivil: string,
    ) {
        super(nombreParametro, apellidoParametro);
    }
}

const ivanUser = new Usuario(
    'Iván',
    'Toromoreno',
    '17234665888',
    'soletero'
);

console.log(ivanUser.nombre);
console.log(ivanUser.apellido);
console.log(ivanUser.cedula);
console.log(ivanUser.estadoCivil);
