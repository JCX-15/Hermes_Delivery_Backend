"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const drivers_controller_1 = require("../controllers/drivers.controller");
const router = express_1.default.Router();
router.get("/", drivers_controller_1.obtenerDrivers);
router.get("/:id", drivers_controller_1.obtenerDriver);
exports.default = router;
