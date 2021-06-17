// RESUMEN CLASE PASADA

let mambruSeFueALaGuerra = false;
let edadDeUsuario = 25;

if (mambruSeFueALaGuerra) {
    console.log("Mambrú se fue a la guerra") //como esto es false, lo ignora y pasa a lo siguiente
} else if (edadDeUsuario < 18){
    console.log("No podes comprar cerveza") // si la edad del usuario es menor que 18, ignora y ejecuta el "else"
} else {
    console.log("Mambrú no se fue a la guerra") //si todo lo de arriba no cumple, se ejecuta esto
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

 console.log(soyUnArray.length) //cuenta la cantidad de elementos que hay dentro del array (arranca desde el 1)

 let otroArrayDistinto = [];

 if (otroArrayDistinto.length === 0) { // ej para saber si un array está vacio
     console.log("El array está vacio");
 } else {
     console.log("El array tiene cosas");
 }

 // SCOPE
 
 //Es el alcance de una variable, hasta donde podemos acceder. 
 // Global puede acceder cualquier bloque
 // Local solamente puede acceder el bloque en el que está

 var a = "Estoy global?"; // cualquier bloque puede acceder

 function holis() {
     var b = "Estoy en funcion?"; // solo puede acceder su mismo bloque
 }
 
 {
     var c = "Estoy en bloque?"; 
 }

console.log(a);
console.log(b);
console.log(c);


