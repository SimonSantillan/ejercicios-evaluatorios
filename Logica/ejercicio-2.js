 /*
    Crea una función que ordene y retorne una matriz de números.
  - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
    adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
    o de mayor a menor.
  - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 */
let arrayOrdenado = [1, 2, 3, 5, 8, 10, 25];
let arrayDesordenado = [1, 3, 2, 4, 8, 25, 10, 12];

function ordenarYretornar(miArray, orden) {
  /* Ordeno el array */

  /* Use chat gpt para usar el metodo de ordenamiento burbuja ya que no me acordaba */
  let n = miArray.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (miArray[j] > miArray[j + 1]) {
        /* intercambia los elementos */
        let temp = miArray[j];
        miArray[j] = miArray[j + 1];
        miArray[j + 1] = temp;
      }
    }
  }
  if (orden === "Asc") {
    return `${miArray}`
  } else if (orden === "Desc") { 
    let miArrayDesc = [];
    let posicion = 0;
    for (let i = miArray.length - 1; i >= 0; i--) {
      miArrayDesc[posicion] = miArray[i];
      posicion++;
    }
    return `${miArrayDesc}`
  }

}

console.log(ordenarYretornar(arrayDesordenado, "Asc"));
console.log(ordenarYretornar(arrayDesordenado, "Desc"));