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
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde memtodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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
    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento;
    }
    
}

let persona1 = new Persona('Juan','Perez');
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');

// No es posible aceder a un metodo statico desde un objeto
//persona1.saludar();

// La clase statis es accesible desde la clase.
Persona.saludar();

// Mandar un objeto a la clase statico
Persona.saludar2(persona1);

// Lllamar la funcion static desde la clase hija
Empleado.saludar();
Empleado.saludar2(empleado1);