//variables

let user;
let passw;
let resultado1;
let resultado2;

//entradas
user = prompt("Usuario: ");
passw = prompt("Clave: ");


//proceso
resultado1 = (user == "Paco")? document.writeln("Usuario correcta"):document.writeln("Usuario incorrecta");
resultado1 = (passw == "Cesde123")? document.writeln("Clave correcta"):document.writeln("Clave incorrecta");
