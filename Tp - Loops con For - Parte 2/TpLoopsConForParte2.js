/*Bootcamp 2024

Loops | Ejercicios básicos | For - Break - Continue

1. Crea una función que reciba un número como parámetro y genere la tabla de multiplicar
para ese número, desde 1 hasta 10. La función debe imprimir los resultados en la
consola en el formato adecuado.*/

let numbers = 4;

function multiplicationTable(num) {
  let finalTable = [];
  let to10 = 1;

  for (let counter = 0; counter < 10; counter++) {
    finalTable.push(`${num} por ${to10} queda: ${num * to10}`);
    to10++;
    continue;
  }
  return finalTable;
}
console.log(multiplicationTable(numbers));

/*2. Estás desarrollando el nuevo instagram. Decidiste agregar una función que invierte los
mensajes, para que los usuarios puedan mandar mensajes ‘cifrados’, y así estar en la
onda.

Entrada:

Crea una función que reciba un mensaje de texto como parámetro. El mensaje puede
contener letras, números, espacios y otros caracteres.

Proceso:

1. Recorrer el mensaje de texto desde el último carácter hasta el primero’
2. Utilizar un bucle for para armar la nueva cadena invertida.
3. Asegurarte de que la función maneje bien todos los caracteres 

Salida:
La salida debe ser una nueva cadena de texto que representa el mensaje original
invertido, lista para confundir a tus amigos en un asado o en la previa del partido.

Ejemplo de salida para la entrada "Che, ¿vamos a la cancha?": "?ahcnac al
a somav¿ ,ehC".*/

let message = "ayer me comi una papa que pesaba 30 kilos a la redonda #^(";

function messageEncryption(mensaje) {
  let newMessage = "";

  for (let counter = mensaje.length - 1; counter >= 0; counter--) {
    newMessage += mensaje[counter];
  }
  return newMessage;
}
console.log(messageEncryption(message));

/*3. En una noche de Clash Royale con tus amigos, cada uno puntúa las jugadas más
épicas. Usa una función para encontrar el puntaje más alto y coronar al “Genio
Montapuercos” de la noche. La función debe aceptar un array de números, que pueden
ser enteros o decimales.

a) Proceso:

○ Recorrer el array de números para identificar el valor máximo.
○ Utilizar un bucle for para comparar cada número con el valor máximo
encontrado hasta el momento.
○ Asegurarse de que la función maneje adecuadamente los números
dentro del array, incluso si hay valores negativos o decimales.

b) Salida:

La salida debe ser el valor máximo encontrado en el array.

Ejemplo de salida para la entrada [3, 5, 7, 2, 8]: 8.*/

let punctuation = [9, 8, 6, 1, 0, 9.25, 9.5, -10];

function genieRunPigs(numbers) {
  let winner = "";

  for (let counter = 0; counter < numbers.length; counter++) {
    if (winner < numbers[counter]) {
      winner = numbers[counter];
    }
  }
  return winner;
}
console.log(genieRunPigs(punctuation));

/*4. Como desarrollador del juego FIFA, estás añadiendo una funcionalidad para mostrar el
promedio de calificaciones de los jugadores usando estrellas (*) en la página web. Cada
estrella representará una unidad del promedio redondeado al entero más cercano, con
un máximo de 5 estrellas.

Requisitos:

a) Entrada:

○ La función debe recibir un array de calificaciones, donde cada calificación
es un número entre 1 y 5. Algunos valores pueden ser null o mayores a
5, y deben ser ignorados.

b) Proceso:

○ Recorre el array de calificaciones y calcula el promedio de las
calificaciones válidas.
○ Redondea el promedio al número entero más cercano.
○ Usa un bucle for para construir una cadena de estrellas (*). La cantidad
de estrellas debe coincidir con el promedio redondeado, hasta un máximo
de 5 estrellas.

c) Salida:

○ La salida debe ser una cadena de asteriscos (*) que representa el
promedio redondeado.
○ Ejemplo de salida para la entrada [3, 1, 4, 5, 2]: *** (3 estrellas).
○ Ejemplo de salida para la entrada [4, 3, 5, 2, 4]:**** (4
estrellas).
○ Ejemplo de salida para la entrada [4, 6, null, 2, 4]: *** (3
estrellas).*/

let califications = [5, 5];

function fifaStars(numbers) {
  let stars = "";
  let promedio = 0;
  let cantidadqueentraron = 0;
  let promediofinal = 0;

  for (let counter = 0; counter < numbers.length; counter++) {
    if (numbers[counter] >= 1 && numbers[counter] <= 5) {
      promedio += numbers[counter];
      cantidadqueentraron++;
    }
  }
  promediofinal = promedio / cantidadqueentraron;
  if (parseInt(promediofinal + 0.5) == parseInt(promediofinal)) {
    promediofinal = parseInt(promediofinal);
  } else {
    promediofinal = parseInt(promediofinal) + 1;
  }

  for (let counter1 = 0; counter1 < promediofinal; counter1++) {
    stars += "*";
  }
  return stars;
}
console.log(`La cantidad de estrellas son: ${fifaStars(califications)}.`);
