/*Ejercicio 3: Entrada al club nocturno
Simula la entrada a un club nocturno. 
Los menores de 18 no pueden entrar, los mayores de 60 tienen
 entrada gratuita, y el primero que entre después de las 12:00 
 am no paga.

-Pregunta la edad y la hora de entrada (en formato 24 horas).
-Si la persona tiene menos de 18 años, no puede entrar.
-Si es el primer visitante después de las 12:00 am, no paga.
-Si tiene más de 60 años, no paga. */

function entrdaClub() {
    let respuesta;
    let edad;
    let hora;

    do {
        edad = parseInt(prompt("Digite la edad: "));
        hora = parseInt(prompt("Digite la hora: "));

        if (edad > 18 && edad < 60) {
            document.write("Pueden entrar al club. <br>");
            if (hora < 12) {
                document.write("Son mas de las 12am, no cobramos entrada. <br>")};
        } else if(edad > 60){
            document.write("Pueden entrar al club gratis. <br>")
        }else{
            document.write("No pueden entrar al club. Eres menor de edad. <br>")
        }

        respuesta = parseInt(prompt("Desea ingresar otra persona? 1.SI 2.NO"))
    } while (respuesta === 1);
}

entrdaClub();