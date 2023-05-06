import { Request, Response } from "express";
import { CategoriesSchema } from "../model/categories.schema";
import mongoose, {ObjectId} from "mongoose";

export const obtenerCategories = (req: Request, res: Response)=>{
    CategoriesSchema.find()
		.then((result) => {
			res.send({result});
			res.end();
		})
		.catch((error) => {
            res.send(error);
			res.end();
    });
}

export const obtenerCategory = (req: Request, res: Response) => {
	CategoriesSchema.findById({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};