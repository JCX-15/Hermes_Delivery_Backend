import express from "express";
import { eliminarSolicitud, obtenerSolicitud} from "../controllers/drivereq.controller";

const router=express.Router();

router.get("/", obtenerSolicitud);
router.delete("/:id", eliminarSolicitud);

export default router;