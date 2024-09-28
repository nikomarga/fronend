/* Ejercicio 6: 
Función para verificar si un número es par o impar
Crea una función llamada esPar que reciba un número y devuelva true si el 
número es par, y false si es impar.*/

function esPar(numero) {
    if(numero % 2 === 0){
        document.write(`El numero es par.`)
    } else{
        document.write(`El numero es inpar.`)
    };
}

esPar(9);