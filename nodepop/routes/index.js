var express = require("express");
var router = express.Router();
const Anuncio = require("../models/anuncio.js");

/* GET home page. */
router.get("/", async function (req, res, next) {
    try {
        const nombre = req.query.nombre;
        const venta = req.query.venta;
        const precio = req.query.precio;
        const precioMin = req.query.precioMin;
        const precioMax = req.query.precioMax;
        const foto = req.query.foto;
        const tags = req.query.tags;
        const skip = req.query.skip;
        const limit = req.query.limit;
        const sort = req.query.sort;
        const filtros = {};

        if (nombre) {
            filtros.nombre = nombre;
        }
        if (venta) {
            filtros.venta = venta;
        }
        if (precio) {
            filtros.precio = precio;
        }
        if (precioMin) {
            filtros.precio = { $gte: precioMin };
        }
        if (precioMax) {
            filtros.precio = { $lte: precioMax };
        }
        if (precioMax && precioMin) {
            filtros.precio = { $gte: precioMin, $lte: precioMax };
        }
        if (foto) {
            filtros.foto = foto;
        }
        if (tags) {
            filtros.tags = tags;
        }

        const arrayDeAnuncios = await Anuncio.lista(filtros, skip, limit, sort);

        res.render("index", { title: "Nodepop", anuncios: arrayDeAnuncios });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
