class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get IdPersona(){
        return this._idPersona;
    }
    get Nombre(){
        return this._nombre;
    }
    set Nombre(nombre){
        return this._nombre = nombre;
    }
    get Apellido(){
        return this._apellido;
    }
    set Apellido(apellido){
        return this._apellido = apellido;
    }
    get Edad(){
        return  this._edad;
    }
    set Edad(edad){
        return this._edad = edad;
    }
    toString(){
        return `
            ${this._idPersona} 
            ${this._nombre} 
            ${this._apellido} 
            ${this._edad}`;
    }
}

class Empleado extends Persona{
    static contarEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contarEmpleado;
        this._sueldo = sueldo;
    }
    get IdEmpleado(){
        return this._idEmpleado;
    }
    get Sueldo(){
        return this._sueldo;
    }
    set Sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo;
    }  
}
class Clientes extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Clientes.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get IdCliente(){
        return this._idCliente;
    }
    get FechaRegistro(){
        return this._fechaRegistro;
    }
    
    set FechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }
}

let persona1 = new Persona('Juan','Perez', '23');
console.log(persona1.toString());

let persona2 = new Persona('Carlos', 'Remirez');
console.log(persona2.toString());

let empleado1 = new Empleado('Karla', 'Gomez', '23',5000);
console.log(empleado1.toString());
let empleado2 = new Empleado('laura','Quintero', '23', 700);
console.log(empleado2.toString());
let cliente1 = new Clientes('Miguel', 'Servantes','30', new Date());
console.log(cliente1.toString());

let cliente2 = new Clientes('Maria', 'Lara', '34', new Date());
console.log(cliente2.toString());