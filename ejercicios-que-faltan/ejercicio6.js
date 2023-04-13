const abecedario = [
  ["a", "A"],
  ["b", "B"],
  ["c", "C"],
  ["d", "D"],
  ["e", "E"],
  ["f", "F"],
  ["g", "G"],
  ["h", "H"],
  ["i", "I"],
  ["j", "J"],
  ["k", "K"],
  ["l", "L"],
  ["m", "M"],
  ["n", "N"],
  ["o", "O"],
  ["p", "P"],
  ["q", "Q"],
  ["r", "R"],
  ["s", "S"],
  ["t", "T"],
  ["u", "U"],
  ["v", "V"],
  ["w", "W"],
  ["x", "X"],
  ["y", "Y"],
  ["z", "Z"],
];



function capitalizar(palabra) {
  palabra[0] = abecedario[0][1];
  return palabra;
  /* for (let i = 0; i < abecedario.length; i++) {
    if (palabra[0] === abecedario[i][0]) {
      palabra[0] = abecedario[i][1]
      return palabra;
    } else if (palabra[0] === abecedario[i][1]) {
      return palabra;
    } else {
      continue;
    }
  } */
}

console.log(abecedario[0][0]);
console.log(capitalizar("cimon"));
console.log(capitalizar("zimon"));