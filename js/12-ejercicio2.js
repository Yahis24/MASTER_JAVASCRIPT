'use strict'
/*OBTENER MEDIA Y SUMA DE NÚMEROS INGRESADOS POR EL USUARIO, PARA CUANDO SE TENGA UN NÚMERO NEGATIVO*/
var promedio = 0;
var suma = 0;
var cont = 0;


do{
    var number = parseInt(prompt("Ingrese números, con un negativo cierra el bucle",0));
    if (isNaN(number)){
        number=0;
    } else if (number>=0){
        suma +=number;
        cont++;
    }
}
while(number>=0);
promedio=suma/cont;
alert("La suma es: "+suma+" El promedio es: "+promedio);
