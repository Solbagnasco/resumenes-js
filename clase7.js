//METODOS DE ARRAYS

const arrayPiola = [1, 2, 3, "hola"];

//length
console.log(arrayPiola.length); //imprime la logitud del array

//concat
arrayPiola.concat([4, 5, 6]); // concatena dos arrays, agrega despues del "hola" los elementos que le agregue, el array original no se modifica

//every
//nos indica si todos los elementos del array cumplen con una condición, nos devuelve true o false (un booleano). Recorre los elementos del array para chequear la condición
//hay que pasarle una función como parámetro, una callback: .every(() => {});

arrayPiola.every((valor) => valor > 1); //el parametro de la callback va a ser el elemento que esté recorriendo. En este caso "valor" es 1, el primer elemento de nuestro array, es false, y sigue iterando. En la segunda iteracion "valor" va a ser 2, es true. Si todas las iteraciones dan true, devuelve true, si no (aunque sea uno no sea true) devuelve false.
//"valor" es el nombre que le doy al parámetro, puede ser cualquier nombre

const esMenorQueTres = (valor) => valor < 3;
arrayPiola.every(esMenorQueTres); //esto es lo mismo que arriba pero tenemos la funcion en una variable aparte

//filter
//CREA UN NUEVO ARRAY con todos los elementos que cumplan con una condición.
//Recorre los elementos del array, chequeando la condición y los que no la cumplen, los saca
//Tenemos que guardarlo en algun lado, si no el filter lo hace pero no queda guardado en ningun lado. Lo guargamos en una nueva variable
//El primer parametro es el elemento que va a estar recorriendo, opcionalmente podemos ponerle como segundo parametro el index. Tenemos que poner el primer parametro si o si, aunque no lo usemos.
// .filter(() => {});

const arrayPiola = [1, 2, 3, 4, 5, 6, 7];
const nuevoArrayFiltrado = arrayPiola.filter((valor) => valor > 3);
console.log(nuevoArrayFiltrado); // filter va a iterar entre todos los numeros de mi array, chequeando la condicion y crea un nuevo array con los que si la cumplen, en este caso me crea un nuevo array "[4, 5, 6, 7]" porque son mayores a tres.

//ejemplo práctico, tengo tres tarjetas que se muestran y cierro una, quiero quitar una de esas tarjetas (mis objetos) y que me muestre las otras dos
const arrayDeObjetos = [
    { id: 1, nombre: "Pepito" },
    { id: 2, nombre: "Sol" },
    { id: 3, nombre: "Santiago" },
];

const nuevoArrayFiltrado = arrayDeObjetos.filter((valor) => valor.id !== 3); //en este caso "valor" va a ser cada objeto entero "{ id: 1, nombre: "Pepito" }". En la condicion le estoy diciendo que filtre si la propiedad "id" sea diferente a 3. Todos los que den true, los incluye en el nuevo array, y los que no, los saca
console.log(nuevoArrayFiltrado); // esto imprime mi nuevo array filtrado  { id: 1, nombre: "Pepito" },{ id: 2, nombre: "Sol" }, el tercero no lo incluye.

//mismo ejemplo pero con index (indice)
const arrayDeObjetos = [
    { id: 1, nombre: "Pepito" },
    { id: 2, nombre: "Sol" },
    { id: 3, nombre: "Santiago" },
];

const nuevoArrayFiltrado = arrayDeObjetos.filter((valor, index) => index !== 0);
console.log(nuevoArrayFiltrado); // esto imprime todos los objetos que el index sea distinto a cero, o sea: { id: 2, nombre: "Sol" }, { id: 3, nombre: "Santiago" },

//otro ejemplo

const arrayDePalabras = ["Cancun", "Ibiza", "Mar Chiquita", "Mar del Plata"];

const nuevoArrayFiltrado = arrayDePalabras.filter((valor) =>
    valor.includes("Mar")
); // la condición es que incluya la palabra "Mar", estoy usando dos métodos

console.log(nuevoArrayFiltrado); //esto imprime mi nuevo array ["Mar Chiquita", "Mar del Plata"]

//find
//nos devuelve el primer elemento del array que cumpla con la condición, si no encuentra nada devuelve undefined

const arrayPiola = [1, 2, 3, 4, 5, 6, 7];

const variableFind = arrayPiola.find((valor) => valor > 5);
console.log(variableFind); //esto nos imprime "6", porque es el primer elemento que encuentra que cumple la condicion

const arrayDeObjetos = [
    { id: 1, nombre: "Pepito" },
    { id: 2, nombre: "Sol" },
    { id: 3, nombre: "Santiago" },
];

const variableFind = arrayDeObjetos.find((valor) => valor.id === 2);
console.log(variableFind); //esto me imprime { id: 2, nombre: "Sol" }, imprime todo el objeto entero que cumple la condición

//indexOf
// es como el de los strings, le pasamos el valor y nos devuelve el index

const arrayPiola = [1, 2, 3, 4, 5, 6, 7];

const indexOfNumeros = arrayPiola.indexOf(3);
console.log(indexOfNumeros); // esto imprime 2, el indice que tiene el 3 en el array

//findIndex
//nos devuelve el index (indice) del primer elemento que encuentre que cumpla con la condición
//espera una funcion como parametro (la de arriba no)

const arrayDeObjetos = [
    { id: 1, nombre: "Pepito" },
    { id: 2, nombre: "Sol" },
    { id: 3, nombre: "Santiago" },
];

const indexOfObjetos = arrayDeObjetos.findIndex((valor) => valor.id === 2);
console.log(indexOfObjetos); //esto imprime 1, que es el index (indice) del objeto que encontró con id === 2

//includes
//devuelve true o false, chequea que dentro del array esté el valor

const includesNumber = arrayPiola.includes(5);
console.log(includesNumber); //imprime true

//some
//devuelve true o false
//Itera el array y chequea si algun valor cumple la condicion, si uno solo ya lo cumple, devuelve true (a diferencia del every que todos debían cumplirla)

const someNumber = arrayPiola.some((valor) => valor > 5);
console.log(someNumber); //da true porque por lo menos un valor es mayor que 5

//flat
//chequea si hay un array dentro de otro array y lo "unifica"

const algunArray = [1, 2, 3, [4, 5, 6]];

const arrayFlateado = algunArray.flat;
console.log(arrayFlateado); //devuelve [1, 2, 3, 4, 5, 6];

//forEach
//va a ejecutar la funcion que le pasemos (la callback) por cada uno de los elementos del array. O sea, por cada elemento que tenga el array ejecuta la funcion que le demos

arrayPiola.forEach((valor) => console.log(valor)); //esto va a devolver todos los valores en la consola, uno abajo del otro

arrayPiola.forEach((valor) => {
    console.log("Imprimo el numero");
    console.log(valor);
    console.log("---------");
}); // Devuelve por aca elemento, este conjuto de cosas

//join
//une todos los elementos de un array en un string y me lo devuelve
//si no le ponemos ningun parámetro, lo une por defecto con ",", si quiero poner algo personalizado se lo tengo que aclarar

const algunArray = [
    "Hola",
    " ",
    "mi",
    " ",
    "nombre",
    " ",
    "es",
    " ",
    "Sol",
    ".",
];

const arrayJoineado = algunArray.join(" ");
console.log(arrayJoineado); //esto lo separa con un espacio ["Hola mi nombre es Sol.]

const arrayJoineado = algunArray.join("-");
console.log(arrayJoineado); // lo separa con guiones ["Hola-mi-nombre-es-Sol."]

//lastIndexOf
//nos devuelve el ultimo indice (la posicion) en el que se encuentra un elemento, le tenemos que pasar un valor, puedo ponerle como segundo parámetro la longitud (desde donde arrancar)

const arrayPiola = [1, 2, 3, 4, 5, 2, 7];

arrayPiola.lastIndexOf(2); // esto devuelve 5, porque el ultimo "2" tiene index 5

//De los que vimos hasta ahora los más usados
length
every
filter (se recontra usa)
find (se recontra usa)
findIndex
some
forEach
join