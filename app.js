// Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroSecreto == numeroUsuario) {
        // Acertamos, fue verdadera la condición
        alert(`Acertaste, el número secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        // Incrementamos el contador cuando no acierta
        // intentos = intentos + 1;
        // intentos += 1;
        intentos++;
        palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        // No acertamos, fue falsa la condición
        // alert("Lo siento, no has acertado el número.")
    }
}