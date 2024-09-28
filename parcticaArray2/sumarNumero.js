let numeros = [1,2,3,4,5,6,7,8,9,10];
let sumarNumero = 0;

for (let i = 0; i < numeros.length; i++) {
    sumarNumero += numeros[i];
}

document.write(`La suma de los numero es : `,sumarNumero)