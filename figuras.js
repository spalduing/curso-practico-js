// codigo cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;

function getPerimetroCuadrado(ladoCuadrado) {
  return Number(ladoCuadrado) * 4;
}

function calcularPerimetroCuadrado() {
  const input = document.getElementById('ladoCuadrado');
  const ladoCuadrado = input.value;
  const perimetroCuadrado = getPerimetroCuadrado(ladoCuadrado);

  alert(`El perimetro del cuadrado es de: ${perimetroCuadrado}`);
}

console.log(
  'El perimetro del cuadrado es de: ' +
    getPerimetroCuadrado(ladoCuadrado) +
    'cm'
);

function getAreaCuadrado(ladoCuadrado) {
  return Number(ladoCuadrado) * Number(ladoCuadrado);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('ladoCuadrado');
  const ladoCuadrado = input.value;
  const areaCuadrado = getAreaCuadrado(ladoCuadrado);

  alert(`El área del cuadrado es de:  ${areaCuadrado}`);
}

console.log(
  'El área del cuadrado es de: ' + getAreaCuadrado(ladoCuadrado) + 'cm^2'
);

console.groupEnd();

// codigo triangulo
console.group('Triangulo');

const ladoATriangulo = 6;
const ladoBTriangulo = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log('El lado A del triangulo mide": ' + ladoATriangulo + ' cm');
console.log('El lado B del triangulo mide": ' + ladoBTriangulo + ' cm');
console.log('La base del triangulo mide": ' + baseTriangulo + ' cm');
console.log('La altura del triangulo mide": ' + alturaTriangulo + ' cm');

function getPerimetroTriangulo(ladoATriangulo, ladoBTriangulo, baseTriangulo) {
  const perimetroTriangulo =
    Number(ladoATriangulo) + Number(ladoBTriangulo) + Number(baseTriangulo);
  return perimetroTriangulo;
}
console.log(
  'El perimetro del triangulo es de: ' +
    getPerimetroTriangulo(ladoATriangulo, ladoBTriangulo, baseTriangulo) +
    ' cm'
);

function calcularPerimetroTriangulo() {
  const inputLadoATriangulo = document.getElementById('ladoATriangulo');
  const inputLadoBTriangulo = document.getElementById('ladoBTriangulo');
  const inputBaseTriangulo = document.getElementById('baseTriangulo');

  const ladoATriangulo = inputLadoATriangulo.value;
  const ladoBTriangulo = inputLadoBTriangulo.value;
  const baseTriangulo = inputBaseTriangulo.value;

  const perimetroTriangulo = getPerimetroTriangulo(
    ladoATriangulo,
    ladoBTriangulo,
    baseTriangulo
  );

  console.log(perimetroTriangulo);

  alert(`El perimetro del triangulo es de: ${perimetroTriangulo}`);
}

function getAreaTriangulo(baseTriangulo, alturaTriangulo) {
  return (Number(baseTriangulo) * Number(alturaTriangulo)) / 2;
}

function calcularAreaTriangulo() {
  const inputBaseTriangulo = document.getElementById('baseTriangulo');
  const inputAlturaTriangulo = document.getElementById('alturaTriangulo');

  const baseTriangulo = inputBaseTriangulo.value;
  const alturaTriangulo = inputAlturaTriangulo.value;

  const areaTriangulo = getAreaTriangulo(baseTriangulo, alturaTriangulo);

  alert(`El área del triangulo es de: ${areaTriangulo} cm^2`);
}

function getAlturaTrianguloIsoceles(ladoATriangulo, baseTriangulo) {
  const aCuadrado = Math.pow(ladoATriangulo, 2);
  const bCuartosCuadrado = Math.pow(baseTriangulo / 4, 2);
  const alturaTrianguloIsoceles = Math.sqrt(aCuadrado - bCuartosCuadrado);

  return alturaTrianguloIsoceles;
}

function calcularAlturaTrianguloIsoceless() {
  const inputLadoATriangulo = document.getElementById('ladoATriangulo');
  const inputLadoBTriangulo = document.getElementById('ladoBTriangulo');
  const inputBaseTriangulo = document.getElementById('baseTriangulo');

  const ladoATriangulo = inputLadoATriangulo.value;
  const ladoBTriangulo = inputLadoBTriangulo.value;
  const baseTriangulo = inputBaseTriangulo.value;

  const isIsoceles =
    Number(ladoATriangulo) === Number(ladoBTriangulo) ? true : false;
  if (isIsoceles) {
    const alturaTrianguloIsoceles = getAlturaTrianguloIsoceles(
      ladoATriangulo,
      baseTriangulo
    );
    alert(
      `El tríangulo es isóceles y su altura es: ${alturaTrianguloIsoceles}`
    );
  } else {
    alert(`El triangulo NO es Isóceles`);
  }
}

console.log(
  'El área del triangulo es de: ' +
    getAreaTriangulo(baseTriangulo, alturaTriangulo) +
    ' cm^2'
);

console.groupEnd();

// Código circulo
console.group('Circulo');

// Radio
const radioCirculo = 4;
console.log('El radio del circulo es: ' + radioCirculo + 'cm');

// Diametro
function getDiametroCirculo(radioCirculo) {
  return Number(radioCirculo) * 2;
}

function calcularDiametroCirculo() {
  const input = document.getElementById('radioCirculo');
  const radioCirculo = input.value;
  const diametroCirculo = getDiametroCirculo(radioCirculo);

  alert(`El diametro del circulo es de: ${diametroCirculo}`);
}

console.log(
  'El diametro del circulo es: ' + getDiametroCirculo(radioCirculo) + 'cm'
);

// Pi
const pi = Math.PI;
console.log('PI es: ' + pi);

// Perimetro
function getPerimetroCirculo(diametroCirculo) {
  const PI = Math.PI;
  return Number(diametroCirculo) * PI;
}

function calcularPerimetroCirculo() {
  const input = document.getElementById('radioCirculo');
  const radioCirculo = input.value;

  const diametroCirculo = getDiametroCirculo(radioCirculo);
  const perimetroCirculo = getPerimetroCirculo(diametroCirculo);

  alert(`El perimetro del circulo es de: ${perimetroCirculo}`);
}

console.log(
  'El perimetro del circulo es: ' +
    getPerimetroCirculo(getDiametroCirculo(radioCirculo)) +
    'cm'
);

// Area
function getAreaCirculo(radioCirculo) {
  const PI = Math.PI;
  return Number(radioCirculo) * Number(radioCirculo) * PI;
}

function calcularAreaCirculo() {
  const input = document.getElementById('radioCirculo');
  const radioCirculo = input.value;
  const areaCirculo = getAreaCirculo(radioCirculo);

  alert(`El area del circulo es de: ${areaCirculo} cm^2`);
}

console.log('El area del circulo es: ' + getAreaCirculo(radioCirculo) + 'cm^2');

console.groupEnd();
