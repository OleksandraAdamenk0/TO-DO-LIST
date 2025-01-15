import tasksModel from '../models/tasks.js';

const getTaskById = async (req, res) => {
    const taskID = req.params.taskID;
    const tasks = await tasksModel.getTaskByID(taskID);
    if (!tasks) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const task = tasks[0];
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    console.log("Task: ", task);
    res.status(200).json(task);
}

const toggleStatus = async (req, res) => {
    const taskID = req.params.taskID;
    const tasks = await tasksModel.getTaskByID(taskID);
    if (!tasks) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const task = tasks[0];
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const newStatus = (task.status === 1)? 0: 1;
    console.log("task:", task, "old status: ", task.status, "new status: ", newStatus);
    await tasksModel.updateTaskStatus(taskID, newStatus);

    res.status(200).json({ id: taskID, completed: newStatus });
}

export default {toggleStatus, getTaskById};