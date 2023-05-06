import express from "express";
import { obtenerCompany, obtenerCompanies } from "../controllers/companies.controller";

const router=express.Router();

router.get("/", obtenerCompany);

router.get("/:id", obtenerCompanies);

export default router;
