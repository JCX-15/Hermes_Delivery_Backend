import mongoose from "mongoose";

export interface Admins{
    _id: mongoose.Types.ObjectId,
    nombre: string,
    contrasenia: string
    correo: string,
}