"use strict";

const mongoose = require("mongoose");

const anuncioSchema = new mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String],
});

anuncioSchema.statics.lista = function (filtros, skip, limit, sort) {
    const query = Anuncio.find(filtros);
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    return query.exec();
};

const Anuncio = mongoose.model("Anuncio", anuncioSchema);

module.exports = Anuncio;
