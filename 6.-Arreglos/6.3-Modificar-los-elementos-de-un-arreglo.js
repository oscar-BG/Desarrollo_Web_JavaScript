//let autos = new Array('BWN','Mercedes'); //arreglo con practicas que ya no se usa

//Si anuestro arreglo ya no vamos a modificarlo podemos declararla de la siguiente manera
const autos = ['BWN', 'Mercedes','Volvo'];

console.log(autos);

// Para aceder a un elemento

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

// Modificar los elementos de un arreglo

autos[1] = "MercedesB";
console.log(autos[1]);

// Agregar un nuevo elemento
autos.push('Audi');

console.log(autos);