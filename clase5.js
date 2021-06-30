// LOOP - BUCLE (ciclo)
    // un bloque de código que se va a ir repitiendo muchas veces
    // Vamos a estar "chequeando" que una condicion sea verdadera "true"

//FOR
    // estructura principal: for (inicio; condicion; actualización) {
                              //  lo que tiene que hacer
                              // }

const nuevoArray = ["Auto", "Moto", "Camioneta"]; // array (cajita con valores)

nuevoArray[0]; // "Auto", el 1 es "Moto", el 2 es "Camioneta"
nuevoArray.length; // devuelve 3

for (let pepito = 0; pepito < nuevoArray.length; pepito++) {
  console.log(nuevoArray[pepito]);
}; // esto consolea "Auto" y va iterando hasta que la condición sea false y se corte el bucle

// 1. Inicio: creamos una variable cualquiera, que tiene una asigancion de valor 0. "let pepito = 0".
// 2. Condicion: Evaluamos la condición. Nos preguntamos si pepito es menor a la longitud del array "pepito < nuevoArray.length".
// Si la condición es false, se termina el bucle
// 3. Si la condición es true, se ejecuta lo que está dentro del for.
// 4. Actualización: Si tenemos alguna, vamos a ejecutar la actualización. El ++ le suma 1 a pepito "pepito++".
// 5. Vamos a volver al punto 2.

// Esto es lo que va consoleando el bucle
nuevoArray[0] = "Auto";
nuevoArray[1] = "Moto";
nuevoArray[2] = "Camioneta";

// cuando llega a 4, da false (porque el array tiene 3 valores) y se termina el bucle.

for (let pepito = 1; pepito < 10; pepito++) {
  console.log(`El numero actual de pepito es: ${pepito}`);
};

// esto consolea El numero actual de pepito es: 1
// El numero actual de pepito es: 2
// El numero actual de pepito es: 3, y asi hasta el 9, donde se corta el bucle.

// WHILE (mientras)
      // estructura principal: while (condicion){
                        //          lo que tiene que hacer
                      //            (actualizacion) -si no la ponemos, queda infinito y te prende fuego todo-
                           //  }

// el while va a chequear la condicion (si es true o false) antes de ejectuar lo que está entre llaves

let i = 0;

while (i < 10) {
  console.log(`El numero actual que estamos iterando es: ${i}`);

  i++; // no olvidarse de la actualizacion
};

// esto consolea: El numero actual que estamos iterando es: 1
//  El numero actual que estamos iterando es: 2
//  El numero actual que estamos iterando es: 3, hasta llegar a 10 y se corta el bucle.

// DO WHILE
    // estructura principal: do {
        //                      lo que tiene que hacer
        //                      } while (condicion);

// el do while primero ejecuta lo que está entre llaves, y después chequea la condición

let i = 0;

do {
  console.log(`El numero actual que estamos iterando es: ${i}`);

  i++;
} while (i < 10);

// primero ejecuta el console.log, y después chequea si es true o false

// FOR IN
    // va a iterar en las propiedades de un objeto

const objetoPiola = { // propiedad: objeto;
  edad: 31,
  caracteristica: "viejardos",
  bebida: "tecito",
  unArrayAca: ["hola", "chau", 2],
};

for (const variable in objetoPiola) {
  console.log(objetoPiola[variable]); // seria como estar haciendo objetoPiola["edad"], o sea "31"
};

// el la segunda iteracion nos va a dar objetoPiola["caracteristica"], o sea "viejardos"
// el la tercera iteracion nos va a dar objetoPiola.["bebida"], o sea "tecito"
// el la cuarta iteracion nos va a dar objetoPiola.["unArrayAca"], o sea "hola", "chau", 2

// FOR OF
    // va a iterar sobre valores de objetos iterables (arrays, strings, nodelists)
    // si hiciera un for in con un array, me retorna el indice: [0], [1], [2], etc -no se usa (?)-

unNuevoArray = [1, 2, 3, 4, 5];

for (const variable of unNuevoArray) {
  console.log(variable);
};

// esto itera sobre unNuevoArray. Consolea 1, despues 2, despues 3, 4 hasta el 5.

const nuevoString = "Hola, como estas?";

for (const variable of nuevoString) {
  console.log(variable);
};

// esto itera sobre los valores de nuevoString, me devuelve en cada iteracion una letra

// FOR IN: ITERAR OBJETOS (recorrerlos)
// FOR OF: EL RESTO (OBJETOS ITERABLES)

// BREAK Y CONTINUE (PALABRAS RESERVADAS)

//BREAK
    // sirve para salir del bucle

for (i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log("El numero que estamos iterando es " + i);
};
//consolea las iteraciones hasta el 2 y sale del bucle
//"El numero que estamos iterando es 0"
//"El numero que estamos iterando es 1"
//"El numero que estamos iterando es 2" y se corta el bucle

//CONTINUE
    //se salta esa iteracion

for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log("El numero que estamos iterando es " + i);
};

// consolea todas las iteraciones menos la del tres
//"El numero que estamos iterando es 0"
//"El numero que estamos iterando es 1"
//"El numero que estamos iterando es 2"
//"El numero que estamos iterando es 4"
//"El numero que estamos iterando es 5" y sigue hasta el 9, salteandose el 3

//EJEMPLO FOR COMPLEJO

const nuevoArray = [
  { nombre: "Sol", edad: 31 },
  { nombre: "Juan", edad: 20 },
  { nombre: "Maria" },
  { nombre: "Pepe", edad: 40 },
];

for (i = 0; i < nuevoArray.length; i++) {
  if (!nuevoArray[i].edad) {
    continue;
  }
  console.log(
    "La edad de " + nuevoArray[i].nombre + " es " + nuevoArray[i].edad
  );
};

//aca mientras i sea menor a 4, nos vamos a preguntar si nuevoArray.edad no existe, continua, o sea saltealo, si existe la edad, sigue con el codigo.
//si tiene edad lo consolea, si no se salta la iteracion

// EJEMPLO: consolear numero pares

for (i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {   //!== significa diferente
    continue;
  }
  console.log(`El número ${i} es par`);
};
