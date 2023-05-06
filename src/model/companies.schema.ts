import mongoose from "mongoose";
import { Company } from './companies.model';
import { Producto } from "./companies.model";

const schema=new mongoose.Schema<Company>({
    _id: mongoose.Types.ObjectId,
    nombreEmpresa: String,
    logo: String,
    banner: String,
    descripcion: String,
    productos: Array<Producto>
})

export const CompanySchema=mongoose.model('company',schema );