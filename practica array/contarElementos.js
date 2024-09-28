let colores = [];
let respuesta;

do{
    let color = prompt("Ingrese un colore: ");
    colores.push(color);

    respuesta = parseInt(prompt("Quieres ingresar otro colore: \n1.SI \n2.NO"));
}while(respuesta == 1);

document.write(`Ingreso ${colores.length} colores`);
