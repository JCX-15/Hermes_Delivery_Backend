"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDriver = exports.obtenerDrivers = void 0;
const drivers_schema_1 = require("../model/drivers.schema");
const obtenerDrivers = (req, res) => {
    drivers_schema_1.DriversSchema.find()
        .then((result) => {
        res.send({ result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerDrivers = obtenerDrivers;
const obtenerDriver = (req, res) => {
    drivers_schema_1.DriversSchema.findById({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerDriver = obtenerDriver;
