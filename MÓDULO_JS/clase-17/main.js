const valores = {
    a: 2,
    b: 4,
    c: 6,
    d: 8,
    e: 10
}


const getValorDespuesDeXMs = (milisegundos, clave) => {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            const valorEncontrado = valores[clave]
            if (!valorEncontrado) {
                rechazar('Valor no encontrado para esa clave')
            } else {
                resolver({
                    [clave]: valorEncontrado
                    // clave: valorEncontrado
                })
                /* resolver(new Promise((resolve, reject) => {
                    if (valorEncontrado > 5) {
                        resolve(valorEncontrado)
                    } else {
                        reject('Valor muy pequeño')
                    }
                })) */
            }
        }, milisegundos)
    })
}

getValorDespuesDeXMs(1000, 'd')
    .then(valor => {
        console.log('RESOLVED: ', valor)
    })
    .catch(valorRejected => {
        console.log('REJECTED: ', valorRejected)
    })



const container = document.getElementById('container')

fetch("https://reqres.in/api/users&page=2")
    .then(response => response.json())
    .then(responseJson => {
        console.log('responseJson', responseJson)
        const { data } = responseJson;
        let html = ''
        data.forEach(user => {
            html += `<p>Name: ${user.name} - Id: ${user.id}</p>`
        })
        container.innerHTML = html
    })
    .catch(error => {
        console.log('Ocurrió un error:', error)
    })

