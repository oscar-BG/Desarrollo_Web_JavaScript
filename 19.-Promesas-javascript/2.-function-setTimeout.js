let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvio correcto');
    }else{
        rechazar('Se produjo un error');
    }
});

let promesa = new Promise((resolver)=>{
    setTimeout(()=> resolver('Saludo con promesa y timeout'),3000);
});

promesa.then(valor => console.log(valor));