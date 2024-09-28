let nombres = [];
let respuesta;

do{
    let nombre = prompt("Ingrese su nombre: ");
    nombres.push(nombre);

    respuesta = prompt("Quieres continuar? \n1.SI \n2.NO");
}while(respuesta == 1);

document.write("Los nombres ingresados son: ", nombres);