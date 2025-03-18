// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables
let listaPersonas = [];    // Almacenamos los nombres.
let personasUnicas = new Set(); // Almacenamos valores únicos.

// Función para agregar persona
function agregarPersona() {
    // Variables
    let inputPersona = document.getElementById("persona"); 
    let persona = inputPersona.value; 
    let itemPersona = document.createElement("li"); 
    let listaPersonasHTML = document.getElementById("listaPersonas");

    // Realizamos validaciones en el campo de texto, si está vacío, no retorna y muestra una alerta.
    if (inputPersona.value == "") {
        alert("Por favor, ingrese el nombre de su persona.");
        return;
    } else {
        // Convertir a minúscula para una comparación insensible entre mayúsculas.
        persona = persona.toLowerCase();

        // Validamos que el nombre no esté guardado en el conjunto y se agregue nuevamente.
        if (!personasUnicas.has(persona)) {
            listaPersonas.push(persona); // Agregamos el nombre a la lista del array.
            listaPersonasHTML.appendChild(itemPersona); // Agregamos un nodo.
            personasUnicas.add(persona); // Almacenamos el dato único en la variable personasUnicas.
            itemPersona.innerHTML = persona[0].toUpperCase() + persona.slice(1); // Mostramos el nombre con la primera letra mayúscula y las demás en minúscula.
            inputPersona.value = "";  // Limpiamos el campo de texto.
        } else {
            // Se envía un mensaje de alerta que el nombre ya está registrado.
            alert("Este nombre ya está en la lista.");
            inputPersona.value = "";  // Limpiamos el campo de texto.
        }
    }
}

// Función para sortear la persona
function sortearPersona() {
    let resultado = document.getElementById("resultado");
    let ganador = document.createElement("li");

    // Validamos si hay personas en la lista para sortear.
    if (listaPersonas.length === 0) {
        alert("No hay personas para sortear.");
        return;
    }

    let seleccionar = Math.floor(Math.random() * listaPersonas.length);
    let personaSeleccionada = listaPersonas[seleccionar];

    ganador.innerHTML = `La persona seleccionada es: ${personaSeleccionada.toUpperCase()}`;
    resultado.appendChild(ganador);

    return;
}
