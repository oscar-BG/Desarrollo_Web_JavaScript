// Contructor de objetos de tipo persona
function Persona(nombre1, apellido1, email1){
    this.nombre = nombre1;
    this.apellido = apellido1;
    this.email = email1;
}
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juanp@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

// Crear un nuevo objeto de tipo persona
let padre = new Persona('Juan','Perez','juan@gmail.com');
console.log(padre);

let madre = new Persona('Laura','Quintero','lau@gmail.com');
console.log(madre);