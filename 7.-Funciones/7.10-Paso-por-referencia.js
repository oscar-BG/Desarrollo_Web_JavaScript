// Paso por referencia

// Creamos un objeto, contien atributos y metodos
const persona = {
    nombre : 'Juan',
    apellido: 'Perez'
}

function cambiarValor(p1){
    p1.nombre = 'Oscar'; //acedemos al atributo
    p1.apellido = 'Bautista';

}

// Paso por referencia
cambiarValor(persona);
console.log(persona);