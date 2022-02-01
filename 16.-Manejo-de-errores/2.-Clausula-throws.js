'use strict'


try{
    let x = 10;
    // miFuncion();
    throw 'Mi error';
}catch(error){
    console.log(error);
}finally{
    console.log('Termina la revision de errores');
}
console.log('Continuamos ...');
// 

let resultado = '';

try{
    x =10;
    if(isNaN(resultado) )throw 'No es un numero';
    else if(resultado === '') throw 'Es cadena vacia';
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}