import { Request, Response } from "express";
import { AdminsSchema } from "../model/admins.schema";


export const obtenerAdmins=(req: Request, res: Response)=>{
    AdminsSchema.find()
		.then((result) => {
			res.send({result});
			res.end();
		})
		.catch((error) => {
            res.send(error);
			res.end();
    });
}

export const obtenerAdmin = (req: Request, res: Response) => {
	AdminsSchema.findById({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};