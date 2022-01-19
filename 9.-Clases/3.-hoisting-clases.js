// Primero se crea la clases y despues la llamamos
// No es posible crear objetos antes de declarar la clase
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