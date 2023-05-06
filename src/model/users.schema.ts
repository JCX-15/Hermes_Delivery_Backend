import mongoose from "mongoose";
import { Users } from './users.model';

const schema=new mongoose.Schema<Users>({
    _id: mongoose.Types.ObjectId,
    nombre: String,
    contrasenia: String,
    correo: String,
    telefono: Number
})

export const UsersSchema=mongoose.model('users',schema );
