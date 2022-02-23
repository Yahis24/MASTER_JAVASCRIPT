'use strict'
// VIDEO 20 Diferencias entre let y var: Alcance y cómo actuan en cada bloque 
console.log("Prueba con VAR: ACTUA DE MANERA GLOBAL");
var numero = 40;
console.log(numero); //valor 40
if (true){
    var numero=50;
    console.log(numero); //valor 50
}
console.log(numero); //valor 50 

console.log("Prueba con LET: ACTUA EN BLOQUE");
var texto="JS con victor robles";
console.log(texto); //JS
if (true){
    let texto="Laravel con victor robles";
    console.log(texto); //Laravel
}
console.log(texto); //Js