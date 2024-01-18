alert('Bienvenida y bienvenido a nuestro sitio web!');

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

let mensajeDeError = 'Error! Completa todos los campos.'
alert(mensajeDeError);

nombre = prompt('Ingresá tu nombre');
edad = prompt('Ingresá tu edad');

if (edad >= 18) {
    alert('¡Puedes tener tu licencia de conducir!');
}