"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriversSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    nombre: String,
    contrasenia: String,
    correo: String
});
exports.DriversSchema = mongoose_1.default.model('drivers', schema);
