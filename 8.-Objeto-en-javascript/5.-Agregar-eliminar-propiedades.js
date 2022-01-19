let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juanp@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
persona.tel = '2222222222';

delete persona.tel;

console.log(persona);
