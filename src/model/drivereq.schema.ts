import mongoose from "mongoose";
import { drivereqs } from './drivereq.model';

const schema=new mongoose.Schema<drivereqs>({
    _id: mongoose.Types.ObjectId,
    Nombre: String,
    genero: String,
    telefono: String,
    email: String,
    DNI: String,
    Placa: String,
    contraseña: String
})

export const drivereqSchema=mongoose.model('drivereqs',schema);