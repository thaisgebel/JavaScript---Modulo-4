/*Bootcamp 2024 

Loops | Ejercicios básicos | While - Do While 

1. Crea una función sumarHastaLimite que reciba un número límite. Usa un bucle while para sumar números consecutivos (1, 2, 3,...) hasta que la suma alcance o supere el límite. Muestra el resultado en la consola.*/

function addToLimit(numberLimit) {
  let sum = 0;
  let cont = 1;

  while (sum <= numberLimit) {
    console.log((sum = sum + cont));
    cont++;
  }
}
let sumToLimit = addToLimit(50);
console.log(sumToLimit);

/* 2. Escribe una función contarPares que reciba un número n. Usa un bucle while para contar cuántos números pares hay entre 1 y n. Muestra el resultado en la consola.*/

function countPairs(number) {
  let numberWhile = 1;
  let counter = 0;

  if (number < 0) {
    number *= -1;
  }

  while (numberWhile <= number) {
    if (numberWhile % 2 == 0) counter++;
    numberWhile++;
  }
  console.log(counter);
}

countPairs(10);

/*3. Crea una función multiplicar que reciba dos números a y b. Usa un bucle while para multiplicar a por b mediante sumas sucesivas. Muestra el resultado en la consola.*/

function multiplicate(a, number2) {
  let isNegative = false;
  let number1 = a;
  if (number2 < 0) {
    number2 *= -1;
    isNegative = true;
  }
  while (number2 > 1) {
    number1 = a + number1;
    number2 -= 1;
  }
  if (isNegative == true) {
    console.log(number1 * -1);
  } else {
    console.log(number1);
  }
}
multiplicate(20, -5);

/*4. Escribe una función mostrarImpares que reciba un número límite. Usa un bucle while para mostrar en la consola todos los números impares desde 1 hasta el límite.*/

function showOdd(number) {
  let negative = false;

  if (number < 0) {
    number *= -1;
    negative = true;
  }

  if (number % 2 == 0) {
    number -= 1;
  }

  while (number > 0) {
    console.log(negative ? number * -1 : number);
    number -= 2;
  }
}
console.log(showOdd(-60));

/*5. Escribe una función calcularFactorial que reciba un número n. Usa un bucle while para calcular el factorial de n. Muestra el resultado en la consola.*/

function calculateFactorial(number) {
  if (number < 0) {
    console.log("El factorial no esta definido para numeros negativos");
  }

  let factorial = 1;
  let contador = 1;

  while (contador <= number) {
    console.log((factorial *= contador));
    contador += 1;
  }
}
calculateFactorial(6);

/*6. Crea una función cuentaRegresiva que reciba un número n. Usa un bucle do while para realizar una cuenta regresiva desde n hasta 1, mostrando cada número en la consola.*/

function countDown(number) {
  do {
    console.log(number);
    number--;
  } while (number >= 1);
}
countDown(5);

/*7. Escribe una función sumarDigitos que reciba un número n. Usa un bucle while para sumar todos los dígitos de n. Muestra el resultado en la consola.*/

function sumDigites(number) {
  let sumEveryDigites = 0;

  while (number > 1) {
    number = parseInt(number);
    sumEveryDigites += number % 10;
    number /= 10;
  }
  console.log(sumEveryDigites);
}
sumDigites(123);
/*8. Escribe una función encontrarMayor que reciba un array de números. Usa un bucle while para encontrar y mostrar el mayor número en la consola.*/

let numbers = [29, 101, 23, 35, 32, 233];

function searchMajor(numbersArray) {
  let majorNumber = 0;
  let contador = 0;

  while (contador < numbersArray.length) {
    if (majorNumber < numbers[contador]) {
      majorNumber = numbers[contador];
    }
    contador++;
  }
  console.log(majorNumber);
}
searchMajor(numbers);

/*9. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.*/
/*10. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números pares desde 1 hasta 20.*/

function numbersOddEven() {
  let number = 1;
  let numbersEven = [];
  let numbersOdd = [];
  do {
    if (number % 2 == 0) {
      numbersEven.push(number);
    } else {
      numbersOdd.push(number);
    }
    number++;
  } while (number <= 20);
  console.log(numbersEven + " " + numbersOdd);
}
numbersOddEven();

