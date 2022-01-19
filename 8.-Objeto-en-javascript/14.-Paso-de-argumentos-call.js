let persona1 = {
    nombre: 'Juan',
    apellido: 'perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Uso de call para usar el metodo nombreCompleto que pertenece al objeto persona1

console.log(persona1.nombreCompleto.call(persona2, 'ING', '2323443'));