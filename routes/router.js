import express from "express";
import homeRouter from "./home.js";
import tasksRouter from "./tasks.js";

const router = express.Router();
router.use('/tasks', tasksRouter);
router.use('/', homeRouter);

export default router;