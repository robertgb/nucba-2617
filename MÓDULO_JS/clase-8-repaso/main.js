// Tipos de datos

/*
    STRING - '' o ""
    NUMBER - numeros con o sin coma
    BOOLEAN - true ó false
    null
    undefined
    NaN
    function
    Object (arrays, objetos literales, instancias de clases)
*/

// Crear variables
/*
    var     -> lócales ó globales, se podían redeclarar (e.g. var num1), el valor podía durante del programa
    
    
    // estas dos tiene alcance de bloque ({})
    No las podes redeclarar,

    let     -> puede cambiar su valor
    const   -> no puede cambiar su valor, las tenemos que inicializar
*/

/* var var1 = 'Hola'
console.log(var1)
var1 = 'chau'
console.log(var1)
var var1 = 'de nuevo'
console.log(var1)


let let1 = 'Hola'
console.log(let1)
let1 = 'chau'
console.log(let1)
let let1 = 'de nuevo'
console.log(let1)

const const1;

console.log(let1)
let1 = 'chau'
console.log(let1)
 */

// Mala práctica
const arr1 = [
  true,
  12,
  "stringdfksjf",
  function () {},
  [12, 3, 3],
  {
    hola: true,
  },
];
const arr2 = ["martes", "miercoles", "jueves", "viernes"];
// push inserta al final arreglo
arr2.push("sabado");
// arr2.push('domingo')

// unshift inserta al princio del arreglo
arr2.unshift("lunes");
const arr3 = arr2.concat(["domingo"]);
//console.log(arr3)

arr3.pop();
arr3.shift();

// console.log(arr3)

const miLista = [
  {
    nombre: "Prodcuto1",
    precio: 432,
  },
  {
    nombre: "Prodcuto2",
    precio: 11,
  },
];

const miObj = {
  nombre: "Producto2",
  precio: 11,
};

/* console.log(miObj.nombre)
console.log(miObj["nombre"])
const { precio: miVariablePrecio } = miObj
console.log(miVariablePrecio) */

function dividir(a, b) {
  if (b === 0) {
    console.log("No se puede dividir por 0");
  } else {
    return a / b;
  }
}

function mostrarPorConsolaXCosas(...arreglo) {
  // for (let i = 0; i < arreglo.length; i++) {
  //     const elementoActual = arreglo[i];
  //     console.log(elementoActual)
  // }
  console.log("dentro de la funcion", arreglo);
  /* arreglo.forEach((elementoActual) => {
        console.log(elementoActual)
    }) */

  let i = 0;
  while (i < arreglo.length) {
    console.log(arreglo[i]);
    i++;
  }
}

// console.log(dividir(4, 0))

// mostrarPorConsolaXCosas(1,2,3,true, false, 'hola,', 'chau', [], {})

class User {
  constructor(id, nombre, email) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }

  monstrarInformacion = () => {
    console.log(
      `Usuario con ID: ${this.id}, nombre: ${this.nombre} y email: ${this.email}`
    );
  };
}

const user1 = new User(1, "rob", "robe@gmail.com");
// user1.monstrarInformacion()
// console.log(user1)





/*

    Métodos que vimos:
    - push
    - pop
    - shift
    - unshift
    - concat
    - find
    - filter
    - some
    - every
    - map
    - sort
    - forEach
    - slice

    // splice



*/














// EJERCICIOS:
const clients = [
  {
    id: 10,
    nombre: "Juan",
    apellido: "Perez",
    edad: 34,
    dni: 380902233,
    cantidad: 434.32,
    sucursalId: 3442,
    tipoCuenta: "AHORROS",
    estaActivo: false,
  },
  {
    id: 11,
    nombre: "Samuel",
    apellido: "Braccia",
    edad: 36,
    dni: 35999111,
    cantidad: 14324.32,
    sucursalId: 3442,
    tipoCuenta: "AHORROS",
    estaActivo: true,
  },
  {
    id: 13,
    nombre: "Juan",
    apellido: "Perez",
    edad: 34,
    dni: 380902233,
    cantidad: 434.32,
    sucursalId: 3442,
    tipoCuenta: "AHORROS",
    estaActivo: false,
  },
  {
    id: 12,
    nombre: "Facundo",
    apellido: "Fernandez",
    edad: 26,
    dni: 40554771,
    cantidad: 1999.32,
    sucursalId: 3443,
    tipoCuenta: "AHORROS",
    estaActivo: true,
  },
  {
    id: 14,
    nombre: "Julia",
    apellido: "Sanchez",
    edad: 19,
    dni: 44129009,
    cantidad: 782.32,
    sucursalId: 3440,
    tipoCuenta: "AHORROS",
    estaActivo: false,
  },
  {
    id: 15,
    nombre: "Ana María",
    apellido: "Lucerna",
    edad: 68,
    dni: 160903333,
    cantidad: 7390.32,
    sucursalId: 3442,
    tipoCuenta: "AHORROS",
    estaActivo: true,
  },
  {
    id: 16,
    nombre: "Alan",
    apellido: "Ruiz",
    edad: 30,
    dni: 28909112,
    cantidad: 4543.32,
    sucursalId: 3442,
    tipoCuenta: "CUENTA_CORRIENTE",
    estaActivo: true,
  },
  {
    id: 17,
    nombre: "Sara",
    apellido: "Diaz",
    edad: 50,
    dni: 25925832,
    cantidad: 99280,
    sucursalId: 3442,
    tipoCuenta: "AHORROS",
    estaActivo: true,
  },
  {
    id: 18,
    nombre: "Victoria",
    apellido: "Solten",
    edad: 25,
    dni: 39847001,
    cantidad: 342344,
    sucursalId: 3442,
    tipoCuenta: "AHORROS",
    estaActivo: true,
  },
  {
    id: 19,
    nombre: "Simon",
    apellido: "Smith",
    edad: 16,
    dni: 451009233,
    cantidad: 1099,
    sucursalId: 3440,
    tipoCuenta: "AHORROS",
    estaActivo: false,
  },
  {
    id: 20,
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 22,
    dni: 40900112,
    cantidad: 1323,
    sucursalId: 3444,
    tipoCuenta: "AHORROS",
    estaActivo: true,
  },
  {
    id: 9,
    nombre: "Maria",
    apellido: "Perez",
    edad: 28,
    dni: 28900911,
    cantidad: 1092,
    sucursalId: 3442,
    tipoCuenta: "CUENTA_CORRIENTE",
    estaActivo: true,
  },
];

console.log(clients)
/*
          Usuario de ejemplo:
      {
        id: 10,
        nombre: 'NOMBRE',
        apellido: 'APELLIDO',
        edad: 34,
        dni: 00000000,
        cantidad: 0.00,
        sucursalId: 0000,
        tipoCuenta: 'AHORROS' | 'CUENTA_CORRIENTE'
        estaActivo: false
      }
  */

/* 
    Ejercicio 1:
    - Obtener los usuarios que tienen cuenta en la sucursal cuyo ID es 3442.
  */
console.log(" - - - EJERCICIO 1  - - -");
const ejercicio1 = clients.filter(({ sucursalId }) => sucursalId === 3442)
console.log(ejercicio1);
/* 
    Ejercicio 2:
    - Obtener los usuarioS que tienen cuenta de ahorro
  */
console.log(" - - - EJERCICIO 2  - - -");
const ejercicio2 = clients.filter(({ tipoCuenta}) => tipoCuenta === 'AHORROS')
console.log(ejercicio2);
/* 
    Ejercicio 3:
    - Obtener los usuarioS que tienen cuenta de corriente
  */
console.log(" - - - EJERCICIO 3  - - -");
const ejercicio3 = clients.filter(({ tipoCuenta}) => tipoCuenta === 'CUENTA_CORRIENTE')
console.log(ejercicio3);

/* 
    Ejercicio 4:
    - Obtener los usuarioS que tengan más de 1000$ en su cuenta
  */
console.log(" - - - EJERCICIO 4  - - -");

/* 
    Ejercicio 5:
    - Obtener el usuario con ID 15
  */
console.log(" - - - EJERCICIO 5  - - -");
const ejercicio5 = null;
console.log(ejercicio5);
/* 
    Ejercicio 6:
    - Obtener un usuario menor de edad
  */
console.log(" - - - EJERCICIO 6  - - -");
const ejercicio6 = null;
console.log(ejercicio6);
/* 
    Ejercicio 7:
    - Obtener el usuario con DNI: 35999111
  */
console.log(" - - - EJERCICIO 7  - - -");
const ejercicio7 = null;
console.log(ejercicio7);
/* 
    Ejercicio 8:
    - Obtener un usuario que tenga más de $1000 en la sucursal 3443
  */
console.log(" - - - EJERCICIO 8  - - -");
const ejercicio8 = null;
console.log(ejercicio8);
/* 
    Ejercicio 9:
    - Mostrar la información de todos los usuarios.
  */
console.log(" - - - EJERCICIO 9  - - -");

/* 
    Ejercicio 10:
    - Determinar si todos los usuarios tienen dinero en el banco
  */
console.log(" - - - EJERCICIO 10 - - -");
const ejercicio10 = null;
console.log("Todos los usuarios tienen dinero en el banco?", ejercicio10);
/* 
    Ejercicio 11:
    - Determinar si hay algun usuario con más de $1.000.000
  */
console.log(" - - - EJERCICIO 11 - - -");
const ejercicio11 = null;
console.log("Hay alguien con +1000000?", ejercicio11);
/*
    .push() - .unshift()
    .pop() - .shift()
    .splice()
  */

const meses = ["febrero", "marzo", "abril", "mayo", "julio"];
/* 
    Ejercicio 12:
    Modificar la variable 'meses' para que contenga todos los meses del año
  */
console.log(" - - - EJERCICIO 12 - - -");

const dias = ["lunes", "martes", "martes", "jueves", "viernes"];
/* 
    Ejercicio 13:
    Modificar la variable 'dias' para que contenga todos los dias de la semana
  */
console.log(" - - - EJERCICIO 13 - - -");

