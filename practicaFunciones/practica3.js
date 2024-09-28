/*Ejercicio 3: Función con valores por defecto
Crea una función llamada calcularDescuento que reciba dos 
parámetros, precio y descuento, y devuelva el precio con
 el descuento aplicado. Si no se proporciona el descuento, 
 deberá aplicar un 10% por defecto. */

 function calcularDescuento(precio, descuento) {
    return precio - (precio * descuento);
 }

document.write(`El precio con descuento es ${calcularDescuento(100,0.10)}`)