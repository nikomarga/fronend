//vector de usuarios inicializados
let users = ["carla","nikole", "carlos", "luz", "camilo"];
document.write(users);
//acceder a un elemento del vector
document.write(`<br>El contenido de la posicion 4 es -> `, users[4]);
document.write(`<br>El contenido de la posicion 0 es -> `, users[0]);

//agrega un elemento en el array
users[5]= "Andres";
users[5]= " Jose";
document.write(`<br>El contenido de la posicion 5 es -> `, users[5],`<br>`);
document.write(users);
//mide el tamaño del vector
document.write(`<br>El tamaño del vector es -->${users.length}`);
//agrega un elemento al final de la lista
users.push("oscar");
document.write(`<br>El ultimo elemento del vector es: ${users[users.length-1]}`);
document.write(`<br>El primer elemento del vector es: ${users[0]}<br>`);

//agrega uno o mas elementos al inicio del array
users.unshift("Jorge", "santiago");
document.write(users);
//agrega un elemento al final
users.push("Alberto")
document.write(`<br>`, users);

//elimina el ultimo elemento
users.pop();
document.write(`<br>`, users);

//indexOf busca en index de un elemento
let resultado = users.indexOf("nikole");
document.write(`<br>El elemento se encuentra en la posicion ---> ${resultado}`)

