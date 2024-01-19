// Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroSecreto == numeroUsuario) {
        // Acertamos, fue verdadera la condición
        alert(`Acertaste, el número secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraVeces}.`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        // Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        // No acertamos, fue falsa la condición
        // alert("Lo siento, no has acertado el número.")
    }
}