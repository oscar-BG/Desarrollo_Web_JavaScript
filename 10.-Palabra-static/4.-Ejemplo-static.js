// Clase Padre
class Persona{
    // Atributos static
    static contadorPersonas = 0;

    // Agregar constructor
    constructor(nombre, apellido){
        // Creamos una propiedad y le asignamos el parametro
        this._nombre = nombre;
        this._apellido = apellido;
        // Acceder a la variable static desde el construcotor o funcion
        this._id = ++Persona.contadorPersonas;
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
        return this._id + ' ' + this._nombre + ' ' + this.apellido;
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
console.log(persona1.toString());

let empleado1 = new Empleado('Maria','Jimenez','Sistemas');
console.log(empleado1.toString());
