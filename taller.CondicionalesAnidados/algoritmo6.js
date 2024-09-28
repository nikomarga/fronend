/*Realizar un algoritmo que lea dos números cualquiera e imprima cual es el mayor o
imprimir si los números son iguales. */

//Variables
let num1 = 40;
let num2 = 30;
let resultado;

//procesos
resultado = (num1 == num2)? "Los numero son iguales":
            (num1 > num2)? "El numero mayor es " +num1:
            "El numero mayor es " +num2
            document.write(resultado)