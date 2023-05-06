import { Request, Response } from "express";
import { UsersSchema } from "../model/users.schema";


export const obtenerUsers=(req: Request, res: Response)=>{
    UsersSchema.find()
		.then((result) => {
			res.send({result});
			res.end();
		})
		.catch((error) => {
            res.send(error);
			res.end();
    });
}

export const obtenerUser = (req: Request, res: Response) => {
	UsersSchema.findById({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};