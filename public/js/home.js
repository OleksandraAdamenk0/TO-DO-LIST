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
    const createTaskButton = document.getElementById('create-task');
    const modal = document.getElementById('task-modal');
    const content = document.getElementsByTagName('main')[0];
    const closeModalButton = document.getElementById('close-modal');

    // Открыть модальное окно
    createTaskButton.addEventListener('click', () => {
        modal.classList.remove('hidden');       // Показываем модальное окно
        content.classList.add('blurred');      // Размываем основной контент
        document.body.classList.add('no-scroll'); // Отключаем прокрутку
    });

    // Закрыть модальное окно
    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');         // Скрываем модальное окно
        content.classList.remove('blurred');  // Убираем размытие
        document.body.classList.remove('no-scroll'); // Включаем прокрутку
    });

    // Закрытие при клике на затемнение
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
            content.classList.remove('blurred');
            document.body.classList.remove('no-scroll');
        }
    });
});
