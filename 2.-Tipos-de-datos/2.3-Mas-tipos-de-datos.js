// Cadena
var nombre = "Carlos";
console.log(nombre);

//Cambiar el valor de la variable
nombre = 10;
// TypeOf: muestra el tipo de dato de la variable
console.log(typeof nombre);

// Numero
var numero = 100;
console.log(numero);

// Objecto
var objecto = {
    nombre : "Oscar",
    edad : 21
}
console.log(objecto);

// Boolean
var bandera = true;
console.log(bandera);
console.log(typeof bandera)

// funcion
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion)

// Symbol
var simbolo = Symbol("mi simbolo"); //Crear un valor unico
console.log(simbolo);
console.log(typeof simbolo);

// Clase
class Persona{
    constructor(nombre, apellido){
        this.apellido = apellido;
        this.nombre = nombre;
    }
}
console.log(typeof Persona);

// Undefined

var x; //Cuando no contiene un valor
console.log(x);

// Null (ausencia de valor)
var y = null;
console.log(typeof y);