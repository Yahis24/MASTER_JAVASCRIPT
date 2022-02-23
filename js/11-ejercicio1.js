'use strict'
/*PROGRAMA QUE PIDA 2 NÚMEROS, DIGA CUAL ES EL MAYOR, EL MENOR Y SI SON IGUALES*/
var num1 = parseInt(prompt("Ingrese el primer número",0));
var num2 = parseInt(prompt("Ingrese el segundo número",0));

console.log(num1,num2);

if (num1 == num2){
    alert("Los números son iguales");
}else if(num2 > num1){
    alert("El número mayor es "+num2+" y el menor es "+num1);
}else if(num1 > num2){
    alert("El número mayor es "+num1+" y el menor es "+num2);
}else{
    alert("Introduce nuevamente :v");
}