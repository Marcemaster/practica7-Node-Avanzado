"use strict";

import readline from 'readline';


import fsPromise from "fs/promises";
import dbConnection from "./lib/connectMongoose.js";

import Anuncio from "./models/anuncio.js";
import Usuario from './models/Usuario.js';

dbConnection.once("open", () => {
    main().catch((err) => console.log("Hubo un error", err));
});

async function main() {
    const borrar = await pregunta('Estas seguro de que quieres borrar la base de datos?');
    if (!borrar) {
      process.exit(0);
    }
    await initAnuncios();
    await initUsuarios();
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

async function initUsuarios() {
    // borrar los usuarios existentes
    const deleted = await Usuario.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} usuarios.`);
  
    // crear usuarios
    const usuarios = await Usuario.insertMany([
      {
        email: 'admin@example.com',
        password: await Usuario.hashPassword('1234'),
        rol: 'admin'
      },
      {
        email: 'user@example.com',
        password: await Usuario.hashPassword('1234'),
        rol: 'user'
      }
    ]);
    console.log(`Creados ${usuarios.length} usuarios.`);
  }

function pregunta(texto) {
    return new Promise((resolve, reject) => {
      // conectar readline a la consola
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      // hacemos pregunta
      rl.question(texto, respuesta => {
        rl.close();
        if (respuesta.toLowerCase() === 'si') {
          resolve(true);
          return;
        }
        resolve(false);
      })
    });
  }
