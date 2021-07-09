//METODOS DE ARRAYS (continuación)

//map
//Devuelve un nuevo array
//el nuevo array va a tener los resultados de la funcion para cada uno de los valores del array original

const arrayDeNumeros = [1, 2, 3, 4, 5];

const nuevoArrayMapeado = arrayDeNumeros.map((valor) => valor + 1); //"valor" van a ser cada elemento del array, y le va a sumar 1.

console.log(nuevoArrayMapeado); //esto devuelve este array [2, 3, 4, 5, 6], nuestro array original, cada valor más 1.

//pop y push
//El pop ELIMINA el ultimo elemento del array y lo devuelve. MODIFICA EL ARRAY ORIGINAL
//El push AGREGA algo al final del array. MODIFICA EL ARRAY ORIGINAL

arrayDeNumeros.pop(); //esto me devuelve un 5, el ultimo elemento y lo borra
console.log(arrayDeNumeros); //consolea lo que va a ser ahora mi array [1, 2, 3, 4];

arrayDeNumeros.push(10);
console.log(arrayDeNumeros); // consolea lo que va a ser ahora mi array [1, 2, 3, 4, 10];

//shift y unshift
//El shift ELIMINA el primer elemento del array. MODIFICA EL ARRAY ORIGINAL
//El unshift AGREGA elementos al inicio del array. MODIFICA EL ARRAY ORIGINAL

arrayDeNumeros.shift(); //esto va a borrar el primer elemento, me devuelve 1
console.log(arrayDeNumeros); // consolea mi nuevo array [2, 3, 4, 5];

arrayDeNumeros.unshift("Hola");
console.log(arrayDeNumeros); // consolea mi nuevo array ["Hola",  1, 2, 3, 4, 5];

//slice
//Nos devuelve un array
//El array que nos devuelve es una copia del original desde donde le indiquemos hasta donde le indiquemos, si no le pasamos final, nos devuelve desde la posición inicial hasta el final

arrayDeNumeros.slice(2, 4); //en los parametros le digo desde que posicion hasta que posicion quiero que muestre, el comienzo está incluido, el final no. Esto devuelve [3,4]

//splice
//MODIFICA EL ARRAY ORIGINAL
//Elimina elementos o agrega elementos al array original
//.splice(indice, cuantosBorrar, queAgregar) estos son los parámetros que recibe (indice es desde donde empezar)

arrayDeNumeros.splice(3, 1); //esto me devuelve lo que corta, en este caso el 4, porque borró 1 elemento en la posición 3
console.log(arrayDeNumeros); //esto consolea mi nuevo array [1, 2, 3, 5]; el 4 no está

arrayDeNumeros.splice(2, 2); //me devuelve [ 3, 4], los que borró. Borró dos elementos empezando desde la segunda posición
console.log(arrayDeNumeros); //esto consolea mi nuevo array [1, 2, 5];

arrayDeNumeros.splice(2, 2, "Hola"); //esto hace lo mismo que el anterior y me agrega en la posicion dos el "Hola"
console.log(arrayDeNumeros); //esto consolea mi nuevo array [1, 2, "Hola", 5];

//sort
//Ordena un array, lo pasa a string y lo ordena: Usa el codigo unicode para ordenar. Usa el primer caracter para ordenar, es case sensitive, le da prioridad a las mayusculas
//puede recibir un parametro que es una función comparadora

//ejemplos sin parametro
const unNuevoArray = [1, 2, 50, 10, 80, 9];

unNuevoArray.sort(); // devuelve [1, 10, 2, 50, 80, 9]

const otroArray = ["chau", "hola", "zeta", "Zeta", "Hola", "Chau"];

otroArray.sort(); // devuelve ["Chau", "Hola", "Zeta", "chau", "hola", "zeta"]

//ejemplo con parametro
unNuevoArray.sort((a, b) => a - b); //esto me devuelve [1, 2, 9, 10, 50, 80]

//Si la resta es menor a 0: A viene primero
//Si la resta es igual a 0: No hay diferencias
//SI la resta es mayor a 0: B viene primero

unNuevoArray.sort((a, b) => b - a); //me lo devuelve en orden descendente

//reduce
//REDUCE el array en un solo valor, ejecuta el callback que le demos y nos devuelve un solo valor
//.reduce((acumulador, valor) => {}, valor inicial), el callback es obligatorio y el segundo es opcional
//el callback va a tener dos parametros, el primer parametro, el acumulador, es el valor inicial (si tenemos), si no hay valor inicial, el primer elemento del array va a ser el acumulador para la primera iteracion y el segundo elemento el valor

const arrayDeNumeros = [1, 2, 3];

const numeroReducido = arrayDeNumeros.reduce(
    (acumulador, valor) => acumulador + valor
); //la función va iterando y lo que retorna va al acumulador, y vuelve a iterar con ese nuevo acumulador, aca no tiene valor inicial entonces el acumulador es el primer elemento del array y el valor es el segundo (o sea 1 y 2)
console.log(numeroReducido); //consolea 6

const numeroReducido = arrayDeNumeros.reduce(
    (acumulador, valor) => acumulador + valor,
    10
); // acá el valor inicial es 10, por ende mi acumulador es 10 y el valor es el primer elemento de la funcion
console.log(numeroReducido); //consolea 16

const numeroReducido = arrayDeNumeros.reduce(
    (acumulador, valor) => acumulador * valor
);
console.log(numeroReducido); //consolea 6

// EJERCICIO: Tienen que hacer una función, que reciba tres cosas: un array de strings, un callback con una condición, y algo a buscar. La función debe devolver un array filtrado con los elementos que cumplan con la condición dada por el callback. Un tip: el callback con la condición, debe contener un closure.

//1) Hay que hacer una función
//2) La funcion tiene que  recibir 3 parametros (un array de strings, un callback con una condicion, algo a buscar en ese array)
//3) La funcion debe devolver el array que le pasamos por parametro filtrado, y la condición tiene que ser el callback que le pasamos por parametro a la funcion. Y la condición, tiene que filtrar "algo", que es el tercer parametro de la funcion.
//4) El callback que le pasamos como parametro, retorna otra funcion, que termina siendo la condición (o sea, es un closure)

//[1, 2, 3].filter(callback(closure));
