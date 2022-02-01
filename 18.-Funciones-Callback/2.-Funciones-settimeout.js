// Funciones de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}
function sumar(op1, op2, funcionCallback){
    let sumar = op1 + op2;
    funcionCallback('resultado: ' + sumar);
}

sumar(5,3,imprimir);


// Llamadas asincronas con uso setTimeout

function miFuncionCallback(){
    console.log('Saludo aíncrono después de 3 segundos');
}

setTimeout(miFuncionCallback, 3000); //se ejecuta despues de 3 seguntos