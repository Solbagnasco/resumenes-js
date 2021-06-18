// RESUMEN CLASE PASADA

let mambruSeFueALaGuerra = false;
let edadDeUsuario = 25;

if (mambruSeFueALaGuerra) {
    console.log("Mambrú se fue a la guerra"); //como esto es false, lo ignora y pasa a lo siguiente
} else if (edadDeUsuario < 18){
    console.log("No podes comprar cerveza"); // si la edad del usuario es menor que 18, ignora y ejecuta el "else"
} else {
    console.log("Mambrú no se fue a la guerra"); //si todo lo de arriba no cumple, se ejecuta esto
}

// OBJETOS  

let objeto = { // Es un conjunto de datos, comienza y termina entre {}
    key: value, // se compone de una clave y un valor. Puede tener varias, se llaman propiedades.
}

let perrito = {
    nombre: "Tobi", //nombre sería una propiedad
    edad: 4,
    raza: "Chucho",
    ladrar: function () { //ladrar sería un método. Es una función dentro de un objeto
        console.log ("Estoy ladrando");
    },
}

console.log(perrito); // loguea en la consola todo lo que compone "perrito"

let gatito = {
    nombre: "Mefisto",
    edad: 1,
    color: "Negrito",
    queHace: function () {
        console.log("Duerme");
    },
    intereses: ["dormir", "comer", 4, [], {}, "romper las bolas"], // puedo poner cualquier objeto, esto es un array (conjunto de valores)
};

// Acceder a los valores del objeto mediante punto (Dot notation)
console.log("La edad del perrito es" + " " + perrito.edad); // loguea en la consola el string, un espacio, y la edad del perrito que guardamos en el objeto
console.log(`La edad del perrito es ${perrito.edad}`); //loguea lo mismo, pero lo hacemos con código js entre ``


// Acceder a los valores del objeto mediante corchetes
console.log("La edad del perrito es" + " " + perrito["edad"]); // si accedemos al valor mediante corchetes, tenemos que ponerle si o si "", debe ser un string.

// ARRAYS

let soyUnArray = ["Hola", "Chau", "Jeje salu2"]; // es una caja donde guardo valores. Los elemento se separan entre comas (,) y van a tener un indice (index), osea son valores indexados.
//Arrancan en el 0 y siguen 1, 2, 3. Hola es el [0], Chau es [1], Jeje salu2 es el [2]
//Los arrays son objetos tambien, por ende tienen propiedades


console.log(soyUnArray); // me va a loguear en la consola la lista de valores y puedo ver el indice de cada uno
console.log(soyUnArray[1]); // con esto accedo unicamente al valor que quiera, en este caso el 1 "Chau"

 //longitud del array

 console.log(soyUnArray.length); //cuenta la cantidad de elementos que hay dentro del array (arranca desde el 1)

 let otroArrayDistinto = [];

 if (otroArrayDistinto.length === 0) { // ej para saber si un array está vacio
     console.log("El array está vacio");
 } else {
     console.log("El array tiene cosas");
 }

 // SCOPE
 
 //Es el alcance de una variable, hasta donde podemos acceder. Hay dos tipos: 
            
            // Global: está creada en el mismo lugar que la utilizamos, puede acceder cualquier bloque.
            // Local: está creada dentro de un bloque (un ámbito de ejecución diferente), solamente puede acceder a ésta el bloque en el que fue creada. 
                    // Si creo una variable con VAR, por más que esté en bloque puedo acceder desde cualquier lado a esta variable (excepto si está dentro de una función, porque las funciones crean un ambito de ejecución nuevo). Con LET/CONST son locales posta (?) 
                            // Por esto se dejo de usar VAR

 var a = "Estoy global?"; //  cualquier bloque puede acceder

 function holis() {
     var b = "Estoy en funcion?"; // solo puede acceder su mismo bloque, porque está dentro de una función
 }
 
 {
     var c = "Estoy en bloque?"; // con VAR cualquier bloque puede acceder
 }
 {
    let c = "Estoy en bloque?"; // con LET/CONST solo puede acceder su mismo bloque
}

console.log(a); // puedo acceder, la muestra
console.log(b); // no puedo acceder, no la muestra
console.log(c); // no puedo acceder, no la muestra (Con let/const)


// Diferencia LET - CONST
        // let = se le puede cambiar el valor (Reasignar) - Se puede crear "vacio" (undefined)
        // const = no se le puede cambiar el valor - No se puede crear vacío, tiene que tener si o si un valor
//let
let a = 1;
let a = 2; // ERROR, no se puede volver a declarar, pero si podemos volver a definirla/reasignar (cambiarle el valor)

let a = 1; 
a = 2; // el valor cambia a 2. Reasignamos, se puede volver a definir sin problemas.

//const
const a = 1;
const a = 2; // ERROR, no se puede volver a declarar, y tampoco podemos volver a reasignarle un valor

const a = 1;
a = 2; // ERROR, no se puede reasignar


