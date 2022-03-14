function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;

  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  //   console.log({
  //     precio,
  //     descuento,
  //     porcentajePrecioConDescuento,
  //     precioConDescuento,
  //   });

  return precioConDescuento;
}
