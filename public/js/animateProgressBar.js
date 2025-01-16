export default function animateProgressBar() {
    const progressFiller = document.querySelectorAll('.progress[data-width]')[0];

    const width = progressFiller.getAttribute('data-width');
    if (width) {
        progressFiller.style.width = `${width}%`;
    }
}