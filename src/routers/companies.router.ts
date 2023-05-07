import express from "express";
import { obtenerCompany, obtenerCompanies } from "../controllers/companies.controller";

const router=express.Router();

router.get("/", obtenerCompanies);

router.get("/:id", obtenerCompany);

export default router;
