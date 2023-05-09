let yearResult = document.querySelector('.yearResult');
let monthsResult = document.querySelector('.monthResult');
let dayResult = document.querySelector('.daysResult');
let button = document.querySelector('.label');


let daysInput = document.getElementById('days');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');


daysInput.addEventListener('input', () => {
    dayResult.innerText = daysInput.value;
});

monthInput.addEventListener('input', () => {
    monthsResult.innerText = monthInput.value;
});

yearInput.addEventListener('input', () => {
    yearResult.innerText = yearInput.value;
});