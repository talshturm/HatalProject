import { Router } from "express";
import { getAll, getById, deleteProduct, updateProduct, createProduct } from "../controllers/productContoller";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;