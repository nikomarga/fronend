let numeros = [];
let respuesta;

do{
    let numero =  parseInt(prompt("Ingrese un numero: "));
    numeros.push(numero);

    respuesta = parseInt(prompt("Quiere ingresar otro numero: \n1.SI \n2.NO"));
}while (respuesta == 1);

document.write("Los numeros son: ",numeros);
numeros.sort((a,b) => a - b);
document.write(`<br>Los numero ordenados son: ${numeros}`);