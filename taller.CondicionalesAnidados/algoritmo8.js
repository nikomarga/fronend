/*Construir un programa que calcule el índice de masa corporal de una persona ( IMC
=peso [kg] / altura2 [m]) e imprima el estado del DIAGNOSTICO en el que se
encuentra esa persona en función del valor de IMC y el siguiente cuadro. */

//variables
let nam = "Albany";
let peso = 85;
let altura = 1.75;
let imc;
let resultado;
let imcRedondeado;

//process

imc = peso / (altura * altura);
resultado = (imc <= 16)? nam +' esta en estado critico.':
            (imc > 16 && imc <= 17)? nam +' esta en infrapeso':
            (imc > 17 && imc <= 18)? nam +' esta bajo de peso.':
            (imc > 18 && imc <= 25)? nam +' esta en un peso normal(Saludable).':
            (imc > 25 && imc <= 30)? nam +' esta en sobrepeso (Obesidad de grado I)':
            (imc > 30 && imc <= 35)? nam +' esta en sobrepeso cronico (Obesidad de grado II).':
            (imc > 35 && imc <= 40)? nam +' esta en obecidad premorbida (Obesidad de grado III).':
            (imc > 40)? nam +' esta obecidad morbida (Obesidad de grado IV).':
            'error'
            document.write(resultado)