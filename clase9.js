// EJERCICIO: Tienen que hacer una función, que reciba tres cosas: un array de strings, un callback con una condición, y algo a buscar. La función debe devolver un array filtrado con los elementos que cumplan con la condición dada por el callback. Un tip: el callback con la condición, debe contener un closure.

//1) Hay que hacer una función
//2) La funcion tiene que  recibir 3 parametros (un array de strings, un callback con una condicion, algo a buscar en ese array)
//3) La funcion debe devolver el array que le pasamos por parametro filtrado, y la condición tiene que ser el callback que le pasamos por parametro a la funcion. Y la condición, tiene que filtrar "algo", que es el tercer parametro de la funcion.
//4) El callback que le pasamos como parametro, retorna otra funcion, que termina siendo la condición (o sea, es un closure)

//[1, 2, 3].filter(callback(closure));

// RESOLUCION DEL EJERCICIO EN GRUPO

const messi = ["uno", "dos", "tres", "cuatro"];

const condicion = (algoABuscar) => {
    return (elementoDelArray) => elementoDelArray.includes(algoABuscar);
};

function myFuncion(arrayString, callbackCondicion, algoABuscar) {
    const arrFiltrado = arrayString.filter(callbackCondicion(algoABuscar)); // "callbackCondicion" es mi funcion "condicion"

    return arrFiltrado;
}

console.log(myFuncion(messi, condicion, "tr"));

//Lo mismo pero pasando todo a minuscula para que lo encuentre si lo pongo en mayúscula

const messi = ["uno", "dos", "tres", "cuatro"];

const condicion = (algoABuscar) => {
    return (elementoDelArray) =>
        elementoDelArray.toLowerCase().includes(algoABuscar.toLowerCase());
};

function myFuncion(arrayString, callbackCondicion, algoABuscar) {
    const arrFiltrado = arrayString.filter(callbackCondicion(algoABuscar));

    return arrFiltrado;
}

console.log(myFuncion(messi, condicion, "dos"));

//RESUELTO POR TODOS EN LA CLASE (código de Santi)

// const arrayCiudades = ["Cordoba", "Santa Fe", "Mar del Plata"];
// // ["Mar del Plata"]

// function condicion(algoABuscar) {
//   return (valor) => valor.includes(algoABuscar);
// }

// function unaFuncion(arrayStrings, callbackCondicion, algoABuscar) {
//   // const arrayFiltrado = arrayStrings.filter((valor) =>
//   //   valor.includes(algoABuscar)
//   // );

//   const arrayFiltrado = arrayStrings.filter(callbackCondicion(algoABuscar));
//   return arrayFiltrado;
// }

// console.log(unaFuncion(arrayCiudades, condicion, "Santa"));

// // Callback: funcion que se le pasa como parametro a otra funcion
// // Closure: (a grandes rasgos) un closure es una funcion que retorna otra función

//  ****************************************************************************** //
// ************************** LO RESOLVEMOS DE NUEVO  ************************** //
//  ****************************************************************************** //

const arrayCiudades = ["Cordoba", "Santa Fe", "Mar del Plata"];

function unaFuncion(arrayStrings, callbackCondicion, algoABuscar) {
    return arrayStrings.filter(callbackCondicion(algoABuscar));
}

function condicion(pepito) {
    return (valor) => valor.toLowerCase().includes(pepito.toLowerCase());
}

// const condicion = pepito => valor =>
//   valor.toLowerCase().includes(pepito.toLowerCase());

unaFuncion(arrayCiudades, condicion, "cord");
