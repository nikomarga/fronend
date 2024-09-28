/*Ejercicio 1: Control de acceso al cine
Crea un programa que simule el control de acceso a una sala
 de cine. Solo pueden entrar personas mayores de 18 años, 
 pero si la persona tiene 65 años o más, recibe un descuento
  del 50%.

-La función debe preguntar la edad de cada persona 
y verificar si puede entrar.
-Si tiene 65 o más, mostrar un mensaje indicando que recibe 
un descuento.
-Detener el ciclo cuando ya no haya más personas por ingresar.*/

function mayorEdad() {
    let respuesta;
    let edad;

    do {
        edad = parseInt(prompt("Que edad tienes?"));

        if (edad >= 18 && edad < 65) {
            document.write("Bienvenido a la sala de cine.");
        }else if(edad >= 65){
            document.write(`Bienvenido a la sala de cine. Tiene un descuento del 50%.<br> `);
        }else{
            document.write(`No puedes ingresar a la sala de cine.  Eres menor de edad.<br> `);
        }

        respuesta = parseInt(prompt(`Va a ingresar otra persona al cine? Digite un numero. 1.SI 2.NO`));
    } while (respuesta === 1);
}

mayorEdad();