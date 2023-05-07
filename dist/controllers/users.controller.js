"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.obtenerUser = exports.obtenerUsers = void 0;
const users_schema_1 = require("../model/users.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const obtenerUsers = (req, res) => {
    users_schema_1.UsersSchema.find()
        .then((result) => {
        res.send({ result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerUsers = obtenerUsers;
const obtenerUser = (req, res) => {
    users_schema_1.UsersSchema.findById({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerUser = obtenerUser;
const addUser = (req, res) => {
    console.log(req.body.params);
    const p = new users_schema_1.UsersSchema({
        _id: new mongoose_1.default.Types.ObjectId(req.body.id),
        nombre: req.body.nombre,
        contrasenia: req.body.contrasenia,
        correo: req.body.correo,
        telefono: req.body.telefono
    });
    p.save().then((saveResponse) => {
        res.send(saveResponse);
        console.log(res);
        res.end();
    }).catch((error) => {
        res.send({ message: 'Hubo un error al guardar', error }); // shorthand
        res.end();
    });
    // aqui xd
};
exports.addUser = addUser;
