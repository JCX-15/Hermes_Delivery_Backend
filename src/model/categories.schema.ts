import mongoose from "mongoose";
import { Categories } from "./categories.model";
import { Company } from "./companies.model";

const schema=new mongoose.Schema<Categories>({
    _id: mongoose.Types.ObjectId,
    nombreCategoria: String,
    imagen: String,
    empresas: Array<Company>
});

export const CategoriesSchema=mongoose.model('categories', schema);