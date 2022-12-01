// CALLSTACK
function sumar(a, b) {
    return a + b;
}

function mitadSuma(a, b) {
    return sumar(a, b) / 2
}

let x = mitadSuma(20, 50);
// console.log('Resultado: ', x)

/*
                            sumar()         -
            mitadSuma()     mitadSuma()     mitadSuma()     -
main()      main()          main()          main()          main()  -
*/

// Memoria Heap
const obj1 = { val: 1}
const obj2 = obj1;

// console.log(obj1 === obj2)
obj2.val = 5;
// console.log(obj1, obj2)
// console.log(obj1 === obj2)


// Event loop

// console.log(1);

setTimeout(() => {
    // console.log(2)
}, 0)


//console.log(3)

// Intro promesas

function mostrarEn2Segundos(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(value)
            // resolve(value)
            // reject('Hubo un error')
        }, 5000)
    })
}


mostrarEn2Segundos('Hola promesa')
    .then((resultadoDeExito) => {
        console.log(resultadoDeExito)
    })
    .catch((resultadoDeError) => {
        console.log('ERROR: ', resultadoDeError)
    })

