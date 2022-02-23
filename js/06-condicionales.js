'use strict'
//Condicional IF COMPARACIÓN VALORES PARA QUE HAGA ALGO
//Si a es igual, diferente, mayor que, menor que a b entonces haz algo
var edad=80;
var nombre = "David Llerena";
/*Operadores relacionales
> mayor
< menor
>= mayor o igual
<= menor o igual
== igual
!=distinto
*/
if (edad >= 18){
    // es mayor de edad
    console.log(nombre+" tiene "+edad+" años, Es mayor de edad");
    if (edad<=33){
        console.log("Todavia eres Milenial");
    }else if (edad >=70){
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres milenial');
    }
}else{
    console.log(nombre+" tiene "+edad+" años, Es menor de edad");
}

/* OPERADORES LÓGICOS
AND (Y): &&
OR (O) : ||
Negación !
*/
//NEGACION 
var year = 2028;
if (year!=2016){
    console.log("El año no es 2016");
}
// and
if (year >=2000 && year <=2020){
    console.log('Estamos en la era actual');
}else{
    console.log('Estamos en la era postmoderna');
}

// or
if (year == 2018 || (year >= 2008 && year ==2028)){
    console.log("El año termina en 8");
}else{
    console.log("Año no registrado");
}

