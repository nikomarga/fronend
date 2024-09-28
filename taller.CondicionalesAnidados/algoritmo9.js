/*Un supermercado ha puesto en oferta la venta al por mayor de cierto producto,
ofreciendo un descuento del 15% por la compra de más de 3 docenas y 10% en caso
contrario. Además, por la compra de más de 3 docenas se obsequia una unidad del
producto por cada docena en exceso sobre 3. Diseñe un algoritmo que determine el
monto de la compra, el monto del descuento, el monto a pagar y el número de
unidades de obsequio por la compra de cierta cantidad de docenas del producto. */


//variable
let cantidaDocena = 2;
let precioDocena = 100000;
let montoTotal;
let porcentajeDescuentoDoce = 0.15;
let porcentajeDescuentoMenos = 0.10;
let montoDescuento;
let unidadObsequio;
let montoPagar;
let resultado;
let resultadoDescuento;
//procesos

resultado = (cantidaDocena > 3)? precioDocena - (precioDocena * porcentajeDescuentoDoce):
            (cantidaDocena < 3)? precioDocena - (precioDocena * porcentajeDescuentoMenos):
            'error'
            console.log(resultado);

montoTotal = precioDocena * cantidaDocena;

resultadoDescuento = (cantidaDocena > 3)? montoTotal * porcentajeDescuentoDoce:
                     (cantidaDocena < 3)? montoTotal * porcentajeDescuentoMenos:
                    'error'
                     console.log(resultadoDescuento);


unidadObsequio = cantidaDocena;
montoDescuento = resultadoDescuento;
montoPagar = resultado * cantidaDocena;

document.write("Monto Total: $" + montoTotal +", ");
document.write("Monto del Descuento: $" + montoDescuento +", ");
document.write("Monto a Pagar: $" + montoPagar +", ");
document.write("Unidades de Obsequio: " +unidadObsequio);











