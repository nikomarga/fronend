/*El precio normal de un pantalón es de 60.000 pesos, pero debido a una
promoción, si se compran 12 a más, se hará un descuento del 20% sobre el precio
total, pero si se compran más de 6 pero menos de 12, sólo el 10%, de lo contrario,
no hay descuento. Generar un programa que, dada la cantidad de pantalones, me
diga cuanto ganaré de descuento y cuál sería el precio final a pagar. */

//Variable
let amountPants = 5;
let pricePants = 60000;
let discountDoce = 0.2;
let discountMoreSix = 0.1;
let resultado;
let priceTotal;

//process

priceTotal = amountPants * pricePants;
resultado = (amountPants >= 12)? priceTotal-(discountDoce * priceTotal):
            (amountPants >= 6 && amountPants <12)? priceTotal-(discountMoreSix * priceTotal):
            (amountPants < 6)? amountPants * pricePants:
            'error'
            
document.write("El valor total es: " +priceTotal +".")
document.write(" El valor a pagar por los " +amountPants +" pantalones es: " +resultado)
