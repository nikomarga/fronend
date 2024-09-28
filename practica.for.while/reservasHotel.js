/* Sistema de Reservas de Hotel
Crea un programa que simule un sistema de reservas de hotel. El programa debe:
-Preguntar al usuario cuántas habitaciones desea reservar, el tipo de habitaciones (individual, doble, suite)
 y el número de noches que se quedarán.
-Calcular el costo total basado en el tipo de habitación y el número de noches.
-Aplicar un descuento si el usuario reserva por más de un cierto número de noches 
(por ejemplo, 10% de descuento para estancias superiores a 7 noches).
-Utilizar un ciclo para permitir al usuario reservar varias habitaciones y calcular las ganancias totales al final. */

let subtotal;
let typeRoom;
let quantityNight;
let valorRoom;
let discount;
let total= 0;

//entrada

typeRoom = parseInt(prompt("Cual habitacion desea reservar: \n1.Individual \n2.Doble \n3.Suite"))
//entrada noches de hoespedaje
quantityNight = parseInt(prompt("Cuantas noches la desea reservar? "));
//calculo del valor por noche bruto



while (typeRoom >=1 && typeRoom <=3 ) {
    switch (typeRoom) {
        case 1:
            valorRoom = 120000;
            break;
        case 2:
            valorRoom = 200000;
            break;
        case 3:
            valorRoom = 350000;
            break;
    }
break;//salir del ciclo
} 

    //condicion if para descuento
    if(quantityNight >= 7){
        discount = subtotal * 0.10;
    }else{
        discount = 0;
    }


subtotal = valorRoom * quantityNight;
total = subtotal - discount;


document.write("FACTURA HOSPEDAJE");
document.write("<hr>");
document.write("Valor por noche: $" + valorRoom+ "<br>");
document.write("Cantidad de noches: " + quantityNight + "<br>");
document.write("Subtotal: $" + subtotal + "<br>");
document.write("Descuento: $" + discount + "<br>");
document.write("<hr>");
document.write("Total: $" + total);


