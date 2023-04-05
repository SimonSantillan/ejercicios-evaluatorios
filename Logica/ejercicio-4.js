/* 4 Maximo comun divisor , Minimo comun múltiplo */

function mcd(num){
  /* Es el maximo comun divisor de un numero, o sea el numero mas alto contenido en el */
  let maximo = 0;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      maximo = i;
    }
  }
  return `El maximo comun divisor es: ${maximo}`;
}

/* Para esta resolucion me ayude con chat gpt para hacer memoria sobre los mcm a nivel conceptual*/
function mcm(num1,num2) {
  var max = num1 > num2 ? num1 : num2;
  var min = num1 < num2 ? num1 : num2;
  var i = max;
  while (i % min !== 0) {
    i += max;
  }
  return i;
}

console.log(mcm(12,8));
















