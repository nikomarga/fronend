/*1. Hacer un algoritmo que lea el nombre de una persona, el número de horas que
estudia en la semana y muestre el porcentaje de tiempo que dedica a estudiar y la
cantidad de minutos que dedica a estudiar. */


//variable
let person;
let horaSemana;
let porcentaje;
let porcentajeRedondeado;
let minutos;

//entradas
person = prompt("nombre: ");
horaSemana = prompt("Numero de hora que estudia a la semana: ")


//proceso
porcentaje = (horaSemana/168) * 100;
porcentajeRedondeado = Math.round(porcentaje);
minutos = horaSemana * 60;

document.write( person +" dedica a estudiar " +minutos +" minutos semanales. Un " +porcentajeRedondeado +"% de la semana estudia.");
