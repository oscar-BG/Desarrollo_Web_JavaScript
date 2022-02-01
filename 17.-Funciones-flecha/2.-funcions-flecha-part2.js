
// Funcion flecha
// let miFuncionFlecha = () =>{
//     console.log('Mi funcion flecha');
// }

// Forma resumida
// const miFuncionFlecha = () => console.log('Saludos desde mi funcion flecha');

// miFuncionFlecha();

// Si devuelve un valor
const saludar = () => {
    return 'Saludos desde funcion flecha'
}
console.log(saludar());

const regresarObjeto = () => ({nombre : 'juan', apellido: 'Lopez'});
console.log(regresarObjeto());

const funcionConParametros = (mensaje) => {
    console.log(mensaje);
}
funcionConParametros('Hola como estas');

const funcionConVariosParametros = (op1, op2) => op1 + op2;

console.log(funcionConVariosParametros(1,2));