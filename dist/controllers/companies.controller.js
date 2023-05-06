"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCompany = exports.obtenerCompanies = void 0;
const companies_schema_1 = require("../model/companies.schema");
const obtenerCompanies = (req, res) => {
    companies_schema_1.CompanySchema.find()
        .then((result) => {
        res.send({ message: 'Usuarios', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerCompanies = obtenerCompanies;
const obtenerCompany = (req, res) => {
    companies_schema_1.CompanySchema.findById({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.obtenerCompany = obtenerCompany;
