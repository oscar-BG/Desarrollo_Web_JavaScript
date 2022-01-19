let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juanp@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

// Acceder a la propiedad
console.log(persona.nombre);

// Acceder a la propiedad 2
console.log(persona['apellido']);

// Acceder a las propiedades con fot in
for(propiedad in persona){
    // Nombre de la propiedad
    console.log(propiedad);
    // Contenido de la propiedad
    console.log(persona[propiedad]);
}