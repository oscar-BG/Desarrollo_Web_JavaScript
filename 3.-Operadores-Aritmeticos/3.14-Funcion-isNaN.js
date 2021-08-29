// Convertir string a numero
let minumero = "18x";
console.log(typeof minumero); //typo string 

let edad = Number(minumero); //convertimos la cadena a número
console.log(typeof edad);
console.log(edad); //Not a Number

if(isNaN(edad)){ //Preguntamos si realmente es un número
    console.log("No es un número");
}
else{
    if(edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");   
    }
    
}

