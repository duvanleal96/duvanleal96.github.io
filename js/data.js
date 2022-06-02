export const data = [
{
    categoria: "Historia",
    preguntas:[
        {
            pregunta1:"¿En que año tuvo lugar el ataque a Pearl Harbor?",
            respuestas:[
                {
                    A:"1939",
                        validar:[
                            {
                                valido:"0",
                            }
                        ]
                },
                {
                    B:"1940",
                    validar:[
                        {
                            valido:"0",
                        }
                    ]
                },
                {
                    C:"1941",
                    validar:[
                        {
                            valido:"1",
                        }
                    ]
                },
                {
                    D:"1942",
                    validar:[
                        {
                            valido:"0",
                        }
                    ]
                }
            ]
        },
        {
            pregunta2:"¿Con que emperador estuvo casada Cleopatra?",
            respuestas:[
                {

                }
            ]
        },
        {
            pregunta3:"¿El renacimiento marcó el inicio de que edad...?",
            respuestas:[
                {

                }
            ]
        },
        {
            pregunta4:"¿que se celebra el 8 de Marzo?",
            respuestas:[
                {
                    
                }
            ]
        },
        {
            pregunta5:"¿Como se llama la sustancia que se utiliza en la iglesia para hacer mucho humo?",
            respuestas:[
                {
                    
                }
            ]
        },

        
    ]
},
{
    categoria: "Entretenimiento",
    preguntas:[
        {

        }
    ]
}

]
localStorage.setItem("data",JSON.stringify(data));
