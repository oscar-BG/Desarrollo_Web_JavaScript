class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return  this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooh','Dell');
console.log(raton2.toString());
raton2.marca = 'HP';
console.log(raton2.toString());

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idteclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idteclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idteclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let teclado1 = new Teclado('Pantalla', 'AMD');
console.log(teclado1.toString());
let teclado2 = new Teclado('Gamer','RGB');
console.log(teclado2.toString());
teclado2.tipoEntrada = 'Blueetooh';
console.log(teclado2.toString());


class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
    get tamanio(){
        return this._tamanio;
    }
    set tamanio(tamanio){
        return this._tamanio = tamanio;
    }
    toString(){
        return `Monitor [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio}];`
    }
}

let monitor1 = new Monitor('HP','20X20');
console.log(monitor1.toString());
let monitor2 = new Monitor('DELL', '50x50');
console.log(monitor2.toString());
monitor2.marca = 'JS';
console.log(monitor2.toString());

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
console.log(computadora1.toString());

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = [];
        for(let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();