"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerEmpresa = exports.obtenerEmpresas = void 0;
const empresa_schema_1 = require("../model/empresa.schema");
const obtenerEmpresas = (req, res) => {
    empresa_schema_1.EmpresaSchema.find()
        .then((result) => {
        res.send({ message: 'Usuarios', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerEmpresas = obtenerEmpresas;
const obtenerEmpresa = (req, res) => {
    empresa_schema_1.EmpresaSchema.find({ _id: req.params.id })
        .then((result) => {
        res.send(result[0]);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerEmpresa = obtenerEmpresa;
