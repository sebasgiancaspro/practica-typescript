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
