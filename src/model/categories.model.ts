import mongoose from "mongoose";
import { Company } from "./companies.model";

export interface Categories{
    _id: mongoose.Types.ObjectId,
    nombreCategoria: string,
    imagen: string,
    empresas: Array<Company>;
}