// codigo cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;

function getPerimetroCuadrado(ladoCuadrado) {
  return ladoCuadrado * 4;
}
function calcularPerimetroCuadrado() {
  const input = document.getElementById('ImputCuadrado');
  const ladoCuadrado = input.value;
  return ladoCuadrado * 4;
}
console.log(
  'El perimetro del cuadrado es de: ' +
    getPerimetroCuadrado(ladoCuadrado) +
    'cm'
);

function getAreaCuadrado(ladoCuadrado) {
  return ladoCuadrado * ladoCuadrado;
}
function calcularAreaCuadrado() {
  const input = document.getElementById('ImputCuadrado');
  const ladoCuadrado = input.value;
  return ladoCuadrado * ladoCuadrado;
}
console.log(
  'El lado área del cuadrado es de: ' + getAreaCuadrado(ladoCuadrado) + 'cm^2'
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
  return ladoATriangulo + ladoBTriangulo + baseTriangulo;
}
console.log(
  'El perimetro del triangulo es de: ' +
    getPerimetroTriangulo(ladoATriangulo, ladoBTriangulo, baseTriangulo) +
    ' cm'
);

function getAreaTriangulo(baseTriangulo, alturaTriangulo) {
  return (baseTriangulo * alturaTriangulo) / 2;
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
  return radioCirculo * 2;
}
console.log(
  'El diametro del circulo es: ' + getDiametroCirculo(radioCirculo) + 'cm'
);

// Pi
const pi = Math.PI;
console.log('PI es: ' + pi);

// Perimetro
function getPerimetroCirculo(diametroCirculo) {
  return diametroCirculo * pi;
}
console.log(
  'El perimetro del circulo es: ' +
    getPerimetroCirculo(getDiametroCirculo(radioCirculo)) +
    'cm'
);

// Area
function getAreaCirculo(radioCirculo, pi) {
  return radioCirculo * radioCirculo * pi;
}
console.log(
  'El area del circulo es: ' + getAreaCirculo(radioCirculo, pi) + 'cm^2'
);

console.groupEnd();
