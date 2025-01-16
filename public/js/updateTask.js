import {closeModal} from "./closeModalWindow.js";
import {getCurrentTaskID} from "./utils.js";

export default function updateTask() {
    const title = document.getElementById('task-title').value.trim();
    const date = document.getElementById('task-date').value;
    const time = document.getElementById('task-time').value;
    const description = document.getElementById('task-description').value.trim();

    const replaceEmptyWithNull = (value) => (value === '' ? null : value);

    const taskData = {
        title: replaceEmptyWithNull(title),
        date: replaceEmptyWithNull(date),
        time: replaceEmptyWithNull(time),
        description: replaceEmptyWithNull(description),
    };

    console.log(taskData.time, taskData.date);

    if (time !== undefined && time !== null && time !== '') {
        console.log(date);
    }



    const jsonData = JSON.stringify(taskData);

    const taskId = getCurrentTaskID();

    console.log(taskId);
    console.log(jsonData);

    fetch(`/api/v1/tasks/${taskId}`, { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: jsonData, })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    closeModal();
}