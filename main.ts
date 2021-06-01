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


/*
Ejemplos de Array
*/

let arreglo:number[]= [1,23,5,789,4,6];

let malos:string[]= ["Gatubela", "Pinguino", "Guason"];

console.log(malos[0].charAt(0)); /*imprime del array el primer villano y la primer letra*/


/*
Ejemplos de Objetos Basicos.
*/

let flash = {
    nombre:"Barry Allem",
    edad: 24,
    poderes: ["Correr Rapido", "Viajar en el Tiempo"]
};


/*
Ejemplos de Objetos Especificos.
En este caso se especifica en la variable de que tipo van a ser 
*/

let laPulga: {nombre:string, edad:number, poderes:string[]} = {
    nombre:"Jose Perez",
    edad: 35,
    poderes: ["Super Fuerza", "Salta Alto"]
};


/*
Ejemplos de Tipo personalizado de Objetos.
*/

type Heroe = {
    nombre:string, 
    edad:number, 
    poderes:any[], 
    getNombre:()=>string
}

let cisco: Heroe = {
    nombre:"Francisco Fernandez",
    edad: 22,
    poderes: ["Viajar por el tiempo", "Salta de dimencion"],
    getNombre(){
        return this.nombre;
    }
};

let laPolilla: Heroe = {
    nombre:"Carlos Cademi",
    edad: 40,
    poderes: ["Vuela", "Ensucia"],
    getNombre(){
        return this.nombre;
    }
};