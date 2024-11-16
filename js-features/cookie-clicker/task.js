const cookie  = document.getElementById('cookie');
const counter = document.getElementById("clicker__counter");

let current = +counter.textContent; // количество кликов


cookie.addEventListener('click', function() {
    current++;

    counter.innerHTML = current;

    if(current % 2 === 0) {
        cookie.width = 235;
    } else {
        cookie.width = 200;
    }
})