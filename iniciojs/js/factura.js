let nameCustomer 
let product
let quantity
let price
let subtotal
const discount = 0.15
const fee = 0.19
let discountValue
let feeValue
let neto 


nameCustomer = prompt("Cliente")
product =prompt("Nombre producto")
quantity = parseInt (prompt("Cantidad"))
price = parseInt (prompt("Precio"))


subtotal = quantity * price
discountValue = subtotal *discount
feeValue = (subtotal - discountValue) * fee
neto = subtotal - discountValue + feeValue

console.log("┌────────────────────────────┐");
console.log("|         Cliente            |");
console.log("└────────────────────────────┘");
console.log(`Nombre -------> ${nameCustomer}`);

console.log("┌────────────────────────────┐");
console.log("|        Descripcion         |");
console.log("└────────────────────────────┘");
console.log(`Producto -------> ${product}`);
console.log(`Precio ---------> ${price}`);
console.log(`Cantidad -------> ${quantity}`);
console.log(`Subtotal -------> ${subtotal}`);
console.log(`Vlr Descuento --> ${discountValue}`);
console.log(`Vlr iva --------> ${feeValue}`);
console.log(`Neto -----------> ${neto}`);

