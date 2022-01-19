let persona1 = {
    nombre: 'Juan',
    apellido: 'perez',
    nombreCompleto: function(titulo){
        return titulo + '; ' + this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Uso de apply para usar el metodo nombreCompleto que pertenece al objeto persona1

console.log(persona1.nombreCompleto('Ing'));

let arreglo = ['Ing'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));