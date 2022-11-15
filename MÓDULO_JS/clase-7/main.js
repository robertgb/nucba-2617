// Repaso de callbacks
function mostrarPorConsola(nombre) {
  console.log(nombre);
}

function mostrarPorAlerta(nombre) {
  alert(nombre);
}

function mostrarEntradaUsuario(callback) {
  let nombre = prompt("Ingrese su nombre:");
  callback(nombre);
}

// mostrarEntradaUsuario(mostrarPorConsola)

// repeat
const str1 = "Este es mi string";
// console.log(str1.repeat(5))

// chartAt
// console.log("charAt 3", str1.charAt(3));

// console.log("charAt 2", str1.charAt(2));

// Concat - Formas: usando el +, con los backticks, y .concat
const str2 = str1 + " Hola";
// console.log(str2);
const str3 = `Hola ${str2}`;
// console.log(str3);
const str4 = str3.concat("Chau");
// console.log(str4);

const str5 = "robert@gmail.com";
// console.log("Tiene @ ", str5.includes("@"));
// console.log("Tiene . ", str5.includes("."));

// console.log('incluye al 1:', arr1.includes('1'))
const arr1 = [4, 3, 6, 7, 8, 9, 0, 1, 2, 3, 5];

const arr2 = arr1.slice(5);
// console.log('arr2',arr2)

// map
const funcionCallbackMap = (elementoActual, indiceActual, _arreglo) => {
  // console.log(elementoActual, indiceActual);
  return elementoActual * 2;
};
// el arr3 tiene que tener todos los elementos del arr1 duplicados

const arr3 = arr1.map(funcionCallbackMap);
const arr4 = arr1.map((elemento) => {
    if (elemento % 2 === 0) {
        return `${elemento} es par`;
    } else {
        return `${elemento} es impar`;
    }
});
// console.log("arr1", arr1);
// console.log("arr3", arr3);
// console.log("arr4", arr4);
arr1.forEach((elemento) => {
    if (elemento % 2 === 0) {
        // console.log(`${elemento} es par`)
    } else {
        // console.log(`${elemento} es impar`)
    }
});

const numeroPares = arr1.filter(numero => numero % 2 === 0)
// console.log('array con los numeros pares:', numeroPares)

const numerosMayoresA5 = arr1.filter(numero => numero >= 5)
// console.log('array con los numeros mayores a 5:', numerosMayoresA5)


class User {
	constructor(firstName, lastName, yearOfBirth) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.yearOfBirth = yearOfBirth;
	}
}

const users = [
	new User('Pedro', 'Perez', 1990),
	new User('Maria', 'Gonzales', 1980),
	new User('Robert', 'Bon', 1998),
	new User('Juan', 'Gomez', 1995),
	new User('Sofia', 'Palma', 1997),
	new User('Hector', 'Diaz', 1982),
	new User('Elena', 'Sanchez', 1976),
	new User('Marta', 'Gutierrez', 1973),
	new User('Marcos', 'Erin', 2002)
]

console.log('users', users)

// Todos los usuarios que hayan nacido después de 1990:
const usuariosNacidosDespuesDel90 = users.filter(user => user.yearOfBirth > 1990)
console.log('usuariosNacidosDespuesDel90', usuariosNacidosDespuesDel90)

const usuarioNacidosDespuesDel90 = users.find(user => user.yearOfBirth >= 2000)
console.log('usuarioNacidosDespuesDel90',usuarioNacidosDespuesDel90)

const sonTodosDelSigloPasado = users.every(user => user.yearOfBirth < 2000)
console.log('sonTodosDelSigloPasado', sonTodosDelSigloPasado)

const esAlgunoDelSiglo21 = users.some(user => user.yearOfBirth >= 2000)
console.log('esAlgunoDelSiglo21', esAlgunoDelSiglo21)

const resultadoDeLaSuma = arr1.reduce((acumulador, valorActual) => {
    console.log(acumulador, valorActual);
    return acumulador + valorActual;
})
console.log('resultadoDeLaSuma', resultadoDeLaSuma)


const arr5 = [1, 3, 54,23,2,0, 33,-1, 12,44]
console.log('arr5 - sort sin callback', arr5.sort((a, b) => {
    return a - b
}))














