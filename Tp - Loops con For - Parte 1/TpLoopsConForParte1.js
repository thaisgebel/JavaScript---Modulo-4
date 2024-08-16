/*1. En una clase, tienes un array con las notas de los alumnos. Escribe una función
contarAprobados que reciba este array y cuente cuántos alumnos aprobaron (nota
mayor o igual a 6). Usa un bucle for para recorrer el array, continúe para saltar las
notas menores a 6 y break para detener el conteo si encuentras una nota igual a 10
(porque es la nota máxima). Muestra el resultado en la consola.*/

let notes = [9, 5, 8, 9, 10, 4, 2];

function approvedStudents(note) {
  let approved = 0;

  for (let counter = 0; counter < note.length; counter++) {
    if (note[counter] === 10) {
      break;
    } else if (note[counter] < 6) {
      continue;
    } else {
      approved++;
    }
  }
  return approved;
}
console.log(approvedStudents(notes));

/*2. Un canal de TV quiere saber si un programa específico está en la programación del día.
Escribe una función buscarPrograma que reciba un array con la lista de programas
del día y un nombre de programa para buscar. Usa un bucle for para recorrer el array y
break para detener la búsqueda una vez que encuentres el programa. Muestra en la
consola si el programa fue encontrado o no.*/

let canalTv = ["Pakka Pakka", "Space", "TNT", "Dyscovery", "Disney XD"];

function searchProgram(program, arrayProgram) {
  let foundProgram = "";

  for (let counter = 0; counter < arrayProgram.length; counter++) {
    if (arrayProgram[counter] === program) {
      foundProgram = arrayProgram[counter];
      break;
    }
  }
  return foundProgram;
}
console.log(searchProgram("TNT", canalTv));

/*3. En una clase, un profesor quiere saber cuántos alumnos obtuvieron notas menores a 4
para ofrecerles clases de apoyo. Escribe una función contarNotasBajas que reciba
un array con las notas y cuente cuántas son menores a 4. Usa for para recorrer el
array y continue para saltar las notas que no sean menores a 4.*/

let notes1 = [2, 5, 4, 2, 1, 3, 8, 9, 10];

function supportClasses(note) {
  let notesMinnor4 = 0;

  for (let counter = 0; counter < note.length; counter++) {
    if (note[counter] < 4) {
      notesMinnor4++;
    } else {
      continue;
    }
  }
  return notesMinnor4;
}
console.log(
  `La cantidad de pibes que necesitan clases de apoyo son: ${supportClasses(
    notes1
  )}.`
);

/*4. Tienes una lista de programas en un canal de televisión, y quieres seleccionar tus
favoritos, pero solo los primeros tres que te gustan. Escribe una función
seleccionarFavoritos que reciba un array con la lista de programas y un array con
tus programas favoritos. Usa for para recorrer la lista, continue para saltar los que no
están en tus favoritos, y break para detenerte una vez que hayas encontrado tres
programas favoritos.*/

let canalTv1 = ["Pakka Pakka", "Space", "TNT", "Dyscovery", "Disney XD"];

let canalFav = ["TNT", "Space", "Dyscovery"];

function findFavCanals(canalsFav, canals) {
  let selected = [];

  for (let counter = 0; counter < canals.length; counter++) {
    if (canals.includes(canalsFav[counter])) {
      selected.push(canalsFav[counter]);
    } else {
      continue;
    }
  }
  return selected;
}

console.log(
  `Los canales favoritos encontrados fueron: ${findFavCanals(
    canalFav,
    canalTv1
  )}`
);

/*5. En una escuela, el profesor quiere evaluar el desempeño de los alumnos. Escribe una
función evaluarDesempeño que reciba un array con las notas de los alumnos y
muestre en la consola si cada uno tiene un "Desempeño Excelente" (nota mayor o igual
a 9). Usa for para recorrer el array y continue para saltar los que no cumplan con el
criterio.*/

let notes2 = [9, 7, 8, 10, 9];

function evaluatePerformance(note) {
  for (let counter = 0; counter < note.length; counter++) {
    if (note[counter] >= 9) {
      console.log(`Desempeño Excelente: ${note[counter]}`);
    } else {
      continue;
    }
  }
}
evaluatePerformance(notes2);

/*6. Tienes un objeto alumno que contiene un array de materias, donde cada materia es un
objeto con el nombre y la nota. Escribe una función filtrarAprobadas que recorra el
array de materias, filtre aquellas con nota mayor o igual a 6 y las guarde en un nuevo
array aprobadas. Usa for para recorrer las materias, continue para saltar las
materias desaprobadas, y break si el alumno ya ha aprobado 5 materias. Muestra el
array aprobadas en la consola.*/

let alumns = {
  nombre: "Thais",
  materias: [
    { name: "Historia", note: 9 },
    { name: "Matematicas", note: 7 },
    { name: "Lengua", note: 4 },
  ],
};

function filterApproved(alumn) {
  let materiaApproved = [];

  for (let counter = 0; counter < alumn.materias.length; counter++) {
    if (materiaApproved.length === 5) {
      break;
    } else if (alumn.materias[counter].note >= 6) {
      materiaApproved.push(alumn.materias[counter]);
    } else {
      continue;
    }
  }
  return materiaApproved;
}
console.log(filterApproved(alumns));

/*7. Un canal de TV tiene una programación donde cada programa tiene una calificación.
Escribe una función buscarMejorPrograma que reciba un array de objetos
programas, cada uno con el nombre y la calificación, y encuentre el programa con la
mejor calificación. Usa for para recorrer el array, continue para saltar los programas
con calificaciones bajas (menos de 7), y break si encuentras un programa con una
calificación perfecta de 10. Muestra el nombre del mejor programa en la consola.*/

let canalTv2 = {
  programas: [
    { nombre: "Space", calificacion: 8 },
    { nombre: "Dysney XD", calificacion: 6 },
    { nombre: "Pakka Pakka", calificacion: 3 },
    { nombre: "Dyscovery Kids", calificacion: 1 },
    { nombre: "TNT", calificacion: 10 },
  ],
};

function searchForBestProgram(program) {
  let bestProgram = "";

  for (let counter = 0; counter < program.programas.length; counter++) {
    if (program.programas[counter].calificacion < 7) {
      continue;
    } else if (program.programas[counter].calificacion === 10) {
      bestProgram = program.programas[counter];
      break;
    }
  }
  return bestProgram;
}
console.log(searchForBestProgram(canalTv2));

/*8. En una escuela, algunas materias incluyen clases prácticas. Escribe una función que
reciba un objeto alumno con un array de materias, donde cada materia tiene un nombre
y un booleano tienePracticas que indica si incluye prácticas. Usa for para recorrer
las materias, continue para saltar las materias sin prácticas, y break si encuentras 3
materias con prácticas. Muestra en la consola cuántas materias con prácticas encontró.*/

let subjectsWithPractices = {
  alumno: [
    { materia: "Historia", havePractices: true },
    { materia: "Lengua", havePractices: false },
    { materia: "Matematicas", havePractices: false },
    { materia: "Biologia", havePractices: true },
  ],
};

function subjectPractices(subject) {
  let subjectHavePractices = [];

  for (let counter = 0; counter < subject.alumno.length; counter++) {
    if (subjectHavePractices.length === 3) {
      break;
    } else if (subject.alumno[counter].havePractices === true) {
      subjectHavePractices.push(subject.alumno[counter]);
    } else {
      continue;
    }
  }
  return subjectHavePractices;
}
console.log(subjectPractices(subjectsWithPractices));

/*9. Tienes una lista de canales de TV argentinos, y quieres saber si uno de tus canales
favoritos está en esa lista. Escribe una función buscarCanalFavorito que reciba un
array de canales y un array de favoritos. Usa for para recorrer los canales,
continue para saltar los que no están en la lista de favoritos, y break si encuentras
uno de tus canales favoritos. Muestra en la consola el nombre del canal encontrado o
un mensaje indicando que no está en la lista.*/

let canalTv3 = ["Pakka Pakka", "Space", "TNT", "Dyscovery", "Disney XD"];
let canalFav1 = ["TNT", "Space"];

function searchForFavProgram(canal, canalFav) {
  let searchCanalFav = [];

  for (let counter = 0; counter < canal.length; counter++) {
    if (canal.includes(canalFav[counter]) === true) {
      searchCanalFav.push(canalFav);
      break;
    } else if (canal.includes(canalFav[counter]) === false) {
      searchCanalFav.push(`${canalFav} No se encontro`);
    } else {
      continue;
    }
  }
  return searchCanalFav;
}
console.log(searchForFavProgram(canalTv3, canalFav1));
