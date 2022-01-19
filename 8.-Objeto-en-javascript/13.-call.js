let persona1 = {
    nombre: 'Juan',
    apellido: 'perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Uso de call para usar el metodo nombreCompleto que pertenece al objeto persona1

console.log(persona1.nombreCompleto.call(persona2));
