import express from "express";
import { obtenerCategory, obtenerCategories } from "../controllers/categories.controller";

const router=express.Router();

router.get("/", obtenerCategories);

router.get("/:id", obtenerCategory);

export default router;
