// Argumentos son los valores que recibe la funcion
let sumar = function (a = 2,b = 3){
    // Imprimir los argumentos
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b
};

// Paramentros son los valores que enviamos a la funcion
resultado = sumar(1,5);