// New year timer =======================


const HTMLyear = document.querySelector('#year');
const HTMLdays = document.querySelector('#days');
const HTMLhours = document.querySelector('#hours');
const HTMLminutes = document.querySelector('#minutes');
const HTMLseconds = document.querySelector('#seconds');

const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCounter() {

    const currentTime = new Date();
    const diff = nextYear - currentTime; /*Остаток в милисикундах до нового года*/

    // Расчеты
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;

    //  Работа с встраиванием в HTML
    HTMLyear.innerText = currentYear + 1;
    HTMLdays.innerText = daysLeft;
    HTMLhours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    HTMLminutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    HTMLseconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

// Update countdown
setInterval(updateCounter, 1000);

// Fake preloader
setTimeout(function () {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);



