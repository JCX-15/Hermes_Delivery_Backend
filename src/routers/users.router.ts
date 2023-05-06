import express from "express";
import { obtenerUsers, obtenerUser} from  "../controllers/users.controller";

const router=express.Router();

router.get ("/", obtenerUsers);

router.get("/:id", obtenerUser);

export default router;