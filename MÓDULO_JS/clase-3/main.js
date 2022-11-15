/* 
// FUNCIONES

function mostrarNumeroRandom() {
  let numeroRandom = Math.random();
  console.log("Mi numero random es:", numeroRandom);
}

// mostrarNumeroRandom();
// mostrarNumeroRandom();

function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}!`);
}

saludar("Robert", "Bonadeo");
saludar("Juan", "Perez");
saludar("Maria", "Gomez");
// saludar(3, 1);

function saludarConPrompt() {
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  saludar(nombre, apellido);
}

//saludarConPrompt()

function obtenerSaludo(nombre, apellido) {
    return `Hola ${nombre} ${apellido}!`;
}

let saludo = obtenerSaludo('Pedro', 'Hans')
console.log(obtenerSaludo('Pedro', 'Hans'))


function suma(numero1, numero2 = '100') {
    return numero1 + numero2;
}

let resultado1 = suma(10, 5)
console.log('Resultado 1:', suma(20, 43))
console.log('Resultado 2:', suma(20))

 */

// ARRAYS

const dias = [
  "lunes", // index 0
  "martes", // index 1
  "miercoles", // index 2
  "juves", // index 3
  "viernes", // index 4
  "sabado", // index 5
];

// console.log(dias[3]);
dias[3] = "jueves";
// console.log(dias[3]);
let resultadoDelPush = dias.push("domingo");
// console.log(resultadoDelPush, 'resultado del push')
console.log(dias);
// console.log("Cantidad de elementos:", dias.length);
/* 
for (let i = 0; i < 10; i++) {
  // console.log('El valor de la variable "i" es:', i)
}

for (let i = 0; i < dias.length; i++) {
  // if (i >= 5) break;
  if (dias[i] === "jueves" || dias[i] === "sabado" || dias[i] === "domingo")
    continue;
  console.log(`En la posición ${i} está el día: ${dias[i]}`);
}
 */

let i = 0;
while (i < dias.length) {
  // console.log(`En la posición ${i} está el día: ${dias[i]}`);
  i++;
}

let j = 0;
do {
  // console.log(`En la posición ${j} está el día: ${dias[j]}`);
  j++;
} while (j < 0);

/*  - Ejercicio
    Permitir que el usuario pueda ingresar todos los 
    números que quiera, sumarlos y monstrarlos cuando 
    el usuario ingrese el 0
*/
let suma = 0;
let numero;
do {
  numero = parseInt(
    prompt("Ingrese un numero. (Presione 0 para salir y mostrar la suma)")
  );
  suma += numero; // esto es igual a hacer: suma = suma + numero
} while (numero !== 0);
alert(`La suma total de los números ingresados es: ${suma}`);
