/*Se debe crear un algoritmo que imprima el nombre del estudiante, el valor de la
matrícula, el valor del descuento, el valor del recargo y el valor neto a pagar
sabiendo que se debe regir por la siguiente tabla: */

//variables
let nombreStudent = "Nikol Carrasquel";
let valorEnroll = 300000;
let stratum = 6;
let resultado;

//proceso
resultado = (stratum == 1)? valorEnroll-(0.4*valorEnroll):
            (stratum == 2)? valorEnroll-(0.3*valorEnroll):
            (stratum == 3)? valorEnroll-(0.1*valorEnroll):
            (stratum == 4)? valorEnroll+(0.1*valorEnroll):
            (stratum == 5)? valorEnroll+(0.2*valorEnroll):
            (stratum == 6)? valorEnroll+(0.4*valorEnroll):
            'Error'
            document.write("El estudiante es: " +nombreStudent +"\nValor de la matricula: " +valorEnroll +"\nValora a pagar " +resultado);


            