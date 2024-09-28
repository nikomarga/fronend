/*Crea un programa que simule un carrito de compras. Debes pedir al usuario que ingrese el nombre del artículo, 
el precio y la cantidad. El programa debe:
-Calcular el precio total de cada artículo (precio × cantidad).
-Preguntar al usuario si quiere añadir otro artículo.
-Utilizar un ciclo para seguir añadiendo artículos hasta que el usuario decida detenerse.
-Calcular el subtotal, aplicar un descuento si el subtotal es mayor a una cierta cantidad 
(por ejemplo, 10% de descuento si el subtotal es mayor a $100), y mostrar el total final. */

let namItem;
let priceItem;
let quantity;
let totalPrice;
let question;
let subtotal = 0;
let descuento;
let total;

do {
    namItem = prompt("Nombre del Artículo: ");
    priceItem = parseFloat(prompt("Precio del Artículo: "));
    quantity = parseInt(prompt("Cantidad de este artículo: "));

    totalPrice = priceItem * quantity;

    subtotal += totalPrice;

    question = prompt("¿Quiere añadir otro artículo? 1. SÍ 2. NO");

} while (question === "1"); // Se debe comparar como string

if (subtotal > 100) {
    descuento = subtotal * 0.1;
    total = subtotal - descuento;
}

document.write(`<h1>FACTURA COMPRA</h1>`);
document.write("<hr>");
document.write("Descuento aplicado: $ " + descuento + "<br>");
document.write(`<p>subtotal: ${subtotal}</p>`);
document.write("Total final a pagar: $" + total);

