import db from "../config/db.js"

async function getAllTasks() {
    const [rows] = await db.query("SELECT * FROM tasks");
    return rows;
}

async function getTaskByID(id) {
    const [rows] = await db.query("SELECT * FROM tasks WHERE id = ?", id);
    return rows;
}

async function getCompletedTasks() {
    const [rows] = await db.query("SELECT * FROM tasks WHERE tasks.status = 1");
    return rows;
}

async function updateTaskStatus(id, status) {
    const [results] = await db.query("UPDATE tasks SET status = ? WHERE id = ?", [status, id]);
}

async function updateTaskById(id, data) {
    const [results] = await db.query("UPDATE tasks SET title = ?, datetime = ?, description = ? WHERE id = ?",
                                    [data.title, data.datetime, data.description, Number(id)]);
}

async function deleteTaskById(id) {
    const [results] = await db.query("DELETE FROM tasks WHERE id = ?", id);
}

export default {getAllTasks, getTaskByID, getCompletedTasks, updateTaskStatus, updateTaskById, deleteTaskById};