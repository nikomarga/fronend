/*Ejercicio 5: Concurso de baile
En este concurso, solo pueden participar personas que tengan 
una calificación de 7 o más. Si la persona tiene exactamente 
un 10, gana un premio adicional. El programa debe recibir una 
lista de calificaciones y verificar quiénes pueden participar.

-Si la calificación es mayor o igual a 7, puede participar.
-Si la calificación es 10, recibe un premio adicional.
-El programa termina cuando no hay más calificaciones */


function concursoBaile(array) {
    for (let i = 0; i < array.length; i++) {
        let calificacion = array[i];
        
        if (calificacion >= 7 && calificacion < 10) {
            document.write("Puede participar. <br>");
        }else if(calificacion === 10){
            document.write("Recibes un premio. <br>"); 
        }else{
            document.write("Lo siento no puedes participar. <br>"); 
        }
    }
}

calificacion = [10, 5, 7, 9];
concursoBaile(calificacion);