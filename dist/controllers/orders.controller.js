"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerOrder = exports.obtenerOrders = void 0;
const orders_schema_1 = require("../model/orders.schema");
const obtenerOrders = (req, res) => {
    orders_schema_1.OrdersSchema.find()
        .then((result) => {
        res.send({ result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerOrders = obtenerOrders;
const obtenerOrder = (req, res) => {
    orders_schema_1.OrdersSchema.findById({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerOrder = obtenerOrder;
