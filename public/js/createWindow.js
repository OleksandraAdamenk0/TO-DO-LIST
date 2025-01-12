document.addEventListener('DOMContentLoaded', () => {
    const createTaskButton = document.getElementById('create-task');
    const modal = document.getElementById('task-modal');
    const content = document.getElementsByTagName('main')[0];

    // Открыть модальное окно
    createTaskButton.addEventListener('click', () => {
        console.log("opened")
        modal.classList.remove('hidden');       // Показываем модальное окно
        content.classList.add('blurred');      // Размываем основной контент
        document.body.classList.add('no-scroll'); // Отключаем прокрутку
    });

    // Закрытие при клике на затемнение
    modal.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target === modal) {
            console.log("modal closed");
            modal.classList.add('hidden');
            content.classList.remove('blurred');
            document.body.classList.remove('no-scroll');
        }
    });
});