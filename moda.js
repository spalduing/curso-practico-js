const lista = [1, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 3, 2, 4, 3, 3, 6, 7];

let elementosRepetidos = {};

console.group('Moda');
lista.map((elemento, i) => {
  if (elementosRepetidos[elemento]) {
    elementosRepetidos[elemento] += 1;
  } else {
    elementosRepetidos[elemento] = 1;
  }
});

const arrayElementosRepetidos = Object.entries(elementosRepetidos).sort(
  (a, b) => a[1] - b[1]
);

const lastIndex = arrayElementosRepetidos.length - 1;
console.log('arrayElementosRepetidos: ', arrayElementosRepetidos);
console.log('moda: ', arrayElementosRepetidos[lastIndex]);

console.groupEnd();
