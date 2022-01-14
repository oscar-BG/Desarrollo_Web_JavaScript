// Crear funciones

function miFuncion(a, b){
    return a+ b; //envia el resultado de la suma
}

// Llamar una funcion y atrapar el valor retornado
let resultado = miFuncion(2,3);
console.log(resultado);

// Funciones de tipo expresion o anomimas

let x = function (a,b){
    return a +b;
};
resultado = x(1,2);
console.log(resultado);