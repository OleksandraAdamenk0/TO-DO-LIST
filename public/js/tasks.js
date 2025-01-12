function toggleStatus(taskId) {
    console.log("taskId " + taskId);
    fetch(`/api/v1/tasks/${taskId}/toggle-status`, {
        method: 'PUT',
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const taskElement = document.querySelector(`.task[data-id="${taskId}"]`);
            const iconPath = taskElement.querySelector('button svg path');

            const newD = (data.completed === 1)
                ? "m11.625 18 4.245 4.245 8.505-8.49M18 33c8.25 0 15-6.75 15-15S26.25 3 18 3 3 9.75 3 18s6.75 15 15 15Z"
                : "M18 33c8.25 0 15-6.75 15-15S26.25 3 18 3 3 9.75 3 18s6.75 15 15 15Z";

            iconPath.setAttribute('d', newD);
        });
}