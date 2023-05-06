import { Request, Response } from "express";
import { OrdersSchema } from "../model/orders.schema";


export const obtenerOrders=(req: Request, res: Response)=>{
    OrdersSchema.find()
		.then((result) => {
			res.send({result});
			res.end();
		})
		.catch((error) => {
            res.send(error);
			res.end();
    });
}

export const obtenerOrder = (req: Request, res: Response) => {
	OrdersSchema.findById({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};