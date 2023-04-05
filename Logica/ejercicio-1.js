/*
   Enunciado: Dado un array de enteros ordenado y sin repetidos, 
   crea una función que calcule y retorne todos los que faltan entre
   el mayor y el menor.
   - Lanza un error si el array de entrada no es correcto.
 */

let arrayOrdenado = [1, 2, 3, 5, 8, 10, 25];
let arrayRepetido = [1, 2, 2, 3, 8, 10, 25];
let arrayDesordenado = [1, 3, 2, 4, 8, 25];

function faltantes(miArray) {
  /* Que quiere decir array ordenado -  quiere decir que se muestra tal como la secuencia de numeros enteros, es decir: -3, -2, -1, 0, 1, 2, 3 */
  let recorrer = 0;
  for (let i = 0; i < miArray.length; i++) {
    if (miArray[recorrer] >= miArray[recorrer+1]) {
      return (`El array ingresado no es correcto`);
    }
    recorrer++;
  }
  /* Como se que está ordenado el numero menor esta en la primera posición y el numero mayor está en la última posición. 
  Como el array esta ordenado y puede que este incompleto tengo que llenarlo con los valores que faltan*/
  
  let numMenor = miArray[0];
  let numMayor = miArray[miArray.length - 1];
  
  /* Retornar los que faltan */
  
  let faltantes = [];
  let rellenar = 0;
  for (let j = numMenor; j <= numMayor; j++) {
    faltantes[rellenar] = j;
    faltantes[rellenar++]
  }

  for (let l = 0; l < miArray.length; l++) {
    for (let m = 0; m < faltantes.length; m++) {
      if (miArray[l] === faltantes[m]) {
        faltantes[m] = 0;
      }
    }
  }
  return `Los numeros faltantes son: ${faltantes}`
}

console.log(faltantes(arrayDesordenado));
console.log(faltantes(arrayRepetido));
console.log(faltantes(arrayOrdenado));


/* Me costo pensarlo pero lo hice, no use chat gpt */
