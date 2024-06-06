import { Router } from "express";
import { getAll, getById, deleteUser, updateUser, createUser } from "../controllers/userController";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
