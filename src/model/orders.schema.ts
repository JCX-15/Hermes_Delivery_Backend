import mongoose from "mongoose";
import { Orders } from './orders.model';
import { Pedido } from "./orders.model";
import { Repartidor } from "./orders.model";

const schema=new mongoose.Schema<Orders>({
    _id: mongoose.Types.ObjectId,
    nOrden: Number,
    nombreU: String,
    contacto: Number,
    mPago: String,
    telefono: Number,
    lugar: String,
    Pedido: Array<Pedido>,
    estado: Boolean,
    repartidor: Array<Repartidor>
})

export const OrdersSchema=mongoose.model('orders',schema );
