//entradas
let product = 0;
let quanty, price, subtotal, neto, discount = 0, i, n;
let acumSubtotal = 0;
let acunDiscount = 0;
let acumNeto = 0;
let contDiscount = 0;

const disconValue = 0.15;

//proceso
console.log("_____________________________");
console.log("      app FACTURACION       " );
console.log("_____________________________");


n = 2;
for(i = 1; i<=n; i++){
    product = prompt("Producto");
    price = parseInt(prompt("Precio"));
    quanty = parseInt(prompt("Cantidad"));   
    discount = parseInt(prompt("Descuento"));

subtotal = price * quanty;
if(quanty > 10){
    discount = subtotal * disconValue
    contDiscount ++
}

neto = subtotal - discount;

acumSubtotal += subtotal;
acunDiscount += discount;
acumNeto += neto;

//salida

document.writeln("________________________ <br>");
document.writeln("  Factura de venta " +i,"<br>");
document.writeln("_________________________<br>");
document.writeln(`\tProdut----> ${product} <br>`)
document.writeln(`\tPrecio------> ${price} <br>`)
document.writeln(`\tCantidad---> ${quanty} <br>`)
document.writeln(`________________________ <br>`)
document.writeln(`\tSubtotal-> ${subtotal} <br>`)
document.writeln(`\tDescuento> ${discount} <br>`)
document.writeln(`\tNeto---------> ${neto} <br>`)
}
document.writeln("<hr><h1>INFORME DE VENTA</h1><hr>")
document.writeln(`<p>Suma Total--> ${acumSubtotal} <br></p>`)
document.writeln(`<p>Suma descuento--> ${acunDiscount} <br></p>`)
document.writeln(`<p>Suma neto--> ${acumNeto} <br></p>`)
