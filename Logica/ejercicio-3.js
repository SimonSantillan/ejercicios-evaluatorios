/*  Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
  - El resultado puede ser: "Jugador 1", "Jugador 2", "Empate" 
  - La función recibe un listado que contiene pares, representando cada jugada.
 - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
  - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: 
"Jugador 2" */

let entrada = [["R", "S"], ["S", "R"], ["P", "S"]];
let entrada1 = [["R", "S"], ["S", "R"], ["S", "S"]];
let entrada2 = [["S", "P"], ["S", "R"], ["R", "S"]];
function piedraPapelTijera(pares) {
  let puntos1 = 0;
  let puntos2 = 0;
  pares.forEach(function(chico) {
    if (chico[0] === "R" && chico[1] === "S") {
      puntos1 = puntos1 + 1;
    }
    if (chico[1] === "R" && chico[0] === "S") {
      puntos2 = puntos2 + 1;
    }
    if (chico[0] === "P" && chico[1] === "R") {
      puntos1 = puntos1 + 1;
    }
    if (chico[1] === "P" && chico[0] === "R") {
      puntos2 = puntos2 + 1;
    }
    if (chico[0] === "S" && chico[1] === "P") {
      puntos1 = puntos1 + 1;
    }
    if (chico[1] === "S" && chico[0] === "P") {
      puntos2 = puntos2 + 1;
    }
  });
  if (puntos1 === puntos2) {
    return `Los jugadores han empatado`;
  } else if (puntos1 > puntos2 ) {
    return `El jugardor 1 ha ganado`;
  } else {
    return `El jugador 2 ha ganado`;
  }
}

console.log(piedraPapelTijera(entrada));
console.log(piedraPapelTijera(entrada1));
console.log(piedraPapelTijera(entrada2));

/* fui de lo mas chico a los mas grande, pense primero que pasa si tengo un array solo y me quedo lo que esta dentro del foreach, entonces como es el mismo procedimiento para cada uno, lo recorro, no use chat gpt */