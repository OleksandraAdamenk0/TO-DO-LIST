export function setFormFieldValue(fieldId, value='') {
    document.getElementById(fieldId).value = value;
}

export function getCurrentTaskID() {
    return document.getElementById('task-form').getAttribute('data-task-id');
}
