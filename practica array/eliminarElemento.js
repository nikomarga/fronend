let elementos = [];
let respuesta;

do{
    let elemento = prompt("Ingresa un ingrediente: ");
    elementos.push(elemento);

    respuesta = parseInt(prompt("Desea ingresar otro elemento? \n1.SI \n2.NO"));
}while(respuesta == 1);


document.write(`Los elementos son: ${elementos}`);

elementos.pop();
document.write(`<br> Se elimino el ultimo elemento:  ${elementos}</br>`);