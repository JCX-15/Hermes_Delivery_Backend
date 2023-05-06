"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bd = 'Hermesdb';
const port = '27017';
const host = '127.0.0.1';
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default
            .connect(`mongodb+srv://ajls05:ajls05.@cluster0.gty7tlg.mongodb.net/Hermesdb`)
            .then(result => console.log('HERMES ESTA VIVOOOOO'))
            .catch(error => console.log(error));
    }
}
exports.Database = Database;
