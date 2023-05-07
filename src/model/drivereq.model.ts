import mongoose from "mongoose";

export interface drivereqs{
    _id: mongoose.Types.ObjectId;
    Nombre: string;
    genero: string;
    telefono: string;
    email: string;
    DNI: string;
    Placa: string;
    contraseña: string;
}