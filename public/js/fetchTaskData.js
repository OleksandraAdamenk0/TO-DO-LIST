export function fetchTaskData(taskId) {
    return fetch(`/api/v1/tasks/${taskId}`, { method: 'GET' })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch task data. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(taskData => {
            return taskData;
        })
        .catch(error => {
            console.error('Error fetching task data:', error);
            return null;
        });
}