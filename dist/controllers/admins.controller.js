"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerAdmin = exports.obtenerAdmins = void 0;
const admins_schema_1 = require("../model/admins.schema");
const obtenerAdmins = (req, res) => {
    admins_schema_1.AdminsSchema.find()
        .then((result) => {
        res.send({ result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerAdmins = obtenerAdmins;
const obtenerAdmin = (req, res) => {
    admins_schema_1.AdminsSchema.findById({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerAdmin = obtenerAdmin;
