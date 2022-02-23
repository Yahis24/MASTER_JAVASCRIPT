'use strict'
//VENTANAS
//alerta
alert('Esta es mi alerta!');
alert('Este es mi texto');

//CONFIRMACIÓN
var mi_resultador = confirm('¿ Estás seguro de continuar?');
console.log(mi_resultador);

//INGRESO DATOS 
var mi_resultado=prompt("Qué edad tienes",18);
console.log(typeof mi_resultado); //siempre va a ser string
parseInt(mi_resultado);