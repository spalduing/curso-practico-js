const list = [];

function fillList() {
  const listParagraph = document.getElementById('list');
  const elementField = document.getElementById('elementField');

  const elementValue = elementField.value;
  list.push(elementValue);

  listParagraph.innerText = `The list of numbers is: ${list}`;
}

function getMode() {
  const modeParagraph = document.getElementById('mode');

  let elementosRepetidos = {};

  console.group('Moda');
  list.map((elemento, i) => {
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

  modeParagraph.innerText = `La moda es: '${arrayElementosRepetidos[lastIndex][0]}'
                               Numero de veces que se repite el elemento: '${arrayElementosRepetidos[lastIndex][1]}'`;
}
