"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerArtista = exports.obtenerArtistas = void 0;
const artista_schema_1 = require("../model/artista.schema");
const obtenerArtistas = (req, res) => {
    artista_schema_1.ArtistasSchema.find()
        .then((result) => {
        res.send({ message: 'Artistas', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerArtistas = obtenerArtistas;
const obtenerArtista = (req, res) => {
    artista_schema_1.ArtistasSchema.find({ _id: req.params.id })
        .then((result) => {
        res.send(result[0]);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerArtista = obtenerArtista;
