//variable
let num1
let num2
let num3
let mayor

//entrada
num1 = prompt("Ingrese el numero 1: ") 
num2 = prompt("Ingrese el numero 2: ") 
num3 = prompt("Ingrese el numero 3: ") 

//proceso
if(num1 == num2 && num2 == num3 && num3 == num1){
    console.log('Los numero son iguales.');
}else{
    console.log('Los numeros no son iguales');
}

 if(num1 > num2){
   mayor = num1
   console.log('El valor mayor es ' +mayor);
} else if(num2 > num3){
    mayor = num2
    console.log('El valor mayor es ' +mayor);
}else{
    mayor = num3
    console.log('El valor mayor es ' +mayor);
}