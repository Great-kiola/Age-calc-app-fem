let yearResult = document.querySelector('.yearResult');
let monthsResult = document.querySelector('.monthResult');
let dayResult = document.querySelector('.daysResult');
let button = document.querySelector('.label');


let daysInput = document.getElementById('days');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');

const form = document.querySelector('form');



const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const months = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate (){
    const inputs = document.querySelectorAll('input');
    
    let validator = true;
    inputs.forEach((i) => {

        const parent = i.parentElement;
        if (!i.value){
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "This field is required.";
            validator = false;
        } else if (monthInput.value > 12){
            monthInput.style.borderColor = "red";
            monthInput.parentElement.querySelector("small").innerText = "Must be a valid month";
            validator = false;
        } else if (daysInput.value > 31){
            daysInput.style.borderColor = "red";
            daysInput.parentElement.querySelector("small").innerText = "Must be a valid day";
            validator = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            validator = true;
        }
    })

    return validator;
}

button.addEventListener('click', (e) => {
    e.preventDefault();

    if (validate()){
        if (daysInput.value > day){
            day = day + months[month - 1];
            month = month - 1;
        }

        if (monthInput.value > month){
            month = month + 12;
            year = year - 1;
        }

        const d = day - daysInput.value;
        const m = month - daysInput.value;
        const y = year - daysInput.value;

        dayResult.innerHTML = d;
        monthsResult.innerHTML = m;
        yearResult.innerHTML = y;


    }

});













