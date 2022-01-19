// Contructor de objetos de tipo persona
function Persona(nombre1, apellido1, email1){
    this.nombre = nombre1;
    this.apellido = apellido1;
    this.email = email1;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}


// Crear un nuevo objeto de tipo persona
let padre = new Persona('Juan','Perez','juan@gmail.com');
console.log(padre.nombreCompleto());
console.log(padre);

let madre = new Persona('Laura','Quintero','lau@gmail.com');
console.log(madre);