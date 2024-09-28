/*Ejercicio 5: Función que recibe un array
Crea una función llamada contarElementos que 
reciba un array y devuelva la cantidad de elementos que tiene. */

function contarElementos(array) {
    return array.length;
}

let numeros = [1, 2, 3, 4, 5];
document.write(`El array tiene ${contarElementos(numeros)} elementos.`)