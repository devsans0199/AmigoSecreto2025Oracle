// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables
let listaGeneralAmigo = [];    // almacenamos los nombres.
let amigosUnicos = new Set(); // almacenamos valores o nombres unicos.


//Funcion para agregar amigo
function agregarAmigo(){
    //variables
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
    let  itemAmigo = document.createElement("li");
    let  listarAmigos = document.getElementById("listaAmigos");
    
    // Realizamos validaciones en campo texto,si esta vacio no retorne y envia una alerta.
    if (inputAmigo.value == "") {
        alert("Porfavor escriba el nombre de su amigo");
        return
    } else {
            //Convertir a minúscula para una comparacion insensible entre mayuscula.
            amigo = amigo.toLowerCase();
            //validamos que el nombre no este guardado en el array y sea agregado nuevamente.
        if (!amigosUnicos.has(amigo)) {
            listaGeneralAmigo.push(amigo);// Agregamos el nombre a la lista del array.
            listarAmigos.appendChild(itemAmigo);// agregamos un nodo.
            amigosUnicos.add(amigo); //almacenamos el dato unico en la variable valorUnico.
            itemAmigo.innerHTML = amigo[0].toUpperCase() + amigo.slice(1); //mostramos el nombre con la primera letra mayúscula y las demas en minúscula en lista.
            inputAmigo.value = "";
            
       } else {
           //Se envia un mensaje de alerta que se encuentra el nombre registrado. 
           //se limpia el campo de texto.
           alert("Este nombre ya existe");
           inputAmigo.value = "";
       }
    }
}


//Funcion para sortear el nombre del amigo
function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    let listaAmigo = document.getElementById("listaAmigo");
    let ganador = document.createElement("li");
    
    // Validamos en la lista los nombres que estan guardados.
    if (listaGeneralAmigo.length === 0) {
        alert("No hay amigos para sotear")
        return;
    }
    
    let selecionar = Math.floor(Math.random()*listaGeneralAmigo.length);
    let unico = listaGeneralAmigo[selecionar];
    ganador.innerHTML =`Su amigo secreto es: ${unico.toUpperCase()}`;
    //console.log(unico);
    //console.log(ganador);
    resultado.appendChild(ganador); 
    return

}