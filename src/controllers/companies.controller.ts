import { Request, Response } from "express";
import { CompanySchema } from "../model/companies.schema";


export const obtenerCompanies=(req: Request, res: Response)=>{
    CompanySchema.find()
		.then((result) => {
			res.send({message: 'Usuarios',result});
			res.end();
		})
		.catch((error) => {
            res.send(error);
			res.end();
    });
}

export const obtenerCompany = (req: Request, res: Response) => {
	CompanySchema.findById({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};