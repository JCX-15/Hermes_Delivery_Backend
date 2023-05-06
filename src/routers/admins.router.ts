import express from "express";
import { obtenerAdmins, obtenerAdmin} from  "../controllers/admins.controller";

const router=express.Router();

router.get ("/", obtenerAdmins);

router.get("/:id", obtenerAdmin);

export default router;