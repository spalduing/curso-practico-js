function getPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;

  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularPrecioConDescuento() {
  const precioInput = document.getElementById('precioProducto');
  const precio = Number(precioInput.value);

  const descuentoInput = document.getElementById('descuentoProducto');
  const descuento = Number(descuentoInput.value);

  const precioFinalParagraph = document.getElementById('precioFinal');

  const precioConDescuento = getPrecioConDescuento(precio, descuento);

  const precioFinalMessage = `El precio final es de: $${precioConDescuento}`;

  precioFinalParagraph.innerText = precioFinalMessage;
}
