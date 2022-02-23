'use strict'
/*MOSTRAR TODOS LOS NÚMEROS IMPARES QUE ESTÉN ENTRE 2 NÚMEROS INGRESADOS POR EL TECLADO*/
var num1 = parseInt(prompt("Ingrese el primer número",0));
var num2 = parseInt(prompt("Ingrese el segundo número",0));
document.write("<h1>Los números impares desde "+num1+" hasta "+num2+" son: </h1>");

for (num1;num1<=num2;num1++){
    if(num1%2!=0){
        document.write(num1+"</br>");
    }
}