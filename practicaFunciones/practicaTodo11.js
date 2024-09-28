/*Ejercicio 2: Fiesta privada
Solo pueden entrar a la fiesta personas cuyo nombre comience
 con la letra "A" o "J". El programa debe pedir los nombres 
 de los invitados y verificar si pueden entrar.

Si el nombre comienza con "A" o "J", mostrar un mensaje 
de bienvenida.
Si no, mostrar un mensaje de rechazo.
El programa se detiene cuando se ingresa la palabra "fin". */

function fiestaPrivada() {
    let repuesta;
    let nombre;
    do {
        nombre = prompt("Cual es su nombre?");

        if (nombre.startsWith("A") || nombre.startsWith("J")) {
            document.write("Eres bienvenido a la fiesta " +nombre +". <hr>");
        }else{
            document.write("No eres bienvenido a la fiesta " +nombre +". <hr>")
        }
        repuesta = prompt(`Si desea continuar digita SI. Si desea salir digite FIN.`  )
    } while (repuesta != ("FIN"));
}

fiestaPrivada();