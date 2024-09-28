/*Venta de Boletos para un Evento
Crea un programa que simule la venta de boletos para un evento. El programa debe:
-Preguntar al usuario el número de adultos y niños que asistirán.
-Calcular el costo total basado en el precio de los boletos para adultos y niños.
-Aplicar un descuento grupal si el número de personas supera un cierto umbral (por ejemplo, 
15% de descuento si asisten más de 5 personas).
-Utilizar un ciclo para permitir al usuario ingresar varios grupos y calcular las ganancias totales al final. */

//variables
let quantityAdults;
let quantityChildren;
let quantityTotal
const priceAduls = 250000;
const priceChildren = 100000;
let priceTotal;
let descount = 0;
let group;
let totalRevenue = 0;
let precioNeto;


//ciclo while
do {
    quantityAdults = parseInt(prompt("Cuantos adultos son: "));
    quantityChildren = parseInt(prompt("Cuantos niños son: "));

    //total de adultos y niños
    quantityTotal = quantityAdults + quantityChildren;

    //price total grupo
    priceTotal = (priceAduls * quantityAdults) + (priceChildren * quantityChildren);

    if (quantityTotal > 5) {
        discount = priceTotal * 0.15;
    } else {
        discount = 0; 
    }

    // Calcular precio neto después del descuento
    netPrice = priceTotal - discount;

    // Acumular las ganancias totales
    totalRevenue += netPrice;

    // Mostrar factura para el grupo actual
    document.write(`<h42>FACTURA DEL GRUPO</h42>`);
    document.write("<hr>");
    document.write("Cantidad de boletos: " + quantityTotal + "<br>");
    document.write("Descuento aplicado: $" + discount.toFixed(2) + "<br>");
    document.write("Precio neto a pagar: $" + netPrice.toFixed(2) + "<br>");
    document.write("<hr>");

    group = parseInt(prompt("Quiere añadir otro grupo? 1.SI 2.NO "));
} while (group === 1);

//salida de ganancia totales
document.write(`<h1>FACTURA COMPRA</h1>`);
document.write("<hr>");
document.write(`<p>Ganancia total: ${totalRevenue}</p>`);

