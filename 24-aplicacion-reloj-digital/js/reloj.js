const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie','Jue', 'Vie', 'Sab'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let formato_fecha = `${diaSemana} ${dia}, ${mes}`
    
    document.getElementById('hora').innerHTML = `${hr}: ${min}: ${sec}`;
    document.getElementById('fecha').innerHTML = formato_fecha;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) =>{
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}
setInterval(mostrarReloj, 1000)