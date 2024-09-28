/* Servicio de Alquiler de Autos
Crea un programa que simule un servicio de alquiler de autos. El programa debe:
-Preguntar al usuario qué tipo de auto desea alquilar (por ejemplo, económico, sedán, SUV), 
el número de días que desea alquilar el auto y si desea seguro.
-Calcular el costo total del alquiler basado en el tipo de auto, el número de días y el seguro.
-Aplicar un descuento si el usuario alquila el auto por más de un cierto número de días 
(por ejemplo, 20% de descuento para alquileres superiores a 10 días).
Utilizar un ciclo para permitir al usuario alquilar varios autos y calcular las ganancias totales al final */

//variables
let typeAuto;
let valorAuto
let secure;
let discount = 0;
let quantityDay;
let subtotal = 0;
let totalPorAuto;
let total = 0;
let respuesta = 1;
let i = 1;
let priceSecure = 0;


do {
    typeAuto = parseInt(prompt("Que tipo de auto le gustaria alquilar: \n1. Economico \n2. Sedan \n3. Suv"));

    switch (typeAuto) {
        case 1:
            valorAuto = 130000;
            break;
        case 2:
            valorAuto = 250000;
            break;
        case 3:
            valorAuto = 380000;
            break;
    }


    //entradas de pregunta
    quantityDay = parseInt(prompt("Cuantos dias deseas alquilar el auto? "));
    secure = parseInt(prompt("Desea llevarlo con seguro? \n1.SI \n2.NO "));
 
    // calcular subtotal
    subtotal = valorAuto * quantityDay;

    //condicion if para validar el seguro
    if (secure === 1) {
        priceSecure = 100000;
    } else {
        priceSecure = 0;
    }

    if (quantityDay >= 10) {
        discount =  (subtotal * 0.10);
    } else {
        discount = 0;
    }

    //calcular el tortal
    totalPorAuto =  subtotal - discount + secure;
    total += totalPorAuto;  

    document.write("FACTURA AUTO " +i);
    document.write("<hr>");
    document.write("precio auto: " + valorAuto+ "<br>");
    document.write("Dias: $" + quantityDay + "<br>");
    document.write("Descuento: $" + discount + "<br>");
    document.write("Seguro: $" + priceSecure + "<br>");
    document.write("Precio total del auto: $" + totalPorAuto + "<br>");
    document.write("<hr>");
    i ++;

    //entrada de preguntar si quiere alquilar otro auto
    respuesta = parseInt(prompt("Desea alquilar otro auto ? \n1.SI \n2.NO "));
}while (respuesta === 1) 

document.write(`<h1>FACTURA ALQUILER DE AUTOS</h1>`);
document.write("<hr>");
document.write(`<p>Ganancia total: ${total}</p>`);




