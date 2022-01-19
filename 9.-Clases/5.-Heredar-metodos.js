// Clase Padre
class Persona{
    // Agregar constructor
    constructor(nombre, apellido){
        // Creamos una propiedad y le asignamos el parametro
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this.apellido;
    }
}

// Clase hija
class Empleado extends Persona{
    // Agregamos los parametros del constructor padre
    constructor(nombre, apellido, departamento){
        // Llamar al constructor de la clase padre
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento( departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan','Perez');
console.log(persona1);

let empleado1 = new Empleado('Maria', 'Jimenez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);

// Acedemos a la funcion nombreCompleto
console.log(empleado1.nombreCompleto());