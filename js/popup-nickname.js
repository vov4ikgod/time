const cardTitle = document.querySelector('.info-card-title');
const cardPopupTitle = document.querySelector('.info-card-popup-title');
const getData = () => {
    return JSON.parse(localStorage.getItem('defaultName'));
};

const shouData = () => {
    cardTitle.innerHTML = getData().name;
    cardPopupTitle.value = getData().name;
} 

const defaultName = {
    name: 'Your name',
};

if (!getData()) {
    localStorage.setItem('defaultName', JSON.stringify(defaultName));
}

shouData();

cardPopupTitle.addEventListener('input', (event) => {
    localStorage.setItem('defaultName', JSON.stringify({name: event.target.value}));
    shouData();
});