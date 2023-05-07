import { Request, Response } from "express";
import { UsersSchema } from "../model/users.schema";
import mongoose from "mongoose";


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

export const addUser = (req: Request, res: Response) => {
	console.log(req.body.params);
	
	const p = new UsersSchema({
		_id: new mongoose.Types.ObjectId(req.body.id),
		nombre: req.body.nombre,
		contrasenia: req.body.contrasenia,
		correo: req.body.correo,
		telefono: req.body.telefono
	});
  p.save().then((saveResponse:any) => {
    res.send(saveResponse);
	console.log(res);
    res.end();
  }).catch((error:any) => {
    res.send({message: 'Hubo un error al guardar', error}); // shorthand
    res.end();
  });
  // aqui xd
};