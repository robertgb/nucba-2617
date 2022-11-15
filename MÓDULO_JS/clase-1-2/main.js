// CLASE 1
// var miPrimerVariable = "Hola clase 1";
// console.log(miPrimerVariable);
// alert('Hola desde el alert!');

/* 
    alert('Hola desde el alert!');
*/
/*
var miVariableNumerica1;
var miVariableNumerica2 = 432;
var miVariableTexto1;
var miVariableTexto2;

console.log(
  'El valor de la variable "miVariableNumerica1" es:',
  miVariableNumerica1
);
miVariableNumerica1 = 200;
console.log(
  'El valor de la variable "miVariableNumerica1" es:',
  miVariableNumerica1
);

// OPERACIONES MATEMATICAS - OPERADORES ARITMETICOS (+, -, *, /, **, %)
var resultaSuma = miVariableNumerica1 + miVariableNumerica2;
console.log('El valor de la variable "resultaSuma" es:', resultaSuma);

var resultaResta = miVariableNumerica1 - miVariableNumerica2;
console.log('El valor de la variable "resultaResta" es:', resultaResta);

var resultaMult = miVariableNumerica1 * miVariableNumerica2;
console.log('El valor de la variable "resultaMult" es:', resultaMult);

var resultaDiv = miVariableNumerica1 / 2;
console.log('El valor de la variable "resultaDiv" es:', resultaDiv);

var potenciaDeDos = miVariableNumerica1 ** 2;
console.log('El valor de la variable "potenciaDeDos" es:', potenciaDeDos);

var modulo2 = miVariableNumerica1 % 2;
console.log('El valor de la variable "modulo2" es:', modulo2);
// 200 / 2 = 100...el resto de esa división es 0 = modulo

*/

// CONCATENACIÓN
/* var nombre = "Robert";
var apellido = "Bonadeo";
var edad = 23;
console.log(nombre + " " + apellido + " tiene " + edad + " años");
console.log(`La persona que se llama ${nombre} ${apellido} tiene ${edad} años`);

// Operadores de comparación - relacionales >, <, >=, <=, !=, !==, ==, ===
var num1 = 43;
var num2 = 20; // tipo de dato: number
console.log(num1 > num2, ' num1 > num2')
console.log(num1 < num2, ' num1 < num2')
console.log(num1 >= num2, ' num1 >= num2')
console.log(num1 <= num2, ' num1 <= num2')

// operadores de igualdad
var num3 = '20'; // tipo de dato: string
console.log(num2 == num3, ' num2 == num3') // acá solo evalua el valor
console.log(num2 === num3, ' num2 === num3') // se evalua el valor y el tipo de dato

// operadores de desigualdad
console.log(num2 != num3, ' num2 != num3') // acá solo evalua el valor
console.log(num2 !== num3, ' num2 !== num3') // se evalua el valor y el tipo de dato

console.log(typeof num2, 'typeof num2');
console.log(typeof num3, 'typeof num3'); */

// PROMPT
// var nombre = prompt("Por favor ingrese su nombre:");
// var apellido = prompt("Ingrese su apellido:");
/* var edad = prompt("Ingrese su edad:"); // esta edad es de tipo string
var edadEnNumero = parseInt(edad) // tipo number */

/* var edad = parseInt(prompt("Ingrese su edad:"));
var esMayorDeEdad = edad >= 18


console.log(`Se llama ${nombre} ${apellido} y tiene ${edad} años. Es mayor de edad: ${esMayorDeEdad}`)
*/
/* console.log("valor de nombre:", nombre);
console.log("tipo de dato de la variable  'nombre':", typeof nombre); */

// CLASE 2:

/* 
// Hoisting
console.log(variable1);
var variable1;
variable1 = 1;
console.log(variable1);
var variable1 = 54;
console.log(variable1);
*/

/* 
// Scope
var var1 = 342;
console.log(var1);
function unaFuncion() {
  var var2 = 432;
}
console.log(var2);
*/

/* 
// LET y CONST
let miVar = 22;
console.log(miVar)
miVar = 34;
console.log(miVar)
miVar = 55;
console.log(miVar)

// ESTO TIRA ERROR: let miVar = 54; 
{
  let miLetDeBloque = 432;
  console.log(miLetDeBloque)
}
// ESTO TIRA ERROR console.log(miLetDeBloque)


const miConst = 'SJDKSJDFK';
console.log(miConst)
// ESTO TIRA ERROR miConst = 'fdsf';
// NO SE PUEDE const miConst = 'SJDKSJDFK';

 */

// OPERADORES LÓGICOS - && (AND), || (OR), ! (NOT)
/* const edad = 23;
const efectivo = 1000;

const esMenorDeEdad = edad < 18;
const tieneTarjetaDeCredito = true;
const tieneEfectivoSufiente = efectivo >= 1500;
const tienePlataSuficiente = tieneEfectivoSufiente || tieneTarjetaDeCredito;
// para que el operador OR devuelva true, al menos una de las condiciones debe ser true

console.log(esMenorDeEdad, "es mayor");
console.log(tienePlataSuficiente, "tiene plata suficiente");

const puedeEntrarAlBoliche = !esMenorDeEdad && tienePlataSuficiente;
// para que el operador AND devuelva true, ambas condiciones deben ser true
console.log(puedeEntrarAlBoliche, "puede entrar al boliche?");

if (puedeEntrarAlBoliche) {
  alert("Si podes entrar!!!");
} else {
  let mensaje;
  if (esMenorDeEdad) {
    mensaje = "Sos muy chico todavía";
  }
  if (!tienePlataSuficiente) {
    mensaje = "Sos pobre";
  }
  alert(mensaje);
}
 */
const mes = "abril";

switch (mes) {
  case "enero":
  case "febrero":
  case "marzo":
    console.log("Estás en verano");
    break;
  case "abril":
  case "mayo":
  case "junio":
    console.log("Estás en otoño");
    break;
  case "julio":
  case "agosto":
  case "septiembre":
    console.log("Estás en invierno");
    break;
  case "octubre":
  case "noviembre":
  case "diciembre":
    console.log("Estás en primavera");
    break;
  default:
    console.log("no es ningún mes");
    break;
}
