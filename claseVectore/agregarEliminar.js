let nombres = [];

for (let i = 0; i < 5; i++) {
    let nombre = prompt("Ingrese un nombre: ");
    nombres.push(nombre);   
}
document.write(`<br>`, nombres);
nombres.pop();
document.write(`<br>`, nombres);