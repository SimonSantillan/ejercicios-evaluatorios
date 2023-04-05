/*
  5-/*
   Crea una función que reciba días, horas, minutos y segundos (como
enteros)
   y retorne su resultado en milisegundos
*/

function milisegundos(dias, horas, minutos, segundos) {
  return ((dias*24*60*60 + horas*60*60 + minutos*60 + segundos) * 1000)
}

console.log(milisegundos(1, 0, 0, 0));

/* Simple c: */