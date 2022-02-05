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

// async
 async function miFuncionPromesa(){
     return 'Saludos con promesas y async';
 }

//  async await

async function funcionPromesaawait(){
    let miPromesa = new Promise(resolver =>{
        resolver('Promesa con await')
    });
    console.log(await miPromesa);
}

funcionPromesaawait();

// promesa, await y setTimeout
async function funcionPromesaAwaitTime(){
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('Promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
}

funcionPromesaAwaitTime();