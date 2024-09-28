let numeros = [];
let respuesta;

do{
    let numero = parseInt(prompt("Ingrese un numero: "));
    numeros.push(numero);

    respuesta = parseInt(prompt("Desea ingresar otro numero: \n1.SI \n2.NO"));
}while(respuesta == 1);

document.write(`Los numero ingresados son: ${numeros}`);
numeros.reverse();
document.write(`<br>la reversa de los numeros es: ${numeros}`);