import * as utils from './utils.js'
import {fetchTaskData} from "./fetchTaskData.js";

const modal = document.getElementById('task-modal');
const content = document.getElementsByTagName('main')[0];

function padToTwoDigits(num) {
    return num.toString().padStart(2, '0');
}

function processTaskDataForModalWindows(taskId, taskData) {
    if (!taskData) { return }

    document.getElementById('task-form').setAttribute('data-task-id', taskId);

    utils.setFormFieldValue('task-title', (taskData.title? taskData.title : ''));
    utils.setFormFieldValue('task-description', (taskData.description? taskData.description : ''));

    // date & time
    if (taskData.datetime) {
        const datetime = new Date(taskData.datetime);
        utils.setFormFieldValue('task-date', `${datetime.getFullYear()}-${padToTwoDigits(datetime.getMonth() + 1)}-${padToTwoDigits(datetime.getDate())}`);
        utils.setFormFieldValue('task-time', `${padToTwoDigits(datetime.getHours())}:${padToTwoDigits(datetime.getMinutes())}`);
    } else {
        utils.setFormFieldValue('task-date');
        utils.setFormFieldValue('task-time');
    }

    // btns
    document.getElementById('update-task').classList.remove('hidden');
    document.getElementById('delete-task').classList.remove('hidden');
    document.getElementById('create-task').classList.add('hidden');

    // layout
    modal.classList.remove('hidden');
    content.classList.add('blurred');
    document.body.classList.add('no-scroll');
}

function openModalUpdate(event, taskData) {
    // don't open modal if toggle was pressed
    if (event.target.closest('button')) { return; }

    // don't open modal if text selected
    const selection = window.getSelection();
    if (selection && selection.toString().trim() !== "") { return; }

    fetchTaskData(taskData.id)
        .then(fetchedData => { processTaskDataForModalWindows(taskData.id, fetchedData)})
        .catch(error => console.error("Error: ", error));
}

function openModalCreate() {
    // fields
    utils.setFormFieldValue('task-title');
    utils.setFormFieldValue('task-description');
    utils.setFormFieldValue('task-date');
    utils.setFormFieldValue('task-time');

    // form
    document.getElementById('task-form').setAttribute('data-task-id', "0");

    // buttons
    document.getElementById('update-task').classList.add('hidden');
    document.getElementById('delete-task').classList.add('hidden');
    document.getElementById('create-task').classList.remove('hidden');

    // layouts
    modal.classList.remove('hidden');
    content.classList.add('blurred');
    document.body.classList.add('no-scroll');
}

export default function openModal(event = null, mode = 'create', taskData = null) {
    if (mode === 'update') {openModalUpdate(event, taskData);}
    if (mode === 'create') {openModalCreate();}
}