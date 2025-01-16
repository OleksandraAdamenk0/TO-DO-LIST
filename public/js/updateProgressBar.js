import animateProgressBar from "./animateProgressBar.js";

export default async function updateProgressBar() {
    const allTasksResponse = await fetch(`/api/v1/tasks`, { method: "GET" });
    const allTasks = await allTasksResponse.json();

    const completedTasksResponse = await fetch(`/api/v1/tasks/completed/`, { method: "GET" });
    const completedTasks = await completedTasksResponse.json();

    document.querySelectorAll('.progress[data-width]')[0].setAttribute('data-width', `${100 / allTasks.length * completedTasks.length}`);
    animateProgressBar();
}