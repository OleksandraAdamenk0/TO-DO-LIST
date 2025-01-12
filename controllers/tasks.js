import tasksModel from '../models/tasks.js';

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

    res.json({ id: taskID, completed: newStatus });
}

export default toggleStatus;