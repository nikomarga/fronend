/*Ejercicio 1: Función sin parámetros ni retorno
Crea una función llamada mostrarHoraActual que 
simplemente imprima la hora actual en la consola.*/

function mostrarHoraActual() {
    let fechaActual = new Date();
    document.write(`La hora actual ${fechaActual.toLocaleTimeString()}`)
}
mostrarHoraActual();