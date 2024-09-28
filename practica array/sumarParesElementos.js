let numeros = [];
let respuesta;
let sumaPares = 0;

do{
    let numero = parseInt(prompt("Ingresa un numero: "));
    numeros.push(numero);

    respuesta = prompt("Quieres ingresar otro numero: \n1.SI \n2.NO");
}while(respuesta == 1);

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        sumaPares += numeros[i];
    }
}

document.write("La suma de los numero pares es: ", sumaPares);