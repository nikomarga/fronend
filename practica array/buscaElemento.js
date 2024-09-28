let palabras = [];
let respuesta;

 do{
    let Palabra = prompt("Ingrese una palabra: ");
    palabras.push(Palabra);

    respuesta = parseInt(prompt("Quieres ingresar otro numero? \n1.SI \n2.NO"));
 }while(respuesta == 1);

 let buscar = prompt("Que palabra desea buscar? ");
 if(palabras.includes(buscar)){
    document.write(`La palabra '${buscar}' se encuentra en el array.`);
 }else{
    document.write(`La palabra '${buscar}' no se encuentra en el array.`);
 }