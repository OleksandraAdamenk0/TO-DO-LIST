const modal = document.getElementById('task-modal');
const content = document.getElementsByTagName('main')[0];

function closeModal() {
    document.getElementById('task-form').reset();

    modal.classList.add('hidden');
    content.classList.remove('blurred');
    document.body.classList.remove('no-scroll');
}

function closeModalClickEvent(event) {
    if (event.target !== event.currentTarget) return;
    closeModal();
}

export {closeModal, closeModalClickEvent};