import express from "express";
import taskControllers from "../controllers/tasks.js";

const router = express.Router();
router.route('/:taskID/toggle-status').put(taskControllers.toggleStatus);
router.route('/:taskID').get(taskControllers.getTaskById);

export default router;