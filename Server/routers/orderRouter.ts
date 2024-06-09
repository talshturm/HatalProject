import { Router } from "express";
import { getAll, getById, deleteOrder, updateOrder, createOrder, updateStatus } from "../controllers/orderController";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createOrder);
router.patch("/:id/status", updateStatus);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;