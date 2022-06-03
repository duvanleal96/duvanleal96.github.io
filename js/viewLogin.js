/**
 * se importa la clase data que contiene la base de datos de las preguntas
 */
import { data } from "./data.js";
/**
 * metodo obtener el contaider por id del html
 */
const container = document.getElementById("container");

let login = "";
let puntaje = 0;
let correcto = 0;
let contador = 1;

/**
 * implementa el titulo de bienvenida
 */
const title = document.createElement("h2");
title.classList.add("title");
title.textContent = "JUEGO PREGUNTADOS BIENVENIDO";
container.appendChild(title);
/**
 * implementa el campo de texto de ingreso 
 */
const inputNombre = document.createElement("input");
inputNombre.id = "nombre";
inputNombre.classList.add = ("w-25");
inputNombre.placeholder = 'su nombre porfavor';
container.appendChild(inputNombre);
console.log(inputNombre);
/**
 * boton salir 
 */
const salir = document.createElement("button");
salir.textContent = "Retirarse"

/**
 * metodo para almacenar el nombre
 */
inputNombre.addEventListener('change', (e) => {
    almacenar(e.target.value)
})

function almacenar(params) {
    login = params
}

/**
 * metodo para ingresar a jugar , implementa el guardado del nombre y 
 * pasa a la siguiente pregunta 
 */
const ingresar = document.createElement("button");
ingresar.textContent = "Ingresar";
container.appendChild(ingresar);
ingresar.addEventListener("click", () => {
    localStorage.setItem(login, 0);
    container.innerHTML = "";

    pregunta();
});
/**
 * representa el metodo mostrar historial 
 */
const btnHistorial = document.createElement("button");
btnHistorial.textContent = "Historial";
container.appendChild(btnHistorial);
let registro;
btnHistorial.addEventListener('click', async (e) => {
    for (var i = 0; i <= localStorage.length - 1; i++) {
        registro = document.createElement("div");
        registro.innerHTML = " <br><br>jugador : " + localStorage.key(i) + " ------>  puntaje : " + localStorage.getItem(localStorage.key(i)) + "<br> ";
        container.appendChild(registro);
         
    }
})
/**
 * metodo limpiar , permire al usuario limpiar la ventana de historial
 */
const volver = document.createElement("button");
volver.textContent="limpiar";
container.appendChild(volver);
volver.addEventListener('click', async (e) => {
    container.removeChild(registro);
})

/**
 * metodo que funciona para borrar el historial de los datos de localStorage
 */
const limpiarHistorial = document.createElement("button");
limpiarHistorial.textContent = "Borrar Historial";
container.appendChild(limpiarHistorial);
limpiarHistorial.addEventListener('click', async (e) => {
    for (var i = 0; i <= localStorage.length - 1; i++) {
        localStorage.clear();
    }
})

/**
 * creacion de filas y celdas de las preguntas
 */
const table = document.createElement("table");

const fila1 = document.createElement("tr");
const fila2 = document.createElement("tr");
const fila3 = document.createElement("tr");
const fila4 = document.createElement("tr");

const celda1 = document.createElement("td");
const boton1 = document.createElement("button");


const celda2 = document.createElement("td");
const boton2 = document.createElement("button");


const celda3 = document.createElement("td");
const boton3 = document.createElement("button");

const celda4 = document.createElement("td");
const boton4 = document.createElement("button");
let datos = [];

/**
 * permite agregar los botones , la pregunta llamandolos desde la base de datos 
 * implementa el metodo validar respuesta , si el boton seleccionado es igual 
 * a la respuesta correcta pasa al siguiente nivel y continua con el juego , de lo contrario
 * es eliminado y se queda con el puntaje
 */
function pregunta() {

    const containerDiv = document.createElement("div");
    datos = data[Math.floor(Math.random() * data.length)]
    boton1.textContent = `A: ${datos.respuesta[0]}`;
    celda1.appendChild(boton1);
    boton2.textContent = `B: ${datos.respuesta[1]}`;
    celda2.appendChild(boton2);
    boton3.textContent = `C: ${datos.respuesta[2]}`;
    celda3.appendChild(boton3);
    boton4.textContent = `D: ${datos.respuesta[3]}`;
    celda4.appendChild(boton4);

    table.append(fila1);
    fila1.append(celda1);
    table.append(fila2);
    fila2.append(celda2);
    table.append(fila3);
    fila3.append(celda3);
    table.append(fila4);
    fila4.append(celda4);

    title.innerHTML = datos.pregunta;
    containerDiv.append(title, table);
    container.append(containerDiv);
    containerDiv.append(salir);
    salir.addEventListener('click', async (e) => {
        window.alert("Gracias por jugar tu puntaje fue : " + localStorage.getItem(login, puntaje));
        location.reload();
    })

}
celda1.addEventListener('click', async (e) => {
    validar(0);
})
celda2.addEventListener('click', async (e) => {
    validar(1);
})
celda3.addEventListener('click', async (e) => {
    validar(2);
})
celda4.addEventListener('click', async (e) => {
    validar(3);
})
function validar(respuesta) {
    console.log(respuesta);
    console.log(contador);

    if (contador <= 5) {
        if (datos.respuesta[respuesta] === datos.respuestaCorrecta) {
            localStorage.setItem(login, puntaje = puntaje + 300);
            contador++;
            correcto = 1;
            pregunta();
        } else {
            window.alert("perdiste tu puntaje fue : " + localStorage.getItem(login, puntaje))
            location.reload();
        }
    } else {
        window.alert("ganaste tu puntaje es de : " + localStorage.getItem(login, puntaje))
        location.reload();
    }




}

