let colores = ["blanco", "rojo", "gris", "azul","verde"];
let respuesta;
let encontro;

respuesta = prompt("Que color busca? ");
encontro = colores.indexOf(respuesta);

if (encontro !== -1) {
    document.write(`El colore se encontro en el array en la posicion --> ${encontro}`);
}else{
    document.write(`El colore no se encontro en el array.`);
}
