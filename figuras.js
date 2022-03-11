// codigo cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden": ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado es de: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El lado área del cuadrado es de: ' + areaCuadrado + 'cm^2');

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

const perimetroTriangulo = ladoATriangulo + ladoBTriangulo + baseTriangulo;
console.log('El perimetro del triangulo es de: ' + perimetroTriangulo + ' cm');

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log('El área del triangulo es de: ' + areaTriangulo + ' cm^2');

console.groupEnd();

// Código circulo
console.group('Circulo');

// Radio
const radioCirculo = 4;
console.log('El radio del circulo es: ' + radioCirculo + 'cm');

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo es: ' + diametroCirculo + 'cm');

// Pi
const pi = Math.PI;
console.log('PI es: ' + pi);

// Perimetro
const perimetroCirculo = diametroCirculo * pi;
console.log('El perimetro del circulo es: ' + perimetroCirculo + 'cm');

// Area
const areaCirculo = radioCirculo * radioCirculo * pi;
console.log('El area del circulo es: ' + areaCirculo + 'cm^2');

console.groupEnd();
