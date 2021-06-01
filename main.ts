/*
Ejemplos de Booleanos
*/

let esSuperman: boolean= true;
let esBatman: boolean;
let esAcuaman= true;

if (esSuperman) {
    console.log("Superman nos salvados");
} else {
    console.log("Cagamos Fuego");
}

esSuperman= convertirClark();

if (esSuperman) {
    console.log("Superman nos salvados");
} else {
    console.log("Cagamos Fuego");
}

function convertirClark(){
    return false;
}