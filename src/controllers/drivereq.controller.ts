import { Request, Response } from "express";
import { drivereqSchema } from "../model/drivereq.schema";

export const obtenerSolicitud = (req: Request, res: Response)=>{
    drivereqSchema.find()
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => {
            res.send(error);
			res.end();
    });
}
export const eliminarSolicitud = (req: Request, res: Response)=>{
    drivereqSchema.deleteOne({_id:req.params.id})
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => {
            res.send(error);
			res.end();
    });
}