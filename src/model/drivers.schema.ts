import mongoose from "mongoose";
import { Drivers } from './drivers.model';

const schema=new mongoose.Schema<Drivers>({
    _id: mongoose.Types.ObjectId,
    nombre: String,
    contrasenia: String,
    correo: String
})

export const DriversSchema=mongoose.model('drivers',schema );
