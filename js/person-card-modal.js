const personCardSettings = document.querySelector('.settings-person-card');
const personCardClose = document.querySelector('.dashboard-person-popup-close');
const personCardModal = document.querySelector('.dashboard-person-popup');

personCardSettings.addEventListener('click', () => {
    personCardModal.classList.remove('dashboard-person-popup-active'); 
});

personCardClose.addEventListener('click', () => {
    personCardModal.classList.add('dashboard-person-popup-active'); 
});
