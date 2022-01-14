let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let contador = 0; contador < arguments.length; contador++){
        suma += arguments[contador] // suma = suma + arguments[contador]
    }
    return suma;
}