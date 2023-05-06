import express from "express";
import { obtenerDrivers, obtenerDriver} from  "../controllers/drivers.controller";

const router=express.Router();

router.get ("/", obtenerDrivers);

router.get("/:id", obtenerDriver);

export default router;