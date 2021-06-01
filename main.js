/*
Ejemplos de Booleanos
*/
var esSuperman = true;
var esBatman;
var esAcuaman = true;
if (esSuperman) {
    console.log("Superman nos salvados");
}
else {
    console.log("Cagamos Fuego");
}
esSuperman = convertirClark();
if (esSuperman) {
    console.log("Superman nos salvados");
}
else {
    console.log("Cagamos Fuego");
}
function convertirClark() {
    return false;
}
/*
Ejemplos de Number
*/
var avengers = 5;
var villanos;
var otros = 2;
if (avengers > villanos) {
    console.log("Estamos Salvados");
}
else {
    console.log("Estamos Muertos");
}
/*
Ejemplos de String
*/
var batman = "Batman";
var linternaVerde = 'Linterna Verde';
var volcanNegro = "Volcan Negro";
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
var concat = "Los heroes son: " + batman + ", " + linternaVerde + " y " + volcanNegro;
console.log(concat);
/*
Ejemplos de Tipos de datos Any(quiere decir que una misma variable puede servir para cualquier cosa)
Es decir como un string, boolean, number etc.
Eso se ve con el ejemplo de la variable "vengador".
*/
var vengdor;
var existe;
var derrotas;
vengdor = "Spider-man";
console.log(vengdor.charAt(1)); /*te imprime en este caso la segunda letra "p" xq empieza del 0*/
vengdor = 150.555555;
console.log(vengdor.toFixed(2)); /*te imprime dos numeros mas despues del punto*/
vengdor = true;
console.log(vengdor); /*te imprime vengador xq es true*/
console.log(existe); /*te imprime valor "undefine" o indefinido x ser ANY*/
console.log(derrotas); /*te imprime valor "undefine" o indefinido x ser ANY*/
/*
Ejemplos de Array
*/
var arreglo = [1, 23, 5, 789, 4, 6];
var malos = ["Gatubela", "Pinguino", "Guason"];
console.log(malos[0].charAt(0)); /*imprime del array el primer villano y la primer letra*/
/*
Ejemplos de Objetos Basicos.
*/
var flash = {
    nombre: "Barry Allem",
    edad: 24,
    poderes: ["Correr Rapido", "Viajar en el Tiempo"]
};
/*
Ejemplos de Objetos Especificos.
En este caso se especifica en la variable de que tipo van a ser
*/
var laPulga = {
    nombre: "Jose Perez",
    edad: 35,
    poderes: ["Super Fuerza", "Salta Alto"]
};
var cisco = {
    nombre: "Francisco Fernandez",
    edad: 22,
    poderes: ["Viajar por el tiempo", "Salta de dimencion"],
    getNombre: function () {
        return this.nombre;
    }
};
var laPolilla = {
    nombre: "Carlos Cademi",
    edad: 40,
    poderes: ["Vuela", "Ensucia"],
    getNombre: function () {
        return this.nombre;
    }
};
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("Enviar al cuartel a: " + xmen.nombre);
}
;
var lobenzo = {
    nombre: "Mark Lobito",
    poder: "Garras metalicas"
};
enviarMision(lobenzo);
enviarCuartel(lobenzo);
