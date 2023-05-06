import { Request, Response } from "express";
import { DriversSchema } from "../model/drivers.schema";


export const obtenerDrivers=(req: Request, res: Response)=>{
    DriversSchema.find()
		.then((result) => {
			res.send({result});
			res.end();
		})
		.catch((error) => {
            res.send(error);
			res.end();
    });
}

export const obtenerDriver = (req: Request, res: Response) => {
	DriversSchema.findById({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};