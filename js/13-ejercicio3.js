'use strict'
/*Hacer un programa que muestre todos los números entre 2 números introducidos por el usuario*/

var num1 = parseInt(prompt("Ingrese el primer número",0));
var num2 = parseInt(prompt("Ingrese el segundo número",0));
document.write("<h1>De "+num1+" hasta "+num2+" hay estos números:</h1>")
    for ( num1; num1<=num2;num1++){
        //console.log(num1);
        document.write(num1+"</br>");
    }
