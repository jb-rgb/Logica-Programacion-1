// Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código se realiza
la comparación
*/
if (numeroSecreto == numeroUsuario) {
    // Acertamos, fue verdadera la condición
  alert("Has acertado el número!");
} else {
    // No acertamos, fue falsa la condición
  alert("Lo siento, no has acertado el número.")
}