//CLASE DE REPASO DE EJERCICIOS

// **************************************************************************
// ******************************* Duda Nadia *******************************
// **************************************************************************

// function saludarConParametrosNull(nombrecito, edad, gusto) {
//   // if (nombrecito) {
//   //   console.log(`Hola, mi nombre es ${nombrecito}`);
//   // } else if (nombrecito && edad) {
//   //   // NO ANDA CON ELSE IF NI CON IF, SIEMPRE CONSOLEA TRIPLICADO EL LLAMADO DE LA FUNCION

//   //   console.log(`Hola, mi nombre es ${nombrecito} y mi edad es ${edad} años`);
//   // }

//   // if (nombrecito && edad && gusto) {
//   //   console.log(
//   //     `Hola, mi nombre es ${nombrecito}, mi edad es ${edad} años y mi gusto de helado favorito es ${gusto}`
//   //   );
//   // }

//   if (nombrecito && !edad && !gusto) {
//     console.log(`Hola mi nombre es ${nombrecito}`);
//   }

//   if (nombrecito && edad && !gusto) {
//     console.log(`Hola mi nombre es ${nombrecito} y mi edad es ${edad}`);
//   }

//   if (nombrecito && edad && gusto) {
//     console.log(
//       `Hola mi nombre es ${nombrecito}, mi edad es ${edad} y mi gusto de helado favorito es ${gusto}`
//     );
//   }
// }

// // saludarConParametrosNull("Adriano", null, null);

// // saludarConParametrosNull("Romulo", 52, null);

// saludarConParametrosNull("Catalina", 27, "Crema oreo");

// // saludarConParametrosNull(null, 27, "Crema oreo");

// **************************************************************************
// ***************************** Fin duda Nadia *****************************
// **************************************************************************

// 16.
// - Crear un array de películas
//  - Crear una función que agregue una película al array de películas
//  - La película deberá tener un ID y un Título
//  - Crear una función que evalúe antes de agregar que la película
//  no fue ingresada previamente
//  - Crear una función que ordene las películas por Título y por ID
//  - Crear una función que elimine una película por su ID.

// let peliculas = [];

// const comprobarPelicula = (titulo) => {
//   const peliFiltrada = peliculas.some(
//     (valor) => valor.title.toUpperCase() === titulo.toUpperCase()
//   );

//   return peliFiltrada;
// };

// const agregarPelicula = (titulo) => {
//   const laPeliExiste = comprobarPelicula(titulo);

//   if (laPeliExiste) {
//     console.log("La peli ya existe");
//   } else {
//     peliculas.push({
//       title: titulo,
//       id: Math.floor(Math.random() * 1000),
//     });
//   }
// };

// const eliminarPelicula = (id) => {
//   const elIdExisteSome = peliculas.some((valor) => valor.id === id);
//   const elIdExisteFind = peliculas.find((valor) => valor.id === id);

//   if (elIdExisteSome) {
//     console.log(`La pelicula que estás borrando es: ${elIdExisteFind.title}`);

//     const nuevoArray = peliculas.filter((valor) => valor.id !== id);

//     peliculas = nuevoArray;
//   } else {
//     console.log("El ID que me pasaste no existe :)");
//   }
// };

// const ordenarPeliculasPorTitulo = () => {
//   peliculas.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   });
// };

// const ordenarPeliculasPorID = () => {
//   // peliculas.sort((a,b) => a-b)
//   peliculas.sort((a, b) => {
//     if (a.id < b.id) {
//       return -1;
//     }
//     if (a.id > b.id) {
//       return 1;
//     }
//     return 0;
//   });
// };
