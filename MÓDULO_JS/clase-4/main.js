function sumar(numero1, numero2) {
  /* if (isNaN(numero1) || isNaN(numero2)) {
        console.log('Argumentos inválidos')
        return;
    } */

  let resultado;
  /* const numero1 = 42;
    const numero2 = 21; */

  resultado = numero1 + numero2;
  // console.log("El resulta es:", resultado);

  return resultado;
}

// console.log(sumar(43, 3));

// Funciones flecha

function multiplicar2(a, b) {
  return a * b;
}

const multiplicar = (a = 0, b = 0) => a * b;

const dividir = (a = 0, b = 0) => {
  if (b === 0) {
    console.log("No se puede dividir por 0");
    return;
  }
  //console.log(a/b);
  return a / b;
};

const mostrarPorConsola = (contenido) => console.log(contenido);

// mostrarPorConsola(43);
// console.log(mostrarPorConsola(43));

// console.log(multiplicar(4, 3));
// console.log(dividir())

// Ejemplos de recursion
const vueltaAtras = (numero) => {
  if (numero === 0) return;
  console.log("Mostrando: ", numero);
  return vueltaAtras(numero - 1);
};

// vueltaAtras(10);

// El factorial de un numero es el número multiplicado
// por todos sus factores, e.g. 3! = 3 * 2 * 1, 5! = 5 * 4 * 3* 2* 1
const factorial = (numero) => {
  if (numero <= 1) return 1;
  return numero * factorial(numero - 1);
};

// console.log("Factorial de 3:", factorial(3));
// console.log("Factorial de 5:", factorial(5));
// console.log("Factorial de 10:", factorial(10));

// Callbacks
const alertar = (contenido) => alert(contenido);
const consolear = (contenido) => console.log(contenido);

const saludarAlUsuario = (callback) => {
  const nombre = prompt("Ingrese su nombre:");
  callback(`Bienvenid@ ${nombre}`);
};

// saludarAlUsuario(alertar)
//saludarAlUsuario(consolear)

// Closures
const multiplicarPorNumero = (numero1) => {
  const num1 = numero1;
  const multiplicar = (num2) => {
    return num1 * num2;
  };
  return multiplicar;
};

const multiplicarPorDos = multiplicarPorNumero(2);
const multiplicarPorTres = multiplicarPorNumero(3);

const resultado1 = multiplicarPorDos(3);
const resultado3 = multiplicarPorDos(2); // 4
const resultado2 = multiplicarPorTres(4);
console.log(resultado1);
console.log(resultado2);
console.log("Resultado3: ", resultado3);

const multiplicarPorVariosNumero = (numero1) => {
  const multiplicarNum1 = (num2) => {
    return (num3) => {
      return numero1 * num2 * num3;
    };
  };
  return multiplicarNum1;
};

console.log(multiplicarPorVariosNumero(2)(3)(4));


