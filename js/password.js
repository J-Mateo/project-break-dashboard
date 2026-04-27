const lockIcon = document.getElementById('lockIcon');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
    lockIcon.setAttribute("data-lucide", "lock-keyhole");
    lucide.createIcons();
});