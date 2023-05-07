import express from "express";
import { obtenerUsers, obtenerUser, addUser} from  "../controllers/users.controller";

const router=express.Router();

router.get ("/", obtenerUsers);

router.get("/:id", obtenerUser);

router.post ("/", addUser);

export default router;