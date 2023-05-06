import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import categoriesRouter from './routers/categories.router';
import usersRouter from './routers/users.router';
import companiesRouter from './routers/companies.router';
import AdminsRouter from './routers/admins.router';
import { Database } from "./utils/database";
import cors from 'cors';


dotenv.config();
const database:Database=new Database();
const app: Express = express();
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