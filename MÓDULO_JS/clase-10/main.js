// const btnBackground = document.getElementById('btn-background')
// const btnBackground = document.querySelector('#btn-background')
const body = document.querySelector('body');
const registerForm = document.querySelector('.form')

const firstNameInput = document.getElementById('first-name-input')
const lastNameInput = document.getElementById('last-name-input')
const emailInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password-input')
const repeatPasswordInput = document.getElementById('repeat-password-input')
const errorContainer = document.getElementById('error-container')


// console.dir(registerForm)


// btnBackground.addEventListener('click', cambiarFondo)

function cambiarFondo() {
    body.style.background = 'yellow'
}

/* btnBackground.onclick = cambiarFondo;
console.log(btnBackground) */
function processForm(event) {
    // console.log(event, 'EVENTO')
    event.preventDefault();
    let error = '';
    errorContainer.style.display = 'none';

/*  console.log('Valor firstName:', firstNameInput.value)
    console.log('Valor lastName:', lastNameInput.value)
    console.log('Valor email:', emailInput.value)
    console.log('Valor password:', passwordInput.value)
    console.log('Valor repeatPassword:', repeatPasswordInput.value)
 */
    // validar la data
    if (firstNameInput.value.length > 20) {
        error += '<li>El nombre es demasiado largo. </li>'
    }
    if (lastNameInput.value.length > 20) {
        error += '<li>El apellido es demasiado largo.</li> '
    }
    if (!emailInput.value.includes('@gmail.com')) {
        error += '<li>El email no es de Google. </li>'
    }
    if (passwordInput.value !== repeatPasswordInput.value) {
        error += '<li>Las contraseñas no coinciden.</li> '
    }

    if (error !== '') {
        errorContainer.style.display = 'flex';
    }

    errorContainer.innerHTML = error;
} 


// registerForm.addEventListener('submit', processForm)

registerForm.onsubmit = processForm
/* firstNameInput.onkeypress = function(evento) {
    // console.log('El valor actual del input es: ', evento.target.value)

    if (evento.target.value.length > 20) {
        console.log('inside if')
        errorContainer.style.display = 'flex';
        errorContainer.innerHTML = 'Nombre muy largo'
    }
} */

















