const lista1 = [1, 2, 3, 4];

let sumaLista1 = 0;

console.group('sumaListaFor');
for (let i = 0; i < lista1.length; i++) {
  sumaLista1 = sumaLista1 + lista1[i];
  console.log(sumaLista1);
}
console.groupEnd();

console.group('promedio');
const promedio = sumaLista1 / lista1.length;
console.log(promedio);
console.groupEnd();
