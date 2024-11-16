let currentQuantity = document.getElementById('timer');

let count = +currentQuantity.textContent; // 59
console.log(count);

let timer = setInterval(() => {
    count--;

    currentQuantity.innerHTML = count;

    if(count == 0) {
        alert('Всё ок!');
        clearInterval(timer);
    }

}, 100)