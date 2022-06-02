import {main} from "./main.js";

const container = document.getElementById("container");
container.classList.add("container-lg","d-flex","justify-content-center","aling-items-center")
    console.log(container);

    const title = document.createElement("h2");
    title.textContent = "JUEGO PREGUNTADOS BIENVENIDO";
    container.appendChild(title);

    const inputNombre = document.createElement("input");
    inputNombre.placeholder = 'su nombre porfavor';
    inputNombre.id= "nombre";
    container.appendChild(inputNombre);

    const ingresar = document.createElement("button");
    ingresar.textContent = "Ingresar";
    container.appendChild(ingresar);
    ingresar.addEventListener("click", () => {
        console.log("diste click");
        container.innerHTML="";
        main();
    });
    const btnHistorial = document.createElement("button");
    btnHistorial.textContent = "Historial";
    container.appendChild(btnHistorial);
