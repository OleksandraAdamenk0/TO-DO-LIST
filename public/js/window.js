const modal = document.getElementById('task-modal');
const content = document.getElementsByTagName('main')[0];

function padToTwoDigits(num) {
    return num.toString().padStart(2, '0');
}

function openModalUpdate(event, taskData) {
    if (event.target.closest('button')) { return; }
    const selection = window.getSelection();
    if (selection && selection.toString().trim() !== "") { return; }

    console.log(taskData);

    fetchTaskData(taskData.id).then(allTaskData => {
        if (!allTaskData) { return }

        document.getElementById('task-title').value = allTaskData.title || '';
        document.getElementById('task-description').value = allTaskData.description || '';

        const datetime = new Date(allTaskData.datetime);
        const formattedDate = `${datetime.getFullYear()}-${padToTwoDigits(datetime.getMonth() + 1)}-${padToTwoDigits(datetime.getDate())}`;
        document.getElementById('task-date').value = formattedDate;
        document.getElementById('task-time').value = `${padToTwoDigits(datetime.getHours())}:${padToTwoDigits(datetime.getMinutes())}`;

        document.getElementById('update-task').classList.remove('hidden');
        document.getElementById('delete-task').classList.remove('hidden');
        document.getElementById('create-task').classList.add('hidden');

        modal.classList.remove('hidden');
        content.classList.add('blurred');
        document.body.classList.add('no-scroll');
    }).catch(error => console.log(error));
}

function openModalCreate() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-time').value = '';

    document.getElementById('update-task').classList.add('hidden');
    document.getElementById('delete-task').classList.add('hidden');
    document.getElementById('create-task').classList.remove('hidden');

    modal.classList.remove('hidden');
    content.classList.add('blurred');
    document.body.classList.add('no-scroll');
}

function openModal(event = null, mode = 'create', taskData = null) {

    if (mode === 'update') {openModalUpdate(event, taskData);}
    if (mode === 'create') {openModalCreate();}
}

function closeModal(event) {
    if (event.target !== event.currentTarget) return;

    const forms = document.getElementsByTagName('form');
    Array.from(forms).forEach(form => {form.reset();});
    modal.classList.add('hidden');
    content.classList.remove('blurred');
    document.body.classList.remove('no-scroll');
}

window.openModal = openModal;
window.closeModal = closeModal;