class Persona{
    // Agregar constructor
    constructor(nombre, apellido){
        // Creamos una propiedad y le asignamos el parametro
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Crear objetos
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);