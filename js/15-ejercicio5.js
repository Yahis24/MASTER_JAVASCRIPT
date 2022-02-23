'use strict'
/*Mostrar todos los números divisores para un número ingresado por teclado*/

var number = parseInt(prompt("Ingrese un número para mostrar sus divisores"),0);
document.write("<h1>Los números divisored desde "+number+" son: </h1>");
for(var i=0;i<=number;i++){
    if(number%i==0){
        document.write(i+"</br>");
    }
}