// Las funciones tambien pueden ser objetos

function miFuncion(a,b){
    // Cuenta cuando argumentos tienen nuestra funcion
    console.log(arguments.length); 
    return a +b;
}

var miFuncionTexto = miFuncion.toString();

console.log(miFuncionTexto);