// Objetos literales: conjunto de pares clave:valor

const auto = {
  color: "ROJO",
  pesoEnKilos: 1000,
  marca: "Volkswagen",
  anio: 2015,
  "numero chasis": 12342423,
};

/* console.log(auto)
console.log(auto.marca)
console.log(auto['color'])
console.log(auto.year)
console.log(auto['numero chasis']) */

// Clases y objetos

class User {
  constructor(email, username, password) {
    this.email = email;
    this.username = username;
    this.password = password;
  }

  getEmail = function() {
    return this.email;
  }

  setEmail = function(newEmail) {
    this.email = newEmail;
  }

  /* checkPassword = function(password) {
    return this.password === password;
  } */

  checkPassword = function() {
    const contrasenaIngresada = prompt('Ingrese su contraseña:');
    const contrasenasCoinciden = this.password === contrasenaIngresada;
    if (contrasenasCoinciden) {
        alert('Tiene acceso al sistema')
    } else {
        alert('ACCESO DENEGADO')
    }
  }

  mostrar = function() {
    console.log(`Usuario: ${this.username} - Email: ${this.email}`)
  }
}
const users = []

const user1 = new User("robert@gmail.com", "robertbonadeo", "12345");
users.push(user1); // Agrega el usuario a mi lista de usuarios

// console.log(user1);
// console.log(user1.getEmail()) //console.log(user1.email);
user1.setEmail('rob@gmail.com') //user1.email = 'rob';
// console.log(user1.getEmail()) //console.log(user1.email);
// console.log(user1["email"]);
// user1.checkPassword();
const user2 = new User("juan@gmail.com", "juan1", "12345");
users.push(user2); 
const user3 = new User("pedro@gmail.com", "pedro", "555");
users.push(user3); 
const user4 = new User("mario@gmail.com", "mario2", "15552345");
users.push(user4); 
const user5 = new User("agus@gmail.com", "agus", "432");
users.push(user5); 


console.log(users)

for (let i = 0; i < users.length; i++) {
    const user =  users[i];
    user.mostrar()
}

function buscarUsuario(email) {
    for (let i = 0; i < users.length; i++) {
        const user =  users[i];
        if (user.email === email) {
            console.log('Usuario encontrado')
            return;
        }
    }
    console.log('No se encontró el usuario :(')
}
const emailBuscado = prompt('Ingrese un email');
buscarUsuario(emailBuscado)








