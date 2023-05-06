"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerUser = exports.obtenerUsers = void 0;
const users_schema_1 = require("../model/users.schema");
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
