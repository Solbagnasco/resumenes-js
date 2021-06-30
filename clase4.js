// CALLBACK
        // una funcion que se le pasa como parámetro a otra funcion  -VA AL PARCIAL (?)-

        //acá tenemos dos funciones, una se llama sumar, otra promedio

function sumar(numeritoUno, numeritoDos) {
    return numeritoUno + numeritoDos;  
};


function promedio(numeritoUno, numeritoDos, unaFuncionNueva) { // Le dimos tres parametros distintos, unaFuncionNueva sería el callback, ningun parametro está definido aún
    let suma = unaFuncionNueva(numeritoUno, numeritoDos);
    return suma / 2;
};

promedio(6, 4, () => {}); //la funcion ahí adentro, es el callback, acá lo definimos, cuando llamamos a la función "promedio". (El 6 y el 4, son numeritoUno y numeritoDos)

console.log(promedio(6, 4, sumar)); // esto consolea 5, o sea, 6 + 4, que es mi callback, y lo devuelve dividido 2


// HOISTING
        //Js lee todo el código y a las funciones las va a "guardar" arriba de todo. Luego, al resto de las cosas las lee de arriba para abajo. 

console.log(numerito); // esto no consolea nada, error
let numerito = 5;

console.log(sumar(1, 2)); // esto consolea algo
function sumar(a, b) {
    return a + b;
};      

let sumar = (a, b) => { // LO MISMO QUE LO DE ARRIBA PERO ESTÁ MEJOR ESCRITO
    return a + b;
};

let sumar = (a, b) => { // Esto va a tirar error porque no se puede redeclarar una variable
    return a - b;
};

//CLOSURES
        //cuando una funcion devuelve una funcion, y le pasa todo su scope

const multiplicarPor = (numero) => {
    let x = numero;     // todas las variables que cree en el scope, cuando termine la funcion (cuando retorne) van a desaparecer.

    return function(otroNumero) { //este es otro contexto de ejecución
        return x * otroNumero;
    };              //despues de esto, se me elimina la variable "x", pero le pasa todo el scope a la nueva funcion, "lo memoriza", en este caso "numero", que es 5.
};  

const unaVariableRandom = multiplicarPor(5); // estoy guardando en una variable mi funcion "multiplicarPor(5)" (5 es "numero", acá lo estoy definiendo)

console.log(unaVariableRandom); //Esto devuelve una función

console.log(unaVariableRandom(10)); // esto devuelve 50, el 10 va a ser "otroNumero"

//puedo crear más variables
const multriplicarPorTres = multiplicarPor(3);
const multriplicarPorCinco = multiplicarPor(5);
const multriplicarPorDiez = multiplicarPor(10); // guardo la funcion, le defino diferentes valores a la variable "x", que sería "numero"

console.log(multriplicarPorTres(245)); // "x" va a ser 3, "otroNumero" va a ser "245"
console.log(multriplicarPorCinco(500)); // "x" va a ser 5, "otroNumero" va a ser "500"
console.log(multriplicarPorDiez(830)); // "x" va a ser 10, "otroNumero" va a ser "830"
                                        // Los resultados que voy a recibir son "x" por "otroNumero"