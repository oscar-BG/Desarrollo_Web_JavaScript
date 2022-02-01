class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{

    constructor(nombre, sueldo, departamento){
        super(nombre,sueldo)
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} departamento: ${this._departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
    }
    if(tipo instanceof Empleado){
        console.log("Es un tipo empleado");
    }if(tipo instanceof Object){
        console.log("Es un tipo object");
    }
}

let gerente1 = new Gerente('Carlos', 500, 'Sistemas');
let empleado1 = new Empleado('Juan',3000);

imprimir(gerente1);
imprimir(empleado1);