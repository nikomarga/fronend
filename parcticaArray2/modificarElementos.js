let numeros = [2, 33, 8, 20, 60];
let elegirNum = parseInt(prompt("Elije un numero del 0 al 4"));
let numNuevo = parseInt(prompt("Digite el nuevo numero:"));

document.write("El array es: " +numeros +"<br>")
numeros[elegirNum] = numNuevo;

document.write("El nuevo array es: " +numeros)