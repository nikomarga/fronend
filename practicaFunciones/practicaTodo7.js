/* Ejercicio 1: Suma de elementos en un array
Crea una función llamada sumaElementos que reciba un array 
de números y devuelva la suma de todos los elementos.*/


function sumaElementos(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma
}

let numeros = [5, 5, 5, 5, 5];
document.write(`La suma de los elementos es: ${sumaElementos(numeros)}`);