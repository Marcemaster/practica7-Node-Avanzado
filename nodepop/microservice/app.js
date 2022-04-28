"use strict";

const { Requester } = require("cote");

// Crear thumbnails de las fotos subidas

const { Requester } = require("cote");

const requester = new Requester({ name: "app" });

const evento = {
    type: 'crear-thumbnail'
}

requester.send(evento, resultado => {
    console.log('app obtiene resultado:', resultado)
})