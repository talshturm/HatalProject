import { Router } from "express";
import { getAll, getById, deleteOrder, updateOrder, createOrder } from "../controllers/orderController";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;