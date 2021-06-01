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


/*
Ejemplos de Number
*/

let avengers:number = 5;
let villanos:number;
let otros= 2;

if (avengers > villanos) {
    console.log("Estamos Salvados");
} else {
    console.log("Estamos Muertos");
}


/*
Ejemplos de String
*/

let batman:string = "Batman";
let linternaVerde= 'Linterna Verde';
let volcanNegro:string = "Volcan Negro";

console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);

let concat:string = `Los heroes son: ${batman}, ${linternaVerde} y ${volcanNegro}`

console.log(concat);