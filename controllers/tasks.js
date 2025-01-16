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

const updateTaskById = async (req, res) => {
    const taskID = req.params.taskID;
    console.log(taskID);

    const { title, date, time, description } = req.body;
    console.log("Task: ", req.body);

    let datetime = null;
    if (date && time) { datetime = `${date} ${time}:00`; }

    const taskData = {
        title,
        datetime,
        description,
    };

    console.log("Formatted Task Data: ", taskData);

    await tasksModel.updateTaskById(taskID, taskData);
    res.status(200).json({ id: taskID, data: taskData });
}

const deleteTaskById = async (req, res) => {
    const taskID = req.params.taskID;
    console.log(taskID);

    await tasksModel.deleteTaskById(taskID);
    res.status(200).json({ id: taskID, status: 'success' });
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
    await tasksModel.updateTaskStatus(taskID, newStatus);

    res.status(200).json({ id: taskID, completed: newStatus });
}

const getAllTasks = async (req, res) => {
    const tasks = await tasksModel.getAllTasks();
    res.status(200).json(tasks);
}

const getCompletedTasks = async (req, res) => {
    const tasks = await tasksModel.getCompletedTasks();
    res.status(200).json(tasks);
}

export default {toggleStatus, getTaskById, updateTaskById, deleteTaskById, getAllTasks, getCompletedTasks};