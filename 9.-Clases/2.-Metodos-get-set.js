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
}

// Crear objetos
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.nombre);

// Llamamos al metodo set y cambiamos el nombre
persona1.nombre = "Pedro";

// Volvemos a llamar al metodo get y imprimimos el contenido en pantalla
console.log(persona1.nombre);
