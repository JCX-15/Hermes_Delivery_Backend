"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCategory = exports.obtenerCategories = void 0;
const categories_schema_1 = require("../model/categories.schema");
const obtenerCategories = (req, res) => {
    categories_schema_1.CategoriesSchema.find()
        .then((result) => {
        res.send({ result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerCategories = obtenerCategories;
const obtenerCategory = (req, res) => {
    categories_schema_1.CategoriesSchema.findById({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerCategory = obtenerCategory;
