"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    nOrden: Number,
    nombreU: String,
    contacto: Number,
    mPago: String,
    telefono: Number,
    lugar: String,
    Pedido: (Array),
    estado: Boolean,
    repartidor: (Array)
});
exports.OrdersSchema = mongoose_1.default.model('orders', schema);
