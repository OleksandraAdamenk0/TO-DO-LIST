import express from "express";
import taskControllers from "../controllers/tasks.js";

const router = express.Router();
router.route('/:taskID/toggle-status').put(taskControllers.toggleStatus);
router.route('/completed').get(taskControllers.getCompletedTasks);
router.route('/:taskID').get(taskControllers.getTaskById);
router.route('/:taskID').post(taskControllers.updateTaskById);
router.route('/:taskID').delete(taskControllers.deleteTaskById);
router.route('/').get(taskControllers.getAllTasks);


export default router;