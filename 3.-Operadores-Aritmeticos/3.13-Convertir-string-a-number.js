// Convertir string a numero
let minumero = "10";
console.log(typeof minumero); //typo string 

let edad = Number(minumero); //convertimos la cadena a número
console.log(typeof edad);

if(edad >= 18){
    console.log("Puede votar");
}
else{
    console.log("Muy joven para votar");   
}

// Utilizamos el operador ternario
let resultado = (edad >= 18) ? "Puede votar" : "Muy joven para votar";
console.log(resultado);