let numeros = [];
let respuesta;
let sumaNumero = 0;

do{
    let nume = parseInt(prompt("ingrese un numero: "));
    numeros.push(nume);

    respuesta = prompt("Quieres ingresar otro numero? \n1.SI \n2.NO");
}while (respuesta == 1);

for (let i = 0; i < numeros.length; i++) {
    sumaNumero += numeros[i];  
}
document.write("La suma de los numeros es: ", sumaNumero);