// Variables iniciales
let customer = "Nikole";
let numAdults = 3;
let numChildren = 1;
let totalPerson = 0;
let destination;
let valAdulto = 0;
let valChild = 0;
let valDiscount = 0;
let subtotal = 0;
let valNeto = 0;
let totalGuajira = 0;
let totalCañon = 0;
let totalLlanos = 0;

//calculo total personas
totalPerson = numAdults + numChildren;

//while
destination = parseInt(prompt("Seleccione destino:\n1. Guajira\n2. Cañón del Chicamocha\n3. Llanos Orientales"));

while (destination >= 1 && destination <= 3) {
    switch (destination) {
        case 1:
            valAdulto = 1980000;
            break;
        case 2:
            valAdulto = 1600000;
            break;
        case 3:
            valAdulto = 1500000;
            break;
    }

    valChild = (valAdulto * 60) / 100;
    subtotal = (numAdults * valAdulto) + (numChildren * valChild);

    // Calculo descuento
    if (numAdults > 4 && numChildren > 2) {
        valDiscount = subtotal * 0.20;
    } else {
        valDiscount = 0;
    }

    valNeto = subtotal - valDiscount;

    // Acumular el subtotal en el destino correspondiente
    if (destination === 1) {
        totalGuajira += subtotal;
    } else if (destination === 2) {
        totalCañon += subtotal;
    } else if (destination === 3) {
        totalLlanos += subtotal;
    }
    document.write("<hr>");
    document.write("<h1>AGENCIA DE VIAJES XYZ</h1>");
    document.write(`<h2>Cliente: ${customer}</h2>`);
    document.write(`<p>Destino: ${destination === 1 ? "Guajira" : destination === 2 ? "Cañón del Chicamocha" : "Llanos Orientales"}</p>`);
    document.write(`<p>Total adultos: ${numAdults}</p>`);
    document.write(`<p>Total niños: ${numChildren}</p>`);
    document.write(`<p>Subtotal: $${subtotal}</p>`);
    document.write(`<p>Descuento: $${valDiscount}</p>`);
    document.write(`<p>Neto a pagar: $${valNeto}</p>`);     

    // Salir del ciclo
    break;
}
// salidas

document.write("<hr><h1>INFORME FINAL</h1>");
document.write(`<p>Total personas Adultas: ${numAdults}</p>`);
document.write(`<p>Total de niños: ${numChildren}</p>`);
document.write(`<p>Total para Guajira: $${totalGuajira}</p>`);
document.write(`<p>Total para Cañón del Chicamocha: $${totalCañon}</p>`);
document.write(`<p>Total para Llanos Orientales: $${totalLlanos}</p>`);
document.write(`<p>Total descuento: $${valDiscount}</p>`);
document.write(`<p>Total neto a pagar: $${valNeto}</p>`);