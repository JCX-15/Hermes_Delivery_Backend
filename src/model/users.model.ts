import mongoose from "mongoose";

export interface Users{
    _id: mongoose.Types.ObjectId,
    nombre: string,
    contrasenia: string
    correo: string,
    telefono: number
}