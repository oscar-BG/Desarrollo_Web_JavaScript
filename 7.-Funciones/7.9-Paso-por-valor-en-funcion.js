// Paso por valor que no son objetos

let x = 10; //valor primitivo, no tiene atributo ni metodos

function cambiarValor (a){
    a = 20;
}

cambiarValor(x);
console.log(x);