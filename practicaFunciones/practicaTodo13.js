/*Ejercicio 4: Entrada a un parque temático
Crea un programa donde solo puedan entrar las personas 
cuyo peso esté entre 40 y 100 kg por motivos de seguridad.
 El programa debe permitir ingresar pesos y verificar si 
 pueden entrar.

-Si el peso está entre 40 y 100 kg, la persona puede entrar.
-Si no, mostrar un mensaje indicando que no puede entrar.
-Termina cuando se ingrese un valor negativo. */

function pesoAtraccion() {
    let respuesta;
    let peso;

    do {
        peso = prompt("Cual es su peso en kg?");

        if (peso >= 40 && peso <=100) {
            document.write(`Puede ingresar a la actraccion. <hr>`);
        }else{
            document.write(`Por seguridad no puede ingresar a la actraccion. <hr>`);
        }
        respuesta = parseInt(prompt("Para continuar digite 1, para salir digite -1"));
    } while (respuesta != -1);
}

pesoAtraccion();