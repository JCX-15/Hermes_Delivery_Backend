"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const router = express_1.default.Router();
router.get("/", users_controller_1.obtenerUsers);
router.get("/:id", users_controller_1.obtenerUser);
router.post("/", users_controller_1.addUser);
exports.default = router;
