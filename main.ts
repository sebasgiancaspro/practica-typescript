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


/*
Ejemplos de Tipos de datos Any(quiere decir que una misma variable puede servir para cualquier cosa)
Es decir como un string, boolean, number etc.
Eso se ve con el ejemplo de la variable "vengador".
*/

let vengdor;
let existe;
let derrotas;

vengdor= "Spider-man";
console.log(vengdor.charAt(1)); /*te imprime en este caso la segunda letra "p" xq empieza del 0*/

vengdor= 150.555555;
console.log(vengdor.toFixed(2)); /*te imprime dos numeros mas despues del punto*/

vengdor= true;
console.log(vengdor); /*te imprime vengador xq es true*/

console.log(existe); /*te imprime valor "undefine" o indefinido x ser ANY*/

console.log(derrotas); /*te imprime valor "undefine" o indefinido x ser ANY*/