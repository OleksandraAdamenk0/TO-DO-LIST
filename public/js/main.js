import setUpDynamicMedia from "./dynamicMedia.js";
import animateProgressBar from "./animateProgressBar.js";
import toggleTaskStatus from "./toggleTaskStatus.js";
import openModal from "./openModalWindow.js";
import {closeModalClickEvent} from "./closeModalWindow.js";
import updateTask from "./updateTask.js";
import deleteTask from "./deleteTask.js";


document.addEventListener('DOMContentLoaded', () => {
    setUpDynamicMedia();
    animateProgressBar();

    window.toggleTaskStatus = toggleTaskStatus;
    window.openModal = openModal;
    window.closeModalClickEvent = closeModalClickEvent;

    window.updateTask = updateTask;
    window.deleteTask = deleteTask;
});