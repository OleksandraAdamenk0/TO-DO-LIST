import db from "../config/db.js"

async function getAllTasks() {
    const [rows] = await db.query("SELECT * FROM tasks");
    return rows;
}

async function getTaskByID(id) {
    const [rows] = await db.query("SELECT * FROM tasks WHERE id = ?", id);
    return rows;
}

async function getComplitedTasks() {
    const [rows] = await db.query("SELECT * FROM tasks WHERE tasks.status = 1");
    return rows;
}

async function updateTaskStatus(id, status) {
    const [results] = await db.query("UPDATE tasks SET status = ? WHERE id = ?", [status, id]);
}

export default {getAllTasks, getTaskByID, getComplitedTasks, updateTaskStatus};