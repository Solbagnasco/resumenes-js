console.log("Holis"); /* Loguear algo, para verlo en la consola del navegador */
//  ctrl + } comentar una linea
// No hace falta poner ; es a gusto (salvo en casos muy específicos)

// Tipos de datos primitivos

Number
Boolean
String
undefined
null

function
object

// Valores que pueden tomar

1; // Number
34; // Number
5.5; // Number
"Hola" // String (cadena de caracteres)
'Hola' // String (cadena de caracteres) - Es indiferente usar una o dos comillas -
`Otro tipo de Hola`; // Template String (permite meter codigo JS adentro)
true; // boolean (si/no verdadero/falso blanco/negro)
false; // boolean (si/no verdadero/falso blanco/negro)
null;  
undefined;
["arrays"]
{    // objeto 
}   // ojecto

// Crear variables (lugar para guardar datos)

let // variable 
somosRePiolitas //identificador
"Holis" // valor

let somosRePiolitas = "Holis" //JS es case sensitive, se usa camelCase (empezar con minúscula y todo el resto en mayus)

let somosRePiolitas;
somosRePiolitas = "Holis" //se le puede asignar un valor después de declararla

// Variables no definidas

let holis; // variable sin valor (undefined)

// Podemos asignarle cualquier tipo de valor

let numeritos = 11231
let objetosPiolas = {}
let miraEsteArray = [""]

// Consolear una variable, loguear en la consola del navegador la variable

console.log (numeritos)

//typeof: para saber que tipo de dato es 

console.log (typeof numeritos)

// Operadores

+ - * / // los de siempre
** // calcula la base a la potencia de exponente
% // da el resto
++ // suma uno
-- // resta uno

let numeritoUno = 10;
let numeritoDos = 5;

console.log(numeritoUno + numeritoDos); // en la consola nos va a aparecer 15
console.log(numeritoUno % numeritoDos); // da cero porque no hay resto

let numeritoStringUno = "1";
let numeritoStringDos = "2";

console.log(numeritoStringUno + numeritoStringDos); // va a dar 12 en la consola porque si sumamos strings, se concatenan, o sea se unen)
// con el operador + concatenamos strings

let stringUno = "Hola mi nombre es"
let stringDos = "Sol"

console.log(stringUno + stringDos); // concatena todo sin espacio
console.log(`${stringUno} ${stringDos}`); // con espacio, metimos código JS dentro de las ``

// Operadores de comparación

== // compara los valores  
=== // compara los valores y los tipos de datos
!= // diferente en valores
!== // diferente en valores y tipos
> // mayor que
< // menor que
>= // mayor o igual que
<= // menor o igual que

console.log(5 == "5"); //true (porque solo compara valores)
console.log(5 === "5"); //false (porque compara valor y tipo)

&& // y - and
|| // o - or
! // negar algo

// Condicionales

if (condicion) { // si
    //Declaración (hace tal cosa)
    console.log()
} else { // o si no
    //Declaración (hace tal cosa)
    console.log()
}

let llueve = true;

if (llueve === true) { // si queres comprobar solamente si es true, podemos poner (llueve) y el codigo asume el resto, si queremos preguntar por false y no poner === podemos poner (!llueve), sería como decir "Si no llueve"
    console.log("No podemos salir porque llueve")
} else  {
    console.log("Podemos salir, no llueve") 
}

let edadDeUsuario = 25;

if (edadDeUsuario >= 18) {
    console.log("Podes comprar cerveza")
} else {
    console.log("No podes comprar cerveza")
}
