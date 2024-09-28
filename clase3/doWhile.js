let ciudad;
do{
    ciudad = parseInt(prompt("1.Medellin \n 2.Bello \n 3.Copacabana \nDigite un numero"));
}while(ciudad < 0 || ciudad > 3)

switch(ciudad){
    case 1: console.log("Bienvenido a Medellin.");break;
    case 2: console.log("Bienvenido a Bello.");break;
    case 3: console.log("Bienvenido a Copacabana.");break;
}