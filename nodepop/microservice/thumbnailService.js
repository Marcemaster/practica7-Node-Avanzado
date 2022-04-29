"use strict";

// Microservicio de creación de thumbnails

const { Responder } = require("cote");

// Almacén de datos del microservicio

const responder = new Responder({ name: "Creador-thumbnails" });

responder.on("crear-thumbnail", (req, done) => {
    const { tamaño, saludo } = req
    console.log("Tamaño= ", tamaño, saludo)

    done(tamaño+1)
});
