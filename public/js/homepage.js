function updateTasksClass() {
    const element = document.querySelector('.tasks');
    if (!element) return; // Проверка, существует ли элемент

    if (window.innerWidth <= 834) {
        element.classList.add('vertical-center');
        element.classList.remove('horizontal-center');
    } else {
        element.classList.add('horizontal-center');
        element.classList.remove('vertical-center');
    }
}

document.addEventListener('DOMContentLoaded', updateTasksClass);
window.addEventListener('resize', updateTasksClass);

document.addEventListener('DOMContentLoaded', () => {
    const progressElements = document.querySelectorAll('.progress[data-width]');

    progressElements.forEach(progress => {
        const width = progress.getAttribute('data-width');
        if (width) {
            progress.style.width = `${width}%`; // Устанавливаем ширину
        }
    });
});