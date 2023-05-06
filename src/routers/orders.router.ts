import express from "express";
import { obtenerOrders, obtenerOrder} from  "../controllers/orders.controller";

const router=express.Router();

router.get ("/", obtenerOrders);

router.get("/:id", obtenerOrder);

export default router; 