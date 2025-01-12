import express from "express";
import toggleStatus from "../controllers/tasks.js";

const router = express.Router();
router.route('/:taskID/toggle-status').put(toggleStatus);

export default router;