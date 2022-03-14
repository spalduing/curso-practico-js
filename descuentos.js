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

function calcularPrecioConDescuentoCupon() {
  const descuentoSelectionado = {
    mercadona: 20,
    superinter: 40,
    exito: 10,
  };
  const precioInput = document.getElementById('precioProducto');
  const precio = Number(precioInput.value);

  const descuentoInput = document.querySelector(
    'input[name="discount"]:checked'
  );
  const descuento = descuentoInput.value;

  const descuentoFinal = descuentoSelectionado[`${descuento}`];

  const precioFinalParagraph = document.getElementById('precioFinal');

  const precioConDescuento = getPrecioConDescuento(precio, descuentoFinal);

  const precioFinalMessage = `El precio final es de: $${precioConDescuento}`;

  precioFinalParagraph.innerText = precioFinalMessage;
}
