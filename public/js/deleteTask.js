import {getCurrentTaskID} from "./utils.js";
import {closeModal} from "./closeModalWindow.js";

export default function deleteTask() {
    const taskId = getCurrentTaskID();
    fetch(`/api/v1/tasks/${taskId}`, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) { throw new Error('Failed to delete task'); }
            return response.json();
        })
        .then(data => {
            const tasks = document.getElementsByClassName('task');
            Array.from(tasks).forEach(task => {
                if (task.dataset.id === taskId) {
                    task.remove();
                }
            });
        })
        .catch(error => console.error('Error:', error))
        .finally(() => closeModal());
}