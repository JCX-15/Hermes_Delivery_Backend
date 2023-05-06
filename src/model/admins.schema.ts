import mongoose from "mongoose";
import { Admins } from './admins.model';

const schema=new mongoose.Schema<Admins>({
    _id: mongoose.Types.ObjectId,
    nombre: String,
    contrasenia: String,
    correo: String
})

export const AdminsSchema=mongoose.model('admin',schema );
