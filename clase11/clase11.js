//WINDOW (el navegador), DOCUMENT (el documento entero), ELEMENT (un elemento del DOM -etiquetas de html-)
//eventTarget (son WINDOW, DOCUMENT, ELEMENT). Estos objetos tienen propiedades y métodos propios

//eventTarget.addEventListener()
// es un "escuchador" de eventos. "eventTarget" es un objeto (WINDOW, DOCUMENT, ELEMENT) y "addEventListener" es un método.
// tiene dos parametros (evento, funcion). Cada vez que ocurre el evento, se ejecuta la función.

// Ejemplo:
document.addEventListener("click", function () {
    console.log("Holis");
});
//cada vez que yo haga "click" sobre el elemento, se ejecuta la función

//getElementById
const botoncito = document.getElementById("boton"); // este método me devuelve un elemento (en este caso, un boton de mi html), "boton" es el id del elemento. Así accedemos al elemento

console.dir(botoncito); // acceder a ese elemento en consola

//Los elementos tienen propiedades, una de ellas es children, te dice cuales son sus "hijos" en HTML

const nuestroDiv = document.getElementById("elDiv");
console.dir(nuestroDiv); // entre sus propiedades va a estar children y me va a mostrar el button, que es su hijo.

//Otra propiedad es classList, muestra las clases del elemento

const inputNuevo = document.getElementById("esteEsMiInput");
console.dir(inputNuevo);

//agregar un escuchador de evento
document.addEventListener("copy", function () {
    console.log("Estás ROBANDO?");
}); //esto es sobre el documento entero, si trato de copiar algo del documento, en la consola me va a tirar ese mensaje, tambien puedo usar un "alert" en lugar del console log y sale una alerta emergente

botoncito.addEventListener("dblclick", function () {
    console.log("Estoy haciendo doble click en el boton");
}); // cada vez que haga doble click en el button, en la consola va a aparecer el mensaje

botoncito.addEventListener("submit", function () {
    console.log("Estoy haciendo click en el boton");
}); // cada vez que haga click en el button, en la consola va a aparecer el mensaje

//Un if para imprimir algo en la consola si esta tildado o no

const florcita = document.getElementById("miCheckbox");

if (florcita.cheked) {
    console.log("El checkbox es true");
} else {
    console.log("El checkbox es true");
}

//ejemplo change
florcita.addEventListener("change", function () {
    console.log(`El Checkbox cambio.Ahora el valor es ${florcita.cheked}`);
}); //imprimo en la consola el cambio del checkbox

// ejemplo habilitar o desabilitar un boton si está tildado el checkbox o no
florcita.addEventListener("change", function () {
    if (florcita.cheked) {
        botoncito.disable = false;
    } else {
        botoncito.disable = true;
    }
});

//Ejemplo para agregar o quitar una clase CSS con JS
//classList es una propiedad del elemento

const botoncito = document.getElementById("boton");

botoncito.addEventListener("click", function () {
    if (botoncito.classList.contains("activado")) {
        //aca se pregunta si botoncito tiene la clase "activado", si es true, o sea si la tiene, la saca, y si no la tiene, se la agrega
        botoncito.classList.remove("activado");
    } else {
        botoncito.classList.add("activado");
    }
});

//Literal lo mismo de arriba pero con un método
botoncito.addEventListener("click", function () {
    botoncito.classList.toggle("activado");
});
