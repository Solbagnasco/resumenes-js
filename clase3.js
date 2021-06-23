// FUNCIONES

    // un bloque de código que hace algo. Se puede reutilizar las veces que queramos, pero devuelve una sola cosa.

function identificador (parametros){
    // Acá va lo que tiene que hacer la funcion.
};

function decirHola (){
    console.log("Hola, mi nombre es Sol"); // esto no va a hacer nada, solo la declaramos (creamos), en este caso queremos que loguee algo en la consola
};

// Llamar a una funcion (ejecutarla)

indetificador();  //con esto se ejecuta

decirHola();

// Parametros (puede tener uno o varios)

function decirHola(nombrecito){ //nombrecito es el parametro
    console.log(`Hola, mi nombre es ${nombrecito}`); // acá aun sigue vacio
};

decirHola("Pepito"); // argumento, a partir de acá "nombrecito" va a ser "pepito" en este caso

decirHola("Sol");
decirHola("AB");
decirHola("CD");
decirHola("EF");
decirHola("GH"); // va a ejecutar todo esto, se puede reutilizar

//cuando ejecutamos la función, le asignamos el parámetro

function decirHola (nombrecito, edad, gusto) { //los parametros se separan con coma
    console.log(`Hola, mi nombre es ${nombrecito}, mi edad es ${edad} y me gustan los ${gusto}`); // esto logea en la consola Hola, mi nombre es Sol, mi edad es 31 y me gustan los alfajores
};

decirHola("Sol", 31, "alfajores"); //los argumentos tambien se separan con coma, y se ordenan como los parametros
decirHola("Maria", 19, "caramelos");
decirHola("Juan", 25); // esto va a logear en la consola tres renglones, con los tres argumentos que hicimos.

// si queremos saltear un parametro, hay que llenarlo con algo (con un null)
decirHola("Sol", null, "Alfajores"); //me saltea la edad
//O podemos usar un if, si el valor lo tenemos, se cumple y si no, ejecuta la siguiente
function decirHola (nombrecito, edad, gusto) {
    if (nombrecito) {
        console.log(`Mi nombre es ${nombrecito}`);
        }
    if (nombrecito && edad) {
        console.log(`Hola, mi nombre es ${nombrecito}, mi edad es ${edad}`);
    }
    if (nombrecito && edad && gusto) {
        console.log(`Hola, mi nombre es ${nombrecito}, mi edad es ${edad} y me gustan los ${gusto}`);
    }
};

decirHola("Sol", 31, "Alfajores");
decirHola("Sol", 31);

//Los argumentos pueden ser variables, lo hace más dinamico

let nombrePiola = "Sol";

decirHola(nombrePiola, 31, "Alfajores");

//RETURN - palabra resevada, significa "devolver"

function sumarNumeros(numeritoUno, numeritoDos) {
   return numeritoUno + numeritoDos; // acá le digo que me devuelva algo, en este caso, la suma de los dos numeros que recibe por parámetro. Por defecto, devuelve undefined
};

console.log(sumarNumeros (2, 2));
console.log(sumarNumeros (5, 3));
console.log(sumarNumeros (10, 5)); // esto va a ejecutar tres veces la funcion

//tambien se puede hacer con variables

function sumarNumeros(numeritoUno, numeritoDos) {
    let resultadoDeSuma = numeritoUno + numeritoDos;
    return resultadoDeSuma;
};

console.log(sumarNumeros (2, 2)); //para verlo en consola

// Salir de la funcion, termina la ejecución de la funcion, devuelve el valor y termina la funcion

function sumarNumeros(numeritoUno, numeritoDos) {
    if (numeritoUno === 4) {
        return; //si numeritoUno es 4, no hace nada, devuelve undefined
    }
        return numeritoUno + numeritoDos; // si numeritoUno no es cuatro, ejecuta esto
};

console.log(sumarNumeros (2, 2));

//OTRA FORMA DE ESCRIBIR FUNCIONES

const decirHola = function (nombrecito, edad, gusto){
    console.log(`Hola, mi nombre es ${nombrecito}, mi edad es ${edad} y me gustan los ${gusto}`);
}; // no tiene identificador, es anónima, no tiene nombre
// está alojada en un const

decirHola();

// ARROW FUNCTION, es más simple/clara que la normal, cambia en algunas cosas (ver mas adelante), podemos usarla con let o const
        // () => {}

const decirHola = (nombrecito, edad, gusto) => {
    console.log(`Hola, mi nombre es ${nombrecito}, mi edad es ${edad} y me gustan los ${gusto}`);
};

decirHola("Sol", 31, "alfajores");
decirHola("Santiago", 29, "Sambayon");


let sumarNumeros = (numeritoUno, numeritoDos) => {
    return numeritoUno + numeritoDos;
};

console.log(sumarNumeros (2, 2));
console.log(sumarNumeros (3, 8));   
    
    // si la funcion tiene un solo parametro, podemos obviar los parentesis
    let sumarNumeros = (numeritoUno) => {};
    // si tiene mas de uno, o no tiene, son obligatorios los parentesis
    
    // cuando la funcion devuelve una sola cosa y no estoy haciendo nada antes dentro de la funcion, se pueden obviar las {} y el return
    let sumarNumeros = (numeritoUno, numeritoDos) => numeritoUno + numeritoDos;