const ingreso = [
    new Ingreso('Salario', 3100.00),
    new Ingreso('Venta coche', 1000),
    new Ingreso('Inversiones', 100)
];
const egreso = [
    new Egreso('Renta departamento', 500),
    new Egreso('Ropa', 100)
];

let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}


let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingresos of ingreso){
        totalIngreso += ingresos.valor;
    }
    return totalIngreso;
}

let totalEgreso = ()=>{
    let totalEgreso = 0;
    for(let egresos of egreso){
        totalEgreso += egresos.valor;
    }
    return totalEgreso;
}
cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgreso();
    let procentajeEgreso = totalEgreso() / totalIngresos();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(procentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egreso').innerHTML = formatoMoneda(totalEgreso());
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-us', {style:'currency', currency:'USD', minimumFractionDigits:2})
}
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2})
}

const cargarIngresos = ()=>{
    let ingresosHTML = '';
    for (let  ingresos of ingreso) {
        ingresosHTML += crearIngresoHTML(ingresos);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}
const crearIngresoHTML = (ingreso)=>{
    let ingresosHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-outline"  onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresosHTML;
}

const eliminarIngreso = (id) =>{
    let indiceEliminar = ingreso.findIndex( ingresos => ingresos.id === id);
    ingreso.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}
const cargarEgresos = ()=>{
    let egresosHTML = '';
    for (let egresos of egreso) {
        egresosHTML += crearEgresoHTML(egresos);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}
const crearEgresoHTML = (egresos) =>{
    let egresosHTML = `<div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egresos.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egresos.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egresos.valor/totalEgreso())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>`;
    return egresosHTML;

}

let eliminarEgreso = (id) =>{
    let indiceEliminar = egreso.findIndex(egresos => egresos.id === id);
    egreso.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = () =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo']
    let descripcion = forma['descripcion']
    let valor = forma['valor']

    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingreso.push(new  Ingreso(descripcion.value, +valor.value));
            cargarCabecero()
            cargarIngresos()
        }else if(tipo.value === 'egreso'){
            egreso.push(new Egreso(descripcion.value, +valor.value))
            cargarCabecero()
            cargarEgresos()
        }
    }
}