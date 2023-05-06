import mongoose from "mongoose";

export interface Pedido{
    nombreEmpresa: string,
    nombreProducto: string
    //cantidad: number
}

export interface Repartidor{
    _id: mongoose.Types.ObjectId
}

export interface Orders{
    _id: mongoose.Types.ObjectId,
    nOrden: number,
    nombreU: string,
    contacto: number,
    mPago: string,
    telefono: number,
    lugar: string,
    Pedido: Array<Pedido>,
    estado: boolean,
    repartidor: Repartidor
}