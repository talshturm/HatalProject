import { Router } from "express";
import { getAll, getById, deleteFeedback, createFeedback } from "../controllers/feedbackController";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createFeedback);
router.delete("/:id", deleteFeedback);

export default router;