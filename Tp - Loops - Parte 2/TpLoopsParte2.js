/*Bootcamp 2024

Loops | While - Do While

1. Escribe una función que reciba un array de calificaciones y calcule el promedio usando un
bucle while. La función debe devolver el promedio y mostrarlo en la consola*/

let qualifications = [4, 7, 8, 9, 10];

function calculateAverage(calif) {
  let counter = 0;
  let average = 0;

  while (counter < calif.length) {
    average += calif[counter];
    counter++;
  }
  console.log("El promedio es de: " + average / counter);
}
calculateAverage(qualifications);

/*2. Verificar Correos Electrónicos: Escribe una función llamada verificarUsuario que
reciba un array de nombres de usuario y un nombre de usuario específico. Usa un bucle while
para verificar si el usuario específico está en la lista. Si el usuario existe, muestra un mensaje
indicando "Usuario encontrado", de lo contrario, muestra "Usuario no encontrado".

let usuarios = ["juan", "maria", "admin", "carlos"];

let usuarioBuscado = "admin";*/

let users = ["Juan", "Maria", "Carlos", "Raul", "Lorenzo"];

let user = "Juan";

function verifyUser(arrayUser, userSearch) {
  let counter = 0;
  let finalUser;

  while (counter < arrayUser.length) {
    if (arrayUser[counter] === userSearch) {
      finalUser = arrayUser[counter];
    }
    counter++;
  }
  if (finalUser) {
    console.log("Se encontro el usuario " + finalUser);
  } else {
    console.log("No se encontro el usuario");
  }
}
verifyUser(users, user);

/*3. Verificar Longitud de Contraseñas: Escribe una función llamada
verificarContraseñas que reciba un array de contraseñas. Usa un bucle while para
verificar cuántas contraseñas tienen al menos 8 caracteres. Muestra un mensaje indicando
cuántas contraseñas cumplen con esta condición.

let contraseñas = ["password", "1234567", "supersecret", "contraseña123"];*/

let password = [
  "password",
  "123456789",
  "supersecret",
  "password123",
  "papalo",
  "turrepe",
];

function verifyPassword(password) {
  let counter = 0;
  let safePassword = [];

  while (counter < password.length) {
    if (password[counter].length > 8) {
      safePassword += password[counter] + "; ";
    }
    counter++;
  }
  console.log("Las contraseñas seguras son: " + safePassword);
}
verifyPassword(password);

/*4. Verificar Existencia de un Usuario: Crea una función llamada verificarCorreos que
reciba un array de correos electrónicos. Usa un bucle `while` para recorrer el array y verificar
que cada correo contenga un "@" y un ".". Si todos los correos son válidos, muestra "Todos los
correos son válidos", de lo contrario, muestra "Correo inválido encontrado".

let correos = ["correo1@example.com", "correo2@example", "correo3@example.com"];*/

let mails = [
  "maria.thais.gebel@gmail.com",
  "correo1@examplecom",
  "correo2@example.com",
  "correo3@example.com",
];

function verifyMail(mail) {
  let counter = 0;
  let mailsApproved = 0;

  while (counter < mail.length) {
    if (mail[counter].includes("@") && mail[counter].includes(".")) {
      mailsApproved++;
    }
    counter++;
  }
  if (mailsApproved === mail.length) {
    console.log("Todos los mails son validos");
  } else {
    console.log("No todos los correos son validos");
  }
}
verifyMail(mails);

/*5. Escribe una función que reciba un número y determine si es primo usando un bucle do
while. La función debe devolver un valor booleano indicando si el número es primo y mostrar
el resultado en la consola.*/

let number = 5;

function numberPrime(number) {
  let numberIsPrime = true;
  let counter = 2;

  if (number < 0) {
    console.log((numberIsPrime = false));
  }

  do {
    if (number % counter === 0 && number != counter) {
      numberIsPrime = false;
    }
    counter++;
  } while (counter < number);
  console.log(numberIsPrime);
}
numberPrime(number);
