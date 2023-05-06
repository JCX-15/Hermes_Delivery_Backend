"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const artistas_controller_1 = require("../controllers/artistas.controller");
const router = express_1.default.Router();
router.get("/", artistas_controller_1.obtenerArtistas);
router.get("/:id", artistas_controller_1.obtenerArtista);
exports.default = router;
