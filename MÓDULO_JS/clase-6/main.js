const numerosPares = [0, 2, 4, 6, 8];
const numerosImpares = [1, 3, 5, 7, 9];

const numeros = [...numerosPares, ...numerosImpares, ...[11, 23, 32, 32, 3232]];
//console.log("numeros:", numeros);

const obj1 = {
  lunes: 12,
  miercoles: 10,
};

const obj2 = {
  martes: 12,
  miercoles: 20,
};

const obj3 = {
  ...obj2,
  ...obj1,
  jueves: 2,
  miercoles: 50,
};

//console.log("obj3", obj3);

function sumar(...numeros) {
  // console.log('Argumento numeros:', numeros);
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    // total = total + numeros[i];
    total += numeros[i];
  }
  // console.log('El total es:', total)
  return total;
}

// console.log(sumar(3, 2, 1));
// console.log(sumar(3, 4));
// console.log(sumar(5, 6, 10, 2));

const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const [monday, tuesday, wednesday, ...restOfTheDays] = dias;

// console.log(monday, tuesday, wednesday, restOfTheDays)

const user = {
    id: 34234232,
    username: 'rob',
    email: 'rob@gmail.com',
    dateOfBirth: '10/01/1998'
}

// console.log(user.username)
// console.log(user.email)

const email = 'robert@gmail.com';
/*
    const userEmail = user.email;
    const username = user.username;
*/
const { email: userEmail, username } = user;

// console.log('destructuring', userEmail, username)

// String - Métodos y propiedades

const str1 = 'Hola esto es un string string string';
console.log(str1)
console.log('Longitud de cadena:', str1.length)
console.log('Cadena en mayúsculas:', str1.toUpperCase())
console.log('Cadena en minúsculas:', str1.toLowerCase())

console.log('Cadena reemplazada (replace):', str1.replace('string', 'cadena de caracteres')) 
// primero mandamos lo que queres reemplazar, y después el por lo que queremos poner
console.log('Cadena reemplazada (replaceAll):', str1.replaceAll(' ', '*'))
console.log('trim:', str1.trim())
console.log('split', str1.split(''))

console.log('typeof 43', typeof 43)
console.log('typeof "rosa"', typeof "rosa")
console.log('typeof [43, 23]', typeof [43, 23])
console.log('typeof function(){}', typeof function(){})


const listaDeCompras = [];
console.log('Longitud:', listaDeCompras.length);

const retornoDelPush = listaDeCompras.push('papas')
console.log(retornoDelPush) // nueva longitud del array

listaDeCompras.push('cebollas')
listaDeCompras.push('pan')
listaDeCompras.push('leche')
listaDeCompras.push('agua')
listaDeCompras.push('bananas')
listaDeCompras.push('leche')

console.log('en que indice/posicion está la leche:', listaDeCompras.indexOf('leche'))


console.log(Array.isArray(listaDeCompras))

// POP
console.log('listaDeCompras antes del pop', listaDeCompras)
const retornoDelPop = listaDeCompras.pop()
console.log(retornoDelPop)
console.log('listaDeCompras despues del pop', listaDeCompras)



// Unshift
console.log('listaDeCompras antes del unshift', listaDeCompras)
console.log(listaDeCompras.unshift('huevos'))
console.log('listaDeCompras despues del unshift', listaDeCompras)

// Shift
console.log('listaDeCompras antes del shift', listaDeCompras)
console.log(listaDeCompras.shift())
console.log('listaDeCompras despues del shift', listaDeCompras)

console.log('numero impares a la inversa', numerosImpares.reverse())

console.log('numerosImpares como string (.toString())', numerosImpares.toString())
console.log('numerosPares como string (.join())', numerosImpares.join(' - '))

// Splice
console.log('Dias de semana: ', dias.slice(0, 5))
console.log('Dias de fin de semana: ', dias.slice(5))



