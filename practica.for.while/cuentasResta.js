/* Calculadora de Cuentas de Restaurante
Crea un programa que calcule la cuenta de una mesa en un restaurante. El programa debe:

Preguntar al usuario el precio de cada plato y la cantidad pedida.
Calcular el total para cada plato.
Utilizar un ciclo para seguir añadiendo platos hasta que el usuario decida detenerse.
Calcular el subtotal, aplicar un cargo por servicio (por ejemplo, 10% del subtotal) y mostrar la cuenta total.*/

//variable
let priceDish;
let quantityDish;
let subtotal = 0;
let totalForDish = 0;
let respuesta;
let service = 0;
let pricetotal = 0;
let i = 1;


do {
    priceDish = parseFloat(prompt("Digite el precio del plato: "));
    quantityDish = parseInt(prompt("Digite la cantidad de platos: "));

    //calculos 
    subtotal = priceDish * quantityDish;
    service = subtotal * 0.10;
    totalForDish = subtotal - service;

    pricetotal += totalForDish;

    document.write("VALOR PLATO "  +i);
    document.write("<hr>");
    document.write("Cantidad platos: " + quantityDish + "<br>");
    document.write("Servicio aplicado: $" + service + "<br>");
    document.write("Precio: $" + subtotal);
    document.write("<hr>");
    i++;


    //entrada de respuesta
    respuesta = parseInt(prompt("Quiere añadir otro plato? 1.SI 2.NO"))
} while (respuesta === 1); 



//salida de ganancia totales
document.write(`<h1> TOTAL FACTURA DE RESTAURANTE</h1>`);
document.write("<hr>");
document.write(`<p>Ganancia total: ${pricetotal}</p>`);
