interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number;
    sueldo?: number;
    casado: boolean;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string;
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
}

const ivan: Usuario = {
    nombre: 'Iván',
    apellido: 'Toromoreno',
    casado: false,
    estado: 'AC',
    imprimirUsuario: (mensaje: string) => {
        return 'El mensaje es: ' + mensaje;
    },
    sueldo: 500,
    calcularImpuesto: (impuesto: number) => {
        if (ivan.sueldo) {
            return ivan.sueldo + ivan.sueldo * impuesto;
        } else {
            return 0;
        }
    },
    estadoActual: () => {
        switch (ivan.estado) {
            case 'AC':
                return 'AP'
            case 'IN':
                return 'AF'
            case 'BN':
                return 'AT'
        }
    }
}
