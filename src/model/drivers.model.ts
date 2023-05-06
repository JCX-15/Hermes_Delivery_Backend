import mongoose from "mongoose";

export interface Drivers{
    _id: mongoose.Types.ObjectId,
    nombre: string,
    contrasenia: string,
    correo: string
}