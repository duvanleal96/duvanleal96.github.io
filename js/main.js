import { data } from "./data.js";
export const main = () => {
    const container = document.getElementById("container");

    const categoriaPregunta = document.createElement("h2");
    categoriaPregunta.textContent="Categoria";
    container.appendChild(categoriaPregunta);

    const pregunta = document.createElement("h2");
    pregunta.textContent="question";
    container.appendChild(pregunta);

    let question;
    const A = document.createElement("td");
        
    const B = document.createElement("td");
    
    const C = document.createElement("td");
    
    const D = document.createElement("td");
    
    let categoria = 1;
    let nivel = 1;
    container.append(A,B,C,D);

    function prueba(){
        data.forEach((element  )=>{
            A.textContent=JSON.parse(localStorage.getItem(element.preguntas[1]))
            console.log(A);
        });
    }

}






