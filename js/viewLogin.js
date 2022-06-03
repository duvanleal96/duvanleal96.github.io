
import { data } from "./data.js";

const container = document.getElementById("container");
//container.classList.add("container-lg","d-flex","justify-content-center","aling-items-center")

let login = "";
let puntaje = 0;
let correcto = 0;
const title = document.createElement("h2");
title.classList.add("title");
title.textContent = "JUEGO PREGUNTADOS BIENVENIDO";
container.appendChild(title);

const inputNombre = document.createElement("input");
inputNombre.id = "nombre";
inputNombre.classList.add = ("w-25");
inputNombre.placeholder = 'su nombre porfavor';
container.appendChild(inputNombre);
console.log(inputNombre);

inputNombre.addEventListener('change', (e) => {
    almacenar(e.target.value)
})

function almacenar(params) {
    login = params
}


const ingresar = document.createElement("button");
ingresar.textContent = "Ingresar";
container.appendChild(ingresar);
ingresar.addEventListener("click", () => {
    localStorage.setItem(login, 0);
    container.innerHTML = "";
    pregunta();
});

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
let datos=[];
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
  //  data.forEach((element) => {
  //      console.log(element);
        if (datos.respuesta[respuesta] === datos.respuestaCorrecta) {
            localStorage.setItem(login, puntaje = puntaje + 300);
            cont++;
            correcto = 1;
            pregunta();
        }else{
            window.alert("perdiste tu puntaje fue : " + localStorage.getItem(login, puntaje)) 
            location.reload();
        }
 //   })

}

const btnHistorial = document.createElement("button");
btnHistorial.textContent = "Historial";
container.appendChild(btnHistorial);
