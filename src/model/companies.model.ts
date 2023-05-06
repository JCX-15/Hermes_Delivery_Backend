import mongoose from "mongoose";

export interface Producto{
    
nombreProducto: string
precio: number
imagen: string
}

export interface Company{
    _id: mongoose.Types.ObjectId,
    nombreEmpresa: string,
    logo: string,
    banner: string,
    descripcion: string
    productos: Array<Producto>;
}