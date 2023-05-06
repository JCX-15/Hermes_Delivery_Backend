"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./utils/database");
dotenv_1.default.config();
const database = new database_1.Database();
const app = (0, express_1.default)();
const port = process.env.PORT;
/* app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/categorias', categoriasRouter);
app.use('/usuarios', usuariosRouter);
app.use('/empresa', empresaRouter); */
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
