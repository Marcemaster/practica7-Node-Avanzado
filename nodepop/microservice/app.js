"use strict";

// Crear thumbnails de las fotos subidas

const { Requester } = require("cote");

const requester = new Requester({ name: "App" });

const evento = {
    type: 'crear-thumbnail',

    tamaño: 100,
    saludo: "Hola",
    
}

requester.send(evento, resultado => {
    console.log('app obtiene resultado:', resultado)
})