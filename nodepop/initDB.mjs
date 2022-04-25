"use strict";

import fsPromise from "fs/promises";

import dbConnection from "./lib/connectMongoose.js";
import Anuncio from "./models/anuncio.js";

dbConnection.once("open", () => {
    main().catch((err) => console.log("Hubo un error", err));
});

async function main() {
    await initAnuncios();
    dbConnection.close();
}

async function initAnuncios() {
    const deleted = await Anuncio.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} anuncios.`);

    const data = await fsPromise.readFile("initDB.anuncios.json", "utf-8");
    const anunciosData = JSON.parse(data);
    const anuncios = await Anuncio.insertMany(anunciosData);
    console.log(`Creados ${anuncios.length} anuncios.`);
}
