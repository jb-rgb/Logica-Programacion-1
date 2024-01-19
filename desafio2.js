// 1

let diaDeLaSemana = prompt("¿Qué día de la semana es hoy?");

if (diaDeLaSemana == "Sábado" || diaDeLaSemana == "Domingo") {
    alert("¡Buen fin de semana!")
} else {
    alert("¡Buena semana!")
}

// 2

let numeroNP = prompt("Ingresa un número:");

if (numeroNP > 0) {
    alert("El número es positivo");
} else {
    alert("El número es negativo");
}

// 3

let numero = 100;
let numeroUsuario = prompt("Ingresa un número:");

if (numeroUsuario >= numero) {
    alert("¡Feliciades, has ganado!");
} else {
    alert('Intenta nuevamente para ganar')
}

// 4

let saldoUsuario = 5000;
alert(`El saldo de su cuenta disponible es de: ${saldoUsuario}`);

// 5

let nombreUsuario = prompt("Ingrese tu nombre:");

alert(`Bienvenido, ${nombreUsuario}!`);