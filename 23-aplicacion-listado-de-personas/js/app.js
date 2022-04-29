const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log("Mostrar personas... ");
    let texto ='';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const persona = new Persona(nombre.value, apellido.value);

    if(nombre.value != '' && nombre.value != ''){
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        alert('Los campos estas vacios');
    }

    nombre.value = '';
    apellido.value = '';
}