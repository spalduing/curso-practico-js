const array = [];

function llenarLista() {
  const numberFiled = document.getElementById('numField');
  const number = Number(numberFiled.value);

  array.push(number);
  const message = `La lista de números es: ${array}`;

  const precioFinalParagraph = document.getElementById('numberArray');
  precioFinalParagraph.innerText = message;
}

function calcularPromedio() {
  let sumaArray = 0;

  for (let i = 0; i < array.length; i++) {
    sumaArray = sumaArray + array[i];
  }

  const promedio = sumaArray / array.length;

  const message = `El promedio es: ${promedio}`;

  const precioFinalParagraph = document.getElementById('mean');
  precioFinalParagraph.innerText = message;

  return promedio;
}
