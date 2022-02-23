'use strict'
//OPERADORES como los operadores matemáticos
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 % numero2;
//alert("El resultado de la operacion es: "+operacion);

//TIPOS DE DATOS ENTERO STRING FLOTANTE BOOLEANO
var numero_entero = 44;
var cadena_texto = "Hola 'que' tal";
var verdadero_o_falso  = true;

console.log(verdadero_o_falso);

// CONVERTIR DE UN DATO A OTRO TIPO
//Number convierte número string a número real
console.log("Number convierte un número string en número real");
var numero_falso = "33";
console.log(Number(numero_falso)+7);
// parseInt convierte número string a número entero
console.log("parseInt conviente numero string a numero entero");
var numero_falso2 = "44";
console.log(parseInt(numero_falso2)+6);
// parseFloat convierte número float  string a número flotante
console.log("parseInt conviente numero string float a numero flotante");
var numero_falso3 = "66.5";
console.log(parseFloat(numero_falso3)+4.4);
// String Número real a String
console.log("Tengo "+String(numero_entero)+" años");

console.log(typeof numero_falso2);