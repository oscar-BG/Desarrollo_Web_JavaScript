// new, reserva un espacio en memoria y crea un objeto

let persona = new Object();
persona.nombre = 'Carlos';
persona.apellido = 'Bautista';
persona.direccion = "Playas";
persona.telefono = "2222222222";

persona.miFuncion = function(){
    return this.nombre;
}

console.log(persona.nombre);
console.log(persona.miFuncion());