/*Escribir un algoritmo donde el usuario pueda ingresar el nombre y la edad de una
persona y el computador le muestre el nombre y un mensaje que diga si la persona
es mayor o menor de edad. */

//Variables
let nameUser;
let age;
let resultado;
//Entradas
nameUser = prompt("Ingrese el nombre del usuario: ");
age = prompt("Ingrese la edad del usuario: ");

//proceso
resultado = (age >= 18)? nameUser +' es mayor de edad.':
            (age < 18)? nameUser + ' es menor de edad.':
            'error'
            document.write(resultado)