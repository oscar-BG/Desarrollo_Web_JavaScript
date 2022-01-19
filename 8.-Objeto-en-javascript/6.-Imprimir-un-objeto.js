let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juanp@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

// Imprimir en consola
console.log(persona);

// En un navegador web concatenado valor de cada propiedad

console.log(persona.nombre + ', ' + persona.apellido);

// Utilizando for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Object
let personaArray = Object.values(persona)
console.log(personaArray);

// 

let personaString = JSON.stringify(persona);
console.log(personaString)