// METODOS DE STRINGS
        //son las funciones que están dentro de un objeto
"comillas dobles"
'comillas simples' //no hay diferencia con la de arriba
`comillas invertidas ${2+2}` // para meter codigo JS 

const unString = new String("Hola soy un string"); //forma para distanciar un string
console.log(unString); // esto imprime cada letra por separado. En la consola puedo ver todos los métodos y propiedades que hereda este string



const nuevoString = "Hola soy un string";

//substr
    //nos va a devolver un string nuevo desde donde nosotros le indiquemos, empieza a contar desde cero y cada letra y espacio del string es una posición.
nuevoString.substr(5);  //substr es el método (todos los metodos son funciones)
//esto consolea "soy un string". Los primero 5 caracteres/espacios los saltea

nuevoString.substr(5,3); //esto consolea "soy", le estoy dando como segundo parametro la longitud, o sea la cantidad de caracteres que quiero que me devuelva.

//startsWith
    // nos indica si un string comienza con el string que le pasemos por parámetro. Opcionalmente, como segunda parametro le puedo pasar desde donde quiero que compruebe
    // nos devuelve true o false, es case sensitive
nuevoString.startsWith("Hol"); //esto devuelve "true", porque mi string empieza con  "Hola"
nuevoString.startsWith("hol"); // esto devuelve "false", porque está en minúscula

nuevoString.startsWith("soy", 5); // acá le pregunto si empieza con el string "soy" en la posición 5, me va a dar "true"

//endsWith
    //lo mismo que arriba pero para el final, tambien opcionalmente como segundo parametro le podemos pasar la longitud
nuevoString.endsWith("string"); // da true
nuevoString.endsWith("ng");// da true
nuevoString.endsWith("un"); // false

nuevoString.endsWith("string", 18); // da true, empieza comprobando desde el final, la "g" es el 18
nuevoString.endsWith("string", 15); // da false
nuevoString.endsWith("stri", 16); // da true

//charAt
    // Devuelve el caracter que está en la posición que le indiquemos por parámetro
    // Si no encuentra la posición porque es mayor al numero de caracteres que tengo, no muestra nada
nuevoString.charAt(3); // esto me vuelve la "a"
nuevoString.charAt(7); // esto me vuelve la "y"

//indexOf
    // Le pasamos un caracter por parámetro, y nos devuelve la posición (al revés que charAt)
    // Si el caracter está repetido, nos devuelve la primera ocurrencia (la primera letra que aparece)
    // Le puedo poner como segundo parametro la longitud, desde donde quiero que empieze
nuevoString.indexOf("a"); // esto devuelve 3
nuevoString.indexOf("o"); // esto devuelve 1
nuevoString.indexOf("Hola"); // esto devuelve 0, porque la H es el 0 
nuevoString.indexOf("o", 5); // esto devuelve 6, empieza a buscar las "o" desde la posición 5

// lastIndexOf
    // nos devuelve la posicion de la ultima ocurrencia del caracter que le pasemos (al reves de indexOf)
nuevoString.lastIndexOf("a"); // esto me devuelve 3, porque no hay otra a
nuevoString.lastIndexOf("n"); // esto me devuelve 16 (la última n está en la posición 16)

//toUpperCase
    //pasar un string todo a mayúscula
nuevoString.toUpperCase();

//toLowerCase
   //pasar un string todo a minuscula
nuevoString.toLowerCase();

// Esto sirve mucho para comprobar datos de usuarios que escriben en mayus/minusc

//con un punto encadenamos métodos
nuevoString.toUpperCase().startsWith("HOL"); // esto me va a dar true, porque pase a mayúscula el strin

//puedo guardarlo en una variable tambien
const nuevoStringPasadoAMayus = nuevoString.toUpperCase();
nuevoStringPasadoAMayus.startsWith("HOL"); // es lo mismo que arriba pero guardado en variable

//includes
    // busca si el parametro que le dimos está en el string, es case sensitive
    // tambien podemos darle longitud como segundo parametro
nuevoString.includes("un"); // true
nuevoString.includes("chau"); // false
nuevoString.includes("Hola"); // tue


const moltoString = "Mate cafe harina palmitos"

// Crear una funcion, que recibe dos parametros
// El primer parametro es un string
// El segundo es un string a buscar dentro del string anterior
// Si se encuentra, que me devuelva console.log diciendo "Se encontró"
// Si no, que diga "No se encontró"

const miFuncion = (stringUno, stringDos) => {
    const isInString = stringUno.includes(stringDos);
    
    if (isInString) {
        console.log("Se encontró")
    } else {
        console.log("No se encontró")
    }
}; // acá creo la funcion

miFuncion("Mate cafe harina palmitos", "harina"); //acá estoy definiendo las dos variables, stringUno y stringDos, imprime "se encontró"

//ahora modifica la funcion anterior para que ignore si los string de los parametros estan en mayus o minusc

const miFuncion = (stringUno, stringDos) => {
    const stringUnoMayus = stringUno.toLowerCase();
    const stringDosMayus = stringDos.toLowerCase();
    
    const isInString = stringUnoMayus.includes(stringDosMayus);
       
    if (isInString) {
        console.log("Se encontró")
    } else {
        console.log("No se encontró")
    }
};

miFuncion("Mate cafe harina palmitos", "HARINA"); // imprime "Se encontró", porque guardé en dos variables nuevas, el string en minuscula y la parte del string que quiero buscar, tambien minuscula, entonces antes de ejectuar el if, está todo en minuscula. // Cuando llame a la funcion, no importa si el segundo string está en mayuscula, porque la funcion me lo va a poner en minuscula.


const algunString = "      hola    ";

//trim
    // borra espacios del principio y del final

algunString.trim(); // me queda "hola"

//concat
    //concatena strings
nuevoString.concat("Hola"); // devuelve mi string original y le pega el "Hola"

//slice
    // nos devuelve un nuevo string con el pedazo que cortó desde donde le inquimos hasta donde le indiquemos
    // el primer numero es el inicio y está incluido en el string, el segundo es el final y NO está incluido
nuevoString.slice(5, 8); // devuelve "soy"

//split
    // Nos separa el string en el/los caracteres que le indiquemos 
nuevoString.split(" "); //esto devuelve "Hola," "soy", "un", "string"
nuevoString.split("soy"); //devuelve "Hola", "un string"
nuevoString.split("s"); // devuelve "Hola", "oy", "un", "tring"

//replace
    //reemplazamos una palabra por otra
nuevoString.replace("soy", "no quiero ser"); // esto devuelve "Hola no quiero ser un string"


// TODOS ESTOS METODOS QUE VIMOS NO MODIFICAN EL STRING ORIGINAL, SOLO DEVUELVE UNO NUEVO.