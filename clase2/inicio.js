// VARIABLES

let product
let quantity
let price
let subtotal, total
let discount
let comment
let discount1 = 0.07
let discount2 = 0.12

//ENTRADAS


console.log("┌──────────────────────────────────────────────────────────┐")
console.log("│                  SYSTEMA POS VENTA                       │")
console.log("└──────────────────────────────────────────────────────────┘")
product = prompt('Producto: ')
quantity = parseInt(prompt('Cantidad a comprar'))
price = parseInt(prompt('Precio'))

//PROCESO



if(quantity > 0 && quantity < 10 ){
    discount = discount1
}else if(quantity >=10){
    discount = discount2
}else{
    console.log('El valor ingresado es incorrecto');
}

subtotal = price*quantity;
total = subtotal - (subtotal * discount);


//SALIDAS
console.log(`\tProducto-->${product}`);
console.log(`\tCantidad-->${quantity}`);
console.log(`\tPrecio: ${price}`);
console.log(`\tDescuento: ${discount}`);
console.log("┌──────────────────────────────────────────────────────────┐")
console.log(`│                     Subtotal: ${subtotal}                │`)
console.log("└──────────────────────────────────────────────────────────┘")
console.log("┌──────────────────────────────────────────────────────────┐")
console.log(`│                     total: ${total}                      │`)
console.log("└──────────────────────────────────────────────────────────┘")