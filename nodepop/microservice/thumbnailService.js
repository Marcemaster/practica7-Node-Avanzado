"use strict";
const jimp = require("jimp");

const { Responder } = require("cote");

// Almacén de datos del microservicio

const responder = new Responder({ name: "Creador-thumbnails" });

responder.on("crear-thumbnail", async (req, done) => {
  const { ruta, tamaño, nombre } = req;
  const image = await jimp.read(ruta);
  image.resize(tamaño, jimp.AUTO);
  
  image.writeAsync('../public/images/thumbnails/'+'thumbnail_'+nombre);

  done();
});
