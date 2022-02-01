// Una funcion de tipo callback es llamar una funcion dentro de otra función


// Funciones normales
function miFuncion1(){
    console.log("Funcion 1");
}

function miFuncion2(){
    console.log("Funcion 2");
}


// Funciones de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}
function sumar(op1, op2, funcionCallback){
    let sumar = op1 + op2;
    funcionCallback('resultado: ' + sumar);
}

sumar(5,3,imprimir);
