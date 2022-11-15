

const h2 = document.getElementById('subtitle');
//console.log(h2)
/* console.log(h2.textContent)
h2.textContent = 'TExto del JS'
console.log(h2.attributes) */


const footerItems = document.getElementsByClassName('footer-item')
// console.log(footerItems)
const footerItemsArray = [...footerItems]
footerItemsArray.forEach((elementoHtml) => {
    // console.log(elementoHtml.textContent)
})

const allDivs = document.getElementsByTagName('div')
// console.log(allDivs)
const allDivsArray = [...allDivs];
allDivsArray.forEach((elementoDiv) => {
    //console.log(elementoDiv.textContent)
})

const allLis = document.querySelectorAll('.footer-item')
// console.log(allLis)
allLis.forEach(li => {
    // console.log(li.textContent)
})

// setTimeout & setInterval
/* setTimeout(() => {
    //console.log('Pasaron 3 segundos...')
}, 3000)

let contadorSegundos = 0;
setInterval(() => {
    contadorSegundos++;
    console.log(`Pasaron ${contadorSegundos} segundos...`)
}, 1000)

 */

console.log(location)
//window.location = 'https://www.google.com/images'
/* setTimeout(() => {
    location.reload()
}, 2000) */

console.log(navigator.connection)


function saludar() {
    const nombre = prompt('Ingrese su nombre:')
    // const h1 = document.getElementById('saludo');
    const h1 = document.querySelector('#saludo')

    h1.innerHTML = obtenerSaludoHtml(nombre)
    
}

function obtenerSaludoHtml(nombre) {
    return `
        <div>
            <h2>Hola!</h2>
            <h1>${nombre}</h1>
        </div>
    `
}

saludar()










