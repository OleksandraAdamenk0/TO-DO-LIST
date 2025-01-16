function updateTasksClass() {
    const element = document.querySelector('.tasks');
    if (!element) return;

    if (window.innerWidth <= 834) {
        element.classList.add('vertical-center');
        element.classList.remove('horizontal-center');
    } else {
        element.classList.add('horizontal-center');
        element.classList.remove('vertical-center');
    }
}

export default function setUpDynamicMedia() {
    document.addEventListener('DOMContentLoaded', updateTasksClass);
    window.addEventListener('resize', updateTasksClass);
}

