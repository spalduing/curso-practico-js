let lista1 = [1, 2, 3, 4];
let lista2 = [0, 1, 2, 3, 4, 5, 6];

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
lista1 = lista1.sort((a, b) => a - b);
lista2 = lista2.sort((a, b) => a - b);

let isEven = (lista1.length | 1) !== lista1.length ? true : false;
let isOdd = (lista2.length | 1) === lista2.length ? true : false;

if (isEven) {
  console.group('Par');
  const midIndex1 = lista1.length / 2 - 1;
  const midIndex2 = lista1.length / 2;
  console.log('midIndex1: ', midIndex1);
  console.log('midIndex2: ', midIndex2);
  const mediana = (lista1[midIndex1] + lista1[midIndex2]) / 2;
  console.log('mediana: ', mediana);
  console.groupEnd();
}

if (isOdd) {
  console.group('Impar');
  const midIndex = (lista2.length / 2) | 0;
  console.log('midIndex: ', midIndex);
  const mediana = lista2[midIndex];
  console.log('mediana: ', mediana);
  console.groupEnd();
}
