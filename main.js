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
