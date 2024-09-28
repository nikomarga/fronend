/*Hacer un algoritmo que lea el nombre de un animal, la comida preferida, el número
de porciones que come al día, el valor de la porción y muestre el nombre del animal
y el costo de alimentarlo en el día. */

//Variables
let nameAnimal;
let favoriteFood;
let dailyPortion;
let pricePortion;
let priceDaily;

//entradas

nameAnimal = prompt("Nombre del animal: ");
favoriteFood = prompt("Comida favorita del animal: ");
dailyPortion = prompt("Porcion diaria: ");
pricePortion = prompt("Precio de la porcion: ");


//process

priceDaily = dailyPortion * pricePortion;
document.write( nameAnimal +" se alimenta diariamente con " +priceDaily +"$.")
