/*Ejercicio 2: Contar números mayores que un valor
Crea una función llamada contarMayoresQue que reciba un array
 de números y un número limite, y devuelva cuántos números en 
 el array son mayores que el límite.*/

 function contarMayoresQue(array, limite) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > limite) {
            contador ++;
        }
    }
    return contador;
 }

 let edades = [12, 23, 15, 19, 11, 9];
 document.write(`Hay ${contarMayoresQue(edades, 18)} números mayores que 18.`)