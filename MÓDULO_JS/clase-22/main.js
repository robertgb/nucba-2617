

class Persona {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni
    }

    presentarse() {
        console.log(`Hola! Soy ${this.nombre} ${this.apellido}`)
    }
}

const pedro = new Persona('Pedro', 'Gomez', 40111333)
const juan = new Persona('Juan', 'Perez', 30222555)

//pedro.presentarse()
// juan.presentarse()

Persona.prototype.despedirse = function() {
    console.log('Me despido, soy', this.nombre)
}

/* pedro.apellido = 'Gomez'
console.log('Apellido de Pedro', pedro.apellido) */

// pedro.despedirse()
// juan.despedirse()

// console.log('ARRAY PROTOTYPE', Array.prototype)

const arr1 = [1,2,3,4,5,6,7,8,9]
Array.prototype.obtenerUltimoElemento = function() {
    return this[this.length - 1]
}

/* Array.prototype.find = function() {
    return 0;
} */

// console.log('calling find', arr1.find())

// console.log('Ultimo elemento:', arr1.obtenerUltimoElemento())

class Medico extends Persona {
    constructor(nombre, apellido, dni, matricula) {
        super(nombre, apellido, dni)
        this.matricula = matricula;
    }

    presentarse() {
        console.log(`Hola! Soy ${this.nombre} ${this.apellido} y soy médic@`)
        super.despedirse()
    }
}

const med1 = new Medico('Rob', 'Bon', 41000111, 555)
// med1.presentarse()
// console.log(Medico.prototype)


class Cirujano extends Medico {
    tituloDePuesto = 'Cirujano General'
}

const cir1 = new Cirujano('Jack', 'Miller', 44323111, 001)
// console.log(cir1.despedirse())



/* 

// call
function Auto(tipo, combustible) {
    this.tipo = tipo;
    this.combustible = combustible;
    console.log(this, 'this desde Auto')
}

function Marca(marca) {
    Auto.call(this, 'Corsa', 'Nafta')
    this.marca = marca
    console.log('Detalles: ', this)
}

const marca1 = new Marca('Chevrolet')

 */

// .apply


/* function Auto(tipo, combustible) {
    this.tipo = tipo;
    this.combustible = combustible;
    console.log(this, 'this desde Auto')
}

function Marca(marca) {
    Auto.apply(this, ['Corsa', 'Nafta'])
    this.marca = marca
    console.log('Detalles: ', this)
}

const marca1 = new Marca('Chevrolet')

 */


// bind
function showData(nombreProducto, precio) {
    console.log(`El usuario ${this.nombre} ha comprado ${nombreProducto} a $${precio}`)
}

const marco = showData.bind({ nombre: 'MArco'})
marco('arroz', 10)