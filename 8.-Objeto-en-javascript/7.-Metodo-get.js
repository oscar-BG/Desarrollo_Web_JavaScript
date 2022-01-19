
// Metodo Get/obtener
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juanp@mail.com',
    edad: 28,
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

// Acceder a su valor
console.log(persona.nombreCompleto);