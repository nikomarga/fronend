/*Un administrador de vehículos necesita un programa donde pueda ingresar los datos
de un vehículo así: Placa, el tipo (1= bus, 2= buseta, 3= colectivo, 4= Automóvil) y el
número de pasajeros transportados. Elabore un algoritmo que muestre la placa, el
dinero recolectado y el pago para el conductor que es el 20 % del total recolectado.
También tenga en cuenta que el precio del pasaje en Bus es de $2200.oo, en Buseta
es de $ 2500.oo, en Colectivos es de $3500.oo. y en automóvil a $5500.oo */

//variables
 let plate;
 let type;
 let numPassengers;
 let recolectado;
 let total;
 let payDriver;

 //entradas
 plate = prompt("Numero de placa: ");
 type = parseInt(prompt("Qué tipo de vehículo tienes: 1= bus, 2= buseta, 3= colectivo, 4= automóvil"));
 numPassengers = parseInt(prompt("¿Cuántos pasajeros transportaste? "));

 //proceso
document.write("La placa es: " +plate );
recolectado = (type == 1)? 2200 * numPassengers :
             (type == 2)? 2500 * numPassengers:
             (type == 3)? 3500 * numPassengers:
             (type == 4)? 5500 * numPassengers:
             'error'    
             document.write(" Recolecto $" +recolectado);

payDriver =  recolectado * 0.2;
document.write(" El pago para el conductor $" +payDriver);