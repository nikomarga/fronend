let frutas = [];
let respuesta;

do{
    let fruta = prompt("Ingresa una fruta: ");
    frutas.push(fruta);

    respuesta = parseInt(prompt("Quieres ingresar otro fruta: \n1.SI \n2.NO"));
}while(respuesta == 1);

document.write("Frutas ingresadas: ",frutas);

let eliminar = prompt("Que fruta desea eliminar? ");
let indice = frutas.indexOf(eliminar);

if (indice !== -1) {
    frutas.splice(indice, 1);
    document.write(`<br>La fruta '${eliminar}' se ha eliminado.`);
}else{
    document.write(`<br>La fruta '${eliminar}' no se encontro.`);
}

document.write(`<br>Fruta restante: ${frutas}`);