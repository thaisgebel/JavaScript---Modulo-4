/*Bootcamp 2024

Loops | While - Do While

1. Escribe una función llamada contarGoles que reciba un array de goles anotados en un
partido. Cada elemento del array es un objeto que tiene dos propiedades: equipo y jugador.
Usa un bucle while para recorrer el array y contar cuántos goles anotó cada equipo.

Let goles=[{equipo: “Argentina”, jugador:”lionel messi”}];*/

let goals = [
  { equipo: "Pakistan", Jugador: "Rahis Nabi" },
  { equipo: "Pakistan", Jugador: "Rahis Nabi" },
  { equipo: "Nigeria", Jugador: "Samuel Chukwueze" },
];

function countGoals(equips) {
  let countGoalsNigeria = 0;
  let countGoalsPakistan = 0;
  let counter = 0;

  while (counter < equips.length) {
    if (goals[counter].equipo === "Pakistan") {
      countGoalsPakistan++;
    } else {
      countGoalsNigeria++;
    }
    counter++;
  }
  return `El equipo Pakistanes hizo ${countGoalsPakistan}. El equipo Nigeriano hizo ${countGoalsNigeria} `;
}
console.log(countGoals(goals));

/*2. Crea una función llamada contarToques que reciba un array con el nombre de los
jugadores que tocan el balón en una jugada. Usa un bucle while para contar cuántos
toques hubo antes de que el balón saliera del campo. La jugada termina cuando encuentres
el string "fuera" en el array.

Ej del array: let jugada = ["Messi", "Di Maria", "Doye", "fuera"];*/

let players = ["Messi", "Ronaldo", "Maradonna", "Fuera"];

function countTouches(players) {
  let touches = 0;
  let counter = 0;
  while (counter < players.length - 1) {
    touches++;
    counter++;
  }
  return `Hubieron ${touches} toques antes del fuera`;
}
console.log(countTouches(players));

/*3. Escribe una función llamada practicarSaques que simule los intentos de un jugador
de voleibol para hacer un saque exitoso. Usa un bucle do while para que el jugador siga
intentando hasta que consiga hacer un saque exitoso. Usa
Math.random() para simular si el saque fue exitoso (considerando que la probabilidad de
éxito es del 30%)*/

function practiceServe() {
  let random = 0;

  do {
    random = Math.floor(Math.random() * 10);
    if (random < 7) {
      console.log("El saque no fue exitoso");
    } else {
      return "El saque fue existoso";
    }
  } while (random < 7);
}
console.log(practiceServe());

/*4. Desde la terna arbitral de la AFA, el presidente Chiqui Mafia nos envía una lista con los
jugadores que anotaron goles en un partido. Escribe una función llamada
recuentoGoleadores que reciba una lista de jugadores que anotaron goles. Usa un bucle
do while para contar cuántos jugadores ÚNICOS anotaron al menos un gol, y muestra el
resultado en la consola.

Ej del array: let jugadoresQueAnotaron = ["Messi", "Di Maria", "Messi", "Riquelme",
"Maradona"];*/

let playersGoal = ["Messi", "Di Maria", "Messi", "Riquelme", "Maradona"];

function countGoalscorers(players) {
  let counter = 0;
  let uniquePlayerGoal = [];

  do {
    if (!uniquePlayerGoal.includes(players[counter])) {
      uniquePlayerGoal.push(players[counter]);
    }
    counter++;
  } while (counter < players.length);
  return uniquePlayerGoal;
}
console.log(countGoalscorers(playersGoal));

/*5. En un clásico Boca vs. River, se quiere analizar el rendimiento de algunos jugadores clave.
Tienes un objeto llamado rendimientoJugadores que almacena el nombre de cada
jugador y la cantidad de kilómetros recorridos durante el partido. Crea una función
analizarRendimiento que use un bucle while para recorrer el objeto y mostrar en la
consola qué jugadores recorrieron más de 10 kilómetros.

let rendimientoJugadores = { "Enzo Pérez": 11.5, "Frank Fabra": 9.8, "Nicolás De La Cruz":
12.3, "Cristian Medina": 10.2 };*/

let playerPerformance = {
  "Enzo Pérez": 11.5,
  "Frank Fabra": 9.8,
  "Nicolás De La Cruz": 12.3,
  "Cristian Medina": 10.2,
};

function analyzePerformance(players) {
  let counter = 0;
  let playersRunMore10K = [];

  let playersValue = Object.entries(players);

  while (counter < playersValue.length) {
    if (playersValue[counter][1] >= 10) {
      playersRunMore10K.push(playersValue[counter] + " ");
    }
    counter++;
  }
  return playersRunMore10K;
}

console.log(
  `Los jugadores que corrieron mas de 10 Km fueron ${analyzePerformance(
    playerPerformance
  )}.`
);

/*6. Durante el último Superclásico entre Boca y River, se registraron varias tarjetas amarillas y
rojas. Tienes un objeto tarjetasPartido donde cada clave es el nombre del jugador y el
valor es un objeto con dos propiedades: amarillas y rojas, que indican el número de
tarjetas de cada tipo que recibió el jugador. Crea una función resumenTarjetas que use un
bucle do while para mostrar en la consola el total de tarjetas amarillas y rojas que recibió
cada jugador.*/

let matchCards = {
  Messi: {
    rojas: 0,
    amarillas: 1,
  },
  Julian: {
    rojas: 1,
    amarillas: 0,
  },
};

function resumCards(tarjet) {
  return tarjet;
}

console.log(matchCards);

/*7. Imagina que estás desarrollando un carrito de compras para una página web. Tienes un
array de objetos productos, donde cada objeto representa un producto con su nombre y
precio. Escribe una función calcularTotal que recorra el array usando un bucle while y
calcule el precio total de los productos en el carrito. Muestra el total en la consola.*/

let products = [
  { name: "jabon", price: 500 },
  { name: "shampoo", price: 1000 },
  { name: "acondicionador", price: 700 },
  { name: "desodorante", price: 300 },
];

function shoppingCart(product) {
  let counter = 0;
  let finalPrice = 0;

  while (counter < product.length) {
    finalPrice += product[counter].price;
    counter++;
  }
  return finalPrice;
}
console.log(`El precio final es de ${shoppingCart(products)}.`);

/*8. Imagina que estás validando las entradas de un formulario en una página web. Tienes un
array datosIngresados que contiene valores que el usuario ingresó. Escribe una función
validarEntradas que recorra los datos usando un bucle do while para verificar que todos
los campos sean válidos (por ejemplo, que no estén vacíos). Si todos los campos son válidos,
muestra un mensaje en la consola indicando "Formulario válido", de lo contrario, muestra
"Formulario inválido".*/

let enterData = [12, 2, "", 903, "hola"];

function verifyEntries(data) {
  let counter = 0;
  do {
    if (typeof data[counter] != "number") {
      if (!(typeof data[counter] == "string" && data[counter].trim() != "")) {
        return "Formulario Invalido";
      }
    }
    counter++;
  } while (counter < enterData.length);
  return "Formulario valido";
}
console.log(verifyEntries(enterData));

/*9. Imagina que estás manejando una sección de comentarios en una página web. Tienes un
array de objetos comentarios, donde cada objeto tiene un usuario y un comentario.
Escribe una función mostrarComentarios que recorra el array usando un bucle while y
muestre cada comentario en la consola.*/

let comentsUsers = [
  { user: "Raul", coment: "Me gusto mucho tu papa" },
  { user: "Tomas", coment: "Esto de las inversiones no me convencen" },
  { user: "Korzu", coment: "uish" },
];

function showComents(comentUser) {
  let counter = 0;
  let coments = [];

  while (counter < comentUser.length) {
    coments.push(comentUser[counter].coment + "; ");
    counter++;
  }
  return coments;
}
console.log(`Los comentarios fueron: ${showComents(comentsUsers)}`);

/*10. Imagina que estás creando una barra de progreso para una página web. La barra de
progreso se llena a medida que se completa una tarea. Escribe una función
simularProgreso que use un bucle do while para simular el avance de la barra,
incrementando el progreso en un 10% en cada iteración hasta que alcance el 100%. Muestra
el progreso en la consola en cada paso.*/

function simulateProgress() {
  let counter = 0;
  let progress = 0;

  do {
    progress += 10;
    counter++;
    console.log(`Progreso: ${progress}%`);
  } while (counter <= 9);
}
simulateProgress();

/*11. Imagina que estás diseñando una función de filtrado para una tienda en línea. Tienes un
array de objetos productos, donde cada objeto tiene un nombre, categoría, y precio.Escribe una función filtrarPorCategoria que recorra el array usando un bucle while y
devuelva un nuevo array con los productos que pertenecen a una categoría específica.
Muestra los productos filtrados en la consola.*/

let products1 = [
  { name: "Shampoo", category: "Higiene personal", price: 5000 },
  { name: "Acondicionador", category: "Higiene personal", price: 4900 },
  { name: "Fideos", category: "Comida", price: 1700 },
];

function filterByCategory(products, categoria) {
  let counter = 0;
  let categorySpecific = [];

  while (counter < products.length) {
    if (products[counter].category === categoria) {
      categorySpecific.push(products[counter]);
    }
    counter++;
  }
  return categorySpecific;
}
console.log(filterByCategory(products1, "Comida"));
